var CHOME = (function($) {
    'use strict';

    var Search = {
        // Configs the search functionality... this is a fork of the HWXDOCS stuff.
        searchURL: function() {
            let sserver = ["nool", "yoop"];
            return "https://" + sserver[Math.floor(Math.random() * sserver.length)] +
                ".td.hortonworks.com:8983/solr/dhc/query";
            // return "/common/sample-data/handpicked.json"
            // return "/common/sample-data/solr1.json"
        },

        init: function() {
            this.query = null;
            this.bindEvents();
        },

        bindEvents: function() {
            $('.searchform').on('submit', this.launchSearch.bind(this));
            $('.searchform i.submit').on('click', function() {
                $(this).closest('.searchform').trigger('submit');
            });

            $('body').on('click', this.clearVersionFilters); // Miscellaneous clicks on the body should reset the filters.

            $('.search-product-filter').on('click', this.toggleProductFilters);
            $('body').on('click', this.toggleProductFilters); // Cancel it out.

            $('.filters').on('click', this.clearVersionFilters);
            $('.filters .product').on('click', this.setOnlyThis);

            $('.lucene-container .close-btn').on( 'click', this.hideSearch.bind(this));
            $('.lucene-results .filter').on('click', this.updateFilters.bind(this));

            $('.lucene-results .versions>i').on('click', this.showVersionOptions.bind(this))
            $('.lucene-results .filterversion').on('click', this.updateFilterVersion.bind(this));
            $('.lucene-results .more-link').on('click', this.loadMoreResults.bind(this));
        },
        setOnlyThis: function(evt) {
            // Unselect all
            // Select this one.
        },
        toggleProductFilters: function(evt) {
            let $filters = $('.filters');

            if(typeof(evt) === 'undefined') {
                $filters.hide();
            } else if (evt.currentTarget.nodeName === 'BODY') {
                $filters.hide();
            } else {
                $filters.toggle();
                evt.stopPropagation();
            }

            if($filters.css('display') === 'block') {
                $filters.addClass('visible');
                $('.search-product-filter>i').removeClass('fa-angle-down').addClass('fa-angle-up');
            } else {
                $filters.removeClass('visible');
                $('.search-product-filter>i').removeClass('fa-angle-up').addClass('fa-angle-down');
            }

        },
        clearVersionFilters: function(evt) {
            // console.log('clear filters');
            $('.selector').hide();
            evt.stopPropagation();
        },

        filterSearchTerm: function(term) {
            term = term.replace(/^\s*(Who|What|Where|Why|How|When)\s+/i, '');
            return term;
        },

        formatReleaseNumber: function(version, shorten) {

            /* IGNORE THIS
             * Bi-way formatting of release number.

            shorten = shorten ? true : false;
            var release = version.toString().split('.');
            if(release.length == 4 && shorten) {
                for(var i = 3; i = 0; i--) {
                    if(release[i] == "0") {
                        release.pop();
                    }
                }
            } else {
                for(var i = 0; i < 4; i++) {
                    if(!release[i]) {
                        release[i] = 0;
                    }
                }
            }
            version = release.join('.');
            */
            
            return version;
        },

        /* Launch a new search from the main search field */
        launchSearch: function(evt) {
            evt.preventDefault();
            var current = evt ? evt.currentTarget : false;
            var search_term = this.filterSearchTerm($(current).find('.searchterm').val());
            $('#overlay-search .searchterm').val(search_term);
            if (!$('body').hasClass('lucene-active')) {
                $('body').addClass('lucene-active');
            }
            this.fireQuery(search_term);
        },

        hideSearch: function() {
            $('body').removeClass('lucene-active');
        },

        updateFilters: function(evt) {
            var current = evt ? evt.currentTarget : false;
            if(current) {
                if ($(current).closest('.product').hasClass('inactive')) {
                    $(current).closest('.product').removeClass('inactive');
                    $(current).html('<i class="fa fa-times"></i>');
                    this.fireQuery();
                } else {
                    if($(".filters .product:not(.inactive)").length > 1) {
                        $(current).closest('.product').addClass('inactive');
                        $(current).html('<i class="fa fa-plus"></i>');
                        this.fireQuery();
                    } else {
                        console.log('beep');
                        // ToDo : Vibrate or beep?
                    }
                }
            }
            evt.stopPropagation();
        },

        updateFilterVersion: function(evt) {
            evt.preventDefault();
            var current = evt ? evt.currentTarget : false;
            var new_version = $(current).data('version');
            var $the_product =  $(current).closest('.product');

            $the_product.data('filterversion', new_version);
            $the_product.find('.this').html(new_version);
            $the_product.find('.selector').hide();

            this.fireQuery();
        },

        showVersionOptions: function(evt) {
            var current = evt ? evt.currentTarget : false;
            current = $(current).closest('.versions');

            if ($(current).hasClass('active')) {
                // ALREADY ACTIVE
                $(current).removeClass('active');
                $(current).find('.selector').hide();
            } else {
                // NOT YET ACTIVE... HIDE ANY OTHERS.
                $('.selector').hide();
                $('.versions .this').removeClass('active');

                // CALCULATE OFFSET OF THE CURRENT TO THE LIST

                // NOW SHOW THIS ONE
                $(current).addClass('active');
                $(current).find('.selector').show();
            }
            evt.stopPropagation();
        },

        loadMoreResults:function(evt) {
            evt.preventDefault();
            var current = evt ? evt.currentTarget : false;
            this.fireQuery($(current).data('searchTerm'), $(current).data('nextCursorMark'));
        },

        fireQuery: function(searchterm, nextCursorMark) {

            var that = this;
            var q  = searchterm == null ? this.filterSearchTerm($('#overlay-search .searchterm').val()) : searchterm,
                fq = "", //  "((product:\\\"Ambari\\\" AND release:2.7.3.0))", This fails if empty.
                rows = 10,
                params = {},
                defaults = "&sort=score desc,id asc&facet=true&facet.field=product&facet.field=release&facet.field=booktitle&hl=true&hl.fl=text&fl=id,score,url,product,release,booktitle,title",
                search_url = this.searchURL();
            // solr_url = "//localhost:8983/solr/corehw/query?";

            // Build the Query from the searchterm and filters.
            $('.filters .product').each(function(index) {
                if(!$(this).hasClass('inactive')) {
                    if(fq !== "") {
                        fq += " OR ";
                    }
                    fq += "(product:\"" + $(this).data('filterproduct') + "\" AND release:" + encodeURIComponent(that.formatReleaseNumber($(this).data('filterversion'))) + ")";
                }
            });
            fq = "(" + fq + ")";

            params = {'wt':'json', 'q':q, 'fq':fq};
            if(nextCursorMark) {
                params.cursorMark = nextCursorMark;
            }

            this.query = $.ajax({
                type: 'GET',
                url: search_url,
                data: params,
                dataType: 'jsonp',
                jsonp: 'json.wrf',
                beforeSend : function() {
                    if(!nextCursorMark)
                        $('.lucene-results .results').hide();
                    $('.lucene-results .waiting').show();
                    $('.lucene-results .fail').hide();
                    if(Search.query != null) {
                        Search.query.abort();
                    }
                },
                success: function(response) {
                    var output_holder = [],
                        output = "",
                        result = "";

                    // ToDo : Group by book
                    if(response.response.docs.length) {
                        $.each(response.response.docs, function(index, item) {

                            // First add in the highlighting to the item list. Escape HTML,
                            item.text = response.highlighting[item.url].text.join("").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                            // Add back in <b> tags which are there for highlighting
                            item.text = item.text.replace(/&lt;b&gt;/g, "<b>").replace(/&lt;\/b&gt;/g, "</b>");

                            item.release = Array.isArray(item.release) ? item.release[0] : item.release;
                            if(item.release.toLowerCase() === 'cloud') item.release = '';

                            result = "";
                            result += ' <div class="product">' + item.product + ' ' + item.release  +'</div>';
                            result += ' <div class="result">'
                            result += '     <div class="title"><a href="https://docs.hortonworks.com' + item.url + '"><span class="chapter">' + item.title + '</span></a></div>';
                            result += '     <div class="excerpt">' + item.text + '</div>';
                            result += '     <div class="url"><a href="https://docs.hortonworks.com' + item.url + '">' + item.url + '</a></div>';
                            result += ' </div>';

                            output_holder[item.booktitle] = output_holder[item.booktitle] || [];
                            output_holder[item.booktitle].push(result);
                        });

                        for(var book in output_holder) {
                            if (output_holder.hasOwnProperty(book)) {
                                result = "";
                                result += '<div class="book-group">';
                                result += ' <div class="book">' + book + '</div>';
                                for(var i=0; i < output_holder[book].length; i++) {
                                    result += output_holder[book][i];
                                }
                                result += '</div>';
                                output += result;
                            }
                        }

                        $('.lucene-results .waiting').hide();
                        if('cursorMark' in response.responseHeader.params) {
                            // console.log('cursor mark found... appending');
                            $('.lucene-results .results').append(output);
                        } else {
                            $('.lucene-results .results').html(output).show();
                        }
                        $('.more-results').show();
                        $('.lucene-results .more-link').data('nextCursorMark',response.nextCursorMark).data('searchTerm',response.responseHeader.params.q);
                        Search.toggleProductFilters();
                    } else {
                        // No results... this could be because there were none, or there were no more.
                        $('.lucene-results .waiting').hide();
                        $('.more-results').hide();
                        let err_msg = "";
                        if(response.response.numFound > 0) {
                            // There's no more.
                            err_msg = '<h2><i class="fa fa-frown-o"></i> Sorry, No more results were found</h2>';
                            err_msg += '<p>Check your search term, and ensure that you have the appropriate product filter selected';
                        } else {
                            // There's none.
                            $('.lucene-results .results').hide();
                            err_msg = '<h2><i class="fa fa-frown-o"></i> Sorry, No results were found</h2>';
                            err_msg += '<p>Check your search term, and ensure that you have the appropriate product filter selected';
                        }
                        $('.lucene-results .fail').html(err_msg).show();
                    }
                }
            })
                .done(function(data) {
                })
                .fail(function(jqXHR, textStatus) {

                    // alert( "Uh-oh, Search Request Failed" );
                    $('.lucene-results .waiting').hide();
                    $('.lucene-results .results').hide();
                    $('.lucene-results .fail').show();
                    var err_msg = '<h2><i class="fa fa-frown-o"></i> Uh-oh, the search request failed</h2>';
                    err_msg += '<p>' + textStatus + '</p>';

                    $('.lucene-results .fail').html(err_msg);
                })
                .always(function() {
                    // complete
                });

        }
    };

    var Headers = {
        counter: 0,
        getScript: function (url, success) {
            var script = document.createElement('script');
            script.src = url;
            var head = document.getElementsByTagName('head')[0],
                done = false;
            script.onload = script.onreadystatechange = function() {
                if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                    done = true;
                    success();
                    script.onload = script.onreadystatechange = null;
                    head.removeChild(script);
                }
            };
            head.appendChild(script);
        },
        initDcxa: function () {
            this.counter++;
            if (this.counter >= 100) {
                // console.log('Stopping DCXA loading cycle.')
                return;
            }
            if (window.jQuery) {
                // console.log('jQuery found, loading DCXA files.');
                // window.$ = window.jQuery;
                this.getScript('https://my.staging-upgrade.aem.cloudera.com/apps/settings/wcm/designs/support/clientlibs/dcxa.core.deps.js', function() {
                    this.getScript('https://my.staging-upgrade.aem.cloudera.com/apps/settings/wcm/designs/support/clientlibs/dcxa.core.js', function() {
                        this.getScript('https://my.staging-upgrade.aem.cloudera.com/apps/settings/wcm/designs/support/clientlibs/dcxa.vue.deps.js', function() {
                            this.getScript('https://my.staging-upgrade.aem.cloudera.com/apps/settings/wcm/designs/support/clientlibs/dcxa.vue.js', function() {
                                this.getScript('https://my.staging-upgrade.aem.cloudera.com/apps/settings/wcm/designs/support/clientlibs/dcxa.sso.header.js', function() {
                                    this.getScript('https://my.staging-upgrade.aem.cloudera.com/apps/settings/wcm/designs/support/clientlibs/dcxa.sso.footer.js', function() {
                                        console.log('DCXA files loaded.');
                                    });
                                });
                            });
                        });
                    });
                });
            } else {
                setTimeout(initDcxa, 500);
            }
        }
    };

    Headers.initDcxa();
    Search.init();

    $('.segments a').click(function (e) {
        e.preventDefault();
        let target = $(this).data('target');
        $('.segments li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.role-toggle .card-group').hide();
        $('.role-toggle .card-group.' + target).show();
    })
    $('.role-toggle .card-group.by-role').hide();
}(jQuery));







