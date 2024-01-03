#!/bin/bash

yarn install
cd nextjs
yarn install
npx open-next@^2 build
cd ..
