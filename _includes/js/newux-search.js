// These are currently only used for eslint formatting and checking.
// E.g., uncomment them before running eslint and recomment them after.
// import {$, jQuery} from 'jquery-3.4.1.min.js';

const SEARCH_HTML = `<div class="search">
  <i class="search-close fas fa-times"></i>
  <form class="searchform">
  <input type="text" placeholder="Search Documentation" class="searchterm">
  <i class="fas fa-search" class="submit"></i>
  </form>
  </div>
  <div class="launch-search"><i class="fas fa-search"></i></div>
  <div class="launch-pubnav"><i class="fas fa-bars"></i></div>`;

const OVERLAY_HTML = `<div class="lucene-overlay">
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

/**
 * Builds and operates the search result page overlay.
 *
 * @author James Dilworth <james@jamesdilworth.com>
 */
class Search {
  constructor() {
    this.cpage = '';

    this.init();
  }

  init() {
    if (!$('.chead .search').length) $('.chead').append(SEARCH_HTML);
    if (!$('.cmain .lucene-overlay').length) $('.cmain').append(OVERLAY_HTML);

    // Figure out what product I am... else
    this.query = null;
    this.bindEvents();
  }

  searchURL() {
    const sserver = ['nool', 'yoop'];
    return 'https://' + sserver[Math.floor(Math.random() * sserver.length)] +
              '.td.hortonworks.com/solr/dhc/query';
    // return "/common/sample-data/handpicked.json"
    // return "/common/sample-data/solr1.json"
  }

  bindEvents() {
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
  }

  /* IGNORE THIS in transition to Cloudera
   * Bi-way formatting of release number.
   */
  formatReleaseNumber(version, shorten) {
    /*
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
  }

  filterSearchTerm(term) {
    term = term.replace(/^\s*(Who|What|Where|Why|How|When)\s+/i, '');
    return term;
  }

  launchSearch(evt) {
    evt.preventDefault();
    const current = evt ? evt.currentTarget : false;
    const searchTerm = this.filterSearchTerm($(current).find('.searchterm').val());

    // For better or worse, hide the content and show the search overlay.
    $('.cpage').hide();
    $('.lucene-overlay').show();

    this.fireQuery(searchTerm);
  }

  hideSearch(evt) {
    // console.log("hideSearch");
    $('.lucene-overlay').hide();
    $('.cpage').show();
  }

  loadMoreResults(evt) {
    evt.preventDefault();
    const current = evt ? evt.currentTarget : false;
    this.fireQuery($(current).data('searchTerm'), $(current).data('nextCursorMark'));
  }

  fireQuery(searchterm, nextCursorMark) {
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
    params = { wt: 'json', q: q };

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
        if (this.query != null) {
          this.query.abort();
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
  }
}
