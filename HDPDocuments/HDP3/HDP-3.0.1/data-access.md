---
layout: hwx_foyer
breadcrumb-title: HDP
title: Data Access
publications:
  - title: Starting Apache Hive
    url: starting-hive/index.html
    description: >-
      Describes how to launch Hive, execute Hive commands, and issue
      Hive queries from Beeline
  - title: Using Apache HiveQL
    url: using-hiveql/index.html
    description: >-
      Covers how to use Hive 3 revised semantics for querying flat and
      transactional data using the SQL-like, Hive Query Language
  - title: Managing Apache Hive
    url: managing-hive/index.html
    description: >-
      Includes information about mature
      ACID v2 operations on transactions introduced in HDP 3.0
  - title: Managing Apache Hive Workloads
    url: hive-workload/index.html
    description: >-
      Summarizes and describes how to improve parallel query execution
      and share queries in a cluster that supports low-latency
      analytical processing (LLAP)
  - title: Configuring Apache Hive
    url: configuring-hive/index.html
    description: >-
      Describes how to control the number of concurrent connections and
      parameters required by Hive 3
  - title: Securing Apache Hive
    url: securing-hive/index.html
    description: >-
      Covers security of low latency analytical processing (LLAP)
      operations and how to secure data using the storage-based
      authorization (SBA) model, table access limitations, light-weight
      directory access protocol (LDAP)
  - title: Integrating Apache Hive with Spark and BI
    url: integrating-hive/index.html
    description: >-
      Covers the Hive Warehouse Connector for reading and writing Spark
      data to and from Hive, connecting Hive over JDBC to external
      software, such as Business Intelligence (BI) tools, and setting up
      Superset for visualizing Hive data
  - title: Migrating Data
    url: migrating-data/index.html
    description: >-
      Explains how to move data from relational databases directly to
      Hive or to HDFS and how to move data from HDFS to Hive
  - title: Apache Hive Performance Tuning
    url: performance-tuning/index.html
    description: >-
      Describes how you can tune the data warehouse infrastructure,
      interdependent components, and your client connection parameters
      to improve performance
  - title: Accessing Data Using Apache Druid
    url: adding-druid/index.html
    description: >-
      Introduces Apache Druid (incubating) capabilities and
      architecture, and explains the basics of setting up and using Druid
  - title: Using Apache Druid and Apache Hive
    url: using-druid/index.html
    description: >-
      Discusses using Apache Druid (incubating) and Hive in tandem to
      index data from Hive into Druid and to query Druid from Hive
  - title: Using HBase to Store and Access Data
    url: hbase-data-access/index.html
    description: >-
      Describes HBase installation methods, cluster management details,
      backup and restore strategy, medium object (MOB) storage support,
      quota management details, and other best practices
  - title: Using Phoenix to Store and Access Data
    url: phoenix-data-access/index.html
    description: >-
      Describes information about interoperability with HBase, user
      defined functions (UDFs), mapping Phoenix schemas to HBase
      namespaces, Phoenix connectors, indexes, and the Phoenix repair
      tool
  - title: Accessing Cloud Data
    url: bk_cloud-data-access/index.html
    description: >-
      Provides the steps required for configuring access to data stored
      in Amazon S3, ADLS, WASB, and Google Cloud Storage, and for
      accessing that data
---

HDP 3.0 improves data access and includes a redesigned Apache Hive, new
Apache Druid capabilities, Apache HBase, and Apache Phoenix, plus
configuration and access to cloud data. Hive 3 addresses enterprise data
warehouse demands for transactional data and works with Druid to offer a
datastore and Kafka streaming ingestion. Apache HBase provides random
and persistent access to NoSQL, big data tables in Hadoop. HBase scales
linearly to handle very large (petabyte scale) and column-oriented data
sets. Apache Phoenix, a SQL abstraction layer, provides a SQL skin for
working with data and objects stored in the NoSQL schema of HBase.
