---
layout: product
title: Ambari
version: 2.2.0.0
base-path: /ambari/2.2.0.0/

sections:
  - title: Release Notes
    name: releasenotes
    books:
      - title: Release Notes
        url: bk_releasenotes_ambari/content/ch_relnotes-ambari-2.2.0.0.html
        pdf: bk_releasenotes_ambari/bk_releasenotes_ambari_2.2.0.0.pdf

  - title: Install & Upgrade
    name: install
    books:
      - title: Automated Install with Ambari
        url: bk_Installing_HDP_AMB/index.html
        pdf: bk_Installing_HDP_AMB/bk_Installing_HDP_AMB.pdf
        contents:
          - chapter: Minimum System Requirements
            url: bk_Installing_HDP_AMB/content/_meet_minimum_system_requirements.html
          - chapter: Prepare the Environment
            url: bk_Installing_HDP_AMB/content/_prepare_the_environment.html
          - chapter: Using a Local Repository
            url: bk_Installing_HDP_AMB/content/_using_a_local_repository.html
          - chapter: Installing Ambari Server
            url: bk_Installing_HDP_AMB/content/ch_Installing_Ambari.html
          - chapter: Deploying a HDP Cluster
            url: bk_Installing_HDP_AMB/content/ch_Deploy_and_Configure_a_HDP_Cluster.html

      - title: Ambari Upgrade Guide
        url: bk_upgrading_Ambari/index.html
        pdf: bk_upgrading_Ambari/bk_upgrading_Ambari.pdf
        contents:
          - chapter: Upgrading Ambari and HDP
            url: bk_upgrading_Ambari/content/_ambari_upgrade_guide.html
          - chapter: Getting Ready to Upgrade Ambari and HDP
            url: bk_upgrading_Ambari/content/_preparing_to_upgrade_ambari_and_hdp.html
          - chapter: Upgrading Ambari
            url: bk_upgrading_Ambari/content/_upgrading_ambari.html
          - chapter: Upgrading HDP
            url: bk_upgrading_Ambari/content/_upgrading_hdp_stack.html

  - title: Administration
    name: admin
    books:
      - title: Ambari Admin Guide
        url: bk_Ambari_Admin_Guide/index.html
        pdf: bk_Ambari_Admin_Guide/bk_Ambari_Admin_Guide.pdf
        contents:
          - chapter: Administering Ambari
            url: bk_Ambari_Admin_Guide/content/_ambari_admin_overview.html
          - chapter: Creating a Cluster
            url: bk_Ambari_Admin_Guide/content/_creating_a_cluster.html
          - chapter: Managing Users and Groups
            url: bk_Ambari_Admin_Guide/content/_managing_users_and_groups.html
          - chapter: Managing Views
            url: bk_Ambari_Admin_Guide/content/ch_managing_views.html

      - title: Ambari Reference Guide
        url: bk_ambari_reference_guide/index.html
        pdf: bk_ambari_reference_guide/bk_ambari_reference_guide.pdf
        contents:
          - chapter: Installing Ambari Agents Manually
            url: bk_ambari_reference_guide/content/ch_amb_ref_installing_ambari_agents_manually.html
          - chapter: Customizing HDP Services
            url: bk_ambari_reference_guide/content/ch_amb_ref_customizing_hdp_services.html
          - chapter: Configuring Storm for Supervision
            url: bk_ambari_reference_guide/content/ch_configuring_storm_for_supervision.html
          - chapter: Using Custom Host Names
            url: bk_ambari_reference_guide/content/ch_amb_ref_using_custom_host_names.html
          - chapter: Moving the Ambari Server
            url: bk_ambari_reference_guide/content/ch_amb_ref_moving_the_ambari_server.html
          - chapter: Configuring LZO Compression
            url: bk_ambari_reference_guide/content/ch_amb_ref_configuring_lzo_compression.html
          - chapter: Using Non-Default Databases
            url: bk_ambari_reference_guide/content/ch_amb_ref_using_non_default_databases.html
          - chapter: Setting up an Internet Proxy Server for Ambari
            url: bk_ambari_reference_guide/content/ch_setting_up_an_internet_proxy_server_for_ambari.html
          - chapter: Configuring Network Port Numbers
            url: bk_ambari_reference_guide/content/ch_configuring_network_port_numbers.html
          - chapter: Change the JDK Version
            url: bk_ambari_reference_guide/content/ch_changing_the_jdk_version_on_an_existing_cluster.html
          - chapter: Using Ambari Blueprints
            url: bk_ambari_reference_guide/content/ch_using_ambari_blueprints.html
          - chapter: Configuring HDP Stack Repositories for Red Hat Satellite
            url: bk_ambari_reference_guide/content/_configuring_hdp_stack_repositories_for_red_hat_satellite.html
          - chapter: Tuning Ambari Performance
            url: bk_ambari_reference_guide/content/ch_tuning_ambari_performance.html
          - chapter: Tuning Ambari Metrics
            url: bk_ambari_reference_guide/content/ch_amb_ref_configuring_ambari_metrics.html
          - chapter: Moving the Ambari Metrics Collector
            url: bk_ambari_reference_guide/content/ch_moving_the_ambari_metrics_collector.html

      - title: Ambari User’s Guide
        url: bk_Ambari_Users_Guide/index.html
        pdf: bk_Ambari_Users_Guide/bk_Ambari_Users_Guide.pdf
        contents:
          - chapter: Overview
            url: bk_Ambari_Users_Guide/content/ch_Overview_Ambari_Users_Guide.html
          - chapter: Monitoring and Managing Your Cluster
            url: bk_Ambari_Users_Guide/content/ch_monitoring_and_managing_your_hdp_cluster_with_ambari.html
          - chapter: Managing Hosts
            url: bk_Ambari_Users_Guide/content/ch_managing_hosts.html
          - chapter: Managing Services
            url: bk_Ambari_Users_Guide/content/ch_managing_services.html
          - chapter: Managing Service High Availability
            url: bk_Ambari_Users_Guide/content/ch_managing_service_high_availability.html
          - chapter: Managing Configurations
            url: bk_Ambari_Users_Guide/content/ch_managing_configurations.html
          - chapter: Administering the Cluster
            url: bk_Ambari_Users_Guide/content/ch_administering_the_cluster.html
          - chapter: Monitoring and Alerts
            url: bk_Ambari_Users_Guide/content/ch_monitoring_and_alerts.html

      - title: Ambari Troubleshooting Guide
        url: bk_ambari_troubleshooting/index.html
        pdf: bk_ambari_troubleshooting/bk_ambari_troubleshooting.pdf
        contents:
          - chapter: Reviewing Ambari Log Files
            url: bk_ambari_troubleshooting/content/_reviewing_ambari_log_files.html
          - chapter: Resolving Ambari Install and Setup Problems
            url: bk_ambari_troubleshooting/content/_resolving_ambari_install_and_setup_problems.html
          - chapter: Resolving Cluster Deployment Problems
            url: bk_ambari_troubleshooting/content/_resolving_cluster_install_and_configuration_problems.html
          - chapter: Resolving Cluster Upgrade Problems
            url: bk_ambari_troubleshooting/content/_resolving_cluster_upgrade_problems.html
          - chapter: Resolving General Problems
            url: bk_ambari_troubleshooting/content/_resolving_general_problems.html

      - title: Ambari Security Guide
        url: bk_Ambari_Security_Guide/index.html
        pdf: bk_Ambari_Security_Guide/bk_Ambari_Security_Guide.pdf
        contents:
          - chapter: Configuring Ambari for Non-Root
            url: bk_Ambari_Security_Guide/content/_configuring_ambari_for_non-root.html
          - chapter: Configuring Ambari and Hadoop for Kerberos
            url: bk_Ambari_Security_Guide/content/ch_configuring_amb_hdp_for_kerberos.html
          - chapter: Setting Up Ambari for LDAP or Active Directory Authentication
            url: bk_Ambari_Security_Guide/content/_configuring_ambari_for_ldap_or_active_directory_authentication.html
          - chapter: Encrypting Ambari Database and LDAP Passwords
            url: bk_Ambari_Security_Guide/content/_optional_encrypt_database_and_ldap_passwords.html
          - chapter: Set Up SSL for Ambari Server
            url: bk_Ambari_Security_Guide/content/_optional_set_up_ssl_for_ambari.html
          - chapter: Set Up Two-Way SSL for Ambari Server and Agents
            url: bk_Ambari_Security_Guide/content/_optional_set_up_two-way_ssl_between_ambari_server_and_ambari_agents.html
          - chapter: Configuring Ciphers and Protocols for Ambari Server
            url: bk_Ambari_Security_Guide/content/_optional_configure_ciphers_and_protocols_for_ambari_server.html
          - chapter: Enabling SPNEGO Authentication for Hadoop
            url: bk_Ambari_Security_Guide/content/ch_enable_spnego_auth_for_hadoop.html

  - title: Ambari Views
    name: views
    books:
      - title: Ambari Views Guide
        url: bk_ambari_views_guide/index.html
        pdf: bk_ambari_views_guide/bk_ambari_views_guide.pdf
        contents:
          - chapter: Using Ambari Views
            url: bk_ambari_views_guide/content/ch_using_ambari_views.html
          - chapter: Preparing Ambari for Views
            url: bk_ambari_views_guide/content/ch_preparing_ambari_for_views.html
          - chapter: Running Ambari Server Standalone
            url: bk_ambari_views_guide/content/ch_running_ambari_standalone.html
          - chapter: Configuring Views for Kerberos
            url: bk_ambari_views_guide/content/ch_configuring_views_for_kerberos.html
          - chapter: Using the Hive View
            url: bk_ambari_views_guide/content/ch_using_hive_view.html
          - chapter: Using the Tez View
            url: bk_ambari_views_guide/content/ch_using_tez_view.html
          - chapter: Using the Capacity Scheduler View
            url: bk_ambari_views_guide/content/ch_using_capacity_scheduler_view.html

---

This is the content below YAML.
