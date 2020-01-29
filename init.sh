#!/bin/bash -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd "${DIR}"

echo "INIT.SH: Install dependencies: Node.js..."
npm install

echo "INIT.SH: Install dependencies: Python..."
python3 -m pip install --quiet --user -r "${DIR}/requirements.txt"

echo "INIT.SH: Install dependencies: Done!"
