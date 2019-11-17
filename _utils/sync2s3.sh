#!/bin/sh

git checkout master
git fetch cloudera master
git fetch public playbranch

# https://stackoverflow.com/questions/3878624
require_clean_work_tree () {
    # Update the index
    git update-index -q --ignore-submodules --refresh
    err=0

    # Disallow unstaged changes in the working tree
    if ! git diff-files --quiet --ignore-submodules --
    then
        echo >&2 "You have unstaged changes."
        git diff-files --name-status -r --ignore-submodules -- >&2
        err=1
    fi

    # Disallow uncommitted changes in the index
    if ! git diff-index --cached --quiet HEAD --ignore-submodules --
    then
        echo >&2 "Your index contains uncommitted changes."
        git diff-index --cached --name-status -r --ignore-submodules HEAD -- >&2
        err=1
    fi

    if [[ $err = 1 ]]
    then
        echo >&2 "Please commit or stash them."
        exit 1
    fi
}
require_clean_work_tree

_utils/switchsite.rb stage
RESULT=$?
if [[ RESULT != 1 ]] ; then
    bundle exec jekyll build --trace
    java -jar ../s3sync/s3sync.jar upload --directory _site --bucket 'docs-stage.cloudera.com'

    # start tomcat with
    # brew services start tomcat
    LOCAL_ROOT="${HOME}/Library/Application Support/tomcat@9/webapps/ROOT"
    git checkout my-master
    bundle exec jekyll build --trace
    aws s3 sync s3://docs-stage.cloudera.com/apps ${LOCAL_ROOT}/apps
    aws s3 sync s3://docs-stage.cloudera.com/cdp ${LOCAL_ROOT}/cdp
    aws s3 sync s3://docs-stage.cloudera.com/common/fonts ${LOCAL_ROOT}/common/fonts
    aws s3 sync s3://docs-stage.cloudera.com/common/img ${LOCAL_ROOT}/common/img
    rsync -ChivaHAXc _site/ ${LOCAL_ROOT}
    git checkout master
fi

_utils/switchsite.rb dev
RESULT=$?
if [[ RESULT != 1 ]] ; then
    bundle exec jekyll build --trace
    java -jar ../s3sync/s3sync.jar upload --directory _site --bucket 'docs-dev.cloudera.com'
fi

_utils/switchsite.rb prod
RESULT=$?
if [[ RESULT != 1 ]] ; then
    bundle exec jekyll build --trace
    java -jar ../s3sync/s3sync.jar upload --directory _site --bucket 'docs.cloudera.com'
fi

_utils/switchsite.rb stage

aws cloudfront create-invalidation --distribution-id E8CUP7Y9RHWIX --paths '/*'

git checkout my-master
