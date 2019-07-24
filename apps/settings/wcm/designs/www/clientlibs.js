//Mobile Menu ///////////////////////////////// Mobile Menu /////////////////////////////////
jQuery(function($) {

    $('.mobile_btn').on('click', function(e) {
       
            e.preventDefault();

            var myIcon = $(this).find('span');
            var target = $('#cloudera_main_nav');
            var verify = target.hasClass('hide_mobile');

            if (verify) {
                $(this).addClass('mobile_btn_active');
                target.removeClass('hide_mobile');
                myIcon.removeClass("glyphicon-menu-hamburger").addClass("glyphicon-remove");
                /*myIcon.attr('src',
                    '/apps/settings/wcm/designs/cloudera/clientlibs/css/assets/icons/close.png'
                );*/
            } else {
                $(this).removeClass('mobile_btn_active');
                target.addClass('hide_mobile');
                myIcon.removeClass("glyphicon-remove").addClass("glyphicon-menu-hamburger");
            }
        });

});

//Main Nav /////////////////////////////////  Main Nav /////////////////////////////////
/*$(function($) {
    $.fn.main_nav = function(options) {
        $(this).click(function(e) {
            e.preventDefault();
            var target = $(this).parent();
            var verify = target.hasClass('selected_nav');
            var myDiv = $(this).parent().attr('data-tab');
            var parent = $('.hidden_nav');
            var li = $('.main_li');
            if (verify) {
                $('.mainnav-content').slideToggle(400);
                $(li).removeClass('selected_nav');
                $(parent).find('div').removeClass('mainnav-content');
            } else {
                if ($(target).siblings().hasClass('selected_nav')) {
                    $('.mainnav-content').fadeOut('slow');
                    $('.mainnav-content').attr('style', '');
                    $(parent).find('div').removeClass('mainnav-content');
                    $(parent).find('div.' + myDiv).addClass('mainnav-content');
                    $('.mainnav-content').fadeIn('slow');
                    $(li).removeClass('selected_nav');
                    $(this).parent().addClass('selected_nav');
                    $('.mainnav-content').css('display', 'block');
                } else {
                    $(parent).find('div').removeClass('mainnav-content');
                    $(parent).find('div.' + myDiv).addClass('mainnav-content');
                    $('.mainnav-content').slideToggle(400);
                    $(li).removeClass('selected_nav');
                    $(this).parent().addClass('selected_nav');
                }
            }
        });
    };
    if (!(/iPhone|iPad|iPod|Android|webOS|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent))) {}

    function checkIt() {
        
        if ($(window).width() < 768) {
            return;
        } else {
            $('.main_li a').main_nav();
        }
    }
    checkIt();
}(window.jQuery));*/
jQuery(function($) {

    $('#cloudera_main_nav div > li').addClass('toplevel');

    $('nav a').each(function(){
	if ($(this).attr('href') == window.location.pathname)
		$(this).closest('.toplevel').addClass('active');
	});

});

//Mobile Menu ///////////////////////////////// Mobile Menu /////////////////////////////////
jQuery(function($) {

    $('.mobile_btn').on('click', function(e) {
       
            e.preventDefault();

            var myIcon = $(this).find('span');
            var target = $('#cloudera_main_nav');
            var verify = target.hasClass('hide_mobile');
    
            if (!verify) {

                $(this).addClass('mobile_btn_active');
                target.removeClass('hide_mobile');
                myIcon.removeClass("glyphicon-menu-hamburger").addClass("glyphicon-remove");
                /*myIcon.attr('src',
                    '/apps/settings/wcm/designs/cloudera/clientlibs/css/assets/icons/close.png'
                );*/
            } else {
                $(this).removeClass('mobile_btn_active');
                target.addClass('hide_mobile');
                myIcon.removeClass("glyphicon-remove").addClass("glyphicon-menu-hamburger");
            }
        });

});

jQuery(function($) {

    $('.util-nav').click(function(event) {

        var url = window.location.href;
        var arr = url.split("/");
        var result;

        if ($(this).hasClass('language')) {
           /* result = arr[0] + "//" + arr[2] + "/" + 'content/www/en-us/language.html';*/
           $('.language-bar').slideToggle('fast');
        }
        if ($(this).hasClass('searchMe')) {
            $('.search-bar').slideToggle('fast');
           /* result = arr[0] + "//" + arr[2] + "/" + 'content/www/en-us/search.html';*/
        }

         if ($(this).hasClass('logout')) {
            
            $('.logout-bar').slideToggle('fast');
           /* result = arr[0] + "//" + arr[2] + "/" + 'content/www/en-us/search.html';*/
        }

      /*  $('body').prepend('<div style="position:fixed; width:100%; height:100%;background-color: rgba(245, 245, 245, 1);z-index: 5;"id="searchOverlay" ><span style="margin:10px; width:15px; height:15px; cursor:pointer; position:absolute; z-index:5; right:0;" id="closeSearch" class="glyphicon glyphicon-remove"></span><iframe class="mobile_i" src="' + result + '"></iframe></div>');

        $('.main-page').css({
            'overflow': 'hidden',
            'height': '100%'
        });

        $('#closeSearch').click(function(event) {
          
            $('#searchOverlay').remove(); 
            $('.main-page').css({
                'overflow': 'auto',
                'height': 'auto'
            });

        });*/
    });



});
jQuery(function($) {
    $(window).load(function() {
        //If the sticky-nav exists on the page then execute the following functions
        if ($('.sticky_nav_container').length) {
            //Sets the height of the wrapper to the height of sticky-nav to account for the fixed position
            function fixHeight() {
                //Get the height of the sticky-nav on page load
                var sticky_nav_container = $('.sticky_nav_container').height();
                //get the height of the sticky-nav wrapper on page load
                var sticky_nav_container_wrapper = $('.sticky_nav_container_wrapper').height();
                //set the height of the sticky-nav wrapper to the height of the sticky-nav
                $('.sticky_nav_container_wrapper').css({
                    height: (sticky_nav_container - 10) + 'px'
                });
                //does the same thing but with a setTimeout to account for the toggle animation
                setTimeout(function() {
                    var sticky_nav_container = $('.sticky_nav_container').height();
                    var sticky_nav_container_wrapper = $('.sticky_nav_container_wrapper').height();
                    $('.sticky_nav_container_wrapper').css({
                        height: (sticky_nav_container - 10) + 'px'
                    });
                }, 150);
            }
            fixHeight();

            //The sticky-nav's distance from the top of the screen on page-load
            var stickyNavTop = $('.sticky_nav_container').position().top;
            //Add or remove sticky-nav depending on where the sticky-nav is 
            var stickyNav = function() {
                //Current distance from the top
                var scrollTop = $(window).scrollTop();
                if (scrollTop >= stickyNavTop) {
                    $('.sticky_nav_container').addClass('sticky');

                    var scrollDistance = $(window).scrollTop() + 100;

                    // Show/hide menu on scroll
                    //if (scrollDistance >= 850) {
                    //    $('nav').fadeIn("fast");
                    //} else {
                    //    $('nav').fadeOut("fast");
                    //}

                    // Assign active class to nav links while scolling
                    $('.anchor-link').each(function(i) {
                        if ($(this).position().top <= scrollDistance) {
                            $('#sticky-control a').removeClass('active');
                            $('#sticky-control a').eq(i).addClass('active');
                        }
                    });


                } else {
                    $('.sticky_nav_container').removeClass('sticky');
                }
            };
            //Unbind is equivalent to prevent default, executes the following function on click
            $('.sticky_link').unbind('click').click(function() {
                //shows and hides the anchor-nav
                // $('.anchor-nav').slideToggle('fast', 'swing', fixHeight());
                //toggles icon from x to hamburger
                // $('#open-anchor').find('.glyphicon-remove').addClass('glyphicon-menu-hamburger').removeClass('glyphicon-remove');
                //Current distance from the top
                var scrollTop = $(window).scrollTop();
                //checks if this is a relative link pointing to somewhere on the page
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    //gets the name of the url, everything after the hash symbol
                    var target = $(this.hash);
                    //checks if the name has a length
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    //if it does exist
                    if (target.length) {
                        //if the sticky-nav is currently sticky 
                        if (scrollTop >= stickyNavTop) {
                            //move the current position of the page to the target, minus 50px

                            fixHeight();

                            $('html,body').animate({
                                scrollTop: target.offset().top - $('.sticky_nav_container').height() + 50
                            }, 1000, fixHeight());
                        }
                        //however if the sticky-nav is not currently sticky 
                        else {
                            //move the current position of the page to the position of the target, minus the height of the sticky nav minus 40px
                            fixHeight();

                            $('html,body').animate({

                                scrollTop: target.offset().top - $('.sticky_nav_container').height() + 50
                            }, 1000);
                        }
                        return false;
                    }
                }
            });
            //toggles icons again?
            /*  $('#open-anchor').unbind('click').click(function(event) {
                  event.preventDefault();
                  if ($(this).find('span').hasClass('glyphicon-menu-hamburger')) {
                      $(this).find('.glyphicon-menu-hamburger').addClass('glyphicon-remove').removeClass('glyphicon-menu-hamburger');
                  } else if ($(this).find('span').hasClass('glyphicon-remove')) {
                      $(this).find('.glyphicon-remove').addClass('glyphicon-menu-hamburger').removeClass('glyphicon-remove');
                  }
                  $('.anchor-nav').slideToggle({duration: 'fast', easing: 'swing', step: function(){
                      fixHeight();
                  }});           
              });*/
            $(window).scroll(function() {
                stickyNav();
            });
        } //End If Sticky Nav is on page
    });
});
jQuery(function($) {
    function leftPromoinint() {
        if ($('.leftPromo').length > 0) {
            //set variables from demandbase sessionStorage object
            var targetObj = null;
            var targetCompany = sessionStorage.s_dmdbase_custom1.split(':')[0];
            var targetFy20 = sessionStorage.s_dmdbase_custom1.split(':')[4];
            targetCompany = targetCompany.replace(/ /g, '-');
            var dmdbaseArr = sessionStorage.s_dmdbase.split(":");
            var targetIndustry = dmdbaseArr[2];
            var targetListArr = sessionStorage.s_dmdbase_custom4.split(':');
            var netezza = targetListArr[1];
            var cdsw_hdp = targetListArr[3];
            var cdf_cdh = targetListArr[4];
            var training_credits = targetListArr[5];

            targetIndustry = targetIndustry.replace(/,/g, '').replace(/ /g, '-');

            //Order of precedence for Demandbase Targeted Lists
            if ($('div[data-target="' + targetCompany + '"]').length > 0) {
                targetObj = targetCompany;
            } else if ($('div[data-target="' + training_credits + '"]').length > 0) {
                targetObj = training_credits;
            } else if ($('div[data-target="' + cdsw_hdp + '"]').length > 0) {
                targetObj = cdsw_hdp;
            } else if ($('div[data-target="' + cdf_cdh + '"]').length > 0) {
                targetObj = cdf_cdh;
            } else if ($('div[data-target="' + netezza + '"]').length > 0) {
                targetObj = netezza;
            } else if ($('div[data-target="' + targetFy20 + '"]').length > 0) {
                targetObj = targetFy20;
            } else if ($('div[data-target="' + targetIndustry + '"]').length > 0) {
                targetObj = targetIndustry;
            } else if ($('div[data-target="default"]').length > 0) {
                targetObj = "default";
            }
            if (targetObj != null) {
                $(document).scroll(function() {
                    $(document).unbind('scroll');
                    if (getCookie('cld_promo') == undefined || getCookie('cld_promo').indexOf('left_promo') == -1) {
                        $(".target-promo > div").each(function(index) {
                            if (targetObj === $(this).attr('data-target')) {
                                displayPromo($(this));
                                var currPromo = $(this);
                                setTimeout(function() {
                                    displayPromo(currPromo);
                                }, 500);
                            }
                        });
                    }
                });
            }

        }
    }

    //dynamically build leftpromo div
    function displayPromo(currObj) {
        var targetCompany = sessionStorage.s_dmdbase_custom1.split(':')[0];
        var company = targetCompany + ' : ';
       
        if ($('div[data-target="default"]').length > 0) {
           
           company = '';
        }

        var title = currObj.attr('data-title');
        var subtitle = currObj.attr('data-subtitle');
        if (subtitle == undefined) {
            subtitle = '';
        }
        var icon = currObj.attr('data-icon');
        var linkpath = currObj.attr('data-linkpath');
        var button = currObj.attr('data-button');
        var color = currObj.attr('data-color');
        var dataline = currObj.attr('data-dataline');

        var iconBody = '<div class="promo-icon">' +
            '<i class="' + icon + '"></i>' +
            '</div>';

        var promoBody = '<div class="promo-info">' +
            '<div class="left-promo-title">' + company + '' + title + '</div>' +
            '<div class="left-promo-body">' + subtitle + '</div>' +
            '<a class="left-promo-a" href=' + linkpath + '>' +
            '<button class="left-promo-btn">' +
            '<div class="left-promo-title">' + button + '</div>' +
            '</button>' +
            '</a>' +
            '</div>' +
            '<a href="#" class="promo-close"><i class="icon-close mk-contact mk-icon-marketing"></i></a>';

        if (!(icon == "" || icon == undefined)) {
            promoBody = iconBody + promoBody;
        }

        if (dataline.indexOf('true') > -1) {
            promoBody = '<div class="' + color + ' left-promo-box data-line">' + promoBody + '</div>';
        } else {
            promoBody = '<div class="' + color + ' left-promo-box">' + promoBody + '</div>';
        }

        $('.blank-promo').empty().append(promoBody);
        $(".leftPromo ").addClass('leftPromo-trans');

        $('a.promo-close').click(function() {
            $('.blank-promo').empty();
            var currDate = new Date();
            currDate.setDate(currDate.getDate() + 1);
            var cookieVal = getCookie('cld_promo') != undefined ? getCookie('cld_promo') + ',left_promo' : 'left_promo';
            document.cookie = "cld_promo=" + cookieVal + "; path=/;expires=" + currDate.toGMTString();
        });
        $('a.left-promo-a').click(function(e) {
           e.preventDefault();
            $('.blank-promo').empty();
            var currDate = new Date();
            currDate.setDate(currDate.getDate() + 1);
            var cookieVal = getCookie('cld_promo') != undefined ? getCookie('cld_promo') + ',left_promo' : 'left_promo';
            document.cookie = "cld_promo=" + cookieVal + "; path=/;expires=" + currDate.toGMTString();
           
           var get = $(this).attr('href');
           
           setTimeout(function(){
            window.location= get; 
        }, 50);
          
            
        });

    }

    try {
        leftPromoinint();
    } catch (e) {
        console.log(e);
    }
});
$(function($) {
    /*Create Selectbox out of kit hub ul nav*/
    if ($('.kit-hub-nav').length > 0) {
        $('.kit-hub-nav ul').each(function() {
            $(this).first('li').prepend('<li style="display:none;"><a href="'+window.location.pathname+'">Please select your resource</a></li>');
            var list = $(this),
                select = $(document.createElement('select')).insertBefore($(this)).addClass('kit-mobile-nav');

            $('>li a', this).each(function() {

                var option = $(document.createElement('option'))
                    .appendTo(select)
                    .val($(this).attr('href'))
                    .html($(this).html());
            });
        });
        /*set active link on desktop*/
        $('.kit-hub-nav ul a').each(function() {
            if ($(this).attr('href') == window.location.pathname) {
                $(this).parent('li').addClass('active-parent');
            }
        });
        /*select active page in slelectbox*/
        $('.kit-mobile-nav option').each(function() {
            if ($(this).attr('value') == window.location.pathname) {
                $(this).attr('selected', 'selected');
            }
        });
         /*change url on selectbox change for mobile*/
        $(".kit-mobile-nav").on("change", function() {
            var getMobileVal = $(this).val();
            window.location.pathname = getMobileVal;
        });

    }


}(window.jQuery));
jQuery(function($) {

    $('.cl-main-nav ul ul a , .cloudera-mobile-nav ul ul a').removeClass('parent npar');
    $('.cl-main-nav ul ul li , .cloudera-mobile-nav ul ul li').addClass('child').removeClass('npar');

    $('nav a').each(function() {
        if ($(this).attr('href') == window.location.pathname) {
            if ($(this).hasClass('parent')) {
                $(this).addClass('active-parent');
            }
            if ($(this).parent('li').hasClass('child')) {
                $(this).addClass('active').parents('li').find('.parent').addClass('active-parent');
            }

        }
    });
    
    /*Navigation Speacial Button*/
    var navone = $('#cloudera-navigation').attr('data-nav-one');
    var navtwo = $('#cloudera-navigation').attr('data-nav-two');
    var navthree = $('#cloudera-navigation').attr('data-nav-three');
    var navfour = $('#cloudera-navigation').attr('data-nav-four');
    /*Nav 1*/
    if (navone == '2') {
        $(".cl-main-nav li:nth-child(1) li:last-child , .cloudera-mobile-nav li:nth-child(1) li:last-child ").addClass('last');
        $(".cl-main-nav li:nth-child(1) li:last-child , .cloudera-mobile-nav li:nth-child(1) li:last-child ").prev('li').addClass('nav-light-gray-btn');

    } else if (navone == '1') {
        $(".cl-main-nav li:nth-child(1) li:last-child , .cloudera-mobile-nav li:nth-child(1) li:last-child ").addClass('last');
    }
    /*Nav 2*/
    if (navtwo == '2') {
        $(".cl-main-nav li:nth-child(2) li:last-child , .cloudera-mobile-nav li:nth-child(2) li:last-child ").addClass('last');
        $(".cl-main-nav li:nth-child(2) li:last-child , .cloudera-mobile-nav li:nth-child(2) li:last-child ").prev('li').addClass('nav-light-gray-btn');

    } else if (navtwo == '1') {
        $(".cl-main-nav li:nth-child(2) li:last-child , .cloudera-mobile-nav li:nth-child(2) li:last-child ").addClass('last');
    }
    /*Nav 3*/
    if (navthree == '2') {
        $(".cl-main-nav li:nth-child(3) li:last-child , .cloudera-mobile-nav li:nth-child(3) li:last-child ").addClass('last');
        $(".cl-main-nav li:nth-child(3) li:last-child , .cloudera-mobile-nav li:nth-child(3) li:last-child ").prev('li').addClass('nav-light-gray-btn');
    } else if (navthree == '1') {
        $(".cl-main-nav li:nth-child(3) li:last-child , .cloudera-mobile-nav li:nth-child(3) li:last-child ").addClass('last');
    }
    /*Nav 4*/
    if (navfour == '2') {
        $(".cl-main-nav li:nth-child(4) li:last-child , .cloudera-mobile-nav li:nth-child(4) li:last-child ").addClass('last');
        $(".cl-main-nav li:nth-child(4) li:last-child , .cloudera-mobile-nav li:nth-child(4) li:last-child ").prev('li').addClass('nav-light-gray-btn');
    } else if (navfour == '1') {
        $(".cl-main-nav li:nth-child(4) li:last-child , .cloudera-mobile-nav li:nth-child(4) li:last-child ").addClass('last');
    }


    //contact overlay

    $('.mk-contact').unbind('click').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('.mk-overlay').toggle();
    });


});
//Mobile Menu ///////////////////////////////// Mobile Menu /////////////////////////////////
jQuery(function($) {
    //reset more tab for language sites
    //$(".cl-main-nav > ul > li:nth-child(4)").attr('data-tab', 'more-tab');
    //remove click from More in main nav
    //$('.cl-main-nav .npar[data-tab="more-tab"]').find('a').first().attr('href', '#').css('cursor', 'default');

    $(window).resize(function() {
        if ($(window).width() > 760) {

            if ($('.cloudera-search').hasClass('mobile-active')) {
                $('.cloudera-search').removeClass('mobile-active');
                $('.cloudera-search').css('display', 'none');
            }

            $('div.cloudera-mobile-nav').addClass('mobile-hide');
            $('nav.mk-navigation').css('background-color', '');
            $('.mk-mobile-menu-toggle').find('span').removeClass("glyphicon-remove").addClass("glyphicon-menu-hamburger");
            $('.mk-mobile-user').css('display', 'none');

        }
    });
    $('.mkSearchBtn').on('click', function(e) {

        var myScontainer = '.cloudera-search';

        if ($(myScontainer).hasClass('active')) {
            $(this).css('background', '');
            $(this).find('span').removeClass("glyphicon glyphicon-remove").addClass("icon-search1");
            $(myScontainer).css('display', 'none');
            $(myScontainer).removeClass('active');

        } else {
            $(this).css('background', '#fff');
            $(this).find('span').addClass("glyphicon glyphicon-remove").removeClass("icon-search1");
            $(myScontainer).css('display', 'block');
            $(myScontainer).addClass('active');
            $(myScontainer).find('input').focus();

        }

    });
    $('.mobile-loggedin-user').on('click', function(e) {

        $('.cloudera-user').toggle();

    });
    $('.mk-mobile-menu-toggle').on('click', function(e) {

        e.preventDefault();
        var myIcon = $(this).find('span');
        var parent = $('nav.mk-navigation');
        var target = $('div.cloudera-mobile-nav');
        var verify = target.hasClass('mobile-hide');
        var mkSearch = $('.cloudera-search');
        var mkUser = $('.mk-mobile-user');

        //$('div.cloudera-mobile-nav li.npar .parent').addClass('chevron');
        // $('.cloudera-mobile-nav .npar[data-tab="more-tab"]').children().first().attr('href', '#').css('cursor', 'default').removeClass('chevron');

        if (verify) {

            //parent.css('background-color', '#222');
            target.removeClass('mobile-hide');
            myIcon.removeClass("glyphicon-menu-hamburger").addClass("glyphicon-remove");
            mkSearch.css('display', 'block').addClass('mobile-active');
            mkUser.css('display', 'block');

            /*myIcon.attr('src',
                '/apps/settings/wcm/designs/cloudera/clientlibs/css/assets/icons/close.png'
            );*/
        } else {
            $(this).removeClass('mobile_btn_active');
            // parent.css('background-color', '');
            target.addClass('mobile-hide');
            myIcon.removeClass("glyphicon-remove").addClass("glyphicon-menu-hamburger");
            $(mkSearch).css('display', 'none');
            mkUser.css('display', 'none').removeClass('mobile-active');

        }
    });

    $('.cloudera-mobile-nav .parent').unbind('click').on('click', function(e) {
        e.preventDefault();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parent('li').find('>ul').toggle();
            $(this).parent('li').find('>ul').find('.parentlink').remove();

        } else {
            $(this).addClass('active');
            var getParent = $(this).text();
            var getDestination = $(this).attr('href');

            $(this).parent('li').find('>ul').prepend('<li class="main_li close_nav npar parentlink"><a href=' + getDestination + '>' + getParent + ' Overview</a></li>');
            $(this).parent('li').find('>ul').toggle();

            //Remove once more changes to company
            $('.cloudera-mobile-nav .npar[data-tab="more-tab"]').find('.parentlink').remove();
        }

        //alert('fire');



    });




});

