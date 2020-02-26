echo CLEANUP PHASE

if [[ $# -eq 0 || $1 != "--skip-node-modules" ]]
  then
	  # echo find . -name "node_modules" -exec rm -rf '{}' +
    # find . -name "node_modules" -exec rm -rf '{}' +
		rm -rf ./apps/angular-site/node_modules
		rm -rf ./libs/fbp-shared/node_modules
		rm -rf ./libs/fbp-basic/node_modules
		rm -rf ./libs/fbp-material/node_modules
		rm -rf ./libs/fbp-nodes/node_modules
		rm -rf ./libs/fbp-framework/node_modules
		rm -rf ./libs/fbp-nodes-material/node_modules
else
  echo "SKIPPING NODE-MODULES"
fi

# REMOVE
echo cd ./apps/angular-site
cd ./apps/angular-site

echo yarn unlink @scaljeri/fbp-shared
yarn unlink @scaljeri/fbp-shared
echo yarn unlink @scaljeri/fbp-basic
yarn unlink @scaljeri/fbp-basic
echo yarn unlink @scaljeri/fbp-material
yarn unlink @scaljeri/fbp-material

cd ../../libs

echo cd ./fbp-framework
cd ./fbp-framework
echo yarn unlink @scaljeri/fbp-shared
yarn unlink @scaljeri/fbp-shared
echo yarn unlink
yarn unlink

echo cd ../fbp-nodes
cd ../fbp-nodes
echo yarn unlink @scaljeri/fbp-shared
yarn unlink @scaljeri/fbp-shared
echo yarn unlink
yarn unlink

echo cd ../fbp-shared
cd ../fbp-shared
echo yarn unlink
yarn unlink

echo cd fbp-nodes-material
cd ../fbp-nodes-material
echo yarn unlink
yarn unlink

# LINK
echo SETUP PHASE

echo FBP-SHARED
cd ../fbp-shared
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

echo FBP-NODES
echo cd ../fbp-nodes
cd ../fbp-nodes
echo yarn link
yarn link
echo yarn
yarn
echo yarn link @scaljeri/fbp-shared
yarn link @scaljeri/fbp-shared
echo yarn build
yarn build

echo FBP-NODES-MATERIAL
echo cd ../fbp-nodes-material
cd ../fbp-nodes-material
echo yarn link
yarn link
echo yarn
yarn
echo yarn link @scaljeri/fbp-shared
yarn link @scaljeri/fbp-shared
echo yarn build
yarn build

echo FBP-MATERIAL
echo cd ../fbp-material
cd ../fbp-material
echo yarn link
yarn link
echo yarn
yarn
echo yarn link @scaljeri/fbp-shared
yarn link @scaljeri/fbp-shared
echo yarn link @scaljeri/fbp-nodes
yarn link @scaljeri/fbp-nodes
echo yarn link @scaljeri/fbp-nodes-material
yarn link @scaljeri/fbp-nodes-material
echo yarn link @scaljeri/fbp-framework
yarn link @scaljeri/fbp-framework
echo yarn build
yarn build

echo FBP-BASIC
echo cd ../fbp-basic
cd ../fbp-basic
echo yarn link
yarn link
echo yarn
yarn
echo yarn link @scaljeri/fbp-shared
yarn link @scaljeri/fbp-shared
echo yarn link @scaljeri/fbp-framework
yarn link @scaljeri/fbp-framework
echo yarn link @scaljeri/fbp-nodes
yarn link @scaljeri/fbp-nodes
echo yarn build
yarn build

# APPS

cd ../../apps

echo ANGULAR-SITE
echo cd ./angular-site
cd ./angular-site
echo yarn link @scaljeri/fbp-shared
yarn link @scaljeri/fbp-shared
echo yarn link @scaljeri/fbp-material
yarn link @scaljeri/fbp-material
echo yarn link @scaljeri/fbp-basic
yarn link @scaljeri/fbp-basic
echo yarn
yarn
