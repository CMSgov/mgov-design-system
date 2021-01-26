#!/bin/sh

set -eo pipefail

RED="\033[0;31m"
GREEN='\033[0;32m'
NC='\033[0m' # No color

echo "${GREEN}Pulling latest from GitHub...${NC}"
git checkout master
git pull

echo "${GREEN}Cleaning directory and fresh installing...${NC}"
git clean -fdx
yarn install

echo "${GREEN}Building files and running tests...${NC}"
yarn test
yarn build

echo "${GREEN}Bumping version and creating a git tagged release commit...${NC}"
yarn version
PACKAGE_VERSION=$(node -pe "require('./package.json').version")
git commit -m "Bump package version to $PACKAGE_VERSION"

echo "${GREEN}Pushing tag commit to Github...${NC}"
TAG="v$PACKAGE_VERSION"

# Push up release git tag containing the updated package versions
git push --set-upstream origin $TAG

echo "${GREEN}Prepublish complete.${NC}"
