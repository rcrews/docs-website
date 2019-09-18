#!/bin/sh

git fetch
git fetch public playbranch

_utils/switchsite.rb stage
RESULT=$?
if [[ RESULT != 1 ]] ; then
    bundle exec jekyll build
    java -jar ../s3sync/s3sync.jar upload --directory _site --bucket 'docs-stage.cloudera.com'
fi

_utils/switchsite.rb dev
RESULT=$?
if [[ RESULT != 1 ]] ; then
    bundle exec jekyll build
    java -jar ../s3sync/s3sync.jar upload --directory _site --bucket 'docs-dev.cloudera.com'
fi

_utils/switchsite.rb prod
RESULT=$?
if [[ RESULT != 1 ]] ; then
    bundle exec jekyll build
    java -jar ../s3sync/s3sync.jar upload --directory _site --bucket 'docs.cloudera.com'
fi
