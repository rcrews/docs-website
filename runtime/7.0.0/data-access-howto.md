---
layout: foyer
breadcrumb-title: Cloudera Runtime How To
title: Data Access
publications:
  - title: Administering Hue
    url: administering-hue/index.html
    description: >-
      Describes how to configure Hue, customize its web UI, and to
      enable integration with Apache Atlas.

  # - title: Securing Hue
  #   url: securing-hue/index.html
  #   description: >-
  #     publication description ante nec fusce varius mattis facilisis
  #     consectetur sit

  # - title: Tuning Hue
  #   url: tuning-hue/index.html
  #   description: >-
  #     publication description ante nec fusce varius mattis facilisis
  #     consectetur sit

  - title: Using Hue
    url: using-hue/index.html
    description: >-
      Describes how to use Hue to query Apache Impala data sets and how
      to use it to browse metadata in Apache Atlas.

  # Removed at Kris's request
  # - title: Apache Hive Performance Tuning
  #   url: hive-performance-tuning/index.html

  - title: Starting Apache Hive
    url: starting-hive/index.html
    description: >-
      Describes how to launch Hive, execute Hive commands, and issue
      Hive queries from Beeline

  - title: Using HiveQL
    url: using-hiveql/index.html
    description: >-
      Covers how to use Hive 3 semantics for querying flat and
      transactional data using SQL statements

  - title: Managing Apache Hive
    url: managing-hive/index.html
    description: >-
      Includes information about mature ACID v2 operations on
      transactions

  - title: Managing Apache Hive Workloads
    url: managing-a-hive-workload/index.html
    description: >-
      Summarizes and describes how to improve parallel query execution
      and share queries in a cluster that supports low-latency
      analytical processing (LLAP)

  - title: Configuring Apache Hive
    url: configuring-apache-hive/index.html
    description: >-
      Describes how to control the number of concurrent connections and
      parameters required by Hive 3

  - title: Configuring Apache Hive Metastore
    url: hive-metastore/index.html
    description: >-
      Covers how to configure Hive metastore (HMS) to access metadata of
      multiple services, such as Hive, Impala, and Spark

  - title: Securing Apache Hive
    url: securing-hive/index.html
    description: >-
      Discusses how to choose an authorization model based on how your
      organization uses Hive

  - title: Integrating Apache Hive with Apache Spark and BI
    url: integrating-hive-and-bi/index.html
    description: >-
      Covers accessing Spark data to and from Hive and using the
      JdbcStorageHandler to access an external data source, such as
      Business Intelligence (BI) tools

  - title: Migrating Data to Apache Hive
    url: migrating-data-into-hive/index.html
    description: >-
      Explains how to move data from relational databases directly to
      Hive or to the file system or object store and how to move data
      back to Hive

  # - title: Using HBase to Store and Access Data
  #   url: hbase-getting-started/index.html
  #  description: >-
  #   publication description ante nec fusce varius mattis facilisis
  #    consectetur sit

  - title: Configuring HBase
    url: configuring-hbase/index.html
    description: >-
      publication description ante nec fusce varius mattis facilisis
      consectetur sit

  - title: Using Azure Data Lake Store with HBase
    url: hbase-adls/index.html
    description: >-
      publication description ante nec fusce varius mattis facilisis
      consectetur sit

  - title: Using Amazon S3 with HBase
    url: hbase-s3/index.html
    description: >-
      publication description ante nec fusce varius mattis facilisis
      consectetur sit

  - title: Managing HBase Security
    url: hbase-security/index.html
    description: >-
      publication description ante nec fusce varius mattis facilisis
      consectetur sit

  - title: Accessing HBase by using the HBase Shell
    url: accessing-hbase/index.html
    description: >-
      publication description ante nec fusce varius mattis facilisis
      consectetur sit

  - title: Managing HBase
    url: managing-hbase/index.html
    description: >-
      publication description ante nec fusce varius mattis facilisis
      consectetur sit

  - title: Configuring HBase High Availability
    url: hbase-high-availability/index.html
    description: >-
      publication description ante nec fusce varius mattis facilisis
      consectetur sit

  - title: Using HBase Backup and Disaster Recovery
    url: hbase-replication/index.html
    description: >-
      publication description ante nec fusce varius mattis facilisis
      consectetur sit

  - title: Configuring HBase Snapshots
    url: hbase-snapshots/index.html
    description: >-
      publication description ante nec fusce varius mattis facilisis
      consectetur sit

  # Divya commented out
  # - title: Accessing Cloud Data
  #   url: cloud-data-access/index.html

  # Removed at Kris's request
  # - title: Using the Cost-based Optimizer in Hive
  #   url: using-cbo-in-hive/index.html

  - title: Managing Apache Impala
    url: impala-manage/index.html
    description: >-
      Presents the task topics for configuring and managing Impala
---
Data access topics for Cloudera Data Platform Runtime tell you how to
use Apache Impala, Apache Hive 3, and Hue to access your
data sets.  Hive and Impala provide access to data stored in the Hive
metastore database. Hive 3 addresses enterprise data warehouse demands
for transactional data in the ORC file format. Impala performs
high-performance, low-latency SQL queries on data in Parquet and other
formats. Hue is a web-based interactive query editor that can also be
used to create Oozie workflows.
