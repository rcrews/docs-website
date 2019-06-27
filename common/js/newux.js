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
        }
    }

    var Pubnav = {

        product: '',
        pagestate: {
            current: '',
            up: '',
            forward: '',
            next: '',
        },
        navstate: [],
        init: function() {
            this.loadNav();
        },
        bindEvents: function() {
            // Catch Link Clicks from Pubmenu and Feed through System

            $('.ctoc a').on('click', this.requestNewContent.bind(this));
            $('.ctoc li.xp').on('click', this.handleOpen);
            $('.ctoc .expand').on('click', this.contractNav);

            // Catch Back Button Clicks and Update Page.
            $(window).bind("popstate", this.handleBackButton.bind(this));

        },
        handleOpen: function(evt) {
            evt.stopPropagation();
            let $this = $(this);

            // Double check if this is not already open!
            if(!($this).hasClass('open')) {
                let id = $(this).data('navid');
                // Update the state
                Pubnav.expandElem(id);

                // Update state
                Pubnav.navstate.push(id);
                localStorage.setItem(Pubnav.product + '_navstate', Pubnav.navstate);
            }
        },
        expandElem: function(id) {
            console.log(id);
            let $this = $('.ctoc li').find(`[data-navid='${id}']`);
            console.log($this);
            $this.children('ul').slideDown();
            $this.children('.expand').text('\uf106');
            $this.addClass('open');
        },
        contractNav: function(evt) {
            if(!($(this).text() === '\uf107')) {
                evt.stopPropagation();
                $(this).text('\uf107').siblings('ul').slideUp().parent('li').removeClass('open');


                // Update State
                let id = $(this).parent('li').data('navid');
                let index = Pubnav.navstate.indexOf(id);
                console.log('remove ' + id + ': ' + index);
                if (index > -1) {
                    Pubnav.navstate.splice(index, 1);
                }
                localStorage.setItem(this.product + '_navstate', Pubnav.navstate);
            }
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
                    let html = this.createTree(data);
                    // $('.ctoc').append('<p class="hello">Hello</div>');
                    $('.ctoc').append(html);
                    this.bindEvents();
                    if(this.navstate.length > 0) {
                        for(let id of this.navstate) {
                            this.expandElem(id);
                        }
                    }
                });
        },
        createTree: function(tree) {
            let html = "<ul>";
            tree.forEach((item) => {
                let css = "";
                if(!('id' in item)) {
                    if('href' in item) {
                        item.id = item.href.substring(item.href.lastIndexOf('/') + 1, item.href.indexOf('.html'));
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
                    html += this.createTree(item.sub);
                }
                html += '</li>';
          });
          html += "</ul>";
          return html;
        },
        handleBackButton: function() {
            let url = location.pathname;
            this.loadNewContent(url);
        },
        requestNewContent: function(e) {
            // Grab the Recommended URL 
            let url = $(e.target).attr('href');
            
            // Confirm this is actually a doc URL
            if(!this.isValidDocURL(url)) {
                return false;
            }

            // Get the new content. 
            // TODO! Check if it's successful before completing the rest. 
            this.loadNewContent(url);

            // Update History 
            history.pushState(null, null, url);

            e.preventDefault(); 
        },
        loadNewContent: function(url) {
            // Update New Content with Transition Effects - TODO... just handle this with CSS?
            $( "#content" ).fadeOut(200, function() {
                $(this).hide().load( url + " #content", function() { 
                    $(this).fadeIn(200);
                });
            });
            // Update the Menu Too!
        },
        isValidDocURL: function(url) {
            // Do checks
            return true; 
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