if($('.cf-main-nav').length){

$('.cf-main-nav > nav > ul > li > a').removeClass('child').addClass('parent');
$('.cf-main-nav ul ul a , .cl-mobile-nav ul ul a').removeClass('parent npar');
$('.cf-main-nav ul ul li , .cl-mobile-nav ul ul li').addClass('child').removeClass('npar');


 $('.cf-mobile-toggle').unbind('click').on('click', function(e) {
        e.preventDefault();

        var myIcon = $(this).find('span');
        var parent = $('nav.cf-navigation');
        var target = $('div.cf-mobile-nav');
        var verify = target.hasClass('mobile-hide');


        //$('div.cloudera-mobile-nav li.npar .parent').addClass('chevron');
        // $('.cloudera-mobile-nav .npar[data-tab="more-tab"]').children().first().attr('href', '#').css('cursor', 'default').removeClass('chevron');

        if (verify) {

            //parent.css('background-color', '#222');
            target.removeClass('mobile-hide');
            myIcon.removeClass("glyphicon-menu-hamburger").addClass("glyphicon-remove");
            /*myIcon.attr('src',
                '/etc/designs/cloudera/clientlibs/css/assets/icons/close.png'
            );*/
        } else {
            $(this).removeClass('mobile_btn_active');
            // parent.css('background-color', '');
            target.addClass('mobile-hide');
            myIcon.removeClass("glyphicon-remove").addClass("glyphicon-menu-hamburger");

        }
    });
}
var trainingObj = {
    month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    startTime: [new Date((new Date()).valueOf() + 1000 * 3600 * 24).toISOString().slice(0, 10) + " 00:00:00"], //current date + 1
    status: ["TENTATIVE", "CONFIRMED", "EXTERNAL"], // Courses types to be pulled
    unversityURL: "https://university.cloudera.com/api/rest/public/v1/catalog/public_course_event",
    googleMapUrl: 'https://www.google.com/maps/place/',
    universityClassUrl : 'https://university.cloudera.com/class/',

    locationObj: {},
    virtLocObj: {},
    blendedLocObj: {},

    init: function() {
        var Selected = $('#course-value');
        var Drop = $('#course-dropdown');
        var DropItem = Drop.find('li');

        $(window).click(function(e) {
            if (e.target.id == 'course-value') {
                Selected.toggleClass('open');
                Drop.toggle();
            } else {
                Drop.hide();
            }
        });

        Drop.find('li').click(function() {
            Selected.removeClass('open');
            Drop.hide();

            var item = $(this);
            Selected.html(item.html());

            var idVal = $(this).attr('data-value');
            $("div.course-content").each(function(i, obj) {
                if(this.id != 'item-course-value'){
                    if (this.id.indexOf(idVal) > -1) {
                        updateGetParameters("classType",idVal);
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                }
            });
            $('select#course-value').val(idVal);
        });

    	$('select#course-value').change(function() {
            var idVal = this.value;
            $("div.course-content").each(function(i, obj) {
                if(this.id != 'item-course-value'){
                    if (this.id.indexOf(idVal) > -1) {
                        updateGetParameters("classType",idVal);
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                }
            });
			Selected.html(this.selectedOptions[0].innerText);
        });

        $('#item-ondemand .registerUrl').attr('href',trainLclObj.onDemandURL);
    },

    queryLoader : function(saveUrlParam){
        if(saveUrlParam['classType'] == 'virtual'){
            $("#region-values").val(saveUrlParam['country']);
            $("#region-values").trigger("change");
        }else{
            if(saveUrlParam['country'] != null && saveUrlParam['country'] != ""){
                $("#country-values").val(saveUrlParam['country']);
                $("#country-values" ).trigger("change");
            }
            if(saveUrlParam['city'] != null && saveUrlParam['city'] != ""){
                $("#city-values").val(saveUrlParam['city'].replace("+"," "));
                $("#city-values").trigger("change");                				
            }
        }
        setTimeout(function() {
        	if(saveUrlParam['date'] != null){
                $('input[id='+saveUrlParam['date']+']').prop('checked', 'checked');
                $('input[id='+saveUrlParam['date']+']').trigger('change');
                updateGetParameters('date',saveUrlParam['date']);
            }
        }, 1000);
    },

    pageLoadCall: function() {
        var postBody = trainingObj.postReqBody();
        var values = $('#trPage').attr('data-trPage').split(';');
        var saveUrlParam = findGetParameters();
        if ($('div.training-body-wrap #blTrPage').length) {
            values = values.concat($('#blTrPage').attr('data-blTrPage').split(';'));
        }
        postBody["params"].push({
            "name": "course.name",
            "values": values
        });

        $.ajax({
            url: trainingObj.unversityURL + "?pageSize=1000",
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(postBody),
            contentType: "application/json;charset=UTF-8",
            success: function(result) {
                    var jsonResults = result.results;
                    for (var i = 0; i < jsonResults.length; i++) {
                        try {
                            var isBlended = jsonResults[i].provider.displayName.indexOf('Blended') > 1 ? true : false;
                            trainingObj.locationList(jsonResults[i].location, isBlended);
                        } catch (e) {
                            console.log('Error in Location List : ' + e);
                        }
                    }
                    if(saveUrlParam['city'] != null && saveUrlParam['city'] != ""){
                    	trainingObj.courseInfo(saveUrlParam['country'],saveUrlParam['city'].replace("+"," "),saveUrlParam['classType'],saveUrlParam);
                    }else if(saveUrlParam['country'] != null){
                        trainingObj.courseInfo(saveUrlParam['country'],null,saveUrlParam['classType'],saveUrlParam);
                    } 

                    trainingObj.afterLoad();

                }
                });
    },

    locationList: function(location, isBlended) {
        var country = location.address.country.name;
        var countryCode = location.address.country.alpha2Code;
        var displayName = (location.displayName).substring(0, location.displayName.indexOf('('));
        displayName = displayName == "" ? location.displayName : displayName;
        var city = location.address.city;
        if (city != null) {
            if (trainingObj.locationObj.hasOwnProperty(country)) {
                var cities = trainingObj.locationObj[country].cities;
                if (!cities.hasOwnProperty(city)) {
                    cities[city] = displayName;
                    trainingObj.locationObj[country].cities = cities;
                }
            } else {
                var address = {};
                var cities = {};
                cities[city] = displayName;
                address["countryCode"] = countryCode;
                address["cities"] = cities;
                trainingObj.locationObj[country] = address;
            }
        } else {
            var tempKey = (displayName).replace("Virtual Classroom, ", "");
            if (isBlended) {
                trainingObj.addSimpleList(trainingObj.blendedLocObj, tempKey, countryCode);
            } else {
                trainingObj.addSimpleList(trainingObj.virtLocObj, tempKey, countryCode);
            }
        }
    },

    addSimpleList: function(paramObj, tempKey, tempValue) {
        if (!paramObj.hasOwnProperty(tempKey)) {
            paramObj[tempKey] = [tempValue];
        } else {
            paramObj[tempKey].indexOf(tempValue) == -1 ? paramObj[tempKey].push(tempValue) : "";
        }
    },

    afterLoad: function() {
        trainingObj.populateSelect(trainingObj.locationObj, "country");
        trainingObj.populateSelect(trainingObj.virtLocObj, "region");
        trainingObj.populateSelect(trainingObj.blendedLocObj, "blended");

        trainingObj.paramBasedCall();

        $("#country-values").change(function() {
            if (this.value != 'noValue') {
                var cntyVal = this.options[this.selectedIndex].text;
                $('#city-values').empty();
                $('#city-values').show();
                trainingObj.populateSelect(trainingObj.locationObj[cntyVal].cities, "city");
                trainingObj.courseInfo(this.value, $("#city-values").val(), 'instructor-led');
                if ($("#city-values").val() == 'noValue') {
                    $('#item-instructor-led > .course-details').hide();
                    $('#item-instructor-led > .course-details').next().hide();
                } else {
                    $('#item-instructor-led > .course-details').show();
                    $('#item-instructor-led > .course-details').next().show().addClass('flex-display');
                }
               // updateGetParameters("country",this.value);
            } else {
                $('#city-values').hide();
                $('#item-instructor-led > .course-details').hide();
                $('#item-instructor-led > .course-details').next().hide();
            }
        });

        $("#city-values").change(function() {
            trainingObj.courseInfo($('#country-values').val(), this.value, 'instructor-led');
            //updateGetParameters("city",this.value);
        });
        $("#region-values").change(function() {
            trainingObj.courseInfo(this.value, null, 'virtual');
            //updateGetParameters("country",this.value);
        });

        trainingObj.courseInfo($("#blended-values").val(), null, 'blended');
        $("#blended-values").change(function() {
            trainingObj.courseInfo(this.value, null, 'blended');
        });

        if(Object.keys(trainingObj.locationObj).length == 1){
            $( "#country-values" ).trigger( "change" );
        }else if(Object.keys(trainingObj.locationObj).length == 0){
            $( "#course-dropdown").find("li[data-value='instructor-led']").remove();
            $("option[value='instructor-led']").remove();
        }

        if(Object.keys(trainingObj.virtLocObj).length == 1){
            $( "#region-values" ).trigger( "change" );
        }else if(Object.keys(trainingObj.virtLocObj).length == 0){
            $( "#course-dropdown").find("li[data-value='virtual']").remove();
            $("option[value='virtual']").remove();
        }

        if(Object.keys(trainingObj.blendedLocObj).length == 0){
            $( "#course-dropdown").find("li[data-value='blended']").remove();
            $("option[value='blended']").remove();
        }

        if($('#course-dropdown').find('li').length == 2){
            var idVal = $('#course-dropdown').find('li')[1].getAttribute('data-value');
            var tempParam = { 'classType' : idVal}
			trainingObj.paramBasedCall(tempParam);
        }
    },   

    populateSelect: function(jsonObj, idVal) {
        var keys = Object.keys(jsonObj).sort();
        if (keys.length > 1) {
            $('#' + idVal + '-values').append($('<option>', {
                value: 'noValue',
                text: '--Please select '+idVal+'--'
            }));
        }
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var optionValue, optionText;
            if (idVal == 'country') {
                optionValue = jsonObj[key].countryCode;
                optionText = key;
            } else if (idVal == 'city') {
                optionValue = key;
                optionText = jsonObj[key];
            } else {
                optionValue = jsonObj[key];
                optionText = key;
            }
            $('#' + idVal + '-values').append($('<option>', {
                value: optionValue,
                text: optionText
            }));
        }
    },        

    courseInfo: function(country, city, type,saveUrlParam) {
        var postBody = trainingObj.postReqBody();
        var courseName = $('#trPage').attr('data-trPage').split(';');
        if (type == 'blended' && country != null) {
            courseName = $('#blTrPage').attr('data-blTrPage').split(';');
        }
        postBody["params"].push({
            "name": "course.name",
            "values": courseName
        });
        postBody["params"].push({
            "name": "location.embeddedAddress.city",
            "values": city == null ? [null] : [city]
        });

        postBody["params"].push({
            "name": "location.embeddedAddress.country.alpha2Code",
            "values": country == null ? [null] : [country]
        });
        if(country != null){
        	updateGetParameters("country",country);
        }
        if(city != null){
        	updateGetParameters("city",city);
        }
        if (country == 'noValue' || city == 'noValue') {
            $('#item-' + type + ' > .course-details').hide();
            $('#item-' + type + ' > .course-details').next().hide();
        } else {
            $('#item-' + type + ' > .course-details').show();
            $('#item-' + type + ' > .course-details').next().show().addClass('flex-display');
        }
        $.ajax({
            url: trainingObj.unversityURL + "?pageSize=250&sortBy=startTime&ascending=true",
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(postBody),
            contentType: "application/json;charset=UTF-8",
            success: function(result) {
                if(saveUrlParam != null){
                    if(result.totalResults == 0){
                        $('.noResultMsg').show();
                    }else{               			
		                trainingObj.queryLoader(saveUrlParam);
                    }
                }else{
                    trainingObj.addCourseToDom(type, result.results);      
                }
            }
        });
    },

    postReqBody: function() {
        var retReqBody = {
            "params": [{
                    "name": "startTime",
                    "values": trainingObj.startTime
                },
                {
                    "name": "status",
                    "values": trainingObj.status
                }
            ]
        };
        return retReqBody;
    },        

    addCourseToDom: function(type, courseList) {
        var chked = "checked";
        var divStr = '#item-' + type + ' > .course-details';
        $(divStr).empty();
     //   $(divStr).append('<div class="static-details flex-display" style="width: 400px;">'+ trainLclObj.PriceTag +' :<div class="price"></div></div> ');
        $(divStr).append('<div class="static-details">'+ trainLclObj.PriceTag +' :<div class="price"></div></div> ');
        $(divStr).append('<div class="static-details"><div class="early-bird"></div></div> ');
        type == 'instructor-led' ? $(divStr).append('<div class="static-details">'+ trainLclObj.AddressTag +' : <div class="address"></div></div> ') : '';
        $(divStr).append('<div class="static-details flex-display">'+ trainLclObj.TimeTag +'  : <div class="time"></div></div> ');
        $(divStr).append('<div class="static-details">'+ trainLclObj.DateTag +' :</div>');
        for (var i = 0; i < Math.min(5, courseList.length); i++) {
			$('.noResultMsg').hide();
            $('.registerUrl').show();

            courseList[i].startTime = courseList[i].startTime.replace(" ", "T");
            courseList[i].finalEndTime = courseList[i].finalEndTime.replace(" ", "T");

            var startDate = new Date(courseList[i].startTime).toISOString();
            startDate = new Date(startDate);
            var endDate = new Date(courseList[i].finalEndTime).toISOString();
            endDate = new Date(endDate);

            var confirmed = courseList[i].status == 'CONFIRMED' ? trainLclObj.confirmedChk : '';
            startDate = trainingObj.month[startDate.getMonth()] + ' ' + startDate.getDate() + " ";
            endDate = trainingObj.month[endDate.getMonth()] + ' ' + endDate.getDate();
            $(divStr).append(
                '<input type="radio" name="course-date ' + type + '" id="' + courseList[i].id + '"' + chked + '><label for="'+courseList[i].id+'">' + startDate + '- ' + endDate + '</label>' +confirmed + '<br>'
            );
            if (chked != null && chked != '') {
                trainingObj.buildContent(divStr, courseList[i]);
            }
            chked = '';
        }
        $('input:radio[name="course-date ' + type + '"]').change({
            items: courseList,
            divStr: divStr
        }, function(objVal) {
            var divStr = objVal.data.divStr;
            var tempItems = objVal.data.items;
            var currVal = this.id;            
            updateGetParameters("date",currVal);
            for (var i = 0; i < Math.min(5, tempItems.length); i++) {
                if (tempItems[i].id == currVal) {
                    trainingObj.buildContent(divStr, tempItems[i]);
                }
            }
        });

    },

    /* 
       Dynamically building the course info html structure
       based on the learnDot API reponse.
    */
    buildContent: function(divStr, courseItem) {
        var currenyCode = trainingObj.currencyHash[courseItem.price.currency] == undefined ? "" : trainingObj.currencyHash[courseItem.price.currency] + " ";
        var price = currenyCode + courseItem.regularPrice.amount.toFixed(2) + " " + courseItem.regularPrice.currency;

        var street = (courseItem.location.address.street1 != undefined ? courseItem.location.address.street1 + "<br>" : "");
        street += (courseItem.location.address.street2 != undefined ? courseItem.location.address.street2 + "<br>" : "");

        var city = (courseItem.location.address.city != undefined ? courseItem.location.address.city + " " : "");
        var region = (courseItem.location.address.region != undefined ? ", " + courseItem.location.address.region + " " : "");
        var postalCode = (courseItem.location.address.postalCode != undefined ? courseItem.location.address.postalCode : "");
        var countryName = (courseItem.location.address.country.name != undefined ? "<br>" + courseItem.location.address.country.name + "<br>" : "");

        var regUrl = (courseItem.sessionUrl != "" && courseItem.sessionUrl != undefined) ? courseItem.sessionUrl : trainingObj.universityClassUrl + courseItem.urlName;
        regUrl = (!regUrl.match(/^[a-zA-Z]+:\/\//)) ? 'https://' + regUrl : regUrl; 

        var startTime = trainingObj.getLocaleTime(courseItem.startTime.split('T')[1]);  

        var endTime =trainingObj.getLocaleTime(courseItem.finalEndTime.split('T')[1]);
        endTime = (divStr.indexOf('blended') > -1 || divStr.indexOf('virtual') > -1) ? endTime + ' EST' :  endTime;

        //        (street + city + region + postalCode)
        var viewMap = trainingObj.googleMapUrl + encodeURI((street + city).replace(/<br>/g, " "));

        $(divStr + ' div.price').empty().removeClass('line-through').append(price);
        $(divStr + ' div.early-bird').empty();
        if (courseItem.earlyBirdCutoff != undefined && courseItem.hasOwnProperty('earlyBirdPrice')) {
            $(divStr + ' div.price').nextAll().remove();
            var earlyBird = new Date(courseItem.earlyBirdCutoff);
            if (earlyBird > new Date()) {
                var earlyBirdPrice = courseItem.earlyBirdPrice.amount;
                earlyBirdPrice = currenyCode + earlyBirdPrice.toFixed(2) + " " + courseItem.earlyBirdPrice.currency;
                earlyBird = trainingObj.month[earlyBird.getMonth()] + ' ' + trainingObj.ordinalSuffix(earlyBird.getDate());
                $(divStr + ' div.early-bird').append('Sign up by ' + earlyBird + ' and Save!!!');
                $(divStr + ' div.price').addClass('line-through');
                $(divStr + ' div.price').after('<div class="price early-bird" style="margin-top:0;font-size: 18px;">' + earlyBirdPrice + '</div>');
            }
        }
        $(divStr + ' div.address').empty().append(street + city + region + postalCode + countryName);
        if(courseItem.location.address.street1 != undefined && courseItem.location.address.street2 == undefined){
       		 $(divStr + ' div.address').append('<a href="' + viewMap + '"  target="_blank">'+trainLclObj.ViewMapTag+'</a>');
        }
        $(divStr + ' div.time').empty().append(startTime + ' - ' + endTime);
        var nextDiv = $(divStr).next();
        nextDiv.find('a.registerUrl').removeAttr("href").attr("href", regUrl);
        if(courseItem.sessionUrl != "") {
            nextDiv.find('a.registerUrl').attr("target", "_blank"); 
            nextDiv.find('div.etLink').show();
        } else {
            nextDiv.find('a.registerUrl').removeAttr("target"); 
            nextDiv.find('div.etLink').hide();
        }
        nextDiv.parent().find('div.allCourseLink').remove();
        if(trainLclObj.allCourseMsg != null){
        	nextDiv.after('<div class="allCourseLink">'+trainLclObj.allCourseMsg+'</div>');
        }
    },

    getLocaleTime :  function(timeStr){
        var retTime_1 = parseInt(timeStr.substring(0,timeStr.indexOf(':')));
        var retTime_2 = timeStr.substring(timeStr.indexOf(':')+1,timeStr.lastIndexOf(':'));
        if(retTime_1 < 12 || retTime_1 == 24){
            retTime_1 = (retTime_1 == 12 || retTime_1 == 0) ? 12 : retTime_1;
            retTime_1 = retTime_1 +':'+retTime_2+' AM';
        }else{
            retTime_1 = (retTime_1 == 12) ?  12 : retTime_1 - 12; 
            retTime_1 = retTime_1 +':'+retTime_2+' PM';
        }
        return retTime_1;
    },

    paramBasedCall : function(localParam){
        var Selected = $('#course-value');
        var Drop = $('#course-dropdown');
        var DropItem = Drop.find('li');
        var params = findGetParameters();
        //Small fix for the renamong the instructor-led to classroom
        if(params['classType'] == 'classroom'){
            params['classType'] = 'instructor-led';
        }
        if(localParam != null){
            params = localParam;
        }
        Drop.find('li').each(function() {
            var idVal = params['classType'];
            var currIdVal = $(this).attr('data-value');
            if (currIdVal == idVal) {
                var item = $(this);
                Selected.html(item.html());

                $("div.course-content").each(function(i, obj) {
                    if(this.id != 'item-course-value'){
                        if (this.id.indexOf(idVal) > -1) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    }
                });
            }
        });
        if(params['classType'] != null && params['classType'] != undefined ){
        	$('select#course-value').val(params['classType']);
        }
    },

    currencyHash: {
        "USD": "&#36;",
        "GBP": "&#163;",
        "BRL": "&#82;&#36;",
        "AUD": "A&#36;",
        "EUR": "&#x20AC;",
        "SGD": "S&#36;",
        "ILS": "&#8362;",
        "JPY": "&#165;",
        "CNY": "&#20803;",
        "INR": "&#8377;",
        "HKD": "HK&#36;"
    },

    ordinalSuffix: function(i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    },
}

function findGetParameters() {
    var result = [],tmp = [];
    var items = location.hash != "" ? location.hash.substr(2).split("&") : location.search.substr(1).split("&")
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        result[tmp[0]] = decodeURIComponent(decodeURIComponent(tmp[1]));
    }
    return result;
}

function updateGetParameters(key,value) {
    var result = {};
    value = value;
    var items = findGetParameters();
    switch(key) {
        case "country"  : result["classType"] = items["classType"];
            			  break;
		case "city"     : result["classType"] = items["classType"];
            			  result["country"] = items["country"];
                          break;
        case "date"     : result["classType"] = items["classType"];
            			  result["country"] = items["country"];
            			  result["city"] = items["city"];
                          break;
    }
    result[key] = value;
    location.hash = "?" + jQuery.param(result);
}

$(document).ready(function() {
    if (typeof trainLclObj != "undefined") {
        trainingObj.init();
        trainingObj.pageLoadCall();
    }
});
jQuery(function($) {
    if ($('.speakers_with_description_list').length > 0) {
        
    function leadershipGridBox() {  
    function nameSlideUp(){ 
    jQuery('.grid-item-container.speakers-item .speakers_with_description_metadata_company').css('opacity', '0');       
    $('.grid-item-container.speakers-item.unselected-speaker-grid-item').mouseenter(function(event){
    $(this).find('.speakers_with_description_metadata_name').animate({
    bottom: "+=50",
    }, 300, function() {
    // Animation complete.
    });    
    $(this).find('.speakers_with_description_metadata_company').animate({
    opacity: 1,
    bottom: "+=25",
    }, 300, function() {
    // Animation complete.
    });   
    }); 
    $('.grid-item-container.speakers-item.unselected-speaker-grid-item').mouseleave(function(event){   
    $(this).find('.speakers_with_description_metadata_name').animate({
    bottom: "-=50",
    }, 500, function() {
    // Animation complete.
    }); 
    $(this).find('.speakers_with_description_metadata_company').animate({
    opacity: 0,
    bottom: "-=25",
    }, 500, function() {
    // Animation complete.
    }); 
    }); 
    };
        
    $('.grid-item-container.speakers-item').each(function() {
    var description = $(this).find('.truncated_description_text').text()
    var truncated_description = jQuery.trim(description).substring(0, 200).split(" ").slice(0, -1).join(" ") + "...";  
    $(this).find('.truncated_description_text').text(truncated_description);
    $('<a class="open-modal speaker_read_more chevron">Read More</a>').appendTo($(this).find('.selected_speaker_grid_item_metadata'));    
    });
         
    $('.grid-item-container.speakers-item').click(function(event){   
    $('.grid-item-container.speakers-item').each(function() {   
    $(this).addClass('unselected-speaker-grid-item');
    $(this).removeClass('selected-speaker-grid-item');
    $(this).find('.selected_speaker_grid_item_metadata').addClass('hidden');    
    });
    $(this).find('.selected_speaker_grid_item_metadata').removeClass('hidden'); 
    $(this).removeClass('unselected-speaker-grid-item');
    $(this).addClass('selected-speaker-grid-item');
         
    $(this).find('.speaker_read_more').click(function(event){
    var lightbox_save = $(this).parents().eq(1).find('.lightboxed').clone();  
    $(lightbox_save).lightbox_me({
        centered: true,
        appearEffect: "fadeIn",
        closeClick: "true",
        destroyOnClose: "true",
        overlaySpeed: "10",
        lightboxSpeed: "fast",
        closeSelector: ".close",
        onClose: function() {
        $('body').children('.lightboxed').remove()
        $('body').children('.js_lb_overlay').remove()
        }
        });
    });
        
    $('.close_active').click(function(event){ 
    event.stopPropagation();    
    $('.grid-item-container.speakers-item').each(function() { 
    $(this).addClass('unselected-speaker-grid-item');
    $(this).removeClass('selected-speaker-grid-item');
    $(this).find('.selected_speaker_grid_item_metadata').addClass('hidden');    
    });
    });         
    }); 
    }
    
    $(window).load(function() {
        $(document).ready(leadershipGridBox);
    });
    }
});

//LIGHTBOX CODE
(function ($) {

    $.fn.lightbox_me = function(options) {

        return this.each(function() {

            var
                opts = $.extend({}, $.fn.lightbox_me.defaults, options),
                $overlay = $(),
                $self = $(this),
                $iframe = $('<iframe id="foo" style="z-index: ' + (opts.zIndex + 1) + ';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>');

            if (opts.showOverlay) {
                //check if there's an existing overlay, if so, make subequent ones clear
               var $currentOverlays = $(".js_lb_overlay:visible");
                if ($currentOverlays.length > 0){
                    $overlay = $('<div class="lb_overlay_clear js_lb_overlay"/>');
                } else {
                    $overlay = $('<div class="' + opts.classPrefix + '_overlay js_lb_overlay"/>');
                }
            }

            /*----------------------------------------------------
               DOM Building
            ---------------------------------------------------- */
            $('body').append($self.hide()).append($overlay);


            /*----------------------------------------------------
               Overlay CSS stuffs
            ---------------------------------------------------- */

            // set css of the overlay
            if (opts.showOverlay) {
                setOverlayHeight(); // pulled this into a function because it is called on window resize.
                $overlay.css({ position: 'absolute', width: '100%', top: 0, left: 0, right: 0, bottom: 0, zIndex: (opts.zIndex + 2), display: 'none' });
                if (!$overlay.hasClass('lb_overlay_clear')){
                    $overlay.css(opts.overlayCSS);
                }
            }

            /*----------------------------------------------------
               Animate it in.
            ---------------------------------------------------- */
               //
            if (opts.showOverlay) {
                $overlay.fadeIn(opts.overlaySpeed, function() {
                    setSelfPosition();
                    $self[opts.appearEffect](opts.lightboxSpeed, function() { setOverlayHeight(); setSelfPosition(); opts.onLoad()});
                });
            } else {
                setSelfPosition();
                $self[opts.appearEffect](opts.lightboxSpeed, function() { opts.onLoad()});
            }

            /*----------------------------------------------------
               Hide parent if parent specified (parentLightbox should be jquery reference to any parent lightbox)
            ---------------------------------------------------- */
            if (opts.parentLightbox) {
                opts.parentLightbox.fadeOut(200);
            }


            /*----------------------------------------------------
               Bind Events
            ---------------------------------------------------- */

            $(window).resize(setOverlayHeight)
                     .resize(setSelfPosition)
                     .scroll(setSelfPosition);

            $(window).bind('keyup.lightbox_me', observeKeyPress);

            if (opts.closeClick) {
                $overlay.click(function(e) { closeLightbox(); e.preventDefault; });
            }
            $self.delegate(opts.closeSelector, "click", function(e) {
                closeLightbox(); e.preventDefault();
            });
            $self.bind('close', closeLightbox);
            $self.bind('reposition', setSelfPosition);



            /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
              -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


            /*----------------------------------------------------
               Private Functions
            ----------------------------------------------------*/

            /* Remove or hide all elements */
            function closeLightbox() {
                var s = $self[0].style;
                if (opts.destroyOnClose) {
                    $self.add($overlay).remove();
                } else {
                    $self.add($overlay).hide();
                }

                //show the hidden parent lightbox
                if (opts.parentLightbox) {
                    opts.parentLightbox.fadeIn(200);
                }
                if (opts.preventScroll) {
                    $('body').css('overflow', '');
                }
                $iframe.remove();

                        // clean up events.
                $self.undelegate(opts.closeSelector, "click");
                $self.unbind('close', closeLightbox);
                $self.unbind('repositon', setSelfPosition);
                
                $(window).unbind('resize', setOverlayHeight);
                $(window).unbind('resize', setSelfPosition);
                $(window).unbind('scroll', setSelfPosition);
                $(window).unbind('keyup.lightbox_me');
                opts.onClose();
            }


            /* Function to bind to the window to observe the escape/enter key press */
            function observeKeyPress(e) {
                if((e.keyCode == 27 || (e.DOM_VK_ESCAPE == 27 && e.which==0)) && opts.closeEsc) closeLightbox();
            }


            /* Set the height of the overlay
                    : if the document height is taller than the window, then set the overlay height to the document height.
                    : otherwise, just set overlay height: 100%
            */
            function setOverlayHeight() {
                if ($(window).height() < $(document).height()) {
                    $overlay.css({height: $(document).height() + 'px'});
                     $iframe.css({height: $(document).height() + 'px'});
                } else {
                    $overlay.css({height: '100%'});
                }
            }


            /* Set the position of the modal'd window ($self)
                    : if $self is taller than the window, then make it absolutely positioned
                    : otherwise fixed
            */
            function setSelfPosition() {
                var s = $self[0].style;

                // reset CSS so width is re-calculated for margin-left CSS
                $self.css({left: '50%', marginLeft: ($self.outerWidth() / 2) * -1,  zIndex: (opts.zIndex + 3) });


                /* we have to get a little fancy when dealing with height, because lightbox_me
                    is just so fancy.
                 */

                // if the height of $self is bigger than the window and self isn't already position absolute
                if (($self.height() + 80  >= $(window).height()) && ($self.css('position') != 'absolute')) {

                    // we are going to make it positioned where the user can see it, but they can still scroll
                    // so the top offset is based on the user's scroll position.
                    var topOffset = $(document).scrollTop() + 40;
                    $self.css({position: 'absolute', top: topOffset + 'px', marginTop: 0})
                } else if ($self.height()+ 80  < $(window).height()) {
                    //if the height is less than the window height, then we're gonna make this thing position: fixed.
                    if (opts.centered) {
                        $self.css({ position: 'fixed', top: '50%', marginTop: ($self.outerHeight() / 2) * -1})
                    } else {
                        $self.css({ position: 'fixed'}).css(opts.modalCSS);
                    }
                    if (opts.preventScroll) {
                        $('body').css('overflow', 'hidden');
                    }
                }
            }

        });



    };

    $.fn.lightbox_me.defaults = {

        // animation
        appearEffect: "fadeIn",
        appearEase: "",
        overlaySpeed: 250,
        lightboxSpeed: 300,

        // close
        closeSelector: ".close",
        closeClick: false,
        closeEsc: true,

        // behavior
        destroyOnClose: false,
        showOverlay: true,
        parentLightbox: false,
        preventScroll: false,

        // callbacks
        onLoad: function() {},
        onClose: function() {},

        // style
        classPrefix: 'lb',
        zIndex: 999,
        centered: false,
        modalCSS: {top: '40px'},
        overlayCSS: {background: 'black', opacity: .3}
    }
})(jQuery);
jQuery(function($) {
    $(window).load(function() {
        calculateLIsInRow();
    });

    function calculateLIsInRow() {
        var lisInRow = 0;
        $('.city-items li').each(function() {
            if ($(this).prev().length > 0) {
                if ($(this).position().top != $(this).prev().position().top) return false;
                lisInRow++;
            } else {
                lisInRow++;
            }
        });
        $('.city-items').each(function() {
            var items_main = $(this).find('li');
            for (var j = 0; j < items_main.length; j += lisInRow) {
                items_main.slice(j, j + lisInRow).wrapAll('<li class="grid-row"><ul></ul></li>');
            }
        });
        
    }

    function recalculate() {
        $('.city-items .grid-item').parent().unwrap();
        $('.city-items .grid-item').unwrap();
        calculateLIsInRow();
    }
    if ($('.city-items').length) {
    $(window).resize(recalculate);
    }
    
    $(window).load(function() {
        if ($('.city-items').length) {
            /*SRC Tracking*/
          function getParameter(name) {
                var url = window.location.href;
                var paramsStart = url.indexOf("?");
                if (paramsStart != -1) {
                    var paramString = url.substr(paramsStart + 1);
                    $('.city-items .grid-row').each(function() {
                        $(this).find('.grid-item').each(function() {
                            var getH = $(this).find('a').attr('href');
                            $(this).find('a').attr('href', getH + '?' + paramString);
                        });
                    });
                }
            }
            getParameter();
        }
        
    });
});
$(document).ready(function() {
    if (typeof filterTraining != "undefined") {
    	filterTraining.init();
    }
    if (typeof solnComp != "undefined") {
    	solnComp.init();
    }
});
$(document).on("click", ".solutions-catalog__item, .featured-solutions__item", function(a) {
    $(this).toggleClass("item--flipped");
    $(".solutions-catalog__item, .featured-solutions__item").not(this).removeClass("item--flipped");
});
//Action List
jQuery(function($) {

    if ($('.action-list').length > 0) {

        var windowWidth = $(window).width();
        var trigger = $('.action-list').find('.action-link').parent('a');
        $(trigger).unbind('click').click(function(e) {
            e.preventDefault();
            if (windowWidth < 768) {
                $(this).parents('.action-list').find('ul').toggle();
            }
        });

    }

});
//Tabs-Section ///////////////////////////////// Tabs-Section /////////////////////////
$(function ( $ ) {
  //Check if .tabs exist
  if($('.tabs-section').length){

    //Setting defualts: first tab and corresponding tabs area active/visible  
    $('.tabs-section .tab-control:first-child').addClass('isActive');
    $('.tabs-section .tab-contents-group .tab-0').addClass('isVisible'); 

    //feching jump location from url
    var urlTabParam = window.location.href.split('tab=');
    var tabPair = "tab-"+urlTabParam[1];

    var foundElement = $('.tabs-section').find('[data-tab="'+tabPair+'"]');

    var activeTab = $(foundElement).parent().find('.isActive'),
    visibleContent = $(foundElement).parent().parent().find('.tab-contents-group').find('.isVisible'),
    targetContent = $(foundElement).parent().parent().find('.tab-contents-group').find('.'+tabPair);

    //switch currently active tabs
    $(activeTab).removeClass('isActive');
    $(foundElement).addClass('isActive');
    $(visibleContent).removeClass('isVisible');
    $(targetContent).addClass('isVisible');

    //find the matching content and switch that
    //Note: logic for jump url works if there is just "tab=#" but broken if it has others in the string like "tab=3829473"

    //Click handler on tabs: Toggle of the tabs and content
    $('.tabs-group').on( "click", function(event) {
      event.preventDefault();
      var chosen = event.target;

      if ($(chosen).parent().hasClass('tab-control')) {
        chosen = $(chosen).parent();
      } else if ($(chosen).hasClass('tab-control')) {
        chosen = event.target;
      } else {
        return false;
      }

      var targetClass = $(chosen).data('tab'),
      activeTab = $(chosen).parent().find('.isActive'),
      visibleContent = $(chosen).parent().parent().find('.tab-contents-group').find('.isVisible'),
      targetContent = $(chosen).parent().parent().find('.tab-contents-group').find('.'+targetClass);

      $(activeTab).removeClass('isActive');
      $(chosen).addClass('isActive');
      $(visibleContent).removeClass('isVisible');
      $(targetContent).addClass('isVisible');  
    });

    //Change handler on select: Toggle of the tabs and content per select on mobile
    $('.tab-select-controller').on('change', function(thischange) {
      thischange.preventDefault();
      var target = this.value,
      activeTab = $(this).parent().parent().find('.isActive'),
      targetTab = $(this).parent().parent().find('.tabs-group').find('[data-tab="'+target+'"]'),
      visibleContent = $(this).parent().parent().find('.tab-contents-group').find('.isVisible'),
      targetContent = $(this).parent().parent().find('.tab-contents-group').find('.'+target);
 
      $(activeTab).removeClass('isActive');
      $(targetTab).addClass('isActive');
      $(visibleContent).removeClass('isVisible');
      $(targetContent).addClass('isVisible');
    });

  }// end if tabs exist

}( window.jQuery ));
jQuery(function($) {
    if ($('.spotlight').length > 0) {

        $('#spot-controller a').unbind('click').click(function(event) {
            /* Act on the event */
            event.preventDefault();
            var getSpot = $(this).attr("data-spot");
            var abParent = $(this).parents('.spotlight');
            $(this).parents('ul').find('a').removeClass('active-spot');
            $(this).parents('ul').find('a').removeClass('active-spot');
            $(this).addClass('active-spot');
            abParent.find('option').attr("selected", false);
            abParent.find('select').val(getSpot);
            abParent.find('.fiftyRight').removeClass('active');
            abParent.find('.' + getSpot).addClass('active');


        });

        $("#spot-select-controler").on("change", function() {
            var selectParent = $(this).parents('.spotlight');
            var getSelectVal = $(this).val();
            selectParent.find('.fiftyRight').removeClass('active');
            selectParent.find('.' + getSelectVal).addClass('active');
            selectParent.find('#spot-controller a').removeClass('active-spot');
            selectParent.find('#spot-controller a[data-spot = ' + getSelectVal + ']').addClass('active-spot');


        });
    }
});
jQuery(function($) {
    if ($('.speakers_with_description_list').length > 0) {
        
    function leadershipGridBox() {  
    function nameSlideUp(){ 
    jQuery('.grid-item-container.speakers-item .leadership_company').css('opacity', '0');       
    $('.grid-item-container.speakers-item.unselected-speaker-grid-item').mouseenter(function(event){
    $(this).find('.leadership_name').animate({
    bottom: "+=50",
    }, 300, function() {
    // Animation complete.
    });    
    $(this).find('.leadership_company').animate({
    opacity: 1,
    bottom: "+=25",
    }, 300, function() {
    // Animation complete.
    });   
    }); 
    $('.grid-item-container.speakers-item.unselected-speaker-grid-item').mouseleave(function(event){   
    $(this).find('.leadership_name').animate({
    bottom: "-=50",
    }, 500, function() {
    // Animation complete.
    }); 
    $(this).find('.leadership_company').animate({
    opacity: 0,
    bottom: "-=25",
    }, 500, function() {
    // Animation complete.
    }); 
    }); 
    };
        
    $('.grid-item-container.speakers-item').each(function() {
    var description = $(this).find('.truncated_description_text').text()
    var truncated_description = jQuery.trim(description).substring(0, 200).split(" ").slice(0, -1).join(" ") + "...";  
    $(this).find('.truncated_description_text').text(truncated_description);
    $('<a class="open-modal speaker_read_more chevron">Read More</a>').appendTo($(this).find('.selected_speaker_grid_item_metadata'));    
    });
         
    $('.grid-item-container.speakers-item').click(function(event){   
    $('.grid-item-container.speakers-item').each(function() {   
    $(this).addClass('unselected-speaker-grid-item');
    $(this).removeClass('selected-speaker-grid-item');
    $(this).find('.selected_speaker_grid_item_metadata').addClass('hidden');    
    });
    $(this).find('.selected_speaker_grid_item_metadata').removeClass('hidden'); 
    $(this).removeClass('unselected-speaker-grid-item');
    $(this).addClass('selected-speaker-grid-item');
         
    $(this).find('.speaker_read_more').click(function(event){
    var lightbox_save = $(this).parents().eq(1).find('.lightboxed').clone();  
    $(lightbox_save).lightbox_me({
        centered: true,
        appearEffect: "fadeIn",
        closeClick: "true",
        destroyOnClose: "true",
        overlaySpeed: "10",
        lightboxSpeed: "fast",
        closeSelector: ".close",
        onClose: function() {
        $('body').children('.lightboxed').remove()
        $('body').children('.js_lb_overlay').remove()
        }
        });
    });
        
    $('.close_active').click(function(event){ 
    event.stopPropagation();    
    $('.grid-item-container.speakers-item').each(function() { 
    $(this).addClass('unselected-speaker-grid-item');
    $(this).removeClass('selected-speaker-grid-item');
    $(this).find('.selected_speaker_grid_item_metadata').addClass('hidden');    
    });
    });         
    }); 
    }
    
    $(window).load(function() {
        $(document).ready(leadershipGridBox);
    });
    }
});

//LIGHTBOX CODE
(function ($) {

    $.fn.lightbox_me = function(options) {

        return this.each(function() {

            var
                opts = $.extend({}, $.fn.lightbox_me.defaults, options),
                $overlay = $(),
                $self = $(this),
                $iframe = $('<iframe id="foo" style="z-index: ' + (opts.zIndex + 1) + ';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>');

            if (opts.showOverlay) {
                //check if there's an existing overlay, if so, make subequent ones clear
               var $currentOverlays = $(".js_lb_overlay:visible");
                if ($currentOverlays.length > 0){
                    $overlay = $('<div class="lb_overlay_clear js_lb_overlay"/>');
                } else {
                    $overlay = $('<div class="' + opts.classPrefix + '_overlay js_lb_overlay"/>');
                }
            }

            /*----------------------------------------------------
               DOM Building
            ---------------------------------------------------- */
            $('body').append($self.hide()).append($overlay);


            /*----------------------------------------------------
               Overlay CSS stuffs
            ---------------------------------------------------- */

            // set css of the overlay
            if (opts.showOverlay) {
                setOverlayHeight(); // pulled this into a function because it is called on window resize.
                $overlay.css({ position: 'absolute', width: '100%', top: 0, left: 0, right: 0, bottom: 0, zIndex: (opts.zIndex + 2), display: 'none' });
                if (!$overlay.hasClass('lb_overlay_clear')){
                    $overlay.css(opts.overlayCSS);
                }
            }

            /*----------------------------------------------------
               Animate it in.
            ---------------------------------------------------- */
               //
            if (opts.showOverlay) {
                $overlay.fadeIn(opts.overlaySpeed, function() {
                    setSelfPosition();
                    $self[opts.appearEffect](opts.lightboxSpeed, function() { setOverlayHeight(); setSelfPosition(); opts.onLoad()});
                });
            } else {
                setSelfPosition();
                $self[opts.appearEffect](opts.lightboxSpeed, function() { opts.onLoad()});
            }

            /*----------------------------------------------------
               Hide parent if parent specified (parentLightbox should be jquery reference to any parent lightbox)
            ---------------------------------------------------- */
            if (opts.parentLightbox) {
                opts.parentLightbox.fadeOut(200);
            }


            /*----------------------------------------------------
               Bind Events
            ---------------------------------------------------- */

            $(window).resize(setOverlayHeight)
                     .resize(setSelfPosition)
                     .scroll(setSelfPosition);

            $(window).bind('keyup.lightbox_me', observeKeyPress);

            if (opts.closeClick) {
                $overlay.click(function(e) { closeLightbox(); e.preventDefault; });
            }
            $self.delegate(opts.closeSelector, "click", function(e) {
                closeLightbox(); e.preventDefault();
            });
            $self.bind('close', closeLightbox);
            $self.bind('reposition', setSelfPosition);



            /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
              -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


            /*----------------------------------------------------
               Private Functions
            ----------------------------------------------------*/

            /* Remove or hide all elements */
            function closeLightbox() {
                var s = $self[0].style;
                if (opts.destroyOnClose) {
                    $self.add($overlay).remove();
                } else {
                    $self.add($overlay).hide();
                }

                //show the hidden parent lightbox
                if (opts.parentLightbox) {
                    opts.parentLightbox.fadeIn(200);
                }
                if (opts.preventScroll) {
                    $('body').css('overflow', '');
                }
                $iframe.remove();

                        // clean up events.
                $self.undelegate(opts.closeSelector, "click");
                $self.unbind('close', closeLightbox);
                $self.unbind('repositon', setSelfPosition);
                
                $(window).unbind('resize', setOverlayHeight);
                $(window).unbind('resize', setSelfPosition);
                $(window).unbind('scroll', setSelfPosition);
                $(window).unbind('keyup.lightbox_me');
                opts.onClose();
            }


            /* Function to bind to the window to observe the escape/enter key press */
            function observeKeyPress(e) {
                if((e.keyCode == 27 || (e.DOM_VK_ESCAPE == 27 && e.which==0)) && opts.closeEsc) closeLightbox();
            }


            /* Set the height of the overlay
                    : if the document height is taller than the window, then set the overlay height to the document height.
                    : otherwise, just set overlay height: 100%
            */
            function setOverlayHeight() {
                if ($(window).height() < $(document).height()) {
                    $overlay.css({height: $(document).height() + 'px'});
                     $iframe.css({height: $(document).height() + 'px'});
                } else {
                    $overlay.css({height: '100%'});
                }
            }


            /* Set the position of the modal'd window ($self)
                    : if $self is taller than the window, then make it absolutely positioned
                    : otherwise fixed
            */
            function setSelfPosition() {
                var s = $self[0].style;

                // reset CSS so width is re-calculated for margin-left CSS
                $self.css({left: '50%', marginLeft: ($self.outerWidth() / 2) * -1,  zIndex: (opts.zIndex + 3) });


                /* we have to get a little fancy when dealing with height, because lightbox_me
                    is just so fancy.
                 */

                // if the height of $self is bigger than the window and self isn't already position absolute
                if (($self.height() + 80  >= $(window).height()) && ($self.css('position') != 'absolute')) {

                    // we are going to make it positioned where the user can see it, but they can still scroll
                    // so the top offset is based on the user's scroll position.
                    var topOffset = $(document).scrollTop() + 40;
                    $self.css({position: 'absolute', top: topOffset + 'px', marginTop: 0})
                } else if ($self.height()+ 80  < $(window).height()) {
                    //if the height is less than the window height, then we're gonna make this thing position: fixed.
                    if (opts.centered) {
                        $self.css({ position: 'fixed', top: '50%', marginTop: ($self.outerHeight() / 2) * -1})
                    } else {
                        $self.css({ position: 'fixed'}).css(opts.modalCSS);
                    }
                    if (opts.preventScroll) {
                        $('body').css('overflow', 'hidden');
                    }
                }
            }

        });



    };

    $.fn.lightbox_me.defaults = {

        // animation
        appearEffect: "fadeIn",
        appearEase: "",
        overlaySpeed: 250,
        lightboxSpeed: 300,

        // close
        closeSelector: ".close",
        closeClick: false,
        closeEsc: true,

        // behavior
        destroyOnClose: false,
        showOverlay: true,
        parentLightbox: false,
        preventScroll: false,

        // callbacks
        onLoad: function() {},
        onClose: function() {},

        // style
        classPrefix: 'lb',
        zIndex: 999,
        centered: false,
        modalCSS: {top: '40px'},
        overlayCSS: {background: 'black', opacity: .3}
    }
})(jQuery);

   $(".moreClick").unbind('click').click(function(e){
      e.preventDefault();
 
      var up = $(this).find('span').hasClass('chevron');
      var down = $(this).hasClass('.chevron-down');

      if(up){
      
        $(this).find('span').addClass('chevron-down').html('Less');
        $(this).find('span').removeClass('chevron');
        $(this).next().slideToggle('fast');

      }else{

         $(this).find('span').addClass('chevron').html('More');
        $(this).find('span').removeClass('chevron-down');
        $(this).next().slideToggle('fast');

      }
     });



var listjsObj = {
    paginationSize: 4,

    init: function() {
        function Utils() {            

        }

        Utils.prototype = {
            constructor: Utils,
            isElementInView: function (element, fullyInView) {
                var pageTop = $(window).scrollTop();
                var pageBottom = pageTop + $(window).height();
                var elementTop = $(element).offset().top;
                var elementBottom = elementTop + $(element).height();

                if (fullyInView === true) {
                    return ((pageTop < elementTop) && (pageBottom > elementBottom));
                } else {
                    return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
                }
            }
        };

		var Utils = new Utils();

        $('.numberPagination').each(function(i) {
            $(this).find('.pageClass').each(function(j) {
                if (j >= listjsObj.paginationSize) {
                    $(this).hide();
                }
                $(this).html(parseInt(this.innerText, 10));
            });
        });

        $("div#scllPgUp").click(function() {
			listjsObj.scrollTopList($(this));
        });

        $('.list-advanced').mouseover(function() {
            var className = null;
            if($('.list-advanced .yearPagination').length > 0)
                className = '.list-advanced .yearPagination';
            if($('.list-advanced .newListPaginate').length > 0)
                className = '.list-advanced .newListPaginate';
            if(className != null){
                var isElementInView = Utils.isElementInView($(className), false);
                if (!isElementInView) {
                    $('div#scllPgUp').show();
                }
            }
        });

        $('.pageClass').click(function() {
            var parentId = this.parentElement.id;
            var currId = this.id.split('-')[1];
            $('div').find('.pageClass').removeClass('page-active');
            $(this).addClass('page-active');
            listjsObj.showContent(parentId, currId);
        });

        $("select.dropdown").change(function() {
            var parentId = this.id.split('-')[1]
            var currId = this.value;
            listjsObj.showContent(parentId, currId);
        });
    },

    scrollTopList : function(currScroll){
        $("html, body").animate({
            scrollTop: $(currScroll.parent()).offset().top - 50
        }, 1000);
    },

    showContent: function(parentId, idVal) {
        $('.newListPagination#' + parentId + ' > .pagContainer').each(function(i) {
            var contentId = this.id.split('-')[1];
            if (contentId === idVal) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

         $('.newListPagination > .pagContainerAlpha').each(function(i) {
            var contentId = this.id.split('-')[1];
            if (contentId === idVal) {
                $('html, body').animate({
                    scrollTop: $(this).offset().top
                }, 1000);
            }
        });
    },

    pagination: function() {
        function pgPreNxt(ptrId, pgNum) {
            var length = $('.pagination#'+ptrId+' button').length - 2;
            $('.pagination#'+ptrId+' button.next').prop('disabled', false);
            $('.pagination#'+ptrId+' button.prev').prop('disabled', false);
            if (pgNum <= 1) {
                $('.pagination#'+ptrId+' button.prev').prop('disabled', true);
            }
            if (pgNum >= length) {
                $('.pagination#'+ptrId+' button.next').prop('disabled', true);
            }
            if ($('.pagination#'+ptrId+'>button#page-' + (+pgNum + +1)).is(':hidden')) {
                $('.pagination#'+ptrId+'>button#page-' + (+pgNum + +1)).show();
                $('.pagination#'+ptrId+'>button#page-' + (+pgNum - +3)).hide();
            } else if ($('.pagination#'+ptrId+'>button#page-' + (+pgNum - +1)).is(':hidden')) {
                $('.pagination#'+ptrId+'>button#page-' + (+pgNum - +1)).show();
                $('.pagination#'+ptrId+'>button#page-' + (+pgNum + +3)).hide();
            }
            listjsObj.showContent(ptrId, pgNum);
        };
        $('.pagination>button').click(function() {
            var parentId = this.parentElement.id;
            var currId = this.id.split('-')[1];
            var pageNumber = this.id.split('-')[1];
            $('.pagination#'+parentId).find('button').removeClass('active');
            $('.pagination#'+parentId).find('button#page-'+pageNumber).addClass('active');
            pgPreNxt(parentId, pageNumber);
            $('.pagination#'+parentId+' button.prev').attr('id', 'prev-' + (+pageNumber - +1));
            $('.pagination#'+parentId+' button.next').attr('id', 'next-' + (+pageNumber + +1));
            var currList  = $(this).parents()[1];
            listjsObj.scrollTopList($(currList));
        });

    },

}



jQuery(function($) {
    if($('.list-advanced').length > 0){
        listjsObj.init();
        listjsObj.pagination();
    }
});
jQuery(function($) {
    if ($('#easyPaginate').length) {

        $( document ).ready(function() {
            $("ul.paginate").each(function() {
                var getLi = $(this).find('li');

                $(this).html(getLi);
                $(this).html(getLi).fadeIn('slow');

                //if date is set sort
                if (getLi.attr('data-date')) {

                    $(getLi).sort(sort_li).appendTo(this);

                    function sort_li(a, b) {

                        var d1 = $(b).data('date');
                            d2 = $(a).data('date');

                        if (typeof d1 === 'string' && typeof d2 === 'string') {
                         var aa = d1.split('/').reverse();
                         var bb = d2.split('/').reverse();
                         aa = dateUpdate(aa);
                         bb = dateUpdate(bb);

                         return aa < bb ? -1 : (aa > bb ? 1 : 0);
                        }
                    }

                    function dateUpdate(arrItem){
                        var retItem = "";
                        for(var i=0;i<arrItem.length;i++){
							retItem += ('0000' + arrItem[i]).substr(-4);
                        }
                        return retItem;
                    }


                } //no date reverse order
                else {
                    $(this).html(getLi.get().reverse());
                }


                var divs = $(this).find('li');
                var pag = $(this).parent().find("#easyPaginate").attr("data-pagNum");
                var j = 0;
                var covertToPagNum = parseInt(pag);

                if (pag == null) {
                    pag = 10;
                }

                for (var i = 0; i < divs.length; i += covertToPagNum) {
                    j++;
                    divs.slice(i, i + covertToPagNum).wrapAll("<div class='pagContainer new" + [j] + "'></div>");

                    $(this).parent().find('#easyPaginate').append("<li data-pag='new" + [j] + "'><a href='#'>" + [j] + "</a></li>");
                }



                $(this).parent().find(".pagContainer").hide();
                $(this).parent().find('#easyPaginate li').first().addClass('active').attr("data-pag");

                var showFirst = $(this).parent().find('#easyPaginate li').first().attr("data-pag");
                $("." + showFirst).show();

                if ($(this).parents('.list').find('.pagination .mk-removelistpages')[0]) {

                    $(this).parent().find('.pagContainer:not(:first)').remove();


                }

                $(this).parent().find('#easyPaginate a').unbind('click').click(function(event) {
                    event.preventDefault();
                    $(this).parents('.list').find('.paginate .pagContainer').hide();
                    $(this).parents('.list').find('#easyPaginate li').removeClass('active');
                    $(this).parent().addClass('active');
                    var activePage = $(this).parent().attr("data-pag");
                    // alert(activePage);
                    $(this).parents('.list').find(".paginate ." + activePage).show();

                    /* Act on the event */
                });

            });

        });
    } /*End List Children Check*/
});
//---Flexible Pricing Table Component JS ---//

$(function ( $ ) {
     //Check if this component exists
	if($(".flexible-pricing-table").length){

	  $('.cell-wrapper').hover(
	 
		  	function() {

		  		if (!$(this).parent().hasClass('skip')) {
		  			$(this).parent().children('.cell-wrapper').addClass("hover");
		  		}

		  	}, function() {
		  		$(this).parent().children('.cell-wrapper').removeClass("hover");
		  	}
	  	);

	  	$(".detail p:not(:contains($))").css('font-size','20px');
	  	$(".detail p:not(:contains($))").css('font-weight','normal');

	}// end if flexible table exist

}( window.jQuery ));
$(function ( $ ) {
 if($('#dropdownbtn').length){
    $("#dropdownbtn").on("click", function() {

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(".dropdownbtncontainer").attr('style', '');
        } else {
            $(this).addClass('active');
            $(".dropdownbtncontainer").css({
                'display': 'block',
                'position': 'absolute'
            });
        }

    });

    }// end if drop down btn exist

}( window.jQuery ));

$(function ( $ ) {

$.fn.accordionMenu = function(options) {
   //////// Accordion default action //////

   var settings = $.extend({
   // These are the defaults.
               container: ".accordion_content",
               autoClose: "false"
               
           }, options );
   $(this).each(function(){

     var up = $(this).attr('data-acc');
     var con = settings.container;


     if(up === 'open'){
       //////// Open Accordion by default //////
  if($(this).hasClass('agenda')){
     $(this).find('.agenda-content').addClass('active_acc').find(con).css({display: 'block'}).addClass('active_acc');

  }else{
    $(this).addClass('active_acc acc_border').find(con).css({display: 'block'});

  }
      
       $(this).find('.acc-icon').addClass('acc_minus');
       //$(this).parent().parent().find('.accordian_menu').last().find('.accordion').addClass('acc_bottom_border');

       }else{
        // alert('what');
         //////// Close Accordion by default //////
           //$(this).parent().find('.accordion').first().removeClass('acc_bottom_border');
         $(this).addClass('acc_border').find('.acc-icon').addClass('acc_plus');
        
        // $(this).parent().parent().find('.accordian_menu').last().find('.accordion').addClass('acc_bottom_border');

       }
     
     ///// Hash Tag URL - Opens a selcted accordion menu by default.
     var p = window.location.hash.substring(1);
     //remove white space from string
     var newStr = p.replace(/[^A-Z0-9]/ig, "");
     //alert(newStr);
     var h = $(this).attr('id');
     var s = $(this).siblings();

     //alert(h);

     if (newStr === h) {

       var v = $(this).attr('data-acc', 'closed');

       if (up == 'closed') {
         //////// Close Accordion //////
         $(this).attr('data-acc', 'open');
         $(this).addClass('active_acc acc_border').find(con).addClass('active_acc');
         $(this).find('.acc-icon').removeClass('acc_plus').addClass('acc_minus');

       }

       $(this).find('div.accordion_content').slideToggle("slow");
       $(s).attr('data-acc', 'closed');
       $(s).find(con).css({
         display: 'none'
       }).removeClass('active_acc');
       $(s).find('h3').find('.acc-icon').removeClass('acc_minus').addClass('acc_plus');
       $(s).removeClass('active_acc');

     }

      });
   //////// Accordion click function //////

    $(this).find('h3').click(function(e){
     
      e.preventDefault();
   
      var up = $(this).parent().attr('data-acc');
      var auto= settings.autoClose;
      var con = settings.container;

      if(auto == 'true'){
         $(this).parent().siblings().attr('data-acc', 'closed');
         $(this).parent().siblings().find(con).css({display: 'none'}).removeClass('active_acc');
         $(this).parent().siblings().find('h3').find('.acc-icon').removeClass('acc_minus').addClass('acc_plus');
         $(this).parent().siblings().removeClass('active_acc');

      }
     
      $(this).parent().find('div.accordion_content').slideToggle( "slow" );
 
      if(up == 'closed'){
       //////// Close Accordion //////
          $(this).parent().attr('data-acc', 'open');
          $(this).parent().addClass('active_acc acc_border').find(con);
          $(this).parent().find('.acc-icon').removeClass('acc_plus').addClass('acc_minus');
     
       }else{
         //////// Open Accordion //////
           $(this).parent().attr('data-acc', 'closed');
           $(this).parent().removeClass('active_acc').find(con).removeClass('active_acc');
           $(this).parent().find('.acc-icon').removeClass('acc_minus').addClass('acc_plus');
           }

   });

};
$("div.accordion").accordionMenu();
$(".accordionAuto").accordionMenu({autoClose:'true'});
}( window.jQuery ));

$(document).ready(function() {
    if (typeof partnerForm != "undefined") {
        $.post("/bin/services/content/cloudera/userinfo", function(data){
            partnerForminit(data);
        }).fail(function() {
            console.log('UserInfo Failed');
        });
    }
});
//Order of precedence for Demandbase Targeted Lists - as is in leftpromo.js
//1. targetCompany
//2. TrainingCredits
//3. CDSW-HDP
//4. CDF-CDH
//5. Netezza
//6. FY20Target
//7. targetIndustry
//default

$(function($) {

    if (document.getElementById("cta-sticky") !== null) {
        //grab cta_bar element by cta-sticky data-name
        var ctaBarData = $('#cta-sticky').attr('data-name');
        //grab placeholder span for the Target Company name to go
        var ctaBar_greetTargetCo_span = $('.greetTargetCo');
        var ctaBar_targetCompany = "";
        var ctaBar_targetListArry = "";

        //try-catch in case Demandbase is not populating the Demandbase object
        try{
            ctaBar_targetCompany = sessionStorage.s_dmdbase_custom1.split(':')[0];
            ctaBar_targetListArry = sessionStorage.s_dmdbase_custom4.split(':');
        }catch(e){
            ctaBar_targetCompany = "";
            ctaBar_targetListArry = "";
        }

        //handler to remove cta-sticky when a user has clicked the 'x' to close the bar, navs away from the page, and navs back
        if(getCookie('cld_promo') != undefined && getCookie('cld_promo').indexOf('sticky_promo') > -1){
            $('#cta-sticky').remove();
        }

        //loop the array of targeted lists for the user and if it finds a value that matches the specified targeted list from the dialog, show the sticky bar
        $(ctaBar_targetListArry).each(function (index, value) {
            if (value === ctaBarData) {
                $('#cta-sticky[data-name="'+ctaBarData+'"]').show();
                return;
            }
        });

        //default show the sticky bar if no target defined
        if(ctaBarData === undefined) {
            $('#cta-sticky').show();
        } 

        //if the greetTargetCo span exists on the page, then populate with the target company name from the DemandB Object (however need this to work if the element is dynamically added to the page meaning it will only work on load of the published page and not within edit mode.)   
        if ($(ctaBar_greetTargetCo_span).length) {
            $(ctaBar_greetTargetCo_span).text('Hi '+ctaBar_targetCompany+'! '); 
        }

        $(window).load(function() {
            // grab the initial top offset of the navigation 
            var stickyNavTop = $('#cta-sticky').offset().top;
            // our function that decides weather the navigation bar should have "fixed" css position or not.
            var stickyNav = function() {
                var scrollTop = $(window).scrollTop(); // our current vertical position from the top
                // if we've scrolled more than the navigation, change its position to fixed to stick to top,
                // otherwise change it back to relative
                if (scrollTop > stickyNavTop) {
                    $('#cta-sticky').addClass('sticky');
                } else {
                    $('#cta-sticky').removeClass('sticky');
                }
            };

            stickyNav();
            // and run it again every time you scroll
            $(window).scroll(function() {
                stickyNav();
            });
            $(window).resize(function() {
                stickyNav();
            });

            $('.cta-bar-close').click(function(event) {
                /* Act on the event */
                $(this).parents('.cta-bar').remove();
                var now = new Date();
                now.setDate(now.getDate() + 1);
                var stickyval = getCookie('cld_promo') != undefined ? getCookie('cld_promo') + ',sticky_promo' : 'sticky_promo';
                document.cookie = 'cld_promo=' + stickyval + ';expires=' + now.toUTCString() + '; path=/';
            });
        });
    }
}(window.jQuery));
//Layout Yellow Line under h4 in white box 
jQuery(function($) {
    $('.white').find("h4").append('<div class="yellow-line"></div>');
    // Make Entire box clickable in white box with linked h4
    $('.white').each(function() {
        if ($(this).find($("h4")).length > 0) {
            // Find its associated anchor    
            var wrapped_anchor = $(this).find('h4').find('a:first').attr('href');    
            // Wrap the div 
            $(this).wrap('<a class="wrapped_white_text_box" href="' + wrapped_anchor + '"></a>;');
            var learn_more_div = $('<div class="learn-more-div"><button class="learn-more-button www-btn"><b>Learn More</b></button></div>')
            
            $(this).children().first().append(learn_more_div); 
            $(this).hover(function() {
                $(this).addClass("learn-more-hover");
            }, 
                function(){
                $(this).removeClass("learn-more-hover");
            });

           // $(this).hover($('.learn-more-div').css("visibility: visible;")); 
        }
    });
});
//Tabs ///////////////////////////////// Tabs /////////////////////////////////
$(function ( $ ) {
     //Check if .tabs exist
if($(".tabs").length){

  $.fn.tabbed = function(options) {
      $('.tabs .tab_default:first-child').addClass('selected_tab');
      $('.tab0').addClass('selected-content');
     
    $(this).click(function(e){
            e.preventDefault();
            
            var myDiv = $(this).attr('data-tab');
            var parent = $(this).parent().parent().parent();
            //alert(parent);
            $(parent).find('div').removeClass('selected-content');
            $(parent).find('div.'+myDiv).addClass('selected-content');
            $(parent).find('li').removeClass('selected_tab');
             $(this).parent().addClass('selected_tab');
        });

            function hash() {
            var p = window.location.hash.substring(1);
            if (p == ""){p = "empty"};    
            var h = $('.tabs').find('a[ data-tab=' + p + ']');
            var i = $(h).attr('data-tab');
                //alert(p);

            if (i === p) {

                $('.' + i).parent().find('div').removeClass('selected-content');
                $('.' + i).parent().addClass('selected-content');
                $('.' + i).addClass('selected-content').children().css('display', 'none');
                $('.' + i).addClass('selected-content').children().fadeIn();
                $('.' + i).parent().find('li').removeClass('selected_tab');
                $('.' + i).parent().find('a[ data-tab=' + p + ']').parent().addClass('selected_tab');

            }

        }

        hash();

        $(window).on('hashchange', function() {
            hash();
        });


  };
  
    $('.tab_control').tabbed();

   }// end if tabs exist


        }( window.jQuery ));
//Tabs ///////////////////////////////// Tabs /////////////////////////////////

(function (document, $, ns) {

    "use strict";

    $(document).on("click", ".cq-dialog-submit", function (e) {


        var validation = $('.cq-Dialog').find('coral-multifield').attr("data-validation");
        var $form;
        if (validation !== null && validation !== undefined && validation !== "") {
            $form = $(this).closest("form.foundation-form");
            var splitArray = validation.split("=");
            var message;
            var clazz = "coral-Button ";
            if (splitArray.length > 1 && splitArray[0] === "minmultifieldlimit") {
                e.stopPropagation();
                e.preventDefault();

                var limit = splitArray[1];
                var itemCount = 0;
                $('.cq-Dialog').find('coral-multifield').children('coral-multifield-item').each(function (i) {
                    itemCount += 1;
                });
                if (itemCount < parseInt(limit)) {
                    message = "Minimum " + limit + " links are required. Are you sure to submit?";
                    clazz = clazz + "coral-Button--warning";
                }
                else {
                    message = "Are you sure to submit?";
                }
            }



        ns.ui.helpers.prompt({

            title: Granite.I18n.get("Confirm"),

            message: message,

            actions: [{

                id: "CANCEL",

                text: "CANCEL",

                className: "coral-Button"

            },{

                id: "SUBMIT",

                text: "SUBMIT",

                className: clazz

            }

            ],

            callback: function (actionId) {

                if (actionId === "SUBMIT") {

                    $form.submit();

                }

            }

        });

        }
    });

})(document, Granite.$, Granite.author);
/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.5
 * 2018-01-22 15:49:54
 *
 * By Eli Grey, https://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/src/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this
));

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("print-js", [], factory);
	else if(typeof exports === 'object')
		exports["print-js"] = factory();
	else
		root["print-js"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal__ = __webpack_require__(3);



var Print = {
  send: function send(params, printFrame) {
    // Append iframe element to document body
    document.getElementsByTagName('body')[0].appendChild(printFrame);

    // Get iframe element
    var iframeElement = document.getElementById(params.frameId);

    // Wait for iframe to load all content
    if (params.type === 'pdf' && (__WEBPACK_IMPORTED_MODULE_0__browser__["a" /* default */].isIE() || __WEBPACK_IMPORTED_MODULE_0__browser__["a" /* default */].isEdge())) {
      iframeElement.setAttribute('onload', finishPrint(iframeElement, params));
    } else {
      printFrame.onload = function () {
        if (params.type === 'pdf') {
          finishPrint(iframeElement, params);
        } else {
          // Get iframe element document
          var printDocument = iframeElement.contentWindow || iframeElement.contentDocument;
          if (printDocument.document) printDocument = printDocument.document;

          // Inject printable html into iframe body
          printDocument.body.innerHTML = params.htmlData;

          // If printing image, wait for it to load inside the iframe (skip firefox)
          if (params.type === 'image') {
            loadImageAndFinishPrint(printDocument.getElementById('printableImage'), iframeElement, params);
          } else {
            finishPrint(iframeElement, params);
          }
        }
      };
    }
  }
};

function finishPrint(iframeElement, params) {
  iframeElement.focus();

  // If Edge or IE, try catch with execCommand
  if (__WEBPACK_IMPORTED_MODULE_0__browser__["a" /* default */].isEdge() || __WEBPACK_IMPORTED_MODULE_0__browser__["a" /* default */].isIE()) {
    try {
      iframeElement.contentWindow.document.execCommand('print', false, null);
    } catch (e) {
      iframeElement.contentWindow.print();
    }
  }

  // Other browsers
  if (!__WEBPACK_IMPORTED_MODULE_0__browser__["a" /* default */].isIE() && !__WEBPACK_IMPORTED_MODULE_0__browser__["a" /* default */].isEdge()) {
    iframeElement.contentWindow.print();
  }

  // Remove embed on IE (just because it isn't 100% hidden when using h/w = 0)
  if (__WEBPACK_IMPORTED_MODULE_0__browser__["a" /* default */].isIE() && params.type === 'pdf') {
    setTimeout(function () {
      iframeElement.parentNode.removeChild(iframeElement);
    }, 2000);
  }

  // If we are showing a feedback message to user, remove it
  if (params.showModal) {
    __WEBPACK_IMPORTED_MODULE_1__modal__["a" /* default */].close();
  }
  if (params.onLoadingEnd) {
    params.onLoadingEnd();
  }
}

function loadImageAndFinishPrint(img, iframeElement, params) {
  if (typeof img.naturalWidth === 'undefined' || img.naturalWidth === 0) {
    setTimeout(function () {
      loadImageAndFinishPrint(img, iframeElement, params);
    }, 500);
  } else {
    finishPrint(iframeElement, params);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Print);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Browser = {
  // Firefox 1.0+
  isFirefox: function isFirefox() {
    return typeof InstallTrigger !== 'undefined';
  },
  // Internet Explorer 6-11
  isIE: function isIE() {
    return navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode;
  },
  // Edge 20+
  isEdge: function isEdge() {
    return !Browser.isIE() && !!window.StyleMedia;
  },
  // Chrome 1+
  isChrome: function isChrome() {
    return !!window.chrome && !!window.chrome.webstore;
  },
  // At least Safari 3+: "[object HTMLElementConstructor]"
  isSafari: function isSafari() {
    return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || navigator.userAgent.toLowerCase().indexOf('safari') !== -1;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Browser);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addWrapper;
/* harmony export (immutable) */ __webpack_exports__["b"] = capitalizePrint;
/* harmony export (immutable) */ __webpack_exports__["c"] = collectStyles;
/* harmony export (immutable) */ __webpack_exports__["d"] = loopNodesCollectStyles;
/* harmony export (immutable) */ __webpack_exports__["e"] = addHeader;
function addWrapper(htmlData, params) {
  var bodyStyle = 'font-family:' + params.font + ' !important; font-size: ' + params.font_size + ' !important; width:100%;';
  return '<div style="' + bodyStyle + '">' + htmlData + '</div>';
}

function capitalizePrint(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function collectStyles(element, params) {
  var win = document.defaultView || window;

  var style = [];

  // String variable to hold styling for each element
  var elementStyle = '';

  if (win.getComputedStyle) {
    // Modern browsers
    style = win.getComputedStyle(element, '');

    // Styles including
    var targetStyles = params.targetStyles || ['border', 'box', 'break', 'text-decoration'];

    // Exact match
    var targetStyle = params.targetStyle || ['clear', 'display', 'width', 'min-width', 'height', 'min-height', 'max-height'];

    // Optional - include margin and padding
    if (params.honorMarginPadding) {
      targetStyles.push('margin', 'padding');
    }

    // Optional - include color
    if (params.honorColor) {
      targetStyles.push('color');
    }

    for (var i = 0; i < style.length; i++) {
      for (var s = 0; s < targetStyles.length; s++) {
        if (targetStyles[s] === '*' || style[i].indexOf(targetStyles[s]) !== -1 || targetStyle.indexOf(style[i]) !== -1) {
          elementStyle += style[i] + ':' + style.getPropertyValue(style[i]) + ';';
        }
      }
    }
  } else if (element.currentStyle) {
    // IE
    style = element.currentStyle;

    for (var name in style) {
      if (style.indexOf('border') !== -1 && style.indexOf('color') !== -1) {
        elementStyle += name + ':' + style[name] + ';';
      }
    }
  }

  // Print friendly defaults
  elementStyle += 'max-width: ' + params.maxWidth + 'px !important;' + params.font_size + ' !important;';

  return elementStyle;
}

function loopNodesCollectStyles(elements, params) {
  for (var n = 0; n < elements.length; n++) {
    var currentElement = elements[n];

    // Form Printing - check if is element Input
    var tag = currentElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
      // Save style to variable
      var textStyle = collectStyles(currentElement, params);

      // Remove INPUT element and insert a text node
      var parent = currentElement.parentNode;

      // Get text value
      var textNode = tag === 'SELECT' ? document.createTextNode(currentElement.options[currentElement.selectedIndex].text) : document.createTextNode(currentElement.value);

      // Create text element
      var textElement = document.createElement('div');
      textElement.appendChild(textNode);

      // Add style to text
      textElement.setAttribute('style', textStyle);

      // Add text
      parent.appendChild(textElement);

      // Remove input
      parent.removeChild(currentElement);
    } else {
      // Get all styling for print element
      currentElement.setAttribute('style', collectStyles(currentElement, params));
    }

    // Check if more elements in tree
    var children = currentElement.children;

    if (children && children.length) {
      loopNodesCollectStyles(children, params);
    }
  }
}

function addHeader(printElement, header, headerStyle) {
  // Create header element
  var headerElement = document.createElement('h1');

  // Create header text node
  var headerNode = document.createTextNode(header);

  // Build and style
  headerElement.appendChild(headerNode);
  headerElement.setAttribute('style', headerStyle);

  printElement.insertBefore(headerElement, printElement.childNodes[0]);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Modal = {
  show: function show(params) {
    // Build modal
    var modalStyle = 'font-family:sans-serif; ' + 'display:table; ' + 'text-align:center; ' + 'font-weight:300; ' + 'font-size:30px; ' + 'left:0; top:0;' + 'position:fixed; ' + 'z-index: 9990;' + 'color: #0460B5; ' + 'width: 100%; ' + 'height: 100%; ' + 'background-color:rgba(255,255,255,.9);' + 'transition: opacity .3s ease;';

    // Create wrapper
    var printModal = document.createElement('div');
    printModal.setAttribute('style', modalStyle);
    printModal.setAttribute('id', 'printJS-Modal');

    // Create content div
    var contentDiv = document.createElement('div');
    contentDiv.setAttribute('style', 'display:table-cell; vertical-align:middle; padding-bottom:100px;');

    // Add close button (requires print.css)
    var closeButton = document.createElement('div');
    closeButton.setAttribute('class', 'printClose');
    closeButton.setAttribute('id', 'printClose');
    contentDiv.appendChild(closeButton);

    // Add spinner (requires print.css)
    var spinner = document.createElement('span');
    spinner.setAttribute('class', 'printSpinner');
    contentDiv.appendChild(spinner);

    // Add message
    var messageNode = document.createTextNode(params.modalMessage);
    contentDiv.appendChild(messageNode);

    // Add contentDiv to printModal
    printModal.appendChild(contentDiv);

    // Append print modal element to document body
    document.getElementsByTagName('body')[0].appendChild(printModal);

    // Add event listener to close button
    document.getElementById('printClose').addEventListener('click', function () {
      Modal.close();
    });
  },
  close: function close() {
    var printFrame = document.getElementById('printJS-Modal');

    printFrame.parentNode.removeChild(printFrame);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Modal);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_init__ = __webpack_require__(7);


var printjs = __WEBPACK_IMPORTED_MODULE_0__js_init__["a" /* default */].init;

if (typeof window !== 'undefined') {
  window.printJS = printjs;
}

/* harmony default export */ __webpack_exports__["default"] = (printjs);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = ({
  print: function print(params, printFrame) {
    // Get HTML printable element
    var printElement = document.getElementById(params.printable);

    // Check if element exists
    if (!printElement) {
      window.console.error('Invalid HTML element id: ' + params.printable);

      return false;
    }

    // Make a copy of the printElement to prevent DOM changes
    var printableElement = document.createElement('div');
    printableElement.appendChild(printElement.cloneNode(true));

    // Add cloned element to DOM, to have DOM element methods available. It will also be easier to colect styles
    printableElement.setAttribute('style', 'display:none;');
    printableElement.setAttribute('id', 'printJS-html');
    printElement.parentNode.appendChild(printableElement);

    // Update printableElement variable with newly created DOM element
    printableElement = document.getElementById('printJS-html');

    // Get main element styling
    printableElement.setAttribute('style', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__functions__["c" /* collectStyles */])(printableElement, params) + 'margin:0 !important;');

    // Get all children elements
    var elements = printableElement.children;

    // Get styles for all children elements
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__functions__["d" /* loopNodesCollectStyles */])(elements, params);

    // Add header if any
    if (params.header) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__functions__["e" /* addHeader */])(printableElement, params.header, params.headerStyle);
    }

    // Remove DOM printableElement
    printableElement.parentNode.removeChild(printableElement);

    // Store html data
    params.htmlData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__functions__["a" /* addWrapper */])(printableElement.innerHTML, params);

    // Print html element contents
    __WEBPACK_IMPORTED_MODULE_1__print__["a" /* default */].send(params, printFrame);
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = ({
  print: function print(params, printFrame) {
    // Create the image element
    var img = document.createElement('img');

    // Set image src with image file url
    img.src = params.printable;

    // Load image
    img.onload = function () {
      img.setAttribute('style', 'width:100%;');
      img.setAttribute('id', 'printableImage');

      // Create wrapper
      var printableElement = document.createElement('div');
      printableElement.setAttribute('style', 'width:100%');
      printableElement.appendChild(img);

      // Check if we are adding a header for the image
      if (params.header) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__functions__["e" /* addHeader */])(printableElement, params.header, params.headerStyle);
      }

      // Store html data
      params.htmlData = printableElement.outerHTML;

      // Print image
      __WEBPACK_IMPORTED_MODULE_1__print__["a" /* default */].send(params, printFrame);
    };
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__json__ = __webpack_require__(8);


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };








var printTypes = ['pdf', 'html', 'image', 'json'];

/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    var params = {
      printable: null,
      fallbackPrintable: null,
      type: 'pdf',
      header: null,
      headerStyle: 'font-weight: 300;',
      maxWidth: 800,
      font: 'TimesNewRoman',
      font_size: '12pt',
      honorMarginPadding: true,
      honorColor: false,
      properties: null,
      gridHeaderStyle: 'font-weight: bold;',
      gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',
      showModal: false,
      onLoadingStart: function onLoadingStart() {},
      onLoadingEnd: function onLoadingEnd() {},
      modalMessage: 'Retrieving Document...',
      frameId: 'printJS',
      htmlData: '',
      documentTitle: 'Document',
      targetStyle: null,
      targetStyles: null
    };

    // Check if a printable document or object was supplied
    var args = arguments[0];
    if (args === undefined) {
      throw new Error('printJS expects at least 1 attribute.');
    }

    switch (typeof args === 'undefined' ? 'undefined' : _typeof(args)) {
      case 'string':
        params.printable = encodeURI(args);
        params.fallbackPrintable = params.printable;
        params.type = arguments[1] || params.type;
        break;

      case 'object':
        params.printable = args.printable;
        params.fallbackPrintable = typeof args.fallbackPrintable !== 'undefined' ? args.fallbackPrintable : params.printable;
        params.type = typeof args.type !== 'undefined' ? args.type : params.type;
        params.frameId = typeof args.frameId !== 'undefined' ? args.frameId : params.frameId;
        params.header = typeof args.header !== 'undefined' ? args.header : params.header;
        params.headerStyle = typeof args.headerStyle !== 'undefined' ? args.headerStyle : params.headerStyle;
        params.maxWidth = typeof args.maxWidth !== 'undefined' ? args.maxWidth : params.maxWidth;
        params.font = typeof args.font !== 'undefined' ? args.font : params.font;
        params.font_size = typeof args.font_size !== 'undefined' ? args.font_size : params.font_size;
        params.honorMarginPadding = typeof args.honorMarginPadding !== 'undefined' ? args.honorMarginPadding : params.honorMarginPadding;
        params.properties = typeof args.properties !== 'undefined' ? args.properties : params.properties;
        params.gridHeaderStyle = typeof args.gridHeaderStyle !== 'undefined' ? args.gridHeaderStyle : params.gridHeaderStyle;
        params.gridStyle = typeof args.gridStyle !== 'undefined' ? args.gridStyle : params.gridStyle;
        params.showModal = typeof args.showModal !== 'undefined' ? args.showModal : params.showModal;
        params.onLoadingStart = typeof args.onLoadingStart !== 'undefined' ? args.onLoadingStart : params.onLoadingStart;
        params.onLoadingEnd = typeof args.onLoadingEnd !== 'undefined' ? args.onLoadingEnd : params.onLoadingEnd;
        params.modalMessage = typeof args.modalMessage !== 'undefined' ? args.modalMessage : params.modalMessage;
        params.documentTitle = typeof args.documentTitle !== 'undefined' ? args.documentTitle : params.documentTitle;
        params.targetStyle = typeof args.targetStyle !== 'undefined' ? args.targetStyle : params.targetStyle;
        params.targetStyles = typeof args.targetStyles !== 'undefined' ? args.targetStyles : params.targetStyles;
        break;
      default:
        throw new Error('Unexpected argument type! Expected "string" or "object", got ' + (typeof args === 'undefined' ? 'undefined' : _typeof(args)));
    }

    if (!params.printable) {
      throw new Error('Missing printable information.');
    }

    if (!params.type || typeof params.type !== 'string' || printTypes.indexOf(params.type.toLowerCase()) === -1) {
      throw new Error('Invalid print type. Available types are: pdf, html, image and json.');
    }

    // Check if we are showing a feedback message to the user (useful for large files)
    if (params.showModal) {
      __WEBPACK_IMPORTED_MODULE_1__modal__["a" /* default */].show(params);
    }
    if (params.onLoadingStart) {
      params.onLoadingStart();
    }

    // To prevent duplication and issues, remove printFrame from the DOM, if it exists
    var usedFrame = document.getElementById(params.frameId);

    if (usedFrame) {
      usedFrame.parentNode.removeChild(usedFrame);
    }

    // Create a new iframe or embed element (IE prints blank pdf's if we use iframe)
    var printFrame = void 0;

    // Create iframe element
    printFrame = document.createElement('iframe');

    // Hide iframe
    printFrame.setAttribute('style', 'display:none;');

    // Set element id
    printFrame.setAttribute('id', params.frameId);

    // For non pdf printing, pass an empty html document to srcdoc (force onload callback)
    if (params.type !== 'pdf') {
      printFrame.srcdoc = '<html><head><title>' + params.documentTitle + '</title></head><body></body></html>';
    }

    // Check printable type
    switch (params.type) {
      case 'pdf':
        // Check browser support for pdf and if not supported we will just open the pdf file instead
        if (__WEBPACK_IMPORTED_MODULE_0__browser__["a" /* default */].isFirefox() || __WEBPACK_IMPORTED_MODULE_0__browser__["a" /* default */].isEdge() || __WEBPACK_IMPORTED_MODULE_0__browser__["a" /* default */].isIE()) {
          console.log('PrintJS currently doesn\'t support PDF printing in Firefox, Internet Explorer and Edge.');
          var win = window.open(params.fallbackPrintable, '_blank');
          win.focus();
          // Make sure there is no loading modal opened
          if (params.showModal) __WEBPACK_IMPORTED_MODULE_1__modal__["a" /* default */].close();
          if (params.onLoadingEnd) params.onLoadingEnd();
        } else {
          __WEBPACK_IMPORTED_MODULE_2__pdf__["a" /* default */].print(params, printFrame);
        }
        break;
      case 'image':
        __WEBPACK_IMPORTED_MODULE_4__image__["a" /* default */].print(params, printFrame);
        break;
      case 'html':
        __WEBPACK_IMPORTED_MODULE_3__html__["a" /* default */].print(params, printFrame);
        break;
      case 'json':
        __WEBPACK_IMPORTED_MODULE_5__json__["a" /* default */].print(params, printFrame);
        break;
      default:
        throw new Error('Invalid print type. Available types are: pdf, html, image and json.');
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




/* harmony default export */ __webpack_exports__["a"] = ({
  print: function print(params, printFrame) {
    // Check if we received proper data
    if (_typeof(params.printable) !== 'object') {
      throw new Error('Invalid javascript data object (JSON).');
    }

    // Check if properties were provided
    if (!params.properties || _typeof(params.properties) !== 'object') {
      throw new Error('Invalid properties array for your JSON data.');
    }

    // Variable to hold the html string
    var htmlData = '';

    // Check print has header
    if (params.header) {
      htmlData += '<h1 style="' + params.headerStyle + '">' + params.header + '</h1>';
    }

    // Build html data
    htmlData += jsonToHTML(params);

    // Store html data
    params.htmlData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__functions__["a" /* addWrapper */])(htmlData, params);

    // Print json data
    __WEBPACK_IMPORTED_MODULE_1__print__["a" /* default */].send(params, printFrame);
  }
});

function jsonToHTML(params) {
  var data = params.printable;
  var properties = params.properties;

  var htmlData = '<div style="display:flex; flex-direction: column;">';

  // Header
  htmlData += '<div style="flex:1 1 auto; display:flex;">';

  for (var a = 0; a < properties.length; a++) {
    htmlData += '<div style="flex:1; padding:5px;' + params.gridHeaderStyle + '">' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__functions__["b" /* capitalizePrint */])(properties[a]) + '</div>';
  }

  htmlData += '</div>';

  // Data
  for (var i = 0; i < data.length; i++) {
    htmlData += '<div style="flex:1 1 auto; display:flex;">';

    // Print selected properties only
    for (var n = 0; n < properties.length; n++) {
      var stringData = data[i];

      // Support for nested objects
      var property = properties[n].split('.');
      if (property.length > 1) {
        for (var p = 0; p < property.length; p++) {
          stringData = stringData[property[p]];
        }
      } else {
        stringData = stringData[properties[n]];
      }

      htmlData += '<div style="flex:1; padding:5px;' + params.gridStyle + '">' + stringData + '</div>';
    }

    htmlData += '</div>';
  }

  htmlData += '</div>';

  return htmlData;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = ({
  print: function print(params, printFrame) {
    // If showing feedback to user, pre load pdf files (hacky)
    if (params.showModal || params.onLoadingStart || __WEBPACK_IMPORTED_MODULE_0__browser__["a" /* default */].isIE()) {
      var req = new window.XMLHttpRequest();
      req.addEventListener('load', send(params, printFrame));
      req.open('GET', window.location.origin + '/' + params.printable, true);
      req.send();
    } else {
      send(params, printFrame);
    }
  }
});

function send(params, printFrame) {
  // Set iframe src with pdf document url
  printFrame.setAttribute('src', params.printable);

  __WEBPACK_IMPORTED_MODULE_1__print__["a" /* default */].send(params, printFrame);
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
});
/*
 *  PDFjs Init
 */
if (document.getElementById('pdf-container')) {
    // If absolute URL from the remote server is provided, configure the CORS
    // header on that server.
    var url = document.getElementById('pdf-container').getAttribute('data-reference');

    // The workerSrc property shall be specified.
    PDFJS.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.303/pdf.worker.js';

    var ScaleValue = ['0.5','0.8','1.0','1.2','1.4','1.6','2','3','4'];

    var pdfDoc = null,
        pageNum = 1,
        pageRendering = false,
        pageNumPending = null,
        totalPages,
        scale = 1,
        scaleIndex = 2,
        pdfContainer = document.getElementById('pdf-container')
        canvas = pdfContainer.querySelector('.pdf-canvas'),
        ctx = canvas.getContext('2d');

    /**
     * Get page info from document, resize canvas accordingly, and render page.
     * @param num Page number.
     */
    function renderPage(num) {
        pageRendering = true;
        totalPages = pdfDoc.numPages;

        // Using promise to fetch the page
        pdfDoc.getPage(num).then(function(page) {
            var viewport = page.getViewport(scale);
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            var renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);

            // Wait for rendering to finish
            renderTask.promise.then(function() {
                pageRendering = false;
                if (pageNumPending !== null) {
                    // New page rendering is pending
                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
            });
        });

        // Update page counters
        pdfContainer.querySelector('.pdf-pages-current').textContent = num;
    }

    /**
     * If another page rendering in progress, waits until the rendering is
     * finised. Otherwise, executes rendering immediately.
     */
    function queueRenderPage(num) {
        if (pageRendering) {
            pageNumPending = num;
        } else {
            renderPage(num);
        }

        if (num < totalPages && num != 1) {
            pdfContainer.querySelector('.pdf-buttons-prev').removeAttribute('disabled');
            pdfContainer.querySelector('.pdf-buttons-next').removeAttribute('disabled');

        } else if (num === totalPages && num != 1) {
            pdfContainer.querySelector('.pdf-buttons-prev').removeAttribute('disabled');
            pdfContainer.querySelector('.pdf-buttons-next').setAttribute('disabled', 'disabled');

        } else if (num < totalPages && num === 1) {
            pdfContainer.querySelector('.pdf-buttons-prev').setAttribute('disabled','disabled');
            pdfContainer.querySelector('.pdf-buttons-next').removeAttribute('disabled');
        }
    }

    /**
     * Displays previous page.
     */
    function onPrevPage() {
        if (pageNum <= 1) {
            return;
        } else {
            pageNum--;
            queueRenderPage(pageNum);
        }
    }
    pdfContainer.querySelector('.pdf-buttons-prev').addEventListener('click', onPrevPage);

    /**
     * Displays next page.
     */
    function onNextPage() {
        if (pageNum >= pdfDoc.numPages) {
            return;
        } else {
            pageNum++;
            queueRenderPage(pageNum);
        }
    }
    pdfContainer.querySelector('.pdf-buttons-next').addEventListener('click', onNextPage);

     /**
     * ZoomIn page.
     */
    function onZoomIn() {
        scaleIndex++;
        if(scaleIndex < ScaleValue.length){
            scale = ScaleValue[scaleIndex];
            queueRenderPage(pageNum);
        }
    }
    pdfContainer.querySelector('.zoomIn').addEventListener('click', onZoomIn);

    /**
     * ZoomOut page.
     */
    function onZoomOut() {
		scaleIndex--;
        if(scaleIndex > -1){
            scale = ScaleValue[scaleIndex];
            queueRenderPage(pageNum);
        }
        queueRenderPage(pageNum);
    }
    pdfContainer.querySelector('.zoomOut').addEventListener('click', onZoomOut);

    /**
     * FitPage page.
     */
    function fitPage() {
        scaleIndex = 2;
        scale = 1;
        queueRenderPage(pageNum);
    }
    pdfContainer.querySelector('.fitToPage').addEventListener('click', fitPage);

    /**
     * Enter Presentation Mode.
     */
    function presentationMode() {
        scaleIndex = 3;
        scale = 1.2;
        $('#pdf-viewer').css('min-height',window.innerHeight + 100);
        $('#pdf-viewer').css('max-height',window.innerHeight + 100);
        $('#exitPresentationMode').show();
        $('#presentationMode').hide();
        queueRenderPage(pageNum);
        var currObj= document.getElementById("pdf-container");
        if (currObj.requestFullscreen) {
            currObj.requestFullscreen();
        } else if (currObj.mozRequestFullScreen) {
            currObj.mozRequestFullScreen();
        } else if (currObj.webkitRequestFullscreen) {
            currObj.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (currObj.msRequestFullscreen) {
            currObj.container.msRequestFullscreen();
        }

    }
    pdfContainer.querySelector('#presentationMode').addEventListener('click', presentationMode);

    /**
     * Exit Presentation Mode.
     */
    function exitPresentationMode() {
        scaleIndex = 2;
        scale = 1;
        $('#pdf-viewer').css('min-height','');
        $('#pdf-viewer').css('max-height','');
        $('#presentationMode').show();
        $('#exitPresentationMode').hide();
        queueRenderPage(pageNum);
        var currObj= document.getElementById("pdf-container");
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
    }
    pdfContainer.querySelector('#exitPresentationMode').addEventListener('click', exitPresentationMode);

    /*
      Esc Event Capture
    */
    document.addEventListener('fullscreenchange', exitHandler);
    document.addEventListener('webkitfullscreenchange', exitHandler);
    document.addEventListener('mozfullscreenchange', exitHandler);
    document.addEventListener('MSFullscreenChange', exitHandler);
    function exitHandler() {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            exitPresentationMode();
        }
    }

    /**
     * Download PDF Button.
     */
    function downloadFile(fileUrl) {
        var oReq = new XMLHttpRequest();
        var fileSplit = fileUrl.split("?")[0];
        var fileName = fileSplit.substring(fileSplit.lastIndexOf('/')+1);
        oReq.open("GET", fileUrl, true);
        oReq.responseType = "blob";

        oReq.onload = function() {
            // Once the file is downloaded, open a new window with the PDF
            // Remember to allow the POP-UPS in your browser
            var file = new Blob([oReq.response], { 
                type: 'application/pdf' 
            });

            // Generate file download directly in the browser !
            saveAs(file, fileName);
        };

        oReq.send();
    }

    $('.pdf-buttons-download').bind('click', function() {
        downloadFile(url);
    });

    /**
     * Print PDF Button.
     */
    document.getElementById('printPDF').addEventListener('click', function() {
        printJS(url);
    });

    // Hide print button on Firefox
    var browser = navigator.userAgent.toLowerCase();
    if (browser.indexOf("firefox") != -1 || browser.indexOf("msie") != -1) {
        document.getElementById('printPDF').style.display = 'none';
    }

    /**
     * Asynchronously downloads PDF.
     */
    PDFJS.getDocument(url).then(function(pdfDoc_) {
        pdfDoc = pdfDoc_;
        pdfContainer.querySelector('.pdf-pages-total').textContent = pdfDoc.numPages;
        if (pdfDoc.numPages > 1) {
            pdfContainer.querySelector('.pdf-buttons-next').removeAttribute('disabled');
            pdfContainer.querySelector('.pdf-buttons-next').classList.remove('disabled');
        }

        // Initial/first page rendering
        renderPage(pageNum);
    });

}

$(document).ready(function() {

    if (document.getElementById("course-finder") != null) {


        var onPageLoad = true;
        var locationObj = { "Online": {},
                            "United States": {},
                            "International": {}
                          };

        var trainingRocketUrl = "university.cloudera.com"
        //We are always using https protocol to call university.cloudera.com to avoid redirect preflight request issue with XMLHttpRequests
        var trBaseUrl = "https://" + trainingRocketUrl;
        var baseApiUrl = trBaseUrl + "/api/rest/public/v1/catalog";
        var loadingLocationMode = "DYNAMIC"; //  ( DYNAMIC , MANUAL )


        //the key needs to be URL friendly for a proper get request to work
        //update label to populate the drop down
        //format for names : ["short name", "url-path"]
        var coursesNames = {
            "administrator": {
                names: ["Cloudera Administrator Training for Apache Hadoop", "administrator", "Administrator (Japan)", "administrator-japan"],
                label: "Administrator Training"
            },
            "developer-training-for-spark-and-hadoop": {
                names: ["Cloudera Developer Training for Spark & Hadoop", "Developer Training for Spark & Hadoop  (Japan)"],
                label: "Developer Training for Spark & Hadoop"
            },
            "cloudera-big-data-architecture-workshop": {
                names: ["Cloudera Big Data Architecture Workshop", "cloudera-big-data-architecture-workshop"],
                label: "Cloudera Big Data Architecture Workshop"
            },
            "data-analyst": {
                names: ["Data Analyst Training", "data analyst", "Data Analyst (Japan)", "data-analyst-4-day-japan","Cloudera Data Analyst Training"],
                label: "Data Analyst Training"
            },
            "cloudera-data-scientist-training": {
                names: ["Data Scientist Training", "cloudera-data-scientist-training"],
                label: "Data Scientist Training"
            },
            "search": {
                names: ["Search Training", "search"],
                label: "Search Training"
            },
            "hbase": {
                names: ["HBase Training", "hbase", "HBase Training (Japan)", "hbase_training-japan"],
                label: "Apache HBase Training"
            },
            "introduction-to-machine-learning-with-spark-ml-and-mllib": {
                names: ["Introduction to Machine Learning with Spark ML and MLlib", "Introduction to Machine Learning with Spark ML and MLlib"],
                label: "Introduction to Machine Learning with Spark ML and MLlib"

            },
            "just-enough-python": {
                names: ["Just Enough Python", "Just Enough Python"],
                label: "Just Enough Python"
            },
            "just-enough-scala": {
                names: ["Just Enough Scala", "Just Enough Scala"],
                label: "Just Enough Scala"
            },  
            "essentials": {
    	    	names : ["Hadoop Essentials", "essentials", "Essentials (Japan)", "essentials-japan"],
    	    	label : "Hadoop Essentials"
    	    }, 
             "hdp-advanced-hive": {
                names : ["DEV-331: HDP Advanced Hive"],
                label : "HDP Advanced Hive"
            }, 
             "hdp-data-science": {
                names : ["SCI-241 HDP Data Science"],
                label : "HDP Data Science"
            }, 
             "hdp-security": {
                names : ["ADM-351 HDP Security"],
                label : "HDP Security"
            }, 
              "hdp-spark-developer": {
                names : ["DEV-343 HDP Spark Developer"],
                label : "HDP Spark Developer"
            },
              "nifi-flow-management": {
                names : ["ADM-301 Nifi Flow Management"],
                label : "Nifi Flow Management"
            },
              "hdp-administration-foundations": {
                names : ["ADM-221 HDP Operations: Administration Foundations"],
                label : "HDP Operations: Administration Foundations"
            },
    	    
            //-Depreciated courses that we would like to keep in the code-//
            /*
        "applications" : { 
	    	names : ["Big Data Applications", "applications"],
	    	label : "Big Data Applications"
	    }, 
	    "spark": {
	    	names : ["Spark Training", "spark"], 
	    	label : "Spark Training"
	    },
        "introduction-to-apache-kafka":{
            names : ["Introduction to Apache Kafka", "Introduction to Apache Kafka"], 
            label : "Introduction to Apache Kafka"
        },
        "developer": { 
			names : ["Cloudera Developer Training for MapReduce", "Developer for MapReduce"],
			label : "Developer Training for MapReduce"
	    },
	    "data-science-at-scale-using-spark-and-hadoop": { 
	    	names : ["Data Science at Scale using Spark and Hadoop", "Data Science at Scale using Spark and Hadoop", "Data Science at Scale using Spark and Hadoop"], 
	    	label : "Data Science at Scale using Spark and Hadoop"
		},
         "essentials": {
	    	names : ["Hadoop Essentials", "essentials", "Essentials (Japan)", "essentials-japan"],
	    	label : "Hadoop Essentials"
	    }, 
        */
        };

        var currencyHash = {
            "USD": "&#36;",
            "GBP": "&#163;",
            "BRL": "&#82;&#36;",
            "AUD": "A&#36;",
            "EUR": " &#x20AC;",
            "SGD": "S&#36;",
            "ILS": "&#8362;",
            "JPY": "&#165;",
            "CNY": "&#20803;",
            "INR": "&#8377;",
            "HKD": "HK&#36;"
        };


        //-----------------------------------------------FUNCTIONS------------------//

        function formateDateSearchParam(date) {
            var day = date.getDate()
            var month = date.getMonth() + 1
            var year = date.getFullYear()

            if (month < 10)
                month = "0" + month
            if (day < 10)
                day = "0" + day

            return year + "-" + month + "-" + day + " 00:00:00"
        }

        function fixDate(d) {
            var dateArr = [];
            var dateArr = d.split("-");
            var yr = dateArr[0];
            var day = dateArr[2].split(' ')[0]
            day = day.replace(/^0+/, '');
            var mo = dateArr[1]
            months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            for (i = 0; i < months.length; i++) {
                if (i == mo - 1) {
                    newMo = months[i]
                }
            }
            newDate = newMo + " " + day + ", " + yr;
            return newDate;
        }

        function unique(origArr) {
            var newArr = [],
                origLen = origArr.length,
                found,
                x, y;
            for (x = 0; x < origLen; x++) {
                found = undefined;
                for (y = 0; y < newArr.length; y++) {
                    if (origArr[x] === newArr[y]) {
                        found = true;
                        break;
                    }
                }
                if (!found) newArr.push(origArr[x]);
            }
            return newArr;
        }

        function htmlOutput(courseEvents, courseName) {
            //var content = $('div#course-feed').addClass(courseName.replace(/ /g, "-"));
            var content = $('div#course-feed');
            content.innerHTML = "";

            if (courseEvents.results != 0) {
                content.append('<div class="item" style="margin:5px 0 5px 0;font-size:32px;font-family: akzidenz-grotesk-next-extend, sans-serif;border: 0px;background-color: white;">' + courseName + '</div>')
                content.append('<div class="item item-head" style="background-image:url(/content/dam/www/marketing/brand/data-line/c01-data-line-pattern-orange-bg.png); color:white; font-weight:bold;border: 0px;"><p><span class="course-header">Title<span><ul><li>Location</li><li>Date</li><li>Cost</li></ul></p></div>');
                content = content[0];
                $.each(courseEvents.results, function(indx, courseEvent) {
                    var div = content.appendChild(document.createElement('div'));
                    div.className = "item";
                    var p = div.appendChild(document.createElement('p')); // Add a new line
                    var a = document.createElement('a')
                    p.appendChild(a);
                    a.setAttribute('href', trBaseUrl + '/class/' + courseEvent.urlName);
                    var displayName = courseEvent.course.displayName;

                    if (displayName.lastIndexOf("(") > 0)
                        displayName = displayName.substring(0, displayName.lastIndexOf("("));

                    a.innerHTML = displayName;
                    ul = document.createElement('ul');
                    p.appendChild(ul);
                    html = '<li class="course-date">' + courseEvent.location.displayName.split('(')[0] + '</li>';
                    html += '<li class="course-date">' + fixDate(courseEvent.startTime) + " - " + fixDate(courseEvent.finalEndTime) + "</li>";
                    if (currencyHash[courseEvent.price.currency] != undefined)
                        html += '<li class="course-cost">' + currencyHash[courseEvent.price.currency] + " " + formatMoney(courseEvent.price.amount) + "</li>";
                    else
                        html += '<li class="course-cost">' + courseEvent.price.currency + " " + formatMoney(courseEvent.price.amount) + "</li>";

                    ul.innerHTML = html;
                });
                var bkTop = document.createElement('div'); 
                bkTop.setAttribute('style', 'text-align: right;');
                bkTop.innerHTML = '<button class="blue-btn-border" style="font-size:14px; margin:4px 0 0 0;" onclick="$(window).scrollTop(300);">Back to Top &#8593;</button>';
                content.appendChild(bkTop);
            }

          /*  if (courseEvents.totalResults == 0) {
                var div = content[0].appendChild(document.createElement('div'));
                div.innerHTML = "<p>No Classes were found.</p>"
            }*/
        }


        function getCacheBust() {

            var cacheBust = new Date();
            cacheBust = cacheBust.getFullYear() + "." + cacheBust.getUTCMonth() + "." + cacheBust.getUTCDate() + "." + cacheBust.getUTCHours();
            cacheBust = "?nocache=" + cacheBust;

            return cacheBust;
        }

        function getUrlVars() {
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
                vars[key] = value;
            });
            return vars;
        }


        function formatMoney(n) {
            var c = 2;
            var d = '.';
            var t = ',';
            var c = isNaN(c = Math.abs(c)) ? 2 : c,
                d = d == undefined ? "." : d,
                t = t == undefined ? "," : t,
                s = n < 0 ? "-" : "",
                i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
                j = (j = i.length) > 3 ? j % 3 : 0;
            return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
        }

        var fillCoursesDropDown = function() {

            var selCourse = document.getElementById("courses");

            var courseHtmlOptionsList = [];

            for (var key in coursesNames) {
                if (coursesNames.hasOwnProperty(key)) {
                    var c = document.createElement("option")
                    c.innerHTML = coursesNames[key].label;
                    c.value = key;
                    courseHtmlOptionsList.push(c)
                }
            }

            for (i = 0; i < courseHtmlOptionsList.length; i++) {
                selCourse.add(courseHtmlOptionsList[i])
            }
        }();

        function locationList(location) {
            var country = location.address.country.name;
            var countryCode = location.address.country.alpha2Code;
            var displayName = (location.displayName).substring(0, location.displayName.indexOf('('));
            displayName = displayName == "" ? location.displayName : displayName;
            var city = location.address.city;
            if (city != null) {
                if (countryCode == "US") {
                    locationObj["United States"][displayName] = {
                        "Country": countryCode,
                        "City": city
                    };
                } else {
                    locationObj["International"][displayName] = {
                        "Country": countryCode,
                        "City": city
                    };
                }
            } else {
                locationObj["Online"][displayName] = {
                    "Country": countryCode,
                    "City": null
                };
            }
        }

        function populateSelect(loc) {
            var USkeys = Object.keys(locationObj["United States"]).sort();
            var content = $('select#locations > optgroup[label="United States"]');
            content.empty();
            for (var i = 0; i < USkeys.length; i++) {
                var key = USkeys[i];
                var optionValue = locationObj["United States"][key]["Country"] + '-' + locationObj["United States"][key]["City"];
                content.append($('<option>', {
                    value: encodeURIComponent(optionValue),
                    text: key
                }));
            }
            USkeys = Object.keys(locationObj["Online"]).sort();
            content = $('select#locations > optgroup[label="Online"]');
            content.empty();
            for (var i = 0; i < USkeys.length; i++) {
                var key = USkeys[i];
                var optionValue = locationObj["Online"][key]["Country"];
                content.append($('<option>', {
                    value: encodeURIComponent(optionValue),
                    text: key
                }));
            }
            USkeys = Object.keys(locationObj["International"]).sort();
            content = $('select#locations > optgroup[label="International"]');
            content.empty();
            for (var i = 0; i < USkeys.length; i++) {
                var key = USkeys[i];
                var optionValue = locationObj["International"][key]["Country"] + '-' + locationObj["International"][key]["City"];
                content.append($('<option>', {
                    value: encodeURIComponent(optionValue),
                    text: key
                }));
            }

            loc = (loc == "" || loc == "undefined") ? 'all' : loc;
            $("select#locations").val(encodeURI(loc));
//           $("select#locations").trigger("change");
        }

        function init(locationReset) {
            $('div#course-feed').empty();
            // page parameters 
            var selectedCourse = findGetParameters()["course"];
            var selectedLocation = findGetParameters()["loc"];
            var cr = decodeURIComponent(selectedCourse);
            var loc = decodeURIComponent(selectedLocation);
            var htmlString = " ";
            var content = document.getElementById('course-feed');
            var selCourse = document.getElementById("courses");
            if (cr === "undefined") {
                cr = "all";
            } else {
                selCourse.value = cr;
            }
            if (locationReset == null && locationReset == undefined) {
                locationReset = true;
            }

            if (!(cr === "undefined" && loc === "undefined")) {
                var searchParam = {
                    params: []
                };
                var locSearchParam = {
                    params: []
                };

                searchParam.params.pop({
                    "name": "location.embeddedAddress.city"
                });
                searchParam.params.pop({
                    "name": "location.embeddedAddress.country.alpha2Code"
                });
                if (loc != "undefined") {
                    var countCityItems = loc.split('-');
                    searchParam.params.push({
                        "name": "location.embeddedAddress.country.alpha2Code",
                        "values": [loc.split('-')[0]]
                    });
                    searchParam.params.push({
                        "name": "location.embeddedAddress.city",
                        "values": [loc.split('-')[1]]
                    });
                }

                // always show upcoming classes 
                searchParam.params.push({
                    "name": "startTime",
                    "values": [formateDateSearchParam(new Date())]
                }, {
                    "name": "status",
                    "values": ["TENTATIVE", "CONFIRMED", "EXTERNAL"]
                },{
                    "name": "name",
                    "values": []
                });

                function recursiveAjax(index, crseNameUrl) {
                    var tempkey = Object.keys(coursesNames)[index];
                    var goRecur = true;
                    if (crseNameUrl != null) {
                        tempkey = crseNameUrl;
                        goRecur = false;
                    }
                    searchParam.params.pop({
                        "name": "course.name"
                    });
                    searchParam.params.push({
                        "name": "course.name",
                        "values": coursesNames[tempkey].names
                    });
                    var searchParamVar = JSON.stringify(searchParam, null, " ");
                    $('select').prop('disabled',true);
                    $('div.loading-item').show();
                    $.ajax({
                            type: "POST",
                            url: baseApiUrl + "/public_course_event?pageSize=" + 249 + "&sortBy=startTime&ascending=true",
                            data: searchParamVar,
                            dataType: 'json',
                            contentType: "application/json;charset=UTF-8",
                            timeout: 60000
                        })
                        .done(function(results, data) {
                            $('select').prop('disabled',false);
                            $('div.loading-item').hide();
                            var displayName = coursesNames[tempkey].label;
                            htmlOutput(results, displayName);
                            if (index < Object.keys(coursesNames).length - 1 && goRecur == true) {
                                recursiveAjax(index + 1, null);
                                //$("select#locations").hide();
                                for (var i = 0; i < results.results.length; i++) {
                                    try {
                                        locationList(results.results[i].location);

                                    } catch (e) {
                                        console.log('Error in Location List : ' + e);
                                    }
                                }
                            }
                        });
                }

                  // always show upcoming classes 
                locSearchParam.params.push({
                    "name": "startTime",
                    "values": [formateDateSearchParam(new Date())]
                }, {
                    "name": "status",
                    "values": ["TENTATIVE", "CONFIRMED", "EXTERNAL"]
                },{
                    "name": "name",
                    "values": []
                });

                function locationAjax(index, crseNameUrl) {
                    var tempkey = Object.keys(coursesNames)[index];
                    var goRecur = true;
                    if (crseNameUrl != null) {
                        tempkey = crseNameUrl;
                        goRecur = false;
                    }
                    locSearchParam.params.pop({
                        "name": "course.name"
                    });
                    locSearchParam.params.push({
                        "name": "course.name",
                        "values": coursesNames[tempkey].names
                    });
                    var searchParamVar = JSON.stringify(locSearchParam, null, " ");
                    $('select').prop('disabled',true);
                    $('div.loading-item').show();
                    $.ajax({
                            type: "POST",
                            url: baseApiUrl + "/public_course_event?pageSize=" + 250 + "&sortBy=startTime&ascending=true",
                            data: searchParamVar,
                            dataType: 'json',
                            contentType: "application/json;charset=UTF-8",
                            timeout: 60000
                        })
                        .done(function(results, data) {
                            $('select').prop('disabled',false);
							$('div.loading-item').hide();
                            if (index < Object.keys(coursesNames).length - 1 && goRecur == true) {
                                locationAjax(index + 1, null);
                                for (var i = 0; i < results.results.length; i++) {
                                    try {
                                        locationList(results.results[i].location);
                                    } catch (e) {
                                        console.log('Error in Location List : ' + e);
                                    }
                                }
                                populateSelect(loc);
                            }else if (goRecur == false) {
                                locationObj = {
                                    "Online": {},
                                    "United States": {},
                                    "International": {}
                                };
                                for (var i = 0; i < results.results.length; i++) {
                                    try {
                                        locationList(results.results[i].location);

                                    } catch (e) {
                                        console.log('Error in Location List : ' + e);
                                    }
                                }
                                populateSelect(loc);
                            }
                        });
                }

                if (!(cr === "all") && !(cr === "undefined")) {
                    recursiveAjax(0, cr);
                    if(locationReset){
                    	locationAjax(0, cr);
                    }
                } else {
                    recursiveAjax(0);
                    if(locationReset){
                    	locationAjax(0);
                    }
                }

            }
        }
        init(true);
        $("select#courses").change(function() {
            var result = {};
            result['course'] = this.value;
            location.hash = "?" + jQuery.param(result);
            init(true);
        });
        $("select#locations").change(function() {
            var result = {};
            var items = location.hash != "" ? location.hash.substr(2).split("&") : location.search.substr(1).split("&")
            for (var index = 0; index < items.length; index++) {
                tmp = items[index].split("=");
                if ('course' == tmp[0]) {
                    result['course'] = tmp[1];
                }
            }
            if (!(this.value == 'all' || this.value == '')) {
                result['loc'] = this.value == 'all' || this.value == '' ? null : this.value;
            }
            location.hash = "?" + jQuery.param(result);
            init(false);
        });

    }
});
// Enable or disable the PayPal button and change opacity
function developerProgramTogglePayPalButton(event) {
var developerProgramPayPalButton = document.getElementById('developerProgramPayPalButton');
var developerProgramTermsAndConditionsButton = document.getElementById('developerProgramTermsAndConditionsButton');

if (developerProgramTermsAndConditionsButton) {   
developerProgramPayPalButton.disabled = !developerProgramTermsAndConditionsButton.checked;    
    if (developerProgramTermsAndConditionsButton.checked)
        { 
            developerProgramPayPalButton.style.opacity = 1; developerProgramPayPalButton.style.filter = "alpha(opacity=100)"; }
    else
        { 
            developerProgramPayPalButton.style.opacity = .5; developerProgramPayPalButton.style.filter = "alpha(opacity=50)"; }
    }
}
developerProgramTogglePayPalButton();
$(function ( $ ) {
if($(".img_1A").length){


var get = $('.img_1A img').length;
var next = Math.ceil(Math.random() * (get));

$('.img_1A img:nth-child(' + next + ')').css('display', 'block');

}
}( window.jQuery ));

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}

