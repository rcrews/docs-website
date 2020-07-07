#!/bin/zsh
emulate -LR zsh
setopt ERR_EXIT
export PATH=/usr/bin:/bin:/usr/sbin:/sbin

source ~/.rvm/scripts/rvm
rvm 2.6.6@docs-website

# s3sync_jar='/Users/rcrews/Sandbox/s3sync/s3sync.jar'
#
# /usr/local/bin/git checkout master
# /usr/local/bin/git fetch origin master
# /usr/local/bin/git fetch public playbranch
#
# # https://stackoverflow.com/questions/3878624
# require_clean_work_tree () {
#     # Update the index
#     /usr/local/bin/git update-index -q --ignore-submodules --refresh
#     err=0
#
#     # Disallow unstaged changes in the working tree
#     if ! /usr/local/bin/git diff-files --quiet --ignore-submodules --
#     then
#         echo >&2 "You have unstaged changes."
#         /usr/local/bin/git diff-files --name-status -r --ignore-submodules -- >&2
#         err=1
#     fi
#
#     # Disallow uncommitted changes in the index
#     if ! /usr/local/bin/git diff-index --cached --quiet HEAD --ignore-submodules --
#     then
#         echo >&2 "Your index contains uncommitted changes."
#         /usr/local/bin/git diff-index --cached --name-status -r --ignore-submodules HEAD -- >&2
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
# if _utils/switchsite.rb stage
# then
#     bundle exec jekyll clean
#     bundle exec jekyll build --trace
#     java -jar $s3sync_jar upload --directory _site --bucket 'docs-stage.cloudera.com'

    # start tomcat with
    # brew services start tomcat
    LOCAL="${HOME}/Library/Application Support/tomcat@9/webapps/ROOT"
    REMOTE='s3://docs-stage.cloudera.com'
    /usr/local/bin/git checkout my-master
    bundle exec jekyll clean
    bundle exec jekyll build --trace
    /usr/local/bin/aws s3 sync ${REMOTE}/apps                                      "${LOCAL}"/apps
    /usr/local/bin/aws s3 sync ${REMOTE}/common/fonts                              "${LOCAL}"/common/fonts
    /usr/local/bin/aws s3 sync ${REMOTE}/common/img                                "${LOCAL}"/common/img
    /usr/local/bin/aws s3 sync ${REMOTE}/content                                   "${LOCAL}"/content
    /usr/local/bin/aws s3 sync ${REMOTE}/etc.clientlibs                            "${LOCAL}"/etc.clientlibs
    /usr/local/bin/aws s3 sync ${REMOTE}/etc                                       "${LOCAL}"/etc
    /usr/local/bin/aws s3 sync ${REMOTE}/libs                                      "${LOCAL}"/libs

    # /usr/local/bin/aws s3 cp ${REMOTE}/best-practices/latest/navigation.json       "${LOCAL}"/best-practices/latest/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/ccp/2.0.0/navigation.json                   "${LOCAL}"/ccp/2.0.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/ccp/2.0.1/navigation.json                   "${LOCAL}"/ccp/2.0.1/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cdf-datahub/7.0.2/navigation.json           "${LOCAL}"/cdf-datahub/7.0.2/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cdp/latest/navigation.json                  "${LOCAL}"/cdp/latest/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cdpdc/7.0/navigation.json                   "${LOCAL}"/cdpdc/7.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cem/1.0.0/navigation.json                   "${LOCAL}"/cem/1.0.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cem/1.1.0/navigation.json                   "${LOCAL}"/cem/1.1.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cem/1.1.1/navigation.json                   "${LOCAL}"/cem/1.1.1/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cfm/1.0.0/navigation.json                   "${LOCAL}"/cfm/1.0.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cfm/1.0.1/navigation.json                   "${LOCAL}"/cfm/1.0.1/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cloudera-manager/7.0.0/navigation.json      "${LOCAL}"/cloudera-manager/7.0.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cloudera-manager/7.0.1/navigation.json      "${LOCAL}"/cloudera-manager/7.0.1/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cloudera-manager/7.0.2/navigation.json      "${LOCAL}"/cloudera-manager/7.0.2/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cloudera-manager/7.0.3/navigation.json      "${LOCAL}"/cloudera-manager/7.0.3/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cloudera-manager/7.1.0/navigation.json      "${LOCAL}"/cloudera-manager/7.1.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cloudera-manager/7.1.1/navigation.json      "${LOCAL}"/cloudera-manager/7.1.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/cloudera-manager/7.2.0/navigation.json      "${LOCAL}"/cloudera-manager/7.1.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/csa/1.1.0/navigation.json                   "${LOCAL}"/csa/1.1.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/csp/1.0.0/navigation.json                   "${LOCAL}"/csp/1.0.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/csp/2.0.0/navigation.json                   "${LOCAL}"/csp/2.0.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/csp/2.0.1/navigation.json                   "${LOCAL}"/csp/2.0.1/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/data-catalog/cloud/navigation.json          "${LOCAL}"/data-catalog/cloud/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/data-hub/cloud/navigation.json              "${LOCAL}"/data-hub/cloud/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/data-warehouse/cloud/navigation.json        "${LOCAL}"/data-warehouse/cloud/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/documentation/other/navigation.json         "${LOCAL}"/documentation/other/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/HDPDocuments/Ambari-2.7.0.0/navigation.json "${LOCAL}"/HDPDocuments/Ambari-2.7.0.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/HDPDocuments/Ambari-2.7.1.0/navigation.json "${LOCAL}"/HDPDocuments/Ambari-2.7.1.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/HDPDocuments/Ambari-2.7.3.0/navigation.json "${LOCAL}"/HDPDocuments/Ambari-2.7.3.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/HDPDocuments/Ambari-2.7.4.0/navigation.json "${LOCAL}"/HDPDocuments/Ambari-2.7.4.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/HDPDocuments/Ambari-2.7.5.0/navigation.json "${LOCAL}"/HDPDocuments/Ambari-2.7.5.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/machine-learning/cloud/navigation.json      "${LOCAL}"/machine-learning/cloud/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/management-console/cloud/navigation.json    "${LOCAL}"/management-console/cloud/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/replication-manager/cloud/navigation.json   "${LOCAL}"/replication-manager/cloud/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/runtime/7.0.0/navigation.json               "${LOCAL}"/runtime/7.0.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/runtime/7.0.1/navigation.json               "${LOCAL}"/runtime/7.0.1/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/runtime/7.0.2/navigation.json               "${LOCAL}"/runtime/7.0.2/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/runtime/7.0.3/navigation.json               "${LOCAL}"/runtime/7.0.3/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/runtime/7.1.0/navigation.json               "${LOCAL}"/runtime/7.1.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/runtime/7.1.1/navigation.json               "${LOCAL}"/runtime/7.1.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/runtime/7.2.0/navigation.json               "${LOCAL}"/runtime/7.1.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/smm/1.0.0/navigation.json                   "${LOCAL}"/smm/1.0.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/smm/1.1.0/navigation.json                   "${LOCAL}"/smm/1.1.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/smm/1.2.0/navigation.json                   "${LOCAL}"/smm/1.2.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/smm/1.2.1/navigation.json                   "${LOCAL}"/smm/1.2.1/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/smm/2.0.0/navigation.json                   "${LOCAL}"/smm/2.0.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/srm/1.0.0/navigation.json                   "${LOCAL}"/srm/1.0.0/navigation.json
    # /usr/local/bin/aws s3 cp ${REMOTE}/workload-manager/cloud/navigation.json      "${LOCAL}"/workload-manager/cloud/navigation.json

    /usr/local/bin/aws s3 sync ${REMOTE}/cdp                                       "${LOCAL}"/cdp
    /usr/local/bin/aws s3 sync ${REMOTE}/cdf-datahub                               "${LOCAL}"/cdf-datahub
    /usr/local/bin/aws s3 sync ${REMOTE}/cfm                                       "${LOCAL}"/cfm
    /usr/local/bin/aws s3 sync ${REMOTE}/management-console                        "${LOCAL}"/management-console
    /usr/local/bin/aws s3 sync ${REMOTE}/runtime/7.1.1                             "${LOCAL}"/runtime/7.1.1
    /usr/local/bin/aws s3 sync ${REMOTE}/cloudera-manager/7.1.1                    "${LOCAL}"/cloudera-manager/7.1.1

    /usr/local/bin/rsync -ChivrlpgoDHAXc _site/                                    "${LOCAL}"
#     /usr/local/bin/git checkout master
# fi
#
# if _utils/switchsite.rb dev
# then
#     bundle exec jekyll clean
#     bundle exec jekyll build --trace
#     java -jar $s3sync_jar upload --directory _site --bucket 'docs-dev.cloudera.com'
# fi
#
# if _utils/switchsite.rb prod
# then
#     bundle exec jekyll clean
#     bundle exec jekyll build --trace
#     java -jar $s3sync_jar upload --directory _site --bucket 'docs.cloudera.com'
# fi
#
# _utils/switchsite.rb stage
#
# /usr/local/bin/aws cloudfront create-invalidation --distribution-id E8CUP7Y9RHWIX --paths '/*'
#
# /usr/local/bin/git checkout my-master
