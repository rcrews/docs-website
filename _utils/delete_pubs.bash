#!/bin/bash
set -e -x

release="HDP3/HDP-3.0.0"
publications="
    adding-druid
    administration
    ambari-authentication-ldap-ad
    atlas-overview
    audit-ref
    authentication-with-kerberos
    authorization-ranger
    bk_ambari-installation
    bk_ambari-installation-ppc
    bk_release-notes
    bk_workflow-management
    configuring-advanced-security-options-for-ambari
    configuring-atlas
    configuring-hdfs-encryption
    configuring-hive
    configuring-knox-sso
    configuring-proxy-knox
    configuring-ranger-authe-with-unix-ldap-ad
    configuring-spark
    configuring-wire-encryption
    configuring-zeppelin
    configuring-zeppelin-security
    data-operating-system
    data-storage
    developing-spark-applications
    developing-storm-applications
    fault-tolerance
    hbase-data-access
    hdfs-acls
    hive-overview
    hive-workload
    hive-workload-commands
    installing-atlas
    installing-configuring-kafka
    installing-configuring-storm
    installing-knox
    installing-ranger
    installing-ranger-kms
    installing-spark
    installing-zeppelin
    integrating-hive
    kafka-mirroring-data
    kafka-overview
    kafka-working-with-producers-consumers
    kafka-working-with-topics
    managing-auditing
    managing-hive
    materialized-view
    migrating-data
    phoenix-data-access
    ranger-apis
    release-notes
    running-spark-applications
    securing-credentials
    securing-hive
    security-overview
    security-reference
    spark-overview
    starting-hive
    storm-moving-data
    storm-overview
    storm-topologies
    tuning-spark
    using-atlas
    using-druid
    using-hiveql
    using-zeppelin
    zeppelin-overview
    zookeeper-acls
    "
    # bk_cloud-data-access
    # bk_hbase-java-api-reference
    # bk_hive-performance-tuning
    # bk_teradata-connector-user-guide
buckets="
    docs-dev.cloudera.com
    docs-stage.cloudera.com
    docs.cloudera.com
    dev.hortonworks.com
    docs-dev.hortonworks.com
    docs-stage.hortonworks.com
    docs.hortonworks.com
    private-repo-1.hortonworks.com
    "

for bucket in $buckets
do
    for publication in $publications
    do
        aws s3 rm --recursive \
            "s3://${bucket}/HDPDocuments/${release}/${publication}/"
    done
done
