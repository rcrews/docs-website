// These import statements are currently only used for eslint formatting
// and checking. E.g., uncomment them before running eslint and
// recomment them after.
// import {$, jQuery} from 'jquery-3.4.1.min.js';

const DEFAULT_ICON = '/common/img/mini_icons/icon-studio.png';

/**
 * Builds and operates the far left product drawer
 * Expects a JSON file at /product-drawer.json
 *
 * @author James Dilworth <james@jamesdilworth.com>
 */
class ProductDrawer {
  constructor() {
    // this.data = {};

    if (!$('.product-drawer .products').length) {
      $('.product-drawer').append('<ul class="products"></ul>');
    }
    if (!$('.product-drawer .open-close').length) {
      $('.product-drawer').append('<div class="open-close">»</div>');
    }

    this.bootstrap();
  }

  /**
   * Load versions.json, transform data, and insert into page
   */
  bootstrap() {
    const navfile = '/product-drawer.json';
    fetch(navfile)
        .then(resp => resp.json()) // Parse response as JSON
        .then(data => {
          // this.data = data; // Save, in case we need it again.

          let output = '';
          data.forEach(cat => {
            let innerOutput = '';
            let open = '';
            cat.products.forEach(el => {
              let active = '';
              if (el && WhoAmI.version.url &&
                  (WhoAmI.version.url.split('/').slice(1, 2).join('/') ===
                    el.href.split('/').slice(1, 2).join('/'))) {
                active = 'active';
                open = 'expanded';
              }
              innerOutput += `<li class="${active}"><a href="${el.href}"
                ><img src="${el.icon ? el.icon : DEFAULT_ICON}"
                title="${el.text}"><span class="text"
                >${el.text}</span></a></li>`;
            });
            output += `<li class="cat ${open}"><span class="cat-title"
              >${cat.title}</span><ul class="items">${innerOutput}</ul></li>`;
          });

          $('.product-drawer .products').append(output);
          this.bindEvents();
        });
  }

  bindEvents() {
    $('.cat').on('click', function() {
      $('.cat').removeClass('expanded');
      $(this).addClass('expanded');
    });
    $('.product-drawer .open-close').on('click', function() {
      if ($('.product-drawer').hasClass('open')) {
        $('.product-drawer').css('width', '50px').removeClass('open');
        // TODO - A bit brittle if something else codes styles to this element!
        $('.cmain').removeAttr('style');
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
  }
}
