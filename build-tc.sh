#!/bin/bash

# Installing yarn
YARN_VERSION="0.23.4"
YARN_LOCATION="tools/${YARN_VERSION}"

if [ ! -d "$YARN_LOCATION" ]; then
	mkdir -p ${YARN_LOCATION}
	cd ${YARN_LOCATION}/
	wget -qO- https://github.com/yarnpkg/yarn/releases/download/v${YARN_VERSION}/yarn-v${YARN_VERSION}.tar.gz | tar zvx
	cd ../..
fi

# Installing packages via yarn

${YARN_LOCATION}/dist/bin/yarn

# Building the client-side assets

${YARN_LOCATION}/dist/bin/yarn build
