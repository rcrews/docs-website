const DEFAULT_ICON = '/common/img/mini_icons/icon-studio.png';

/**
 * Builds and operates the far left product drawer
 * Expects a JSON file at /product-drawer.json
 *
 * @author James Dilworth <james@jamesdilworth.com>
 */
class ProductDrawer {

  constructor() {
    if (!document.querySelector('.product-drawer .products')) {
      document.querySelector('.product-drawer')
          .insertAdjacentHTML('beforeend', '<ul class="products"></ul>');
    }
    if (!document.querySelector('.product-drawer .open-close')) {
      document.querySelector('.product-drawer')
          .insertAdjacentHTML('beforeend', '<div class="open-close">»</div>');
    }

    this.bootstrap();
  }

  /**
   * Load versions.json, transform data, and insert into page
   */
  bootstrap() {
    fetch('/product-drawer.json')
        .then(resp => resp.json()) // Parse response as JSON
        .then(data => {
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

          document.querySelector('.product-drawer .products')
              .insertAdjacentHTML('beforeend', output);
          this.bindEvents();
        });
  }

  bindEvents() {
    document.querySelectorAll('.cat')
        .forEach(function(e) {
          e.addEventListener('click', function() {
            document.querySelectorAll('.cat').forEach(cat => {
              cat.classList.remove('expanded');
            });
        this.classList.add('expanded');
        });
      });
    document.querySelector('.product-drawer .open-close')
        .addEventListener('click', function() {
      if (document.querySelector('.product-drawer').classList.contains('open')) {
        document.querySelector('.product-drawer').style.cssText = 'width:50px';
        document.querySelector('.product-drawer').classList.remove('open');
        // TODO - A bit brittle if something else codes styles to this element!
        document.querySelector('.cmain').removeAttribute('style');
        document.querySelector('.chead').removeAttribute('style');
        document.querySelector('.logo').style.cssText = 'display:block';
        this.textContent = '»'; // TODO... delay this .5s
      } else {
        document.querySelector('.product-drawer').style.cssText = 'width:210px';
        document.querySelector('.product-drawer').classList.add('open');
        // setTimeout(function() { $(".product-drawer").addClass("open")}, 500);
        document.querySelector('.logo').style.cssText = 'display:none';
        document.querySelector('.cmain').style.cssText = 'margin-left:210px';
        document.querySelector('.chead').style.cssText = 'left:210px';
        this.textContent = '«';
      }
    });
  }
}
