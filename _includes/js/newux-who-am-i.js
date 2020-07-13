// These import statements are currently only used for eslint formatting
// and checking. E.g., uncomment them before running eslint and
// recomment them after.
// import {$, jQuery} from 'jquery-3.4.1.min.js';

/**
 * Tracks information about the library and version the page belongs to.
 *
 * @author James Dilworth <james@jamesdilworth.com>
 */
class WhoAmIClass {
  constructor() {
    // We get this from the from the URL, or the meta-tag
    this.product_name = '';
    // This is used to pass the query on to the search engine.
    this.search_name = '';
    // We get this from the URL, or the meta tag.
    this.version = '';
    // This gets flagged if we are using the "latest" url.
    this.is_latest = false;
    // Populate this from versions.yaml
    this.versions = [];
    // The full versions.yaml jsonified.
    this.products = [];

    this.init();
  }

  setupVersions() {
    $('.bread-product').html(`<a href="${WhoAmI.version.url}">${WhoAmI.product_name}</a>`);

    // Change "Cloud" to the Cloud Symbol
    if (typeof WhoAmI.version.title === 'string' &&
        WhoAmI.version.title.trim().toLowerCase() === 'cloud') {
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
    WhoAmI.versions.forEach(el => {
      if (el) {
        output += `<li class="major"><a href="${el.url}">${el.title}</a>`;
        if (typeof el.minors === 'object') {
          output += '<ul class="minors">';
          el.minors.forEach(em => {
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
      $('.bread-version').append(`
        <i class="fa fa-angle-down selector"></i><ul class="version-select"></ul>`);
      $('.version-select').hide().html(output);
    }

    // Add Handlers
    $('.bread-version .selector').click(() => {
      const $this = $(this);
      if ($this.hasClass('fa-angle-down')) {
        $this.removeClass('fa-angle-down').addClass('fa-angle-up');
      } else {
        $this.removeClass('fa-angle-up').addClass('fa-angle-down');
      }
      $('.version-select').toggle();
    });

    // And now that's all done, let's set up the product drawer too.
    new ProductDrawer();
  }

  bootstrap() {
    // Load in the versions.json
    const navfile = '/versions.json';
    fetch(navfile)
        .then(resp => resp.json()) // Transform the data into json
        .then(data => {
          WhoAmI.products = data; // Save the whole thingy in case we need it again.

          // See if I can figure out what product loading page is in
          // from the product link.
          let myProductUrl = '';

          // Initially, we used the newux template to inject the product
          // name into the index pages. I don't think we're doing this
          // anymore
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
          // The url structure should be
          // /product-name/product-version/index.html
          const myProductUrlParts = myProductUrl.split('/');
          // If we're on a latest branch, we need to identify what we
          // really are.
          WhoAmI.is_latest = false;
          if (myProductUrlParts[2] === 'latest') {
            WhoAmI.is_latest = true;
            // This will not be found in the lookup below, because the
            // latest url doesn't existing in the versions. So can we
            // lookup based on something else?

            // Sub-pages have the version baked into the meta....
            // Product home pages also have the version in them, but in
            // a different place....
            // And foyer pages don't have a version in them at all.

            // We could do the lookup through the versions.yaml
            // Each product has a "latest-version" and a "latest-url"
            // parameter.
            // We can do that in the loop below.
          }

          // Make sure there's an index.html at the end of the url.
          myProductUrl = `/${myProductUrlParts[1]}/${myProductUrlParts[2]}/index.html`;
          // Walk the versions.yaml tree, figure out what
          // product/version I am based on the URL, and get the related
          // information for that product
          let found = false;
          let versions = [];

          for (let i = 0; i < data.length; i++) {
            // We only need to loop through the versions if we've not
            // found it.
            if (WhoAmI.is_latest) {
              // Special lookup based on the latest flag.
              if (typeof data[i]['latest-url'] !== 'undefined' && data[i]['latest-url'].replace(/^\/([^/]+).*/, '$1') === myProductUrl.replace(/^\/([^/]+).*/, '$1')) {
                // Ok, we found the right product, and from this can
                // deduce the right version.
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
              // If versions.yaml didn't quote the version number they
              // might now be integers missing the decimal point versus
              // strings
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
            // If we couldn't find a version in versions.yaml, might
            // still be able to get it from the HTML...
            WhoAmI.version = {
              title: $('.bread-version').length ? $('.bread-version').text() : '',
              url: $('.bread-product a').length ? $('.bread-product a')[0].href : '',
            };
          }

          this.setupVersions();
        });
  }

  init() {
    if (!$('.bread-product').length) {
      $('.chead .breadcrumbs').append('<span class="bread-product"></span>');
    }
    if (!$('.bread-version').length) {
      $('.chead .breadcrumbs').append('<span class="bread-version"></span>');
    }

    this.bootstrap();
  }
}
