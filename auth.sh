#!/bin/bash -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo "AUTH.SH: OAuth 2.0 credentials: Fetch..."
echo "Enter 'OAuth 2.0 Client ID' (clientId):"
read clientId

echo "Enter 'Client Secret' (clientSecret):"
read clientSecret

echo "AUTH.SH: Generate access tokens: Opening web browser..."
cd "${DIR}/python"
DISPLAY=:0 python3 setup_access.py "${clientId}" "${clientSecret}" 2> /dev/null
echo "AUTH.SH: Generate access tokens: Done!"
