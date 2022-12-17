#!/bin/bash -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

(
  cd "${DIR}"
  npm install
  yarn build
  pip3 install --quiet fitbit==0.3.1
)

echo "INIT.SH: Install dependencies: Done!"
