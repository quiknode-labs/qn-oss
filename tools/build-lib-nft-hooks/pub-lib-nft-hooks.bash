#!/bin/bash

yarn build:lib:nft:hooks
cd dist/packages/libs/ui/nft-react-hooks
npm publish --access public

