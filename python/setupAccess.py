#!/usr/bin/env python
# Adapted from `gather_key_oauth2.py`
# included with https://github.com/orcasgit/python-fitbit

from iniHandler import ReadCredentials, WriteTokens
from oauthlib.oauth2.rfc6749.errors import MismatchingStateError, MissingTokenError
from fitbit.api import FitbitOauth2Client
import cherrypy
import sys
import threading
import traceback
import webbrowser

if (sys.version_info >= (3, 0)):
    from urllib.parse import urlparse
else:
    from urlparse import urlparse


class OAuth2Server:
    def __init__(self, client_id, client_secret,
                 redirect_uri='http://127.0.0.1:8888/'):
        """ Initialize the FitbitOauth2Client """
        self.redirect_uri = redirect_uri
        self.success_html = """
            <style>
            h1 {text-align:center;}
            h3 {text-align:center;}
            </style>
            <h1>You are now authorised to access the Fitbit API!</h1>
            <br/><h3>You can close this window</h3>"""
        self.failure_html = """
            <style> h1 {text-align:center;} </style>
            <h1>ERROR: %s</h1><br/><h3>You can close this window</h3>%s"""
        self.oauth = FitbitOauth2Client(client_id, client_secret)

    def browser_authorize(self):
        """
        Open a browser to the authorization url and spool up a CherryPy
        server to accept the response
        """
        url, _ = self.oauth.authorize_token_url(redirect_uri=self.redirect_uri)
        # Open the web browser in a new thread for command-line browser support
        threading.Timer(1, webbrowser.open, args=(url,)).start()

        # Same with redirect_uri hostname and port.
        urlparams = urlparse(self.redirect_uri)
        cherrypy.config.update({'server.socket_host': urlparams.hostname,
                                'server.socket_port': urlparams.port})

        cherrypy.quickstart(self)

    @cherrypy.expose
    def index(self, state, code=None, error=None):
        """
        Receive a Fitbit response containing a verification code. Use the code
        to fetch the access_token.
        """
        error = None
        if code:
            try:
                self.oauth.fetch_access_token(code, self.redirect_uri)
            except MissingTokenError:
                error = self._fmt_failure(
                    'Missing access token parameter.</br>Please check that '
                    'you are using the correct client_secret')
            except MismatchingStateError:
                error = self._fmt_failure('CSRF Warning! Mismatching state')
        else:
            error = self._fmt_failure('Unknown error while authenticating')
        # Use a thread to shutdown cherrypy so we can return HTML first
        self._shutdown_cherrypy()
        return error if error else self.success_html

    def _fmt_failure(self, message):
        tb = traceback.format_tb(sys.exc_info()[2])
        tb_html = '<pre>%s</pre>' % ('\n'.join(tb)) if tb else ''
        return self.failure_html % (message, tb_html)

    def _shutdown_cherrypy(self):
        """ Shutdown cherrypy in one second, if it's running """
        if cherrypy.engine.state == cherrypy.engine.states.STARTED:
            threading.Timer(1, cherrypy.engine.exit).start()


if __name__ == '__main__':
    id, secret = ReadCredentials()

    server = OAuth2Server(id, secret)
    server.browser_authorize()

    token_creds = server.oauth.session.token

    acc_tok = token_creds['access_token']
    ref_tok = token_creds['refresh_token']
    expires_at = int(token_creds['expires_at'])

    WriteTokens(acc_tok, ref_tok, expires_at)
