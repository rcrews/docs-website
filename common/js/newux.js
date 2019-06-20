var NEWUX = (function($) {
    'use strict';

    $('.product-drawer .open-close').on('click', function() {
        if($('.product-drawer').hasClass('open')) {
            $('.product-drawer').css('width', '50px').removeClass('open');
            $('main').css('marginLeft', '50px');
            $('.product-drawer .logo img').attr('src', '//www.cloudera.com/apps/settings/wcm/designs/www/clientlibs/css/assets/icons/favicon/apple-touch-icon-152x152.png')
            $(this).html('&raquo;'); // TODO... delay this .5s
            
        } else {
            $('.product-drawer').css('width', '250px').addClass('open');
            $('.product-drawer .logo img').attr('src', '//docs.hortonworks.com/common/img/cloudera.png')
            $('main').css('marginLeft', '250px');
            $(this).html('&laquo;');
        }
    }) 

}(jQuery));
