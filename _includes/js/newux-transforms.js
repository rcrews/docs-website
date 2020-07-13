// These are currently only used for eslint formatting and checking.
// E.g., uncomment them before running eslint and recomment them after.
// import {$, jQuery} from 'jquery-3.4.1.min.js';
// import {cdocUtils} from 'cdoc-utils.js';
// import {filterStuff} from 'cdoc-filter.js';

/**
 * Dynamically change the page HTML.
 *
 * @author James Dilworth <james@jamesdilworth.com>
 */
class Transforms {
  constructor($content) {
    this.run($content);
  }

  /**
   * Add event handlers here.
   *
   * Example:
   * $content.find('a').on('click', function(evt) {
   *   evt.preventDefault();
   *   console.log('I clicked a link');
   * });
   */
  bindEvents($content) {
    $content.find('.tab-win a').click(function(e) {
      e.preventDefault();
      const p = $(this).closest('.tab-win');
      const i = $(this).attr('data-target');

      $(this).closest('ul').find('li').removeClass('active');
      $(this).parent().addClass('active');
      $(p).find('.tabcontents div').hide();
      $(p).find(`#${i}`).fadeIn('slow');
    });
  }

  tFilterStuff() {
    filterStuff($);
  }

  tCdocUtils() {
    cdocUtils($);
  }

  /**
   * Remove a@target attributes when linking to Cloudera docs sites.
   *
   * @author Robert Crews <rcrews@cloudera.com>
   */
  deTarget() {
    Array.from(document.querySelectorAll('a[target]')).forEach(at => {
      if (!at.href.match(/docs(?:-dev|-stage)?\.cloudera\.com/) && at.href.includes('//')) {
        return;
      }
      at.removeAttribute('target');
    });
  }

  /**
   * Transforms DITA/HTML4 object element to YouTube-preferred iframe markup.
   * DITA: <object data="https://www.youtube.com/embed/WhOyVz3VJ7c"></object>
   *
   * @author Robert Crews <rcrews@cloudera.com>
   */
  objectForYouTube() {
    const ALLOW = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    const WIDTH = 560;
    const HEIGHT = 315;
    document.querySelectorAll('object').forEach(o => {
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
  }

  /**
   * Tabbed window feature.
   * Event handlers are in bindEvents() above.
   *
   * @author Jason Davis
   */
  tabs() {
    $('.tab-win').find('ul li:first').addClass('active');
    $('.tab-win').find('.tabcontent').hide();
    $('.tab-win').find('.tabcontent:first').show();
  }

  /**  Example transformation */
  test($content) {
    $content.find('a').css('backgroundColor', 'red');
  }

  /**  Run all the things. */
  run($content) {
    this.bindEvents($content);
    this.deTarget();
    this.objectForYouTube();
    this.tabs();
    this.tFilterStuff();
    this.tCdocUtils();
  }
}
