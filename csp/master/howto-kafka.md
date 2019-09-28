---
layout: foyer
breadcrumb-title: Stream Processing How To
title: Apache Kafka

publications:
  - title: Setting up Kafka
    url: /documentation/enterprise/6/6.3/topics/kafka_setup.html
    external: external
    description: >-
      Describes how to set up Kafka after installation.

  - title: Integrating with Kafka
    url: /documentation/enterprise/6/6.3/topics/kafka_integration.html
    external: external
    description: >-
      Describes how to configure security, manage mulitple Kafka
      versions, manage topics across multiple Kafka clusters, set up an
      end-to-end streaming pipeline, develop Kafka clients, and manage
      metrics.

  - title: Administering Kafka
    url: /documentation/enterprise/6/6.3/topics/kafka_admin.html
    external: external
    description: >-
      Describes how to administer Kafka.

  - title: Kafka Performance Tuning
    url: /documentation/enterprise/6/6.3/topics/kafka_performance.html
    external: external
    description: >-
      Describes best practices for Kafka performance tuning.

  - title: Using Kafka Streams
    url: /documentation/kafka/latest/topics/kafka_streams.html
    external: external
    description: >-
      Describes where to get information about using Kafka Streams.

---

Apache Kafka is a distributed commit log service that functions much like a publish/subscribe messaging system, but with better throughput, built-in partitioning, replication, and fault tolerance. Kafka provides the following:

- Persistent messaging with O(1) disk structures that provide constant time performance, even with terabytes of stored messages.
- High throughput, supporting hundreds of thousands of messages per second, even with modest hardware.
- Explicit support for partitioning messages over Kafka servers and distributing consumption over a cluster of consumer machines while maintaining per-partition ordering semantics.
- Support for parallel data load into Hadoop.
