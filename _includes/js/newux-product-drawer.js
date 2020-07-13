// These are currently only used for eslint formatting and checking.
// E.g., uncomment them before running eslint and recomment them after.
// import {$, jQuery} from 'jquery-3.4.1.min.js';

/**
 * Builds and operates the far left product drawer
 * Expects a JSON file at /product-drawer.json
 *
 * @author James Dilworth <james@jamesdilworth.com>
 */
class ProductDrawer {
  constructor() {
    this.data = {};

    this.init();
  }

  init() {
    if (!$('.product-drawer .products').length) $('.product-drawer').append('<ul class="products"></ul>');
    if (!$('.product-drawer .open-close').length) $('.product-drawer').append('<div class="open-close">»</div>');

    this.bootstrap(); // Actually, we can't fire this until the WhoAmI function has fired, so moved the init call over there.
  }

  bootstrap() {
    // Load in the versions.json
    const navfile = '/product-drawer.json';
    fetch(navfile)
        .then(resp => resp.json()) // Transform the data into json
        .then(data => {
          this.data = data; // Save the whole thingy in case we need it again.

          let output = '';
          data.forEach(cat => {
            let innerOutput = '';
            let open = '';
            cat.products.forEach(el => {
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
  }

  bindEvents() {
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
  }
}
