#!/bin/bash -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo "AUTH.SH: OAuth 2.0 credentials: Fetch..."
echo "Enter 'OAuth 2.0 Client ID' (client_id):"
read client_id

echo "Enter 'Client Secret' (client_secret):"
read client_secret

echo "AUTH.SH: Generate access tokens: Opening web browser..."
cd "${DIR}/python"
DISPLAY=:0 python setup_access.py "${client_id}" "${client_secret}" 2> /dev/null
echo "AUTH.SH: Generate access tokens: Done!"
