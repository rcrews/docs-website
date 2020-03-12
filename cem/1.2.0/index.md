---
layout: product
title: Edge Management
version: 1.2.0
base-path: /cem/1.2.0/

sections:
  - title: Release Notes
    # "name" here below must be "releasenotes" to get the black background
    name: releasenotes
    books:
      - title: Release Notes
        url: release-notes/index.html
      - title: Support Matrix
        url: support-matrix/index.html

---

Cloudera Edge Management is an edge management solution made up of edge
agents and an edge management hub. It manages, controls and monitors
edge agents to collect data from edge devices and push intelligence back
to the edge.

CEM consists of two components:

- Apache MiNiFi is a light-weight edge agent that implements the core
features of Apache NiFi, focusing on data collection & processing at the
edge.

- Edge Flow Manager (EFM) is an agent management hub that supports a
graphical flow-based programming model to develop, deploy & monitor edge
flows on thousands of MiNiFi agents.

CEM provides three main capabilities to the edge flow lifecycle:

**Flow Authorship:** Edge Flow Manager addresses the challenge of
developing IoT applications by offering a code free drag and drop
development environment. This development environment offers a NiFi like
experience for capturing, filtering, transforming, and transferring data
from edge agents to upstream enterprise systems like CDH.

**Flow Deployment:** Managing the deployment of IoT applications has
been an industry challenge. Edge Flow Manager alleviates this challenge
by offering a simple, yet powerful, model for deploying flows to agents.
Agents registered with Edge Flow Manager are notified when a new or
modified flow is available. The agents will access the flow and apply it
locally.

**Flow Monitoring:** Agents in CEM send periodic heartbeats to their
Edge Flow Manager instance. The heartbeat contains information about the
deployment and runtime metrics. Edge Flow Manager stores, analyzes, and
renders these heartbeats to end users. The heartbeats allows operators
to visualize details such as flow throughput, connection depths,
processors running, and overall agent health.
