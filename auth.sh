#!/bin/bash -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

(
  export DISPLAY=:0
  cd ${DIR}/

  if [[ ! -f .env ]]; then
    read -p "Enter 'OAuth 2.0 Client ID': " clientId
    stty -echo
    read -p "Enter 'Client Secret': " clientSecret
    echo
    stty echo

    echo "FITBIT_CLIENT_ID=${clientId}" >.env
    echo "FITBIT_CLIENT_SECRET=${clientSecret}" >>.env
  fi

  node auth.js
)

echo "AUTH.SH: Authentication: Done!"
