---
layout: foyer-grouped
breadcrumb-title: Cloudera Runtime How To
title: Storage

# How-to publications related to
# * HDFS
# * Kudu
# * Ozone

publications:
- column:

  - title: Accessing Cloud Data
    url: cloud-data-access/index.html
    description: >-
      Describes information about the configuration parameters used to
      access data stored in the cloud.

  - title: Apache Hadoop HDFS
    sub:

    - title: Managing Data Storage
      url: scaling-namespaces/index.html
      description: >-
        Provides information about optimizing data storage, APIs and
        services for accessing data, and managing data across clusters.

    - title: Configuring Data Protection
      url: data-protection/index.html
      description: >-
        Provides information about configuring data protection on a Hadoop
        cluster.

    - title: Configuring HDFS ACLs
      url: hdfs-acls/index.html
      description: >-
        Describes the procedure to configure Access Control Lists (ACLs)
        on Apache Hadoop HDFS.

    - title: Configuring Fault Tolerance
      url: fault-tolerance/index.html
      description: >-
        Describes the procedure to configure HDFS high availability on a
        cluster.

- column:
  - title: Apache Kudu
    sub:

    - title: Administering Apache Kudu
      url: administering-kudu/index.html
      description: >-
        Describes common administrative tasks and Apache Kudu workflows.

    - title: Developing Applications with Apache Kudu
      url: kudu-development/index.html
      description: >-
        Provides reference examples to use C++ and Java client APIs to
        develop apps using Apache Kudu.

    - title: Using Apache Impala with Apache Kudu
      url: kudu-integration/index.html
      description: >-
        Provides information about how to use use Kudu as a storage
        for Apache Impala.

---

Cloudera Runtime provides different types of storage components that you
can use depending on your data requirements. Apache Kudu completes
Apache Hadoop's storage layer, enabling fast analytics on fast data.
Apache Hadoop HDFS is a distributed file system for storing large
volumes of data. 
