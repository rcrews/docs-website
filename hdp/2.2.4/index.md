---
layout: product
title: HDP
version: 2.2.4
base-path: /hdp/2.2.4/

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
        url: bk_HDP_RelNotes/content/ch_relnotes_v224.html
        pdf: bk_HDP_RelNotes/bk_HDP_RelNotes-20150413.pdf

  - title: Install
    name: install
    books:
      - title: Getting Started
        url: bk_getting-started-guide/content/ch_about-hortonworks-data-platform.html
        pdf: bk_getting-started-guide/bk_getting-started-guide-20150413.pdf

      - title: Ambari Automated Install
        url: ../../Ambari-2.1.2.1/bk_Installing_HDP_AMB/content/index.html
        pdf: ../../Ambari-2.1.2.1/bk_Installing_HDP_AMB/bk_Installing_HDP_AMB-20151109.pdf

      - title: Non-Ambari Cluster Installation Guide
        url: bk_installing_manually_book/content/ch_getting_ready_chapter.html
        pdf: bk_installing_manually_book/bk_installing_manually_book-20150413.pdf

  - title: Upgrade
    name: upgrade
    books:
      - title: Ambari Upgrade Guide
        url: ../../Ambari-2.1.2.1/bk_upgrading_Ambari/content/index.html
        pdf: ../../Ambari-2.1.2.1/bk_upgrading_Ambari/bk_upgrading_Ambari-20151109.pdf

      - title: Non-Ambari Cluster Upgrade Guide
        url: bk_upgrading_hdp_manually/content/ch_upgrade_2_1.html
        pdf: bk_upgrading_hdp_manually/bk_upgrading_hdp_manually-20150413.pdf

      - title: HDP Rolling Upgrade
        url: bk_rolling-upgrade/content/ch_overview-rolling-upgrade.xml.html
        pdf: bk_rolling-upgrade/bk_rolling-upgrade-20150413.pdf

  - title: Data Access
    name: data_access
    books:
      - title: HDP Data Services Guide
        url: bk_dataintegration/content/index.html
        pdf: bk_dataintegration/bk_dataintegration-20150413.pdf

      - title: Hive Performance Tuning Guide
        url: bk_performance_tuning/content/ch_performance_interactive_queue_chapter.html
        pdf: bk_performance_tuning/bk_performance_tuning-20150413.pdf

      - title: Importing Data Into HBase
        url: bk_importing_data_into_hbase_guide/content/ch_importing_data_into_hbase_chapter.html
        pdf: bk_importing_data_into_hbase_guide/bk_importing_data_into_hbase_guide-20150413.pdf

      - title: HBase Snapshots
        url: bk_hbase_snapshots_guide/content/ch_hbase_snapshots_chapter.html
        pdf: bk_hbase_snapshots_guide/bk_hbase_snapshots_guide-20150413.pdf

      - title: Storm User Guide
        url: bk_storm-user-guide/content/ch_using_storm.html
        pdf: bk_storm-user-guide/bk_storm-user-guide-20150413.pdf

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
        url: bk_spark-quickstart/content/ch_introduction-spark-quickstart.html
        pdf: bk_spark-quickstart/bk_spark-quickstart-20150413.pdf

    subprojects:
      - name: Spark
        url: //hortonworks.com/hadoop/spark/
#      - name: Zeppelin
#        url: //zeppelin-project.org/

  - title: Data Management and Operations
    name: data_mgt
    books:
      - title: Cluster Planning Guide
        url: bk_cluster-planning-guide/content/ch_hardware-recommendations_chapter.html
        pdf: bk_cluster-planning-guide/bk_cluster-planning-guide-20150413.pdf

      - title: High Availability for Hadoop
        url: bk_hadoop-ha/content/ch_HA-Hive.html
        pdf: bk_hadoop-ha/bk_hadoop-ha-20150413.pdf

      - title: YARN Resource Management Guide
        url: bk_yarn_resource_mgt/content/ch_capacity_scheduler.html
        pdf: bk_yarn_resource_mgt/bk_yarn_resource_mgt-20150413.pdf

      - title: HDFS Administration Guide
        url: bk_hdfs_admin_tools/content/ch01.html
        pdf: bk_hdfs_admin_tools/bk_hdfs_admin_tools-20150413.pdf

      - title: HDFS NFS Gateway
        url: bk_hdfs_nfs_gateway/content/hdfs-nfs-gateway-user-guide.html
        pdf: bk_hdfs_nfs_gateway/bk_hdfs_nfs_gateway-20150413.pdf

      - title: HDP System Administration
        url: bk_Sys_Admin_Guides/content/ch_add_slave_nodes.html
        pdf: bk_Sys_Admin_Guides/bk_Sys_Admin_Guides-20150413.pdf

      - title: HDP Reference Guide
        url: bk_HDP_Reference_Guide/content/ch01.html
        pdf: bk_HDP_Reference_Guide/bk_HDP_Reference_Guide-20150413.pdf

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
        pdf: bk_Knox_Gateway_Admin_Guide/bk_Knox_Gateway_Admin_Guide-20150413.pdf

      - title: Ranger User Guide
        url: bk_Ranger_User_Guide/content/ch01.html
        pdf: bk_Ranger_User_Guide/bk_Ranger_User_Guide-20150413.pdf

      - title: Installing Ranger Over Ambari
        url: bk_Ranger_Install_Guide/content/ch_overview_ranger_ambari_install.html
        pdf: bk_Ranger_Install_Guide/bk_Ranger_Install_Guide-20150317.pdf

      - title: Configuring Storm for Kerberos Over Ambari
        url: bk_secure-storm-ambari/content/ch_secure-storm-overview.html
        pdf: bk_secure-storm-ambari/bk_secure-storm-ambari-20150413.pdf

      - title: Adding a New Component to Ranger
        url: bk_Ranger_Adding_New/content/ch01.html
        pdf: bk_Ranger_Adding_New/bk_Ranger_Adding_New-20150413.pdf

    subprojects:
      - name: Knox
        url: //hortonworks.com/hadoop/knox-gateway/
      - name: Ranger
        url: //hortonworks.com/hadoop/ranger/

  - title: Data Governance and Integration
    name: gov
    books:
      - title: Data Replication Quick Start Guide
        url: bk_falcon_quickstart_guide/content/ch_data_replication_with_falcon_chapter.html
        pdf: bk_falcon_quickstart_guide/bk_falcon_quickstart_guide-20150413.pdf

      - title: Apache Flume User Guide
        url: ../HDP-2.2.0/ds_Flume/index.html

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
