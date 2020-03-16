---
layout: fluid-topic
title: CDP Public Cloud Updates - December 2019
copyright:
  holder: Cloudera, Inc.
  years:
    - 2019
---
# {{ page.title }}

Cloudera is pleased to announce the latest feature updates to CDP Public
Cloud delivered at the close of 2019. CDP is an integrated data platform
that is easy to deploy, manage, and use. CDP Public Cloud provides
secured and governed data lakes (SDX), an environment with a wide range
of analytic engines (Data Hub) as well as self-service data marts (Data
Warehouse), and machine learning workspaces (Machine Learning).

## Overview

* *Support for private networks (AWS VPCs and Azure VNets).*  Available as
  a Tech Preview, this allows users to create CDP Environments that use
  select services (CDP Data Hub, SDX Data Lakes and Replication Manager)
  within their corporate networks.  This also enables
  [Replication Manager)(/replication-manager/cloud/index.html)
  to connect with Classic CDH/HDP Clusters in other networks to replicate
  & synchronize data, metadata and security policies from on-premises
  environments to CDP.

* *[Streams Messaging cluster template and definition](https://blog.cloudera.com/adding-nifi-and-kafka-to-cloudera-data-platform/):*  Available as a
  Tech Preview, the Streams Messaging Heavy Duty and Streams Messaging
  Light Duty cluster templates and definitions are now available in
  [CDP Data Hub](/data-hub/cloud/release-notes/topics/dh-whats-new-04.html)
  with advanced messaging and real-time processing on streaming
  data using Apache Kafka, centralized schema management using Schema
  Registry, and management and monitoring capabilities powered by Streams
  Messaging Manager.

  * *Easily manage hybrid Kafka architectures* - Running a Cloudera
    supported Kafka distribution on-premises and Kafka in CDP Data Hub
    ensures consistent tooling and support, minimizing integration risks.
  
  * *Easy migration to public cloud* - Leveraging NiFi along with your
    hybrid Kafka architecture can help move and migrate any data set to the
    public cloud with ease.
  
  * *Build cloud-native streaming applications* - Kafka deployments in CDP
    Data Hub can serve as your building blocks to build cloud-native
    streaming applications in the public cloud advanced messaging
    capabilities with strong streaming semantics and data governance.

  * *SDX integration for consistent data governance and security* - Get a
    holistic experience for setting security policies and managing data
    governance across end-to-end streaming applications.

## [Cloudera Data Warehouse](/data-warehouse/cloud/release-notes/topics/dw-whats-new.html)

* *Enriched Data Warehouse Visualization Including Hive on Tez and LLAP:*
  Hue, a web-based interactive query editor that enables you to interact
  with data warehouses, extends support for Hive with Tez and LLAP
  execution engines, so all available data warehouse compute engines can
  be easily visualized. Learn more about
  [Hue](/runtime/7.0.2/using-hue/topics/hue-using.html).

* *Improved Impala Performance:* As Impala is ideally suited for ad-hoc
  and interactive SQL reporting, performance at scale is paramount. This
  release adds options to increase performance with HBase and parquet. For
  HBase, there is a new query option that lets Impala use existing Hive
  Metastore table statistics and avoid the overhead of real-time
  estimations during planning. For Parquet, Impala can increase query
  performance by using a parquet native parameter to more accurately
  control the splits on non-block stores. See
  [Impala Query Options](/runtime/7.0.2/impala-sql-reference/topics/impala-query-options.html#query_options__disable_hbase_num_rows_estimate)
  and
  [Impala with Amazon S3](/runtime/7.0.2/impala-reference/topics/impala-s3.html)
  for more details.

## [Cloudera Machine Learning](/machine-learning/cloud/release-notes/topics/ml-whats-new.html)

CML improves machine learning model serving up-time and fault resistance
by optimizing deployment workflows and solving for two single points of
failure. For businesses this means even better highly reliable serving
of models for production environments.

## [Cloudera Data Hub](/data-hub/cloud/release-notes/topics/dh-whats-new-04.html)

* *Workload Manager Integration:* know how your workloads and queries are
  performing and use the diagnostic insight for fast troubleshooting,
  focused optimization, reduced downtime and improved resource
  utilization. You can now manually enable or disable workload analytics
  for Data Hub cluster workloads by connecting these clusters to Workload
  Manager. Learn more about the
  [Workload Manager](/workload-manager/cloud/index.html).

* Newly created Data Hub clusters will use an upgraded Cloudera Runtime
  with numerous security enhancements

* New Streams Messaging cluster template and definition referenced in
  the overview section

## [Management Console](/management-console/cloud/release-notes/topics/mc-whats-new-04.html)

* *Enhanced CIDR specification:* you can now specify multiple CIDRs on
  individual security groups as you create environments, providing greater
  flexibility and saving time. Read about
  [user access to clusters](/management-console/cloud/security-overview/topics/mc-access-to-clusters.html).
  Learn how to
  [setup security groups](/management-console/cloud/security-overview/topics/mc-access-to-clusters.html).

* *Public Certificate Renewal:* CDP environments can now renew public
  security certificates in their trust store by clicking a button on the
  main environment page.  This allows browsers and other clients to
  automatically trust CDP services in longer running environments when
  making TLS secured connections

* *IAM role selection:* choose from existing instance profiles and roles
  rather than having to manually enter IAM role ARNs during IAM instance
  profile or role provision, saving time and reducing the potential for
  errors. Find out
  [how to create cross-account IAM roles](/management-console/cloud/credentials-aws/topics/mc-create-credentialrole.html).

The full release documentation including release notes for each service
is available
[here](/cdp/cloud/index.html)
(Service Name → Release Notes → What’s New).
