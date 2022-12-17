#!/bin/bash -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

(
  export DISPLAY=:0
  cd ${DIR}/
  node auth.js
)
