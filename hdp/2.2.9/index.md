---
layout: product
title: HDP
version: 2.2.9
base-path: /hdp/2.2.9/

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
        url: bk_HDP_RelNotes/content/ch_relnotes_v229.html
        pdf: bk_HDP_RelNotes/bk_HDP_RelNotes.pdf

  - title: Install
    name: install
    books:
      - title: Getting Started
        url: bk_getting-started-guide/index.html
        pdf: bk_getting-started-guide/bk_getting-started-guide.pdf
        contents:
          - chapter: The Hortonworks Data Platform
            url: bk_getting-started-guide/content/ch_about-hortonworks-data-platform.html
          - chapter: Understanding the Hadoop Ecosystem
            url: bk_getting-started-guide/content/ch_understanding-hadoop-ecosystem.html
          - chapter: Typical Hadoop Cluster
            url: bk_getting-started-guide/content/ch_typical-hadoop-cluster.html

      - title: Ambari Automated Install
        url: ../ambari/2.1.2.1/bk_Installing_HDP_AMB/content/ch_Getting_Ready.html
        pdf: ../ambari/2.1.2.1/bk_Installing_HDP_AMB/bk_Installing_HDP_AMB.pdf

      - title: Non-Ambari Cluster Installation Guide
        url: bk_installing_manually_book/index.html
        pdf: bk_installing_manually_book/bk_installing_manually_book.pdf
        contents:
          - chapter: Getting Ready to Install
            url: bk_installing_manually_book/content/ch_getting_ready_chapter.html
          - chapter: Installing HDFS and YARN
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
          - chapter: Installing Ganglia (Deprecated)
            url: bk_installing_manually_book/content/ch_install_ganglia_chapter.html
          - chapter: Installing Nagios (Deprecated)
            url: bk_installing_manually_book/content/ch_installing_nagios_chapter.html
          - chapter: Installing Apache Slider
            url: bk_installing_manually_book/content/ch_install_slider_chapter.html
          - chapter: Setting Up Security for Manual Installs
            url: bk_installing_manually_book/content/ch_security_for_manual_installs_chapter.html
          - chapter: Uninstalling HDP
            url: bk_installing_manually_book/content/ch_uninstalling_hdp_chapter.html

  - title: Upgrade
    name: upgrade
    books:
      - title: Ambari Upgrade Guide
        url: ../ambari/2.1.2.1/bk_upgrading_Ambari/content/_ambari_upgrade_guide.html
        pdf: ../ambari/2.1.2.1/bk_upgrading_Ambari/bk_upgrading_Ambari.pdf

      - title: Non-Ambari Cluster Upgrade Guide
        url: bk_upgrading_hdp_manually/index.html
        pdf: bk_upgrading_hdp_manually/bk_upgrading_hdp_manually.pdf
        contents:
          - chapter: Upgrade from HDP 2.1 to HDP 2.2 Manually
            url: bk_upgrading_hdp_manually/content/ch_upgrade_2_1.html
          - chapter: Upgrade from HDP 2.0 to HDP 2.2 Manually
            url: bk_upgrading_hdp_manually/content/ch_upgrade_2_0.html
          - chapter: Upgrade from HDP 1.3 to HDP 2.2 Manually
            url: bk_upgrading_hdp_manually/content/ch_upgrade_1_3.html

      - title: HDP Rolling Upgrade
        url: bk_rolling-upgrade/index.html
        pdf: bk_rolling-upgrade/bk_rolling-upgrade.pdf
        contents:
          - chapter: Overview
            url: bk_rolling-upgrade/content/ch_overview-rolling-upgrade.xml.html
          - chapter: Preparation
            url: bk_rolling-upgrade/content/ch_preparation-rolling-upgrade.xml.html
          - chapter: Upgrading the Cluster
            url: bk_rolling-upgrade/content/ch_upgrading-cluster-rolling-upgrade.xml.html
          - chapter: Downgrading the Cluster
            url: bk_rolling-upgrade/content/ch_downgrading-cluster-rolling-upgrade.xml.html
          - chapter: Initiating Rollback
            url: bk_rolling-upgrade/content/ch_rollback-rolling-upgrade-init.xml.html
          - chapter: Appendix A
            url: bk_rolling-upgrade/content/ch_rolling-upgrade-appx-a.xml.html
          - chapter: Appendix B
            url: bk_rolling-upgrade/content/ch_rolling-upgrade-appx-b.xml.html

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
          - chapter: Tuning for Interactive and Batch Queries
            url: bk_performance_tuning/content/ch_performance_interactive_queue_chapter.html

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

    subprojects:
      - name: Apache Pig
        url: //hortonworks.com/hadoop/pig/
      - name: Apache Hive
        url: //hortonworks.com/hadoop/hive/
      - name: Apache Tez
        url: //hortonworks.com/hadoop/tez/
      - name: Apache Solr
        url: //hortonworks.com/hadoop/solr/
      - name: Apache Slider
        url: //hortonworks.com/hadoop/slider/
      - name: Apache HBase
        url: //hortonworks.com/hadoop/hbase/
      - name: Apache Accumulo
        url: //hortonworks.com/hadoop/accumulo/
      - name: Apache Storm
        url: //hortonworks.com/hadoop/storm/
