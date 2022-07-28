#!/bin/bash

FORMAT=cjs nx build libs-ui-nft-react-hooks --updateBuildableProjectDepsInPackageJson=false --skip-nx-cache && node tools/build-lib-nft-hooks/makeMainCjs.js && FORMAT=esm nx build libs-ui-nft-react-hooks --updateBuildableProjectDepsInPackageJson=false  --skip-nx-cache && node tools/build-lib-nft-hooks/cpMainCjs.js && yarn build:lib:nft:hooks:dist:prep
