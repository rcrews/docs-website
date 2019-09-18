#!/bin/sh

git fetch
git fetch public playbranch

_utils/switchsite.rb stage
bundle exec jekyll build
java -jar ../s3sync/s3sync.jar -d _site -b 'docs-stage.cloudera.com'

_utils/switchsite.rb dev
bundle exec jekyll build
java -jar ../s3sync/s3sync.jar -d _site  -b 'docs-dev.cloudera.com'

_utils/switchsite.rb prod
bundle exec jekyll build
java -jar ../s3sync/s3sync.jar -d _site  -b 'docs.cloudera.com'
