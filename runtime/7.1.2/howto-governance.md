---
layout: foyer-grouped
breadcrumb-title: Cloudera Runtime How To
title: Governance

# How-to publications related to
# * Atlas

publications:
- column:

  - title: Searching with Metadata
    url: atlas-searching-with-metadata/index.html
    description: >-
      Use the metadata Atlas collects and metadata you add to
      effectively find entities.

  - title: Exploring using Lineage
    url: atlas-exploring-using-lineage/index.html
    description: >-
      Lineage offers insight into where data came from and how to
      determine the impact of changes to data assets.

  - title: Working with Classifications and Labels
    url: atlas-working-with-classifications/index.html
    description: >-
      How to use Apache Atlas to search for, annotate, classify, and
      manage data.

  - title: Leveraging Business Metadata
    url: atlas-leveraging-business-metadata/index.html
    description: >-
      Business Metadata allows you to extend the model that represent a
      given asset type in Atlas. Sets of business metadata can be
      authorized independently through Ranger so you can manage who has
      the ability to update which business metadata attributes.

  - title: Managing Business Terms with Atlas Glossaries
    url: atlas-managing-business-terms-with-glossaries/index.html
    description: >-
      Collecting your organization's terms in Atlas helps you build a
      search index to easily find the data assets you are looking for.

- column:

  - title: Configuring and Monitoring Atlas in Cloudera Manager
    url: atlas-configuring/index.html
    description: >-
      Configure Atlas' extractors, monitor status, and access logs
      using Cloudera Manager.

  - title: Securing Atlas
    url: atlas-securing/index.html
    description: >-
      Configure Atlas' authentication and authorization through Cloudera
      Manager and using access policies in Apache Ranger. With CDP Cloud,
      authentication is configured for you using Free IPA; you'll still want to
      review and customize Atlas policies in Ranger to meet your organization's
      requirements.

  - title: Migrating Data from Cloudera Navigator to Atlas
    url: atlas-migrating-from-navigator/index.html
    description: >-
      When upgrading a cluster from CDH to CDP, you can choose to move your
      Navigator Data Management metadata into Atlas.

---

Apache Atlas provides data governance capabilities for Hadoop. Apache
Atlas serves as a common metadata store that is designed to exchange
metadata both within and outside of the Hadoop stack. Close integration
of Atlas with Apache Ranger enables you to define, administer, and
manage security and compliance policies consistently across all
components of the Hadoop stack. Atlas provides metadata and lineage to
Data Steward Studio to support curating data across enterprise data.
