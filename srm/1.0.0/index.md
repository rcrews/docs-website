---
layout: product
title: Streams Replication Manager
version: 1.0.0
base-path: /srm/1.0.0/

sections:
  - title: Release Notes
    # "name" here below must be "releasenotes" to get the black background
    name: releasenotes
    books:
      - title: Release Notes
        url: release-notes/index.html

---
Streams Replication Manager (SRM) is an enterprise-grade replication
solution that enables fault tolerant, scalable and robust cross-cluster
Kafka topic replication. SRM provides the ability to dynamically change
configurations and keeps the topic properties in sync across clusters at
high performance. SRM also delivers custom extensions that facilitate
installation, management and monitoring making SRM a complete
replication solution that is built for mission critical workloads.

<div style="position: relative">
  <img src="overview/images/srm-product-overview.png"
    alt="Architecture of Streams Replication Manager"
    width="390" height="301">
  <a style="position: absolute; left: 11%, top: 28%, width: 17%, height: 35%"
    title="Cloudera SRM Driver"
    href="using/topics/srm-driver.html"></a>
  <a style="position: absolute; left: 32%, top: 28%, width: 17%, height: 35%"
    title="Cloudera SRM Client"
    href="using/topics/srm-control.html"></a>
  <a style="position: absolute; left: 53%, top: 28%, width: 35%, height: 35%"
    title="Cloudera SRM Services"
    href="using/topics/srm-service.html"></a>
</div>
