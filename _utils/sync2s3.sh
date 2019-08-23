#!/bin/sh

cd /Home/rcrews/Sandbox/docs-website
git checkout dev
bundle exec jekyll build
aws s3 sync --quiet --size-only _site/ s3://docs-dev.cloudera.com

cd /Home/rcrews/Sandbox/docs-website
git checkout playbranch
bundle exec jekyll build
aws s3 sync --quiet --size-only _site/ s3://docs-stage.cloudera.com

cd /Home/rcrews/Sandbox/docs-website
git checkout prod
bundle exec jekyll build
#aws s3 sync --size-only _site/ s3://docs.cloudera.com
