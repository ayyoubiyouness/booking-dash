#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Build the project
npm install
npm run build

# Define variables
HOSTINGER_FTP_HOST=ftp://haya-tech.net
HOSTINGER_FTP_USER=u203255105
HOSTINGER_FTP_PASSWORD=8ELNNkab!y_FtMa
REMOTE_DIR=/public_html/hello

# Upload build files to Hostinger
lftp -u $HOSTINGER_FTP_USER,$HOSTINGER_FTP_PASSWORD $HOSTINGER_FTP_HOST <<EOF
mirror -R -X .git/ -X node_modules/ -X .github/ ./build $REMOTE_DIR
bye
EOF