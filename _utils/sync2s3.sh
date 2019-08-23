#!/bin/sh

cd /Home/rcrews/Sandbox/docs-website
git checkout dev
git pull
bundle exec jekyll build
#aws s3 sync --quiet --size-only _site/ s3://docs-dev.cloudera.com

cd /Home/rcrews/Sandbox/docs-website
git checkout playbranch
git pull public playbranch
git pull cloudera playbranch
bundle exec jekyll build
#aws s3 sync --quiet --size-only _site/ s3://docs-stage.cloudera.com

cd /Home/rcrews/Sandbox/docs-website
git checkout master
git pull
bundle exec jekyll build
#aws s3 sync --size-only _site/ s3://docs.hortonworks.com

cd /Home/rcrews/Sandbox/docs-website
git checkout prod
git pull
bundle exec jekyll build
#aws s3 sync --size-only _site/ s3://docs.cloudera.com
