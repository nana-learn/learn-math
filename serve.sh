#!/bin/sh
cd "$(dirname "$0")/web"
port="${PORT:-8090}"
echo "Học Toán 9 → http://127.0.0.1:${port}/"
exec python3 -m http.server "$port" --bind 127.0.0.1
