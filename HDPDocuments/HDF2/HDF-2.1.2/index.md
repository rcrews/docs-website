---
layout: hwx_product
title: HDF
version: 2.1.2
base-path: /HDPDocuments/HDF2/HDF-2.1.2/

sections:
  - title: Release Notes
    name: releasenotes
    books:
      - title: Release Notes
        url: bk_dataflow-release-notes/content/ch_hdf_relnotes.html
        pdf: bk_dataflow-release-notes/bk_dataflow-release-notes.pdf
#      - title: Software Downloads
#        url: downloads.html

  - title: Install & Upgrade
    name: install
    books:
      - title: Apache Ambari Installation
        url: bk_dataflow-ambari-installation/index.html
        pdf: bk_dataflow-ambari-installation/bk_dataflow-ambari-installation.pdf
        contents:
          - chapter: Getting Ready
            url: bk_dataflow-ambari-installation/content/ch_getting_ready.html
          - chapter: Installing Ambari
            url: bk_dataflow-ambari-installation/content/ch_installing-ambari.html
          - chapter: Deploying HDF using Ambari
            url: bk_dataflow-ambari-installation/content/ch_hdf-ambari-deployment.html
          - chapter: Installing Using a Local Repository
            url: bk_dataflow-ambari-installation/content/ch_using-local-repo.html
          - chapter: Enabling SSL for NiFi
            url: bk_dataflow-ambari-installation/content/ch_enabling-ssl-for-nifi.html
          - chapter: Installing and Using Ranger
            url: bk_dataflow-ambari-installation/content/ch_installing-and-using-ranger.html
          - chapter: Enabling Kerberos 
            url: bk_dataflow-ambari-installation/content/ch_new-chapter.html

      - title: Apache Ambari Upgrade
        url: bk_dataflow-ambari-upgrade/index.html
        pdf: bk_dataflow-ambari-upgrade/bk_dataflow-ambari-upgrade.pdf
        contents:
          - chapter: Upgrading Ambari and Your Hortonworks Stack 
            url: bk_dataflow-ambari-upgrade/content/ambari_upgrade_guide.html
          - chapter: Preparing to Upgrade 
            url: bk_dataflow-ambari-upgrade/content/preparing-to-upgrade.html
          - chapter: Upgrading Ambari 
            url: bk_dataflow-ambari-upgrade/content/upgrading_ambari.html
          - chapter: Upgrading the Management Pack
            url: bk_dataflow-ambari-upgrade/content/ch_upgrade-mpack.html
          - chapter: Upgrading HDF
            url: bk_dataflow-ambari-upgrade/content/ch_upgrade-hdf.html

      - title: Command Line Installation
        url: bk_dataflow-command-line-installation/index.html
        pdf: bk_dataflow-command-line-installation/bk_dataflow-command-line-installation.pdf
        contents:
          - chapter: Before You Begin
            url: bk_dataflow-command-line-installation/content/ch_before_you_begin.html
          - chapter: Installing NiFi
            url: bk_dataflow-command-line-installation/content/ch_HDF_installing.html
          - chapter: Installing Apache ZooKeeper
            url: bk_dataflow-command-line-installation/content/ch_install_zookeeper_chapter.html
          - chapter: Installing and Configuring Apache Kafka
            url: bk_dataflow-command-line-installation/content/ch_installing_kafka_chapter.html
          - chapter: Installing and Configuring Apache Storm
            url: bk_dataflow-command-line-installation/content/ch_installing_storm_chapter.html
          - chapter: Installing Apache Ranger
            url: bk_dataflow-command-line-installation/content/ch_installing_ranger_chapter.html

      - title: Upgrade
        url: bk_dataflow-upgrade/index.html
        pdf: bk_dataflow-upgrade/bk_dataflow-upgrade.pdf
        contents:
          - chapter: NiFi Upgrade Guide
            url: bk_dataflow-upgrade/content/ch_dataflow-upgrade.html

  - title: Getting Started
    name: get-started
    books:
      - title: Getting Started
        url: bk_dataflow-getting-started/index.html
        pdf: bk_dataflow-getting-started/bk_dataflow-getting-started.pdf
        contents:
          - chapter: Getting Started with Apache NiFi
            url: bk_dataflow-getting-started/content/ch_getting-started.html

      - title: MiNiFi Quick Start
        url: bk_dataflow-minifi-quick-start/index.html
        pdf: bk_dataflow-minifi-quick-start/bk_dataflow-minifi-quick-start.pdf
        contents:
          - chapter: MiNiFi Java Agent Quick Start 
            url: bk_dataflow-minifi-quick-start/content/ch_minifi-quick-start.html

      - title: Overview
        url: bk_dataflow-overview/index.html
        pdf: bk_dataflow-overview/bk_dataflow-overview.pdf
        contents:
          - chapter: Overview
            url: bk_dataflow-overview/content/ch_overview.html

  # - title: Security
  #  name: security
  #  books:
  #    - title: Security
  #      url: bk_dataflow-security/content/index.html
  #      pdf: bk_dataflow-security/bk_dataflow-security.pdf
  #
  - title: Dataflow
    name: dataflow
    books:

      - title: User Guide
        url: bk_dataflow-user-guide/index.html
        pdf: bk_dataflow-user-guide/bk_dataflow-user-guide.pdf
        contents:
          - chapter: NiFi User Guide
            url: bk_dataflow-user-guide/content/ch_user-guide.html

      - title: Administration
        url: bk_dataflow-administration/index.html
        pdf: bk_dataflow-administration/bk_dataflow-administration.pdf
        contents:
          - chapter: NiFi System Administrator's Guide
            url: bk_dataflow-administration/content/ch_administration-guide.html

      - title: MiNiFi Administration
        url: bk_dataflow-minifi-administration/index.html
        pdf: bk_dataflow-minifi-administration/bk_dataflow-minifi-administration.pdf
        contents:
          - chapter: MiNiFi System Administrator's Guide
            url: bk_dataflow-minifi-administration/content/ch_minifi-java-administration-guide.html

      - title: Expression Language Guide
        url: bk_dataflow-expression-language/index.html
        pdf: bk_dataflow-expression-language/bk_dataflow-expression-language.pdf
        contents:
          - chapter: Apache NiFi Expression Language Guide
            url: bk_dataflow-expression-language/content/ch_expression-language-guide.html

      - title: Developer Guide
        url: bk_dataflow-developer-guide/index.html
        pdf: bk_dataflow-developer-guide/bk_dataflow-developer-guide.pdf
        contents:
          - chapter: NiFi Developer's Guide
            url: bk_dataflow-developer-guide/content/ch_developer-guide.html

      - title: REST API Reference
        url: https://nifi.apache.org/docs/nifi-docs/rest-api/index.html

  - title: Streaming Analytics
    name: streaming-analytics
    books:
      - title: Apache Storm Component Guide
        url: ../../HDP2/HDP-2.5.3/bk_storm-component-guide/content/ch_storm-overview.html
        pdf: ../../HDP2/HDP-2.5.3/bk_storm-component-guide/bk_storm-component-guide.pdf

      - title: Apache Kafka Documentation
        url: http://kafka.apache.org/0100/documentation.html

---

This is the content below YAML.
