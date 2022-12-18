#!/bin/bash -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

(
  cd "${DIR}"
  pip3 install --quiet fitbit==0.3.1
  npm install

  # cd fitbit_web_api
  # npm install
)

echo "INIT.SH: Install dependencies: Done!"
