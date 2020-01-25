---
layout: post
title:  New ODBC Driver v2.6.8 for Apache Impala Released
date:   2019-11-01 04:41:00 -0800
---

We are pleased to announce the release of Cloudera ODBC 2.6.8 driver for
Apache Impala. The release has the following fixes and enhancements:

## Enhancements and New Features

* [IMP-636] Updated Impala and CDH support. The driver now supports
  Impala versions 2.7 through 3.3, and CDH version 5.9 through 5.16 and
  6.0 through 6.2

* [IMP-666] Support for DATE data type. The driver now supports the DATE
  data type for Impala version 3.3 and later. For more information, see
  “Data Types” in the Installation and Configuration Guide.

## Resolved Issues

* [IMP-686] When an AnalysisException error occurs, the driver
  incorrectly classifies it as a syntax error and returns SQLState 42000.
* [IMP-687] After SQLFetech returns and error, if you attempt to call
  SQLFetch again. The driver terminates unexpectedly.

## Known Issues

The following are known issues that you may encounter due to limitations
in the data source, the driver, or an application.

Limited Support for BINARY, DATE, and TIME data types.

* BINARY is not a supported data type in Impala.
* DATE is supported only when you connect to Impala version 3.3 or
  later.
* As a result of the limitations above, some values of TIME data types
  are also not supported.

## Workflow Changes

The following changes may disrupt workflows from earlier versions

### Version 2.6.8

[IMP-680] Removed support for earlier versions of Impala and CDH

Beginning with this release, the driver no longer supports Impala 1.0.1
to 2.6 and CDH 5.0 to 5.8. For a list of support versions, see the
Installation and Configuration Guide.

### Version 2.6.0

Minimum TLS Version

Beginning with this release, the driver requires a minimum version of
TLS for encrypting the data store connection. By default, the driver
requires TLS version 1.2. This requirement may cause existing DSNs and
connection strings to stop working, if they are used to connect to data
stores that use a TLS version earlier than 1.2.

To resolve this, in your DSN or connection string, set the Minimum TLS
option (the Min_TLS property) to the appropriate version of TLS for your
server. For more information, see the Installation and Configuration
Guide.

## Getting Started with the Cloudera Driver

* Read the Cloudera Impala ODBC 2.6.8 Driver for
  [Impala Release Notes and Installation Guide](/documentation/other/connectors/impala-odbc/latest.html).

* Download the connector from the
  [Cloudera Connectors](https://www.cloudera.com/downloads/connectors/impala/odbc/2-6-8.html)
  page.

As always, we welcome your feedback. Please send your comments and
suggestions to the user group through our
[community forums](http://community.cloudera.com/).
You can also file bugs through our
external Jira projects on
[issues.cloudera.org](http://issues.cloudera.org/).
