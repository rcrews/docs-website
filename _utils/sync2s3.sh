#!/bin/sh

cd /Users/rcrews/Sandbox/docs-website
git checkout prod
git fetch
bundle exec jekyll build
aws s3 sync --size-only _site/ s3://docs.cloudera.com

cd /Users/rcrews/Sandbox/docs-website
git checkout playbranch
git fetch public playbranch
git fetch cloudera playbranch
bundle exec jekyll build
aws s3 sync --size-only _site/ s3://docs-stage.cloudera.com

cd /Users/rcrews/Sandbox/docs-website
git checkout dev
git fetch
bundle exec jekyll build
aws s3 sync --size-only _site/ s3://docs-dev.cloudera.com
