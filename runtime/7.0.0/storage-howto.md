---
layout: foyer
breadcrumb-title: Cloudera Runtime How To
title: Data Storage
publications:

  - title: Getting Started with HBase
    url: hbase-getting-started/index.html
    description: >-
      Provides information about the operational database cluster shape,
      and instructions to create an operational database. Provides
      instructions to start, stop your HBase cluster.

  - title: Configuring HBase
    url: configuring-hbase/index.html
    description: >-
      Provides information to configure HBase to use it as your
      operational data store.

 # - title: Using Azure Data Lake Store with HBase
 #   url: hbase-adls/index.html
 #   description: >-
 #     publication description ante nec fusce varius mattis facilisis
 #     consectetur sit

  - title: Using Amazon S3 with HBase
    url: hbase-s3/index.html
    description: >-
      Provides information about how to use use Amazon S3 as a storage
      layer for HBase.

  - title: Managing HBase Security
    url: hbase-security/index.html
    description: >-
      Provides information about HBase security, authentication,
      authorization, and configuring TLS/SSL for HBase.

  - title: Accessing HBase
    url: accessing-hbase/index.html
    description: >-
      Provides information about different ways to access HBase.

  - title: Managing HBase
    url: managing-hbase/index.html
    description: >-
      Provides information about how to import data into,
      write data to, and read data from HBase.

  - title: Configuring HBase High Availability
    url: hbase-high-availability/index.html
    description: >-
      Provides information about configuring HBase high availability for
      applications require low-latency queries.

  - title: Using HBase Backup and Disaster Recovery
    url: hbase-backup-dr/index.html
    description: >-
      Provides information about configuring HBase snapshots, and using
      HBase replication.

  - title: Administering Apache Kudu
    url: administering-kudu/index.html
    description: >-
      Describes common administrative tasks and Apache Kudu workflows.

  - title: Developing Applications with Apache Kudu
    url: kudu-development/index.html
    description: >-
      Provides reference examples to use C++ and Java client APIs to
      develop apps using Apache Kudu.

  - title: Integrating with Apache Kudu
    url: kudu-integration/index.html
    description: >-
      Gravida primis lobortis posuere augue adipiscing id leo consequat
      metus, nam in consectetur auctor libero fermentum dui inceptos
      euismod, faucibus commodo vehicula accumsan penatibus risus
      sodales ultricies, nisl orci sem habitant et nunc rhoncus montes

  - title: Integrating with Apache Impala
    url: kudu-integration/index.html
    description: >-
      Provides examples on how to use Impala to insert, query, update,
      and delete data from Kudu tablets using Impala's SQL syntax.

  - title: Accessing Cloud Data
    url: cloud-data-access/index.html
    description: >-
      Describes information about the configuration parameters used to
      access data stored in the cloud. In addition, provides the
      steps required for encrypting data and troubleshooting issues.

  - title: Scaling Namespaces and Optimizing Data Storage
    url: scaling-namespaces/index.html
    description: >-
      Provides information about scaling namespaces, optimizing data
      storage, and optimizing performance of Apache HDFS.

  - title: Configuring Fault Tolerance
    url: configuring-fault-tolerance/index.html
    description: >-
      Describes the procedures to configure HDFS high availability on a
      cluster.

  - title: Configuring Data Protection
    url: data-protection/index.html
    description: >-
      Provides information about configuring data protection on a Hadoop
      cluster.

  - title: Configuring HDFS ACLs
    url: hdfs-acls/index.html
    description: >-
      Describes the procedure to configure Access Control Lists (ACLs)
      on Apache HDFS.

  - title: Configuring HDFS Encryption
    url: hdfs-encryption/index.html
    description: >-
      Describes the procedure to configure HDFS Data at Rest encryption.
---
Cloudera Runtime provides different types of storage components that you
can use depending on your data requirements. Apache HBase is a NoSQL
database that provides real-time read/write access to those large
datasets. Apache Kudu is a columnar data store that enables fast
analytics on rapidly changing data. Apache HDFS is a distributed file
system for storing large volumes of data.
