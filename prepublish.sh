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
BRANCH="release-$PACKAGE_VERSION"
git checkout -b $BRANCH

echo "${GREEN}Pushing tag and release commit to Github...${NC}"
# Push up release branch and tag containing the updated package versions
git push --set-upstream origin $BRANCH --follow-tags

echo "${GREEN}Prepublish complete. Make sure to merge the release branch $BRANCH into master...${NC}"
