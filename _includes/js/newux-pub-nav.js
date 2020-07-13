// These are currently only used for eslint formatting and checking.
// E.g., uncomment them before running eslint and recomment them after.
// import {$, jQuery} from 'jquery-3.4.1.min.js';

const COPYRIGHT = `&copy; ${new Date().getFullYear()} by Cloudera, Inc. All rights reserved.`;

/**
 * Builds and operates the page left nav.
 * Expects a JSON file at ../../navigation.json
 *
 * @author James Dilworth <james@jamesdilworth.com>
 */
class PubnavClass {
  constructor() {
      this.nav_tree = []; // Will hold the full, cleaned, nav JSON file
      this.product = ''; // Holds a unique name for the product we're in, which is used as a key for saving the menu.
      this.pagestate = { // Will hold the current state of the page.
        current: {},
        prev: {},
        next: {},
        depth: 0, // How many layers deep we are.
        breadpath: [], // Array of Parents... in descending order.
        children: [], // Flattened Array of Subs }
        pdfurl: '',
        copyright: COPYRIGHT,
        count: 0,
      }
      this.navstate= []; // Holds the list of open nav items in the menu... used to maintain state between loads.
      this.is_hash_link = false; // Used as a flag to work around the hashlinks also firing the popstate.
      this.clicktrack = 0; // Used to stop the loadContent function from racing if the nav.json and fiiles are incorrect.

      this.setupNav();
    }

  bindEvents() {
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
    }

  handleCollapseAll(e) {
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
    }

  handleNavOpen(evt) {
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
    }

  handleNavContract(evt) {
      if ($(this).parent('li').hasClass('open')) {
        evt.stopPropagation();
        const id = $(this).parent('li').data('navid');
        Pubnav.contractNavElem(id);
      }
    }

  handleNewPageRequest(e) {
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
    }

  handleMobileToggle(e) {
      if ($('.pubmenu').hasClass('open')) {
        // Nav closed... open it.
        Pubnav.mobileClose();
      } else {
        // Nav is open. Close it....
        Pubnav.mobileOpen();
      }
    }

  mobileOpen() {
      $('.pubmenu').addClass('open');
      $('.cpage').fadeOut();
      $('.launch-pubnav i').removeClass('fa-bars').addClass('fa-times');
    }

  mobileClose() {
      $('.pubmenu').removeClass('open');
      $('.cpage').fadeIn();
      $('.launch-pubnav i').removeClass('fa-times').addClass('fa-bars');
    }

  setupNav() {
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
      this.pagestate.copyright = Utils.formatCopyright(copyright);
    } else {
      this.pagestate.copyright = COPYRIGHT;
    }

    if (!$('.copyright').length) {
      $('.cpage').append(`<div class="copyright"><a href="/common/html/legal.html">${this.pagestate.copyright}</a></div>`);
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
        .then(resp => resp.json()) // Transform the data into json
        .then(data => {
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
  }

  loadContent(url, hash, updateHistory) {
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
          new Transforms($content); // Re-apply filters and event handlers to the new content.
          Pubnav.updatePageState();
        } else {
          // We're not ready yet.
          return false;
        }
      }

      // $(".maincontent").append('<div id="content-spinner"><i class="fas fa-circle-notch fa-spin"></i></div>');
      // Fade out the current content.
      $content.fadeTo(200, 0, () => {
        faded = true;
        swapContent();
      });

      // TODO... do a check to see that we're on the same domain.
      const selector = '#content'; // This is the selector of the content we want to grab.

      jQuery.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
      }).done(responseText => {
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
      }).fail((jqXHR, status, error) => {
        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
        complete = true;
        elems[0] = `<h1>Load error</h1>
          <p>We're not able to get the page you requested.
          Most likely we planned a page for this location,
          but it's not ready yet.</p>
          <p style="font-size: 85%">${status} ${jqXHR.statusText}</p>
          <p>Choose a different topic from the left or find one using search.</p>`;
        swapContent();
      });
    }

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
    }

  createHtmlTree(tree, level) {
      if (typeof level === 'undefined') {
        level = 1;
      }
      let html = '<ul>';
      tree.forEach(item => {
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
    }

  expandNavElem(id) {
      const $this = $(`.ctoc li[data-navid="${id}"]`);

      // If it's already open, ignore.
      if ($this.hasClass('open')) {
        return true;
      }

      // Collapse other menu items at the same level as this one:
      const level = $this.data('level');
      if (level > 1) {
        $(`.ctoc li.open[data-level="${level}"]`).each(() => {
          if ($(this).find('.active').length === 0) {
            // As long as it's not the parent of an active element.
            const id = $(this).data('navid');
            Pubnav.contractNavElem(id);
          }
        });
      }

      // Now expand this one..
      $this.addClass('open');
      setTimeout(() => {
        $this.addClass('sesame');
      }, 5); // This is a little hack to help the slide-down effect on the menu. The transitions don't actually work if they come right after display:block being made.

      // Ensure the parents are open too.
      $this.parents('.ctoc li:not(.open)').each(() => {
        const $parent = $(this);
        if ($parent.data('level') > 1) {
          $parent.addClass('open');
          setTimeout(() => {
            $parent.addClass('sesame');
          }, 5); // This is a little hack to help the slide-down effect on the menu. The transitions don't actually work if they come right after display:block being made.

          const parentId = $parent.data('navid');
          if (!Pubnav.navstate.indexOf(parentId)) {
            Pubnav.navstate.push(parentId);
            localStorage.setItem(`${Pubnav.product}_navstate`, Pubnav.navstate);
          }
        }
      });
    }

  contractNavElem(id) {
      // Contract the elem....
      // $(this).text("\uf107").siblings("ul").parent("li").removeClass("open sesame");
      const $elem = $('.ctoc').find(`li[data-navid=${id}]`);
      $elem.removeClass('sesame');

      // Again the hack to hide the item after compression.... I think we could do this with keyframes instead. https://jsfiddle.net/jalbertbowdenii/mHRb8/
      setTimeout(() => {
        $elem.removeClass('open');
      }, 320);

      // Update State
      const index = Pubnav.navstate.indexOf(id);
      if (index > -1) {
        Pubnav.navstate.splice(index, 1);
      }
      localStorage.setItem(`${Pubnav.product}_navstate`, Pubnav.navstate);
    }

  requestNewPage(url, hash, updateHistory) {
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
    }

  getNestedItemBy(key, value, arr) {
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
    }

  makeLatestURL(url) {
      // Take a URL like /runtime/7.0.0/topic/item_name.html and convert it to runtime/latest/topic/item_name.html
      const urlParts = url.split('/');
      if (url.match(/HDPDocuments/)) {
        return urlParts.join('/');
      }
      urlParts[2] = 'latest';
      return urlParts.join('/');
    }

  isFoyer(navitem) {
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
    }

  mapPageState(navarray, id) {
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
    }

  updatePageState() {
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
           } se {
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
    }
}
