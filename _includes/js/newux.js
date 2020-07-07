// These are currently only used for eslint formatting and checking.
// E.g., uncomment them before running eslint and recomment them after.
// import {$, jQuery} from 'jquery-3.4.1.min.js';
// import {cdocUtils} from 'cdoc-utils.js';
// import {filterStuff} from 'cdoc-filter.js';

/**
 * NEWUX - Functionality associated with the 2019 Rework of the Cloudera Documentation.
 *
 * @link http://docs.cloudera.com
 * @author James Dilworth - james@jamesdilworth.com
 */
const NEWUX = (function($) {
  'use strict';

  const COPYRIGHT = `&copy; ${new Date().getFullYear()} by Cloudera, Inc. All rights reserved.`;
  const WhoAmI = {
    product_name: '', // We get this from the from the URL, or the meta-tag
    search_name: '', // This is used to pass the query on to the search engine.
    version: '', // We get this from the URL, or the meta tag.
    is_latest: false, // This gets flagged if we are using the "latest" url.
    // latest_version : {}, // We need to look this up from the versions.yaml and use it to highlight the latest version.
    versions: [], // Populate this from versions.yaml
    products: [], // The full versions.yaml jsonified.

    bootstrap: function() {
      // Load in the versions.json
      const navfile = '/versions.json';
      fetch(navfile)
          .then((resp) => resp.json()) // Transform the data into json
          .then((data) => {
            WhoAmI.products = data; // Save the whole thingy in case we need it again.

            // See if I can figure out what product loading page is in from the product link.
            let myProductUrl = '';

            // Initially, we used the newux template to inject the product name into the index pages. I don't think we're doing this anymore
            const $myProduct = $('.bread-product a');
            if ($myProduct.length > 0) {
              myProductUrl = new URL($myProduct[0].href);
              myProductUrl = myProductUrl.pathname;
              WhoAmI.product_name = $myProduct[0].text;
            } else {
              // Look for it in the path
              myProductUrl = location.pathname;
            }

            // Let's do a little more work to this url...
            // The url structure should be /product-name/product-version/index.html
            const myProductUrlParts = myProductUrl.split('/');
            // If we're on a latest branch, we need to identify what we really are.
            WhoAmI.is_latest = false;
            if (myProductUrlParts[2] === 'latest') {
              WhoAmI.is_latest = true;
              // This will not be found in the lookup below, because the latest url doesn't existing in the versions. So can we lookup based on something else?

              // Sub-pages have the version baked into the meta....
              // Product home pages also have the version in them, but in a different place....
              // And foyer pages don't have a version in them at all.

              // We could do the lookup through the versions.yaml
              // Each product has a "latest-version" and a "latest-url" parameter.
              // We can do that in the loop below.
            }

            // Make sure there's an index.html at the end of the url.
            myProductUrl = `/${myProductUrlParts[1]}/${myProductUrlParts[2]}/index.html`;
            // Walk the versions.yaml tree, figure out what product/version I am based on the URL, and get the related information for that product
            let found = false;
            let versions = [];

            for (let i = 0; i < data.length; i++) {
              // We only need to loop through the versions if we've not found it.
              if (WhoAmI.is_latest) {
                // Special lookup based on the latest flag.
                if (typeof data[i]['latest-url'] !== 'undefined' && data[i]['latest-url'].replace(/^\/([^/]+).*/, '$1') === myProductUrl.replace(/^\/([^/]+).*/, '$1')) {
                  // Ok, we found the right product, and from this can deduce the right version.
                  myProductUrl = `/${myProductUrlParts[1]}/${data[i]['latest-version']}/index.html`;
                }
              }
              if (!found) {
                versions = [];
                if (typeof data[i].versions !== 'undefined') {
                  for (let j = 0; j < data[i].versions.length; j++) {
                    // Store the versions for our lookup table.
                    versions[j] = {
                      type: typeof data[i].versions[j].type === 'undefined' ? '' : data[i].versions[j].type,
                      title: Number.isInteger(data[i].versions[j].title) ? data[i].versions[j].title.toFixed(1) : data[i].versions[j].title,
                      url: data[i].versions[j].url,
                      minors: [],
                    };

                    if (!found && myProductUrl === data[i].versions[j].url) {
                      WhoAmI.version = {
                        type: typeof data[i].versions[j].type === 'undefined' ? '' : data[i].versions[j].type,
                        title: data[i].versions[j].title,
                        url: data[i].versions[j].url,
                      };
                      found = true; // We found it at the top level.. but the version we want is probably still at the lower level
                    }

                    // If it doesn't match, check the minors...
                    if (typeof data[i].versions[j].minors !== 'undefined') {
                      for (let k = 0; k < data[i].versions[j].minors.length; k++) {
                        // Add the minors to our versions lookup table too.
                        versions[j].minors[k] = {
                          type: typeof data[i].versions[j].minors[k].type === 'undefined' ? '' : data[i].versions[j].minors[k].type,
                          title: data[i].versions[j].minors[k].title,
                          url: data[i].versions[j].minors[k].url,
                        };

                        // also check the minors.
                        if (myProductUrl === data[i].versions[j].minors[k].url) {
                          // We found it at the minor level
                          WhoAmI.version = {
                            type: typeof data[i].versions[j].minors[k].type === 'undefined' ? '' : data[i].versions[j].minors[k].type,
                            title: data[i].versions[j].minors[k].title,
                            url: data[i].versions[j].minors[k].url,
                          };
                          found = true;
                        }
                      }
                    }
                  }
                }
              }

              // It might now be found... if so, set our thingy's
              if (found) {
                // If versions.yaml didn't quote the version number they might now be integers missing the decimal point versus strings
                if (Number.isInteger(WhoAmI.version.title)) {
                  WhoAmI.version.title = WhoAmI.version.title.toFixed(1);
                }

                if (WhoAmI.product_name === '') WhoAmI.product_name = data[i].name;
                if (typeof data[i]['search-name'] !== 'undefined') WhoAmI.search_name = data[i]['search-name'];
                WhoAmI.versions = versions;

                break; // And break out of this loop
              }
            }

            if ($('.bread-version').length && WhoAmI.version.length === 0) {
              // If we couldn't find a version in versions.yaml, might still be able to get it from the HTML...
              WhoAmI.version = {
                title: $('.bread-version').length ? $('.bread-version').text() : '',
                url: $('.bread-product a').length ? $('.bread-product a')[0].href : '',
              };
            }

            this.setupVersions();
          });
    },
    setupVersions: function() {
      $('.bread-product').html(`<a href="${WhoAmI.version.url}">${WhoAmI.product_name}</a>`);

      // Change "Cloud" to the Cloud Symbol
      if (typeof WhoAmI.version.title === 'string' && WhoAmI.version.title.trim().toLowerCase() === 'cloud') {
        $('.bread-version').html('<i class="fa fa-cloud"></i>');
      } else {
        if (WhoAmI.version.type !== '') {
          $('.bread-version').html(`${WhoAmI.version.title} (${WhoAmI.version.type})`);
        } else {
          $('.bread-version').html(WhoAmI.version.title);
        }
      }

      // Create a pulldown list for all the versions.
      let output = '';

      let x = 0;
      WhoAmI.versions.forEach(function(el) {
        if (el) {
          output += `<li class="major"><a href="${el.url}">${el.title}</a>`;
          if (typeof el.minors === 'object') {
            output += '<ul class="minors">';
            el.minors.forEach(function(em) {
              output += `<li class="minor"><a href="${em.url}">${em.title}</a></li>`;
              x++;
            });
            output += '</ul>';
          }
          output += '</li>';
          x++;
        }
      });
      if (x > 1) {
        // There are some other versions to show...
        $('.bread-version').append(' <i class="fa fa-angle-down selector"></i><ul class="version-select"></ul>');
        $('.version-select').hide().html(output);
      }

      // Add Handlers
      $('.bread-version .selector').click(function() {
        const $this = $(this);
        $this.hasClass('fa-angle-down') ? $this.removeClass('fa-angle-down').addClass('fa-angle-up') : $this.removeClass('fa-angle-up').addClass('fa-angle-down');
        $('.version-select').toggle();
      });

      // And now that's all done, let's set up the product drawer too.
      ProductDrawer.init();
    },
    init: function() {
      if (!$('.bread-product').length) $('.chead .breadcrumbs').append('<span class="bread-product"></span>');
      if (!$('.bread-version').length) $('.chead .breadcrumbs').append('<span class="bread-version"></span>');

      this.bootstrap();
    },
  };

  const Pubnav = {
    nav_tree: [], // Will hold the full, cleaned, nav JSON file
    product: '', // Holds a unique name for the product we're in, which is used as a key for saving the menu.
    pagestate: { // Will hold the current state of the page.
      current: {},
      prev: {},
      next: {},
      depth: 0, // How many layers deep we are.
      breadpath: [], // Array of Parents... in descending order.
      children: [], // Flattened Array of Subs }
      pdfurl: '',
      copyright: COPYRIGHT,
      count: 0,
    },
    navstate: [], // Holds the list of open nav items in the menu... used to maintain state between loads.
    is_hash_link: false, // Used as a flag to work around the hashlinks also firing the popstate.
    clicktrack: 0, // Used to stop the loadContent function from racing if the nav.json and fiiles are incorrect.
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

      // Collapse/Expand All
      $('.collapse-ctoc').on('click', this.handleCollapseAll);

      // Back Button Clicks.
      $(window).bind('popstate', this.handleNewPageRequest);

      // PUBNAV FOR MOBILE
      $('.launch-pubnav').on('click', this.handleMobileToggle);
    },
    handleCollapseAll: function(e) {
      //
      const $this = $(this);
      if ($this.hasClass('collapse')) {
        $this.removeClass('collapse');
        $this.find('i').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
        $('li.xp').removeClass('open sesame');
        localStorage.setItem(`${Pubnav.product}_navstate`, '');
      } else {
        $this.addClass('collapse');
        $this.find('i').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
        $('li.xp').addClass('open sesame');
        localStorage.setItem(`${Pubnav.product}_navstate`, '');
      }
    },
    handleNavOpen: function(evt) {
      evt.stopPropagation();
      const $this = $(this);

      // Double check if this is not already open!
      if (!($this).hasClass('open')) {
        const id = $(this).data('navid');
        // Update the state
        if (!Pubnav.navstate.includes(id)) {
          Pubnav.navstate.push(id);
          localStorage.setItem(`${Pubnav.product}_navstate`, Pubnav.navstate);
        }
        Pubnav.expandNavElem(id);
      }
    },
    handleNavContract: function(evt) {
      if ($(this).parent('li').hasClass('open')) {
        evt.stopPropagation();
        const id = $(this).parent('li').data('navid');
        Pubnav.contractNavElem(id);
      }
    },
    handleNewPageRequest: function(e) {
      // Can be called from link click or back button, or a failed loadContent() - If passed from an link, we'll look up, otherwise get from the URL.
      Pubnav.mobileClose(); // Close the mobile nav if it was open.

      let url;
      let hash = '';
      let updateHistory = true;

      Pubnav.clicktrack = 0;
      // Check it's a valid click.....
      if (e.type === 'click') {
        // If it's an actual anchor link with external.
        if ($(this).hasClass('external')) {
          return true;
        }

        // If it's designated with a class of external.
        if ($(this).closest('li').hasClass('external')) {
          return true;
        }

        url = this.getAttribute('href'); // First start working with the relative URL.
        if (!url) {
          return true;
        }

        // If it starts with a hash, assume it's an in-page reference and bail..
        if (!url.indexOf('#')) {
          // Pubnav.is_hash_link = true;
          // Also add some spacing so that it doesn't get covered up by the nav.
          const anchor = url.substring(url.indexOf('#'));
          $(anchor).addClass('hashpad');
          return true;
        }

        // If a protoocol is specified, assume it's an external link, and don't intercept.
        if (!url.indexOf('http')) {
          // will return if http is at the beginning of the string.
          return true;
        }

        // If it's a PDF document, pass on it too....
        if (url.indexOf('.pdf') !== -1) {
          return true;
        }

        // normalize the URL path for future use...
        const obj = new URL(this.href);
        url = obj.pathname;
        hash = obj.hash;

        // If this is the same page... might be a hash, also don't do anything.
        if (obj.pathname === location.pathname) {
          return true;
        }
      } else if (e.type === 'popstate') {
        if (location.hash !== '') { // Hashes also fire popstate, and we only want to capture back/forward
          hash = location.hash.substring(1);
          const el = document.getElementById(hash);
          if (el) {
            el.className += ' hashpad';
            el.scrollIntoView();
          }
          return true;
        }
        // the page history is changing... happens with back/forward button, but also hash links!
        url = location.pathname;
        updateHistory = false;
      }

      if (Pubnav.requestNewPage(url, hash, updateHistory) && e.type === 'click') {
        e.preventDefault();
      }
    },
    handleMobileToggle(e) {
      if ($('.pubmenu').hasClass('open')) {
        // Nav closed... open it.
        Pubnav.mobileClose();
      } else {
        // Nav is open. Close it....
        Pubnav.mobileOpen();
      }
    },
    mobileOpen: function() {
      $('.pubmenu').addClass('open');
      $('.cpage').fadeOut();
      $('.launch-pubnav i').removeClass('fa-bars').addClass('fa-times');
    },
    mobileClose: function() {
      $('.pubmenu').removeClass('open');
      $('.cpage').fadeIn();
      $('.launch-pubnav i').removeClass('fa-times').addClass('fa-bars');
    },
    setupNav: function() {
      // Inject HTML Elements necessary for paging and the pubmenu
      if (!$('.ctoc').length) $('.pubmenu').append('<div class="ctoc"></div>');
      if (!$('.collapse-ctoc').length) $('.ctoc').append('<div class="collapse-ctoc collapse"><i class="fa fa-angle-double-up"></i></div>');
      if (!$('.bread-category').length) $('.breadcrumbs').append('<span class="bread-category"></span>');

      // if (!$(".short-prev").length) $(".cpage").append('<div class="short-prev"><a href="">«</a></div>');
      if (!$('.short-next').length) $('.cpage').append('<div class="short-next"><a href="">»</a></div>');
      // if (!$("up").length) $(".cpage").append('<div class="up"></div>');
      // if (!$(".prev").length) $(".cpage").append('<div class="prev"><a href=""></a></div>');
      if (!$('.next').length) $('.cpage').append('<div class="next"><a href=""></a></div>');

      // Copyright
      const copyright = $(document).find('meta[name=\'rights\']').attr('content');
      if (typeof copyright !== 'undefined') {
        Pubnav.pagestate.copyright = Utils.formatCopyright(copyright);
      } else {
        Pubnav.pagestate.copyright = COPYRIGHT;
      }

      if (!$('.copyright').length) {
        $('.cpage').append(`<div class="copyright"><a href="/common/html/legal.html">${Pubnav.pagestate.copyright}</a></div>`);
      }

      // When we load up the JS for the page, we rely on the navigation.json file that is present in the product root.

      // Normally, we expect this to be in the third folder... so for example. /HDF3/hdf-3.0.4/navigation.json
      const url = new URL(window.location.href);
      const urlChunks = url.pathname.split('/'); // This will include the first item as an empty item.
      urlChunks.length = 3; // This will dump any extra url stuff for nested files.
      const navfile = `${urlChunks.join('/')}/navigation.json`;

      // Let's also define the product code for saving the navstate and the product bar lookup.
      this.product = urlChunks[1].toLowerCase();
      this.navstate = localStorage.getItem(`${this.product}_navstate`) ? localStorage.getItem(`${this.product}_navstate`).split(',') : [];

      // Now, get the JSON, and then build out a shadow structure and insert it into the DOM.
      // TODO!!! - Handle errors?
      fetch(navfile)
          .then((resp) => resp.json()) // Transform the data into json
          .then((data) => {
            // 1. Clean and build tree... add unique ids for all elements based on hrefs, check for duplicates.
            this.nav_tree = this.cleanNavData(data);

            // 2. Figure out what page I am, and update the page state

            // Look for URL in nav.json
            const item = this.getNestedItemBy('href', url.pathname, this.nav_tree);
            const activeId = item.id;

            // TODO! - We're looking for the page based on an id which we made up, but really we should just base it on the href which is always correct.
            this.mapPageState(this.nav_tree, activeId);

            // 3. Now build out the tree in HTML
            const html = this.createHtmlTree(this.nav_tree);
            $('.ctoc').append(html);

            // 4... Figure out the PDF... TODO!! - This is repeated in LoadContent() - Make it DRYer)
            const $pdf = $('link[type=\'application/pdf\']');
            if ($pdf.length > 0) {
              Pubnav.pagestate.pdfurl = (typeof $pdf[0].href !== 'undefined') ? $pdf[0].href : '';
            } else {
              Pubnav.pagestate.pdfurl = '';
            }

            // 5. Bind Event Handlers
            this.bindEvents();

            // 6. Update Page Links and Breadcrumbs
            this.updatePageState();
          });
    },
    loadContent: function(url, hash, updateHistory) {
      Pubnav.clicktrack++; // This is just used to prevent runaway clicks.

      // Start by fading out the existing content....
      let complete = false;
      let faded = false;
      let elems = [];
      const $content = $('#content');

      // Define what we're going to do when the content comes back.
      function swapContent() {
        if (faded && complete) {
          $content.html(elems); // should I be using html() here?
          if (hash !== '' && typeof hash !== 'undefined') {
            hash = hash.substring(1);
            const el = document.getElementById(hash);
            if (el) {
              el.className += ' hashpad';
              el.scrollIntoView();
            }
          } else {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          }
          $content.fadeTo(200, 1);
          Transforms.run($content); // Re-apply filters and event handlers to the new content.
          Pubnav.updatePageState();
        } else {
          // We're not ready yet.
          return false;
        }
      }

      // $(".maincontent").append('<div id="content-spinner"><i class="fas fa-circle-notch fa-spin"></i></div>');
      // Fade out the current content.
      $content.fadeTo(200, 0, function() {
        faded = true;
        swapContent();
      });

      // TODO... do a check to see that we're on the same domain.
      const selector = '#content'; // This is the selector of the content we want to grab.

      jQuery.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
      }).done(function(responseText) {
        // Save response for use in complete callback
        const response = arguments;

        // Parse the response..
        // First, create a virtual DOM that we can set the location correctly with.
        const virtualDOM = document.implementation.createHTMLDocument('virtual');
        virtualDOM.body.innerHTML = responseText;
        elems = $(virtualDOM).find(selector).children();

        // And check whether there is any content in there......
        if (!elems.length) {
          if (Pubnav.pagestate.children.length && Pubnav.clicktrack < 3) {
            // sometimes foyer pages are empty. If so, look for the first child page.
            const newUrl = Pubnav.pagestate.children[0].href;
            Pubnav.requestNewPage(newUrl);
            return false;
          } else {
            // Page doesn't have kids, and still doesn't have content... maybe it should be external?
            elems = [];
            elems[0] = `<h1>Format error</h1><p>We found the page you requested but can't identify the main content of the page to render within this page. <a href="${url}" class="external">Try loading it directly.</a> Otherwise, choose a different topic from the left or find one using search.</p>`;
            // Fire GA Logger?
            complete = true;
            swapContent();
            return false;
          }
        } else {
          // Success....

          // Update history so the back button works.... We don't want this to fire if we're going back in time!
          if (updateHistory) {
            if (typeof hash === 'undefined') {
              hash = '';
            }
            history.pushState({page: url}, Pubnav.pagestate.current.text, `${url}${hash}`);
          }

          $(virtualDOM).find('head').append(`<base href="${url}">`);

          // Copyright
          const copyright = $(virtualDOM).find('meta[name=\'rights\']').attr('content');
          if (typeof copyright !== 'undefined') {
            Pubnav.pagestate.copyright = Utils.formatCopyright(copyright);
          } else {
            Pubnav.pagestate.copyright = `&copy; ${new Date().getFullYear()} by Cloudera, Inc. All rights reserved.`;
          }

          // PDF Document
          const $pdf = $(virtualDOM).find('link[type="application/pdf"]');
          if ($pdf.length > 0) {
            Pubnav.pagestate.pdfurl = (typeof $pdf[0].href !== 'undefined') ? $pdf[0].href : '';
          } else {
            Pubnav.pagestate.pdfurl = '';
          }

          complete = true;
          swapContent();
        }
      }).fail(function(jqXHR, status, error) {
        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
        complete = true;
        elems[0] = `<h1>Load error</h1><p>We're not able to get the page you requested. Most likely we planned a page for this location, but it's not ready yet.</p><p style="font-size: 85%">${status} ${jqXHR.statusText}</p><p>Choose a different topic from the left or find one using search.</p>`;
        swapContent();
      });
    },
    cleanNavData(data) {
      // Let's ensure a good ID for every item in the nav.
      // If the item doesn't have an ID, create it from the href.

      for (let i = 0; i < data.length; i++) {
        if (typeof data[i].id === 'undefined') {
          if (typeof data[i].href !== 'undefined') {
            // Use the HREF to build the ID... this is the preferred method.
            data[i].id = Utils.makeIdFromHref(data[i].href);
          } else {
            // Use the text to build the ID... this might occur for menu items that have no page.
            data[i].id = Utils.slugify(data[i].text);
          }
        } else {
          // We should still clean the ID.. just in case there are periods, slashes and stuff in it.
          data[i].id = data[i].id.replace(/([^a-z0-9-]+)/gi, '-');
        }
        // Now the ID has been defined... if the item has kids, let's iterate through those.
        if (typeof data[i].sub === 'object') {
          data[i].sub = this.cleanNavData(data[i].sub);
        }
      }

      return data;
    },
    createHtmlTree: function(tree, level) {
      if (typeof level === 'undefined') {
        level = 1;
      }
      let html = '<ul>';
      tree.forEach((item) => {
        let css = '';
        if (!('id' in item)) {
          if ('href' in item) {
            item.id = Utils.makeIdFromHref(item.href);
          } else {
            item.id = Utils.slugify('item.text');
          }
        }
        if ('sub' in item) {
          css += 'xp ';
        }
        if ('external' in item) {
          css += 'external ';
        }
        if ('href' in item) {
          // console.log(!("external" in item));
          if (WhoAmI.is_latest && !('external' in item)) item.href = this.makeLatestURL(item.href);
          html += `<li class="${css}" data-navid="${item.id}" data-level="${level}"><span class="item"><a href="${item.href}">${item.text}</a></span>`;
        } else {
          html += `<li class="${css}" data-navid="${item.id}" data-level="${level}"><span class="item">${item.text}</span>`;
        }
        if ('sub' in item && typeof item.sub === 'object') {
          html += '<span class="expand"></span>';
          html += this.createHtmlTree(item.sub, level + 1);
        }
        html += '</li>';
      });
      html += '</ul>';
      return html;
    },
    expandNavElem: function(id) {
      const $this = $(`.ctoc li[data-navid="${id}"]`);

      // If it's already open, ignore.
      if ($this.hasClass('open')) {
        return true;
      }

      // Collapse other menu items at the same level as this one:
      const level = $this.data('level');
      if (level > 1) {
        $(`.ctoc li.open[data-level="${level}"]`).each(function() {
          if ($(this).find('.active').length === 0) {
            // As long as it's not the parent of an active element.
            const id = $(this).data('navid');
            Pubnav.contractNavElem(id);
          }
        });
      }

      // Now expand this one..
      $this.addClass('open');
      setTimeout(function() {
        $this.addClass('sesame');
      }, 5); // This is a little hack to help the slide-down effect on the menu. The transitions don't actually work if they come right after display:block being made.

      // Ensure the parents are open too.
      $this.parents('.ctoc li:not(.open)').each(function() {
        const $parent = $(this);
        if ($parent.data('level') > 1) {
          $parent.addClass('open');
          setTimeout(function() {
            $parent.addClass('sesame');
          }, 5); // This is a little hack to help the slide-down effect on the menu. The transitions don't actually work if they come right after display:block being made.

          const parentId = $parent.data('navid');
          if (!Pubnav.navstate.indexOf(parentId)) {
            Pubnav.navstate.push(parentId);
            localStorage.setItem(`${Pubnav.product}_navstate`, Pubnav.navstate);
          }
        }
      });
    },
    contractNavElem: function(id) {
      // Contract the elem....
      // $(this).text("\uf107").siblings("ul").parent("li").removeClass("open sesame");
      const $elem = $('.ctoc').find(`li[data-navid=${id}]`);
      $elem.removeClass('sesame');

      // Again the hack to hide the item after compression.... I think we could do this with keyframes instead. https://jsfiddle.net/jalbertbowdenii/mHRb8/
      setTimeout(function() {
        $elem.removeClass('open');
      }, 320);

      // Update State
      const index = Pubnav.navstate.indexOf(id);
      if (index > -1) {
        Pubnav.navstate.splice(index, 1);
      }
      localStorage.setItem(`${Pubnav.product}_navstate`, Pubnav.navstate);
    },
    requestNewPage: function(url, hash, updateHistory) {
      // console.log(`called requestNew Page with url: ${url}, hash: ${hash}, and updateHistory: ${updateHistory}`);
      // Only load if the url is actually in the nav tree...
      if (typeof updateHistory === 'undefined') updateHistory = true;
      const destination = this.getNestedItemBy('href', url, this.nav_tree);
      if (destination) {
        // If it's a page in the menu tree...
        this.loadContent(url, hash, updateHistory);

        // Watch out. Everything after this, will run before the content has finished loading.
        this.pagestate.breadpath.length = 0; // This should really be part of mapPageState, but I can't do it because I'm recursing on that function.
        this.pagestate.next = {};
        this.mapPageState(this.nav_tree, destination.id);

        // TODO! Notify Google Analytics about the new page load.
        return true;
      } else {
        // console.log("couldnt find in tree?");
        return false;
      }
    },
    getNestedItemBy: function(key, value, arr) {
      for (let i = 0; i < arr.length; i++) {
        if (key === 'id' && arr[i].id === value) {
          return arr[i];
        } else if (key === 'href' && arr[i].href !== undefined && arr[i].href.indexOf(value) >= 0) {
          return arr[i];
        } else if (typeof arr[i].sub !== 'undefined') {
          const item = this.getNestedItemBy(key, value, arr[i].sub);
          if (item !== false) return item;
        }
      }
      return false; // Defaults to false if we couldn't find anything.
    },
    makeLatestURL(url) {
      // Take a URL like /runtime/7.0.0/topic/item_name.html and convert it to runtime/latest/topic/item_name.html
      const urlParts = url.split('/');
      if (url.match(/HDPDocuments/)) {
        return urlParts.join('/');
      }
      urlParts[2] = 'latest';
      return urlParts.join('/');
    },
    isFoyer: function(navitem) {
      // Detects whether the page is a foyer page.
      let foyer = false;
      if (navitem.href !== undefined) {
        const url = new URL(navitem.href, window.location.origin);
        const chunks = url.pathname.split('/');
        if (chunks.length === 4) {
          // topic foyer for the topic, product foyer for the product page.
          foyer = (chunks[3].indexOf('index.html') === -1) ? 'section-foyer' : 'product-foyer';
        }
      }
      return foyer;
    },
    mapPageState: function(navarray, id) {
      // This searches for the id in the nav tree, and then sets up the back, forward etc.

      const lastParent = [];
      Pubnav.pagestate.count++;
      for (let i = 0; i < navarray.length; i++) {
        if (navarray[i].id === id) {
          // We found it!
          this.pagestate.current = navarray[i];
          this.pagestate.prev = (i - 1 >= 0) ? navarray[i - 1] : ''; // TODO!!! - This should really be the parent if there is no prior sibling, but watch out for the autoredirection down on empty parents.
          navarray[i].foyer = this.isFoyer(navarray[i]);

          if (typeof navarray[i].sub === 'object') {
            this.pagestate.children = Utils.flatten(navarray[i].sub); // Not currently being flattened.
            this.pagestate.next = navarray[i].sub[0];
          } else if (i + 1 < navarray.length) {
            // no kids, so look for next item at the same level
            this.pagestate.next = navarray[i + 1];
          }
          this.pagestate.depth = 1;
          this.pagestate.breadpath.unshift(navarray[i]);
          return true;
        } else {
          // Check if the item has kids....
          if (typeof navarray[i].sub === 'object') {
            if (this.mapPageState(navarray[i].sub, id)) { // If the kid was it!
              if (i + 1 < navarray.length && Utils.isEmpty(this.pagestate.next)) {
                // This sets the next page at the parent level by default.. which will probably get overridden again at the lower level.
                this.pagestate.next = navarray[i + 1];
              }
              // Detect if it's a foyer page
              navarray[i].foyer = this.isFoyer(navarray[i]);

              // Add item to breadpath.
              this.pagestate.breadpath.unshift(navarray[i]);
              if (this.pagestate.depth === 1) {
                this.pagestate.parent = navarray[i];
              }
              this.pagestate.depth++;
              return true;
            } else {
              Pubnav.pagestate.count--;
            }
          }
        }
      }
      return false; // didn't find a matching id?
    },
    updatePageState: function() {
      // Update the page elems based on current situation!

      // Title
      if (typeof this.pagestate.current.text !== 'undefined') {
        document.title = this.pagestate.current.text;
      } else {
        document.title = $('#content h1').text();
      }

      /* Prev
             if (typeof this.pagestate.prev === "object") {
                 $(".cpage").addClass("hasprev");
                 $(".cpage .prev a").attr("href", this.pagestate.prev.href).html(`&laquo; ${this.pagestate.prev.text}`);
                 $(".cpage .short-prev a").attr("href", this.pagestate.prev.href);
             } else {
                 $(".cpage").removeClass("hasprev");
             }
       */

      // Next
      if (typeof this.pagestate.next === 'object' && !Utils.isEmpty(this.pagestate.next)) {
        // Edge case... sometimes the "next" item might be a parent category... without a URL.. in which case, the first subchild is probably what we want.
        if (typeof this.pagestate.next.href === 'undefined' && typeof this.pagestate.next.sub === 'object') this.pagestate.next = this.pagestate.next.sub[0];

        $('.cpage').addClass('hasnext');
        $('.cpage .next a').attr('href', this.pagestate.next.href).html(`${this.pagestate.next.text} &raquo;`);
        $('.cpage .short-next a').attr('href', this.pagestate.next.href);
      } else {
        $('.cpage').removeClass('hasnext');
      }

      // I've modified this so that the topic is the only breadcrumb at the top of the content page.
      if (this.pagestate.breadpath.length >= 2) {
        const x = this.pagestate.breadpath[1].foyer ? 2 : 1;
        let output = '';
        if (typeof this.pagestate.breadpath[x] !== 'undefined') {
          output += `<a href="${this.pagestate.breadpath[x].href}">${this.pagestate.breadpath[x].text}</a>`;
        }
        if (this.pagestate.pdfurl !== '') {
          output += `<a href="${this.pagestate.pdfurl}" target="_blank" class="pdficon"><i class="fa fa-file-pdf"></i></a>`;
        }
        $('.inner-breadcrumbs').html(output).fadeTo(200, 1);
      } else {
        $('.inner-breadcrumbs').fadeTo(200, 0).html('');
      }
      /* Inner Breadcrumbs
            if (this.pagestate.breadpath.length >= 3) {
                let output = "";
                for (let i=2; i < this.pagestate.breadpath.length; i++ ) {
                    if (i >= 3) {
                        output += " &rang; ";
                    }
                    output += `<a href="${this.pagestate.breadpath[i].href}">${this.pagestate.breadpath[i].text}</a>`;
                }
                $(".inner-breadcrumbs").html(output).fadeTo(200, 1);
            } else {
                $(".inner-breadcrumbs").fadeTo(200, 0);
            }
       */

      // Ensure the navigation menu is expanded and highlighting this page.
      if (typeof Pubnav.pagestate.parent !== 'undefined' && !Pubnav.navstate.includes(Pubnav.pagestate.parent.id)) {
        Pubnav.navstate.push(Pubnav.pagestate.parent.id);
      }

      for (const id of Pubnav.navstate) {
        this.expandNavElem(id);
      }

      // Put the right copyright at the bottom of the page.
      $('.copyright').html(`<a href="/common/html/legal.html">${Pubnav.pagestate.copyright}</a>`);

      // Outer Breadcrumbs... putting the topic title up top.
      if (this.pagestate.breadpath.length >= 2) {
        // Only if it's a topic title. Breadpath[0] is likely to be a category. Breadpath[1] Might be the topic title.
        if (this.pagestate.breadpath[1].foyer === 'section-foyer') {
          $('.bread-category').html(`<a href="${this.pagestate.breadpath[1].href}">${this.pagestate.breadpath[1].text}</a>`);
        }
      }

      // Set the active item in the menu.
      $('.ctoc li').removeClass('active');
      $('.ctoc li').find(`[data-navid="${this.pagestate.current.id}"]`).addClass('active');
    },
  };

  const ProductDrawer = {
    data: {},
    init: function() {
      if (!$('.product-drawer .products').length) $('.product-drawer').append('<ul class="products"></ul>');
      if (!$('.product-drawer .open-close').length) $('.product-drawer').append('<div class="open-close">»</div>');

      this.bootstrap(); // Actually, we can't fire this until the WhoAmI function has fired, so moved the init call over there.
    },
    bootstrap: function() {
      // Load in the versions.json
      const navfile = '/product-drawer.json';
      fetch(navfile)
          .then((resp) => resp.json()) // Transform the data into json
          .then((data) => {
            ProductDrawer.data = data; // Save the whole thingy in case we need it again.

            let output = '';
            data.forEach(function(cat) {
              let innerOutput = '';
              let open = '';
              cat.products.forEach(function(el) {
                let active = '';
                if (el) {
                  if (WhoAmI.version.url) {
                    if (WhoAmI.version.url &&
                        (WhoAmI.version.url.split('/').slice(1, 2).join('/') === el.href.split('/').slice(1, 2).join('/'))) {
                      active = 'active ';
                      open = 'expanded ';
                    }
                  }
                  innerOutput += `<li class="${active}"><a href="${el.href}"><img src="${el.icon ? el.icon : '/common/img/mini_icons/icon-studio.png'}" title="${el.text}"><span class="text">${el.text}</span></a></li>`;
                }
              });
              output += `<li class="cat ${open}"><span class="cat-title">${cat.title}</span><ul class="items">${innerOutput}</ul></li>`;
            });

            $('.product-drawer .products').append(output);
            this.bindEvents();
          });
    },
    bindEvents: function() {
      $('.cat').on('click', function() {
        $('.cat').removeClass('expanded');
        $(this).addClass('expanded');
      });
      $('.product-drawer .open-close').on('click', function() {
        if ($('.product-drawer').hasClass('open')) {
          $('.product-drawer').css('width', '50px').removeClass('open');
          $('.cmain').removeAttr('style'); // TODO!!! - A bit brittle if something else codes styles to this element!
          $('.chead').removeAttr('style');
          $('.logo').show();
          $(this).html('&raquo;'); // TODO... delay this .5s
        } else {
          $('.product-drawer').css('width', '210px').addClass('open');
          // setTimeout(function() { $(".product-drawer").addClass("open")}, 500);
          $('.logo').hide();
          $('.cmain').css('marginLeft', '210px');
          $('.chead').css('left', '210px');
          $(this).html('&laquo;');
        }
      });
    },
  };

  const Search = {
    cpage: '', // This will hold the page info when detached.
    init: function() {
      // Inject Search Containers...
      const searchHtml = `<div class="search">
        <i class="search-close fas fa-times"></i>
        <form class="searchform">
        <input type="text" placeholder="Search Documentation" class="searchterm">
        <i class="fas fa-search" class="submit"></i>
        </form>
        </div>
        <div class="launch-search"><i class="fas fa-search"></i></div>
        <div class="launch-pubnav"><i class="fas fa-bars"></i></div>`;

      const overlayHtml = `<div class="lucene-overlay">
        <div class="lucene-results">
        <div class="close-search"><a href="#" class="close-btn">
        <i class="fa fa-times-circle"></i></a></div>
        <h1>Search Results</h1>
        <div class="results"></div>
        <div class="fail"></div>
        <div class="waiting"><img src="/common/img/spinner.svg"></div>
        <div class="more-results">
        <a href="" data-nextcursormark="" data-searchterm="" class="more-link">
        <i class="fa fa-arrow-circle-o-down"></i>More</a></div>
        <p style="text-align:center;">
        <a href="" class="close-search-results grey btn">Close Search Results</a>
        </p>
        </div>
        </div>`;

      if (!$('.chead .search').length) $('.chead').append(searchHtml);
      if (!$('.cmain .lucene-overlay').length) $('.cmain').append(overlayHtml);

      // Figure out what product I am... else
      this.query = null;
      this.bindEvents();
    },

    // Configs the search functionality...
    searchURL: function() {
      const sserver = ['nool', 'yoop'];
      return 'https://' + sserver[Math.floor(Math.random() * sserver.length)] +
                '.td.hortonworks.com/solr/dhc/query';
      // return "/common/sample-data/handpicked.json"
      // return "/common/sample-data/solr1.json"
    },

    bindEvents: function() {
      $('.searchform').on('submit', this.launchSearch.bind(this));
      $('.searchform i.submit').on('click', function() {
        $(this).closest('.searchform').trigger('submit');
      });

      $('.lucene-overlay .close-btn, .close-search-results').on('click', this.hideSearch.bind(this));
      $('.lucene-results .more-link').on('click', this.loadMoreResults.bind(this));

      // SEARCH DRAWER
      $('.launch-search').on('click', function() {
        $(this).hide();
        $('.search').show().addClass('open');
      });
      $('.search-close').on('click', function() {
        $('.search').hide().removeClass('open');
        $('.launch-search').show();
      });
    },

    formatReleaseNumber: function(version, shorten) {
      /* IGNORE THIS in transition to Cloudera
       * Bi-way formatting of release number.

            shorten = shorten ? true : false;
            let release = version.toString().split(".");
            if (release.length == 4 && shorten) {
                for (let i = 3; i = 0; i--) {
                    if (release[i] == "0") {
                        release.pop();
                    }
                }
            } else {
                for (let i = 0; i < 4; i++) {
                    if (!release[i]) {
                        release[i] = 0;
                    }
                }
            }
            version = release.join(".");
       */

      return version;
    },

    filterSearchTerm(term) {
      term = term.replace(/^\s*(Who|What|Where|Why|How|When)\s+/i, '');
      return term;
    },

    /* Launch a new search from the main search field */
    launchSearch: function(evt) {
      evt.preventDefault();
      const current = evt ? evt.currentTarget : false;
      const searchTerm = this.filterSearchTerm($(current).find('.searchterm').val());

      // For better or worse, hide the content and show the search overlay.
      $('.cpage').hide();
      $('.lucene-overlay').show();

      this.fireQuery(searchTerm);
    },

    hideSearch: function(evt) {
      // console.log("hideSearch");
      $('.lucene-overlay').hide();
      $('.cpage').show();
    },

    loadMoreResults: function(evt) {
      evt.preventDefault();
      const current = evt ? evt.currentTarget : false;
      this.fireQuery($(current).data('searchTerm'), $(current).data('nextCursorMark'));
    },

    fireQuery: function(searchterm, nextCursorMark) {
      const that = this;
      const q = searchterm == null ? filterSearchTerm($('#overlay-search .searchterm').val()) : searchterm;
      // For Example: fq = "((product:\\\"Ambari\\\" AND release:2.7.3.0))",
      let fq = WhoAmI.search_name ? `(search-name:"${WhoAmI.search_name}" AND release:${encodeURIComponent(that.formatReleaseNumber(WhoAmI.version.title))})` : '';
      const rows = 10;
      let params = {};
      const defaults = '&sort=score desc,id asc&facet=true&facet.field=product&facet.field=release&facet.field=booktitle&hl=true&hl.fl=text&fl=id,score,url,product,release,booktitle,title';
      const searchUrl = this.searchURL();
      // solr_url = "//localhost:8983/solr/corehw/query?";

      // Build the Query from the searchterm and filters that are in the HTML.
      params = {
        wt: 'json',
        q: q,
      };

      if (fq) {
        params.fq = `(${fq})`;
      }

      if (nextCursorMark) {
        params.cursorMark = nextCursorMark;
      }

      this.query = $.ajax({
        type: 'GET',
        url: searchUrl,
        data: params,
        dataType: 'jsonp',
        jsonp: 'json.wrf',
        beforeSend: function() {
          if (!nextCursorMark) {
            $('.lucene-results .results').hide();
          }
          $('.lucene-results .waiting').show();
          $('.lucene-results .fail').hide();
          if (Search.query != null) {
            Search.query.abort();
          }
        },
        success: function(response) {
          const outputHolder = [];
          let output = '';
          let result = '';

          // ToDo : Group by book
          if (response.response.docs.length) {
            $.each(response.response.docs, function(index, item) {
              // Check there is an associated entry with the result.
              if (!$.isEmptyObject(response.highlighting[item.url])) {
                // First add in the highlighting to the item list. Escape HTML,
                item.text = response.highlighting[item.url].text.join('').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

                // Add back in <b> tags which are there for highlighting
                item.text = item.text.replace(/&lt;b&gt;/g, '<b>').replace(/&lt;\/b&gt;/g, '</b>');

                let url = item.url[0];
                if (!url.match(/^http/)) {
                  url = `https://docs.cloudera.com${item.url}`;
                }
                result = `<div class="result">
                    <div class="title"><a href="${url}"><span class="chapter">${item.title}</span></a></div>
                    <div class="excerpt">${item.text}</div>
                    <div class="url"><a href="${url}">${item.url}</a></div>
                  </div>`;

                outputHolder[item.booktitle] = outputHolder[item.booktitle] || [];
                outputHolder[item.booktitle].push(result);
              }
            });

            for (const book in outputHolder) {
              // TODO!!! - Sort by book is nice, but we need to integrate with DITA structure, and make sure the book is readable
              if (outputHolder.hasOwnProperty(book)) {
                result = `<div class="book-group">
                  <div class="book">${(book !== 'undefined' ? book : '')}</div>`;
                for (let i = 0; i < outputHolder[book].length; i++) {
                  result += outputHolder[book][i];
                }
                result += '</div>';
                output += result;
              }
            }

            $('.lucene-results .waiting').hide();
            if ('cursorMark' in response.responseHeader.params) {
              $('.lucene-results .results').append(output);
            } else {
              $('.lucene-results .results').html(output).show();
            }
            $('.more-results').show();
            $('.lucene-results .more-link').data('nextCursorMark', response.nextCursorMark).data('searchTerm', response.responseHeader.params.q);
          } else {
            // No results... this could be because there were none, or there were no more.
            $('.lucene-results .waiting').hide();
            $('.more-results').hide();
            let errMsg = '';
            if (response.response.numFound > 0) {
              // There's no more.
              errMsg = '<h2><i class="fa fa-frown-o"></i> Sorry, No more results were found</h2>';
              errMsg += '<p>Check your search term, and ensure that you have the appropriate product filter selected';
            } else {
              // There's none.
              $('.lucene-results .results').hide();
              errMsg = '<h2><i class="fa fa-frown-o"></i> Sorry, No results were found</h2>';
              errMsg += '<p>Check your search term, and ensure that you have the appropriate product filter selected';
            }
            $('.lucene-results .fail').html(errMsg).show();
          }
        },
      })
          .done(function(data) {
          })
          .fail(function(jqXHR, textStatus) {
            $('.lucene-results .waiting').hide();
            $('.lucene-results .results').hide();
            $('.lucene-results .fail').show();
            let errMsg = '<h2><i class="fa fa-frown-o"></i> Uh-oh, the search request failed</h2>';
            errMsg += `<p>${textStatus}</p>`;

            $('.lucene-results .fail').html(errMsg);
          })
          .always(function() {
            // complete
          });
    },
  };

  // Example Toolbelt Functions
  const Utils = {
    stripAndCollapse: function(value) {
      // Strip and collapse whitespace according to HTML spec
      // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
      const tokens = value.match(/[^\x20\t\r\n\f]+/g) || [];
      return tokens.join(' ');
    },
    store: function(namespace, data) {
      if (arguments.length > 1) {
        return localStorage.setItem(namespace, JSON.stringify(data));
      } else {
        const store = localStorage.getItem(namespace);
        return (store && JSON.parse(store)) || [];
      }
    },
    slugify: function* (str) {
      str = str.replace(/^\s+|\s+$/g, ''); // trim
      str = str.toLowerCase();

      // remove accents, swap ñ for n, etc
      const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
      const to = 'aaaaeeeeiiiioooouuuunc------';
      for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
          .replace(/\s+/g, '-') // collapse whitespace and replace by -
          .replace(/-+/g, '-'); // collapse dashes

      return str;
    },
    flatten: function(arr, subkey) {
      // TODO! Flatten a nested array with subs, into a consecutive array....
      // we'll use this to make it easier to jump forwards and backwards.
      return arr;
    },
    makeIdFromHref: function(href) {
      // Clever way to parse incomplete URLs - https://makandracards.com/makandra/29377-the-easiest-way-to-parse-urls-with-javascript
      const parser = document.createElement('a');
      parser.href = href; // set the URL you want to parse (resolving relative paths in the context of the current URL)
      const chunks = parser.pathname.split('/');

      let id = chunks[chunks.length - 1];
      id = id.substring(0, id.indexOf('.')); // dump anything after a period... .html / .php etc.

      if (chunks.length > 5) {
        id = `${chunks[chunks.length - 3]}-${id}`;
      }
      if (parser.hash) {
        id = `${id}-${parser.hash.substring(1)}`;
      }
      return id;
    },
    isEmpty: function(obj) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    },
    formatCopyright: function(content) {
      /**
       * Formats a copyright string.
       * Assumes digit groups are 4-digit years.
       * Sorts years, removes duplicates, then formats for Cloudera, Inc.
       * @param {String} content - Copyright statement, possibly broken
       * @returns {String} Copyright string for Cloudera, Inc.
       */
      let out = '';
      if (!content || !content.match(/20\d\d/)) {
        content = `${new Date().getFullYear()}`;
      }
      content.split(/\D+/)
          .filter((v) => {
            return v.length > 1;
          })
          .filter((v, i, s) => {
            return s.indexOf(v) === i;
          })
          .sort()
          .forEach((v, i, s) => {
            if (i > 0) {
              if (parseInt(v) === parseInt(s[i - 1]) + 1) {
                out = `${out}\u2013${v}`;
              } else {
                out = `${out}, ${v}`;
              }
            } else {
              out = v;
            }
          });
      out = out.replace(/(?:^(\d{4})\u2013(\d{4},))/, '$1, $2');
      out = out.replace(/(?:(\s\d{4})\u2013(\d{4},))/g, '$1, $2');
      out = out.replace(/(?:(\d{4})(?:\u2013\d{4})+(\u2013\d{4}))/g, '$1$2');
      return `© ${out} by Cloudera, Inc. All rights reserved.`;
    },
  };

  // Series of functions and event handlers to be attached to content on the page.
  const Transforms = {
    bindEvents: function($content) {
      // Add event handlers here.
      // Example:
      // $content.find('a').on('click', function(evt) {
      //     evt.preventDefault();
      //     console.log('I clicked a link');
      // });

      $content.find('.tab-win a').click(function(e) {
        e.preventDefault();
        const p = $(this).closest('.tab-win');
        const i = $(this).attr('data-target');

        $(this).closest('ul').find('li').removeClass('active');
        $(this).parent().addClass('active');
        $(p).find('.tabcontents div').hide();
        $(p).find(`#${i}`).fadeIn('slow');
      });
    },
    filterStuff: function() {
      filterStuff($);
    },
    cdocUtils: function() {
      cdocUtils($);
    },
    deTarget: function() {
      Array.from(document.querySelectorAll('a[target]')).forEach((at) => {
        if (!at.href.match(/docs(?:-dev|-stage)?\.cloudera\.com/) && at.href.includes('//')) {
          return;
        }
        at.removeAttribute('target');
      });
    },
    objectForYouTube: function() {
      /**
       * Transforms DITA/HTML4 object element to YouTube-preferred iframe markup.
       * DITA: <object data="https://www.youtube.com/embed/WhOyVz3VJ7c"></object>
       */
      const ALLOW = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      const WIDTH = 560;
      const HEIGHT = 315;
      document.querySelectorAll('object').forEach((o) => {
        if (o.data.match(/\/\/www\.youtube\.com\//)) {
          const iframe = document.createElement('iframe');
          iframe.setAttribute('frameborder', 0);
          iframe.setAttribute('allow', ALLOW);
          iframe.setAttribute('allowfullscreen', 'allowfullscreen');
          iframe.src = o.data;
          o.width ? iframe.width = o.width : iframe.width = WIDTH;
          o.height ? iframe.height = o.height : iframe.height = HEIGHT;
          o.parentNode.replaceChild(iframe, o);
        }
      });
    },
    tabs: function() {
      $('.tab-win').find('ul li:first').addClass('active');
      $('.tab-win').find('.tabcontent').hide();
      $('.tab-win').find('.tabcontent:first').show();
    },
    test: function($content) {
      $content.find('a').css('backgroundColor', 'red');
    },
    run: function($content) {
      /*
       * Accepts a jQuery element as a parameter, and applies the following filters to it.
       *
       * If you want to reference just the element id directly without using jQuery, it will probably be #content,
       * but to be safe you might want to use $content[0].id;
       */
      // this.test($content);
      this.bindEvents($content);
      this.deTarget();
      this.objectForYouTube();
      this.tabs();
      this.filterStuff();
      this.cdocUtils();
    },
  };

  WhoAmI.init();
  Pubnav.init();
  // ProductDrawer.init(); - we can't fire this until the WhoAmI function has fired, so moved the init call over there.
  Search.init();
  Transforms.run($('#content')); // Execute any filters we need to make to the body content. (Code formatting, tabs, JS highlighting, Youtube Embeds etc)
}(jQuery));
