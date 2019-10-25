#!/bin/bash
# Script takes about 2.5 hours to complete

START_DIR=$(pwd)
SCRIPT=$(realpath $0)
SCRIPTPATH=$(dirname ${SCRIPT})
WORK_DIR='/Volumes/Philomelus'

if [ -d "${WORK_DIR}" ]; then
    cd "${WORK_DIR}"
    aws s3 sync --quiet --delete 's3://docs.cloudera.com' docs.cloudera.com
    find docs.cloudera.com -type d -empty -delete
    rm -rf jsonify.log facets.log \
           facets.json facets-pretty.json \
           docs.cloudera.com-json.zip \
           docs.cloudera.com-json.tar.bz2 \
           docs.cloudera.com-json

    python3 ${SCRIPTPATH}/python/jsonify.py \
        --titles ${SCRIPTPATH}/python/titles.yaml \
        docs.cloudera.com \
        docs.cloudera.com-json
    python3 ${SCRIPTPATH}/python/facets.py docs.cloudera.com-json
    python3 -m json.tool facets.json facets-pretty.json

    # Delete files we don't want returned in search results
    find docs.cloudera.com-json -name index_html.json \! -path '*/HDCloudAWS/*' \! -path '*/Cloudbreak/*' -delete
    find docs.cloudera.com-json -name index_htm.json -delete
    rm -rf docs.cloudera.com-json/HDPDocuments/HDP1/HDP-Win*
    rm -rf docs.cloudera.com-json/HDPDocuments/HDP2/HDP-*-Win
    rm -rf docs.cloudera.com-json/HDPDocuments/HDP2/HDP-2.3-yj

#    du -sh docs.cloudera.com-json
    tar --disable-copyfile -cyf \
	docs.cloudera.com-json.tar.bz2 docs.cloudera.com-json
#    zip -qDXr docs.cloudera.com-json.zip docs.cloudera.com-json
#    ls -lh *-json.*
    cd ${START_DIR}
fi

for remote in nool yoop ; do
    scp ${WORK_DIR}/docs.cloudera.com-json.tar.bz2 aka${remote}:
    ssh aka${remote} rm -rf docs.cloudera.com-json
    ssh aka${remote} tar --warning=no-unknown-keyword -xf docs.cloudera.com-json.tar.bz2
    curl -L "https://${remote}.td.hortonworks.com:8983/solr/dhc/update?stream.body=<delete><query>*:*</query></delete>&commit=true"

    ssh aka${remote} mv /opt/solr/bin/solr.in.sh /opt/solr/bin/solr.in-ssl.sh
    ssh aka${remote} mv /opt/solr/bin/solr.in-nossl.sh /opt/solr/bin/solr.in.sh
    ssh aka${remote} /opt/solr/bin/solr stop -p 8983
    sleep 180
    ssh aka${remote} /opt/solr/bin/solr start
    sleep 30

    ssh aka${remote} /opt/solr/bin/post -c dhc docs.cloudera.com-json

    ssh aka${remote} mv /opt/solr/bin/solr.in.sh /opt/solr/bin/solr.in-nossl.sh
    ssh aka${remote} mv /opt/solr/bin/solr.in-ssl.sh /opt/solr/bin/solr.in.sh
    ssh aka${remote} /opt/solr/bin/solr stop -p 8983
    sleep 180
    ssh aka${remote} /opt/solr/bin/solr start
done

exit 0
