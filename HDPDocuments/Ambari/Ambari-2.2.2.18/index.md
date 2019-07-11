---
layout: hwx_product
title: Ambari
version: 2.2.2.18
base-path: /HDPDocuments/Ambari-2.2.2.18/

sections:
  - title: Release Notes
    name: releasenotes
    books:
      - title: Release Notes
        url: bk_ambari-release-notes/content/ch_relnotes-ambari-2.2.2.18.html
        pdf: bk_ambari-release-notes/bk_ambari-release-notes.pdf

  - title: Install & Upgrade
    name: install
    books:
      - title: Apache Ambari Installation
        url: bk_ambari-installation/index.html
        pdf: bk_ambari-installation/bk_ambari-installation.pdf
        contents:
          - chapter: Getting Ready
            url: bk_ambari-installation/content/ch_Getting_Ready.html
          - chapter: Installing Ambari
            url: bk_ambari-installation/content/ch_Installing_Ambari.html
          - chapter: Installing, Configuring, and Deploying a HDP Cluster
            url: bk_ambari-installation/content/ch_Deploy_and_Configure_a_HDP_Cluster.html

      - title: Apache Ambari Upgrade
        url: bk_ambari-upgrade/index.html
        pdf: bk_ambari-upgrade/bk_ambari-upgrade.pdf
        contents:
          - chapter: Upgrading Ambari and HDP
            url: bk_ambari-upgrade/content/_ambari_upgrade_guide.html
          - chapter: Getting Ready to Upgrade Ambari and HDP
            url: bk_ambari-upgrade/content/_preparing_to_upgrade_ambari_and_hdp.html
          - chapter: Upgrading Ambari
            url: bk_ambari-upgrade/content/_upgrading_ambari.html
          - chapter: Upgrading HDP
            url: bk_ambari-upgrade/content/_upgrading_hdp_stack.html

  - title: Apache Ambari Administration
    name: admin
    books:
      - title: Apache Ambari Administration
        url: bk_ambari-administration/index.html
        pdf: bk_ambari-administration/bk_ambari-administration.pdf
        contents:
          - chapter: "Administering Ambari: Overview"
            url: bk_ambari-administration/content/_ambari_admin_overview.html
          - chapter: Ambari Administrator Tasks
            url: bk_ambari-administration/content/ch_ambari_admin_tasks.html
          - chapter: Managing Users and Groups
            url: bk_ambari-administration/content/_managing_users_and_groups.html
          - chapter: Managing Views
            url: bk_ambari-administration/content/ch_managing_views.html

      - title: Apache Ambari Reference
        url: bk_ambari-reference/index.html
        pdf: bk_ambari-reference/bk_ambari-reference.pdf
        contents:
          - chapter: Installing Ambari Agents Manually
            url: bk_ambari-reference/content/ch_amb_ref_installing_ambari_agents_manually.html
          - chapter: Customizing HDP Services
            url: bk_ambari-reference/content/ch_amb_ref_customizing_hdp_services.html
          - chapter: Using Custom Host Names
            url: bk_ambari-reference/content/ch_amb_ref_using_custom_host_names.html
          - chapter: Changing Host Names
            url: bk_ambari-reference/content/ch_changing_host_names.html
          - chapter: Moving the Ambari Server
            url: bk_ambari-reference/content/ch_amb_ref_moving_the_ambari_server.html
          - chapter: Configuring LZO Compression
            url: bk_ambari-reference/content/ch_amb_ref_configuring_lzo_compression.html
          - chapter: Using Non-Default Databases
            url: bk_ambari-reference/content/ch_amb_ref_using_non_default_databases.html
          - chapter: Setting up Ambari to use an Internet Proxy Server
            url: bk_ambari-reference/content/ch_setting_up_an_internet_proxy_server_for_ambari.html
          - chapter: Configuring Network Port Numbers
            url: bk_ambari-reference/content/ch_configuring_network_port_numbers.html
          - chapter: Change the JDK Version
            url: bk_ambari-reference/content/ch_changing_the_jdk_version_on_an_existing_cluster.html
          - chapter: Using Ambari Blueprints
            url: bk_ambari-reference/content/ch_using_ambari_blueprints.html
          - chapter: Tuning Ambari Performance
            url: bk_ambari-reference/content/ch_tuning_ambari_performance.html

      - title: Apache Ambari User Guide
        url: bk_ambari-user-guide/index.html
        pdf: bk_ambari-user-guide/bk_ambari-user-guide.pdf
        contents:
          - chapter: "Overview: Ambari User’s Guide"
            url: bk_ambari-user-guide/content/ch_Overview_Ambari_Users_Guide.html
          - chapter: Viewing the Ambari Dashboards
            url: bk_ambari-user-guide/content/ch_viewing_the_ambari_dashboards.html
          - chapter: Managing Hosts
            url: bk_ambari-user-guide/content/ch_managing_hosts.html
          - chapter: Managing Services
            url: bk_ambari-user-guide/content/ch_managing_services.html
          - chapter: Managing Service High Availability
            url: bk_ambari-user-guide/content/ch_managing_service_high_availability.html
          - chapter: Managing Configurations
            url: bk_ambari-user-guide/content/ch_managing_configurations.html
          - chapter: Administering the Cluster
            url: bk_ambari-user-guide/content/ch_administering_the_cluster.html
          - chapter: Monitoring and Alerts
            url: bk_ambari-user-guide/content/ch_monitoring_and_alerts.html
          - chapter: Using Ambari Metrics
            url: bk_ambari-user-guide/content/ch_using_ambari_metrics.html

      - title: Apache Ambari Troubleshooting
        url: bk_ambari-troubleshooting/index.html
        pdf: bk_ambari-troubleshooting/bk_ambari-troubleshooting.pdf
        contents:
          - chapter: Reviewing Ambari Log Files
            url: bk_ambari-troubleshooting/content/_reviewing_ambari_log_files.html
          - chapter: Resolving Ambari Install and Setup Problems
            url: bk_ambari-troubleshooting/content/_resolving_ambari_install_and_setup_problems.html
          - chapter: Resolving Cluster Deployment Problems
            url: bk_ambari-troubleshooting/content/_resolving_cluster_install_and_configuration_problems.html
          - chapter: Resolving Cluster Upgrade Problems
            url: bk_ambari-troubleshooting/content/_resolving_cluster_upgrade_problems.html
          - chapter: Resolving General Problems
            url: bk_ambari-troubleshooting/content/_resolving_general_problems.html

      - title: Apache Ambari Security
        url: bk_ambari-security/index.html
        pdf: bk_ambari-security/bk_ambari-security.pdf
        contents:
          - chapter: Ambari Security Guide
            url: bk_ambari-security/content/ch_amb_sec_guide.html
          - chapter: Configuring Ambari and Hadoop for Kerberos
            url: bk_ambari-security/content/ch_configuring_amb_hdp_for_kerberos.html
          - chapter: Advanced Security Options for Ambari
            url: bk_ambari-security/content/ch_advanced_security_options_for_ambari.html
          - chapter: Enabling SPNEGO Authentication for Hadoop
            url: bk_ambari-security/content/ch_enable_spnego_auth_for_hadoop.html

  - title: Ambari Views
    name: views
    books:
      - title: Apache Ambari Views
        url: bk_ambari-views/index.html
        pdf: bk_ambari-views/bk_ambari-views.pdf
        contents:
          - chapter: Using Ambari Views
            url: bk_ambari-views/content/ch_using_ambari_views.html
          - chapter: Preparing Ambari Server for Views
            url: bk_ambari-views/content/ch_preparing_ambari_for_views.html
          - chapter: Running Ambari Server Standalone
            url: bk_ambari-views/content/ch_running_ambari_standalone.html
          - chapter: Configuring Views for Kerberos
            url: bk_ambari-views/content/ch_configuring_views_for_kerberos.html
          - chapter: Using the YARN Queue Manager View
            url: bk_ambari-views/content/ch_using_capacity_scheduler_view.html
          - chapter: Using the Files View
            url: bk_ambari-views/content/ch_using_files_view.html
          - chapter: Using the Hive View
            url: bk_ambari-views/content/ch_using_hive_view.html
          - chapter: Using the Pig View
            url: bk_ambari-views/content/ch_using_pig_view.html
          - chapter: Using the Slider View
            url: bk_ambari-views/content/ch_using_slider_view.html
          - chapter: Using the Tez View
            url: bk_ambari-views/content/ch_using_tez_view.html
---

This is the content below YAML.
