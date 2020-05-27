#!/bin/dash
set -e -x

bundle exec jekyll build --trace
aws s3 cp _site/common/js/main.js s3://docs-dev.cloudera.com/common/js/main.js
# aws s3 cp _site/common/css/home.css s3://docs-dev.cloudera.com/common/css/home.css
# aws s3 cp _site/index.html s3://docs-stage.cloudera.com/index.html
# aws s3 cp _site/common/js/main.js s3://docs-stage.cloudera.com/common/js/main.js
