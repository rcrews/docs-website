---
layout: foyer
breadcrumb-title: Runtime
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
      Covers how to use Hive revised semantics for querying flat and
      transactional data using the SQL-like, Hive Query Language

  - title: Managing Apache Hive
    url: managing-hive/index.html
    description: >-
      Includes information about mature
      ACID v2 operations on transactions

  - title: Managing Apache Hive Workloads
    url: managing-a-hive-workload/index.html
    description: >-
      Summarizes and describes how to improve parallel query execution
      and share queries in a cluster that supports low-latency
      analytical processing (LLAP)

  - title: Securing Apache Hive
    url: securing-hive/index.html
    description: >-
      Covers security of low latency analytical processing (LLAP)
      operations and how to secure data using the storage-based
      authorization (SBA) model, table access limitations, light-weight
      directory access protocol (LDAP)

  - title: Integrating Apache Hive with Kafka, Spark, and BI
    url: integrating-hive-and-bi/index.html
    description: >-
      Covers accessing data in Kafka from Hive, accessing Spark data to
      and from Hive, using the JdbcStorageHandler to access an external
      data source, such as Business Intelligence (BI) tools, and setting
      up Superset for visualizing Hive data

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
---

Hive addresses enterprise data
warehouse demands for transactional data and works with Druid to offer a
datastore and Kafka streaming ingestion. Apache HBase provides random
and persistent access to NoSQL, big data tables in Hadoop. HBase scales
linearly to handle very large (petabyte scale) and column-oriented data
sets. Apache Phoenix, a SQL abstraction layer, provides a SQL skin for
working with data and objects stored in the NoSQL schema of HBase.
