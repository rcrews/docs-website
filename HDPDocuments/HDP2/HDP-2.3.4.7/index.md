---
layout: hwx_product
title: HDP
version: 2.3.4.7
base-path: /HDPDocuments/HDP2/HDP-2.3.4.7/

sections:
# - title: Install // Human Readable Section Title
#   name: install // Used as the ID of the section... needs to match with CSS
#   books:
#     - title: Getting Started Guide // Human Readable Book Title
#       name: getting-started-guide // (Optional) ID of Book, less bk_
#       url: bk_getting-started-guide/content/ch_about-hortonworks-data-platform.html // URL of Book Content... relates to auto-generated book contents
#       pdf: // (Optional)

  - title: Release Notes
    name: releasenotes
    books:
      - title: Release Notes
        url: bk_HDP_RelNotes/content/ch_relnotes_v2347.html
        pdf: bk_HDP_RelNotes/bk_HDP_RelNotes.pdf

  - title: Install
    name: install
    books:
#      - title: Getting Started Guide
#        url: bk_getting-started-guide/content/ch_about-hortonworks-data-platform.html
#        pdf: bk_getting-started-guide/bk_getting-started-guide.pdf
#        contents:
#          - chapter: The Hortonworks Data Platform
#            url: bk_getting-started-guide/content/ch_about-hortonworks-data-platform.html
#          - chapter: Understanding the Hadoop Ecosystem
#            url: bk_getting-started-guide/content/ch_understanding-hadoop-ecosystem.html
#          - chapter: Typical Hadoop Cluster
#            url: bk_getting-started-guide/content/ch_typical-hadoop-cluster.html

      - title: Ambari Automated Install Guide
        url: ../../Ambari-2.2.1.1/bk_Installing_HDP_AMB/content/ch_Getting_Ready.html
        pdf: ../../Ambari-2.2.1.1/bk_Installing_HDP_AMB/bk_Installing_HDP_AMB.pdf

      - title: Non-Ambari Cluster Installation Guide
        url: bk_installing_manually_book/index.html
        pdf: bk_installing_manually_book/bk_installing_manually_book.pdf
        contents:
          - chapter: Getting Ready to Install
            url: bk_installing_manually_book/content/ch_getting_ready_chapter.html
          - chapter: Installing HDFS, YARN, and MapReduce
            url: bk_installing_manually_book/content/ch_install_hdfs_yarn_chapter.html
          - chapter: Installing Apache ZooKeeper
            url: bk_installing_manually_book/content/ch_install_zookeeper_chapter.html
          - chapter: Setting Up the Hadoop Configuration
            url: bk_installing_manually_book/content/ch_setting_up_hadoop_configuration_chapter.html
          - chapter: Validating the Core Hadoop Installation
            url: bk_installing_manually_book/content/rpm_validating_the_core_hadoop_installation.html
          - chapter: Installing Apache HBase
            url: bk_installing_manually_book/content/ch_installing_hbase_chapter.html
          - chapter: Installing Apache Phoenix
            url: bk_installing_manually_book/content/ch_install_phoenix_chapter.html
          - chapter: Installing and Configuring Apache Tez
            url: bk_installing_manually_book/content/ch_installing_tez_chapter.html
          - chapter: Installing Apache Hive and Apache HCatalog
            url: bk_installing_manually_book/content/ch_installing_hive_hcat_chapter.html
          - chapter: Installing Apache Pig
            url: bk_installing_manually_book/content/ch_installing_pig_chapter.html
          - chapter: Installing Apache WebHCat
            url: bk_installing_manually_book/content/ch_installing_webhcat_chapter.html
          - chapter: Installing Apache Oozie
            url: bk_installing_manually_book/content/ch_installing_oozie_chapter.html
          - chapter: Installing Apache Ranger
            url: bk_installing_manually_book/content/ch_installing_ranger_chapter.html
          - chapter: Installing Hue
            url: bk_installing_manually_book/content/ch_installing_hue_chapter.html
          - chapter: Installing Apache Sqoop
            url: bk_installing_manually_book/content/ch_installing_sqoop_chapter.html
          - chapter: Installing Apache Mahout
            url: bk_installing_manually_book/content/ch_installing_mahout_chapter.html
          - chapter: Installing and Configuring Apache Flume
            url: bk_installing_manually_book/content/ch_installing_flume_chapter.html
          - chapter: Installing and Configuring Apache Storm
            url: bk_installing_manually_book/content/ch_installing_storm_chapter.html
          - chapter: Installing and Configuring Apache Spark
            url: bk_installing_manually_book/content/ch_installing_spark_chapter.html
          - chapter: Installing and Configuring Apache Kafka
            url: bk_installing_manually_book/content/ch_installing_kafka_chapter.html
          - chapter: Installing Apache Accumulo
            url: bk_installing_manually_book/content/ch_install_accumulo_chapter.html
          - chapter: Installing Apache Falcon
            url: bk_installing_manually_book/content/ch_installing_falcon_chapter.html
          - chapter: Installing Apache Knox
            url: bk_installing_manually_book/content/ch_installing_knox_chapter.html
          - chapter: Installing Apache Slider
            url: bk_installing_manually_book/content/ch_install_slider_chapter.html
          - chapter: Installing and Configuring Apache Atlas
            url: bk_installing_manually_book/content/ch_installing_atlas_chapter.html
          - chapter: Setting Up Kerberos Security for Manual Installs
            url: bk_installing_manually_book/content/ch_security_for_manual_installs_chapter.html
          - chapter: Uninstalling HDP
            url: bk_installing_manually_book/content/ch_uninstalling_hdp_chapter.html

  - title: Upgrade
    name: upgrade
    books:
      - title: Ambari Upgrade Guide
        url: ../../Ambari-2.2.1.1/bk_upgrading_Ambari/content/_ambari_upgrade_guide.html
        pdf: ../../Ambari-2.2.1.1/bk_upgrading_Ambari/bk_upgrading_Ambari.pdf

      - title: Non-Ambari Cluster Upgrade Guide
        url: bk_upgrading_hdp_manually/index.html
        pdf: bk_upgrading_hdp_manually/bk_upgrading_hdp_manually.pdf
        contents:
          - chapter: Upgrade from HDP 2.2 to HDP 2.3.4.7 Manually
            url: bk_upgrading_hdp_manually/content/ch_upgrade_2_2.html
          - chapter: Upgrade from HDP 2.1 to HDP 2.3.4.7 Manually
            url: bk_upgrading_hdp_manually/content/ch_upgrade_2_1.html
          - chapter: Upgrade from HDP 2.0 to HDP 2.3.4.7 Manually
            url: bk_upgrading_hdp_manually/content/ch_upgrade_2_0.html
          - chapter: Upgrade from HDP 1.3 to HDP 2.3.4.7 Manually
            url: bk_upgrading_hdp_manually/content/ch_upgrade_1_3.html