#      - name: Apache Phoenix
#        url: //phoenix.apache.org/

  - title: Data Science
    name: data_science
    books:
      - title: Apache Spark Quick Start
        url: bk_spark-quickstart/index.html
        pdf: bk_spark-quickstart/bk_spark-quickstart.pdf
        contents:
          - chapter: Introduction
            url: bk_spark-quickstart/content/ch_introduction-spark-quickstart.html
          - chapter: Prerequisites
            url: bk_spark-quickstart/content/ch_prerequisites-spark-quickstart.html
          - chapter: Installing Spark
            url: bk_spark-quickstart/content/ch_installing-spark-quickstart.html
          - chapter: Validating Spark
            url: bk_spark-quickstart/content/ch_validating-spark-quickstart.html
          - chapter: Installing Spark with Kerberos
            url: bk_spark-quickstart/content/ch_installing-kerb-spark-quickstart.html
          - chapter: Using Spark with HDFS
            url: bk_spark-quickstart/content/ch_spark-hdfs.html
          - chapter: Troubleshooting Spark
            url: bk_spark-quickstart/content/ch_troubleshooting-spark-quickstart.html

    subprojects:
      - name: Spark
        url: //hortonworks.com/hadoop/spark/
#      - name: Zeppelin
#        url: //zeppelin-project.org/

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
#          - chapter: HDFS Administration
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: Archival Storage
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: Centralized Cache Management in HDFS
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: Configuring HDFS Compression
#            url: bk_hdfs_admin_tools/content/.html
#          - chapter: Configuring Rack Awareness On HDP
#            url: bk_hdfs_admin_tools/content/.html
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
#          - chapter: About HDP
#            url: bk_hdfs_admin_tools/content/.html

      - title: HDFS NFS Gateway
        url: bk_hdfs_nfs_gateway/index.html
        pdf: bk_hdfs_nfs_gateway/bk_hdfs_nfs_gateway.pdf
        contents:
          - chapter: HDFS NFS Gateway User Guide
            url: bk_hdfs_nfs_gateway/content/hdfs-nfs-gateway-user-guide.html

      - title: HDP System Administration
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
        url: bk_HDP_Reference_Guide/content/ch01.html
        pdf: bk_HDP_Reference_Guide/bk_HDP_Reference_Guide.pdf
#        contents:
#          - chapter: Hadoop Service Accounts
#            url: bk_HDP_Reference_Guide/content/.html
#          - chapter: Configuring Ports
#            url: bk_HDP_Reference_Guide/content/reference_chap2.html
#          - chapter: Controlling HDP Services Manually
#            url: bk_HDP_Reference_Guide/content/.html
#          - chapter: Deploying HDP In Production Data Centers With Firewalls
#            url: bk_HDP_Reference_Guide/content/.html

    subprojects:
      - name: Ambari
        url: //hortonworks.com/hadoop/ambari/
      - name: Hadoop
        url: //hortonworks.com/hadoop/
      - name: YARN
        url: //hortonworks.com/hadoop/yarn/
      - name: Cloudbreak
        url: //hortonworks.com/hadoop/cloudbreak/
      - name: ZooKeeper
        url: //hortonworks.com/hadoop/zookeeper/
      - name: Oozie
        url: //hortonworks.com/hadoop/oozie/

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
#          - chapter: About Hortonworks Data Platform
#            url: bk_Knox_Gateway_Admin_Guide/content/.html

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
#          - chapter: Repository Manager
#            url: bk_Ranger_User_Guide/content/.html
#          - chapter: Policy Manager
#            url: bk_Ranger_User_Guide/content/.html
#          - chapter: Users/Groups Administration
#            url: bk_Ranger_User_Guide/content/.html
#          - chapter: Analytics Administration
#            url: bk_Ranger_User_Guide/content/.html
#          - chapter: Auditing
#            url: bk_Ranger_User_Guide/content/.html
#          - chapter: Special Requirements for High Availability Environments
#            url: bk_Ranger_User_Guide/content/.html
#          - chapter: About HDP
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
          - chapter: Ranger Plugins Overview
            url: bk_Ranger_Install_Guide/content/ch_enable_ranger_plugins.html
          - chapter: Ranger Plugins - Kerberos Overview
            url: bk_Ranger_Install_Guide/content/ch_enable_ranger_plugins_kerberos_ambari.html
          - chapter: About HDP
            url: bk_Ranger_Install_Guide/content/ch06.html

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

      - title: Adding a New Component to Ranger
        url: bk_Ranger_Adding_New/content/ch01.html
        pdf: bk_Ranger_Adding_New/bk_Ranger_Adding_New.pdf
#        contents:
#          - chapter: Adding a New Component to Apache Ranger
#            url: bk_Ranger_Adding_New/content/.html
#          - chapter: Developing a Custom Authorization Module
#            url: bk_Ranger_Adding_New/content/.html
#          - chapter: About HDP
#            url: bk_Ranger_Adding_New/content/.html

    subprojects:
      - name: Knox
        url: //hortonworks.com/hadoop/knox-gateway/
      - name: Ranger
        url: //hortonworks.com/hadoop/ranger/

  - title: Data Governance and Integration
    name: gov
    books:
      - title: Data Replication Quick Start Guide
        url: bk_falcon_quickstart_guide/index.html
        pdf: bk_falcon_quickstart_guide/bk_falcon_quickstart_guide.pdf
        contents:
          - chapter: Data Replication with Falcon Quick Start Guide
            url: bk_falcon_quickstart_guide/content/ch_data_replication_with_falcon_chapter.html

      - title: Apache Flume User Guide
        url: ds_flume/index.html

    subprojects:
      - name: Falcon
        url: //hortonworks.com/hadoop/falcon/
      - name: Atlas
        url: //hortonworks.com/hadoop/atlas/
      - name: Sqoop
        url: //hortonworks.com/hadoop/sqoop/
      - name: Flume
        url: //hortonworks.com/hadoop/flume/
      - name: Kafka
        url: //hortonworks.com/hadoop/kafka/

---

This is the content below YAML.
