#! /bin/bash

echo CLEANUP PHASE

echo find . -name "node_modules" -exec rm -rf '{}' +
find . -name "node_modules" -exec rm -rf '{}' +

# REMOVE
echo cd packages/angular-site
cd packages/angular-site

echo yarn unlink @scaljeri/fbp-shared
yarn unlink @scaljeri/fbp-shared
echo yarn unlink @scaljeri/fbp-framework
yarn unlink @scaljeri/fbp-framework
echo yarn unlink @scaljeri/fbp-blocks
yarn unlink @scaljeri/fbp-blocks

echo cd ../fbp-framework
cd ../fbp-framework
echo yarn unlink @scaljeri/fbp-shared
yarn unlink @scaljeri/fbp-shared
echo yarn unlink
yarn unlink

echo cd ../fbp-blocks
cd ../fbp-blocks
echo yarn unlink @scaljeri/fbp-shared
yarn unlink @scaljeri/fbp-shared
echo yarn unlink
yarn unlink

echo cd ../fbp-shared
cd ../fbp-shared
echo yarn unlink
yarn unlink

# LINK
echo SETUP PHASE

echo FBP-SHARED
echo yarn link
yarn link
echo yarn
yarn
echo yarn build
yarn build

echo FBP-FRAMEWORK
echo cd ../fbp-framework
cd ../fbp-framework
echo yarn link
yarn link
echo yarn
yarn
echo yarn link @scaljeri/fbp-shared
yarn link @scaljeri/fbp-shared
echo yarn build
yarn build

echo FBP-BLOCKS
echo cd ../fbp-blocks
cd ../fbp-blocks
echo yarn link
yarn link
echo yarn
yarn
echo yarn link @scaljeri/fbp-shared
yarn link @scaljeri/fbp-shared
echo yarn build
yarn build

echo ANGULAR-SITE
echo cd ../angular-site
cd ../angular-site
echo yarn link @scaljeri/fbp-shared
yarn link @scaljeri/fbp-shared
echo yarn link @scaljeri/fbp-framework
yarn link @scaljeri/fbp-framework
echo yarn link @scaljeri/fbp-blocks
yarn link @scaljeri/fbp-blocks
echo yarn
yarn