#      - title: Rolling Upgrade Guide
#        url: ../HDP-2.3.0/bk_rolling-upgrade/content/ch_overview-rolling-upgrade.xml.html

  - title: Data Access
    name: data_access
    books:
      - title: HDP Data Services Guide
        url: bk_dataintegration/index.html
        pdf: bk_dataintegration/bk_dataintegration.pdf
        contents:
          - chapter: Using Apache Hive
            url: bk_dataintegration/content/ch_using-hive.html
          - chapter: SQL Compliance
            url: bk_dataintegration/content/ch_using-hive-SQL-compliance.html
          - chapter: Running Pig with the Tez Execution Engine
            url: bk_dataintegration/content/ch_running-pig-tez.html
          - chapter: Using HDP for Metadata Services (HCatalog)
            url: bk_dataintegration/content/ch_using-hcatalog.html
          - chapter: Using Apache HBase
            url: bk_dataintegration/content/ch_using-hbase.html
          - chapter: Using HDP for Workflow and Scheduling (Oozie)
            url: bk_dataintegration/content/ch_using-oozie.html
          - chapter: Using Apache Sqoop
            url: bk_dataintegration/content/ch_using-sqoop.html

      - title: Hive Performance Tuning Guide
        url: bk_performance_tuning/index.html
        pdf: bk_performance_tuning/bk_performance_tuning.pdf
        contents:
          - chapter: Hive Architectural Overview
            url: bk_performance_tuning/content/ch_hive_architectural_overview.html
          - chapter: Hive High Performance Best Practices
            url: bk_performance_tuning/content/ch_hive_hi_perf_best_practices.html
          - chapter: Configuring Memory Usage
            url: bk_performance_tuning/content/ch_setting_memory_usage_for_hive_perf.html
          - chapter: Query Optimization
            url: bk_performance_tuning/content/ch_query_optimization_hive.html

      - title: Importing Data Into HBase
        url: bk_importing_data_into_hbase_guide/index.html
        pdf: bk_importing_data_into_hbase_guide/bk_importing_data_into_hbase_guide.pdf
        contents:
          - chapter: Importing Data into HBase
            url: bk_importing_data_into_hbase_guide/content/ch_importing_data_into_hbase_chapter.html

      - title: HBase Snapshots
        url: bk_hbase_snapshots_guide/index.html
        pdf: bk_hbase_snapshots_guide/bk_hbase_snapshots_guide.pdf
        contents:
          - chapter: HBase Snapshots
            url: bk_hbase_snapshots_guide/content/ch_hbase_snapshots_chapter.html

      - title: Storm User Guide
        url: bk_storm-user-guide/index.html
        pdf: bk_storm-user-guide/bk_storm-user-guide.pdf
        contents:
          - chapter: Using Apache Storm
            url: bk_storm-user-guide/content/ch_using_storm.html
          - chapter: Installing and Configuring Storm
            url: bk_storm-user-guide/content/ch_installing_storm.html
          - chapter: Topology Development Guidelines
            url: bk_storm-user-guide/content/ch_storm-topology-guidelines.html
          - chapter: Streaming Data to Hive
            url: bk_storm-user-guide/content/ch_storm-streaming-to-hive.html
          - chapter: Ingesting Data with the Apache Kafka Spout Connector
            url: bk_storm-user-guide/content/ch_storm-kafkaspout.html
          - chapter: Ingesting Data from HDFS
            url: bk_storm-user-guide/content/ch_storm-hdfs-spout.html
          - chapter: Writing Data with Storm
            url: bk_storm-user-guide/content/ch_storm-writing.html
          - chapter: Packaging Storm Topologies
            url: bk_storm-user-guide/content/ch_storm-pkg-topologies.html
          - chapter: Deploying and Managing Apache Storm Topologies
            url: bk_storm-user-guide/content/ch_storm-deploy-topologies.html
          - chapter: "Example: RollingTopWords Topology"
            url: bk_storm-user-guide/content/ch_storm-rollingtopwords.html

      - title: Hortonworks Data Platform Search (Apache Solr)
        url: bk_hdp_search/index.html
        pdf: bk_hdp_search/bk_hdp_search.pdf
        contents:
          - chapter: Introduction
            url: bk_hdp_search/content/ch_hdp-search.html
          - chapter: Minimum System Requirements
            url: bk_hdp_search/content/ch_hdp-search-reqts.html
          - chapter: Installing HDP Search
            url: bk_hdp_search/content/ch_hdp-search-install.html

    # subprojects:
    #   - name: Apache Pig
    #     url: //hortonworks.com/hadoop/pig/
    #   - name: Apache Hive
    #     url: //hortonworks.com/hadoop/hive/
    #   - name: Apache Tez
    #     url: //hortonworks.com/hadoop/tez/
    #   - name: Apache Solr
    #     url: //hortonworks.com/hadoop/solr/
    #   - name: Apache Slider
    #     url: //hortonworks.com/hadoop/slider/
    #   - name: Apache HBase
    #     url: //hortonworks.com/hadoop/hbase/
    #   - name: Apache Accumulo
    #     url: //hortonworks.com/hadoop/accumulo/
    #   - name: Apache Storm
    #     url: //hortonworks.com/hadoop/storm/
    #   # - name: Apache Phoenix
    #   #   url: //phoenix.apache.org/

  - title: Data Science
    name: data_science
    books:
      - title: Spark Guide
        url: bk_spark-guide/index.html
        pdf: bk_spark-guide/bk_spark-guide.pdf
        contents:
          - chapter: Introduction
            url: bk_spark-guide/content/ch_introduction-spark.html
          - chapter: Prerequisites
            url: bk_spark-guide/content/ch_prerequisites-spark.html
          - chapter: Installing and Configuring Spark
            url: bk_spark-guide/content/ch_installing-spark.html
          - chapter: Developing Spark Applications
            url: bk_spark-guide/content/ch_spark-examples.html
          - chapter: Using the Spark DataFrame API
            url: bk_spark-guide/content/ch_spark-dataframe-api.html
          - chapter: Accessing ORC Files from Spark
            url: bk_spark-guide/content/ch_orc-spark.html
          - chapter: Using Spark SQL
            url: bk_spark-guide/content/ch_accessing-spark-sql.html
          - chapter: Using Spark Streaming
            url: bk_spark-guide/content/ch_using-spark-streaming.html
          - chapter: Adding Libraries to Spark
            url: bk_spark-guide/content/ch_spark-add-libraries.html
          - chapter: Using Spark with HDFS
            url: bk_spark-guide/content/ch_spark-hdfs.html
          - chapter: Tuning and Troubleshooting Spark
            url: bk_spark-guide/content/ch_tuning-spark.html

    # subprojects:
    #   - name: Spark
    #     url: //hortonworks.com/hadoop/spark/
    #   # - name: Zeppelin
    #   #   url: //zeppelin-project.org/

  - title: Data Management and Operations
    name: data_mgt
    books:
      - title: Cluster Planning Guide
        url: bk_cluster-planning-guide/index.html
        pdf: bk_cluster-planning-guide/bk_cluster-planning-guide.pdf
        contents:
          - chapter: Hardware Recommendations for Apache Hadoop
            url: bk_cluster-planning-guide/content/ch_hardware-recommendations_chapter.html
          - chapter: File System Partitioning Recommendations
            url: bk_cluster-planning-guide/content/ch_partitioning_chapter.html

      - title: High Availability for Hadoop
        url: bk_hadoop-ha/index.html
        pdf: bk_hadoop-ha/bk_hadoop-ha.pdf
        contents:
          - chapter: High Availability for Hive Metastore
            url: bk_hadoop-ha/content/ch_HA-Hive.html
          - chapter: Highly Available Reads with HBase
            url: bk_hadoop-ha/content/ch_HA-HBase.html
          - chapter: Namenode High Availability
            url: bk_hadoop-ha/content/ch_HA-NameNode.html
          - chapter: Resource Manager High Availability
            url: bk_hadoop-ha/content/ch_HA-ResourceManager.html
          - chapter: HiveServer2 High Availability via ZooKeeper
            url: bk_hadoop-ha/content/ch_HA-HiveServer2.html

      - title: YARN Resource Management Guide
        url: bk_yarn_resource_mgt/index.html
        pdf: bk_yarn_resource_mgt/bk_yarn_resource_mgt.pdf
        contents:
          - chapter: Capacity Scheduler
            url: bk_yarn_resource_mgt/content/ch_capacity_scheduler.html
          - chapter: CGroups
            url: bk_yarn_resource_mgt/content/ch_cgroups.html
          - chapter: CPU Scheduling
            url: bk_yarn_resource_mgt/content/ch_cpu_scheduling.html
          - chapter: Log Aggregation for Long-running Applications
            url: bk_yarn_resource_mgt/content/ch_log_aggregation.html
          - chapter: Node Labels
            url: bk_yarn_resource_mgt/content/ch_node_labels.html
          - chapter: Running Applications on YARN Using Slider
            url: bk_yarn_resource_mgt/content/ch_slider.html
          - chapter: Running Multiple MapReduce Versions Using the YARN Distributed Cache
            url: bk_yarn_resource_mgt/content/ch_multi_mr_on_yarn.html
          - chapter: Timeline Server
            url: bk_yarn_resource_mgt/content/ch_timeline_server.html
          - chapter: Using the YARN REST APIs to Manage Applications
            url: bk_yarn_resource_mgt/content/ch_yarn_rest_apis.html
          - chapter: Work-Preserving Restart
            url: bk_yarn_resource_mgt/content/ch_work-preserving_restart.html

      - title: HDFS Administration Guide
        url: bk_hdfs_admin_tools/content/ch01.html
        pdf: bk_hdfs_admin_tools/bk_hdfs_admin_tools.pdf
