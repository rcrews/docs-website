---
layout: product
title: Cloudera Runtime
version: 7.0.3
base-path: /runtime/7.0.3/

sections:
  - title: Release Notes
    # "name" here below must be "releasenotes" to get the black background
    name: releasenotes
    books:
      - title: Release Notes
        url: release-notes/index.html

---
Cloudera Runtime is the core open source software distribution within
Cloudera Data Platform (CDP) that is maintained, supported, versioned,
and packaged as a single entity by Cloudera. Cloudera Runtime includes
approximately 50 open source projects that comprise the core
distribution of data management tools within CDP, including Cloudera
Manager, which is used to configure and monitor clusters managed in CDP.

Cloudera Runtime does not include:

* CDP cloud services such as Data Hub, DWX, and MLX
* CDP management tools such as the Management Console, the Workload
  Manager, and the Replication Manager
* Data Catalog
* Add-on products such as CDSW, CDF, and Metron

To learn about installing, configuring, and managing clusters, refer
to the [Cloudera Manager documentation](/cloudera-manager/{{ page.version }}/index.html).
