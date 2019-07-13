---
layout: hwx_product
title: Ambari
version: 2.6.2.2
base-path: /HDPDocuments/Ambari-2.6.2.2/

sections:
  - title: Release Notes
    name: releasenotes
    books:
      - title: Release Notes
        url: bk_ambari-release-notes/content/ch_relnotes-ambari-2.6.2.2.html
        pdf: bk_ambari-release-notes/bk_ambari-release-notes.pdf
      - title: Support Matrix
        url: https://supportmatrix.hortonworks.com/

  - title: Install & Upgrade
    name: install
    books:
      - title: Apache Ambari Installation
        url: bk_ambari-installation/index.html
        pdf: bk_ambari-installation/bk_ambari-installation.pdf
        contents:
          - chapter: Getting Ready
            url: bk_ambari-installation/content/ch_Getting_Ready.html
          - chapter: Using a Local Repository
            url: bk_ambari-installation/content/ch_using-local-repos.html
          - chapter: Obtaining Public Repositories
            url: bk_ambari-installation/content/ch_obtaining-public-repos.html
          - chapter: Installing Ambari
            url: bk_ambari-installation/content/ch_Installing_Ambari.html
          - chapter: Working with Management Packs
            url: bk_ambari-installation/content/ch_working-with-mpacks.html
          - chapter: Installing, Configuring, and Deploying a Cluster
            url: bk_ambari-installation/content/ch_Deploy_and_Configure_a_HDP_Cluster.html

      - title: Apache Ambari Upgrade
        url: bk_ambari-upgrade/index.html
        pdf: bk_ambari-upgrade/bk_ambari-upgrade.pdf
        contents:
          - chapter: Upgrading Ambari and HDP 
            url: bk_ambari-upgrade/content/ambari_upgrade_guide.html
          - chapter: Getting Ready to Upgrade Ambari and HDP
            url: bk_ambari-upgrade/content/preparing_to_upgrade_ambari_and_hdp.html
          - chapter: Upgrading the Cluster's Underlying OS
            url: bk_ambari-upgrade/content/upgrading_cluster_os.html
          - chapter: Upgrading Ambari 
            url: bk_ambari-upgrade/content/upgrading_ambari.html
          - chapter: Upgrading HDP
            url: bk_ambari-upgrade/content/upgrading_hdp_stack.html

      - title: Apache Ambari Installation for IBM Power Systems
        url: bk_ambari-installation-ppc/index.html
        pdf: bk_ambari-installation-ppc/bk_ambari-installation-ppc.pdf
        contents:
          - chapter: Getting Ready
            url: bk_ambari-installation-ppc/content/ch_Getting_Ready.html
          - chapter: Installing Ambari
            url: bk_ambari-installation-ppc/content/ch_Installing_Ambari.html
          - chapter: Installing, Configuring, and Deploying a Cluster
            url: bk_ambari-installation-ppc/content/ch_Deploy_and_Configure_a_HDP_Cluster.html

      - title: Apache Ambari Upgrade for IBM Power Systems
        url: bk_ambari-upgrade-ppc/index.html
        pdf: bk_ambari-upgrade-ppc/bk_ambari-upgrade-ppc.pdf
        contents:
          - chapter: Upgrading Ambari and HDP for IBM Power Systems
            url: bk_ambari-upgrade-ppc/content/ambari_upgrade_guide-ppc.html
          - chapter: Getting Ready to Upgrade Ambari and HDP
            url: bk_ambari-upgrade-ppc/content/preparing_to_upgrade_ambari_and_hdp-ppc.html
          - chapter: Upgrading Ambari
            url: bk_ambari-upgrade-ppc/content/upgrading_ambari-ppc.html
          - chapter: Upgrading HDP
            url: bk_ambari-upgrade-ppc/content/upgrading_hdp_stack-ppc.html

  - title: Administration
    name: admin
    books:
      - title: Apache Ambari Administration
        url: bk_ambari-administration/index.html
        pdf: bk_ambari-administration/bk_ambari-administration.pdf
        contents:
          - chapter: Ambari Administration Overview
            url: bk_ambari-administration/content/ambari_admin_overview.html
          - chapter: Administering Ambari
            url: bk_ambari-administration/content/ch_create_and_manage_a_cluster_and_cluster_roles.html
          - chapter: Managing Users and Groups
            url: bk_ambari-administration/content/managing_users_and_groups.html
          - chapter: Installing Ambari Agents Manually
            url: bk_ambari-administration/content/ch_amb_ref_installing_ambari_agents_manually.html
          - chapter: Customizing HDP Services
            url: bk_ambari-administration/content/ch_amb_ref_customizing_hdp_services.html
          - chapter: Using Custom and Private Hostnames
            url: bk_ambari-administration/content/ch_amb_ref_using_custom_host_names.html
          - chapter: Changing Host Names
            url: bk_ambari-administration/content/ch_changing_host_names.html
          - chapter: Moving the Ambari Server
            url: bk_ambari-administration/content/ch_amb_ref_moving_the_ambari_server.html
          - chapter: Moving the ZooKeeper Server
            url: bk_ambari-administration/content/ch_amb_ref_moving_the_zookeeper_server.html
          - chapter: Configuring LZO Compression
            url: bk_ambari-administration/content/ch_amb_ref_configuring_lzo_compression.html
          - chapter: Using Existing Databases
            url: bk_ambari-administration/content/ch_amb_ref_using_existing_databases.html
          - chapter: Setting up Ambari to use an Internet Proxy Server
            url: bk_ambari-administration/content/ch_setting_up_an_internet_proxy_server_for_ambari.html
          - chapter: Configuring Network Port Numbers
            url: bk_ambari-administration/content/ch_configuring_network_port_numbers.html
          - chapter: Change the JDK Version
            url: bk_ambari-administration/content/ch_changing_the_jdk_version_on_an_existing_cluster.html
          - chapter: Using Ambari Blueprints
            url: bk_ambari-administration/content/ch_using_ambari_blueprints.html
          - chapter: Tuning Ambari Performance
            url: bk_ambari-administration/content/ch_tuning_ambari_performance.html
          - chapter: Customizing Ambari Log + PID Directories
            url: bk_ambari-administration/content/ch_amb_ref_customizing_ambari_log_pid_dirs.html
          - chapter: Configuring Include File Management for HDFS and YARN
            url: bk_ambari-administration/content/ch_config_include_file_management.html

      - title: Apache Ambari Operations
        url: bk_ambari-operations/index.html
        pdf: bk_ambari-operations/bk_ambari-operations.pdf
        contents:
          - chapter: "Ambari Operations: Overview"
            url: bk_ambari-operations/content/ch_Overview_hdp-ambari-user-guide.html
          - chapter: Understanding the Cluster Dashboard
            url: bk_ambari-operations/content/ch_viewing_the_ambari_dashboards.html
          - chapter: Managing Hosts
            url: bk_ambari-operations/content/ch_managing_hosts.html
          - chapter: Managing Services
            url: bk_ambari-operations/content/ch_managing_services.html
          - chapter: Managing Service High Availability
            url: bk_ambari-operations/content/ch_managing_service_high_availability.html
          - chapter: Managing Configurations
            url: bk_ambari-operations/content/ch_managing_configurations.html
          - chapter: Administering the Cluster
            url: bk_ambari-operations/content/ch_administering_the_cluster.html
          - chapter: Managing Alerts and Notifications
            url: bk_ambari-operations/content/ch_monitoring_and_alerts.html
          - chapter: Using Ambari Core Services
            url: bk_ambari-operations/content/ch_using_ambari_core_services.html

      - title: Apache Ambari Troubleshooting
        url: bk_ambari-troubleshooting/index.html
        pdf: bk_ambari-troubleshooting/bk_ambari-troubleshooting.pdf
        contents:
          - chapter: Troubleshooting Ambari Deployments
            url: bk_ambari-troubleshooting/content/ch_ambari_troubleshooting.html

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

  - title: Views
    name: views
    books:
      - title: Apache Ambari Views
        url: bk_ambari-views/index.html
        pdf: bk_ambari-views/bk_ambari-views.pdf
        contents:
          - chapter: Understanding Ambari Views
            url: bk_ambari-views/content/ch_understanding_ambari_views.html
          - chapter: Administering Ambari Views
            url: bk_ambari-views/content/ch_administering_ambari_views.html
          - chapter: Using YARN Queue Manager View
            url: bk_ambari-views/content/ch_using_yarn_queue_manager_view.html
          - chapter: Using Files View
            url: bk_ambari-views/content/ch_using_files_view.html
          - chapter: Using Falcon View
            url: bk_ambari-views/content/ch_using_falcon_view.html
          - chapter: Using Hive View 2.0
            url: bk_ambari-views/content/ch_using_hive_view.html
          - chapter: Using Pig View
            url: bk_ambari-views/content/ch_using_pig_view.html
          - chapter: Using Slider View
            url: bk_ambari-views/content/ch_using_slider_view.html
          - chapter: Using SmartSense View
            url: bk_ambari-views/content/ch_using_smartsense_view.html
          - chapter: Using Storm View
            url: bk_ambari-views/content/ch_using_storm_view.html
          - chapter: Using Tez View
            url: bk_ambari-views/content/ch_using_tez_view.html
          - chapter: Using Workflow Manager View 
            url: bk_ambari-views/content/ch_workflow_designer_view.html

---

This is the content below YAML.
