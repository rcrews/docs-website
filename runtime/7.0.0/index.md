---
layout: product
title: Cloudera Runtime
version: 7.0.0
base-path: /runtime/7.0.0/
sections:
  # - title: Release Notes
  #   name: releasenotes
  #   books:

  - title: Concepts & Use Cases
    name: concepts
    books:
      - title: Controlling Data Access Using Metadata Tags
        url: atlas-access-control-using-tags/index.html

      - title: Security Overview
        url: cdp-security-overview/index.html

      # Removed at Sairam's request, July 18
      # - title: cluster-maintenance
      #   url: cluster-maintenance/index.html

      - title: Apache Hive Overview
        url: hive-introduction/index.html

      - title: Hue Introduction
        url: hue-introduction/index.html

      - title: Apache Impala Overview
        url: impala-overview/index.html

      - title: Apache Impala Client
        url: impala-client/index.html

      - title: Apache Impala Monitoring
        url: impala-monitoring/index.html

      - title: Apache Impala Performance
        url: impala-performance/index.html

      - title: Apache Impala Resource Management
        url: impala-resource/index.html

      - title: Apache Impala Scalability
        url: impala-scalability/index.html

      - title: Apache Impala Metadata
        url: impala-metadata/index.html

      - title: Apache Impala Security
        url: impala-security/index.html

      - title: Apache Impala File Formats
        url: impala-file-formats/index.html

      - title: Apache Impala Storage
        url: impala-storage/index.html

      - title: Apache Impala Timeouts
        url: impala-timeouts/index.html

      - title: Apache Kudu Design
        url: kudu-design/index.html

      - title: Apache Kudu Overview
        url: kudu-overview/index.html

      # Removed at Sairam's request, July 18
      # - title: ports-reference
      #   url: ports-reference/index.html

      - title: Apache Ranger Auditing
        url: security-ranger-auditing/index.html

      - title: Apache Ranger Authorization
        url: security-ranger-authorization/index.html

      - title: Cloudera Manager Overview
        url: cm-concepts/index.html

      - title: Apache YARN Data Management
        url: yarn-data-management/index.html

      - title: Apache YARN Data Management
        url: yarn-data-management/index.html

      - title: Apache HBase Introduction
        url: hbase-introduction/index.html

      - title: DATA STORAGE
        url: data-storage-concepts.html

      - title: COMPUTE
        url: compute-concepts.html

      - title: DATA ACCESS
        url: data-access-concepts.html

      - title: DATA SCIENCE
        url: data-science-concepts.html

      # Streaming omitted since Kafka is not planned for the initial release
      # Will be restored for a later release
      #- title: STREAMING
      #  url: streaming-concepts.html

      - title: SECURITY
        url: security-concepts.html

      - title: GOVERNANCE
        url: governance-concepts.html

      # Omitted because the current plan is to have only one
      # Cloudera Manager publication, and so it will remain
      # at the top level
      #- title: CLUSTER MANAGEMENT
      #  url: cluster-management-concepts.html

  - title: Planning
    name: planning
    books:
      - title: Planning for Apache Impala
        url: impala-planning/index.html

  - title: Installation & Upgrade
    name: installation
    books:
      - title: Apache Kudu Install and Upgrade
        url: kudu-install-and-upgrade/index.html

  - title: How To
    name: howto
    books:
      - title: Administering Hue
        url: administering-hue/index.html

      - title: Securing Hue
        url: securing-hue/index.html

      - title: Tuning Hue
        url: tuning-hue/index.html

      - title: Using Hue
        url: using-hue/index.html

      - title: Administering Apache Kudu
        url: administering-kudu/index.html

      - title: Apache Kudu Development
        url: kudu-development/index.html

      - title: Apache Kudu Integration
        url: kudu-integration/index.html

      - title: Configuring Oozie
        url: configuring-oozie/index.html

      - title: Scaling Namespaces and Optimizing Data Storage
        url: scaling-namespaces/index.html

      - title: Configuring Fault Tolerance
        url: configuring-fault-tolerance/index.html

      - title: Configuring Data Protection
        url: data-protection/index.html

      - title: Configuring HDFS ACLs
        url: hdfs-acls/index.html

      - title: Working with Classifications
        url: atlas-working-with-classifications/index.html

      - title: Identity Management and Federation
        url: identity-management-and-federation/index.html

      - title: Apache Impala Performance Tuning
        url: impala-performance-tuning/index.html

      # Removed at Kris's request
      # - title: Apache Hive Performance Tuning
      #   url: hive-performance-tuning/index.html

      - title: Starting Apache Hive
        url: starting-hive/index.html

      - title: Using HiveQL
        url: using-hiveql/index.html

      - title: Managing Apache Hive
        url: managing-hive/index.html

      - title: Managing Apache Hive Workloads
        url: managing-a-hive-workload/index.html

      - title: Configuring Apache Hive
        url: configuring-apache-hive/index.html

      - title: Configuring Apache Hive Metastore
        url: hive-metastore/index.html

      - title: Securing Apache Hive
        url: securing-hive/index.html

      - title: Integrating Apache Hive with Apache Spark and BI
        url: integrating-hive-and-bi/index.html

      - title: Migrating Data to Apache Hive
        url: migrating-data-into-hive/index.html

      # Removed at Kris's request
      # - title: Using the Cost-based Optimizer in Hive
      #   url: using-cbo-in-hive/index.html

    #  - title: Using HBase to Store and Access Data
    #    url: hbase-getting-started/index.html

      - title: Configuring HBase
        url: configuring-hbase/index.html

      - title: Using Azure Data Lake Store with HBase
        url: hbase-adls/index.html

      - title: Using Amazon S3 with HBase
        url: hbase-s3/index.html

      - title: Managing HBase Security
        url: hbase-security/index.html

      - title: Accessing HBase by using the HBase Shell
        url: accessing-hbase/index.html

      - title: Managing HBase
        url: managing-hbase/index.html

      - title: Configuring HBase High Availability
        url: hbase-high-availability/index.html

      - title: Using HBase Backup and Disaster Recovery
        url: hbase-replication/index.html

      - title: Configuring HBase Snapshots
        url: hbase-snapshots/index.html

      - title: Using HBase Health Tests
        url: hbase-health-tests/index.html

      - title: Using HBase Metrics
        url: hbase-metrics/index.html

      - title: Managing ZooKeeper
        url: managing-zookeeper/index.html

      - title: Authenticating ZooKeeper
        url: zookeeper-authentication/index.html

      - title: Monitoring ZooKeeper
        url: monitoring-zookeeper/index.html

      - title: DATA STORAGE
        url: data-storage-howto.html

      - title: COMPUTE
        url: compute-howto.html

      - title: DATA ACCESS
        url: data-access-howto.html

      - title: DATA SCIENCE
        url: data-science-howto.html

      #- title: STREAMING
      #  url: streaming-howto.html

      - title: SECURITY
        url: security-howto.html

      - title: GOVERNANCE
        url: governance-howto.html

      - title: CLUSTER MANAGEMENT
        url: cluster-management-howto.html

  - title: Troubleshooting
    name: troubleshooting
    books:
      - title: Apache Impala Troubleshooting
        url: impala-troubleshooting/index.html

      - title: Troubleshooting Hue
        url: troubleshooting-hue/index.html

      - title: Troubleshooting Apache Kudu
        url: troubleshooting-kudu/index.html

      - title: Troubleshooting HBase
        url: troubleshooting-hbase/index.html

  - title: Reference
    name: reference
    books:
      - title: Knox Reference
        url: knox-reference/index.html

      - title: Apache Hive Workload Management Commands
        url: workload-management/index.html

      - title: Apache Hive Materialized View Commands
        url: materialized-view-commands/index.html

      - title: Cloudera Manager Reference
        url: cm-reference/index.html

      - title: Oozie Metrics and Diagnostics
        url: oozie-metrics-diagnostics/index.html

      - title: APIs and Metrics for Working with HDFS
        url: hdfs-apis-metrics/index.html

      - title: Apache Atlas Metadata Collection Reference
        url: atlas-metadata-collection/index.html

  # - title: Learning & Training
  #   name: learning
  #   books:
---
Cloudera Runtime offers several tools for processing...

Justo iaculis blandit congue malesuada pellentesque ultrices fermentum
vel nisl nibh diam natoque montes semper nascetur rutrum faucibus ipsum
mus enim feugiat et duis sed risus ullamcorper suspendisse fames finibus
facilisi pulvinar fringilla lacus magnis non donec sagittis placerat
ultricies integer aliquam vulputate amet nunc euismod tortor netus
inceptos in habitasse elit sociosqu venenatis aptent morbi maecenas
pretium phasellus imperdiet molestie laoreet bibendum curabitur
parturient cubilia velit efficitur dictumst tellus condimentum auctor
praesent accumsan consectetur at litora scelerisque lectus tincidunt
