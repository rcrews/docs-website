---
layout: fluid-topic
title: CDP Public Cloud Updates - March 2020
copyright:
  holder: Cloudera, Inc.
  years:
    - 2020
---
# {{ page.title }}

Cloudera is pleased to announce the latest feature updates to CDP Public
Cloud delivered thus far in 2020. CDP is an integrated data platform
that is easy to deploy, manage, and use. CDP Public Cloud provides
secured and governed data lakes (SDX), an environment with a wide range
of analytic engines (Data Hub) as well as self-service data marts (Data
Warehouse), and machine learning workspaces (Machine Learning). The
latest release of CDP features version 7.1.0 of the Cloudera Runtime and
Cloudera Manager.  This update covers both the 7.0.2.2 and 7.1.0
releases and recent enhancements to the Control Plane and SDX
applications.

## Overview

Private networks (subnets) are now supported in both AWS and Azure,
including in the CPD UI

## [Cloudera Data Warehouse](/data-warehouse/cloud/release-notes/topics/dw-whats-new.html)

* *Support for private subnets* - CDW support for deploying load balancer
  and worker nodes in private subnets.

* *IP aliasing / multiplexing* - Using overlay networks to increase the
  available IP addresses for an existing CDP environment that uses subnets
  with very limited IP address.

* *Controls on speed of autoscaling* - Introduction of scale up delay or
  scale down delay in Autoscaling

* *DW User role* - A dedicated user role with entitlement to manage Cloudera
  Data Warehouse clusters within a given CDP environment

* *Column-masking in Impala* - Support for Ranger Column Masking in Impala
  CDW

* *Enable Impala HA* - Ability to turn on/off Impala coordinator HA

* *Security* - Restricting access to API server and workload endpoints on
  the Kubernetes cluster

## [Cloudera Machine Learning](/machine-learning/cloud/release-notes/topics/ml-whats-new.html)

* *Improved Security with Load Balancer Source Ranges* - When provisioning a
  Machine Learning workspace, admins can now select the CIDR range of IP
  addresses allowed to connect to the workspace. This provides better,
  machine-level control over user access and security from Cloudera Data
  Platform

* *Improvements to High Availability Architecture* - All single points of
  failure have been removed down to the Kubernetes cluster. This ensures
  workloads from data engineering to models operating in production
  environments will not be impacted by other users or technical issues.

* *Technical Preview for MLOps* - Model monitoring, model cataloging and
  full production lifecycle lineage tracking are now in technical preview
  for select customers. Reach out to your Cloudera associate to learn
  more!

* *Minor update to base Engine 11* - Includes updates to the R interpreter
  and provides better support for R-based IDEs

## [Cloudera Data Hub](/data-hub/cloud/release-notes/topics/dh-whats-new.html)

* Improved performance tuning for ‘Data Engineering’ clusters using
  Hive-on-Tez

* A more streamlined ‘Data Mart’ template without HDFS, improving launch
  time & efficiency

* Multiple ‘Streams Messaging’ (Kafka) clusters each with its own set of
  Ranger (AuthZ) policies (Preview)

* Reduced launch times for all clusters with wire encryption enabled

* Numerous robustness improvements to S3guard, ensuring consist access to
  AWS S3

* ‘Operational Database’ improvements, including:

  * Tech preview of RDBMS-like capabilities like ANSI SQL, Secondary indexes
    and views

  * Improved performance

  * Numerous bug fixes

  * Enhancements to operational support tools

* ‘Real-time Data Mart’ improvements to simplify configuration &
  maintenance and performance improvements

  * Auto-configuration of NTP (in AWS),

  * Faster compression

  * New maintenance mode for tablet servers

  * Support for rolling restarts to avoid service outages while applying
    configuration changes

## [Workload Manager](/workload-manager/cloud/index.html) now supports

* Analysis of Hive on Tez and Hive LLAP workloads

* Burst to Cloud functionality for HDP 3.x clusters

## [SDX](/management-console/cloud/data-lakes/topics/mc-data-lake.html)

* Data Lake clusters now support in-place patch upgrades of the operating
  system and system-level software on Data Lake hosts.  Attached Data Hub
  clusters must be stopped during an OS upgrade

* Enhanced security (stronger authentication requirements) for directly
  accessing nodes running certain SDX components

## [Management Console](/management-console/cloud/release-notes/topics/mc-whats-new.html)

Password expiration policies can be now be defined for local workload
passwords stored in FreeIPA

This release also includes over 125 bug fixes, security improvements,
and other improvements to the CDP continuous delivery pipeline &
processes.  Full release documentation including release notes for each
service is available
[here](/cdp/latest/index.html)
(Service Name → Release Notes → What’s New).

<!--
## CDP Public Cloud ‘On Deck’

The following are CDP Public Cloud enhancements tentatively planned for
delivery in the next 60 days

Cloudera Data Warehouse

GA of CDW Azure

Upgrade support for VW and DB Catalog

Performance improvements in Hive LLAP-AWS s3 integration

Memory based AutoScaling

Cloudera Machine Learning

GA of ML Operations including model catalog and model monitoring service
(3/1/20)

GA of CML on Azure (3/31/20)

Cloudera Data Hub

Operational Database

GA of RDBMS-like capabilities like ANSI SQL, Secondary indexes and views

Streams Messaging

GA of Streams Messaging Cluster Definition (Kafka, Schema Reg, SMM)

Schemas are stored in external database

Flow Management

GA of Flow Management Cluster Definition (NiFi, NiFi Registry)

Real-time data mart

End-to-end Varchar & Date type support

Cloudera SDX

Replication manager GA of Operational Database support including new
replication configuration interface enabling replication from unsecure
clusters to secure CDP clusters as well as replication across kerberos
domains

Workload Manager

Auto-actions - trigger certain actions like kill jobs/queries or notify
based on thresholds

Chargeback capabilities

Enhanced user management

Management Console

Improved user sync from control plane into workload clusters

Ability to retrieve keytabs from the control plane
-->
