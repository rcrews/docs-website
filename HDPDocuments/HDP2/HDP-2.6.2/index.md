---
layout: hwx_product
title: HDP
version: 2.6.2
base-path: /HDPDocuments/HDP2/HDP-2.6.2/

sections:

  - title: Release Notes
    name: releasenotes
    books:
      - title: Release Notes
        url: bk_release-notes/content/ch_relnotes.html
        pdf: bk_release-notes/bk_release-notes.pdf
      - title: Support Matrix
        url: https://supportmatrix.hortonworks.com/

  - title: Install
    name: install
    books:
      - title: Apache Ambari Installation
        url: ../../Ambari-2.5.2.0/bk_ambari-installation/content/ch_Getting_Ready.html
        pdf: ../../Ambari-2.5.2.0/bk_ambari-installation/bk_ambari-installation.pdf

      - title: Apache Ambari Installation for IBM Power Systems
        url: ../../Ambari-2.5.2.0/bk_ambari-installation-ppc/content/ch_Getting_Ready.html
        pdf: ../../Ambari-2.5.2.0/bk_ambari-installation-ppc/bk_ambari-installation-ppc.pdf

      - title: Command Line Installation
        url: bk_command-line-installation/index.html
        pdf: bk_command-line-installation/bk_command-line-installation.pdf
        contents:
          - chapter: Preparing to Manually Install HDP
            url: bk_command-line-installation/content/ch_getting_ready_chapter.html
          - chapter: Installing Apache ZooKeeper
            url: bk_command-line-installation/content/ch_install_zookeeper_chapter.html
          - chapter: Installing HDFS, YARN, and MapReduce
            url: bk_command-line-installation/content/ch_install_hdfs_yarn_chapter.html
          - chapter: Setting Up the Hadoop Configuration
            url: bk_command-line-installation/content/ch_setting_up_hadoop_configuration_chapter.html
          - chapter: Validating the Core Hadoop Installation
            url: bk_command-line-installation/content/rpm_validating_the_core_hadoop_installation.html
          - chapter: Installing Apache HBase
            url: bk_command-line-installation/content/ch_installing_hbase_chapter.html
          - chapter: Installing Apache Phoenix
            url: bk_command-line-installation/content/ch_install_phoenix_chapter.html
          - chapter: Installing and Configuring Apache Tez
            url: bk_command-line-installation/content/ch_installing_tez_chapter.html
          - chapter: Installing Apache Hive and Apache HCatalog
            url: bk_command-line-installation/content/ch_installing_hive_hcat_chapter.html
          - chapter: Installing Apache Pig
            url: bk_command-line-installation/content/ch_installing_pig_chapter.html
          - chapter: Installing Apache WebHCat
            url: bk_command-line-installation/content/ch_installing_webhcat_chapter.html
          - chapter: Installing Apache Oozie
            url: bk_command-line-installation/content/ch_installing_oozie_chapter.html
          - chapter: Installing Apache Ranger
            url: bk_command-line-installation/content/ch_installing_ranger_chapter.html
          - chapter: Installing Hue
            url: bk_command-line-installation/content/installing_hue.html
          - chapter: Installing Apache Sqoop
            url: bk_command-line-installation/content/ch_installing_sqoop_chapter.html
          - chapter: Installing Apache Mahout
            url: bk_command-line-installation/content/ch_installing_mahout_chapter.html
          - chapter: Installing and Configuring Apache Flume
            url: bk_command-line-installation/content/ch_installing_flume_chapter.html
          - chapter: Installing and Configuring Apache Storm
            url: bk_command-line-installation/content/ch_installing_storm_chapter.html
          - chapter: Installing and Configuring Apache Spark
            url: bk_command-line-installation/content/ch_installing_spark_chapter.html
          - chapter: Installing and Configuring Apache Spark 2
            url: bk_command-line-installation/content/ch_installing_spark2_chapter.html
          - chapter: Installing and Configuring Apache Kafka
            url: bk_command-line-installation/content/ch_installing_kafka_chapter.html
          - chapter: Installing and Configuring Zeppelin
            url: bk_command-line-installation/content/ch_installing_zeppelin_chapter.html
          - chapter: Installing Apache Accumulo
            url: bk_command-line-installation/content/ch_install_accumulo_chapter.html
          - chapter: Installing Apache Falcon
            url: bk_command-line-installation/content/ch_installing_falcon_chapter.html
          - chapter: Installing Apache Knox
            url: bk_command-line-installation/content/ch_installing_knox_chapter.html
          - chapter: Installing Apache Slider
            url: bk_command-line-installation/content/ch_install_slider_chapter.html
          - chapter: Setting Up Kerberos Security for Manual Installs
            url: bk_command-line-installation/content/ch_security_for_manual_installs_chapter.html
          - chapter: Uninstalling HDP
            url: bk_command-line-installation/content/ch_uninstalling_hdp_chapter.html

  - title: Upgrade
    name: upgrade
    books:
      - title: Apache Ambari Upgrade
        url: ../../Ambari-2.5.2.0/bk_ambari-upgrade/content/ambari_upgrade_guide.html
        pdf: ../../Ambari-2.5.2.0/bk_ambari-upgrade/bk_ambari-upgrade.pdf

      - title: Command Line Upgrade
        url: bk_command-line-upgrade/index.html
        pdf: bk_command-line-upgrade/bk_command-line-upgrade.pdf
        contents:
          - chapter: Upgrade from HDP 2.5 to HDP 2.6.0 Manually
            url: bk_command-line-upgrade/content/ch_upgrade_2_5.html
          - chapter: Upgrade from HDP 2.4 to HDP 2.6.0 Manually
            url: bk_command-line-upgrade/content/ch_upgrade_2_4.html
          - chapter: Upgrade from HDP 2.3 to HDP 2.6.0 Manually
            url: bk_command-line-upgrade/content/ch_upgrade_2_3.html

      - title: Apache Ambari Upgrade Best Practices
        url: bk_ambari-upgrade-best-practices/index.html
        pdf: bk_ambari-upgrade-best-practices/bk_ambari-upgrade-best-practices.pdf
        contents:
          - chapter: Overview
            url: bk_ambari-upgrade-best-practices/content/ch_over.html
          - chapter: Planning Your Upgrade
            url: bk_ambari-upgrade-best-practices/content/ch_plan.html
          - chapter: Completing the Preupgrade Verifications
            url: bk_ambari-upgrade-best-practices/content/ch_pre.html
          - chapter: Upgrading Your System
            url: bk_ambari-upgrade-best-practices/content/ch_up.html
          - chapter: Completing the Postupgrade Verifications
            url: bk_ambari-upgrade-best-practices/content/ch_post.html

  - title: Data Governance
    name: gov
    books:
      - title: Data Governance
        url: bk_data-governance/index.html
        pdf: bk_data-governance/bk_data-governance.pdf
        contents:
          - chapter: HDP Data Governance
            url: bk_data-governance/content/ch_hdp_data_governance_overview.html
          - chapter: Installing and Configuring Apache Atlas Using Ambari
            url: bk_data-governance/content/ch_hdp_data_governance_install_atlas_ambari.html
          - chapter: Searching and Viewing Entities
            url: bk_data-governance/content/ch_atlas_searching_and_viewing_entities.html
          - chapter: Working with Atlas Tags
            url: bk_data-governance/content/ch_working_with_atlas_tags.html
          - chapter: Apache Atlas REST API
            url: bk_data-governance/content/ch_atlas_rest_api.html

    # subprojects:
    #   - name: Falcon
    #     url: //hortonworks.com/hadoop/falcon/
    #   - name: Atlas
    #     url: //hortonworks.com/hadoop/atlas/
    #   - name: Sqoop
    #     url: //hortonworks.com/hadoop/sqoop/

  - title: Security
    name: security
    books:
      - title: Security
        url: bk_security/index.html
        pdf: bk_security/bk_security.pdf
        contents:
          - chapter: HDP Security Overview
            url: bk_security/content/ch_hdp-security-guide-overview.html
          - chapter: Authentication
            url: bk_security/content/ch_hdp-security-guide-authentication.html
          - chapter: Configuring Authorization in Hadoop
            url: bk_security/content/ch_hdp-security-guide-authorization.html
          - chapter: "Data Protection: Wire Encryption"
            url: bk_security/content/ch_hdp-security-guide-wire-encryption.html
          - chapter: Auditing in Hadoop
            url: bk_security/content/ch_hdp-security-guide-audit.html
          - chapter: "Data Protection: HDFS Encryption"
            url: bk_security/content/ch_hdp-security-guide-hdfs-encryption.html
          - chapter: Addendum
            url: bk_security/content/ch_security_addendum.html

    # subprojects:
    #   - name: Knox
    #     url: //hortonworks.com/hadoop/knox-gateway/
    #   - name: Ranger
    #     url: //hortonworks.com/hadoop/ranger/

  - title: Data Access
    name: data_access
    books:
      - title: Data Access
        url: bk_data-access/index.html
        pdf: bk_data-access/bk_data-access.pdf
        contents:
          - chapter: What's New in Data Access for HDP 2.6
            url: bk_data-access/content/wn_data_access.html
          - chapter: Data Warehousing with Apache Hive
            url: bk_data-access/content/ch_using-hive.html
          - chapter: Enabling Efficient Execution with Apache Pig and Apache Tez
            url: bk_data-access/content/ch_running-pig-tez.html
          - chapter: Managing Metadata Services with Apache HCatalog
            url: bk_data-access/content/ch_using-hcatalog.html
          - chapter: Persistent Read/Write Data Access with Apache HBase
            url: bk_data-access/content/ch05.html
          - chapter: Orchestrating SQL and APIs with Apache Phoenix
            url: bk_data-access/content/ch_using-phoenix.html
          - chapter: Real-Time Data Analytics with Druid
            url: bk_data-access/content/ch_using-druid.html

      - title: Apache Hive Performance Tuning
        url: bk_hive-performance-tuning/index.html
        pdf: bk_hive-performance-tuning/bk_hive-performance-tuning.pdf
        contents:
          - chapter: Optimizing an Apache Hive Data Warehouse
            url: bk_hive-performance-tuning/content/ch_hive-perf-tuning-intro.html
          - chapter: Hive LLAP on Your Cluster
            url: bk_hive-performance-tuning/content/ch_llap-on-cluster.html
          - chapter: Best Practices Prior to Tuning Performance
            url: bk_hive-performance-tuning/content/ch_best-practices.html
          - chapter: Connectivity and Admission Control
            url: bk_hive-performance-tuning/content/ch_connectivity-admission-control.html
          - chapter: Using the Cost-Based Optimizer for Optimal Performance
            url: bk_hive-performance-tuning/content/ch_cost-based-optimizer.html
          - chapter: Optimizing the Hive Execution Engine
            url: bk_hive-performance-tuning/content/ch_optimizing-hive-execution-engine.html
          - chapter: Maximizing Storage Resources
            url: bk_hive-performance-tuning/content/ch_maximizing-storage-resources.html
          - chapter: Debugging Performance Issues
            url: bk_hive-performance-tuning/content/ch_debugging-performance-issues.html

      - title: HBase Java API Reference
        url: bk_hbase-java-api-reference/index.html

      - title: Apache Storm Component Guide
        url: bk_storm-component-guide/index.html
        pdf: bk_storm-component-guide/bk_storm-component-guide.pdf
        contents:
          - chapter: Analyzing Streams of Data with Apache Storm
            url: bk_storm-component-guide/content/ch_storm-overview.html
          - chapter: Installing Apache Storm
            url: bk_storm-component-guide/content/ch_storm-install.html
          - chapter: Configuring Apache Storm for a Production Environment
            url: bk_storm-component-guide/content/ch_storm-configure.html
          - chapter: Developing Apache Storm Applications
            url: bk_storm-component-guide/content/ch_storm-development.html
          - chapter: Moving Data Into and Out of Apache Storm Using Spouts and Bolts
            url: bk_storm-component-guide/content/ch_storm-connectors.html
          - chapter: Packaging Storm Topologies
            url: bk_storm-component-guide/content/ch_storm-pkg-topologies.html
          - chapter: Deploying and Managing Apache Storm Topologies
            url: bk_storm-component-guide/content/ch_storm-deploy-topologies.html
          - chapter: Monitoring and Debugging an Apache Storm Topology
            url: bk_storm-component-guide/content/ch_storm-topology-debugging.html
          - chapter: Tuning an Apache Storm Topology
            url: bk_storm-component-guide/content/ch_storm-topology-tuning.html

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

  - title: Data Science
    name: data_science
    books:
      - title: Apache Spark Component Guide
        url: bk_spark-component-guide/index.html
        pdf: bk_spark-component-guide/bk_spark-component-guide.pdf
        contents:
          - chapter: Analyzing Data with Apache Spark
            url: bk_spark-component-guide/content/ch_introduction-spark.html
          - chapter: Installing Spark
            url: bk_spark-component-guide/content/ch_installing-spark.html
          - chapter: Configuring Spark
            url: bk_spark-component-guide/content/ch_configuring_dra.html
          - chapter: Running Spark
            url: bk_spark-component-guide/content/ch_running-spark-apps.html
          - chapter: Submitting Spark Applications Through Livy
            url: bk_spark-component-guide/content/ch_submit-spark-apps-livy.html
          - chapter: Running PySpark in a Virtual Environment
            url: bk_spark-component-guide/content/ch_running-pyspark-virtualenv.html
          - chapter: Automating Spark Jobs with Oozie Spark Action
            url: bk_spark-component-guide/content/ch_oozie-spark-action.html
          - chapter: Developing Spark Applications
            url: bk_spark-component-guide/content/ch_developing-spark-apps.html
          - chapter: "Using Spark from R: SparkR"
            url: bk_spark-component-guide/content/ch_spark-r.html
          - chapter: Tuning Spark
            url: bk_spark-component-guide/content/ch_tuning-spark.html

      - title: Apache Zeppelin Component Guide
        url: bk_zeppelin-component-guide/index.html
        pdf: bk_zeppelin-component-guide/bk_zeppelin-component-guide.pdf
        contents:
          - chapter: Overview
            url: bk_zeppelin-component-guide/content/ch_overview.html
          - chapter: Installing Apache Zeppelin
            url: bk_zeppelin-component-guide/content/ch_installation.html
          - chapter: Configuring Zeppelin
            url: bk_zeppelin-component-guide/content/ch_configuring_zeppelin.html
          - chapter: Using Zeppelin
            url: bk_zeppelin-component-guide/content/ch_using_zeppelin.html
          - chapter: Configuring Zeppelin Security
            url: bk_zeppelin-component-guide/content/ch_auth.html
          - chapter: Stopping the Zeppelin Server and Livy Server
            url: bk_zeppelin-component-guide/content/ch_stop-services.html

    # subprojects:
    #   - name: Spark
    #     url: //hortonworks.com/hadoop/spark/

  - title: Cluster Management
    name: data_mgt
    books:
      - title: Cluster Planning
        url: bk_cluster-planning/index.html
        pdf: bk_cluster-planning/bk_cluster-planning.pdf
        contents:
          - chapter: Hardware Recommendations for Apache Hadoop
            url: bk_cluster-planning/content/ch_hardware-recommendations_chapter.html
          - chapter: File System Partitioning Recommendations
            url: bk_cluster-planning/content/ch_partitioning_chapter.html

      - title: Apache Hadoop High Availability
        url: bk_hadoop-high-availability/index.html
        pdf: bk_hadoop-high-availability/bk_hadoop-high-availability.pdf
        contents:
          - chapter: High Availability for Hive Metastore
            url: bk_hadoop-high-availability/content/ch_HA-Hive.html
          - chapter: Deploying Multiple HiveServer2 Instances for High Availability
            url: bk_hadoop-high-availability/content/ch_multiple_hs2s.html
          - chapter: HiveServer2 High Availability via ZooKeeper
            url: bk_hadoop-high-availability/content/ch_HA-HiveServer2.html
          - chapter: High Availability for HBase
            url: bk_hadoop-high-availability/content/ch_HA-HBase.html
          - chapter: Namenode High Availability
            url: bk_hadoop-high-availability/content/ch_HA-NameNode.html
          - chapter: Resource Manager High Availability
            url: bk_hadoop-high-availability/content/ch_HA-ResourceManager.html
          - chapter: Apache Ranger High Availability
            url: bk_hadoop-high-availability/content/ch_HA-Ranger.html

      - title: Apache YARN Resource Management
        url: bk_yarn-resource-management/index.html
        pdf: bk_yarn-resource-management/bk_yarn-resource-management.pdf
        contents:
          - chapter: Capacity Scheduler
            url: bk_yarn-resource-management/content/ch_capacity_scheduler.html
          - chapter: CGroups
            url: bk_yarn-resource-management/content/ch_cgroups.html
          - chapter: Using CPU Scheduling to Allocate Resources
            url: bk_yarn-resource-management/content/ch_cpu_scheduling.html
          - chapter: Log Aggregation for Long-running Applications
            url: bk_yarn-resource-management/content/ch_log_aggregation.html
          - chapter: Node Labels
            url: bk_yarn-resource-management/content/ch_node_labels.html
          - chapter: Running Applications on YARN Using Slider
            url: bk_yarn-resource-management/content/ch_slider.html
          - chapter: Running Multiple MapReduce Versions Using the YARN Distributed Cache
            url: bk_yarn-resource-management/content/ch_multi_mr_on_yarn.html
          - chapter: Timeline Server
            url: bk_yarn-resource-management/content/ch_timeline_server.html
          - chapter: Using the YARN REST APIs to Manage Applications
            url: bk_yarn-resource-management/content/ch_yarn_rest_apis.html
          - chapter: Work-Preserving Restart
            url: bk_yarn-resource-management/content/ch_work-preserving_restart.html
          - chapter: Using the YARN CLI to View Logs for Running Applications
            url: bk_yarn-resource-management/content/ch_yarn_cli_view_running_applications.html

      - title: HDFS Administration
        url: bk_hdfs-administration/index.html
        pdf: bk_hdfs-administration/bk_hdfs-administration.pdf
        contents:
          - chapter: Accidental Deletion Protection
            url: bk_hdfs-administration/content/ch_accidental_deletion.html
          - chapter: ACLs on HDFS
            url: bk_hdfs-administration/content/ch_acls_hdfs.html
          - chapter: Archival Storage
            url: bk_hdfs-administration/content/ch_archival_storage.html
          - chapter: Backing Up HDFS Metadata
            url: bk_hdfs-administration/content/backing_up_hdfs_metadata.html
          - chapter: Balancing in HDFS
            url: bk_hdfs-administration/content/ch_balancing-in-hdfs.html
          - chapter: Centralized Cache Management in HDFS
            url: bk_hdfs-administration/content/centralized_cache_management_hdfs.html
          - chapter: Configuring HDFS Compression
            url: bk_hdfs-administration/content/ch_configuring_hdfs_compression.html
          - chapter: Configuring Rack Awareness On HDP
            url: bk_hdfs-administration/content/ch_configuring_rack_awareness_hdp.html
          - chapter: Customizing HDFS
            url: bk_hdfs-administration/content/ch_customizing_hdfs.html
          - chapter: G1GC Garbage Collector Configuration (Technical Preview)
            url: bk_hdfs-administration/content/ch_g1gc_garbage_collector_tech_preview.html
          - chapter: Hadoop Archives
            url: bk_hdfs-administration/content/ch_hadoop_archives.html
          - chapter: HDFS DataNode Monitoring
            url: bk_hdfs-administration/content/ch_hdfs_datanode_monitoring.html
          - chapter: JMX Metrics APIs for HDFS Daemons
            url: bk_hdfs-administration/content/ch_jmx_metrics_apis_hdfs_daemons.html
          - chapter: Memory as Storage (Technical Preview)
            url: bk_hdfs-administration/content/ch_memory_storage_tech_preview.html
          - chapter: Running DataNodes as Non-Root
            url: bk_hdfs-administration/content/ch_running_datanodes_non_root.html
          - chapter: Short Circuit Local Reads On HDFS
            url: bk_hdfs-administration/content/ch_short_circuit_local_reads_hdfs.html
          - chapter: WebHDFS Administrator Guide
            url: bk_hdfs-administration/content/ch_webhdfs_admin_guide.html

      - title: HDFS NFS Gateway User Guide
        url: bk_hdfs-nfs-gateway-user-guide/index.html
        pdf: bk_hdfs-nfs-gateway-user-guide/bk_hdfs-nfs-gateway-user-guide.pdf
        contents:
          - chapter: HDFS NFS Gateway User Guide
            url: bk_hdfs-nfs-gateway-user-guide/content/hdfs-nfs-gateway-user-guide.html

      - title: Administration
        url: bk_administration/index.html
        pdf: bk_administration/bk_administration.pdf
        contents:
          - chapter: Decommissioning Slave Nodes
            url: bk_administration/content/ch_slave_nodes.html
          - chapter: Manually Adding Slave Nodes to an HDP Cluster
            url: bk_administration/content/ch_add_slave_nodes.html
          - chapter: Using DistCp to Copy Files
            url: bk_administration/content/ch_distcp.html

      - title: Reference
        url: bk_reference/index.html
        pdf: bk_reference/bk_reference.pdf
        contents:
          - chapter: Configuring Ports
            url: bk_reference/content/reference_chap2.html
          - chapter: Controlling HDP Services Manually
            url: bk_reference/content/ch_controlling_hdp_svcs_manually.html
          - chapter: Deploying HDP In Production Data Centers With Firewalls
            url: bk_reference/content/ch_hdp_prod_data_centers_firewalls.html
          - chapter: Hadoop Service Accounts
            url: bk_reference/content/ch_hadoop_svc_accts.html
          - chapter: Supported Database Matrix for the Hortonworks Data Platform
            url: bk_reference/content/ch_supported_db_matrix_hdp.html

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

  - title: Data Movement
    name: movement
    books:
      - title: Workflow Management
        url: bk_workflow-management/index.html
        pdf: bk_workflow-management/bk_workflow-management.pdf
        contents:
          - chapter: Workflow Manager Basics
            url: bk_workflow-management/content/ch_wfm_basics.html
          - chapter: Content Roadmap for Workflow Manager
            url: bk_workflow-management/content/ch_wfm_content_roadmap.html
          - chapter: Quick Start
            url: bk_workflow-management/content/ch_wfm_quick_start.html
          - chapter: Designing Workflows Using the Design Component
            url: bk_workflow-management/content/ch_wfm_using_graph_tool.html
          - chapter: Monitoring Jobs Using the Dashboard
            url: bk_workflow-management/content/ch_wfm_using_dashboard.html
          - chapter: Sample ETL Use Case
            url: bk_workflow-management/content/ch_wfm_sample_etl_use_case.html
          - chapter: Workflow  Parameters
            url: bk_workflow-management/content/ch_wfm_parameters.html
          - chapter: Settings Menu Parameters
            url: bk_workflow-management/content/ch_wfm_settings.html
          - chapter: Job States
            url: bk_workflow-management/content/ch_wfm_states.html
          - chapter: Workflow Manager Files
            url: bk_workflow-management/content/ch_wfm_files.html

      - title: Data Movement and Integration
        url: bk_data-movement-and-integration/index.html
        pdf: bk_data-movement-and-integration/bk_data-movement-and-integration.pdf
        contents:
          - chapter: What's New in the Data Movement and Integration Guide
            url: bk_data-movement-and-integration/content/ch_whats_new.html
          - chapter: HDP Data Movement and Integration
            url: bk_data-movement-and-integration/content/ch_data_movement_overview.html
          - chapter: Data Management and Falcon Overview
            url: bk_data-movement-and-integration/content/ch_hdp_data_mgmt_falcon_overview.html
          - chapter: Prerequisite to Installing or Upgrading Falcon
            url: bk_data-movement-and-integration/content/ch_falcon_install_upgrade.html
          - chapter: Considerations for Using Falcon
            url: bk_data-movement-and-integration/content/ch_falcon_considerations.html
          - chapter: Configuring for High Availability
            url: bk_data-movement-and-integration/content/ch_data_movement_config_ha.html
          - chapter: Creating Falcon Entity Definitions
            url: bk_data-movement-and-integration/content/ch_config_using_data_pipelines.html
          - chapter: Mirroring Data with Falcon
            url: bk_data-movement-and-integration/content/ch_mirroring_on-prem.html
          - chapter: Replicating Data with Falcon
            url: bk_data-movement-and-integration/content/ch_replicating_data.html
          - chapter: Mirroring Data with HiveDR in a Secure Environment
            url: bk_data-movement-and-integration/content/ch_hive_dr_secure.html
          - chapter: Enabling Mirroring and Replication with Azure Cloud Services
            url: bk_data-movement-and-integration/content/ch_enabling_mirroring_in_cloud.html
          - chapter: Using Advanced Falcon Features
            url: bk_data-movement-and-integration/content/ch_config_features_properties.html
          - chapter: Using Apache Sqoop to Transfer Bulk Data
            url: bk_data-movement-and-integration/content/ch_data_movement_using_sqoop.html
          - chapter: Using HDP for Workflow and Scheduling With Oozie
            url: bk_data-movement-and-integration/content/ch_data_movement_using_oozie.html
          - chapter: Using Apache Flume for Streaming
            url: bk_data-movement-and-integration/content/ch_data_movement_using_flume.html
          - chapter: Troubleshooting
            url: bk_data-movement-and-integration/content/ch_data_movement_trblshoot.html
          - chapter: Appendix
            url: bk_data-movement-and-integration/content/app_data_movement.html

      - title: Apache Flume Component Guide
        url: bk_flume-component-guide/index.html
        pdf: bk_flume-component-guide/bk_flume-component-guide.pdf
        contents:
          - chapter: Documentation Changes
            url: bk_flume-component-guide/content/ch_documentation-changes.html
          - chapter: Introduction
            url: bk_flume-component-guide/content/ch_introduction.html
          - chapter: Using Apache Flume for Streaming
            url: bk_flume-component-guide/content/ch_data_movement_using_flume.html

      - title: Apache Kafka Component Guide
        url: bk_kafka-component-guide/index.html
        pdf: bk_kafka-component-guide/bk_kafka-component-guide.pdf
        contents:
          - chapter: Building a High-Throughput Messaging System with Apache Kafka
            url: bk_kafka-component-guide/content/ch_introduction_kafka.html
          - chapter: Apache Kafka Concepts
            url: bk_kafka-component-guide/content/ch_overview_kafka.html
          - chapter: Installing Kafka
            url: bk_kafka-component-guide/content/ch_installing_kafka.html
          - chapter: Configuring Kafka for a Production Environment
            url: bk_kafka-component-guide/content/ch_configuring_kafka.html
          - chapter: "Mirroring Data Between Clusters: Using the MirrorMaker Tool"
            url: bk_kafka-component-guide/content/ch_kafka_mirrormaker.html
          - chapter: Creating a Kafka Topic
            url: bk_kafka-component-guide/content/ch_create-kafka-topic.html
          - chapter: Developing Kafka Producers and Consumers
            url: bk_kafka-component-guide/content/ch_kafka-development.html

  - title: Cloud Storage
    name: cloud-storage
    books:
      - title: Cloud Data Access
        url: bk_cloud-data-access/index.html
        pdf: bk_cloud-data-access/bk_cloud-data-access.pdf
        contents:
          - chapter: About This Guide
            url: bk_cloud-data-access/content/about.html
          - chapter: Introducing the Cloud Storage Connectors
            url: bk_cloud-data-access/content/intro.html
          - chapter: Getting Started with Amazon S3
            url: bk_cloud-data-access/content/s3-get-started.html
          - chapter: Getting Started with ADLS
            url: bk_cloud-data-access/content/adls-get-started.html
          - chapter: Getting Started with WASB
            url: bk_cloud-data-access/content/wasb-get-started.html
          - chapter: Accessing Cloud Data in Hive
            url: bk_cloud-data-access/content/hive.html
          - chapter: Accessing Cloud Data in Spark
            url: bk_cloud-data-access/content/spark.html
          - chapter: Copying Cloud Data with Hadoop
            url: bk_cloud-data-access/content/hadoop.html

  - title: Add-Ons
    name: addons
    books:
      - title: Hortonworks HDB (Powered by Apache HAWQ)
        url: bk_hdb-quick-guide/index.html
        pdf: bk_hdb-quick-guide/bk_hdb-quick-guide.pdf
        contents:
          - chapter: Hortonworks HDB (Powered by Apache HAWQ)
            url: bk_hdb-quick-guide/content/ch_hdb_summary.html

      - title: Teradata Connector User Guide
        url: bk_teradata-connector-user-guide/index.html
        pdf: bk_teradata-connector-user-guide/bk_teradata-connector-user-guide.pdf
        contents:
          - chapter: What's New in Hortonworks Connector for Teradata
            url: bk_teradata-connector-user-guide/content/ch_whats_new.html
          - chapter: Hortonworks Connector for Teradata
            url: bk_teradata-connector-user-guide/content/ch_HortonworksConnectorForTeradata.html

      - title: Hortonworks Data Platform Search (Apache Solr)
        url: bk_solr-search-installation/index.html
        pdf: bk_solr-search-installation/bk_solr-search-installation.pdf
        contents:
          - chapter: Introduction
            url: bk_solr-search-installation/content/ch_hdp-search.html
          - chapter: Getting Ready
            url: bk_solr-search-installation/content/ch_hdp-search-reqts.html
          - chapter: Installing HDP Search Using Ambari
            url: bk_solr-search-installation/content/ch_hdp-search-install-ambari.html
          - chapter: Installing HDP Search Manually
            url: bk_solr-search-installation/content/ch_hdp-search-install-nonambari.html

  - title: IOP to HDP Migration
    name: iop2hdp
    books:
      - title: IOP to HDP Migration
        url: bk_iop-to-hdp-migration/index.html
        pdf: bk_iop-to-hdp-migration/bk_iop-to-hdp-migration.pdf
        contents:
          - chapter: Migrating from IOP to HDP
            url: bk_iop-to-hdp-migration/content/iop_hdp_migration_overview.html
          - chapter: Prerequisites
            url: bk_iop-to-hdp-migration/content/iop_hdp_migration_prerequisites.html
          - chapter: Back up DSM and BigSQL Metadata
            url: bk_iop-to-hdp-migration/content/iop_backup_value-add_services.html
          - chapter: Back Up Configurations
            url: bk_iop-to-hdp-migration/content/backup_configurations.html
          - chapter: Upgrade Ambari
            url: bk_iop-to-hdp-migration/content/iop_hdp_upgrade_ambari.html
          - chapter: Clean Up IBM IOP value-add services
            url: bk_iop-to-hdp-migration/content/iop_cleanup_components.html
          - chapter: Removing Deprecated Components and Services
            url: bk_iop-to-hdp-migration/content/iop_delete_deprecated_components.html
          - chapter: Upgrade Stack
            url: bk_iop-to-hdp-migration/content/iop_hdp_upgrade_stack.html
          - chapter: BigSQLv5 Upgrade
            url: bk_iop-to-hdp-migration/content/big_sql5_upgrade.html
          - chapter:  DSM Upgrade
            url: bk_iop-to-hdp-migration/content/dsm_upgrade.html

    # subprojects:
    #   - name: Flume
    #     url: //hortonworks.com/hadoop/flume/
    #   - name: Kafka
    #     url: //hortonworks.com/hadoop/kafka/

---

This is the content below YAML.
