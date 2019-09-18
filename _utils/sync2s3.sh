#!/bin/sh

git fetch
git fetch public playbranch

if [[ !$(_utils/switchsite.rb stage) ]] ; then
    bundle exec jekyll build
    java -jar ../s3sync/s3sync.jar -d _site -b 'docs-stage.cloudera.com'
fi

if [[ !$(_utils/switchsite.rb dev) ]] ; then
    bundle exec jekyll build
    java -jar ../s3sync/s3sync.jar -d _site  -b 'docs-dev.cloudera.com'
fi

if [[ !$(_utils/switchsite.rb prod) ]] ; then
    bundle exec jekyll build
    java -jar ../s3sync/s3sync.jar -d _site  -b 'docs.cloudera.com'
fi
