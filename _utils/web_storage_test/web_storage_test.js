const vis = ["Ambari", "HDP", "HDF", "SmartSense", "HCP",
    "Cloudbreak", "DPC", "DLM", "DSS", "HDCloud4AWS"];

// href
// id
// pdf
// sub
// text (required)

const releases = [
  {
    "text": "Ambari",
    "sub": [
      {
        "text": "2.6.0.0",
        "sub": [
          {
            "text": "Release Notes",
            "id": "releasenotes",
            "sub": [
              {
                "text": "Release Notes",
                "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-release-notes/content/ch_relnotes-ambari-2.6.0.0.html",
                "pdf": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-release-notes/bk_ambari-release-notes.pdf",
                "sub": [
                  {
                    "text": "Release Notes Ambari - 2.6",
                    "href": "content/ch_relnotes-ambari-2.6.0.0.html",
                    "sub": [
                      {
                        "text": "New Features",
                        "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-release-notes/content/ambari_relnotes-2.6.0.0-new-features.html"
                      },
                      {
                        "text": "Behavioral Changes",
                        "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-release-notes/content/ambari_relnotes-2.6.0.0-behavioral-changes.html"
                      },
                      {
                        "text": "Patch Information",
                        "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-release-notes/content/ambari_relnotes-2.6.0.0-patch-information.html"
                      },
                      {
                        "text": "Known Issues",
                        "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-release-notes/content/ambari_relnotes-2.6.0.0-known-issues.html"
                      },
                      {
                        "text": "Fixed Issues",
                        "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-release-notes/content/ambari_relnotes-2.6.0.0-fixed-issues.html"
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Support Matrices",
                "href": "/HDPDocuments/HDP2/HDP-2.6.3/bk_support-matrices/content/ch_matrices-ambari.html",
                "pdf": "/HDPDocuments/HDP2/HDP-2.6.3/bk_support-matrices/bk_support-matrices.pdf",
                "sub": "/HDPDocuments/HDP2/HDP-2.6.3/bk_support-matrices/topics.json"
              }
            ]
          },
          {
            "text": "Install & Upgrade",
            "id": "install",
            "sub": [
              {
                "text": "Apache Ambari Installation",
                "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-installation/index.html",
                "pdf": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-installation/bk_ambari-installation.pdf",
                "sub": [
                  {
                    "text": "Getting Ready",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-installation/content/ch_Getting_Ready.html"
                  },
                  {
                    "text": "Using a Local Repository",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-installation/content/ch_using-local-repos.html"
                  },
                  {
                    "text": "Obtaining Public Repositories",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-installation/content/ch_obtaining-public-repos.html"
                  },
                  {
                    "text": "Installing Ambari",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-installation/content/ch_Installing_Ambari.html"
                  },
                  {
                    "text": "Working with Management Packs",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-installation/content/ch_working-with-mpacks.html"
                  },
                  {
                    "text": "Installing, Configuring, and Deploying a Cluster",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-installation/content/ch_Deploy_and_Configure_a_HDP_Cluster.html"
                  }
                ]
              },
              {
                "text": "Apache Ambari Upgrade",
                "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-upgrade/index.html",
                "pdf": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-upgrade/bk_ambari-upgrade.pdf",
                "sub": [
                  {
                    "text": "Upgrading Ambari and HDP",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-upgrade/content/ambari_upgrade_guide.html"
                  },
                  {
                    "text": "Getting Ready to Upgrade Ambari and HDP",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-upgrade/content/preparing_to_upgrade_ambari_and_hdp.html"
                  },
                  {
                    "text": "Upgrading the Cluster's Underlying OS",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-upgrade/content/upgrading_cluster_os.html"
                  },
                  {
                    "text": "Upgrading Ambari",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-upgrade/content/upgrading_ambari.html"
                  },
                  {
                    "text": "Upgrading HDP",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-upgrade/content/upgrading_hdp_stack.html"
                  }
                ]
              },
              {
                "text": "Apache Ambari Installation for IBM Power Systems",
                "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-installation-ppc/index.html",
                "pdf": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-installation-ppc/bk_ambari-installation-ppc.pdf",
                "sub": [
                  {
                    "text": "Getting Ready",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-installation-ppc/content/ch_Getting_Ready.html"
                  },
                  {
                    "text": "Installing Ambari",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-installation-ppc/content/ch_Installing_Ambari.html"
                  },
                  {
                    "text": "Installing, Configuring, and Deploying a Cluster",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-installation-ppc/content/ch_Deploy_and_Configure_a_HDP_Cluster.html"
                  }
                ]
              },
              {
                "text": "Apache Ambari Upgrade for IBM Power Systems",
                "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-upgrade-ppc/index.html",
                "pdf": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-upgrade-ppc/bk_ambari-upgrade-ppc.pdf",
                "sub": [
                  {
                    "text": "Upgrading Ambari and HDP for IBM Power Systems",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-upgrade-ppc/content/ambari_upgrade_guide-ppc.html"
                  },
                  {
                    "text": "Getting Ready to Upgrade Ambari and HDP",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-upgrade-ppc/content/preparing_to_upgrade_ambari_and_hdp-ppc.html"
                  },
                  {
                    "text": "Upgrading Ambari",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-upgrade-ppc/content/upgrading_ambari-ppc.html"
                  },
                  {
                    "text": "Upgrading HDP",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-upgrade-ppc/content/upgrading_hdp_stack-ppc.html"
                  }
                ]
              }
            ]
          },
          {
            "text": "Administration",
            "id": "admin",
            "sub": [
              {
                "text": "Apache Ambari Administration",
                "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/index.html",
                "pdf": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/bk_ambari-administration.pdf",
                "sub": [
                  {
                    "text": "Ambari Administration Overview",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ambari_admin_overview.html"
                  },
                  {
                    "text": "Administering Ambari",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_create_and_manage_a_cluster_and_cluster_roles.html"
                  },
                  {
                    "text": "Managing Users and Groups",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/managing_users_and_groups.html"
                  },
                  {
                    "text": "Installing Ambari Agents Manually",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_amb_ref_installing_ambari_agents_manually.html"
                  },
                  {
                    "text": "Customizing HDP Services",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_amb_ref_customizing_hdp_services.html"
                  },
                  {
                    "text": "Using Custom and Private Hostnames",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_amb_ref_using_custom_host_names.html"
                  },
                  {
                    "text": "Changing Host Names",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_changing_host_names.html"
                  },
                  {
                    "text": "Moving the Ambari Server",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_amb_ref_moving_the_ambari_server.html"
                  },
                  {
                    "text": "Moving the ZooKeeper Server",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_amb_ref_moving_the_zookeeper_server.html"
                  },
                  {
                    "text": "Configuring LZO Compression",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_amb_ref_configuring_lzo_compression.html"
                  },
                  {
                    "text": "Using Non-Default Databases",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_amb_ref_using_non_default_databases.html"
                  },
                  {
                    "text": "Setting up Ambari to use an Internet Proxy Server",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_setting_up_an_internet_proxy_server_for_ambari.html"
                  },
                  {
                    "text": "Configuring Network Port Numbers",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_configuring_network_port_numbers.html"
                  },
                  {
                    "text": "Change the JDK Version",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_changing_the_jdk_version_on_an_existing_cluster.html"
                  },
                  {
                    "text": "Using Ambari Blueprints",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_using_ambari_blueprints.html"
                  },
                  {
                    "text": "Tuning Ambari Performance",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_tuning_ambari_performance.html"
                  },
                  {
                    "text": "Customizing Ambari Log + PID Directories",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_amb_ref_customizing_ambari_log_pid_dirs.html"
                  },
                  {
                    "text": "Configuring Include File Management for HDFS and YARN",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-administration/content/ch_config_include_file_management.html"
                  }
                ]
              },
              {
                "text": "Apache Ambari Operations",
                "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-operations/index.html",
                "pdf": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-operations/bk_ambari-operations.pdf",
                "sub": [
                  {
                    "text": "Ambari Operations: Overview",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-operations/content/ch_Overview_hdp-ambari-user-guide.html"
                  },
                  {
                    "text": "Understanding the Cluster Dashboard",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-operations/content/ch_viewing_the_ambari_dashboards.html"
                  },
                  {
                    "text": "Managing Hosts",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-operations/content/ch_managing_hosts.html"
                  },
                  {
                    "text": "Managing Services",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-operations/content/ch_managing_services.html"
                  },
                  {
                    "text": "Managing Service High Availability",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-operations/content/ch_managing_service_high_availability.html"
                  },
                  {
                    "text": "Managing Configurations",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-operations/content/ch_managing_configurations.html"
                  },
                  {
                    "text": "Administering the Cluster",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-operations/content/ch_administering_the_cluster.html"
                  },
                  {
                    "text": "Managing Alerts and Notifications",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-operations/content/ch_monitoring_and_alerts.html"
                  },
                  {
                    "text": "Using Ambari Core Services",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-operations/content/ch_using_ambari_core_services.html"
                  }
                ]
              },
              {
                "text": "Apache Ambari Troubleshooting",
                "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-troubleshooting/index.html",
                "pdf": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-troubleshooting/bk_ambari-troubleshooting.pdf",
                "sub": [
                  {
                    "text": "Troubleshooting Ambari Deployments",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-troubleshooting/content/ch_ambari_troubleshooting.html"
                  }
                ]
              },
              {
                "text": "Apache Ambari Security",
                "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-security/index.html",
                "pdf": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-security/bk_ambari-security.pdf",
                "sub": [
                  {
                    "text": "Ambari Security Guide",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-security/content/ch_amb_sec_guide.html"
                  },
                  {
                    "text": "Configuring Ambari and Hadoop for Kerberos",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-security/content/ch_configuring_amb_hdp_for_kerberos.html"
                  },
                  {
                    "text": "Advanced Security Options for Ambari",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-security/content/ch_advanced_security_options_for_ambari.html"
                  },
                  {
                    "text": "Enabling SPNEGO Authentication for Hadoop",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-security/content/ch_enable_spnego_auth_for_hadoop.html"
                  }
                ]
              }
            ]
          },
          {
            "text": "Views",
            "id": "views",
            "sub": [
              {
                "text": "Apache Ambari Views",
                "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-views/index.html",
                "pdf": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-views/bk_ambari-views.pdf",
                "sub": [
                  {
                    "text": "Understanding Ambari Views",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-views/content/ch_understanding_ambari_views.html"
                  },
                  {
                    "text": "Administering Ambari Views",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-views/content/ch_administering_ambari_views.html"
                  },
                  {
                    "text": "Using YARN Queue Manager View",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-views/content/ch_using_yarn_queue_manager_view.html"
                  },
                  {
                    "text": "Using Files View",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-views/content/ch_using_files_view.html"
                  },
                  {
                    "text": "Using Falcon View",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-views/content/ch_using_falcon_view.html"
                  },
                  {
                    "text": "Using Hive View 2.0",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-views/content/ch_using_hive_view.html"
                  },
                  {
                    "text": "Using Pig View",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-views/content/ch_using_pig_view.html"
                  },
                  {
                    "text": "Using Slider View",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-views/content/ch_using_slider_view.html"
                  },
                  {
                    "text": "Using SmartSense View",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-views/content/ch_using_smartsense_view.html"
                  },
                  {
                    "text": "Using Storm View",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-views/content/ch_using_storm_view.html"
                  },
                  {
                    "text": "Using Tez View",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-views/content/ch_using_tez_view.html"
                  },
                  {
                    "text": "Using Workflow Manager View",
                    "href": "/HDPDocuments/Ambari-2.6.0.0/bk_ambari-views/content/ch_workflow_designer_view.html"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

/**
 * Returns an nested structure of ordered lists
 */
function makeTree(list) {
    let ol = document.createElement("ol");
    list.forEach( i => {
        if (!i.text) return;
        let li = document.createElement("li");
        if (i.id) li.id = i.id;
        if (i.href) {
            let a = document.createElement("a");
            a.href = i.href;
            a.appendChild(document.createTextNode(i.text));
            li.appendChild(a);
        } else {
            li.appendChild(document.createTextNode(i.text));
        }
        if (i.sub) {
            if (i.sub.constructor.name === "Array") {
                li.appendChild(makeTree(i.sub));
            }
        }
        ol.appendChild(li);
    });
    return ol;
}

/**
 * Returns an nested structure of details elements
 */
function makeTree2(list) {

    function makeTree2Helper(item, outerName, innerName) {
        let outer = document.createElement(outerName);
        let inner = document.createElement(innerName);
        if (item.id) outer.id = item.id;
        if (item.href) {
            let a = document.createElement("a");
            a.href = item.href;
            a.appendChild(document.createTextNode(item.text));
            inner.appendChild(a);
        } else {
            inner.appendChild(document.createTextNode(item.text));
        }
        outer.appendChild(inner);
        return outer;
    }

    let div = document.createElement("div");
    div.className = "details";
    list.forEach( i => {
        if (!i.text) return;
        if (i.sub) {
            if (i.sub.constructor.name === "Array") {
                let details = makeTree2Helper(i, "details", "summary");
                details.appendChild(makeTree2(i.sub));
                div.appendChild(details);
            }
        } else {
            div.appendChild(makeTree2Helper(i, "p", "span"));
        }
    });
    return div;
}

/**
 * Returns the Array object that represents a particular release
 */
function getRelease(versionedItemText, versionText, structure) {
    let versionObject = null;
    structure.forEach( versionedItem => {
        if (versionedItem.text === versionedItemText && versionedItem.sub) {
            versionedItem.sub.forEach( version => {
                if (version.text === versionText && version.sub) {
                    versionObject = version.sub;
                }
            });
        }
    });
    return versionObject;
}

// window.alert(releases[0].sub[0].sub.constructor.name);
// let ambari_2_6_0_0 = releases[0].sub[0].sub;

function test() {
    let form = document.createElement("form");
    form.id = "nav2";
    let details = document.createElement("details");
    let summary = document.createElement("summary");
    summary.appendChild(document.createTextNode("Ambari"));
    details.appendChild(summary);
//    <select name="Ambari" id="ambari_version_picker">
//        <option value="2.6.0.0">2.6.0.0</option>
    details.appendChild(makeTree2(getRelease("Ambari", "2.6.0.0", releases)));
    form.appendChild(details)
    document.body.appendChild(form);
}
test();

// test = [releases[0].sub[0].sub[0].sub[0].sub, releases[0].sub[0].sub[0].sub[1].sub];
// 
// test.forEach( item => {
//     if ( item.constructor.name === "String") {
//         window.alert("string!");
//     } else {
//         window.alert(`${item.constructor.name}!`);
//     }
// });

//localStorage.clear();

/**
 * Restore select list items to the stored values
 */
vis.forEach(vi => {
    if (localStorage.getItem(vi)) {
        document.getElementById(`${vi.toLowerCase()}_version_picker`)
            .querySelector(`option[value='${localStorage.getItem(vi)}']`)
                .selected = true;
    }
});

/**
 * Stores changed values in local storage.
 */
Array.from(document.getElementById("pubmap")
    .getElementsByTagName("select")).forEach(select => {
        // Using function so "this" refers to the select element
        select.onchange = function() {
            localStorage.setItem(this.name, this.value);
        };
});
