#!/bin/bash -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd "${DIR}"

echo "SETUP.SH: Install dependencies: Node.js..."
npm install

echo "SETUP.SH: Install dependencies: Python..."
pip install --quiet --user -r "${DIR}/requirements.txt"

echo "SETUP.SH: Install dependencies: Done!"

echo "SETUP.SH: Store OAuth 2.0 credentials: Fetch..."
echo "Enter 'OAuth 2.0 Client ID' (client_id):"
read client_id

echo "Enter 'Client Secret' (client_secret):"
read client_secret

python "${DIR}/python/iniHandler.py" "${client_id}" "${client_secret}"
echo "SETUP.SH: Store OAuth 2.0 credentials: Done!"

echo "SETUP.SH: Generate access tokens: Opening web browser..."
cd "${DIR}/python"
DISPLAY=:0 python setupAccess.py 2> /dev/null
echo "SETUP.SH: Generate access tokens: Done!"
