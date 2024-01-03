#!/bin/bash

# Read the content of global.css file
yarn install
cd nextjs
yarn install
npx open-next@^2 build
cd ..