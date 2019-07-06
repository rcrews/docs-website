---
layout: product
title: HDP
version: 2.3 Yahoo! Japan
base-path: /HDPDocuments/HDP2/HDP-2.3-yj/

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
      - title: Readme
        url: bk_readme/content/ch_readme.html
        pdf: bk_readme/bk_readme-20160311.pdf

  - title: Install
    name: install
    books:
#      - title: Getting Started Guide
#        url: bk_getting-started-guide/content/ch_about-hortonworks-data-platform.html
#        pdf: bk_getting-started-guide/bk_getting-started-guide-20160311.pdf

      - title: Ambari Automated Install Guide
        url: ../../Ambari-2.2.1.1/bk_Installing_HDP_AMB/content/index.html
        pdf: ../../Ambari-2.2.1.1/bk_Installing_HDP_AMB/bk_Installing_HDP_AMB-20160307.pdf

      - title: Non-Ambari Cluster Installation Guide
        url: bk_installing_manually_book/content/ch_getting_ready_chapter.html
        pdf: bk_installing_manually_book/bk_installing_manually_book-20160311.pdf

  - title: Upgrade
    name: upgrade
    books:
      - title: Ambari Upgrade Guide
        url: ../../Ambari-2.2.1.1/bk_upgrading_Ambari/content/index.html
        pdf: ../../Ambari-2.2.1.1/bk_upgrading_Ambari/bk_upgrading_Ambari-20160307.pdf

      - title: Non-Ambari Cluster Upgrade Guide
        url: bk_upgrading_hdp_manually/content/ch_upgrade_2_2.html
        pdf: bk_upgrading_hdp_manually/bk_upgrading_hdp_manually-20160311.pdf

      - title: Rolling Upgrade Guide
        url: ../HDP-2.3.0/bk_rolling-upgrade/content/ch_overview-rolling-upgrade.xml.html

  - title: Data Access
    name: data_access
    books:
      - title: HDP Data Services Guide
        url: bk_dataintegration/content/ch_using-hive.html
        pdf: bk_dataintegration/bk_dataintegration-20160311.pdf

      - title: Hive Performance Tuning Guide
        url: bk_performance_tuning/content/ch_hive_architectural_overview.html
        pdf: bk_performance_tuning/bk_performance_tuning-20160311.pdf

      - title: Importing Data Into HBase
        url: bk_importing_data_into_hbase_guide/content/ch_importing_data_into_hbase_chapter.html
        pdf: bk_importing_data_into_hbase_guide/bk_importing_data_into_hbase_guide-20160311.pdf

      - title: HBase Snapshots
        url: bk_hbase_snapshots_guide/content/ch_hbase_snapshots_chapter.html
        pdf: bk_hbase_snapshots_guide/bk_hbase_snapshots_guide-20160311.pdf

      - title: Storm User Guide
        url: bk_storm-user-guide/content/ch_using_storm.html
        pdf: bk_storm-user-guide/bk_storm-user-guide-20160311.pdf

      - title: Hortonworks Data Platform Search (Apache Solr)
        url: ../HDP-2.3.0/bk_search/index.html

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
      - title: Spark Guide
        url: bk_spark-guide/content/ch_introduction-spark.html
        pdf: bk_spark-guide/bk_spark-guide-20160311.pdf

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
        pdf: bk_cluster-planning-guide/bk_cluster-planning-guide-20160311.pdf

      - title: High Availability for Hadoop
        url: bk_hadoop-ha/content/ch_HA-Hive.html
        pdf: bk_hadoop-ha/bk_hadoop-ha-20160311.pdf

      - title: YARN Resource Management Guide
        url: bk_yarn_resource_mgt/content/ch_capacity_scheduler.html
        pdf: bk_yarn_resource_mgt/bk_yarn_resource_mgt-20160311.pdf

      - title: HDFS Administration Guide
        url: bk_hdfs_admin_tools/content/ch01.html
        pdf: bk_hdfs_admin_tools/bk_hdfs_admin_tools-20160311.pdf

      - title: HDFS NFS Gateway
        url: bk_hdfs_nfs_gateway/content/hdfs-nfs-gateway-user-guide.html
        pdf: bk_hdfs_nfs_gateway/bk_hdfs_nfs_gateway-20160311.pdf

      - title: HDP System Administration Guide
        url: bk_Sys_Admin_Guides/content/ch_slave_nodes.html
        pdf: bk_Sys_Admin_Guides/bk_Sys_Admin_Guides-20160311.pdf

      - title: HDP Reference Guide
        url: bk_HDP_Reference_Guide/content/reference_chap2.html
        pdf: bk_HDP_Reference_Guide/bk_HDP_Reference_Guide-20160311.pdf

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
        url: bk_Knox_Gateway_Admin_Guide/content/knox-gateway-overview.html
        pdf: bk_Knox_Gateway_Admin_Guide/bk_Knox_Gateway_Admin_Guide-20160311.pdf

      - title: Hadoop Security Guide
        url: bk_Security_Guide/content/hdp_security_guide_overview.html
        pdf: bk_Security_Guide/bk_Security_Guide-20160311.pdf

      - title: Ranger User Guide
        url: bk_Ranger_User_Guide/content/ch01.html
        pdf: bk_Ranger_User_Guide/bk_Ranger_User_Guide-20160311.pdf

      - title: Installing Ranger Over Ambari
        url: bk_Ranger_Install_Guide/content/ch_overview_ranger_ambari_install.html
        pdf: bk_Ranger_Install_Guide/bk_Ranger_Install_Guide-20160311.pdf

      - title: Ranger KMS Administration Guide
        url: bk_Ranger_KMS_Admin_Guide/content/ch_ranger_kms_overview.html
        pdf: bk_Ranger_KMS_Admin_Guide/bk_Ranger_KMS_Admin_Guide-20160311.pdf

      - title: Configuring Kafka for Kerberos Over Ambari
        url: bk_secure-kafka-ambari/content/ch_secure-kafka-overview.html
        pdf: bk_secure-kafka-ambari/bk_secure-kafka-ambari-20160311.pdf

      - title: Configuring Storm for Kerberos Over Ambari
        url: bk_secure-storm-ambari/content/ch_secure-storm-overview.html
        pdf: bk_secure-storm-ambari/bk_secure-storm-ambari-20160311.pdf

    subprojects:
      - name: Knox
        url: //hortonworks.com/hadoop/knox-gateway/
      - name: Ranger
        url: //hortonworks.com/hadoop/ranger/

  - title: Data Governance and Integration
    name: gov
    books:
      - title: Data Governance Guide
        url: bk_data_governance/content/ch_hdp_data_governance_overview.html
        pdf: bk_data_governance/bk_data_governance-20160311.pdf

      - title: Apache Flume User Guide
        url: ../HDP-2.3.0/ds_flume/index.html

      - title: Kafka Guide
        url: bk_kafka-guide/content/ch_introduction_kafka.html
        pdf: bk_kafka-guide/bk_kafka-guide-20160311.pdf

      - title: Hortonworks Connector for Teradata
        url: bk_HortonworksConnectorForTeradata/content/ch_HortonworksConnectorForTeradata.html
        pdf: bk_HortonworksConnectorForTeradata/bk_HortonworksConnectorForTeradata-20151008.pdf

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
