#!/bin/bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
nvm install
nvm use

npm install -g yarn

# Installing packages via yarn

echo "INSTALLING PRODUCTION DEPENDENCIES"
yarn dist

echo "INSTALLING BUILD DEPENDENCIES"
yarn install

echo "TRANSPILING"
yarn compile

echo "BUNDLING AND UPLOADING TO RIFFRAFF"
yarn riffraff
