// Testing this
var NEWUX = (function($) {
    'use strict';

    var WhoAmI = {
        product_name : "", // We get this from the from the URL, or the meta-tag
        version : "", // We get this from the URL, or the meta tag.
        latest_version : {}, // We need to look this up from the versions.yaml.
        versions : [], // Populate this from versions.yaml
        products : [], // The full versions.yaml jsonified.

        bootstrap : function() {
            // Load in the versions.json
            let navfile = "/versions.json";
            fetch(navfile)
                .then((resp) => resp.json()) // Transform the data into json
                .then((data) => {
                    WhoAmI.products = data; // Save the whole thingy in case we need it again.

                    // See if I can figure out what product loading page is in from the product link.
                    let my_product_url = "";

                    let $my_product = $('.bread-product a');
                    if($my_product.length > 0) {
                        my_product_url = new URL($my_product[0].href);
                        my_product_url = my_product_url.pathname;
                        WhoAmI.product_name = $my_product[0].text;
                    } else {
                        // Look for it in the path
                        my_product_url = location.pathname.split('/');
                        my_product_url = '/' + my_product_url[1] + '/' + my_product_url[2] + '/index.html';
                    }

                    // Walk the versions.yaml tree and get the related information for this product
                    let found = false;
                    let versions = [];

                    for(let i = 0; i < data.length; i++) {

                        // We only need to loop through the versions if we've not found it.
                        if(!found) {

                            versions = [];
                            if(typeof data[i].versions !== 'undefined') {
                                for(let j = 0; j < data[i].versions.length; j++) {
                                    // Store the versions for our lookup table.
                                    versions[j] = {
                                        title: data[i].versions[j].title,
                                        url: data[i].versions[j].url,
                                        minors: []
                                    };

                                    // This should now be the key versions... let's start matching
                                    if(!found && my_product_url === data[i].versions[j].url) {
                                        // We found it at the top level

                                        WhoAmI.version = {
                                            title: data[i].versions[j].title,
                                            url: data[i].versions[j].url
                                        };
                                        found = true;
                                    }

                                    // If it doesn't match, check the minors...
                                    if(typeof data[i].versions[j].minors !== 'undefined') {
                                        for(let k = 0; k < data[i].versions[j].minors.length; k++) {

                                            // Add the minors to our versions lookup table too.
                                            versions[j].minors[k] = {
                                                title: data[i].versions[j].minors[k].title,
                                                url: data[i].versions[j].minors[k].url
                                            };

                                            // also check the minors.
                                            if(!found && my_product_url === data[i].versions[j].url) {
                                                // We found it at the minor level
                                                WhoAmI.version = {
                                                    title: data[i].versions[j].minors[k].title,
                                                    url: data[i].versions[j].minors[k].url
                                                };
                                                found = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        // It might now be found... if so, set our thingy's
                        if(found && WhoAmI.product_name === "") {
                            WhoAmI.product_name = data[i].name;
                            WhoAmI.versions = versions;
                            if(typeof data[i].latest_version !== 'undefined') {
                                WhoAmI.latest_version = {
                                    name: data[i].latest_version,
                                    url: data[i].latest_url
                                };
                            }
                            break; // And break out of this loop
                        } else if($('.bread-version').length) {
                            // Might be able to get it from the HTML...
                            WhoAmI.version = {
                                title: $('.bread-version').length ? $('.bread-version').text() : "",
                                url: $('.bread-product a').length ? $('.bread-product a')[0].href : ""
                            }
                        }
                    }

                    this.setupVersions();
                });
        },
        setupVersions : function() {

            $('.bread-product').html(`<a href='${WhoAmI.version.url}'>${WhoAmI.product_name}</a>`);

            // Change 'Cloud' to the Cloud Symbol
            if (WhoAmI.version.title.trim().toLowerCase() === 'cloud') {
                $('.bread-version').html('<i class="fa fa-cloud"></i>');
            } else {
                $('.bread-version').html(WhoAmI.version.title);
            }

            // Create a pulldown list for all the versions.
            let output = "";
            if(WhoAmI.versions.length) {
                $('.bread-version').append(' <i class="fa fa-angle-down selector"></i><ul class="version-select"></ul>');
                WhoAmI.versions.forEach(function(el) {
                    if(el.title !== WhoAmI.version.title) {
                        output += `<li><a href='${el.url}'>${el.title}</a></li>`;
                        if(typeof el.minors === 'object' ) {
                            el.minors.forEach(function(em) {
                                output += `<li class='minor'><a href='${em.url}'>${em.title}</a></li>`;
                            })
                        }
                    }
                });
            }

            $('.version-select').hide().html(output);

            // Add Handlers
            $('.bread-version .selector').click(function() {
                let $this = $(this);
                $this.hasClass('fa-angle-down') ? $this.removeClass('fa-angle-down').addClass('fa-angle-up') : $this.removeClass('fa-angle-up').addClass('fa-angle-down');
                $('.version-select').toggle();
            })

        },
        init : function () {
            if(!$('.bread-product').length) $('.chead .breadcrumbs').append('<span class="bread-product"></span>');
            if(!$('.bread-version').length) $('.chead .breadcrumbs').append('<span class="bread-version"></span>');

            this.bootstrap();
        }
    };

    var Pubnav = {

        nav_tree: [], // Will hold the full, cleaned, nav JSON file
        product: '', // Holds a unique name for the product we're in, which is used as a key for saving the menu.
        pagestate: { // Will hold the current state of the page.
            current: {},
            prev: "",
            next: "",
            depth: 0, // How many layers deep we are.
            breadpath: [],// Array of Parents... in descending order.
            children: [], // Flattened Array of Subs }
            pdfurl: ""
        },
        navstate: [], // Holds the list of open nav items in the menu... used to maintain state between loads.
        init: function() {
            this.setupNav();
        },
        bindEvents: function() {

            // Catch Link Clicks from Pubmenu and Feed through System
            $('.ctoc a').on('click', this.handleNewPageRequest);
            $('.cpage').on('click', 'a', this.handleNewPageRequest);

            // Nav Menu Expand/Contract
            $('.ctoc li.xp').on('click', this.handleNavOpen);
            $('.ctoc .expand').on('click', this.handleNavContract);

            // Back Button Clicks.
            $(window).bind("popstate", this.handleNewPageRequest);
        },
        handleNavOpen: function(evt) {
            evt.stopPropagation();
            let $this = $(this);

            // Double check if this is not already open!
            if(!($this).hasClass('open')) {
                let id = $(this).data('navid');
                // Update the state
                Pubnav.expandNavElem(id);

                // Update state
                Pubnav.navstate.push(id);
                localStorage.setItem(Pubnav.product + '_navstate', Pubnav.navstate);
            }
        },
        handleNavContract: function(evt) {
            if(!($(this).text() === '\uf107')) {
                evt.stopPropagation();
                let id = $(this).parent('li').data('navid');
                Pubnav.contractNavElem(id);

            }
        },
        handleNewPageRequest: function(e) {
            // Can be called from link click or back button, or a failed loadContent() - If passed from an link, we'll look up, otherwise get from the URL.
            let url;
            // Check it's a valid click.....
            if(e.type === 'click') {
                let obj = new URL(this.href);
                if(window.location.hostname !== obj.hostname) {
                    return true;
                }
                // check we're linking in the same site.
                url = obj.pathname;
            } else {
                // looking for the back button?
                url = location.pathname;
            }
            if(url.indexOf('.pdf') === -1) {
                // We still want to allow the links to the PDF to work.
                // TODO!!! - We should also check if they are in the same product root too.
                if(Pubnav.requestNewPage(url) && e.type === 'click') {
                    e.preventDefault();
                }
            }
       },
        setupNav: function() {
            // Inject HTML Elements necessary for paging and the pubmenu
            if(!$('.ctoc').length) $('.pubmenu').append("<div class='ctoc'></div>");

            if(!$('.short-prev').length)  $('.cpage').append('<div class="short-prev"><a href="">«</a></div>');
            if(!$('.short-next').length)  $('.cpage').append('<div class="short-next"><a href="">»</a></div>');
            // if(!$('up').length)  $('.cpage').append('<div class="up"></div>');
            if(!$('.prev').length)  $('.cpage').append('<div class="prev"><a href=""></a></div>');
            if(!$('.next').length)  $('.cpage').append('<div class="next"><a href=""></a></div>');

            // When we load up the JS for the page, we rely on the navigation.json file that is present in the product root.

            // Normally, we expect this to be in the third folder... so for example. /HDF3/hdf-3.0.4/navigation.json
            let url =  new URL(window.location.href);
            let url_chunks = url.pathname.split('/'); // This will include the first item as an empty item.
            url_chunks.length = 3; // This will dump any extra url stuff for nested files.
            let navfile = url_chunks.join('/') + "/navigation.json";

            // Let's also define the product code for saving the navstate and the product bar lookup.
            this.product = url_chunks[1].toLowerCase();
            this.navstate = localStorage.getItem(this.product + '_navstate') ? localStorage.getItem(this.product + '_navstate').split(',') : [];

            // Now, get the JSON, and then build out a shadow structure and insert it into the DOM.
            // TODO!!! - Handle errors?
            fetch(navfile)
                .then((resp) => resp.json()) // Transform the data into json
                .then((data) => {
                    // 1. Clean and build tree... add unique ids for all elements based on hrefs, check for duplicates.
                    this.nav_tree = this.cleanNavData(data);

                    // 2. Figure out what page I am, and update the page state

                    // Look for URL in nav.json
                    let item = this.getNestedItemBy('href', url.pathname, this.nav_tree);
                    let active_id = item.id;

                    // TODO! - We're looking for the page based on an id which we made up, but really we should just base it on the href which is always correct.
                    let figured_pagestate = this.mapPageState(this.nav_tree, active_id);

                    // 3. Now build out the tree in HTML
                    let html = this.createHtmlTree(this.nav_tree);
                    $('.ctoc').append(html);

                    // 4... Figure out the PDF... TODO!! - This is repeated in LoadContent() - Make it DRYer)
                    let $pdf = $('link[type="application/pdf"]');
                    if($pdf.length > 0) {
                        Pubnav.pagestate.current.pdfurl = (typeof $pdf[0].href !== 'undefined') ? $pdf[0].href : "";
                    } else {
                        Pubnav.pagestate.current.pdfurl = "";
                    }

                    // 5. Bind Event Handlers
                    this.bindEvents();

                    // 6. Update Page Links and Breadcrumbs
                    this.updatePageState();

                });
        },
        loadContent: function(url) {

            $( "#content" ).fadeTo(200, 0, function() {
                // $('.maincontent').append("<div id='content-spinner'><i class='fas fa-circle-notch fa-spin'></i></div>");
                // TODO... do a check to see that we're on the same domain.
                let self = $(this),
                    selector = "#content"; // This is the selector of the content we want to grab.

                jQuery.ajax( {
                    url: url,
                    type: "GET",
                    dataType: "html"
                }).done( function( responseText ) {

                    // Save response for use in complete callback
                    let response = arguments;

                    // $.parseHTML will exclude scripts to avoid IE 'Permission Denied' errors
                    let $responseHTML = jQuery( "<div>" ).append(jQuery.parseHTML( responseText ));
                    let elems = $responseHTML.find( selector ).children();

                    if(!elems.length && Pubnav.pagestate.children.length) {
                        // If there's no content returned..... sometimes happens for root pages.... get the first child page.
                        let new_url = Pubnav.pagestate.children[0].href;
                        Pubnav.requestNewPage(new_url);

                    }

                    // PDF Document
                    let $pdf = $responseHTML.find('link[type="application/pdf"]'); // TODO! - This seems a bit too common and prone to error.
                    if($pdf.length > 0) {
                        Pubnav.pagestate.current.pdfurl = (typeof $pdf[0].href !== 'undefined') ? $pdf[0].href : "";
                    } else {
                        Pubnav.pagestate.current.pdfurl = "";
                    }

                    self.html(elems);
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                    self.fadeTo(200,1);

                    // We need to call this after the page has been loaded... not in the request function.
                    Pubnav.updatePageState();

                    // $('#content-spinner').detach();

                }).fail(function( jqXHR, status, error) {
                    // If the request succeeds, this function gets "data", "status", "jqXHR"
                    // but they are ignored because response was set above.
                    // If it fails, this function gets "jqXHR", "status", "error"

                    if(status === "error") {
                        let msg = "Sorry but there was an error loading that page.";
                        $( "#content" ).html( msg + " " + status + " " + jqXHR.statusText );
                        $(this).fadeTo(200,1);
                    }
                });


            });

            // TODO! If script tags are included within the content, I think that they'll be removed. We might want to figure out how to execute them!
        },
        cleanNavData(data) {
            // Let's ensure a good ID for every item in the nav.
            // If the item doesn't have an ID, create it from the href.

            for(let i=0; i < data.length; i++) {
                if(typeof data[i].id === 'undefined') {
                    if (typeof data[i].href !== 'undefined') {
                        // Use the HREF to build the ID... this is the preferred method.
                        data[i].id = Utils.makeIdFromHref(data[i].href)
                    } else {
                        // Use the text to build the ID... this might occur for menu items that have no page.
                        data[i].id = Utils.slugify(data[i].text);
                    }
                }
                // Now the ID has been defined... if the item has kids, let's iterate through those.
                if (typeof data[i].sub === 'object') {
                    data[i].sub = this.cleanNavData(data[i].sub);
                }

            }

            return data;
        },
        createHtmlTree: function(tree, level) {
            if(typeof level === 'undefined') {
                level = 1;
            }
            let html = "<ul>";
            tree.forEach((item) => {
                let css = "";
                if(!('id' in item)) {
                    if('href' in item) {
                        item.id = Utils.makeIdFromHref(item.href);
                    } else {
                        item.id = Utils.slugify('item.text');
                    }
                }
                if('sub' in item) {
                    css += "xp ";
                }
                if('href' in item) {
                    html += `<li class='${css}' data-navid='${item.id}' data-level='${level}'><span class='item'><a href='${item.href}'>${item.text}</a></span>`;
                } else {
                    html += `<li class='${css}' data-navid='${item.id}' data-level='${level}'><span class='item'>${item.text}</span>`;
                }
                if('sub' in item && typeof item.sub === 'object') {
                    html += "<span class='expand'>&#xf107;</span>";  // NOTE, BE CAREFUL ABOUT CHANGING THE ICON. IT'S USED IN THE CONTROL STRUCTURE
                    html += this.createHtmlTree(item.sub, level + 1);
                }
                html += '</li>';
            });
            html += "</ul>";
            return html;
        },
        expandNavElem: function(id) {
            let $this = $('.ctoc').find(`li[data-navid='${id}']`);

            // Collapse other menu items at the same level as this one:
            let level = $this.data('level');
            if(level >= 1) {
                $('.ctoc').find(`li.open[data-level='${level}']`).each(function() {
                    let id = $(this).data('navid');
                    console.log('... and found this open item: ' + id);
                    Pubnav.contractNavElem(id);
                });
            }

            // Now expand this one..
            $this.children('.expand').text('\uf106');
            $this.addClass('open');
            setTimeout(function() { $this.addClass('sesame'); }, 5); // This is a little hack to help the slide-down effect on the menu. The transitions don't actually work if they come right after display:block being made.

            $this.parents('.ctoc li:not(.open)').each(function() {
                let $parent = $(this);
                $parent.children('.expand').text('\uf106');
                $parent.addClass('open');
                setTimeout(function() { $parent.addClass('sesame'); }, 5); // This is a little hack to help the slide-down effect on the menu. The transitions don't actually work if they come right after display:block being made.

            })

        },
        contractNavElem: function(id) {
            console.log('Contracting:' + id);

            // Contract the elem....
            // $(this).text('\uf107').siblings('ul').parent('li').removeClass('open sesame');
            let $elem = $('.ctoc').find(`li[data-navid=${id}`);
            $elem.removeClass('sesame').children('.expand').text('\uf107');

            // Again the hack to hide the item after compression.... I think we could do this with keyframes instead. https://jsfiddle.net/jalbertbowdenii/mHRb8/
            setTimeout(function() { $elem.removeClass('open')}, 320);

            // Update State
            let index = Pubnav.navstate.indexOf(id);
            if (index > -1) {
                Pubnav.navstate.splice(index, 1);
            }
            localStorage.setItem(Pubnav.product + '_navstate', Pubnav.navstate);
        },
        requestNewPage: function(url) {
            // Confirm this is actually in the menu tree...
            let destination = this.getNestedItemBy('href', url, this.nav_tree);
            if(destination) {
                // If it's a page in the menu tree...
                this.loadContent(url);
                this.pagestate.breadpath.length = 0; // This should really be part of mapPageState, but I can't do it because I'm recursing on that function.
                this.mapPageState(this.nav_tree, destination.id);

                // Update history so the back button works.... We don't want this to fire if we're going back in time!
                if (!history.state || history.state.page != url) {
                    history.pushState({"page": url}, Pubnav.pagestate.current.text, url);
                }

                // TODO! Notify Google Analytics about the new page load.
                return true;

            } else {
                confirm('going for external click, as this page could not be found in nav.json.') // TODO!!! - REMOVE THIS
                return false;
            }
        },
        getNestedItemBy: function(key, value, arr) {
            for(let i=0; i < arr.length; i++) {
                if(key === 'id' && arr[i].id === value) {
                    return arr[i];
                } else if(key === 'href' && arr[i].href !== undefined && arr[i].href.indexOf(value) >= 0) {
                    return arr[i];
                } else if(typeof arr[i].sub !== "undefined") {
                    let item = this.getNestedItemBy(key, value, arr[i].sub);
                    if(item !== false) return item;
                }
            }
            return false; // Defaults to false if we couldn't find anything.
        },
        mapPageState: function(navarray, id) {
            // This searches for the id in the nav tree, and then sets up the back, forward etc.

            for(let i = 0; i < navarray.length; i++) {
                if(navarray[i].id === id) {
                    // We found it!
                    this.pagestate.current = navarray[i];

                    this.pagestate.prev = (i-1 >= 0) ? navarray[i-1] : ""; // TODO!!! - This should really be the parent if there is no sibling.
                    this.pagestate.next = (i+1 < navarray.length) ?  navarray[i+1] : ""; // TODO!!! - This should really be the first child if the element has children!

                    if(typeof navarray[i].sub === 'object') {
                        this.pagestate.children = Utils.flatten(navarray[i].sub); // Not currently being flattened.
                    }
                    this.pagestate.depth = 1;
                    return true;
                } else {
                    // Check if the item has kids....
                    if(typeof navarray[i].sub === 'object') {
                        if(this.mapPageState(navarray[i].sub, id)) { // If the kid was it!
                            this.pagestate.breadpath.unshift(navarray[i]);
                            if(this.pagestate.depth === 1) {
                                this.pagestate.parent = navarray[i];
                            }
                            this.pagestate.depth++;
                            return true;
                        }
                    }

                }
            }
            return false; // didn't find a matching id?


        },
        updatePageState: function() {
            // Update the page elems based on current situation!

            // Title
            document.title = this.pagestate.current.text;

            // Prev
            if(typeof this.pagestate.prev === 'object') {
                $('.cpage').addClass('hasprev');
                $('.cpage .prev a').attr('href', this.pagestate.prev.href).html('&laquo; ' + this.pagestate.prev.text);
                $('.cpage .short-prev a').attr('href', this.pagestate.prev.href);
            } else {
                $('.cpage').removeClass('hasprev');
            }

            // Next
            if(typeof this.pagestate.next === 'object') {
                $('.cpage').addClass('hasnext');
                $('.cpage .next a').attr('href', this.pagestate.next.href).html(this.pagestate.next.text + ' &raquo;');
                $('.cpage .short-next a').attr('href', this.pagestate.next.href);
            } else {
                $('.cpage').removeClass('hasnext');
            }

            // I've modified this so that the topic is the only breadcrumb at the top of the content page.
            if(this.pagestate.breadpath.length >= 2) {
                let output = `<a href="${this.pagestate.breadpath[1].href}">${this.pagestate.breadpath[1].text}</a>`;
                if(this.pagestate.current.pdfurl !== "") {
                    output += `<a href="${this.pagestate.current.pdfurl}" target="_blank" class="pdficon"><i class="fa fa-file-pdf"></i></a>`
                }
                $('.inner-breadcrumbs').html(output).fadeTo(200, 1);
            } else {
                $('.inner-breadcrumbs').fadeTo(200, 0);
            }

            // Ensure the navigation menu is expanded and highlighting this page.
            if(!Pubnav.navstate.includes(Pubnav.pagestate.current.id)) {
                Pubnav.navstate.push(Pubnav.pagestate.current.id);
            }

            if(Pubnav.navstate.length > 0) {
                for(let id of this.navstate) {
                    this.expandNavElem(id);
                }
            }
            /* Outer Breadcrumbs... putting the topic title up top.
            if(this.pagestate.breadpath.length >= 2) {
                let output = `<a href="${this.pagestate.breadpath[1].href}">${this.pagestate.breadpath[1].text}</a>`;
                $('.bread-category').html(output);
            }
            */

            /* Inner Breadcrumbs
            if(this.pagestate.breadpath.length >= 3) {
                let output = "";
                for(let i=2; i < this.pagestate.breadpath.length; i++ ) {
                    if(i >= 3) {
                        output += ' &rang; ';
                    }
                    output += `<a href="${this.pagestate.breadpath[i].href}">${this.pagestate.breadpath[i].text}</a>`;
                }
                $('.inner-breadcrumbs').html(output).fadeTo(200, 1);
            } else {
                $('.inner-breadcrumbs').fadeTo(200, 0);
            }
            */

            // Set the active item in the menu.
            $('.ctoc li').removeClass('active');
            $('.ctoc li').find(`[data-navid='${this.pagestate.current.id}']`).addClass('active');
        }
    };

    var ProductDrawer = {
        init: function () {
            if(!$('.product-drawer .products').length) $('.product-drawer').append('<ul class="products"></ul>');
            if(!$('.product-drawer .open-close').length) $('.product-drawer').append('<div class="open-close">»</div>');
        },
        bindEvents: function() {

        },
        renderMenu: function() {

        },
        slideOpen: function() {

        },
        slideClose: function() {

        }
    };

    var Search = {

        cpage: "", // This will hold the page info when detached.
        init: function() {
            // Inject Search Containers...
            let search_html = '<div class="search"><i class="search-close fas fa-times"></i><form class="searchform"><input type="text" placeholder="Search Documentation" class="searchterm"><i class="fas fa-search" class="submit"></i></form></div>' +
                '<div class="launch-search"><i class="fas fa-search"></i></div>' +
                '<div class="launch-pubnav"><i class="fas fa-bars"></i></div>';

            let overlay_html = '<div class="lucene-overlay">\n' +
                '    <div class="lucene-results">\n' +
                '        <div class="close-search"><a href="#" class="close-btn"><i class="fa fa-times-circle"></i></a></div>' +
                '        <h1>Search Results</h1>\n' +
                '        <div class="fail"></div>\n' +
                '        <div class="results"></div>\n' +
                '        <div class="waiting"><img src="/common/img/spinner.svg"></div>\n' +
                '        <div class="more-results"><a href="" data-nextcursormark="" data-searchterm="" class="more-link"><i class="fa fa-arrow-circle-o-down"></i>More</a></div>\n' +
                '    </div>\n' +
                '</div>';

            if(!$('.chead .search').length) $('.chead').append(search_html);
            if(!$('.cmain .lucene-overlay').length) $('.cmain').append(overlay_html);

            // Figure out what product I am... else
            this.query = null;
            this.bindEvents();
        },

        // Configs the search functionality...
        searchURL: function() {
            let sserver = ["nool", "yoop"];
            return "https://" + sserver[Math.floor(Math.random() * sserver.length)] +
                ".td.hortonworks.com:8983/solr/dhc/query";
            // return "/common/sample-data/handpicked.json"
            // return "/common/sample-data/solr1.json"
        },

        bindEvents: function() {
            $('.searchform').on('submit', this.launchSearch.bind(this));
            $('.searchform i.submit').on('click', function() {
                $(this).closest('.searchform').trigger('submit');
            });

            $('.lucene-overlay .close-btn').on( 'click', this.hideSearch.bind(this));
            $('.lucene-results .more-link').on('click', this.loadMoreResults.bind(this));
        },

        formatReleaseNumber: function(version, shorten) {
            // TODO!!! - How to handle cloud?
            // Bi-way formatting of release number.
            shorten = shorten ? true : false;
            var release = version.toString().split('.');
            if(release.length == 4 && shorten) {
                for(var i = 3; i = 0; i--) {
                    if(release[i] == "0") {
                        release.pop();
                    }
                }
            } else {
                for(var i = 0; i < 4; i++) {
                    if(!release[i]) {
                        release[i] = 0;
                    }
                }
            }
            version = release.join('.');
            return version;
        },

        filterSearchTerm(term) {
            term = term.replace(/^\s*(Who|What|Where|Why|How|When)\s+/i, '');
            return term;
        },

        /* Launch a new search from the main search field */
        launchSearch: function(evt) {
            evt.preventDefault();
            var current = evt ? evt.currentTarget : false;
            var search_term = this.filterSearchTerm($(current).find('.searchterm').val());

            // For better or worse, hide the content and show the search overlay.
            $('.cpage').hide();
            $('.lucene-overlay').show();

            this.fireQuery(search_term);
        },

        hideSearch: function() {
            $('.lucene-overlay').hide();
            $('.cpage').show()
        },


        loadMoreResults:function(evt) {
            evt.preventDefault();
            var current = evt ? evt.currentTarget : false;
            this.fireQuery($(current).data('searchTerm'), $(current).data('nextCursorMark'));
        },

        fireQuery: function(searchterm, nextCursorMark) {
            var that = this;
            var q  = searchterm == null ? filterSearchTerm($('#overlay-search .searchterm').val()) : searchterm,
                fq = "((product:\\\"Ambari\\\" AND release:2.7.3.0))",
                // For Example: fq = WhoAmI.product_name ? "(product:\"" + WhoAmI.product_name + "\" AND release:" + encodeURIComponent(that.formatReleaseNumber(WhoAmI.version.title)) + ")" : "",
                rows = 10,
                params = {},
                defaults = "&sort=score desc,id asc&facet=true&facet.field=product&facet.field=release&facet.field=booktitle&hl=true&hl.fl=text&fl=id,score,url,product,release,booktitle,title",
                search_url = this.searchURL();
            // solr_url = "//localhost:8983/solr/corehw/query?";

            // Build the Query from the searchterm and filters that are in the HTML.
            params = {
                'wt':'json',
                'q':q
            };

            if(fq) {
                fq = "(" + fq + ")";
                params.fq = fq;
            }

            if(nextCursorMark) {
                params.cursorMark = nextCursorMark;
            }

            this.query = $.ajax({
                type: 'GET',
                url: search_url,
                data: params,
                dataType: 'jsonp',
                jsonp: 'json.wrf',
                beforeSend : function() {
                    if(!nextCursorMark)
                        $('.lucene-results .results').hide();
                    $('.lucene-results .waiting').show();
                    $('.lucene-results .fail').hide();
                    if(Search.query != null) {
                        Search.query.abort();
                    }
                },
                success: function(response) {
                    var output_holder = [],
                        output = "",
                        result = "";

                    // ToDo : Group by book
                    if(response.response.docs.length) {
                        $.each(response.response.docs, function(index, item) {

                            // First add in the highlighting to the item list. Escape HTML,
                            item.text = response.highlighting[item.url].text.join("").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

                            // Add back in <b> tags which are there for highlighting
                            item.text = item.text.replace(/&lt;b&gt;/g, "<b>").replace(/&lt;\/b&gt;/g, "</b>");

                            result = "";
                            // result += ' <div class="product">' + item.product + ' ' + item.release +'</div>';
                            result += ' <div class="result">'
                            result += '     <div class="title"><a href="https://docs.hortonworks.com' + item.url + '"><span class="chapter">' + item.title + '</span></a></div>';
                            result += '     <div class="excerpt">' + item.text + '</div>';
                            result += '     <div class="url"><a href="https://docs.hortonworks.com' + item.url + '">' + item.url + '</a></div>';
                            result += ' </div>';

                            output_holder[item.booktitle] = output_holder[item.booktitle] || [];
                            output_holder[item.booktitle].push(result);
                        });

                        for(var book in output_holder) {
                            // TODO!!! - Sort by book is nice, but we need to integrate with DITA structure, and make sure the book is readable
                            if (output_holder.hasOwnProperty(book)) {
                                result = "";
                                result += '<div class="book-group">';
                                result += ' <div class="book">' + (book !== 'undefined' ? book : "")  + '</div>';
                                for(var i=0; i < output_holder[book].length; i++) {
                                    result += output_holder[book][i];
                                }
                                result += '</div>';
                                output += result;
                            }
                        }

                        $('.lucene-results .waiting').hide();
                        if('cursorMark' in response.responseHeader.params) {
                            $('.lucene-results .results').append(output);
                        } else {
                            $('.lucene-results .results').html(output).show();
                        }
                        $('.lucene-results .more-link').data('nextCursorMark',response.nextCursorMark).data('searchTerm',response.responseHeader.params.q);
                    } else {
                        $('.lucene-results .waiting').hide();
                        $('.lucene-results .results').hide();
                        $('.lucene-results .fail').show();
                        var err_msg = '<h2><i class="fa fa-frown-o"></i> Sorry, No results were returned</h2>';
                        err_msg += '<p>Check your search term, and ensure that you have the appropriate product filter selected';
                        $('.lucene-results .fail').html(err_msg);
                    }
                }
            })
                .done(function(data) {
                })
                .fail(function(jqXHR, textStatus) {

                    // alert( "Uh-oh, Search Request Failed" );
                    $('.lucene-results .waiting').hide();
                    $('.lucene-results .results').hide();
                    $('.lucene-results .fail').show();
                    var err_msg = '<h2><i class="fa fa-frown-o"></i> Uh-oh, the search request failed</h2>';
                    err_msg += '<p>' + textStatus + '</p>';

                    $('.lucene-results .fail').html(err_msg);
                })
                .always(function() {
                    // complete
                });

        }
    };

    // Example Toolbelt Functions
    var Utils = {
        stripAndCollapse: function(value) {
            // Strip and collapse whitespace according to HTML spec
            // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
            var tokens = value.match(/[^\x20\t\r\n\f]+/g) || [];
            return tokens.join( " " );
        },
        store: function (namespace, data) {
            if (arguments.length > 1) {
                return localStorage.setItem(namespace, JSON.stringify(data));
            } else {
                var store = localStorage.getItem(namespace);
                return (store && JSON.parse(store)) || [];
            }
        },
        slugify: function*(str) {
            str = str.replace(/^\s+|\s+$/g, ''); // trim
            str = str.toLowerCase();

            // remove accents, swap ñ for n, etc
            let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
            let to   = "aaaaeeeeiiiioooouuuunc------";
            for (let i=0, l=from.length ; i<l ; i++) {
                str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
            }

            str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                .replace(/\s+/g, '-') // collapse whitespace and replace by -
                .replace(/-+/g, '-'); // collapse dashes

            return str;
        },
        flatten: function(arr, subkey) {
            // TODO! Flatten a nested array with subs, into a consecutive array....
            //  we'll use this to make it easier to jump forwards and backwards.
            return arr;
        },
        makeIdFromHref:function(href) {
            // Clever way to parse incomplete URLs -  https://makandracards.com/makandra/29377-the-easiest-way-to-parse-urls-with-javascript

            let parser = document.createElement('a');
            parser.href = href; // set the URL you want to parse (resolving relative paths in the context of the current URL)

            // We want to turn ID into sam-overview-index
            let chunks = parser.pathname.split('/');

            let id = chunks[chunks.length - 1];
            id = id.substring(0, id.indexOf('.'));  // dump anything after a period... .html / .php etc.

            if(chunks.length > 5) {
                if(chunks[chunks.length - 2] !== 'content') {
                    id = chunks[chunks.length - 2] + '-' + id;
                } else {
                    id = chunks[chunks.length - 3] + '-' + id;
                }
            }
            return id;
        }
    };


    // PRODUCT DRAWER
    $('.product-drawer .open-close').on('click', function() {
        if($('.product-drawer').hasClass('open')) {
            $('.product-drawer').css('width', '50px').removeClass('open');
            $('.cmain').removeAttr('style'); // TODO!!! - A bit brittle if something else codes styles to this element!
            $('.chead').removeAttr('style');
            $('.logo').show();
            $(this).html('&raquo;'); // TODO... delay this .5s

        } else {
            $('.product-drawer').css('width', '210px').addClass('open');
            // setTimeout(function() { $('.product-drawer').addClass('open')}, 500);
            $('.logo').hide();
            $('.cmain').css('marginLeft', '210px');
            $('.chead').css('left', '210px');
            $(this).html('&laquo;');
        }
    });

    // PUBNAV FOR MOBILE
    $('.launch-pubnav').on('click', function () {
        if($('aside').hasClass('open')) {
            // Nav closed... open it.
            $('.pubmenu').removeClass('open');
            $('.cpage').fadeIn();
        } else {
            // Nav is open. Close it....
            $('.pubmenu').addClass('open');
            $('.cpage').fadeOut();
        }
    });

    // SEARCH DRAWER  
    $('.launch-search').on('click', function() {
        $(this).hide();
        $('.search').show().addClass('open');
    });
    $('.search-close').on('click', function() {
        $('.search').hide().removeClass('open');
        $('.launch-search').show();
    });

    WhoAmI.init();
    Pubnav.init();
    ProductDrawer.init();
    Search.init();

}(jQuery));