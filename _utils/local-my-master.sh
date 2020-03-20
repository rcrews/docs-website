#!/bin/bash

# s3sync_jar='/Users/rcrews/Sandbox/s3sync/s3sync.jar'
#
# git checkout master
# git fetch cloudera master
# git fetch public playbranch
#
# # https://stackoverflow.com/questions/3878624
# require_clean_work_tree () {
#     # Update the index
#     git update-index -q --ignore-submodules --refresh
#     err=0
#
#     # Disallow unstaged changes in the working tree
#     if ! git diff-files --quiet --ignore-submodules --
#     then
#         echo >&2 "You have unstaged changes."
#         git diff-files --name-status -r --ignore-submodules -- >&2
#         err=1
#     fi
#
#     # Disallow uncommitted changes in the index
#     if ! git diff-index --cached --quiet HEAD --ignore-submodules --
#     then
#         echo >&2 "Your index contains uncommitted changes."
#         git diff-index --cached --name-status -r --ignore-submodules HEAD -- >&2
#         err=1
#     fi
#
#     if [[ $err = 1 ]]
#     then
#         echo >&2 "Please commit or stash them."
#         exit 1
#     fi
# }
# require_clean_work_tree
#
# _utils/switchsite.rb stage
# RESULT=$?
# if [[ RESULT != 1 ]] ; then
#     rm -rf _site/*
#     bundle exec jekyll build --trace
#     java -jar $s3sync_jar upload --directory _site --bucket 'docs-stage.cloudera.com'

    # start tomcat with
    # brew services start tomcat
    LOCAL="${HOME}/Library/Application Support/tomcat@9/webapps/ROOT"
    REMOTE='s3://docs-stage.cloudera.com'
    git checkout my-master
    bundle exec jekyll build --trace
    aws s3 sync ${REMOTE}/apps                                      "${LOCAL}"/apps
    aws s3 sync ${REMOTE}/common/fonts                              "${LOCAL}"/common/fonts
    aws s3 sync ${REMOTE}/common/img                                "${LOCAL}"/common/img
    aws s3 sync ${REMOTE}/content                                   "${LOCAL}"/content
    aws s3 sync ${REMOTE}/etc.clientlibs                            "${LOCAL}"/etc.clientlibs
    aws s3 sync ${REMOTE}/etc                                       "${LOCAL}"/etc
    aws s3 sync ${REMOTE}/libs                                      "${LOCAL}"/libs

    # aws s3 cp ${REMOTE}/best-practices/latest/navigation.json       "${LOCAL}"/best-practices/latest/navigation.json
    # aws s3 cp ${REMOTE}/ccp/2.0.0/navigation.json                   "${LOCAL}"/ccp/2.0.0/navigation.json
    # aws s3 cp ${REMOTE}/ccp/2.0.1/navigation.json                   "${LOCAL}"/ccp/2.0.1/navigation.json
    # aws s3 cp ${REMOTE}/cdf-datahub/7.0.2/navigation.json           "${LOCAL}"/cdf-datahub/7.0.2/navigation.json
    # aws s3 cp ${REMOTE}/cdp/cloud/navigation.json                   "${LOCAL}"/cdp/cloud/navigation.json
    # aws s3 cp ${REMOTE}/cdpdc/7.0/navigation.json                   "${LOCAL}"/cdpdc/7.0/navigation.json
    # aws s3 cp ${REMOTE}/cem/1.0.0/navigation.json                   "${LOCAL}"/cem/1.0.0/navigation.json
    # aws s3 cp ${REMOTE}/cem/1.1.0/navigation.json                   "${LOCAL}"/cem/1.1.0/navigation.json
    # aws s3 cp ${REMOTE}/cem/1.1.1/navigation.json                   "${LOCAL}"/cem/1.1.1/navigation.json
    # aws s3 cp ${REMOTE}/cfm/1.0.0/navigation.json                   "${LOCAL}"/cfm/1.0.0/navigation.json
    # aws s3 cp ${REMOTE}/cfm/1.0.1/navigation.json                   "${LOCAL}"/cfm/1.0.1/navigation.json
    # aws s3 cp ${REMOTE}/cloudera-manager/7.0.0/navigation.json      "${LOCAL}"/cloudera-manager/7.0.0/navigation.json
    # aws s3 cp ${REMOTE}/cloudera-manager/7.0.1/navigation.json      "${LOCAL}"/cloudera-manager/7.0.1/navigation.json
    # aws s3 cp ${REMOTE}/cloudera-manager/7.0.2/navigation.json      "${LOCAL}"/cloudera-manager/7.0.2/navigation.json
    # aws s3 cp ${REMOTE}/cloudera-manager/7.0.3/navigation.json      "${LOCAL}"/cloudera-manager/7.0.3/navigation.json
    # aws s3 cp ${REMOTE}/cloudera-manager/7.1.0/navigation.json      "${LOCAL}"/cloudera-manager/7.1.0/navigation.json
    # aws s3 cp ${REMOTE}/csa/1.1.0/navigation.json                   "${LOCAL}"/csa/1.1.0/navigation.json
    # aws s3 cp ${REMOTE}/csp/1.0.0/navigation.json                   "${LOCAL}"/csp/1.0.0/navigation.json
    # aws s3 cp ${REMOTE}/csp/2.0.0/navigation.json                   "${LOCAL}"/csp/2.0.0/navigation.json
    # aws s3 cp ${REMOTE}/csp/2.0.1/navigation.json                   "${LOCAL}"/csp/2.0.1/navigation.json
    # aws s3 cp ${REMOTE}/data-catalog/cloud/navigation.json          "${LOCAL}"/data-catalog/cloud/navigation.json
    # aws s3 cp ${REMOTE}/data-hub/cloud/navigation.json              "${LOCAL}"/data-hub/cloud/navigation.json
    # aws s3 cp ${REMOTE}/data-warehouse/cloud/navigation.json        "${LOCAL}"/data-warehouse/cloud/navigation.json
    # aws s3 cp ${REMOTE}/documentation/other/navigation.json         "${LOCAL}"/documentation/other/navigation.json
    # aws s3 cp ${REMOTE}/HDPDocuments/Ambari-2.7.0.0/navigation.json "${LOCAL}"/HDPDocuments/Ambari-2.7.0.0/navigation.json
    # aws s3 cp ${REMOTE}/HDPDocuments/Ambari-2.7.1.0/navigation.json "${LOCAL}"/HDPDocuments/Ambari-2.7.1.0/navigation.json
    # aws s3 cp ${REMOTE}/HDPDocuments/Ambari-2.7.3.0/navigation.json "${LOCAL}"/HDPDocuments/Ambari-2.7.3.0/navigation.json
    # aws s3 cp ${REMOTE}/HDPDocuments/Ambari-2.7.4.0/navigation.json "${LOCAL}"/HDPDocuments/Ambari-2.7.4.0/navigation.json
    # aws s3 cp ${REMOTE}/HDPDocuments/Ambari-2.7.5.0/navigation.json "${LOCAL}"/HDPDocuments/Ambari-2.7.5.0/navigation.json
    # aws s3 cp ${REMOTE}/machine-learning/cloud/navigation.json      "${LOCAL}"/machine-learning/cloud/navigation.json
    # aws s3 cp ${REMOTE}/management-console/cloud/navigation.json    "${LOCAL}"/management-console/cloud/navigation.json
    # aws s3 cp ${REMOTE}/replication-manager/cloud/navigation.json   "${LOCAL}"/replication-manager/cloud/navigation.json
    # aws s3 cp ${REMOTE}/runtime/7.0.0/navigation.json               "${LOCAL}"/runtime/7.0.0/navigation.json
    # aws s3 cp ${REMOTE}/runtime/7.0.1/navigation.json               "${LOCAL}"/runtime/7.0.1/navigation.json
    # aws s3 cp ${REMOTE}/runtime/7.0.2/navigation.json               "${LOCAL}"/runtime/7.0.2/navigation.json
    # aws s3 cp ${REMOTE}/runtime/7.0.3/navigation.json               "${LOCAL}"/runtime/7.0.3/navigation.json
    # aws s3 cp ${REMOTE}/runtime/7.1.0/navigation.json               "${LOCAL}"/runtime/7.1.0/navigation.json
    # aws s3 cp ${REMOTE}/smm/1.0.0/navigation.json                   "${LOCAL}"/smm/1.0.0/navigation.json
    # aws s3 cp ${REMOTE}/smm/1.1.0/navigation.json                   "${LOCAL}"/smm/1.1.0/navigation.json
    # aws s3 cp ${REMOTE}/smm/1.2.0/navigation.json                   "${LOCAL}"/smm/1.2.0/navigation.json
    # aws s3 cp ${REMOTE}/smm/1.2.1/navigation.json                   "${LOCAL}"/smm/1.2.1/navigation.json
    # aws s3 cp ${REMOTE}/smm/2.0.0/navigation.json                   "${LOCAL}"/smm/2.0.0/navigation.json
    # aws s3 cp ${REMOTE}/srm/1.0.0/navigation.json                   "${LOCAL}"/srm/1.0.0/navigation.json
    # aws s3 cp ${REMOTE}/workload-manager/cloud/navigation.json      "${LOCAL}"/workload-manager/cloud/navigation.json

    aws s3 sync ${REMOTE}/cdp                                       "${LOCAL}"/cdp
    aws s3 sync ${REMOTE}/cdf-datahub                               "${LOCAL}"/cdf-datahub
    aws s3 sync ${REMOTE}/cfm                                       "${LOCAL}"/cfm
    aws s3 sync ${REMOTE}/management-console                        "${LOCAL}"/management-console

    rsync -ChivrlpgoDHAXc _site/                                    "${LOCAL}"
#     git checkout master
# fi
#
# _utils/switchsite.rb dev
# RESULT=$?
# if [[ RESULT != 1 ]] ; then
#     rm -rf _site/*
#     bundle exec jekyll build --trace
#     java -jar $s3sync_jar upload --directory _site --bucket 'docs-dev.cloudera.com'
# fi
#
# _utils/switchsite.rb prod
# RESULT=$?
# if [[ RESULT != 1 ]] ; then
#     rm -rf _site/*
#     bundle exec jekyll build --trace
#     java -jar $s3sync_jar upload --directory _site --bucket 'docs.cloudera.com'
# fi
#
# _utils/switchsite.rb stage
#
# aws cloudfront create-invalidation --distribution-id E8CUP7Y9RHWIX --paths '/*'
#
# git checkout my-master
