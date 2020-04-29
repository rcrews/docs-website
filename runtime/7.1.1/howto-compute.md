---
layout: foyer-grouped
breadcrumb-title: Cloudera Runtime How To
title: Compute

# How-to publications related to
# * YARN
# * ZooKeeper

publications:
- column:
  - title: Apache Hadoop YARN
    sub:

    - title: Using YARN Web UI and CLI
      url: yarn-using-ui-cli/index.html
      description: >-
        Explains how to use YARN Web UI to monitor clusters and
        YARN CLI to view logs for running application.

    - title: Configuring Apache Hadoop YARN Security
      url: yarn-security/index.html
      description: >-
        Provides information about Access Control List and how to use
        YARN with a secure cluster.

    - title: Apache Hadoop YARN High Availability
      url: yarn-high-availability/index.html
      description: >-
        Provides information about ResourceManager High Availability. It
        also describes the work preserving recovery process.

    - title: Managing and Allocating Cluster Resources using Capacity Scheduler
      url: yarn-allocate-resources/index.html
      description: >-
        Explains how to allocate cluster resources for the applications
        using Capacity Scheduler.

    - title: Managing Apache Hadoop YARN Services
      url: yarn-application-management/index.html
      description: >-
        Provides information about using the YARN REST APIs and
        YARN Services API to manage YARN services.

    - title: Managing YARN Docker Containers
      url: yarn-managing-docker-containers/index.html
      description: >-
        Explains how to configure YARN to manage Docker containers.

    - title: Configuring YARN Log Aggregation
      url: yarn-monitoring-clusters-applications/index.html
      description: >-
        Provides information about moving local log files of any application
        onto HDFS or a cloud-based storage.


- column:
  - title: Apache ZooKeeper
    sub:

    - title: Managing Apache ZooKeeper
      url: managing-zookeeper/index.html
      description: >-
        Provides information about adding and managing the Apache
        ZooKeeper service and replacing an Apache ZooKeeper role.

    - title: Configuring Apache ZooKeeper
      url: zookeeper-configuring/index.html
      description: >-
        Provides information about configuring the Apache
        ZooKeeper service.

    - title: Managing Apache ZooKeeper Security
      url: zookeeper-security/index.html
      description: >-
        Describes the configuration of the ZooKeeper server and the
        ZooKeeper client shell for Kerberos authentication. It also
        describes the verification of the ZooKeeper authentication and
        ACLs best practices.

---

Apache YARN manages resources for the applications running on your
cluster by allocating resources through scheduling,  limiting CPU usage,
and partitioning clusters. You can use Access Control Lists to use YARN
with a secure cluster. By using Apache YARN, you can optimize the use of
vcores and memory.