// Polyfill for Includes
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }
    
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

var userInfoHandler;

$(document).ready(function(){
    $.post("/bin/services/content/cloudera/userinfo", function(data){
        userInfoHandler = data;
        if (data.status == "OK"){
            if (data.loggedIn === true) {
                $('.userGivenName').text(data.givenName);
                $('.userGivenNameHi').text('Hi,' + ' ' + data.givenName);
                $('.userFullName').text(data.fullName);
                $('.loggedinUser').addClass('loggedinUserShow');
                $('.loggedoutUser').hide();
            }
        }
    }).done(function() {
        $('#cloudera').fadeIn('fast', function() {
            $(this).attr('style', '');
        });

    }).fail(function() {
     $  ('#cloudera').fadeIn('fast', function() {
            $(this).attr('style', '');
        });
    });

    $('#oktaSignIn').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        var pathname = location.pathname + location.search;
        var globalDomain = "."+window.location.hostname;
        if(globalDomain.startsWith(".www")){
            globalDomain = globalDomain.substring(4);
         }
        $.cookie.raw = true;
        $.cookie('saml_request_path', pathname, {expires: 1, path: '/', domain:globalDomain});

        window.location = ($('#oktaSignIn').attr('href'));
    });

    $('#dlSignIn').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        var pathname = location.pathname + location.search;
        var globalDomain = "."+window.location.hostname;
        if(globalDomain.startsWith(".www")){
            globalDomain = globalDomain.substring(4);
        }
        $.cookie.raw = true;
        $.cookie('saml_request_path', pathname, {expires: 1, path: '/', domain:globalDomain});

        window.location = ($('#dlSignIn').attr('href'));
    });
});

