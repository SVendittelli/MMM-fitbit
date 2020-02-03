#!/bin/bash -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo "AUTH.SH: OAuth 2.0 credentials: Fetch..."
read -p "Enter 'OAuth 2.0 Client ID': " clientId
stty -echo
read -p "Enter 'Client Secret': " clientSecret; echo
stty echo

echo "AUTH.SH: Generate access tokens: Opening web browser..."
cd "${DIR}/python"
DISPLAY=:0 python3 setup_access.py "${clientId}" "${clientSecret}" 2> /dev/null
echo "AUTH.SH: Generate access tokens: Done!"
