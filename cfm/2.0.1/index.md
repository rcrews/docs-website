---
layout: product
title: Flow Management
version: 2.0.1
base-path: /cfm/2.0.1/

sections:
  - title: Release Notes
    # "name" here below must be "releasenotes" to get the black background
    name: releasenotes
    books:
      - title: Support Matrix
        url: support-matrix/index.html
      - title: Download
        url: download/index.html
      - title: Release Notes
        url: release-notes/index.html

---

Cloudera Flow Management (CFM) is a no-code data ingestion and
management solution powered by Apache NiFi. With NiFi’s intuitive
graphical interface and processors, CFM delivers highly scalable data
movement, transformation, and management capabilities to the enterprise.

CFM includes two primary components:

*Apache NiFi*
: the core data ingestion engine that has a no-code graphical user
interface and supports processors for connectivity, transformation, and
content routing.

*Apache NiFi Registry*
: The companion to NiFi that enables DevOps style development and
deployment of flow files. It also supports flow versioning, promoting
flows from one environment into another, and flow deployment.

{:.table}
{:.frame-all}
|---
If you want to install NiFi and NiFi Registry with... | Review this documentation
|-|-
| HDF | [HDF](/HDPDocuments/HDF3/HDF-3.5.1/index.html)
| CDH | [CFM](/cfm/1.0.1/index.html)
| CDP Public Cloud | [Cloudera DataFlow for Data Hub](/cdf-datahub/7.2.0/index.html)
| CDP Data Center | [CDP DataFlow](/dataflow/latest/index.html)