#        contents:
#          - chapter: ACLs on HDFS
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: Archival Storage
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: Centralized Cache Management in HDFS
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: Configuring HDFS Compression
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: Configuring Rack Awareness On HDP
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: Customizing HDFS
#            url: bk_hdfs_admin_tools/content/ch_customizing_hdfs.html
#          - chapter: Hadoop Archives
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: JMX Metrics APIs for HDFS Daemons
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: Memory as Storage (Technical Preview)
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: Running DataNodes as Non-Root
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: Short Circuit Local Reads On HDFS
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: WebHDFS Administrator Guide
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: HDFS "Data at Rest" Encryption
#            url: bk_hdfs_admin_tools/content/ch_configuring_hdfs_encryption.html
#          - chapter: Backing Up HDFS Metadata
#            url: bk_hdfs_admin_tools/content/backing_up_hdfs_metadata.html

      - title: HDFS NFS Gateway
        url: bk_hdfs_nfs_gateway/index.html
        pdf: bk_hdfs_nfs_gateway/bk_hdfs_nfs_gateway.pdf
        contents:
          - chapter: HDFS NFS Gateway User Guide
            url: bk_hdfs_nfs_gateway/content/hdfs-nfs-gateway-user-guide.html

      - title: HDP System Administration Guide
        url: bk_Sys_Admin_Guides/index.html
        pdf: bk_Sys_Admin_Guides/bk_Sys_Admin_Guides.pdf
        contents:
          - chapter: Decommissioning Slave Nodes
            url: bk_Sys_Admin_Guides/content/ch_slave_nodes.html
          - chapter: HBase Cluster Capacity and Region Sizing
            url: bk_Sys_Admin_Guides/content/ch_clust_capacity.html
          - chapter: Hive Authorization
            url: bk_Sys_Admin_Guides/content/ch_hive_auth.html
          - chapter: Manually Adding Slave Nodes to an HDP Cluster
            url: bk_Sys_Admin_Guides/content/ch_add_slave_nodes.html
          - chapter: Optimizing HBase I/O
            url: bk_Sys_Admin_Guides/content/ch_hbase_io.html
          - chapter: Using DistCp to Copy Files
            url: bk_Sys_Admin_Guides/content/ch_distcp.html

      - title: HDP Reference Guide
        url: bk_HDP_Reference_Guide/index.html
        pdf: bk_HDP_Reference_Guide/bk_HDP_Reference_Guide.pdf
        contents:
          - chapter: Configuring Ports
            url: bk_HDP_Reference_Guide/content/reference_chap2.html
          - chapter: Controlling HDP Services Manually
            url: bk_HDP_Reference_Guide/content/ch_controlling_hdp_svcs_manually.html
          - chapter: Deploying HDP In Production Data Centers With Firewalls
            url: bk_HDP_Reference_Guide/content/ch_hdp_prod_data_centers_firewalls.html
          - chapter: Hadoop Service Accounts
            url: bk_HDP_Reference_Guide/content/ch_hadoop_svc_accts.html
          - chapter: Supported Database Matrix for the Hortonworks Data Platform
            url: bk_HDP_Reference_Guide/content/ch_supported_db_matrix_hdp.html

    # subprojects:
    #   - name: Ambari
    #     url: //hortonworks.com/hadoop/ambari/
    #   - name: Hadoop
    #     url: //hortonworks.com/hadoop/
    #   - name: YARN
    #     url: //hortonworks.com/hadoop/yarn/
    #   - name: Cloudbreak
    #     url: //hortonworks.com/hadoop/cloudbreak/
    #   - name: ZooKeeper
    #     url: //hortonworks.com/hadoop/zookeeper/
    #   - name: Oozie
    #     url: //hortonworks.com/hadoop/oozie/

  - title: Security
    name: security
    books:
      - title: Knox Administrator Guide
        url: bk_Knox_Gateway_Admin_Guide/content/ch01.html
        pdf: bk_Knox_Gateway_Admin_Guide/bk_Knox_Gateway_Admin_Guide.pdf
