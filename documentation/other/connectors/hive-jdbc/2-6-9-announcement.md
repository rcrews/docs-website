---
layout: post
title:  New JDBC Driver v2.6.9 for Apache Hive Released
date:   2019-11-15 02:40:00 -0800
---

We are pleased to announce the release of Cloudera JDBC 2.6.9 driver
for Apache Hive The release has the following fixes and enhancements:

## Enhancements and New Features

* [IMP-636] [00144651] [HIVEJ-561] [00146044] [HIVEJ-563] [HIVEJ-554]
  [HIVEJ-539] Updated third-party libraries. The driver now uses the
  following third-party libraries:

  * jackson 2.9.9
  * Jackson-datadbind 2.9.9.3
  * Thrift 0.12.0
  * ZooKeeper 3.4.14

* [HIVEJ-549] Support for JDBC 4.2. The driver now supports JDBC 4.2.
  For more details see the Installation and Configuration Guide.

* [HIVEJ-551] New JDBC class names. The driver now supports the
  following class names for Driver and DataSource that are independent of
  the JDBC version used:

  * com.cloudera.hive.jdbc.HS1Driver
  * com.cloudera.hive.jdbc.HS2Driver
  * com.cloudera.hive.jdbc.HS1DataSource
  * com.cloudera.hive.jdbc.HS2DataSource

The previous JDBC-version-specific class names for 4.0 and 4.1 are
still supported.

* [00141040] [HIVEJ-545] Renaming join columns. By default, the driver
  does not allow join columns to be renamed. To enable the renaming of
  join columns, set the RenameJoinColumn property to "true".

## Resolved Issues

* [00146521] [HIVEJ-569] The driver resolves the host name to an IP
  address for SSL verification, causing the host name verification step to
  fail.
* [HIVEJ-542] The driver incorrectly treats SSLTrustStore and
  SSLTrustStorePWD as server-side properties.

## Workflow Changes

The following changes may disrupt established workflow for the drivers.

In addition to changes that are already implemented in the current
version of the driver, this section describes potentially disruptive
changes that will be implemented in a future version of the driver, so
that you can plan accordingly.

## Upcoming Changes

* Removing support for JDBC 4 (Java 6). Beginning in the fourth quarter
  of 2019, the driver will no longer support JDBC 4 (Java 6). For a list
  of supported JDBC versions, see the Installation and Configuration
  Guide.

## Version 2.6.1

* Removed support for JDBC 3 (Java 5). Beginning with this release, the
  driver no longer supports JDBC 3 (Java 5). Only JDBC 4 (Java 6) and JDBC
  4.1 (Java 7) are supported.

## Getting Started with the Cloudera Driver

* Read the Cloudera JDBC 2.6.9 driver for Apache Hive
  [Release Notes and Installation Guide](/documentation/other/connectors/hive-jdbc/2-6-9.html).

* Download the connector from the
  [Cloudera Connectors](https://www.cloudera.com/downloads/connectors/hive/jdbc/2-6-9.html)
  page.

As always, we welcome your feedback. Please send your comments and
suggestions to the user group through our
[community forums](http://community.cloudera.com/).
You can also file bugs through our external Jira projects on
[issues.cloudera.org](http://issues.cloudera.org/).
