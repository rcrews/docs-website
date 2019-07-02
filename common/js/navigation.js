$(document).ready(function() {
    function replaceNavigationTree(navigationJson) {
        "use strict";

        function addLevelItem(levelContainer, levelItem) {
            let li = document.createElement("li");
            li.setAttribute("tabindex", "2");
            if (levelItem.id) {
                li.id = levelItem.id;
            }
            if (levelItem.href &&
                window.location.pathname.indexOf(levelItem.href) !== -1) {
                li.id = "webhelp-currentid";
            }
            if (!levelItem.text) {
                let missingTextNotice = "Missing topic title";
                let tNode = document.createTextNode(missingTextNotice);
                levelContainer.appendChild(li.appendChild(tNode));
                return;
            }
            let span = document.createElement("span");
            span.className = "file";
            if (levelItem.href) {
                let anchor = document.createElement("a");
                anchor.appendChild(document.createTextNode(levelItem.text));
                anchor.href = levelItem.href;
                span.appendChild(anchor);
            } else {
                span.appendChild(document.createTextNode(levelItem.text));
            }
            li.appendChild(span);
            levelContainer.appendChild(li);
            if (levelItem.sub) {
                let ul = document.createElement("ul");
                let container = li.appendChild(ul);
                if (typeof levelItem.sub === "string") {
                    fetch(`../../${levelItem.sub}`)
                        .then((res) => res.json())
                        .then((data) => makeLevel(container, data))
                        .catch((err) => makeLevel(container,
                            [{"text":`${err} (../../${levelItem.sub})`}]));
                } else {
                    makeLevel(container, levelItem.sub);
                }
            }
        }

        function makeLevel(parent, obj) {
            obj.forEach(function (item) {
                addLevelItem(parent, item);
            });
        }

        let tree = document.createElement("ul");
        tree.id = "tree";
        tree.className = "filetree";
        makeLevel(tree, navigationJson);

        let treeParent = document.getElementById("tree").parentNode;
        treeParent.replaceChild(tree, document.getElementById("tree"));
    }

    fetch("../../navigation.json")
        .then((res) => res.json())
        .then((data) => {
            replaceNavigationTree(data);
            $("#tree").treeview({
                collapsed: true,
                animated: "medium",
                control: "#sidetreecontrol",
                persist: "cookie"
            });
            syncToc();
        })
        .catch((err) => console.log(err));
});
