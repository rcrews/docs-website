#!/bin/sh

aws s3 rm --recursive s3://docs-dev.cloudera.com/runtime-dc/master/
aws s3 rm --recursive s3://docs-dev.cloudera.com/runtime-dc/7.0.3/
aws s3 rm --recursive s3://docs-stage.cloudera.com/runtime-dc/7.0.3/
aws s3 rm --recursive s3://docs.cloudera.com/runtime-dc/7.0.3/

aws s3 cp --recursive s3://docs-dev.cloudera.com/runtime/master/ s3://docs-dev.cloudera.com/runtime-dc/master/
aws s3 mv s3://docs-dev.cloudera.com/runtime/7.0.3/ s3://docs-dev.cloudera.com/runtime-dc/7.0.3/
aws s3 mv s3://docs-stage.cloudera.com/runtime/7.0.3/ s3://docs-stage.cloudera.com/runtime-dc/7.0.3/
aws s3 mv s3://docs.cloudera.com/runtime/7.0.3/ s3://docs.cloudera.com/runtime-dc/7.0.3/

aws s3 rm --recursive s3://docs-dev.cloudera.com/cloudera-manager-dc/master/
aws s3 rm --recursive s3://docs-dev.cloudera.com/cloudera-manager-dc/7.0.3/
aws s3 rm --recursive s3://docs-stage.cloudera.com/cloudera-manager-dc/7.0.3/
aws s3 rm --recursive s3://docs.cloudera.com/cloudera-manager-dc/7.0.3/

aws s3 cp --recursive s3://docs-dev.cloudera.com/cloudera-manager/master/ s3://docs-dev.cloudera.com/cloudera-manager-dc/master/
aws s3 mv s3://docs-dev.cloudera.com/cloudera-manager/7.0.3/ s3://docs-dev.cloudera.com/cloudera-manager-dc/7.0.3/
aws s3 mv s3://docs-stage.cloudera.com/cloudera-manager/7.0.3/ s3://docs-stage.cloudera.com/cloudera-manager-dc/7.0.3/
aws s3 mv s3://docs.cloudera.com/cloudera-manager/7.0.3/ s3://docs.cloudera.com/cloudera-manager-dc/7.0.3/
