---
layout: foyer
breadcrumb-title: Cloudera Runtime How To
title: Storage

# How-to publications related to
# * HDFS
# * Kudu

publications:
  - title: Scaling Namespaces and Optimizing Data Storage
    url: scaling-namespaces/index.html
    description: >-
      Provides information about scaling namespaces, optimizing data
      storage, and optimizing performance of Apache Hadoop HDFS.

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

# Priyanka: Commenting Kudu docs. Not a part of Aug 22 release
#  - title: Administering Apache Kudu
#    url: administering-kudu/index.html
#    description: >-
#      Describes common administrative tasks and Apache Kudu workflows.

#  - title: Developing Applications with Apache Kudu
#    url: kudu-development/index.html
#    description: >-
#      Provides reference examples to use C++ and Java client APIs to
#      develop apps using Apache Kudu.

#  - title: Using Apache Impala with Apache Kudu
#    url: kudu-integration/index.html
#    description: >-
#      Provides information about how to use use Kudu as a storage
#      for Apache Impala.
---
Cloudera Runtime provides different types of storage components that you
can use depending on your data requirements. Apache HBase is a NoSQL
database that provides real-time read/write access to those large
datasets. Apache Kudu is a columnar data store that enables fast
analytics on rapidly changing data. Apache HDFS is a distributed file
system for storing large volumes of data.
