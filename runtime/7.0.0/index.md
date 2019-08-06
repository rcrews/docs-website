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
      - title: STORAGE
        url: concepts-storage.html

      - title: COMPUTE
        url: concepts-compute.html

      - title: DATA ACCESS
        url: concepts-data-access.html

      - title: DATA SCIENCE
        url: concepts-data-science.html

      - title: SECURITY
        url: concepts-security.html

      - title: GOVERNANCE
        url: concepts-governance.html

      - title: CLUSTER MANAGEMENT
        url: concepts-cluster-management.html

      # Removed at Sairam's request, July 18
      # - title: cluster-maintenance
      #   url: cluster-maintenance/index.html

      # Removed at Sairam's request, July 18
      # - title: ports-reference
      #   url: ports-reference/index.html

  - title: Planning
    name: planning
    books:
      - title: Planning for Apache Impala
        url: impala-planning/index.html

  # - title: Installation & Upgrade
  #  name: installation
  #   books:
      # Priyanka: Removed because install-upgrade procedures are not
      # needed for CDP 1.0.0.
      # - title: Apache Kudu Install and Upgrade
      #   url: kudu-install-and-upgrade/index.html

  - title: How To
    name: howto
    books:
      - title: DATA STORAGE
        url: howto-storage.html

      - title: COMPUTE
        url: howto-compute.html

      - title: DATA ACCESS
        url: howto-data-access.html

      - title: DATA SCIENCE
        url: howto-data-science.html

      - title: OPERATIONS
        url: howto-operations.html

      - title: SECURITY
        url: howto-security.html

      - title: GOVERNANCE
        url: howto-governance.html

      - title: CLUSTER MANAGEMENT
        url: howto-cluster-management.html

  - title: Troubleshooting
    name: troubleshooting
    books:
      - title: Troubleshooting Apache Impala
        url: impala-troubleshooting/index.html

      # Removed since it is not currently being built.
      # - title: Troubleshooting Hue
      #   url: troubleshooting-hue/index.html

      - title: Troubleshooting Apache HBase
        url: troubleshooting-hbase/index.html

      - title: Troubleshooting Apache Kudu
        url: troubleshooting-kudu/index.html

  - title: Reference
    name: reference
    books:
      - title: Knox Reference
        url: knox-reference/index.html

      - title: Apache Impala Reference
        url: impala-reference/index.html

      - title: Apache Impala SQL Language Reference
        url: impala-sql-reference/index.html

      - title: Apache Hive Workload Management Commands
        url: workload-management/index.html

      - title: Apache Hive Materialized View Commands
        url: materialized-view-commands/index.html

      - title: Cloudera Manager Reference
        url: cm-reference/index.html

      # Sairam removed this because the publication will no longer be
      # required
      # - title: Oozie Metrics and Diagnostics
      #   url: oozie-metrics-diagnostics/index.html

      # Sairam removed this because the publication will no longer be
      # required
      # - title: APIs and Metrics for Working with HDFS
      #   url: hdfs-apis-metrics/index.html

      - title: Apache Atlas Reference
        url: atlas-reference/index.html

      - title: Apache Hadoop YARN Tuning
        url: yarn-tuning/index.html

  # - title: Learning & Training
  #   name: learning
  #   books:
---
Cloudera Runtime is the core open source software distribution within
Cloudera Data Platform (CDP) that is maintained, supported, versioned,
and packaged as a single entity by Cloudera. Cloudera Runtime includes
approximately 50 open source projects that comprise the core
distribution of data management tools within CDP, including Cloudera
Manager, which is used to configure and monitor clusters managed in CDP.

Cloudera Runtime does not include:

* CDP cloud services such as Data Hub, DWX, and MLX
* CDP management tools such as the Management Console, the Workload
  Manager, and the Replication Manager
* Data Catalog
* Add-on products such as CDSW, CDF, and Metron