#        contents:
#          - chapter: Apache Knox Gateway Overview
#            url: bk_Knox_Gateway_Admin_Guide/content/.html
#          - chapter: Configuring the Knox Gateway
#            url: bk_Knox_Gateway_Admin_Guide/content/.html
#          - chapter: Defining Cluster Topologies
#            url: bk_Knox_Gateway_Admin_Guide/content/.html
#          - chapter: Configuring the Knox Topology to Connect to Hadoop Cluster Services
#            url: bk_Knox_Gateway_Admin_Guide/content/.html
#          - chapter: Mapping the Internal Nodes to External URLs
#            url: bk_Knox_Gateway_Admin_Guide/content/.html
#          - chapter: Configuring Authentication
#            url: bk_Knox_Gateway_Admin_Guide/content/.html
#          - chapter: Configuring Identity Assertion
#            url: bk_Knox_Gateway_Admin_Guide/content/.html
#          - chapter: Configuring Service Level Authorization
#            url: bk_Knox_Gateway_Admin_Guide/content/.html
#          - chapter: Audit Gateway Activity
#            url: bk_Knox_Gateway_Admin_Guide/content/.html
#          - chapter: Gateway Security
#            url: bk_Knox_Gateway_Admin_Guide/content/.html
#          - chapter: Setting Up Knox for WebHDFS HA
#            url: bk_Knox_Gateway_Admin_Guide/content/.html
#          - chapter: Knox CLI Testing Tools
#            url: bk_Knox_Gateway_Admin_Guide/content/.html

      - title: Hadoop Security Guide
        url: bk_Security_Guide/index.html
        pdf: bk_Security_Guide/bk_Security_Guide.pdf
        contents:
          - chapter: Hadoop Security Features
            url: bk_Security_Guide/content/security-intro.html
          - chapter: Setting Up Security for Manual Installs
            url: bk_Security_Guide/content/ch_security_for_manual_installs_chapter.html
          - chapter: "Data Protection: Wire Encryption"
            url: bk_Security_Guide/content/security-wire-encryption.html

      - title: Ranger User Guide
        url: bk_Ranger_User_Guide/content/ch01.html
        pdf: bk_Ranger_User_Guide/bk_Ranger_User_Guide.pdf