function headerSearch() {
    var searchForm = document.getElementById('site-search');
    var searchEl = searchForm.querySelector('#mk-search');
    var searchBtn = searchForm.querySelector('button[type="submit"]');
    var searchResultsDestination = searchEl.dataset.resultsUrl;

    searchEl.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            var searchQuery = searchEl.value;
            window.location = searchResultsDestination + ".html?q=" + encodeURIComponent(searchQuery);
        }
    });

    searchBtn.addEventListener('click', function(event) {
        event.preventDefault();
        var searchQuery = searchEl.value;
        window.location = searchResultsDestination + ".html?q=" + encodeURIComponent(searchQuery);
    });
}
if (document.getElementById("mk-search") !== null){
    headerSearch();
}



//US only
jQuery(function($) {
    //removes any element that has class .mk-us-only that appears on localised sites. 
    if ($('.mk-us-only').length > 0) {
        var full = window.location.host;
        //window.location.host is subdomain.domain.com
        var parts = full.split('.');
        var sub = parts[0];
        console.log(sub);

        if (['es', 'fr', 'de', 'it', 'kr', 'jp', 'cn'].includes(sub)) {
            $('.mk-us-only').remove();
        }

    }

});
/*! Lazy Load 1.9.4 - MIT license - Copyright 2010-2013 Mika Tuupola */

