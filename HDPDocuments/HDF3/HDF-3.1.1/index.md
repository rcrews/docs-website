---
layout: hwx_product
title: DataFlow
version: 3.1.1
base-path: /HDPDocuments/HDF3/HDF-3.1.1/

sections:
  - title: Release Notes
    name: releasenotes
    books:
      - title: Release Notes
        url: bk_release-notes/content/ch_hdf_relnotes.html
        pdf: bk_release-notes/bk_release-notes.pdf
      - title: Support Matrix
        url: https://supportmatrix.hortonworks.com/
      - title: Overview
        url: bk_overview/content/stream-proc-flow-mgmt.html
        pdf: bk_overview/bk_overview.pdf

  - title: Install & Upgrade
    name: install
    books:
      - title: Planning Your Deployment
        url: bk_planning-your-deployment/index.html
        pdf: bk_planning-your-deployment/bk_planning-your-deployment.pdf
        contents:
          - chapter: Deployment Scenarios
            url: bk_planning-your-deployment/content/ch_deployment-scenarios.html
          - chapter: HDF Cluster Types and Recommendations
            url: bk_planning-your-deployment/content/ch_cluster-recommendations.html
          - chapter: Production Cluster Guidelines
            url: bk_planning-your-deployment/content/ch_production-cluster-guidelines.html
          - chapter: Hardware Sizing  Recommendations
            url: bk_planning-your-deployment/content/ch_hardware-sizing.html
          - chapter: Navigating the HDF Library
            url: bk_planning-your-deployment/content/ch_more-information.html

      - title: Installing an HDF Cluster
        url: bk_installing-hdf/index.html
        pdf: bk_installing-hdf/bk_installing-hdf.pdf
        contents:
          - chapter: Installing Ambari
            url: bk_installing-hdf/content/ch_install-ambari.html
          - chapter: Installing Databases
            url: bk_installing-hdf/content/ch_install-databases.html
          - chapter: Installing the HDF Management Pack
            url: bk_installing-hdf/content/ch_install-mpack.html
          - chapter: Install an HDF Cluster Using Ambari
            url: bk_installing-hdf/content/ch_install-hdf.html
          - chapter: Configure HDF Components
            url: bk_installing-hdf/content/ch_configure-hdf-cluster.html
          - chapter: Configuring Schema Registry and SAM for High Availability
            url: bk_installing-hdf/content/ch_configure-ha.html
          - chapter: Install the Storm Ambari View
            url: bk_installing-hdf/content/ch_install-storm-view.html
          - chapter: Using a Local Repository
            url: bk_installing-hdf/content/ch_using-local-repos.html
          - chapter: Navigating the HDF Library
            url: bk_installing-hdf/content/ch_more-information.html

      - title: Installing HDF Services on a New HDP Cluster
        url: bk_installing-hdf-and-hdp/index.html
        pdf: bk_installing-hdf-and-hdp/bk_installing-hdf-and-hdp.pdf
        contents:
          - chapter: Installing Ambari
            url: bk_installing-hdf-and-hdp/content/ch_install-ambari.html
          - chapter: Deploying an HDP Cluster Using Ambari
            url: bk_installing-hdf-and-hdp/content/ch_install-hdp.html
          - chapter: Installing the HDF Management Pack
            url: bk_installing-hdf-and-hdp/content/ch_install-mpack.html
          - chapter: Update the HDF Base URL
            url: bk_installing-hdf-and-hdp/content/ch_base-url.html
          - chapter: Add HDF Services to an HDP Cluster
            url: bk_installing-hdf-and-hdp/content/ch_add-hdf-to-hdp.html
          - chapter: Configure HDF Components
            url: bk_installing-hdf-and-hdp/content/ch_configure-hdf-services.html
          - chapter: Configuring Schema Registry and SAM for High Availability
            url: bk_installing-hdf-and-hdp/content/ch_configure-ha.html
          - chapter: Install the Storm Ambari View
            url: bk_installing-hdf-and-hdp/content/ch_install-storm-view.html
          - chapter: Using a Local Repository
            url: bk_installing-hdf-and-hdp/content/ch_using-local-repos.html
          - chapter: Navigating the HDF Library
            url: bk_installing-hdf-and-hdp/content/ch_more-information.html

      - title: Installing HDF Services on an Existing HDP Cluster
        url: bk_installing-hdf-on-hdp/index.html
        pdf: bk_installing-hdf-on-hdp/bk_installing-hdf-on-hdp.pdf
        contents:
          - chapter: Upgrading Ambari and the HDF Management Pack
            url: bk_installing-hdf-on-hdp/content/upgrading_ambari.html
          - chapter: Upgrading to HDP 2.6.4
            url: bk_installing-hdf-on-hdp/content/ch_upgrade-hdp.html
          - chapter: Installing the HDF Management Pack
            url: bk_installing-hdf-on-hdp/content/ch_install-mpack.html
          - chapter: Update the HDF Base URL
            url: bk_installing-hdf-on-hdp/content/ch_base-url.html
          - chapter: Add HDF Services to an HDP Cluster
            url: bk_installing-hdf-on-hdp/content/ch_add-hdf-to-hdp.html
          - chapter: Configure HDF Components
            url: bk_installing-hdf-on-hdp/content/ch_configure-hdf-services.html
          - chapter: Configuring Schema Registry and SAM for High Availability
            url: bk_installing-hdf-on-hdp/content/ch_configure-ha.html
          - chapter: Install the Storm Ambari View
            url: bk_installing-hdf-on-hdp/content/ch_install-storm-view.html
          - chapter: Using a Local Repository
            url: bk_installing-hdf-on-hdp/content/ch_using-local-repos.html
          - chapter: Navigating the HDF Library
            url: bk_installing-hdf-on-hdp/content/ch_more-information.html

      - title: Apache Ambari Managed HDF Upgrade
        url: bk_ambari-upgrade/index.html
        pdf: bk_ambari-upgrade/bk_ambari-upgrade.pdf
        contents:
          - chapter: Upgrading Ambari and HDF 3.1.x
            url: bk_ambari-upgrade/content/ambari_upgrade_guide.html
          - chapter: Preparing to Upgrade
            url: bk_ambari-upgrade/content/preparing-to-upgrade.html
          - chapter: Upgrading Ambari and the HDF Management Pack
            url: bk_ambari-upgrade/content/upgrading_ambari.html
          - chapter: Upgrading HDF
            url: bk_ambari-upgrade/content/ch_upgrade-hdf.html
          - chapter: Upgrading HDF Services on an HDP Cluster
            url: bk_ambari-upgrade/content/ch_upgrade-hdf-on-hdp.html

      - title: MiNiFi Quick Start
        url: bk_minifi-quick-start/index.html
        pdf: bk_minifi-quick-start/bk_minifi-quick-start.pdf
        contents:
          - chapter: MiNiFi Java Agent Quick Start
            url: bk_minifi-quick-start/content/ch_minifi-quick-start.html

      - title: Installing NiFi
        url: bk_installing-nifi/index.html
        pdf: bk_installing-nifi/bk_installing-nifi.pdf
        contents:
          - chapter: NiFi Installation
            url: bk_installing-nifi/content/ch_nifi-installation.xml.html
          - chapter: Docker Installation
            url: bk_installing-nifi/content/ch_docker-installation.xml.html

  - title: Install & Upgrade for IBM Power Systems
    name: install_ps
    books:
      - title: Planning your Deployment - IBM Power Systems
        url: bk_planning-your-deployment-ppc/index.html
        pdf: bk_planning-your-deployment-ppc/bk_planning-your-deployment-ppc.pdf
        contents:
          - chapter: Deployment Scenarios
            url: bk_planning-your-deployment-ppc/content/ch_deployment-scenarios.html
          - chapter: HDF Cluster Types and Recommendations
            url: bk_planning-your-deployment-ppc/content/ch_cluster-recommendations.html
          - chapter: Production Cluster Guidelines
            url: bk_planning-your-deployment-ppc/content/ch_production-cluster-guidelines.html
          - chapter: Hardware Sizing  Recommendations
            url: bk_planning-your-deployment-ppc/content/ch_hardware-sizing.html
          - chapter: Navigating the HDF Library
            url: bk_planning-your-deployment-ppc/content/ch_more-information.html

      - title: Installing an HDF Cluster - IBM Power Systems
        url: bk_installing-hdf-ppc/index.html
        pdf: bk_installing-hdf-ppc/bk_installing-hdf-ppc.pdf
        contents:
          - chapter: Installing Ambari
            url: bk_installing-hdf-ppc/content/ch_Installing_Ambari.html
          - chapter: Installing Databases
            url: bk_installing-hdf-ppc/content/ch_install-databases.html
          - chapter: Installing the HDF Management Pack
            url: bk_installing-hdf-ppc/content/ch_install-mpack.html
          - chapter: Install an HDF Cluster Using Ambari
            url: bk_installing-hdf-ppc/content/ch_install-hdf.html
          - chapter: Configure HDF Components
            url: bk_installing-hdf-ppc/content/ch_configure-hdf-cluster.html
          - chapter: Configuring Schema Registry and SAM for High Availability
            url: bk_installing-hdf-ppc/content/ch_configure-ha.html
          - chapter: Install the Storm Ambari View
            url: bk_installing-hdf-ppc/content/ch_install-storm-view.html
          - chapter: Using a Local Repository
            url: bk_installing-hdf-ppc/content/ch_using-local-repos.html
          - chapter: Navigating the HDF Library
            url: bk_installing-hdf-ppc/content/ch_more-information.html

      - title: Installing HDF Services on a New HDP Cluster - IBM Power Systems
        url: bk_installing-hdf-and-hdp-ppc/index.html
        pdf: bk_installing-hdf-and-hdp-ppc/bk_installing-hdf-and-hdp-ppc.pdf
        contents:
          - chapter: Installing Ambari
            url: bk_installing-hdf-and-hdp-ppc/content/ch_Installing_Ambari.html
          - chapter: Installing Databases
            url: bk_installing-hdf-and-hdp-ppc/content/ch_install-databases.html
          - chapter: Deploying an HDP Cluster Using Ambari
            url: bk_installing-hdf-and-hdp-ppc/content/ch_install-hdp.html
          - chapter: Installing the HDF Management Pack
            url: bk_installing-hdf-and-hdp-ppc/content/ch_install-mpack.html
          - chapter: Update the HDF Base URL
            url: bk_installing-hdf-and-hdp-ppc/content/ch_base-url.html
          - chapter: Add HDF Services to an HDP Cluster
            url: bk_installing-hdf-and-hdp-ppc/content/ch_add-hdf-to-hdp.html
          - chapter: Configure HDF Components
            url: bk_installing-hdf-and-hdp-ppc/content/ch_configure-hdf-services.html
          - chapter: Configuring Schema Registry and SAM for High Availability
            url: bk_installing-hdf-and-hdp-ppc/content/ch_configure-ha.html
          - chapter: Install the Storm Ambari View
            url: bk_installing-hdf-and-hdp-ppc/content/ch_install-storm-view.html
          - chapter: Using a Local Repository
            url: bk_installing-hdf-and-hdp-ppc/content/ch_using-local-repos.html
          - chapter: Navigating the HDF Library
            url: bk_installing-hdf-and-hdp-ppc/content/ch_more-information.html

      - title: Installing HDF Services on an Existing HDP Cluster - IBM Power Systems
        url: bk_installing-hdf-on-hdp-ppc/index.html
        pdf: bk_installing-hdf-on-hdp-ppc/bk_installing-hdf-on-hdp-ppc.pdf
        contents:
          - chapter: Upgrading Ambari and the HDF Management Pack
            url: bk_installing-hdf-on-hdp-ppc/content/upgrading_ambari.html
          - chapter: Upgrading to HDP 2.6.4
            url: bk_installing-hdf-on-hdp-ppc/content/ch_upgrade-hdp.html
          - chapter: Installing Databases
            url: bk_installing-hdf-on-hdp-ppc/content/ch_install-databases.html
          - chapter: Installing the HDF Management Pack
            url: bk_installing-hdf-on-hdp-ppc/content/ch_install-mpack.html
          - chapter: Update the HDF Base URL
            url: bk_installing-hdf-on-hdp-ppc/content/ch_base-url.html
          - chapter: Add HDF Services to an HDP Cluster
            url: bk_installing-hdf-on-hdp-ppc/content/ch_add-hdf-to-hdp.html
          - chapter: Configure HDF Components
            url: bk_installing-hdf-on-hdp-ppc/content/ch_configure-hdf-services.html
          - chapter: Configuring Schema Registry and SAM for High Availability
            url: bk_installing-hdf-on-hdp-ppc/content/ch_configure-ha.html
          - chapter: Install the Storm Ambari View
            url: bk_installing-hdf-on-hdp-ppc/content/ch_install-storm-view.html
          - chapter: Using a Local Repository
            url: bk_installing-hdf-on-hdp-ppc/content/ch_using-local-repos.html
          - chapter: Navigating the HDF Library
            url: bk_installing-hdf-on-hdp-ppc/content/ch_more-information.html

      - title: Apache Ambari Managed HDF Upgrade - IBM Power Systems
        url: bk_ambari-upgrade-ppc/index.html
        pdf: bk_ambari-upgrade-ppc/bk_ambari-upgrade-ppc.pdf
        contents:
          - chapter: Upgrading Ambari and HDF 3.1.x
            url: bk_ambari-upgrade-ppc/content/ambari_upgrade_guide.html
          - chapter: Preparing to Upgrade
            url: bk_ambari-upgrade-ppc/content/preparing-to-upgrade.html
          - chapter: Upgrading Ambari and the HDF Management Pack
            url: bk_ambari-upgrade-ppc/content/upgrading_ambari.html
          - chapter: Upgrading HDF
            url: bk_ambari-upgrade-ppc/content/ch_upgrade-hdf.html
          - chapter: Upgrading HDF Services on an HDP Cluster
            url: bk_ambari-upgrade-ppc/content/ch_upgrade-hdf-on-hdp.html

  - title: Security
    name: security
    books:
      - title: Security
        url: bk_security/index.html
        pdf: bk_security/bk_security.pdf
        contents:
          - chapter: Enabling Kerberos
            url: bk_security/content/ch_enabling-kerberos.html
          - chapter: NiFi Authentication
            url: bk_security/content/ch_enabling-ssl-for-nifi.html
          - chapter: Proxying NiFi with Apache Knox
            url: bk_security/content/ch_enabling-knox-for-nifi.html
          - chapter: SAM Authentication
            url: bk_security/content/ch_sam-authentication.html
          - chapter: Installing Ranger
            url: bk_security/content/ch_installing-ranger.html
          - chapter: Authorization with Ranger
            url: bk_security/content/ch_installing-and-using-ranger.html
          - chapter: NiFi Authorization
            url: bk_security/content/ch_nifi-authorization.html
          - chapter: SAM Authorization
            url: bk_security/content/ch_sam-authorization.html
          - chapter: Deploying SAM Applications in a Secure Cluster
            url: bk_security/content/ch_secure-sam.html

  - title: Dataflow
    name: dataflow
    books:
      - title: Getting Started with Apache NiFi
        url: bk_getting-started-with-apache-nifi/index.html
        pdf: bk_getting-started-with-apache-nifi/bk_getting-started-with-apache-nifi.pdf
        contents:
          - chapter: Getting Started with Apache NiFi
            url: bk_getting-started-with-apache-nifi/content/ch_getting-started.html

      - title: Apache NiFi User Guide
        url: bk_user-guide/index.html
        pdf: bk_user-guide/bk_user-guide.pdf
        contents:
          - chapter: Apache NiFi User Guide
            url: bk_user-guide/content/ch_user-guide.html

      - title: Apache NiFi Administration
        url: bk_administration/index.html
        pdf: bk_administration/bk_administration.pdf
        contents:
          - chapter: NiFi System Administrator's Guide
            url: bk_administration/content/ch_administration-guide.html

      - title: Apache NiFi Expression Language Guide
        url: bk_expression-language/index.html
        pdf: bk_expression-language/bk_expression-language.pdf
        contents:
          - chapter: Apache NiFi Expression Language Guide
            url: bk_expression-language/content/ch_expression-language-guide.html

      - title: Apache NiFi Developer Guide
        url: bk_developer-guide/index.html
        pdf: bk_developer-guide/bk_developer-guide.pdf
        contents:
          - chapter: NiFi Developer's Guide
            url: bk_developer-guide/content/ch_developer-guide.html

      - title: Apache NiFi RecordPath Guide
        url: bk_recordpath-user-guide/index.html
        pdf: bk_recordpath-user-guide/bk_recordpath-user-guide.pdf
        contents:
          - chapter: Apache NiFi RecordPath Guide
            url: bk_recordpath-user-guide/content/ch_nifi-recordpath-guide.html

      - title: Apache NiFi REST API Reference
        url: https://nifi.apache.org/docs/nifi-docs/rest-api/index.html

      - title: Apache NiFi Registry User Guide
        url: bk_registry-user-guide/index.html
        pdf: bk_registry-user-guide/bk_registry-user-guide.pdf
        contents:
          - chapter: Apache NiFi Registry User Guide
            url: bk_registry-user-guide/content/ch_registry-user-guide.html

      - title: Apache NiFi Registry Administration
        url: bk_registry-administration/index.html
        pdf: bk_registry-administration/bk_registry-administration.pdf
        contents:
          - chapter: Apache NiFi Registry System Administrator's Guide
            url: bk_registry-administration/content/ch_registry-administration-guide.html

      - title: Apache MiNiFi Administration
        url: bk_minifi-administration/index.html
        pdf: bk_minifi-administration/bk_minifi-administration.pdf
        contents:
          - chapter: MiNiFi System Administrator's Guide
            url: bk_minifi-administration/content/ch_minifi-java-administration-guide.html

  - title: Streaming Analytics
    name: streaming-analytics
    books:
      - title: Getting Started with Stream Analytics
        url: bk_getting-started-with-stream-analytics/index.html
        pdf: bk_getting-started-with-stream-analytics/bk_getting-started-with-stream-analytics.pdf
        contents:
          - chapter: Building an End-to-End Stream Application
            url: bk_getting-started-with-stream-analytics/content/ch_building-end-to-end-app.html
          - chapter: Prepare Your Environment
            url: bk_getting-started-with-stream-analytics/content/ch_prepare-your-environment.html
          - chapter: Creating a Dataflow Application
            url: bk_getting-started-with-stream-analytics/content/ch_create-dataflow-application.html
          - chapter: Creating a Stream Analytics Application
            url: bk_getting-started-with-stream-analytics/content/ch_sam-building-an-app.html
          - chapter: Deploy an Application
            url: bk_getting-started-with-stream-analytics/content/ch_deploy-application.html
          - chapter: "Advanced: Performing Predictive Analytics on the Stream"
            url: bk_getting-started-with-stream-analytics/content/ch_predictive-analytics.html
          - chapter: Creating Visualizations Using Superset
            url: bk_getting-started-with-stream-analytics/content/ch_sam-create-insights.html
          - chapter: SAM Test Mode
            url: bk_getting-started-with-stream-analytics/content/ch_sam-test-mode.html
          - chapter: Creating Custom Sources and Sinks
            url: bk_getting-started-with-stream-analytics/content/ch_custom-source-and-sink.html
          - chapter: Stream Operations
            url: bk_getting-started-with-stream-analytics/content/ch_stream-operations.html

      - title: Streaming Analytics Manager User Guide
        url: bk_streaming-analytics-manager-user-guide/index.html
        pdf: bk_streaming-analytics-manager-user-guide/bk_streaming-analytics-manager-user-guide.pdf
        contents:
          - chapter: Streaming Analytics Manager Environment Setup and Managing Stream Apps
            url: bk_streaming-analytics-manager-user-guide/content/ch_sam-manage.html
          - chapter: Building an Application
            url: bk_streaming-analytics-manager-user-guide/content/ch_sam-building-an-app.html
          - chapter: Creating Visualizations Using Superset
            url: bk_streaming-analytics-manager-user-guide/content/ch_sam-create-insights.html
          - chapter: Adding Custom Builder Components
            url: bk_streaming-analytics-manager-user-guide/content/ch_sam-adding-custom-components.html
          - chapter: Stream Operations
            url: bk_streaming-analytics-manager-user-guide/content/ch_stream-operations.html
          - chapter: Source, Processor, and Sink Configuration Values
            url: bk_streaming-analytics-manager-user-guide/content/ch_configurations.html

      - title: Schema Registry User Guide
        url: bk_schema-registry-user-guide/index.html
        pdf: bk_schema-registry-user-guide/bk_schema-registry-user-guide.pdf
        contents:
          - chapter: Integrating Schema Registry
            url: bk_schema-registry-user-guide/content/ch_integrating-schema-registry.html
          - chapter: Using Schema Registry
            url: bk_schema-registry-user-guide/content/ch_using-schema-registry.html

      - title: Apache Storm Component Guide
        url: ../../HDP2/HDP-2.6.4/bk_storm-component-guide/content/ch_storm-overview.html
        pdf: ../../HDP2/HDP-2.6.4/bk_storm-component-guide/bk_storm-component-guide.pdf

      - title: Apache Kafka Component Guide
        url: ../../HDP2/HDP-2.6.4/bk_kafka-component-guide/content/ch_introduction_kafka.html
        pdf: ../../HDP2/HDP-2.6.4/bk_kafka-component-guide/bk_kafka-component-guide.pdf

---

This is the content below YAML.