#        contents:
#          - chapter: Security Introduction
#            url: bk_Ranger_User_Guide/content/.html
#          - chapter: Opening and Closing the Console
#            url: bk_Ranger_User_Guide/content/.html
#          - chapter: Console Operations Summary
#            url: bk_Ranger_User_Guide/content/.html
#          - chapter: Configuring Services
#            url: bk_Ranger_User_Guide/content/ranger_service_manager.html
#          - chapter: Policy Manager
#            url: bk_Ranger_User_Guide/content/ranger_policy_manager.html
#          - chapter: Users/Groups and Permissions Administration
#            url: bk_Ranger_User_Guide/content/users_groups_administration.html
#          - chapter: Reports Administration
#            url: bk_Ranger_User_Guide/content/reports_administration.html
#          - chapter: Auditing
#            url: bk_Ranger_User_Guide/content/ranger_policy_manager_auditing.html
#          - chapter: Special Requirements for High Availability Environments
#            url: bk_Ranger_User_Guide/content/.html
#          - chapter: Adding a New Component to Apache Ranger
#            url: bk_Ranger_User_Guide/content/.html
#          - chapter: Developing a Custom Authorization Module
#            url: bk_Ranger_User_Guide/content/.html

      - title: Installing Ranger Over Ambari
        url: bk_Ranger_Install_Guide/index.html
        pdf: bk_Ranger_Install_Guide/bk_Ranger_Install_Guide.pdf
        contents:
          - chapter: Overview
            url: bk_Ranger_Install_Guide/content/ch_overview_ranger_ambari_install.html
          - chapter: Installation Prerequisites
            url: bk_Ranger_Install_Guide/content/ch_prerequisites_ranger_ambari_install.html
          - chapter: Ranger Installation
            url: bk_Ranger_Install_Guide/content/ch_ranger_install.html
          - chapter: Using Apache Solr for Ranger Audits
            url: bk_Ranger_Install_Guide/content/ch_install_solr.html
          - chapter: Ranger Plug ins Overview
            url: bk_Ranger_Install_Guide/content/ch_enable_ranger_plugins.html
          - chapter: Ranger Plugins - Kerberos Overview
            url: bk_Ranger_Install_Guide/content/ch_enable_ranger_plugins_kerberos_ambari.html

      - title: Ranger KMS Administration Guide
        url: bk_Ranger_KMS_Admin_Guide/index.html
        pdf: bk_Ranger_KMS_Admin_Guide/bk_Ranger_KMS_Admin_Guide.pdf
        contents:
          - chapter: Ranger Key Management Service
            url: bk_Ranger_KMS_Admin_Guide/content/ch_ranger_kms_overview.html
          - chapter: Installing the Ranger Key Management Service
            url: bk_Ranger_KMS_Admin_Guide/content/ch_install_ranger_kms.html
          - chapter: Enable Ranger KMS Audit
            url: bk_Ranger_KMS_Admin_Guide/content/ch_ranger_kms_audit.html
          - chapter: Enabling SSL for Ranger KMS
            url: bk_Ranger_KMS_Admin_Guide/content/ch_ranger_kms_ssl.html
          - chapter: Install Multiple Ranger KMS
            url: bk_Ranger_KMS_Admin_Guide/content/ch_ranger_kms_multi_kms.html
          - chapter: Using the Ranger Key Management Service
            url: bk_Ranger_KMS_Admin_Guide/content/ch_use_ranger_kms.html
          - chapter: Ranger KMS Properties
            url: bk_Ranger_KMS_Admin_Guide/content/ch_ranger_kms_properties.html
          - chapter: Troubleshooting Ranger KMS
            url: bk_Ranger_KMS_Admin_Guide/content/ch_ranger_kms_troubleshooting.html

      - title: Configuring Kafka for Kerberos Over Ambari
        url: bk_secure-kafka-ambari/index.html
        pdf: bk_secure-kafka-ambari/bk_secure-kafka-ambari.pdf
        contents:
          - chapter: Overview
            url: bk_secure-kafka-ambari/content/ch_secure-kafka-overview.html
          - chapter: Preparing the Cluster
            url: bk_secure-kafka-ambari/content/ch_secure-kafka-prep.html
          - chapter: Configuring the Kafka Broker for Kerberos
            url: bk_secure-kafka-ambari/content/ch_secure-kafka-config.html
          - chapter: Creating Kafka Topics
            url: bk_secure-kafka-ambari/content/ch_secure-kafka-create-topics.html
          - chapter: Producing Events/Messages to Kafka on a Secured Cluster
            url: bk_secure-kafka-ambari/content/ch_secure-kafka-produce-events.html
          - chapter: Consuming Events/Messages from Kafka on a Secured Cluster
            url: bk_secure-kafka-ambari/content/ch_secure-kafka-consume-events.html
          - chapter: Authorizing Access when Kerberos is Enabled
            url: bk_secure-kafka-ambari/content/ch_secure-kafka-auth-cli.html
          - chapter: "Appendix: Kafka Configuration Options"
            url: bk_secure-kafka-ambari/content/ch_secure-kafka-config-options.html

      - title: Configuring Storm for Kerberos Over Ambari
        url: bk_secure-storm-ambari/index.html
        pdf: bk_secure-storm-ambari/bk_secure-storm-ambari.pdf
        contents:
          - chapter: Overview
            url: bk_secure-storm-ambari/content/ch_secure-storm-overview.html
          - chapter: Designating a Storm Client Node
            url: bk_secure-storm-ambari/content/ch_secure-storm-designating-node.html
          - chapter: Running Workers as Users
            url: bk_secure-storm-ambari/content/ch_secure-storm-running-workers.html
          - chapter: Accessing the Storm UI
            url: bk_secure-storm-ambari/content/ch_secure-storm-ui.html
          - chapter: Accessing the Storm UI (Active Directory Trust Configuration)
            url: bk_secure-storm-ambari/content/ch_secure-storm-ui-adtrust.html
          - chapter: Storm Security Properties
            url: bk_secure-storm-ambari/content/ch_secure-storm-properties.html
          - chapter: Known Issues
            url: bk_secure-storm-ambari/content/ch_secure-storm-known-issues.html

    # subprojects:
    #   - name: Knox
    #     url: //hortonworks.com/hadoop/knox-gateway/
    #   - name: Ranger
    #     url: //hortonworks.com/hadoop/ranger/

  - title: Data Governance and Integration
    name: gov
    books:
      - title: Data Governance Guide
        url: bk_data_governance/index.html
        pdf: bk_data_governance/bk_data_governance.pdf
        contents:
          - chapter: HDP Data Governance
            url: bk_data_governance/content/ch_hdp_data_governance_overview.html
          - chapter: Data Pipelines (Falcon)
            url: bk_data_governance/content/ch_config_using_data_pipelines.html
          - chapter: Metadata Services Framework (Atlas)
            url: bk_data_governance/content/ch_config_using_metadata_store.html
          - chapter: Reference (Falcon)
            url: bk_data_governance/content/ch_appendix_data_gov_ref.html
          - chapter: Troubleshooting (Falcon)
            url: bk_data_governance/content/ch_appendix_data_gov_trblshoot.html
          - chapter: Configuring High Availability (Falcon Server)
            url: bk_data_governance/content/ch_appendix_data_gov_config_ha.html
          - chapter: Metadata Store REST API Reference (Atlas)
            url: bk_data_governance/content/ch_app_metadata_store_ref.html

      - title: Apache Flume User Guide
        url: ds_flume/index.html

      - title: Kafka Guide
        url: bk_kafka-user-guide/index.html
        pdf: bk_kafka-user-guide/bk_kafka-user-guide.pdf
        contents:
          - chapter: Introduction to Kafka
            url: bk_kafka-user-guide/content/ch_using_kafka.html
          - chapter: Installing and Configuring Kafka
            url: bk_kafka-user-guide/content/ch_installing_kafka.html
          - chapter: Developing Kafka Producers and Consumers
            url: bk_kafka-user-guide/content/ch_kafka-development.html
          - chapter: Mirroring Data Between Clusters
            url: bk_kafka-user-guide/content/ch_kafka_mirrormaker.html

      - title: Hortonworks Connector for Teradata
        url: bk_HortonworksConnectorForTeradata/index.html
        pdf: bk_HortonworksConnectorForTeradata/bk_HortonworksConnectorForTeradata.pdf
        contents:
          - chapter: Hortonworks Connector for Teradata
            url: bk_HortonworksConnectorForTeradata/content/ch_HortonworksConnectorForTeradata.html

    # subprojects:
    #   - name: Falcon
    #     url: //hortonworks.com/hadoop/falcon/
    #   - name: Atlas
    #     url: //hortonworks.com/hadoop/atlas/
    #   - name: Sqoop
    #     url: //hortonworks.com/hadoop/sqoop/
    #   - name: Flume
    #     url: //hortonworks.com/hadoop/flume/
    #   - name: Kafka
    #     url: //hortonworks.com/hadoop/kafka/

---

This is the content below YAML.
