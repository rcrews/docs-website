---
layout: foyer-grouped
breadcrumb-title: Cloudera Runtime How To
title: Data Access

# How-to publications related to
# * DAS
# * Hive
# * Impala
# * Hue
# * Sqoop
# * Search

publications:
- column:
  - title: Data Analytics Studio
    sub:

    - title: Using Data Analytics Studio
      url: using-das/index.html
      description: >-
        Describes how to work with queries, manage databases and tables,
        and generate reports.

  - title: Apache Hive
    sub:

    - title: Working with Hive Metastore
      url: hive-metastore/index.html
      description: >-
        Describes authorizing access to Hive tables from Spark and
        configuring access to metadata Hive metastore (HMS) for
        multiple services, such as Hive and Impala.

    - title: Starting Apache Hive
      url: starting-hive/index.html
      description: >-
        Describes how to launch Hive, execute Hive commands, and issue
        Hive queries from Beeline.

    - title: Using Hive
      url: using-hiveql/index.html
      description: >-
        Covers how to use Hive 3 to query flat and
        transactional data using SQL statements.

    - title: Managing Apache Hive
      url: managing-hive/index.html
      description: >-
        Includes information about mature ACID v2 operations on
        transactions.

    - title: Managing Apache Hive Workloads
      url: managing-a-hive-workload/index.html
      description: >-
        Summarizes and describes how to improve parallel query execution
        and share queries in a cluster that supports low-latency
        analytical processing (LLAP).

    - title: Configuring Apache Hive
      url: configuring-apache-hive/index.html
      description: >-
        Describes how to set up Hive to generate statistics and control
        the number of concurrent connections to Hive.

    - title: Securing Apache Hive
      url: securing-hive/index.html
      description: >-
        Discusses how to choose an authorization model based on how your
        organization uses Hive.

    - title: Integrating Apache Hive with Apache Spark and BI
      url: integrating-hive-and-bi/index.html
      description: >-
        Covers accessing Spark data to and from Hive and using the
        JdbcStorageHandler to access an external data source, such as
        Business Intelligence (BI) tools.

    - title: Migrating Data Using Sqoop
      url: migrating-data-into-hive/index.html
      description: >-
        Explains how to move data from relational databases directly to
        Hive or to the file system or object store and how to move data
        back to Hive.

- column:
  - title: Apache Impala
    sub:

    - title: Integrating with Apache Impala
      url: kudu-integration/index.html
      description: >-
        Provides examples on how to use Impala to insert, query, update,
        and delete data from Kudu tablets using Impala's SQL syntax.

    - title: Managing Apache Impala
      url: impala-manage/index.html
      description: >-
        Presents the task topics for configuring and managing Impala.

  - title: Hue
    sub:

    - title: Using Hue
      url: using-hue/index.html
      description: >-
        Describes how to use Hue to query Apache Impala data sets and how
        to use it to browse metadata in Apache Atlas.

    - title: Administering Hue
      url: administering-hue/index.html
      description: >-
        Describes how to configure Hue, customize its web UI, enable
        integration with Apache Atlas, and manage the Hue service with
        Cloudera Manager.

    - title: Securing Hue
      url: securing-hue/index.html
      description: >-
        Describes how to set Hue user and application permissions, configure
        SSL connections, LDAP authentication, and integration with Apache
        Ranger and Knox.

    - title: Tuning Hue
      url: tuning-hue/index.html
      description: >-
        Describes how to add a load balancer and configure high availability
        for Hue and between Hue and other components, such as Hive, Impala,
        and HDFS.

  - title: Search
    sub:

    - title: Search Tutorial
      url: search-tutorial/index.html
      description: >-
        A tutorial on using Cloudera Search.

    - title: Securing Cloudera Search
      url: search-security/index.html
      description: >-
        Describes how to secure Solr network connections, configure authentication
        and authorization.

    - title: Tuning Cloudera Search
      url: search-tuning/index.html
      description: >-
        Describes how to optimize Cloudera Search performance for
        various use cases.

    - title: Managing Cloudera Search
      url: search-managing/index.html
      description: >-
        Describes how to configure and manage Cloudera Search.

    - title: Cloudera Search ETL
      url: search-etl-morphlines/index.html
      description: >-
        Describes how to perform ETL using Cloudera Search and
        Morphlines.

    - title: Indexing Data Using Cloudera Search
      url: search-indexing/index.html
      description: >-
        Describes how to index data using Cloudera Search.

---

Cloudera Data Platform Runtime includes Apache Hive 3 and Apache Impala
for storing and accessing data in the Hive metastore database. Hive 3
addresses enterprise data warehouse demands for transactional data in
the ORC file format. Impala performs high-performance, low-latency SQL
queries on data in Parquet and other formats. Hue is a web-based interactive
editor for querying the Hive metastore that also creates Oozie workflows. DAS
is a web application for performing operations on Hive tables and also
provides recommendations for optimizing the performance of your queries.