$(window).load(function() {
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

$("img.lazy").lazyload({
    effect : "fadeIn"
}).removeAttr('width').removeAttr('height');

});


 function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        }
'use strict';

window._sp = {
  //
  // Util Functions
  //
  toDashCase: function (str) {
    return str.replace(/\s+/g, '-').toLowerCase();
  },
  isEmptyObj: function (obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  wrap: function (el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  },
  createEl: function (props) {
    var element = document.createElement(props.tag || 'div');
    if (props.attrs) {
      Object.keys(props.attrs).forEach(function (key) {
        element.setAttribute(key, props.attrs[key]);
      });
    }
    if (props.cls) {
      element.className = props.cls;
    }
    if (props.id) {
      element.id = props.id;
    }
    if (props.str) {
      element.insertAdjacentHTML('beforeend', props.str);
    }
    if (props.tag === 'a' && props.href) {
      element.href = props.href;
    } else if (props.tag === 'a' && !props.href) {
      element.href = '#';
    }
    return element;
  },
  removeAllChildren: function (element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  },
  removeElement: function (elementSelector) {
    var el = document.querySelector(elementSelector);
    if (el === null) return;
    el.parentNode.removeChild(el);
  },
  insertEl: function (parent, child, position) {
    var p = position || 'beforeend';
    parent.insertAdjacentElement(p, child);
  },
  getParameterByName: function (name, url) {
    var _name = name;
    var _url = url;
    if (!_url) _url = window.location.href;
    _name = _name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&;]' + _name + '(=([^&;#]*)|&|#|$)');
    var results = regex.exec(_url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  },
  
  getParameterByNameNoResult: function (name, url) {
	    var _name = name;
	    var _url = url;
	    if (!_url) _url = window.location.href;
	    _name = _name.replace(/[\[\]]/g, '\\$&');
	    var regex = new RegExp('[?&;]' + _name + '(=([^&;#]*)|&|#|$)');
	    var results = regex.exec(_url);

	    if (!results) return null;
	    if (!results[2]) return '';

        results[2] =  decodeURIComponent(results[2].replace(/\+/g, ' '))
        results[2] = results[2].replace(/</g,'&lt;');
	    results[2] = results[2].replace(/>/g,'&gt;');

	    return results[2];
	  }
};

'use strict';

(function () {
  var _sp = window._sp;
  var $ = window.$;

  function typeahead(searchEl) {
    _sp.wrap(searchEl, _sp.createEl({ cls: 'swyt__wrap' }));

    var endpoint = searchEl.dataset.autocompleteEndpointUrl;
    var cached = {};
    var searchResultMaxCount = searchEl.dataset.saytCount || 5;
    var searchResultsDestination = searchEl.dataset.resultsUrl || false;

    if (searchEl === null) {
      return;
    }

    var currentFocus = -1;

    function findMatches(wordToMatch, keywords) {
      return keywords.filter(function (key) {
        var regex = new RegExp(wordToMatch, 'gi');
        return key.match(regex);
      });
    }

    _sp.clearAllResults = function () {
       _sp.removeElement('.swyt__results');
       currentFocus = -1;
    }

    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) {
        currentFocus = 0;
      }
      if (currentFocus < 0) {
        currentFocus = x.length - 1;
      }

      x[currentFocus].classList.add('active');

      return false;
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove('active');
      }
    }

    function createListElement(text, fullSearchTerm) {
      listEl = _sp.createEl({
        tag: 'li'
      });
      linkEl = _sp.createEl({
        tag: 'a',
        cls: "swyt__result",
        str: text,
        id: fullSearchTerm
      });
      _sp.insertEl(listEl, linkEl);

      return listEl.outerHTML;
    }

    function createKeywordListElement(searchTerm, keyword) {
      var keywordReplace = keyword.linkText.replace("*", searchTerm);

      var html ='<br><span class="swyt__keyword-match">in <a href="' + keywordReplace + '">' + keyword.linkUrlPrefix + '</a></span>';

      return html;
    }

    function insertSearchMatch(props) {
      if (props.matchArray.length === 0) {
        return;
      }
      var suggestionsEl;

      var html = props.matchArray
        .map(function (item) {
          var keywordMarkup = item.replace(
            props.regex,
            '<span class="swyt__match">' + props.val + '</span>'
          );
          return createListElement(keywordMarkup, item);
        })
        .join('');

      suggestionsEl = _sp.createEl({
        tag: 'ul',
        cls: 'swyt__suggestions'
      });

      var keywords = JSON.parse(window._spProtectedKeywords).links;
      if (undefined !== keywords && 0 < keywords.length) {
        var searchTerm = props.matchArray[0];
        html += '<hr>' + searchTerm.replace(
          props.regex,
          '<span class="swyt__match">' + props.val + '</span>'
        );
        keywords.forEach(function (keyword) {
          html += createKeywordListElement(props.matchArray[0], keyword);
        });
      }

      suggestionsEl.innerHTML = html;
      props.results.append(suggestionsEl);
    }

    function hasDepartmentMatch(props) {
      if (typeof props.matchArray[0].facets === 'undefined') return;

      var departmentsEl;
      var headline = props.matchArray[0].replace(
        props.regex,
        '<span class="swyt__match">' + props.val + '</span>'
      );

      // labels
      var list = props.matchArray[0].facets
        .map(function (item) {
          return (
            '<li><a href="#" class="result">in <span class="dep">' +
            item.label +
            '</span></a></li>'
          );
        })
        .join('');

      departmentsEl = _sp.createEl({
        cls: 'departments'
      });
      departmentsEl.innerHTML =
        '<a href="#" class="result">' +
        headline +
        '</a>' +
        '<ul>' +
        list +
        '</ul>';
      props.results.append(departmentsEl);
    }

    function cacheQuery(response, userInput) {
      if (cached[userInput]) {
        return;
      }

      cached[userInput] = response;
    }

    function renderResults(props) {
      return this.parentNode.append(props.results);
    }

    function displayMatches(response, val) {
      var matchArray = findMatches(val, response);
      var regex = new RegExp(val, 'gi');
      var results = _sp.createEl({ cls: 'swyt__results' });

      cacheQuery(response, val);

      _sp.clearAllResults();

      // if input is empty, return
      if (val.length < 3 || matchArray.length === 0) {
        return;
      }

      insertSearchMatch({
        matchArray: matchArray,
        results: results,
        regex: regex,
        val: val
      });

      // hasDepartmentMatch({
      //   matchArray: matchArray,
      //   results: results,
      //   regex: regex,
      //   val: val
      // });

      renderResults.call(this, {
        results: results
      });

      var resultListEl = document.querySelector('.swyt__results');
      resultListEl.addEventListener('mousedown', function(e) {
        if (e.which === 1) {
          if (e.target.matches('.swyt__result')) {
            targetID = e.target.id;
            //sending to the results page if need be
            if (searchResultsDestination) {
              window.location = searchResultsDestination + ".html?q=" + encodeURIComponent(e.target.text);
            } else {
              sendRequest(targetID);
            }
          }
          else if (e.target.parentNode.matches('.swyt__result')) {
            targetID = e.target.parentNode.id;
            //sending to the results page if need be
            if (searchResultsDestination) {
              window.location = searchResultsDestination + ".html?q=" + encodeURIComponent(e.target.parentNode.id);
            } else {
              sendRequest(targetID);
            }
          }
          else if (e.target.parentNode.matches('.swyt__keyword-match')) {
            targetLink = e.target.href;
            window.location = targetLink;
          }
        }
     });
    }

    function sendRequest(queryTerm) {
      window.history.pushState('', '', '?q=' + queryTerm);
      _sp.sendReq();
      _sp.clearAllResults();

      searchEl.value = queryTerm;
    }

    function sendQuery(event) {
      if (event.type === 'keyup') {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          return;
        }
        else if (event.key === 'Enter') {
          var selectedItem = document.querySelector(".swyt__result.active");
          if (null !== selectedItem) {
            if (searchResultsDestination) {
              window.location = searchResultsDestination + ".html?q=" + encodeURIComponent(selectedItem.id);
            } else {
              sendRequest(selectedItem.id);
            }
          }
          return;
        }
      }

      var val = this.value;
      var _this = this;

      if (val === '') {
        _sp.clearAllResults();
        return;
      }

      if (cached[val]) {
        displayMatches.apply(_this, [cached[val], val]);
        return;
      }

      $.ajax({
        url: endpoint,
        jsonp: 'callback',
        dataType: 'jsonp',
        data: {
          query: val,
          max_results: searchResultMaxCount
        },

        error: function (jqXHR, textStatus, errorThrown) {
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
        },
        // Work with the response
        success: function (response) {
          displayMatches.apply(_this, [response, val]);
        }
      });
    }

    // keyboard focus states
    searchEl.addEventListener('keydown', function (e) {
      var resultsEl = document.querySelectorAll('.swyt__result');
      if (resultsEl.length === 0) {
        return;
      }

      if (e.key === 'ArrowDown') {
        currentFocus++;
        addActive(resultsEl);
      } else if (e.key === 'ArrowUp') {
        currentFocus--;
        addActive(resultsEl);
      } else if (e.key === 'Enter') {
        if (currentFocus > -1) {
          e.preventDefault();
          if (resultsEl) {
            //sending to the results page if need be
            if (searchResultsDestination) {
              window.location = searchResultsDestination + ".html?q=" + encodeURIComponent(resultsEl[currentFocus].id);
            } else {
              resultsEl[currentFocus].click();
            }
          }
        }
      }
    });

    searchEl.addEventListener('keyup', sendQuery);
    searchEl.addEventListener('click', sendQuery);

    searchEl.addEventListener('focusout', function (e) {
        _sp.clearAllResults();
    });
  }

  var targets = document.querySelectorAll('[data-sp-typeahead]');
  for (var i = 0; i < targets.length; i++) {
    typeahead(targets[i]);
  }

})();

