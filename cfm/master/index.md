---
layout: product
title: Flow Management
version: master
base-path: /cfm/master/

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

<table style="border-collapse: collapse; border: .5px solid #666; margin-top: 3em;">
  <tr style="background: #ddd">
    <th style="padding: .3rem; border-bottom: .5px solid #666; border-right: .5px solid #666;">If you want to install NiFi and NiFi Registry with…</th>
    <th style="padding: .3rem; border-bottom: .5px solid #666;">Review this documentation </th>
  </tr>
  <tr>
    <td style="padding: .3rem; border-bottom: .5px solid #666; border-right: .5px solid #666;">HDF</td>
    <td style="padding: .3rem; border-bottom: .5px solid #666">
      <a href="/HDPDocuments/HDF3/HDF-3.5.1/index.html">HDF 3.5.1</a>
    </td>
  </tr>
  <tr style="border-bottom: .5px solid #666">
    <td style="padding: .3rem; border-bottom: .5px solid #666; border-right: .5px solid #666;">CDH</td>
    <td style="padding: .3rem; border-bottom: .5px solid #666">
      <a href="/cfm/master/index.html">CFM 1.0.1 </a>
    </td>
  </tr>
  <tr style="border-bottom: .5px solid #666">
    <td style="padding: .3rem; border-bottom: .5px solid #666; border-right: .5px solid #666;">CDP Public Cloud</td>
    <td style="padding: .3rem; border-bottom: .5px solid #666">
      <a href="/cdf-datahub/master/index.html">Cloudera DataFlow for Data Hub 7.2.0</a>
    </td>
  </tr>
  <tr style="border-bottom: .5px solid #666">
    <td style="padding: .3rem; border-bottom: .5px solid #666; border-right: .5px solid #666;">CDP Data Center</td>
    <td style="padding: .3rem; border-bottom: .5px solid #666">
      <a href="/dataflow/master/index.html">CDP DataFlow</a>
    </td>
  </tr>
</table>

# {:.table}
# {:.frame-all}
# |---
# If you want to install NiFi and NiFi Registry with... | Review this documentation
# |-|-
# | HDF | [HDF](/HDPDocuments/HDF3/HDF-3.5.1/index.html)
# | CDH | [CFM](/cfm/1.0.1/index.html)
# | CDP Public Cloud | [Cloudera DataFlow for Data Hub](/cdf-datahub/7.2.0/index.html)
# | CDP Data Center | [CDP DataFlow](/dataflow/master/index.html)
