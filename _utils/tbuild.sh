#!/bin/sh
bundle exec jekyll build
aws s3 cp _site/common/js/home.js s3://docs-stage.cloudera.com/common/js/home.js
aws s3 cp _site/common/css/home.css s3://docs-stage.cloudera.com/common/css/home.css
# aws s3 cp _site/index.html s3://docs-stage.cloudera.com/index.html
# aws s3 cp _site/common/js/main.js s3://docs-stage.cloudera.com/common/js/main.js
