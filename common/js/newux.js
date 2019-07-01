var NEWUX = (function($) {
    'use strict';

    // Example Toolbelt Functions
    var Utils = { 
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
            var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
            var to   = "aaaaeeeeiiiioooouuuunc------";
            for (var i=0, l=from.length ; i<l ; i++) {
                str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
            }

            str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                .replace(/\s+/g, '-') // collapse whitespace and replace by -
                .replace(/-+/g, '-'); // collapse dashes

            return str;
        },
        flatten: function(arr, subkey) {
            // TODO! Flatten a nested array with subs, into a consectutive array.
            return [];
        }
    }

    var Pubnav = {

        nav_tree: [], // Will hold the full, cleaned, nav JSON file
        product: '', // Holds a unique name for the product we're in, which is used as a key for saving the menu.
        pagestate: { // Will hold the current state of the page.
            current: {},
            prev: {},
            next: {},
            depth: 0, // How many layers deep we are.
            breadpath: [],// Array of Parents... in descending order.
            children: [] // Flattened Array of Subs }
        },
        navstate: [], // Holds the list of open nav items in the menu... used to maintain state between loads.
        init: function() {
            this.loadNav();
        },
        bindEvents: function() {
            // Catch Link Clicks from Pubmenu and Feed through System
            $('.ctoc a').on('click', this.requestNewContent.bind(this));

            // Nav Menu Expand/Contract
            $('.ctoc li.xp').on('click', this.handleNavOpen);
            $('.ctoc .expand').on('click', this.handleNavContract);

            // Back Button Clicks.
            $(window).bind("popstate", this.handleBackButton.bind(this));
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
                $(this).text('\uf107').siblings('ul').slideUp().parent('li').removeClass('open');

                // Update State
                let id = $(this).parent('li').data('navid');
                let index = Pubnav.navstate.indexOf(id);
                if (index > -1) {
                    Pubnav.navstate.splice(index, 1);
                }
                localStorage.setItem(this.product + '_navstate', Pubnav.navstate);
            }
        },
        handleBackButton: function() {
            let url = location.pathname;
            this.loadNewContent(url);
        },
        loadNav: function() {
            // TODO!!! Come up with a system on where to find the navigation.JSON file for this product...
            //      - It'll be in the root of the product URL... so we'll need to parse that.
            let url = "/hdf3/hdf-3.4.0/navigation.json";

            // TODO!!! And while we're at it, we should tease out the root product.
            this.product = 'HDF3';
            this.navstate = localStorage.getItem(this.product + '_navstate') ? localStorage.getItem(this.product + '_navstate').split(',') : [];

            // Get the JSON, and then build out a shadow structure and insert it into the DOM.
            fetch(url)
                .then((resp) => resp.json()) // Transform the data into json
                .then((data) => {
                    // 1. Clean and build tree... add unique ids for all elements based on hrefs, check for duplicates.
                    this.nav_tree = this.cleanNavData(data);

                    // 2. Figure out what page I am, and update the page state
                    let active_url =  new URL(window.location.href);
                    let active_id = this.getIdFromHref(active_url.pathname);
                    this.mapPageState(this.nav_tree, active_id);

                    // 3. Now build out the tree in HTML
                    let html = this.createHtmlTree(this.nav_tree);
                    $('.ctoc').append(html);
                    if(this.navstate.length > 0) {
                        for(let id of this.navstate) {
                            this.expandNavElem(id);
                        }
                    }

                    // 4. Bind Event Handlers
                    this.bindEvents();

                    // Update Page Links and Breadcrumbs
                    this.updatePageState();
                });
        },
        cleanNavData(data) {
            // Let's ensure a good ID for every item in the nav.
            // If the item doesn't have an ID, create it from the href.

            for(let i=0; i < data.length; i++) {
                if(typeof data[i].id === 'undefined') {
                    if (typeof data[i].href !== 'undefined') {
                        // Use the HREF to build the ID... this is the preferred method.
                        data[i].id = this.getIdFromHref(data[i].href)
                    } else {
                        // Use the text to build the ID... this might occur for menu items that have no page.
                        data[i].id = Utils.slugify(data[i].text);
                    }
                }
                // Now the ID has been defined... if the item has kids, let's iterate through those.
                if (typeof data[i].sub !== 'undefined') {
                    data[i].sub = this.cleanNavData(data[i].sub);
                }

            }

            return data;
        },
        createHtmlTree: function(tree) {
            let html = "<ul>";
            tree.forEach((item) => {
                let css = "";
                if(!('id' in item)) {
                    if('href' in item) {
                        item.id = this.getIdFromHref(item.href);
                    } else {
                        item.id = slugify('item.text');
                    }
                }
                if('sub' in item) {
                    css += "xp ";
                }
                if('href' in item) {
                    html += `<li class='${css}' data-navid='${item.id}'><span class='item'><a href='${item.href}'>${item.text}</a></span>`;
                } else {
                    html += `<li class='${css}' data-navid='${item.id}'><span class='item'>${item.text}</span>`;
                }
                if('sub' in item) {
                    html += "<span class='expand'>&#xf107;</span>";  // NOTE, BE CAREFUL ABOUT CHANGING THE ICON. IT'S USED IN THE CONTROL STRUCTURE
                    html += this.createHtmlTree(item.sub);
                }
                html += '</li>';
          });
          html += "</ul>";
          return html;
        },
        expandNavElem: function(id) {
            let $this = $('.ctoc li').find(`[data-navid='${id}']`);
            $this.children('ul').slideDown();
            $this.children('.expand').text('\uf106');
            $this.addClass('open');
        },
        getIdFromHref:function(href) {
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


        },
        requestNewContent: function(e) {
            // Grab the Recommended URL 
            let url = $(e.target).attr('href');

            // Set the Active Item on the Nav.
            $('.ctoc li').removeClass('active');
            $(e.target).closest('li').addClass('active');

            // Confirm this is actually a doc URL
            if(!this.isValidDocURL(url)) {
                return false;
            }

            // Get the new content. 
            // TODO! Check if it's successful before completing the rest. 
            this.loadNewContent(url);

            // Update History 
            history.pushState(null, null, url);

            // TODO! Notify Google Analytics about the new page load.

            e.preventDefault(); 
        },
        loadNewContent: function(url) {
            // Update New Content with Transition Effects - TODO... just handle this with CSS?
            $( "#content" ).fadeOut(200, function() {
                $(this).hide().load( url + " #content", function() { 
                    $(this).fadeIn(200);
                });
            });

            // TODO! CHeck if there are any additional scripcs of styles that need to be imported and applied?

            // TODO! Update the Menu with the Active Tab.

        },
        isValidDocURL: function(url) {
            // Do checks
            return true; 
        },
        mapPageState: function(navarray, id) {
            // This searches for the id in the nav tree, and then sets up the back, forward etc.

            for(let i = 0; i < navarray.length; i++) {
                if(navarray[i].id === id) {
                    // We found it!
                    this.pagestate.current = navarray[i];
                    if(i-1 >= 0) {
                        this.pagestate.prev = navarray[i-1];
                    }
                    if(i+1 < navarray.length) {
                        this.pagestate.next = navarray[i+1];
                    }
                    if(navarray[i].sub !== 'undefined') {
                        this.pagestate.children = Utils.flatten(navarray[i].sub);
                    }
                    this.pagestate.depth = 1;
                    return true;
                } else {

                    // Check if the item has kids....
                    if(typeof navarray[i].sub !== 'undefined') {
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
            

            // Set the active item in the menu.
            $('.ctoc li').find(`[data-navid='${this.pagestate.current.id}']`).addClass('active');
        }
    };

    var ProductDrawer = {
        init: function () {

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

    // PRODUCT DRAWER
    $('.product-drawer .open-close').on('click', function() {
        if($('.product-drawer').hasClass('open')) {
            $('.product-drawer').css('width', '50px').removeClass('open');
            $('.cmain').removeAttr('style'); // TODO!!! - A bit brittle if something else codes styles to this element!
            $('.cheader').removeAttr('style');
            $('.logo').show();
            $(this).html('&raquo;'); // TODO... delay this .5s
            
        } else {
            $('.product-drawer').css('width', '210px').addClass('open');
            // setTimeout(function() { $('.product-drawer').addClass('open')}, 500);
            $('.logo').hide();
            $('.cmain').css('marginLeft', '210px');
            $('.cheader').css('left', '210px');
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



    Pubnav.init();

}(jQuery));
