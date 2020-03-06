---
layout: hwx_foyer
breadcrumb-title: HDP
breadcrumb-title-uri: /HDPDocuments/HDP3/HDF-3.1.5/index.html
title: Security
publications:
  - title: Configuring Proxy with Apache Knox
    url: configuring-proxy-knox/index.html
    description: >-
      Set up the Apache Knox Gateway to proxy components. This includes
      configuring the Knox Gateway, auditing Gateway activity,
      configuring Gateway security, and configuring topology files
      (dynamically-generated or manually).
  - title: Configuring Authentication with Kerberos
    url: authentication-with-kerberos/index.html
    description: >-
      Set up authentication with Kerberos to identify users and have
      that identity propagated throughout your cluster. This includes
      setting up SPNEGO, enabling Kerberos using Ambari, and configuring
      components for Kerberos.
  - title: Configuring Ambari Authentication with LDAP/AD
    url: ambari-authentication-ldap-ad/index.html
    description: >-
      Configure LDAP or Active Directory (AD) external authentication
      for Ambari. You must set up LDAP user authentication, configure to
      use an LDAP/AD server, and synchronize LDAP users and groups.
  - title: Configuring Ranger Authentication with UNIX, LDAP, or AD
    url: configuring-ranger-authe-with-unix-ldap-ad/index.html
    description: >-
      Configure the authentication method that determines who is allowed
      to login to the Ranger web interface. The options are local Unix,
      AD, or LDAP.
  - title: Configuring Knox SSO
    url: configuring-knox-sso/index.html
    description: >-
      Configure all or some services to use Knox SSO (Single Sign-on) to
      authenticate users. With this configuration, unauthenticated users
      who try to access a service (E.G., Ambari, Atlas, etc), are
      redirected to the Knox SSO login page for authentication.
  - title: Providing Authorization with Ranger
    url: authorization-ranger/index.html
    description: >-
      Configuring Apache Ranger to provide authorization to your cluster
      users. Authorization defines user access rights to resources and
      the actions they can take. You can add resource services (e.g.,
      HDFS, Hive, HBase, etc) or tag services (Atlas) and add access
      policies to them.
  - title: Managing Auditing
    url: managing-auditing/index.html
    description: >-
      "Configuring Apache Ranger and Apache Solr to collect audits:
      access history and reporting data."
  - title: Configuring Wire Encryption
    url: configuring-wire-encryption/index.html
    description: >-
      Configure SSL/TLS to protect data as it moves into, through, and
      out of a Hadoop cluster over RPC, HTTP, Data Transfer Protocol
      (DTP), and JDBC.
  - title: Configuring Advanced Security Options for Ambari
    url: configuring-advanced-security-options-for-ambari/index.html
    description: >-
      Several security options for an Ambari-monitored-and-managed
      Hadoop cluster.
  - title: Configuring HDFS Encryption
    url: configuring-hdfs-encryption/index.html
    description: >-
      Implement end-to-end encryption of data read from and written to
      HDFS. End-to-end encryption means that data is encrypted and
      decrypted only by the client. This includes configuring the Ranger
      KMS, HDFS encryption, and running datanodes as non-root.
  - title: Securing Credentials
    url: securing-credentials/index.html
    description: >-
      Encrypt database and LDAP passwords, change the master key, and
      configure Ambari for non-root.
---

How to set up security with Apache Ranger and Apache Knox. This includes
authorization, authentication, proxy, SSO, auditing, wire encryption,
HDFS encryption, advanced options for Ambari, and securing credentials.
