---
layout: product
title: Cybersecurity
version: 1.2.2
base-path: /HDPDocuments/HCP1/HCP-1.2.2/

sections:
  - title: Release Notes
    name: releasenotes
    books:
      - title: Release Notes
        url: bk_release-notes/content/ch01.html
        pdf: bk_release-notes/bk_release-notes.pdf

  - title: Getting Started
    name: get-started
    books:
      - title: Installation
        url: bk_installation/index.html
        pdf: bk_installation/bk_installation.pdf
        contents:
          - chapter: Hortonworks Cybersecurity Package Information Roadmap
            url: bk_installation/content/installation_info_roadmap.html
          - chapter: Preparing to Install
            url: bk_installation/content/getting_started.html
          - chapter: Installing HCP on an Ambari-Managed Cluster Using Ambari
            url: bk_installation/content/install_using_ambari.html
          - chapter: Manually Installing HCP
            url: bk_installation/content/install_manually.html
          - chapter: Enabling Kerberos
            url: bk_installation/content/enabling_kerberos.html

  - title: Administration
    name: admin
    books:
      - title: Administration
        url: bk_administration/index.html
        pdf: bk_administration/bk_administration.pdf
        contents:
          - chapter:  HCP Information Roadmap
            url: bk_administration/content/managing_service_high_availability.html
          - chapter: Introduction to Hortonworks CyberSecurity Suite
            url: bk_administration/content/overview.html
          - chapter: Configuring and Customizing
            url: bk_administration/content/setup_config.html
          - chapter: Monitor and Management
            url: bk_administration/content/management.html
          - chapter: Concepts
            url: bk_administration/content/concepts.html
      - title: Tuning
        url: bk_tuning/index.html
        pdf: bk_tuning/bk_tuning.pdf
        contents:
          - chapter: Overview
            url: bk_tuning/content/overview_tuning.html
          - chapter: General Tuning Suggestions
            url: bk_tuning/content/general_suggestions.html
          - chapter: Component Tuning Levers
            url: bk_tuning/content/component-tuning-levers.html
          - chapter: Use Case Specific Tuning Suggestions
            url: bk_tuning/content/component_tuning_levers.html
          - chapter: References
            url: bk_tuning/content/references.html

      - title: User Guide
        url: bk_user-guide/index.html
        pdf: bk_user-guide/bk_user-guide.pdf
        contents:
          - chapter: Overview
            url: bk_user-guide/content/intro.html
          - chapter: Introduction to Metron Dashboard
            url: bk_user-guide/content/intro_metron_dashboard.html
          - chapter: Customizing Your Metron Dashboard
            url: bk_user-guide/content/set_up_ui.html
          - chapter: Sharing the Metron Dashboard
            url: bk_user-guide/content/sharing_metron_dashboard_alerts.html
          - chapter: Triaging Alerts
            url: bk_user-guide/content/triaging_alerts.html
          - chapter: PCAP
            url: bk_user-guide/content/pcap.html

      - title: Apache Zeppelin Component Guide
        url: bk_zeppelin-component-guide/index.html
        pdf: bk_zeppelin-component-guide/bk_zeppelin-component-guide.pdf
        contents:
          - chapter: Overview
            url: bk_zeppelin-component-guide/content/zeppelin_overview.html
          - chapter: Setting up Zeppelin to Run with HCP
            url: bk_zeppelin-component-guide/content/setting_up_zeppelin_metron.html
          - chapter: Working with Runbooks
            url: bk_zeppelin-component-guide/content/zeppelin_runbooks.html

  - title: Data Science
    name: data_science
    books:
      - title: Analytics
        url: bk_analytics/index.html
        pdf: bk_analytics/bk_analytics.pdf
        contents:
          - chapter: Overview
            url: bk_analytics/content/overview.html
          - chapter: Creating Profiles
            url: bk_analytics/content/selecting_profiles.html
          - chapter: Creating Models
            url: bk_analytics/content/models.html
          - chapter: Analyzing Enriched Data Using Apache Zeppelin
            url: bk_analytics/content/analyze_data.html
          - chapter: Creating Runbooks Using Apache Zeppelin
            url: bk_analytics/content/create_runbooks.html
          - chapter: Analyzing Data Using Statistical and Mathematical Functions
            url: bk_analytics/content/analyze_data_statistics.html

---

This is the content below YAML.