'use strict';

var _sp = window._sp;
var $ = window.$;

(function () {
  var componentName = 'search-promote';
  var searchPromoteParentEl = document.querySelector('.' + componentName);

  if (searchPromoteParentEl === null) return;

  var searchFormParentEl = searchPromoteParentEl.querySelector(
    '.' + componentName + '__search'
  );
  var searchFormEl = searchPromoteParentEl.querySelector(
    '.' + componentName + '__search-form'
  );
  var noResulstEl = searchPromoteParentEl.querySelector(
    '.' + componentName + '__no-results'
  );
  var currentResultsElement = null;

  _sp.sendReq = function () {
    $.ajax({
      url: searchPromoteParentEl.dataset.endpointUrl + window.location.search,
      dataType: 'json',

      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      },
      // Work with the response
      success: function (response) {
        _sp.search(response);
        _sp.clearAllResults();
      }
    });
  }

  _sp.search = function (data) {
    if ('' !== data.general.redirect) {
      window.location.replace(data.general.redirect);
      return;
    }
    var keyData = {
      searchTerm: data.general.query,
      results: data.resultsets['0'].results,
      facets: data.facets.filter(function (filter) {
        return filter.label === searchPromoteParentEl.dataset.leftFacetName;
      })[0],
      filters: data.facets.filter(function (filter) {
        return filter.label !== searchPromoteParentEl.dataset.leftFacetName && !_sp.isEmptyObj(filter);
      }),
      pagination: {
        pages: data.pagination.filter(function (i) {
          return i.name === 'small';
        })[0],
        pageHigh: data.resultcount.pageupper,
        pageLow: data.resultcount.pagelower,
        resultsPerPage:
          data.resultcount.pageupper - data.resultcount.pagelower + 1,
        totalItems: data.resultcount.total
      },
      suggestion: (data.suggestions && data.suggestions.suggestion) || null,
      suggestionPath: (data.suggestions && data.suggestions.path) || null,
      hideFacets: JSON.parse(searchPromoteParentEl.dataset.hideFacets),
      noResults: data.resultcount.total === '0' // true
    };

    //
    // Facets
    //
    function insertFacetList(parent, facets) {
      if (typeof facets === 'undefined') return;

      var facetListWrap = _sp.createEl({
        tag: 'ul',
        cls: componentName + '__categories-wrap'
      });

      var facetListItem = _sp.createEl({
        tag: 'li',
        cls: componentName + '__categories-wrap-item'
      });

      var catWrapTitle = _sp.createEl({
        tag: 'a',
        cls: componentName + '__categories-wrap-title',
        str: 'Content Type'
      });
      _sp.insertEl(facetListItem, catWrapTitle);
      _sp.insertEl(facetListWrap, facetListItem);

      var facetList = _sp.createEl({
        tag: 'ul',
        cls: componentName + '__categories-list'
      });

      facets.values.forEach(function (facet) {
        var li = _sp.createEl({
          tag: 'li',
          cls: componentName + '__categories-item'
        });
        var innerEl = _sp.createEl({
          tag: 'a',
          href: buildSearchURL(facet.link),
          cls: componentName + '__categories-link',
          str: facet.value + ' (' + facet.count + ')'
        });

        if (facet.selected === 'true') {
          innerEl.classList.add('category--current');
        }

        _sp.insertEl(li, innerEl);
        _sp.insertEl(facetList, li);
      });

      _sp.insertEl(facetListWrap, facetList);
      _sp.insertEl(parent, facetListWrap);
    }

    function getCurrentFacet() {
      if (typeof keyData.facets === 'undefined') return null;

      var hasCurrentFacet = keyData.facets.values.filter(function (facet) {
        return facet.selected === 'true';
      });

      if (hasCurrentFacet.length === 0) return null;

      return hasCurrentFacet[0].value;
    }

    function insertFacetResetLink(parent) {
      if (getCurrentFacet() === null) return;

      var currentFacet = getCurrentFacet();
      var resetFiltersHref = data.breadcrumbs[2].values.filter(function (facet) {
        return facet.value === currentFacet;
      })[0].droppath;

      var resetLink = _sp.createEl({
        tag: 'a',
        cls: componentName + '__category-reset',
        str: 'Show all',
        href: resetFiltersHref + "&cf=true"
      });

      _sp.insertEl(parent, resetLink);
    }

    function insertFacets(parent) {
      if (keyData.hideFacets === true) return;

      var parentEl = _sp.createEl({
        // cls: componentName + '__mobile-menu col-md-3 col'
        cls: componentName + '__categories'
      });

      if (typeof keyData.facets === 'undefined') {
        _sp.insertEl(parent, parentEl);
        return;
      }

      var facetHeader = _sp.createEl({
        cls: componentName + '__categories-header'
      });

      var headline = _sp.createEl({
        tag: 'h3',
        cls: componentName + '__categories-title',
        str: 'Narrow by:'
      });

      _sp.insertEl(facetHeader, headline);

      insertFacetResetLink(facetHeader);

      _sp.insertEl(parentEl, facetHeader);
      insertFacetList(parentEl, keyData.facets);

      _sp.insertEl(parent, parentEl);
    }

    //
    // Filters
    //
    function insertClearAllFiltersEl(parent) {
      // clear filter el
      var clearFilterEl = _sp.createEl({
        tag: 'li',
        cls: componentName + '__current-filters-clear'
      });
      var clearFilterLink = _sp.createEl({
        tag: 'a',
        cls: componentName + '__current-filters-clear-click',
        str: 'CLEAR FILTERS',
        href: createClearFiltersLink()
      });

      function createClearFiltersLink() {
        var link = '';
        var cf = getCurrentFacet();
        if (cf === null && keyData.searchTerm === '') {
          link = data.breadcrumbs[1].values[0].path;
        }
        if (cf === null && keyData.searchTerm !== '') {
          link = data.breadcrumbs[1].values[0].gotopath;
        }
        if (cf !== null && keyData.searchTerm === '') {
          link = data.breadcrumbs[1].values[0].gotopath;
        }
        if (cf !== null && keyData.searchTerm !== '') {
          link = data.breadcrumbs[1].values[1].gotopath;
        }

        link += "&cf=true";
        return link;
      }

      _sp.insertEl(clearFilterEl, clearFilterLink);
      _sp.insertEl(parent, clearFilterEl);
    }
    function buildSelectedFilters(currentFiltersGroups) {
      return currentFiltersGroups
        .map(function (item) {
          filteredList = item.values.filter(function (filter) {
            return filter.selected === 'true';
          });
          filteredList.forEach(function (listItem) {
            listItem["filterHeader"] = item.label;
          })
          return filteredList;
        })
        .reduce(function (acc, cur) {
          return acc.concat(cur);
        });
    }
    function insertCurrentFilters(parent) {
      var currentFiltersGroups = keyData.filters.filter(function (filterGroup) {
        return filterGroup.selected === true;
      });
      if (currentFiltersGroups.length === 0) return;
      var parentEl = _sp.createEl({
        tag: 'ul',
        cls: componentName + '__current-filters'
      });

      buildSelectedFilters(currentFiltersGroups).forEach(function (i) {
        var currentFilterEl = _sp.createEl({
          tag: 'li',
          cls: componentName + '__current-filter'
        });
        var clearEl = _sp.createEl({
          tag: 'a',
          cls: componentName + '__current-filter-clear',
          str: 'X',
          href: i.undolink
        });
        var text = _sp.createEl({
          tag: 'span',
          cls: componentName + '__current-filter-name',
          str: i.value
        });

        _sp.insertEl(currentFilterEl, text);
        _sp.insertEl(currentFilterEl, clearEl);
        _sp.insertEl(parentEl, currentFilterEl);
      });

      insertClearAllFiltersEl(parentEl);

      _sp.insertEl(parent, parentEl);
    }

    function createFilterListValue(filter) {
      var filterLi = _sp.createEl({
        tag: 'li',
        cls: componentName + '__filter'
      });
      var label = _sp.createEl({
        tag: 'label',
        cls: componentName + '__filter-label'
      });

      label.addEventListener('keyup', function () {
        if (event.key === 'Enter') {
          window.history.pushState('', '', buildSearchURL(filter.undolink) || buildSearchURL(filter.link));
          _sp.sendReq();
        }
      });
      label.addEventListener('click', function (event) {
        window.history.pushState('', '', buildSearchURL(filter.undolink) || buildSearchURL(filter.link));
        event.preventDefault();
        _sp.sendReq();
      });
      var checkbox = _sp.createEl({
        tag: 'input',
        cls: componentName + '__filter-checkbox',
        attrs: {
          type: 'checkbox'
        }
      });
      if (filter.selected === 'true') {
        checkbox.setAttribute('checked', 'checked');
      }

      var checkIndicator = _sp.createEl({
        tag: 'span',
        cls: componentName + '__filter-check-indicator'
      });
      var filterName = _sp.createEl({
        tag: 'span',
        cls: componentName + '__filter-name',
        str: filter.value + ' (' + filter.count + ')'
      });

      _sp.insertEl(label, checkbox);
      _sp.insertEl(label, checkIndicator);
      _sp.insertEl(label, filterName);
      _sp.insertEl(filterLi, label);

      return filterLi;
    }

    function insertFiltersList(parent, filters) {
      if (typeof filters === 'undefined') return;

      var outerEl = _sp.createEl({
        tag: 'ul',
        cls: componentName + '__filters-list'
      });

      filters.forEach(function (filterList) {
        var li = _sp.createEl({
          tag: 'li',
          cls: componentName + '__filters-cat'
        });
        var link = _sp.createEl({
          tag: 'a',
          cls: componentName + '__filters-cat-title',
          str: filterList.label
        });

        _sp.insertEl(li, link);

        var dropdown = _sp.createEl({
          tag: 'ul',
          cls: componentName + '__filters-dropdown'
        });

        if ('Use Cases' === filterList.label) {
          var useCases = JSON.parse(window._spUseCases).parents;

          var filterListValues = [];
          for (var value in filterList.values) {
            filterListValues.push(filterList.values[value].value);
          }

          var leftColumn;
          var rightColumn;

          var useCaseCount = 1;

          useCases.forEach(function (useCase) {
             for(var useCaseKey in useCase) {

              if (useCase.hasOwnProperty(useCaseKey)) {
                var children = useCase[useCaseKey].children;
                var useLeftColumn = true;

                if (children !== undefined && children.length !== 0) {
                  if (useCaseCount > 2 && useCaseCount & 1) {
                    useLeftColumn = false;
                  }
                  else {
                    useLeftColumn = true;
                  }

                  var subDropdown = undefined;

                  for(var key in children) {
                    var index = filterListValues.indexOf(children[key].value);
                    if (-1 !== index) {

                      if (undefined === leftColumn) {
                        leftColumn = _sp.createEl({
                          tag: 'div',
                          cls: componentName + '__filter-usecase-leftcolumn'
                        });

                        rightColumn = _sp.createEl({
                          tag: 'div',
                          cls: componentName + '__filter-usecase-rightcolumn'
                        });
                      }

                      if (undefined === subDropdown) {

                        var filterLi = createSubdropdown(useCaseKey, useCaseCount);

                        if (useLeftColumn == true) {
                          _sp.insertEl(leftColumn, filterLi);
                        }
                        else {
                          _sp.insertEl(rightColumn, filterLi);
                        }

                        var subDropdown =  _sp.createEl({
                          tag: 'ul',
                          cls: componentName + '__filters-subdropdown'
                        });
                      }
                      var filterLiVal = createFilterListValue(filterList.values[index]);

                      _sp.insertEl(subDropdown, filterLiVal);
                    }
                  }

                  if (undefined !== subDropdown) {
                    if (useLeftColumn == true) {
                      _sp.insertEl(leftColumn, subDropdown);
                    }
                    else {
                      _sp.insertEl(rightColumn, subDropdown);
                    }
                    useCaseCount++;
                  }
                }
              }
             }

            if (undefined !== leftColumn) {
              _sp.insertEl(dropdown, leftColumn);
              if ((useCaseCount -1) > 2) {

                _sp.insertEl(dropdown, rightColumn);
              }
            }
          });
        }
        else {
          var dropdown = _sp.createEl({
            tag: 'ul',
            cls: componentName + '__filters-dropdown'
          });

          filterList.values.forEach(function (filter) {
            var filterLi = createFilterListValue(filter);

            _sp.insertEl(dropdown, filterLi);
          });
        }

        if (true === dropdown.hasChildNodes()) {
          _sp.insertEl(li, dropdown);
          _sp.insertEl(outerEl, li);

          _sp.insertEl(parent, outerEl);
        }
      });
    }

    function createSubdropdown(useCaseLabel) {
      var filterLi = _sp.createEl({
        tag: 'li',
        cls: componentName + '__filter'
      });
      var label = _sp.createEl({
        tag: 'label',
        cls: componentName + '__filter-label'
      });
      var filterName = _sp.createEl({
        tag: 'a',
        cls: componentName + '__filter-name',
        str: useCaseLabel
      });

      _sp.insertEl(label, filterName);
      _sp.insertEl(filterLi, label);

      return filterLi;
    }

    function insertFilters(parent, version) {
      if (
        typeof keyData.facets === 'undefined' ||
        keyData.hideFacets === true
      ) {
        return;
      }

      var filterElement = _sp.createEl({
        cls: componentName + '__filters ' + componentName + '__filters--' + version
      });

      _sp.insertEl(
        filterElement,
        _sp.createEl({
          tag: 'h3',
          cls: componentName + '__filters-title',
          str: 'Filter by:'
        })
      );

      insertFiltersList(filterElement, keyData.filters);

      if (version === 'desktop') {
        insertCurrentFilters(filterElement);
      }

      _sp.insertEl(parent, filterElement);
    }

    //
    // Banners
    //
    function insertPromo(parent, banner) {
      if (typeof data.banners === 'undefined') return;

      var outerEl = _sp.createEl({ cls: componentName + '__promo' });

      var b = data.banners.filter(function (item) {
        return typeof item[banner] !== 'undefined' && item[banner] !== '';
      })[0];

      if (typeof b === 'undefined') return;

      outerEl.insertAdjacentHTML('beforeend', b[banner]);
      _sp.insertEl(parent, outerEl);
    }

    //
    // Search Results
    //
    function insertResultIcon(item, parent) {
      if (item.doctype === 'Success Stories') return;

      if (item.mimetype === 'pdf' || item.mimetype.includes('video') || item.doctype === 'Webinars') {
        var icon = _sp.createEl({
          tag: 'span',
          cls: componentName + '__result-icon'
        });

        if (item.mimetype === 'pdf') {
          icon.classList.add(componentName + '__result-icon--pdf');
          icon.classList.add('icon-pdf');
        } else if (item.doctype === 'Webinars' || item.doctype === 'Demos' || item.mimetype.includes('video')) {
          icon.classList.add(componentName +  '__result-icon--video');
          icon.classList.add('icon-media');
        }

        parent.insertAdjacentElement('afterbegin', icon);
      }
    }

    function insertThumbnail(item, parent) {
      if (!item.doctype.includes('Success Stories') || item.thumbnail === '') {
        return;
      }

      parent.classList.add(componentName + '__result--success');

      var outerEl = _sp.createEl({
        cls: componentName + '__result-thumbnail'
      });

      var headline = _sp.createEl({
        tag: 'span',
        cls: componentName + '__result-thumbnail-headline',
        str: 'Success Story'
      });

      var img = _sp.createEl({
        tag: 'img',
        attrs: { src: item.thumbnail }
      });

      var imgWrap = _sp.createEl({
        cls: componentName + '__result-thumbnail-wrap'
      });

      _sp.insertEl(outerEl, headline);
      _sp.insertEl(imgWrap, img);
      _sp.insertEl(outerEl, imgWrap);
      _sp.insertEl(parent, outerEl);
    }

    function insertResultHeadline(item, parent, resultCount) {
      var headline = _sp.createEl({
        tag: 'h4',
        cls: componentName + '__result-title'
      });

      var innerEl = _sp.createEl({
        tag: 'a',
        cls: componentName + '__result-link',
        href: item.url,
        str: item.title,
        id: "result" + resultCount
      });

      insertResultIcon(item, innerEl);

      _sp.insertEl(headline, innerEl);
      _sp.insertEl(parent, headline);
    }

    function insertResultTeaser(item, parent) {
      if (item.desc === '') return;

      _sp.insertEl(
        parent,
        _sp.createEl({
          tag: 'p',
          cls: componentName + '__result-description',
          str: item.desc
        })
      );
    }

    function buildSearchListItem(props) {
      var resultCount = keyData.pagination.pageLow;
      return props['keyData.results'].map(function (item) {
        var resultElement = _sp.createEl({
          cls: componentName + '__result'
        });

        insertThumbnail(item, resultElement);
        insertResultHeadline(item, resultElement, resultCount);
        insertResultTeaser(item, resultElement);

        resultCount++;
        return resultElement;
      });
    }

    function insertResults(parent) {
      if (keyData.results === 0) return;

      var searchListElement = _sp.createEl({
        cls: componentName + '__results'
      });

      if ( (_sp.getParameterByName('q') !== null) && (_sp.getParameterByName('q') !== data.general.query) ) {
        insertSearchSuggestion(parent);
      }

      buildSearchListItem({
        'keyData.results': keyData.results
      }).forEach(function (item) {
        _sp.insertEl(searchListElement, item);
      });

      _sp.insertEl(parent, searchListElement);
    }

    function insertSearchSuggestion(parent) {

      var icon = _sp.createEl({
        tag: 'span',
        cls: componentName + '__suggested-search-icon icon-exclamation'
      });

      var headline = _sp.createEl({
        tag: 'h4',
        cls: componentName + '__result-title'
      });

      var resultsForStr = _sp.createEl({
        tag: 'span',
        cls: componentName + '__results',
        str: 'Showing results for ' + data.general.query
      });

      var lineBreak = _sp.createEl({
        tag: 'br'
      });

      var searchInsteadStr = _sp.createEl({
        tag: 'span',
        cls: componentName + '__results ' + componentName + '__result-description',
        str: 'No results for ' + _sp.getParameterByNameNoResult('q')
      });

      _sp.insertEl(parent, _sp.createEl({ tag: 'hr' }));
      _sp.insertEl(headline, icon);
      _sp.insertEl(headline, searchInsteadStr);
      _sp.insertEl(headline, lineBreak);
      _sp.insertEl(headline, resultsForStr);
      _sp.insertEl(parent, headline);

      _sp.insertEl(parent, _sp.createEl({ tag: 'hr' }));
    }

    //
    // Spell Check
    //
    function insertSpellSuggestion(parent) {
      if (keyData.suggestion === null) return;

      var parentEl = _sp.createEl({ cls: componentName + '__spellcheck' });
      var icon = _sp.createEl({
        cls: componentName + '__spellcheck-icon icon-exclamation'
      });
      icon.setAttribute('aria-hidden', true);
      _sp.insertEl(parentEl, icon);
      var currentStr = _sp.createEl({
        tag: 'p',
        cls: componentName + '__spellcheck-current',
        str: 'Showing results for '
      });
      var currentTerm = _sp.createEl({
        tag: 'span',
        cls: componentName + '__spellcheck-current-term',
        str: keyData.searchTerm
      });
      var suggStr = _sp.createEl({
        tag: 'p',
        cls: componentName + '__spellcheck-alt',
        str: 'Search instead for '
      });
      var suggTerm = _sp.createEl({
        tag: 'a',
        cls: componentName + '__spellcheck-alt-term',
        str: keyData.suggestion,
        href: keyData.suggestionPath
      });

      _sp.insertEl(currentStr, currentTerm);
      _sp.insertEl(parentEl, currentStr);
      _sp.insertEl(suggStr, suggTerm);
      _sp.insertEl(parentEl, suggStr);
      _sp.insertEl(parent, parentEl);
    }

    //
    // Pagination
    //
    function buildResultsCount(parent) {
      var countElement = _sp.createEl({
        cls: componentName + '__count'
      });

      var currentStr =
        keyData.pagination.pageLow + ' to ' + keyData.pagination.pageHigh;
      var totalStr =
        '<span class="' +
        componentName +
        '__count-Str">(of ' +
        keyData.pagination.totalItems +
        ')</span>';

      countElement.insertAdjacentHTML('beforeend', currentStr + ' ' + totalStr);

      _sp.insertEl(parent, countElement);
    }

    function createTextPaginationBtn(props) {
      var isDisabled = props.href === '';
      var parent = props.parent;
      var shortLabel = props.text.substring(0, 4).toLowerCase();
      var innerElement;
      var li = _sp.createEl({
        tag: 'li',
        cls: componentName + '__pagination-' + shortLabel
      });

      if (isDisabled) {
        li.classList.add('disabled');
        innerElement = _sp.createEl({
          tag: 'span'
        });
      } else {
        innerElement = _sp.createEl({
          tag: 'a',
          href: props.href
        });
      }

      _sp.insertEl(li, innerElement);

      _sp.insertEl(
        innerElement,
        _sp.createEl({ tag: 'span', cls: 'text', str: props.text })
      );
      innerElement.insertAdjacentHTML(
        shortLabel === 'next' ? 'beforeend' : 'afterbegin',
        '<span class="chevron"></span>'
      );

      return _sp.insertEl(parent, li);
    }

    function buildPagination(parent) {
      var parentEl = _sp.createEl({
        tag: 'ul',
        cls: componentName + '__pagination'
      });

      function createNumEls(props) {
        return props.pages.pages.map(function (page) {
          var li = _sp.createEl({
            tag: 'li',
            cls: componentName + '__pagination-num'
          });
          var innerEl;
          if (page.selected === 'true') {
            li.classList.add('current');
            innerEl = _sp.createEl({ tag: 'span' });
          } else {
            innerEl = _sp.createEl({ tag: 'a', href: page.link });
          }
          innerEl.textContent = page.page;
          _sp.insertEl(li, innerEl);
          return li;
        });
      }

      createTextPaginationBtn({
        parent: parentEl,
        href: keyData.pagination.pages.previous,
        text: 'Previous'
      });

      var pagiEls = createNumEls({
        pages: keyData.pagination.pages
      });

      pagiEls.forEach(function (item) {
        _sp.insertEl(parentEl, item);
      });

      createTextPaginationBtn({
        parent: parentEl,
        href: keyData.pagination.pages.next,
        text: 'Next'
      });

      _sp.insertEl(parent, parentEl);
    }

    //
    // Footer
    //
    function insertFooter(parent) {
      var footerElement = _sp.createEl({
        cls: componentName + '__footer'
      });

      buildResultsCount(footerElement);
      buildPagination(footerElement);

      _sp.insertEl(parent, footerElement);
    }

    //
    // No Results
    //
    function updateNoResultsKey(el) {
      var resultsKey = el.querySelector(
        '.' + componentName + '__no-results-key'
      );

      if (resultsKey === null) return;

      resultsKey.textContent = '';
      resultsKey.insertAdjacentText('beforeend', 'for ' + keyData.searchTerm);
    }

    function hideNoResults(el) {
      el.setAttribute('aria-hidden', true);
      el.style = 'display: none';
      el.classList.remove('active');
    }

    function displayNoResults(el) {
      if (currentResultsElement !== null) {
        currentResultsElement.parentNode.removeChild(currentResultsElement);
        currentResultsElement = null;
      }

      updateNoResultsKey(el);

      el.setAttribute('aria-hidden', false);
      el.style = 'display: block';
      el.classList.add('active');
    }

    _sp.sendSearchAnalytics = function (searchResult, searchResultHeadline) {

      var currentFiltersGroups = keyData.filters.filter(function (filterGroup) {
        return filterGroup.selected === true;
      });

      if ( ('true' !== _sp.getParameterByName('cf') || currentFiltersGroups.length > 0) &&
           (null === _sp.getParameterByName('page'))  ) {

        digitalData.search.facetedFilter = [];
        if (currentFiltersGroups.length > 0) {
          buildSelectedFilters(currentFiltersGroups).forEach(function (selectedFilter) {
            digitalData.search.facetedFilter.push(selectedFilter.filterHeader.toLowerCase() + "|" + selectedFilter.value.toLowerCase());
          });
        }

        var currentFacet = getCurrentFacet();
        if (null !== currentFacet) {
          digitalData.search.facetedFilter.push("narrow by|" + currentFacet.toLowerCase());
        }

        var searchTerm = _sp.getParameterByName('q');

        if (searchTerm !== null) {
          digitalData.search.searchTerm = searchTerm.toLowerCase();
          digitalData.search.searchResultNumber = data.general.total;
        }

        if (searchTerm !== data.general.query && data.general.query !== undefined) {
          digitalData.search.searchSuggestion = data.general.query.toLowerCase();
        }

        if (searchResultHeadline !== null) {
          digitalData.search.searchResult = searchResultHeadline.toLowerCase() + "|" + searchResult.replace(/\D/g,'');
        }

        if (typeof _satellite != 'undefined') {
          if ('true' === _sp.getParameterByName('navbar')) {
            _satellite.track('searchMainNav');
          }
          else if ( (null !== currentFacet) || (currentFiltersGroups.length > 0) ) {
            _satellite.track('searchFilter');
          }
          else {
            _satellite.track('searchComplete');
          }
        }
      }
    }

    //
    // Render
    //
    function createBodyElements() {
      document.body.classList.remove('mobile-menu--open');

      var bodyContainer = _sp.createEl({
        cls: 'body_container _sp'
      });

      var row = _sp.createEl({
        cls: 'row'
      });

      var contentElement = _sp.createEl({
        cls: componentName + '__content col-md-9 col'
      });

      if (keyData.hideFacets === false) {
        var sidebar = _sp.createEl({
          cls: componentName + '__mobile-menu col-md-3 col'
        });

        sidebar.insertAdjacentHTML('beforeend', '<button class="search-promote__mobile-menu-close">' +
        '<span class="sr-only">Close filters</span>' +
        '<span></span>' +
        '<span></span>' +
        '</button>');

        insertFacets(sidebar);

        insertFilters(sidebar, 'mobile');

        _sp.insertEl(row, sidebar);

        // TODO: consider moving this button in HTML to be inside buildFilters function
        _sp.insertEl(
          contentElement,
          _sp.createEl({
            tag: 'button',
            cls: componentName + '__mobile-menu-show',
            str: 'Filter Results'
          })
        );
        insertFilters(contentElement, 'desktop');
      }

      insertSpellSuggestion(contentElement);
      insertPromo(contentElement, 'top');
      insertResults(contentElement);
      insertFooter(contentElement);
      _sp.insertEl(contentElement, _sp.createEl({ tag: 'hr' }));
      insertPromo(contentElement, 'bottom');

      _sp.insertEl(row, contentElement);
      _sp.insertEl(bodyContainer, row);

      return bodyContainer;
    }

    function render() {
      if (keyData.noResults === true) {
        displayNoResults(noResulstEl);
        return;
      }

      hideNoResults(noResulstEl);

      if (currentResultsElement !== null) {
        currentResultsElement.remove();
      }

      currentResultsElement = createBodyElements();

      _sp.insertEl(searchPromoteParentEl, currentResultsElement);
    }

    render();
    _sp.sendSearchAnalytics(null, null);
  }

  function buildSearchURL(searchURL) {
    if (-1 !== searchURL.indexOf('&cf=true')) {
      searchURL = searchURL.replace('&cf=true', '');
    }
    else if (-1 !== searchURL.indexOf('&cf=true;')) {
      searchURL = searchURL.replace('&cf=true;', '');
    }
    else if (-1 !== searchURL.indexOf('cf=true;')) {
      searchURL = searchURL.replace('cf=true;', '');
    }
    else if (-1 !== searchURL.indexOf('cf=true')) {
      searchURL = searchURL.replace('cf=true', '');
    }
    else if (-1 !== searchURL.indexOf('navbar=true;')) {
      searchURL = searchURL.replace('navbar=true;', '');
    }
    else if (-1 !== searchURL.indexOf('navbar=true')) {
      searchURL = searchURL.replace('navbar=true', '');
    }
    return searchURL;
  }

  //
  // On load, render URL param
  //
  document.addEventListener('DOMContentLoaded', _sp.sendReq());

  //
  // On load, add query param to input
  //
  function handleCurrentQuery(queryVal) {
    if (queryVal === null) {
      return;
    }
    document.getElementById('search-input').value = queryVal;
  }
  handleCurrentQuery(_sp.getParameterByName('q'));

  window.addEventListener('popstate', function () {
    _sp.sendReq();
    handleCurrentQuery(_sp.getParameterByName('q'));
  });

  //
  // Event listeners
  //
  // TODO: update state on on back/forward button
  searchPromoteParentEl.addEventListener('click', function (event) {
    var mobileMenu = this.querySelector('.' + componentName + '__mobile-menu');

    if (event.target.matches('.' + componentName + '__mobile-menu-show')) {
      event.preventDefault();
      document.body.classList.add('mobile-menu--open');
      mobileMenu.classList.add(componentName + '__mobile-menu--open');
    }

    if (event.target.matches('.' + componentName + '__mobile-menu-close')) {
      document.body.classList.remove('mobile-menu--open');
      mobileMenu.classList.remove(componentName + '__mobile-menu--open');
    }

    if (event.target.matches('.' + componentName + '__categories-wrap-title')) {
      event.preventDefault();
      event.target.classList.toggle('categories--open');
      event.target.parentNode.nextElementSibling.classList.toggle('categories--open');
      return false;
    }

    if (event.target.matches('.' + componentName + '__filters-cat-title')) {
      event.preventDefault();
      var openFilter = this.querySelector('.filters--open');
      if (openFilter !== null && openFilter !== event.target.parentNode) {
        openFilter.classList.remove('filters--open');
      }
      event.target.parentNode.classList.toggle('filters--open');
      return false;
    }

    if (event.target.matches('div[class^="' + componentName + '__filter-usecase"] > .' + componentName + '__filter .' + componentName + '__filter-name')) {
      event.preventDefault();
      var openSubFilter = this.querySelector('.subfilters--open');
      if (openSubFilter !== null && openSubFilter !== event.target.parentNode.parentNode) {
        openSubFilter.classList.remove('subfilters--open');
      }
      event.target.parentNode.parentNode.classList.toggle('subfilters--open');
      return false;
    }

    if (event.target.matches('.' + componentName + '__result-link')) {
      _sp.sendSearchAnalytics(event.target.id, event.target.text);
    }

    if (event.target.matches('.' + componentName + '__noresults-link')) {
      document.getElementById('search-input').value = event.target.text;
    }

    if (event.target.search) {
      event.preventDefault();
      window.history.pushState('', '', event.target.href);
      _sp.sendReq();

      if (
        event.target.parentNode.parentNode.className ===
        componentName + '__pagination'
      ) {
        searchFormParentEl.scrollIntoView();
      }
    }
  });

  document.body.addEventListener('click', function (event) {
    if (!event.target.matches('.' + componentName + '__search-input') &&
        !event.target.matches('.swyt__result.active') ) {
      _sp.clearAllResults();
    }

    if (!event.target.matches('.' + componentName + '__filters-cat-title')) {
      var openFilter = this.querySelector('.filters--open');
      if (openFilter !== null && openFilter !== event.target.parentNode) {
        openFilter.classList.remove('filters--open');
      }
    }
  });

  $('.' + componentName + '__search-btn').on('click', function (event) {
    event.preventDefault();
    var val = document.getElementById('search-input').value;

    if (val.toLowerCase() === _sp.getParameterByName('q')) return;

    window.history.pushState('', '', '?q=' + val);
    _sp.sendReq();
  });

  searchFormEl.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      var val = this.querySelector('#search-input').value;

      if (val.toLowerCase() === _sp.getParameterByName('q')) return;

      window.history.pushState('', '', '?q=' + val);
      _sp.sendReq();
    }
  });

  //
  // Loader
  //

  // TODO: figure out loader
  // function addLoad() {
  //   var loaderUrl = 'https://www.cloudera.com/content/dam/www/loader/giphy.gif';
  //   var parentEl = _sp.createEl({ cls: 'red' });

  //   parentEl.setAttribute('style', 'margin-left: auto; margin-right: auto;');

  //   var loaderEl = _sp.createEl({
  //     tag: 'img'
  //   });
  //   loaderEl.src = loaderUrl;
  //   _sp.insertEl(parentEl, loaderEl);
  //   _sp.insertEl(searchPromoteParentEl, parentEl);
  // }
  // addLoad();

  // $(document)
  //   .ajaxStart(function () {
  //     console.log('start');
  //   })
  //   .ajaxStop(function () {
  //     console.log('stop');
  //   });
})();

