// configure your validation
if (document.getElementById("mk-language-picker") !== null) {

    var windowLoc = window.location.href;
    //alert(windowLoc);

    $("#mk-country-options").on("change", function() {

        var getLanguageVal = $(this).val();

        window.location.href = getLanguageVal;

       

    });

}
jQuery(function($) {

    $(document).ready(function() {

        if ($("#mG61Hd")[0]) {

            var onDemandCourse = $('#onDemandTitle').html();

            $('#training-google-submit').unbind('click').click(function(event) {
                console.log('submit clicked');
                /* Act on the event */
                event.preventDefault();
                $('#googleFormEmail').removeAttr('style');
                $('.googleFormSubmit p').remove();
                var field1 = $('#googleFormEmail').val();
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (!emailReg.test(field1)) {
                    $('#googleFormEmail').css('border', '1px solid red');
                    $('.googleFormSubmit').append('<p style="font-size:12px; padding:5px 0; margin:0; color:red;">Please enter valid email</p>');
                    console.log('validate form email is correct');
                } else if (field1 === "") {
                    $('#googleFormEmail').css('border', '1px solid red');
                    $('.googleFormSubmit').append('<p style="font-size:12px; padding:5px 0; margin:0; color:red;">You must enter a valid email.</p>');
                    console.log('validate form email is no empty');
                } else {
                    console.log('SUBMMING FORM');
                    $('#mG61Hd').submit();

                    $('div.training-ondemand-form').hide();
                    $('div.brilliant').hide();

                    $('.training-wrap').append('<div class="brilliant" style="width:500px;"><a href="http://www.cloudera.com"><img src="/apps/settings/wcm/designs/www/clientlibs/assets/logo/cloudera-white.png"></a></div><div class="training-ondemand-thankyou"><h1>Activate ' + onDemandCourse + ' Exercise Environment</h1><p><b>Thank You:</b> Your request has been received. Please check your email for the Access URL. The email should arrive within 5 minutes.</p><p>If you do not see the email, please check your spam folder. The email will arrive from <a href="mailto:ondemand-team@cloudera.com" target="_top">ondemand-team@cloudera.com.</a></p></div>');
                    $('.brilliant').css('min-height', 'auto');

                    console.log('THANK YOU');
                }

            });



        }

    });

});
jQuery(function($) {

    $(document).ready(function() {

        if ($("#boomiForm")[0]) {


            var onDemandCourse = $('#onDemandTitle').html();

            $('#training-boomi-submit').unbind('click').click(function(event) {
                console.log('submit clicked');
                /* Act on the event */
                event.preventDefault();
                $('#email').removeAttr('style');
                $('.boomiFormSubmit p').remove();
                var field1 = $('#email').val();
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (!emailReg.test(field1)) {
                    $('#email').css('border', '1px solid red');
                    $('.boomiFormSubmit #email').append('<p style="font-size:12px; padding:5px 0; margin:0; color:red;">Please enter valid email</p>');
                   
                } else if (field1 === "") {
                    $('#email').css('border', '1px solid red');
                    $('.boomiFormSubmit #email').append('<p style="font-size:12px; padding:5px 0; margin:0; color:red;">You must enter a valid email.</p>');
                    
                } else {
                    
                    var formemail = $('#email').val();
                    var formcourse = $('#course').val();
                     var formkeyboard = $('#keyboard').val();
       
                   $.post( "https://connect.boomi.com/ws/simple/createOnDemandVM;boomi_auth=V2ViVGVhbUBjbG91ZGVyYS1WSENDWFkuVzk0NERZOmEwM2E2N2ViLTgzYWEtNDBjNi04YmM0LTcxNTZjNTc2ZDgzNA==", JSON.stringify({"email": formemail, "keyboard": formkeyboard, "course": formcourse }));
                   // $('#boomiForm').submit();

                    $('div.training-ondemand-form').hide();
                    $('div.brilliant').hide();

                    $('.training-wrap').append('<div class="brilliant" style="width:500px;"><a href="http://www.cloudera.com"><img src="/apps/settings/wcm/designs/www/clientlibs/assets/logo/cloudera-white.png"></a></div><div class="training-ondemand-thankyou"><h1>Activate ' + onDemandCourse + ' Exercise Environment</h1><p><b>Thank You:</b> Your request has been received. Please check your email for the Access URL. The email should arrive within 5 minutes.</p><p>If you do not see the email, please check your spam folder. The email will arrive from <a href="mailto:ondemand-team@cloudera.com" target="_top">ondemand-team@cloudera.com.</a></p></div>');
                    $('.brilliant').css('min-height', 'auto');

                   
                }

            });



        }

    });

});
if (document.getElementById("pmi") !== null) {
    jQuery(function($) {
        $(document).ready(function($) {
            // configure your validation
            $("#pmi").validate({
                rules: {
                    firstname: {
                        minlength: 2
                    },
                    lastname: {
                        minlength: 2
                    },
                    select: {
                        required: true,
                        valueNotEquals: ""
                    },
                    city:{
                        required: true,
                        valueNotEquals: ""
                    },
                    country:{
                        required: true,
                        valueNotEquals: ""

                    },
                    phone: {
                        valueNotEmpty: true,
                        customPhone: true,
                        minlength: 7
                    },
                    Email: {
                        required: true,
                        "internet-email": true,
                    },
                    comments: {
                        maxlength: 500,
                    },
                    clouderaCustomer: {
                        required: true,
                        valueNotEquals: ""
                    },
                  /*  consent1: {
                        required: true
                    },
                    consent2: {
                        required: true
                    },
                    consent3: {
                        required: true
                    },
                    consent4: {
                        required: true
                    },
                    consent5: {
                        required: true
                    },
                    consent6: {
                        required: true
                    },*/
                    messages: {
                        select: {
                            valueNotEmpty: "Please add your city."
                        }
                    }
                }
            });
            $('.required, #pmi input[type="radio"]').bind('blur keyup change', function() {
                if ($("form.pmi").valid()) {
                    $('.pmi #submit').removeAttr('disabled').removeClass('disabled');
                } else {
                    $('.pmi #submit').prop('disabled', 'disabled').addClass('disabled');
                }
            });
           
           /* $("#pmi input[name='consent5']").click(function() {
                $this.addClass('valid');
            });*/

            $(".pmi #type-of-org").on("change", function() {

                 if ($(this).val() === "Other") {

                     $('#org-other').css('display', 'block');
                     $('#pmi #other').rules("add", "required");
                 }else{
                    $('#org-other').css('display', 'none');
                    $('#pmi #other').rules("remove");
                 }

            });
            
            $(".pmi #pmi-donation-type").on("change", function() {
                var value = $(this).valid();
                if ($(this).val() === "software-training") {
                    $('.ondemand').css('display', 'none');
                    $('.software').css('display', 'block');
                    /*remove rules*/
                    $('#pmi #ondemand-eligibiliy').rules("remove");
                    $('#pmi #ondemand-q1').rules("remove");
                    $('#pmi #ondemand-q2').rules("remove");
                    $('#pmi #ondemand-q3').rules("remove");
                    $('#pmi #ondemand-q4').rules("remove");
                    $('#pmi #ondemand-q5').rules("remove");
                    $('#pmi #ondemand-q6').rules("remove");
                    $('#pmi #software-eligibiliy').rules("add", "required");
                    $('#pmi #software-q1').rules("add", "required");
                    $('#pmi #software-q2').rules("add", "required");
                    $('#pmi #software-q3').rules("add", "required");
                    $('#pmi #software-q4').rules("add", "required", {
                        maxlength: 1500
                    });
                    $('#pmi #software-q5').rules("add", "required");
                    $('#pmi #software-q6').rules("add", "required");
                    $('#pmi #software-q7').rules("add", "required");
                    $('#pmi #software-q8').rules("add", "required");
                    $('#pmi #software-q9').rules("add", "required");
                    $('#pmi #software-q10').rules("add", "required");
                    $('#pmi #software-q11').rules("add", "required");
                    $('#pmi #software-q12').rules("add", "required");
                    $('#pmi #software-q13').rules("add", "required");
                    $('#pmi #software-q14').rules("add", "required");
                    $('#pmi #software-q18').rules("add", {
                        maxlength: 1000
                    });
                    $('#pmi #software-q19').rules("add", "required");
                    $('#pmi #software-q20').rules("add", "required");
                } else if ($(this).val() === "onDemand") {
                    $('.software').css('display', 'none');
                    $('.ondemand').css('display', 'block');
                    /*remove rules*/
                    $('#pmi #software-eligibiliy').rules("remove");
                    $('#pmi #software-q1').rules("remove");
                    $('#pmi #software-q2').rules("remove");
                    $('#pmi #software-q3').rules("remove");
                    $('#pmi #software-q4').rules("remove");
                    $('#pmi #software-q5').rules("remove");
                    $('#pmi #software-q6').rules("remove");
                    $('#pmi #software-q7').rules("remove");
                    $('#pmi #software-q8').rules("remove");
                    $('#pmi #software-q9').rules("remove");
                    $('#pmi #software-q10').rules("remove");
                    $('#pmi #software-q11').rules("remove");
                    $('#pmi #software-q12').rules("remove");
                    $('#pmi #software-q13').rules("remove");
                    $('#pmi #software-q14').rules("remove");
                    $('#pmi #software-q15').rules("remove");
                    $('#pmi #software-q16').rules("remove");
                    $('#pmi #software-q17').rules("remove");
                    $('#pmi #software-q18').rules("remove");
                    $('#pmi #software-q19').rules("remove");
                    $('#pmi #software-q20').rules("remove");
                    $('#pmi #ondemand-eligibiliy').rules("add", "required");
                    $('#pmi #ondemand-q1').rules("add", "required");
                    $('#pmi #ondemand-q2').rules("add", "required");
                    $('#pmi #ondemand-q3').rules("add", "required");
                    $('#pmi #ondemand-q4').rules("add", "required");
                    $('#pmi #ondemand-q5').rules("add", "required");
                    $('#pmi #ondemand-q6').rules("add", {
                        maxlength: 500
                    });
                } else {}
            });
        });
    });
    jQuery(function($) {
        //Form Spam Foil
        $('#hpp').hide();
        $('input').focus(function() {
            $('input[name="hpp"]').val('ok-go');
        });
    });
}
(function($) {
    //Only interprete this code if there is actually this form on the page.
    if (document.getElementById("marketing-form") !== null) {
        var marketingFormStart = 0;

        $("#marketing-form").validate();
        //#emailAddress required id name for demand base
        if ($("#emailAddress").length) {

            $("#emailAddress").rules("add", {
                required: true,
                "internet-email": true
            });
        }
        if ($("#mk-first-name").length) {
            $("#mk-first-name").rules("add", {
                required: true,
                minlength: 2
            });
        }
        if ($("#mk-last-name").length) {
            $("#mk-last-name").rules("add", {
                required: true,
                minlength: 2
            });

        }
        if ($('#mk-job-function').length) {

            $("#mk-job-function").rules("add", {
                required: true
            });

        }
        if ($('#mk-job-role').length) {

            $("#mk-job-role").rules("add", {
                required: true
            });

        }
        if ($('#mk-job-title').length) {

            $("#mk-job-title").rules("add", {
                required: true
            });

        }
        //#company required id name for demand base
        if ($("#company").length) {
            $("#company").rules("add", {
                required: true
            });
        }

        if ($("#mk-phone").length) {
            $("#mk-phone").rules("add", {
                required: true,
                minlength: 7,
                'customPhone': true
            });
        }
        if ($("#mk-country").length) {
            $("#mk-country").rules("add", {
                required: true
            });
        }
        if ($("#mk-industry").length) {
            $("#mk-industry").rules("add", {
                required: true
            });
        }
        if ($("#mk-terms").length) {
            $("#mk-terms").rules("add", {
                required: true,
                messages: {
                    required: "You must agree to our terms and conditions."
                }
            });
        }

        //for contact sales
        if ($("select[name=consideringCloudera]").length !== 0) {
            $("select[name=consideringCloudera]").on("change", function() {
                if ($(this).val() === "None of the above") {
                    $('textarea[name=comments]').addClass('required');
                    $('textarea[name=comments]').parent().parent().find('label').html('How can we can help you?');
                    $("form#marketing-form").valid();
                } else {

                    $('textarea[name=comments]').removeClass('required error');
                    $('textarea[name=comments]').parent().parent().find('label').html('Comments');
                    $('textarea[name=comments]').siblings('#mk-comments-error').remove();
                    $("form#marketing-form").valid();
                }
            });
        } //end consideringCloudera

        //Validation
        $('#marketing-form input, #marketing-form textarea, #marketing-form select').on('blur keyup change', function() {
            if (marketingFormStart === 0) {
                marketingFormStart = 1;
                //console.log('formStart');
                if (typeof _satellite != 'undefined') {
                    _satellite.track('formStart');
                }

            }
            if ($("form#marketing-form").valid()) {
                // console.log("True");
                $('#marketing-form #mk-submit, #mk-resources-submit').removeAttr('disabled').removeClass('disabled');
            } else {
                // console.log("False");
                $('#marketing-form #mk-submit, #mk-resources-submit').prop('disabled', 'disabled').addClass('disabled');
            }
        });

    }
})(jQuery);
function getParameter(name) {
    var url = window.location.href;
    var paramsStart = url.indexOf("?");
    if(paramsStart != -1){
        var paramString = url.substr(paramsStart + 1);
        var tokenStart = paramString.indexOf(name);
        if(tokenStart != -1){
            paramToEnd = paramString.substr(tokenStart + name.length + 1);
            var delimiterPos = paramToEnd.indexOf("&");
            if(delimiterPos == -1){
                return paramToEnd;
                }
            else {
                return paramToEnd.substr(0, delimiterPos);
            }
        }
    }
}

jQuery(function($) {
    //Form Spam Foil
    $('#hpp').hide();
    $('input').focus(function() {
        $('input[name="hpp"]').val('ok-go');
    });


});

// configure your validation
jQuery(function($) {
    if (document.getElementById("marketing-form") !== null) {
        //Vars
        var userBrowser = "";
        var campaignCID = getParameter('cid');
        var campaignSRC = getParameter('src');
        var campaignUTM = getParameter('utm');
        var cidRedir = '';
        var srcRedir = '';
        var utmRedir = '';
        var regForm = $('#marketing-form');
        var userRedir = regForm.find('input[name=redir]').val();
        var mksubmit = false;
        var formsubmitted = false;
        var honey = $('input[name=hpp]').val();
        var post = "https://s1465054361.t.eloqua.com/e/f2";

        var on24post = "/bin/services/content/cloudera/on24";
        var eventIdon24 = regForm.find('input[name=eventid]').val();

        //custom post destination
        if ($("#marketing-form").attr('data-custom-post') != undefined) {
            post = $("#marketing-form").attr('data-custom-post');
        }

        if ($("#marketing-form").attr('data-pardot-post') != undefined) {
            post = '/bin/services/content/cloudera/pardot.' + $("#marketing-form").attr('data-pardot-post');
        }

        var form = $('.mk-form-submit form');
        var countryData = $.fn.intlTelInput.getCountryData(),
            telInput = $("#mk-phone"),
            addressDropdown = $("#address-country");

        // listen to the telephone input for changes
        telInput.on("countrychange", function(e, countryData) {
            addressDropdown.val(countryData.iso2);
        });

        //campaign and source
        if (campaignCID !== undefined) {
            $('#mk-cid').val(campaignCID);
            cidRedir = 'cid=' + campaignCID;
        }
        if (campaignSRC !== undefined) {
            $('#mk-src').val(campaignSRC);
            srcRedir = 'src=' + campaignSRC;
        }
        if (campaignUTM !== undefined) {
            $('#mk-utm').val(campaignUTM);
            utmRedir = 'utm=' + campaignUTM;
        }
        var version = detectIE();

        function detectIE() {
            var ua = window.navigator.userAgent;

            // Test values; Uncomment to check result …

            // IE 10
            // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

            // IE 11
            // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

            // Edge 12 (Spartan)
            // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

            // Edge 13
            // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

            var msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                // IE 10 or older => return version number
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                // IE 11 => return version number
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }

            var edge = ua.indexOf('Edge/');
            if (edge > 0) {
                // Edge (IE 12+) => return version number
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }

            // other browser
            return false;

        }
        //browser and location
        if (version != false) {

            if (version >= 12) {
                //document.getElementById('result').innerHTML = 'Edge ' + version;
                userBrowser = 'Edge ' + version;
            } else {
                //document.getElementById('result').innerHTML = 'IE ' + version;
                userBrowser = 'IE ' + version;
            }
        } else if ($.browser.chrome) {
            userBrowser = "Chrome " + $.browser.version;
        } else if ($.browser.mozilla) {
            userBrowser = "Mozilla " + $.browser.version;
        } else if ($.browser.opera) {
            userBrowser = "Opera " + $.browser.version;
        } else if ($.browser.safari) {
            userBrowser = "Safari " + $.browser.version;
        }

        $('#mk-browser').val(userBrowser);
        $('#mk-loc').val(window.location);

        //phone load
        $("#mk-phone").intlTelInput({
            // allowDropdown: false,
            autoHideDialCode: true,
            autoPlaceholder: "off",
            // dropdownContainer: "body",
            excludeCountries: ["ir", "sy", "cu", "kp", "sd"],
            geoIpLookup: function(callback) {
                $.get("https://ipinfo.io/?token=8c9fc81aab5a15", function() {}, "jsonp").always(function(resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "";
                    var postal = (resp && resp.postal) ? resp.postal : "";
                    var mkcity = (resp && resp.city) ? resp.city : "";
                    var mkregion = (resp && resp.region) ? resp.region : "";
                    callback(countryCode);

                    $('#mk-zip').val(postal);
                    $('#mk-city').val(mkcity);
                    $('#mk-region').val(mkregion);
                    //  console.log(countryCode);
                    //  console.log(postal);
                });
            },
            initialCountry: "auto",
            //nationalMode: false,
            // numberType: "MOBILE",
            // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
            preferredCountries: ['us', 'gb', 'au', 'fr', 'de', 'it', 'kr', 'cn', 'jp'],
            separateDialCode: true,
            utilsScript: "/apps/settings/wcm/designs/www/clientlibs/js/utils.js"
        });
        $('.country').click(function(event) {
            var getCountryVal = $(this).attr('data-country-code').toUpperCase();
            $('#mk-country').val(getCountryVal);
            /* Act on the event */
        });
        $("div.selected-dial-code").click(function(event) {
            var getVal = $(this).html();
            //var getCountryVal = $('.country-name').html();
            //var countryName = getCountryVal.substr(0, getCountryVal.indexOf(':'));
            $("#mk-phone").val(getVal);
        });
        //$("select[name=consideringCloudera]").off();
        $(window).load(function() {
            var dialcode = $(".flag-container .selected-dial-code").html();
            setTimeout(function() {
                $("#mk-phone").val(dialcode);
            }, 100);
        });
        var availableTags = ["Analytics / Business Intelligence", "Analytics Consultant", "Analytics Manager", "Analytics Scientist", "Analytics Specialist", "Analytics/Business Intelligence", "AnalyticsBusiness Intelligence", "Application Engineer", "Architect", "Associate", "Associate Business Analyst", "Audit, Information Technology", "Big Data / Architecture", "Biostatistician", "Business Analysis Manager", "Business Analyst", "Business Analytics Director", "Business Consultant", "Business Development/Marketing/Sales", "Business Intelligence Analyst", "Business Intelligence Consultant", "Business Intelligence Specialist", "CAA", "CAO", "CCO", "CDO", "CEO", "CFO", "Chief Accounting Officer", "Chief Actuary of GeoSpatial Analytics and Modeling", "Chief Administrative Officer", "Chief Analytic Officer", "Chief Analytics & Algorithms Officer", "Chief Analytics Officer", "Chief Applications Architect", "Chief Architect", "Chief Compliance Officer", "Chief Contracting Officer", "Chief Credit & Analytics Officer", "Chief Data and Analytics Officer", "Chief Data Scientist", "Chief Development Officer", "Chief Digital Officer", "Chief Executive Officer", "Chief Financial Officer ", "Chief Information Officer", "Chief Marketing Officer", "Chief Operating Officer", "Chief Research & Analytics Officer", "Chief Scientist", "Chief Scientist, Global Head of Analytics", "Chief Scientist, VP of Analytics", "Chief Technical Officer", "Chief Technology Officer", "Chief Technology Officer (CTO)", "Chief Technology Officer, Enterprise Information Management & Analytics", "CIO", "Client Director, Business Analytics", "CMO", "Co-Founder", "Co-Founder and CTO", "Consultant", "COO", "Coordinator/Administrator", "Corporate VP", "CTO", "Customer Service; Information Technology", "Customer Service; Information Technology; Director", "Customer Service; Information Technology; General Operations", "Customer Service; Information Technology; General R&D", "Customer Service; Information Technology; VP", "Customer Service; Software Engineering; Information Technology", "Data Analyst", "Data Analyst/Data Scientist", "Data Analytics Consultant", "Data Anayltics Professional", "Data Architect", "Data Engineer", "Data Manager", "Data Miner", "Data Science", "Data Scientist", "Data Warehouse / Management", "Data Warehouse /Management", "Database", "Database Administrator", "Developer", "Digital Marketing Manager", "Director", "Director - Advanced Analytics", "Director - Analytic Science", "Director - BI & Analytics", "Director - Fraud Analytics & R&D", "Director - Predictive Analytics", "Director : Digital Analytics", "Director (Analytics and Creative Strategy)", "Director (Marketing Analytics)", "Director Analytics Strategy, JMP", "Director Ð Analytics Delivery", "Director Marketing Analytics", "Director of Advanced Analytics", "Director of Analytic Consulting, Product/Data Loyalty Analytics", "Director of Analytic Solutions", "Director of Analytics", "Director of Analytics (consultant)", "Director of Data Analytics and Advertising Platforms", "Director of Digital Analytics and Customer Insight", "Director of Engineering", "Director of Health Analytics", "Director of Innovation, Big Data Analytics", "Director of IT Operations", "Director of Product, Analytics", "Director of Research", "Director of Risk Analytics and Policy", "Director of Science & Analytics for Enterprise Marketing Management (EMM)", "Director of Technology", "Director of Web Analytics and Optimization", "Director, Advanced Analytics", "Director, Advanced Analytics, HumanaOne", "Director, Advanced Strategic Analytics", "Director, Analytic Science", "Director, Analytic Strategy", "Director, Analytical Services", "Director, Analytics", "Director, Big Data Analytics and Segmentation", "Director, Business Analytics", "Director, Business Analytics & Decision Management Strategy", "Director, Business Intelligence & Analytics, Pogo", "Director, Business Intelligence and Analytics", "Director, Business Planning & Analytics", "Director, Center for Business Analytics, Stern School of Business", "Director, Clinical Analytics", "Director, Customer Analytics", "Director, Customer Analytics & Pricing", "Director, Customer Insights and Business Analytics", "Director, Data Analytics", "Director, Data Science", "Director, Data Science & Analytics Practice", "Director, Data Warehousing & Analytics", "Director, Database Marketing & Analytics (Marketing)", "Director, DVD BI and Analytics", "Director, Gamification Analytics Platform, Information Analytics & Innovation", "Director, Global Digital Marketing Analytics", "Director, Group Analytics", "Director, Head of Forensic Data Analytics", "Director, Marketing Analytics", "Director, Marketing Analytics for Bing Product Group", "Director, Oracle Database Advanced Analytics", "Director, Predictive Analytic Applications", "Director, Reporting/Analytics", "Director, Risk & Analytics", "Director, Risk and Business Analytics", "Director, Statistical Modeling and Analytics", "Director, Statistics and Project Analytics / Senior Analytic Consultant", "Director, Strategic Analytics", "Director, Web Analytics", "Director; General Operations", "Director/Head of Analytics", "Director/Principal, Analytics", "Distinguished Scientist", "Engagement Manager", "Engineer", "Engineer/Developer", "Enterprise Information Architect", "ETL / ELT", "Event Sponsor ", "Executive VP", "Financial Analyst, Information Technology", "Independent Consultant", "Individual contributor", "Information Management Specialist", "Infrastructure", "IS/IT Consultant", "IS/IT Director", "IS/IT Management", "IS/IT Professional", "IT", "IT Business Analyst", "IT Manager", "IT Operations Staff", "IT Professional", "IT Staff/Technical User", "Lead Analyst", "Lead Data Scientist", "Lead Scientist", "Lead Solutions Architect", "Lead Statistician", "Lean Six Sigma Master Black Belt Consultant", "Legal, Information Technology", "Machine Learning Engineer", "Management Consultant", "Manager", "Manager Analytics", "Manager of Analytics", "Manager, Analytics", "Manager, Business Analytics", "Managing Consultant", "Market Research Analyst", "Marketing / Sales", "Marketing / Sales / BD", "MarketingSales", "Mathematician", "Networking", "Non technical", "Other", "Partner", "Planning Analyst", "Principal Architect", "Principal Consultant", "Principal Data Scientist", "Principal Engineer", "Principal Research Scientist", "Principal Scientist", "Principal Software Engineer", "Procurement, Information Technology", "Product/Market Management, Information Technology", "Programmer", "Programmer/Developer", "Project Consultant", "Project Director", "Project Lead", "Project Leader", "Project Management; Information Technology", "Project Manager", "Quality Assurance; Information Technology", "Quality Manager", "Quant", "Quantitative Analyst", "R&D Director", "Reporting Analyst", "Research Analyst", "Research and Development Manager", "Research Associate", "Research Director", "Research Engineer", "Research Fellow", "Research Manager", "Research Scholar", "Research Scientist", "Risk Analytics Manager", "Risk Consultant", "Risk Manager", "Risk Officer", "Sales Engineer", "Sales Executive, Information Technology", "Sales Executive, Software Engineering", "Sales, Information Technology", "Sales; Information Technology; Director", "SAP Solution Architect", "SAS Consultant", "SAS Data Analyst", "SAS Programmer", "Scientist", "Security / Compliance", "Senior Analyst", "Senior Analytics Consultant", "Senior Bioinformatics Scientist", "Senior Business Analyst", "Senior Business Intelligence Consultant", "Senior Business Intelligence Developer", "Senior Consultant", "Senior Credit Risk Analyst", "Senior Data Analyst", "Senior Data Scientist", "Senior Developer", "Senior Manager, Business Analytics", "Senior Managing Consultant", "Senior Market Analyst", "Senior Marketing Analyst", "Senior Programmer Analyst", "Senior Project Manager", "Senior Research Analyst", "Senior Research Associate", "Senior Research Scientist", "Senior Software Engineer", "Senior Statistician", "Senior Web Analyst", "Social Media Strategist", "Software Developer", "Software Development Engineer", "Software Engineer", "Software Engineering; Director", "Software Engineering; Information Technology", "Software Engineering; Information Technology; VP", "Software Engineering; VP", "Solution Architect", "Solutions Architect", "Sr Quantitative Analyst", "Sr Software Engineer", "Sr. Consultant", "Sr. Data Scientist", "Sr. Project Manager", "Sr. Risk Analyst", "Sr. Software Engineer", "Sr. Solution Architect", "Sr. Statistician", "Staff Engineer", "Statistical Consultant", "Statistical Programmer", "Statistical Programmer (SAS)", "Statistician", "Storage", "Student", "Subject Matter Expert", "System Analyst", "Systems Analyst", "Systems Engineer", "Team Lead", "Team Leader", "Technical Business Analyst", "Technical Consultant", "Technical Manager", "Vice President", "Vice President - Analytics", "Vice President of Engineering", "Vice President, Analytics", "VP Engineering", "VP of Analytics", "VP of Engineering", "VP, Information Security", "VP, General Operations", "Web Analyst", "Web Analytics Manager", "Web Developer"];
        $("#mk-job-title").autocomplete({
            source: availableTags
        });
        /*optin state change*/
        if (document.getElementById("mk-form-partner-accept") !== null) {

            $('input[name=subscription]').on("change", function() {
                $('#mk-form-partner-accept').toggle(1);

            });

        }
        /*Event Time for Sessions AM PM*/
        if (document.getElementById("ampm") !== null) {
            $("#ampm").on("change", function() {
                // console.log('ampm');
                if ($(this).val() === "am") {
                    //  console.log('is-am');
                    $('#am').css('display', 'block');
                    $('#pm').css('display', 'none');
                }
                if ($(this).val() === "pm") {
                    // console.log('is-pm');
                    $('#pm').css('display', 'block');
                    $('#am').css('display', 'none');
                }
                if ($(this).val() === "both") {
                    // console.log('is-both');
                    $('#pm').css('display', 'block');
                    $('#am').css('display', 'block');
                }
                if ($(this).val() === "") {
                    $('#pm').css('display', 'none');
                    $('#am').css('display', 'none');
                }
            });
        }
        //Close Error Message

        $('.mk-form-error .icon-close').unbind().click(function(event) {
            //alert('yup');
            //$('.mk-error-conatiner').attr('style', '');
            location.reload();

        });

        function scrollToID(idVal) {
            try {
                $('html, body').animate({
                    scrollTop: $(idVal).offset().top
                }, 20);
            } catch (e) {
                location.hash = idVal;
            }
        }

        //Submit
        $('.mk-form-submit form').submit(function(e) {
            e.preventDefault();
            //to let user know that the form has been submitted
            $('#mk-submit').addClass('disabled').html('Submitting');
            //vaidate form
            $("form#marketing-form").valid();
            if (formsubmitted) {
                // console.log('Already Submitted');
                return false;
            } else if ($('input#mk-middleName').val().length != 0) {
                return false;
                //console.log('Not Human');
            } else if ($('input[name=hpp]').val() != 'ok-go') {
                return false;
                //console.log('Not Human');
            } else if (!mksubmit) {
                //An actual fresh submit of the form
                mksubmit = true;
                //_satellite object applies to DTM/Adobe Analytics
                if (typeof _satellite != 'undefined') {
                    //form was submitted - track it
                    _satellite.track('formSubmit');
                }

                var userEmail = regForm.find('input[name=emailAddress]').val();

                if ($('#marketing-registration').hasClass('mk-campaign')) {
                    var userCamp = regForm.find('input[name=cid]').val();
                    document.cookie = 'cld_camp=' + userCamp + '; path=/';
                }
                if ($('#marketing-registration').hasClass('mk-srccid')) {
                    var userCidSrcRedir = userRedir + '?' + srcRedir;
                    $('input[name=redir]').val(userCidSrcRedir);
                }
                if ($('#marketing-registration').hasClass('mk-emailpass')) {
                    var userEmailAddr = 'email='+userEmail;
                    var userEmailRedir = userRedir +'&'+ userEmailAddr;
                    $('input[name=redir]').val(userEmailRedir);
                    on24post += "."+eventIdon24;
                    $.post(on24post,form.serialize(), function( data ) {
                        console.log('on24 submitted');
                    });
                }
                var encrypt = CryptoJS.AES.encrypt(userEmail, '1841293763537080');
                var expiryDate = new Date();
                expiryDate.setMonth(expiryDate.getMonth() + 3);
                document.cookie = 'cld_reg=' + encrypt + '; path=/' + ';expires=' + expiryDate.toGMTString();

                setTimeout(function() {
                    regForm.submit(); // if you want

                }, 500);
                //console.log('AdobeAnalytics');

            } else if ($(".mk-embed-gated").length > 0) {
                var eloquaRequest = post.indexOf('pardot') > -1 ? false : true;
                formsubmitted = true;
                //this form is an form with embeded element, mark as submitted, post the form, and show the gate
                $.post(post, form.serialize(), function(data) {
                    $('.mk-embed-gated').css({
                        left: '0',
                        position: 'relative'
                    });;
                    $('#marketing-form').css('display', 'none');
                    $('.mk-form-background').css('display', 'none');
                    $('.mk-form-regtitle').css('display', 'none');
                    $('.mk-form-regdatetime').css('display', 'none');

                    if (typeof _satellite != 'undefined') {
                        //form has been successfully submitted - track it
                        _satellite.track('form-submit-success');
                    }
                    //added for IE
                    scrollToID("#form-thank-you");
                })
                    .fail(function(response) {
                        $(".mk-error-conatiner").css({
                            display: 'block',
                            left: '0'
                        });
                        $.removeCookie("cld_reg", {
                            path: '/'
                        });
                        console.log(response.responseText);
                    });

            } else if ($(".mk-overlay-form").length > 0) {
                var eloquaRequest = post.indexOf('pardot') > -1 ? false : true;
                formsubmitted = true;
                //this form is an overlay form, mark as submitted, post the form, and hide this
                $('.mk-overlay-form').css({
                    display: 'none',
                    left: '-9999999px'
                });

                //uses a synchronous call in case user mash clicks
                $.ajax({
                    url: post,
                    type: 'POST',
                    data: form.serialize(),
                    async: false,
                    success: function(result) {
                        if (typeof _satellite != 'undefined') {
                            //form has been successfully submitted - track it
                            _satellite.track('form-submit-success');
                        }
                    },
                    error: function() {
                        if ($('input[name="firstName"]').val().length != 0) {
                            $(".mk-error-conatiner").css({
                                display: 'block',
                                left: '0'
                            });
                        }
                        $.removeCookie("cld_reg", {
                            path: '/'
                        });
                        console.log(response.responseText);
                    }
                });

            } else {
                var eloquaRequest = post.indexOf('pardot') > -1 ? false : true;
                formsubmitted = true;
                //this form is not special, default submission
                $.post(post, form.serialize(), function(data) {
                    if (typeof _satellite != 'undefined') {
                        _satellite.track('form-submit-success');
                    }
                    setTimeout(function() {
                        window.location = $('input[name=redir]').val();
                    }, 500);
                })
                    .fail(function(response) {
                        $(".mk-error-conatiner").css({
                            display: 'block',
                            left: '0'
                        });
                        $.removeCookie("cld_reg", {
                            path: '/'
                        });
                        console.log(response.responseText);
                    });

                //$.post(post, form.serialize());

            } //end else

        });

    }

});
$(function($) {
    if ($('.mk-overlay-form').length > 0) {
        /*blind submit for kit hub content*/
        var overlayForm = $('.mk-form-submit form');
        if (document.cookie.indexOf("cld_reg") >= 0) {
            overlayForm.find('input[name=emailAddress]').val(decrypt());
            /*short time out for email set*/
            if (getCookie('cld_reg') !== '') {
                dtmTypeofSubmit = "cookie";
                setTimeout(function() {
                    overlayForm.submit();
                }, 500);
            } else {
                $('.mk-overlay-form').css({
                    display: 'block',
                    left: '0'
                });
            }

        } else {

            if ($('#kit-home').length > 0) {
                $('.mk-overlay-form').css({
                    display: 'none',
                    left: '-999999px'
                });

            } else {
                /*Show form not cookied*/
                $('.mk-overlay-form').css({
                    display: 'block',
                    left: '0'
                });

            }

        }
    }
}(window.jQuery));
(function () {
            if (window.addtocalendar)if(typeof window.addtocalendar.start == "function")return;
            if (window.ifaddtocalendar == undefined) { window.ifaddtocalendar = 1;
                var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
                s.type = 'text/javascript';s.charset = 'UTF-8';s.async = true;
                s.src = ('https:' == window.location.protocol ? 'https' : 'http')+'://addevent.com/libs/atc/1.6.1/atc.min.js';
                var h = d[g]('body')[0];h.appendChild(s); }
            })();



if (document.getElementById("events-registration") !== null) {

  var campaignCID = getParameter('cid');
  var campaignSRC = getParameter('src');
  if(campaignSRC != undefined){
    $('#mk-src').val(campaignSRC);
  }
   if(campaignCID != undefined){
    $('#mk-cid').val(campaignCID);
  }
  
  //////// Close Accordion //////a
  $(function($) {
    if ($('.webinar').length) {
      $('#register').on('submit', function(e) {
        var checkedAtLeastOne = false;
        $('.webinar[type="checkbox"]').each(function() {
          if ($(this).is(":checked")) {
            checkedAtLeastOne = true;
          }
        });
        if (!checkedAtLeastOne) {
          if ($('#webfield').find('span').length) {
            return false;
          } else {
            $('#webfield').append('<span class=" LV_validation_message LV_invalid">This field is required</span>');
            return false;
          }
        }
        if (document.getElementById('terms').checked) {} else {
          alert('Please agree to the Cloudera Website Terms and Conditions');
          return false;
        }
      });
    } else {
      $('#subm').click(function() {
        if (document.getElementById('terms').checked) {} else {
          alert('Please agree to the Cloudera Website Terms and Conditions');
          return false;
        }
      });
    }
  }(window.jQuery));
}
if (document.getElementById("events-registration") !== null) {

  var campaignCID = getParameter('cid');
  var campaignSRC = getParameter('src');
  if(campaignSRC != undefined){
    $('#mk-src').val(campaignSRC);
  }
   if(campaignCID != undefined){
    $('#mk-cid').val(campaignCID);
  }
  
  //////// Close Accordion //////a
  $(function($) {
    if ($('.webinar').length) {
      $('#register').on('submit', function(e) {
        var checkedAtLeastOne = false;
        $('.webinar[type="checkbox"]').each(function() {
          if ($(this).is(":checked")) {
            checkedAtLeastOne = true;
          }
        });
        if (!checkedAtLeastOne) {
          if ($('#webfield').find('span').length) {
            return false;
          } else {
            $('#webfield').append('<span class=" LV_validation_message LV_invalid">This field is required</span>');
            return false;
          }
        }
        if (document.getElementById('terms').checked) {} else {
          alert('Please agree to the Cloudera Website Terms and Conditions');
          return false;
        }
      });
    } else {
      $('#subm').click(function() {
        if (document.getElementById('terms').checked) {} else {
          alert('Please agree to the Cloudera Website Terms and Conditions');
          return false;
        }
      });
    }
  }(window.jQuery));
}
// configure your validation

if (document.getElementById("mk-resource-campaign-form") !== null) {
	var campaignCID = getParameter('cid');
	var campaignSRC = getParameter('src');
	$('#mk-src').val( campaignSRC);
	$('#mk-cid').val( campaignCID);
	
    $('#mk-country').val('US');
    //$('select.form-control').selectToAutocomplete();
    $("#mk-phone").intlTelInput({
        // allowDropdown: false,
        //autoHideDialCode: false,
        autoPlaceholder: "off",
        // dropdownContainer: "body",
        // excludeCountries: ["us"],
        geoIpLookup: function(callback) {
            $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
            });
        },
        // initialCountry: "auto",
        //nationalMode: false,
        // numberType: "MOBILE",
        // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        // preferredCountries: ['cn', 'jp'],
        separateDialCode: true,
        utilsScript: "/apps/settings/wcm/designs/www/clientlibs/js/utils.js"
    });
    $('.country').click(function(event) {
        var getCountryVal = $(this).attr('data-country-code').toUpperCase();
        $('#mk-country').val(getCountryVal);
        /* Act on the event */
    });
    $("div.selected-dial-code").click(function(event) {
        var getVal = $(this).html();
        //var getCountryVal = $('.country-name').html();

        //var countryName = getCountryVal.substr(0, getCountryVal.indexOf(':')); 


        $("#mk-phone").val(getVal);
    });
    $(window).load(function() {


        setTimeout(function() {
            $("#mk-phone").val('+1');
        }, 600);

    });


    $('#mk-resource-campaign-form form #mk-submit').click(function(e) {
        e.preventDefault();
        var campaignForm = $('#mk-resource-campaign-form form');
        var userEmail = campaignForm.find('input[name=emailAddress]').val();
        var userCampId = campaignForm.find('input[name=cid]').val();
        document.cookie = 'cld_reg=' + userEmail + '; path=/';
        document.cookie = 'cld_camp=' + userCampId + '; path=/';
        campaignForm.submit();
    });

}
if (document.getElementById("events-registration") !== null) {

  var campaignCID = getParameter('cid');
  var campaignSRC = getParameter('src');
  if(campaignSRC != undefined){
    $('#mk-src').val(campaignSRC);
  }
   if(campaignCID != undefined){
    $('#mk-cid').val(campaignCID);
  }
  
  //////// Close Accordion //////a
  $(function($) {
    if ($('.webinar').length) {
      $('#register').on('submit', function(e) {
        var checkedAtLeastOne = false;
        $('.webinar[type="checkbox"]').each(function() {
          if ($(this).is(":checked")) {
            checkedAtLeastOne = true;
          }
        });
        if (!checkedAtLeastOne) {
          if ($('#webfield').find('span').length) {
            return false;
          } else {
            $('#webfield').append('<span class=" LV_validation_message LV_invalid">This field is required</span>');
            return false;
          }
        }
        if (document.getElementById('terms').checked) {} else {
          alert('Please agree to the Cloudera Website Terms and Conditions');
          return false;
        }
      });
    } else {
      $('#subm').click(function() {
        if (document.getElementById('terms').checked) {} else {
          alert('Please agree to the Cloudera Website Terms and Conditions');
          return false;
        }
      });
    }
  }(window.jQuery));
}
jQuery(function($) {
    
    // configure your validation
    $(".contact").validate({

        rules: {
            firstname: {
                minlength: 2
            },
            lastname: {
                minlength: 2
            },
            select: {
                required: true,
                valueNotEquals: ""
            },
            phone: {
                valueNotEmpty: true,
                customPhone: true,
                minlength: 7
            },
            Email: {
                required: true,
                "internet-email": true,
            },
            comments: {
                maxlength: 500,
            },
            messages: {
                select: {
                    valueNotEmpty: "Please add your city."
                }
            }
        }

    });

    $('.contact input, .contact textarea, .contact select, #mk-considering').on('blur keyup change', function() {
        if ($("form.contact").valid()) {
            $('.contact #submit').removeAttr('disabled').removeClass('disabled');
        } else {
            $('.contact #submit').prop('disabled', 'disabled').addClass('disabled');
        }
    });

    $(".contact #country-member").on("change", function() {

        var value = $(this).valid();

         $(".contact #state").rules("add", {
                required: true,
                valueNotEmpty: true
            });
            $(".contact input#PostalCode").rules("add", {
                required: true,
                valueNotEmpty: true,
                postalcode: true
            });

        if ($(this).val() === "US") {
            $("#mk-state-prov-label").html('State');
            var state = '<option value="">Please Select<option value=AL>Alabama<option value=AK>Alaska<option value=AS>American Samoa<option value=AZ>Arizona<option value=AR>Arkansas<option value=AA>Armed Forces America<option value=AE>Armed Forces Europe<option value=AP>Armed Forces Pacific<option value=CA>California<option value=CO>Colorado<option value=CT>Connecticut<option value=DE>Delaware<option value=DC>District of Columbia<option value=FL>Florida<option value=GA>Georgia<option value=GU>Guam<option value=HI>Hawaii<option value=ID>Idaho<option value=IL>Illinois<option value=IN>Indiana<option value=IA>Iowa<option value=KS>Kansas<option value=KY>Kentucky<option value=LA>Louisiana<option value=ME>Maine<option value=MP>Mariana Islands<option value=MD>Maryland<option value=MA>Massachusetts<option value=MI>Michigan<option value=MN>Minnesota<option value=MS>Mississippi<option value=MO>Missouri<option value=MT>Montana<option value=NE>Nebraska<option value=NV>Nevada<option value=NH>New Hampshire<option value=NJ>New Jersey<option value=NM>New Mexico<option value=NY>New York<option value=NC>North Carolina<option value=ND>North Dakota<option value=OH>Ohio<option value=OK>Oklahoma<option value=OR>Oregon<option value=PW>Palau<option value=PA>Pennsylvania<option value=PR>Puerto Rico<option value=RI>Rhode Island<option value=SC>South Carolina<option value=SD>South Dakota<option value=TN>Tennessee<option value=TX>Texas<option value=UT>Utah<option value=VT>Vermont<option value=VI>Virgin Islands, US<option value=VA>Virginia<option value=WA>Washington<option value=WV>West Virginia<option value=WI>Wisconsin<option value=WY>Wyoming';
            $("#state").html(state);
            $("#state").val('');
            window.setTimeout(function() {
                $(".state").css({
                    display: 'block'
                });
              $(".postal-code").css({
                    display: 'block'
                });
            }, 200);

        } else if ($(this).val() === "CA") {
             $(".contact #mk-state-prov-label").html('Province');
             var province = '<option value="">Please Select<option value=AB>Alberta<option value=BC>British Columbia<option value=MB>Manitoba<option value=NB>New Brunswick<option value=NL>Newfoundland<option value=NT>Northwest Territories<option value=NS>Nova Scotia<option value=NU>Nunavut<option value=ON>Ontario<option value=PE>Prince Edward Island<option value=QC>Quebec<option value=SK>Saskatchewan<option value=YT>Yukon Territory';
              $("#state").html(province);
              $("#state").val('');

            window.setTimeout(function() {
                $(".postal-code").css({
                    display: 'block'
                });
                $(".state").css({
                    display: 'block'
                });
            }, 200);

        } else {

            $(".contact #state").rules("remove");
            $(".contact input#PostalCode").rules("remove");

            window.setTimeout(function() {
                $(".postal-code").css({
                    display: 'none'
                });
                $(".state").css({
                    display: 'none'
                });
            }, 200);


        }

    });



});
$(document).ready(function(){
    var filterList = function() {
        try{
            var list = $('div .filters li.item').find("input:checked");
            var queryString="";
            list.each(function () {
                queryString += this.name +"="+this.value+"&";
            });
            queryString = queryString.substring(0,queryString.length-1);
            var currentUrl = window.location.href;
            var parentUrl = currentUrl.substring(0,currentUrl.indexOf("?"));
            var newUrl="";
            var index = currentUrl.indexOf("=");
            if(queryString!=""){
                newUrl = parentUrl +"?"+queryString;
                window.location.href = newUrl;
            }else if(queryString=="" && index>0){
                window.location.href = parentUrl;
            }
        }catch(e){}
    }
$('div .filters li.item input[type=checkbox]').on( "change", filterList );
});


       // Add email validation
    jQuery.validator.addMethod("internet-email", function(value, element) {
        return this.optional(element) || /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
    }, "Please enter a valid email address.");
    jQuery.validator.addMethod("valueNotEquals", function(value, element, arg) {
        return arg != value;
    }, "This field is required.");
    // Phone Number allow only numbers, spaces, hyphens, and plus sign
    jQuery.validator.addMethod('customPhone', function(value, element) {
        return this.optional(element) || /^\(?\+?[\.\d\(\-\s\)]+$/.test(value);
    }, "Please enter a valid phone number.");

    //Postal code validation
    jQuery.validator.addMethod("postalcode", function(value, element) {
        return this.optional(element) || /\d{5}-\d{4}$|^\d{5}$|^[a-zA-Z][0-9][a-zA-Z](| )?[0-9][a-zA-Z][0-9]$/.test(value);
    }, "Please provide a valid postal code.");
    
     jQuery.validator.addMethod("customrule", function(value, element, param) { 
  return this.optional(element) || value === param; 
}, "You must enter the correct #"); 



 function decrypt(){

            var bytes  = CryptoJS.AES.decrypt(getCookie('cld_reg'), '1841293763537080');
            return bytes.toString(CryptoJS.enc.Utf8);
        }
//
// Dam Driven Grid Slide Down
//
function damDetailPosition() {
    // Position slide down box
    var damGridWidth = jQuery('.damSearchGrid').width();
    jQuery('.damSearchGrid-itemDetail').css('width', damGridWidth - 30);

    jQuery('.damSearchGrid-itemDetail').each(function() {
        var leftMargin = jQuery(this).parent().position();
        jQuery(this).css('margin-left', (leftMargin.left - 15) * -1);
    });
};

function damGridSlide() {
    jQuery('.damSearchGrid-slide .row > div.col-md-3:nth-child(4n)').after('<div class="clearfix slideclear"></div>');

    // Slide down/up on click, add class for active CSS
    jQuery(document).on('click', '.damSearchGrid-slide a.dam-dropdown', function(ev) {
        ev.preventDefault();
        ev.stopPropagation();

        var $this = jQuery(ev.target),
            currentParent = $this.closest('.damSearchGrid-slide'),
            currentDetail = jQuery(currentParent).next('.damSearchGrid-itemDetail');

        damDetailPosition();

        if (jQuery(currentDetail).hasClass('open') === true) {
            jQuery(currentDetail).slideUp().removeClass('open');
            jQuery(currentParent).removeClass('active');
        } else {
            jQuery('.damSearchGrid-itemDetail').not(currentDetail).slideUp().removeClass('open');
            jQuery(currentDetail).slideDown().addClass('open');
            jQuery('.damSearchGrid-slide').not(currentParent).removeClass('active');
            jQuery(currentParent).addClass('active');
        }
    });

    // Close button
    jQuery(document).on('click', '.damSearchGrid a.close', function(ev) {
        ev.preventDefault();
        jQuery('.damSearchGrid-itemDetail').slideUp().removeClass('open');
        jQuery('.damSearchGrid-slide').removeClass('active');
    });
};

function refreshGridRows() {
    var damAjaxCount = 0;
    jQuery('.clearfix.slideclear').remove();
    jQuery('button.btn-viewMore').attr('disabled', 'disabled');

    jQuery(document).ajaxComplete(function() {
        damAjaxCount += 1;

        if (damAjaxCount == 1) {
            jQuery('.damSearchGrid-slide .row > div.col-md-3:nth-child(4n)').after('<div class="clearfix slideclear"></div>');
            jQuery('button.btn-viewMore').removeAttr('disabled');
        }
    });
}


jQuery(function() {
    if ($(".damSearchGrid").length > 0) {
        damGridSlide();

        jQuery(document).on('click', 'button.btn-viewMore, #applyFacets, #selectedfacets a', function() {
            refreshGridRows();
        });

        jQuery('.searchfacets select').on('change',function() {
            refreshGridRows();
        });
    };
});

jQuery(function() {
    if($('.slideFilters').length > 0) {
        //
        // Slide Down Filters
        //
        var filterPosition = function() {
            // Position slide down box
            var filterListWidth = jQuery('.slideFilters').parent('div').width();
            jQuery('.slideFilters .group').css('width', filterListWidth - 30);

            jQuery('.slideFilters .group').each(function() {
                var leftMargin = jQuery(this).parent().position();
                jQuery(this).css('margin-left', (leftMargin.left - 15) * -1);
            });
        };
        var slideFilters = function() {
            // Slide down/up on click, add class for active CSS
            jQuery('.slideFilters .category legend').on('click',function() {
                var currentParent = jQuery(this).parent('.category'),
                    currentFilters = jQuery(currentParent).children('.group');

                if (jQuery(currentFilters).hasClass('open') === true) {
                    jQuery(currentFilters).slideUp().removeClass('open');
                    jQuery(currentParent).removeClass('active');
                } else {
                    filterPosition();
                    jQuery('.slideFilters .category .group').not(currentFilters).slideUp().removeClass('open');
                    jQuery(currentFilters).slideDown().addClass('open');
                    jQuery('.slideFilters .category').not(currentParent).removeClass('active');
                    jQuery(currentParent).addClass('active');
                }
            });
        };
        filterPosition();
        slideFilters();
    };
});

jQuery(function() {
    if($('.slideResourceFilters').length > 0) {
        //
        // Slide Down ResourceFilters
        //
        var filterPosition = function() {
            // Position slide down box
            var filterListWidth = jQuery('.slideResourceFilters').parent('div').width();

            jQuery('.slideResourceFilters .resourceSearch-megaMenu').each(function() {
                var leftMargin = jQuery(this).parent().position();
                
                jQuery(this).css('left', (leftMargin.left * -1) );
            });
        };
        var slideResourceFilters = function() {
            // Slide down/up on click, add class for active CSS
            jQuery('.slideResourceFilters .category legend').on('click',function() {
                var currentParent = jQuery(this).parent('.category'),
                    currentResourceFilters = jQuery(currentParent).children('.group');

                if (jQuery(currentResourceFilters).hasClass('open') === true) {
                    jQuery(currentResourceFilters).slideUp().removeClass('open');
                    jQuery(currentParent).removeClass('active');
                } else {
                    filterPosition();
                    jQuery('.slideResourceFilters .category .group').not(currentResourceFilters).slideUp().removeClass('open');
                    jQuery(currentResourceFilters).slideDown().addClass('open');
                    jQuery('.slideResourceFilters .category').not(currentParent).removeClass('active');
                    jQuery(currentParent).addClass('active');
                }
            });
            
            jQuery('div').click(function(event) {
                
                if(!$(event.target).closest('.slideResourceFilters .category .group, .slideResourceFilters .category legend').length) {
                    var $this = jQuery('.slideResourceFilters .category .group');
                
                    if($this.hasClass('open') === true) {

                        $this.slideUp().removeClass('open');
                        $this.closest('.resourceSearch-fieldset').removeClass('active');
                    }
                }
            });
            
            $('input[data-mediatype]').siblings('label').on('click', function(e) {
                
                $(e.target).closest('.group').slideUp().removeClass('open');
                $(e.target).closest('.category').removeClass('active');
            });
        };
        
        filterPosition();
        slideResourceFilters();
    };
});

$(function() {
    //Only interprete this code if there is actually this form on the page.
    if ($("form#partnerRegMember").length === 1) {
    
        $("form#partnerRegMember").validate();

        $('#partnerRegMember input, #partnerRegMember textarea, #partnerRegMember select').on('blur keyup change', function(){
            if ($("form#partnerRegMember").valid()) {
                $('#partnerRegMember #submit').removeAttr('disabled').removeClass('disabled');
            } else {
                $('#partnerRegMember #submit').prop('disabled', 'disabled').addClass('disabled');
            }
        });

        // Phone Number allow only numbers, spaces, hyphens, and plus sign
        $.validator.addMethod('customPhone', function (value, element) {
            return this.optional(element) || /^\(?\+?[\.\d\(\-\s\)]+$/.test(value);
        }, "Please enter a valid phone number.");

        // Add select "not empty" test
        $.validator.addMethod("valueNotEmpty", function (value) {
            return value !== "";
        }, "Please select a value.");

        //Postal code validation
       jQuery.validator.addMethod("postalcode", function(value, element) {
         return this.optional(element) || /^\d{5}(?:-\d{4})?$/.test(value);
       }, "Please provide a valid postal code.");
        
        // Simple URL validation
        $.validator.addMethod("simpleURL", function(value, element) {
            return this.optional(element) || /^(http:\/\/|https:\/\/)?((([\w-]+\.)+[\w-]+)|localhost)(\/[\w- .\/?%&=]*)?/i.test(value);
        }, "Please enter a valid URL.");

        //Company validation and upading user on input
        $("#partnerRegMember input#company").rules("add", {
                        required: true,
                        valueNotEmpty: true
        });
        $("#partnerRegMember input#company").on('keydown change',function() {
            $('#company').valid();
        });


        //Address validation and updating user on input
        $("#partnerRegMember input#address").rules("add", {
                        required: true,
                        valueNotEmpty: true
        });
        $("#partnerRegMember input#address").on('keydown change',function() {
            $('#address').valid();
        });


        //City validation and updating user on input
        $("#partnerRegMember input#city").rules("add", {
                        required: true,
                        valueNotEmpty: true
        });
        $("#partnerRegMember input#city").on('keydown change',function() {
            $('#city').valid();
        });


        //Phone Number validation and updating user on input
        $("#partnerRegMember input#phoneNumber").rules("add", {
                        required: true,
                        customPhone: true,
                        minlength:7
        });
        $("#partnerRegMember input#phoneNumber").on('keydown change',function() {
            $('#country-member').valid();
            $('#phoneNumber').valid();
        });


        //Website URL validation and updating user on input
        $("#partnerRegMember input#website").rules("add", {
                        required: true,
                        valueNotEmpty: true,
                        simpleURL:true
        });
        $("#partnerRegMember input#website").on('keydown change',function() {
            $('#country-member').valid();
            $('#website').valid();
        });





        $("#partnerRegMember #State-test").on("change", function() {
            $("#State-test").valid();
        });

        $("#partnerRegMember input#PostalCode").on('keydown change',function() {
            $("input#PostalCode").valid();
        });

        //If country-member is US then display State and maybe Province, otherwise
        //don't do anything.
        $("#partnerRegMember select#country-member").rules("add", {
                        required: true,
                        valueNotEmpty: true,
        });
        $("#partnerRegMember select#country-member").on("change", function() {

            $(this).valid();

            if ( $(this).val() === "US" ) {


                $("#partnerRegMember #State-test").rules("add", {
                                required: true,
                                valueNotEmpty: true
                });

                $("#partnerRegMember input#PostalCode").rules("add", {
                                    required: true,
                                    valueNotEmpty: true,
                                    postalcode: true
                });

                window.setTimeout(function() {
                    $("#partnerRegMember .postal-code, #partnerRegMember .state-province").css({
                        display: 'block'
                    });
                }, 200);

            } else {

                $("#partnerRegMember #State-test").rules("remove");
                $("#partnerRegMember input#PostalCode").rules("remove");

                window.setTimeout(function() {
                    $("#partnerRegMember .postal-code, #partnerRegMember .state-province").css({
                        display: 'none'
                    });
                }, 200);

            }

        });


        //On change of 'Primary Line of Business' change inputs of form
        $("#partnerRegMember select#businessLine").rules("add", {
                        required: true,
                        valueNotEmpty: true,
        });
        $("#partnerRegMember select#businessLine").on("change", function() {
            var ids = [];

            $("select#businessLine").valid();

            function resetDynamicForm(){
                window.setTimeout(function() {
                var allForms = $("#servicesOfferedDiv,#isvMoreDiv,#numEmployeesDiv,#companyDescriptionDiv,#partnershipGoalDiv");
                $("#classifyYourBusinessDiv,#servicesOfferedDiv,#isvMoreDiv,#numEmployeesDiv,#companyDescriptionDiv,#partnershipGoalDiv").css({
                        display: 'none'
                    });
                }, 200);

            }

            function resetRules(idsused){
                for (var i = 0; i < idsused.length ;i++){
                    $(idsused).rules("remove");
                }
            }

            function turnOnForm(ids1, ids2){
                window.setTimeout(function() {
                    $(ids1).css({
                        display: 'block'
                    });
                }, 200);


               for (var i = 0; i < ids2.length ;i++){
                   $(ids2[i]).rules("add", {
                                   required: true,
                                   valueNotEmpty: true,
                                   maxlength: 255
                   });
               }
            }

            $("select#numEmployees").on('change',function() {
                $("select#numEmployees").valid();
            });

            $("#companyDescription").on('keydown change',function() {
                $("#companyDescription").valid();
            });

            $("#partnershipGoal").on('keydown change',function() {
                $("#partnershipGoal").valid();
            });

            $("#servicesOffered").on('keydown change',function() {
                $("#servicesOffered").valid();
            });

            $("#productIntegration").on('keydown change',function() {
                $("#productIntegration").valid();
            });

            $("#certificationPlans").on('keydown change',function() {
                $("#certificationPlans").valid();
            });

            $("#certificationCommitment").on("click", function(){
                var checked = $('#certificationCommitment').is(":checked");
                if(checked) {
                    resetRules("#certificationPlans");
                    $("#certificationPlansDiv").css({
                        display: 'none'
                    });
                }
                else {
                    turnOnForm("#certificationPlansDiv", ["#certificationPlans"]);
                }
            });

            //If PLB equals Cloudera Reseller, Training Delivery Partner, Service Provider/MSP or Hosting Provider
            //display the following inputs Number of Employees, Company Description and What is your goal for the partnership?
            if ( $(this).val() === "VAReseller" || $(this).val()==="TrainingDelivery" || $(this).val()==="Reseller" ||  $(this).val()==="MSP" || $(this).val()==="TrainingReseller") {
                ids = ["select#numEmployees","#companyDescription", "#partnershipGoal"];
                resetDynamicForm();
                turnOnForm("#numEmployeesDiv,#companyDescriptionDiv,#partnershipGoalDiv", ids);
            }

            //If PLB equals Systems Integrator
            //display the following inputs What services do you intend to offer around Cloudera?, Number of Employees,
            //Company Description and What is your goal for the partnership?
            else if ( $(this).val() === "SystemsIntegrator") {
                ids = ["#servicesOffered", "select#numEmployees","#companyDescription", "#partnershipGoal"];
                resetDynamicForm();
                turnOnForm("#servicesOfferedDiv,#numEmployeesDiv,#companyDescriptionDiv,#partnershipGoalDiv", ids);
            }

            //If PLB equals Hardware Vendor/IHV
            //display the following inputs How will your product integrate with Cloudera?,
            //Can you commit to integrating and certifying your product within the first 3 months of the partnership?,
            //Number of Employees, Company Description and What is your goal for the partnership?
            else if ( $(this).val() === "IHV") {
                ids = ["#productIntegration", "#certificationPlans", "select#numEmployees","#companyDescription", "#partnershipGoal"];

                resetDynamicForm();
                turnOnForm("#isvMoreDiv,#numEmployeesDiv,#companyDescriptionDiv,#partnershipGoalDiv", ids);
            }

            //If PLB equals Software Vendor/ISV
            //display the following inputs How will your product integrate with Cloudera?,
            //Can you commit to integrating and certifying your product within the first 3 months of the partnership?,
            //Number of Employees, Company Description and What is your goal for the partnership?
            else if ( $(this).val() === "ISV") {
                ids = ["#classifyYourBusiness", "#productIntegration", "#certificationPlans", "select#numEmployees","#companyDescription", "#partnershipGoal"];
                resetDynamicForm();
                turnOnForm("#classifyYourBusinessDiv,#isvMoreDiv,#numEmployeesDiv,#companyDescriptionDiv,#partnershipGoalDiv", ids);
            }
            else {
                resetRules(ids);
                resetDynamicForm();
            }

        });
    }
});

//
// Partner Portal Deal Registration Validation
//
$(function() {
    if ($("form#partnerDealReg").length === 1) {
        // Add email validation
        jQuery.validator.addMethod("internet-email", function (value, element) {
            return this.optional(element) || /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
        }, "Please enter a valid email address.");

        // Phone Number allow only numbers, spaces, hyphens, and plus sign
        jQuery.validator.addMethod('customPhone', function (value, element) {
            return this.optional(element) || /^\(?\+?[\.\d\(\-\s\)]+$/.test(value);
        }, "Please enter a valid phone number.");

        // Add select "not empty" test
        jQuery.validator.addMethod("valueNotEmpty", function (value) {
            return value !== "";
        }, "Please select a value.");

        $('#partnerDealReg').validate({
            ignore: [],
            onsubmit: false,
            submitHandler: function(form) {
                form.submit();
            },
            rules: {
                company: {
                    required: true
                },
                Department__c: {
                    required: true
                },
                Opportunity_Location__c: {
                    required: true
                },
                first_name: {
                    required: true
                },
                last_name: {
                    required: true
                },
                title: {
                    required: true,
                    valueNotEmpty: true
                },
                Primary_Contact_Role_in_Purchase_Process__c: {
                    required: true,
                    valueNotEmpty: true
                },
                Customer_use_Case_and_Pain_Points__c: {
                    required: true,
                    valueNotEmpty: true
                },
                Who_is_the_economic_buyer__c: {
                    required: true
                },
                Opportunity_Closing_Time_Estimated__c: {
                    required: true,
                },
                '00N80000005H1XN': { // Currently Using Cloudera Manager?
                    required: true,
                    valueNotEmpty: true
                },
                '00N80000005I2VD': { // Opportunity revenue size
                    required: true
                },
                '00N80000003StTw': { // Size of cluster (number of nodes)
                    required: true,
                    valueNotEmpty: true
                },
                '00N80000005I80B': { // Does this account currently have a data warehouse? If yes, how large and what vendor?
                    required: true,
                },
                '00N80000005I80G': { // Partner Organization name
                    required: true
                },
                '00N80000005I80H': { // Partner Contact Name
                    required: true
                },
                '00N80000003SaUo': { // Partner Contact phone
                    required: true,
                    customPhone: true
                },
                '00N80000003SaUg': { // Partner Contact country
                    required: true,
                    valueNotEmpty: true
                },
                '00N80000003SaUj': { // Partner Contact state
                    required: true,
                    valueNotEmpty: true
                },
                '00N80000003SaUi': { // Partner Contact city
                    required: true,
                    valueNotEmpty: true
                },
                '00N80000005IE6p': { // Partner Contact Email
                    required: true,
                    "internet-email": true
                }
            }
        });     
        $('#partnerDealReg input[type="text"], #partnerDealReg select, #partnerDealReg textarea').on('blur', function() {
            $(this).valid();
            if($('#partnerDealReg').valid = true) {
                $('#partnerDealReg #submit').removeAttr('disabled');
                $('#partnerDealReg #submit').removeClass('disabled');
            }
            else {
                $('#partnerDealReg #submit').addClass('disabled');
                $('#partnerDealReg #submit').prop('disabled');
            }
        });
        $('#partnerDealReg').on('submit', function(event) {
            $('#partnerDealReg').valid();
            if($('#partnerDealReg').valid()) {
                $('#partnerDealReg #submit').removeAttr('disabled');
                $('#partnerDealReg #submit').removeClass('disabled');
            }
            else {
                event.preventDefault();
                $('#partnerDealReg #submit').addClass('disabled');
                $('#partnerDealReg #submit').prop('disabled');
            }  
         });
    };
     $(".partnerDealReg #00N80000003SaUg").on("change", function() {
        var value = $(this).valid();
        if ($(this).val() === "US") {
            $(".partnerDealReg #province").rules("remove");
            $(".partnerDealReg #province").attr("name", "nothing");
            $(".partnerDealReg #00N80000003SaUj").attr("name", "state");
            $(".partnerDealReg #00N80000003SaUj").rules("add", {
                required: true,
                valueNotEmpty: true
            });
            $(".partnerDealReg input#00N80000003SaUi").rules("add", {
                required: true,
                valueNotEmpty: true
            });
            window.setTimeout(function() {
                $(".state").css({
                    display: 'block'
                });
                $(".city").css({
                    display: 'block'
                });
                $(".province").css({
                    display: 'none'
                });
            }, 200);
        } else if ($(this).val() === "CA") {
            $(".partnerDealReg #00N80000003SaUj").rules("remove");
            $(".partnerDealReg #00N80000003SaUj").attr("name", "nothing");
            $(".partnerDealReg #province").attr("name", "state");
            $(".partnerDealReg #province").rules("add", {
                required: true,
                valueNotEmpty: true
            });
            $(".partnerDealReg input#00N80000003SaUi").rules("add", {
                required: true,
                valueNotEmpty: true
            });
            window.setTimeout(function() {
                $(".city").css({
                    display: 'block'
                });
                $(".province").css({
                    display: 'block'
                });
                $(".state").css({
                    display: 'none'
                });
            }, 200);
        } else {
            $(".partnerDealReg #00N80000003SaUj").rules("remove");
            $(".partnerDealReg #province").rules("remove");
            $(".partnerDealReg input#00N80000003SaUi").rules("remove");
            window.setTimeout(function() {
                $(".city").css({
                    display: 'none'
                });
                $(".province").css({
                    display: 'none'
                });
                $(".state").css({
                    display: 'none'
                });
            }, 200);
        }
    });
});
$(function() {
    if ($("form#awsRegistrationForm").length === 1) {
        if (typeof Demandbase.Connectors.WebForm != 'undefined'){
            Demandbase.Connectors.WebForm.formNameList.push("awsRegistrationForm");
        }
        if (typeof getParameter('src') != 'undefined') {
            $('#awsRegistrationForm').append('<input type="hidden" name="src" value="' + getParameter('src') + '" />');
        }
        if (typeof getParameter('vendor') != 'undefined') {
            $('#awsRegistrationForm').append('<input type="hidden" name="vendor" value="' + getParameter('vendor') + '" />');
        }

        var flavor = getParameter("version");
        if (typeof flavor != 'undefined'){
            if (flavor == "vanilla" || flavor == "tableau" || flavor == "trifacta" || flavor == "zoomdata"){
                $('#formFlavor').val(flavor);
                $('#formFlavorContainer').hide();
            }
        }

        //Form Validation
        // Add email validation
        jQuery.validator.addMethod("internet-email", function(value, element) {
            return this.optional(element) || /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
        }, "Please enter a valid email address.");
        jQuery.validator.addMethod("valueNotEquals", function(value, element, arg) {
            return arg != value;
        }, "Value must not equal arg.");
        // Phone Number allow only numbers, spaces, hyphens, and plus sign
        jQuery.validator.addMethod('customPhone', function(value, element) {
            return this.optional(element) || /^\(?\+?[\.\d\(\-\s\)]+$/.test(value);
        }, "Please enter a valid phone number.");

        // configure your validation
        $("#awsRegistrationForm").validate({

            rules: {
                emailAddress: {
                    required: true,
                    "internet-email": true,
                    maxlength:150
                },
                firstName: {
                    minlength: 2,
                    required: true,
                    maxlength:50
                },
                lastName: {
                    minlength: 2,
                    required: true,
                    maxlength:50
                },
                jobFunction: {
                    required: true,
                    valueNotEquals: ""
                },
                jobRole: {
                    required: true,
                    valueNotEquals: ""
                },
                formFlavor: {
                      required: true,
                      valueNotEquals: ""
                  },
                company: {
                    minlength: 2,
                    required: true,
                    maxlength:50
                },
                businessPhone: {
                    valueNotEmpty: true,
                    customPhone: true,
                    minlength: 7
                },
                optin: {
                    required: true
                },
                messages: {
                    jobFunction: {
                        valueNotEquals: "Please add your Job Function."
                    },
                    jobRole: {
                        valueNotEquals: "Please add your Job Role."
                    },
                    formFlavor: {
                        valueNotEquals: "Please add a Version"
                    }
                }
            }
        });
    }
});
if ($("form#awsRegistrationForm").length === 1) {
    var timerId = null, timeout = 5;

    function WaitUntilCustomerGUIDIsRetrieved() {
        if (!!(timerId)) {
            if (timeout == 0) {
                return;
            }
            if (typeof this.GetElqCustomerGUID === 'function') {
                    document.forms["awsRegistrationForm"].elements["elqCustomerGUID"].value = GetElqCustomerGUID();
                return;
            }
            timeout -= 1;
        }
        timerId = setTimeout("WaitUntilCustomerGUIDIsRetrieved()", 500);
        return;
    }

    window.onload = WaitUntilCustomerGUIDIsRetrieved();
    _elqQ.push(['elqGetCustomerGUID']);

}

$(document).ready(function(){
    if(document.getElementById('taglibErrorId') !== null && $('input[name="taglibError"]').val() !== '') {
        window.location.href=$('input[name="taglibError"]').val();
    }
});

jQuery(function($) {

    $(".streamline").validate({

        rules: {
            firstname: {
                minlength: 2
            },
            lastname: {
                minlength: 2
            },
            company: {
                minlength: 2
            },
            country: {
                required: true,
                valueNotEquals: "empty"

            },
            stateOrProvince: {
                required: true,
                valueNotEquals: "empty"
            },
            phone: {
                valueNotEmpty: true,
                customPhone: true,
                minlength: 7
            },
            emailAddress: {
                required: true,
                "internet-email": true,
            },
            number: {
                required: true,
                customrule: "16"
            }
        }

    });
                       
    $('.streamline input, .streamline select').on('blur keyup', function() {
        if ($("form.streamline").valid()) {
            $('.streamline .onDemandTrainingFormSubmit').removeAttr('disabled').removeClass('disabled');
        } else {
            $('.streamline .onDemandTrainingFormSubmit').prop('disabled', 'disabled').addClass('disabled');
        }
    });

});

jQuery(function($) {

    $(".training-contact").validate({

        rules: {
            firstname: {
                minlength: 2
            },
            lastname: {
                minlength: 2
            },
            company: {
                minlength: 2
            },
            emailAddress: {
                required: true,
                "internet-email": true,
            },
             comments: {
                required: true,
                minlength: 10
            },
        }

    });
                       
    $('.training-contact input, .training-contact select, .training-contact textarea').on('blur keyup', function() {
        if ($("form.training-contact").valid()) {
            $('.training-contact .btn-primary').removeAttr('disabled').removeClass('disabled');
           
        } else {
            $('.training-contact .btn-primary').prop('disabled', 'disabled').addClass('disabled');
        }
    });

});

(function ($) {
    $(function () {
        $('a[href*="#"]').not('[href="#"]').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
})(jQuery);
(function($) {
    if (document.getElementById("mk-resource-form") !== null) {
        $('.dynamic-gating-form form').css('display', 'none');
        $('#mk-resources-submit').prop('disabled', 'disabled').addClass('disabled');
        var embedHTML = '';
        var dtmTypeofSubmit = '';
        var box = $('#pdf-container');
        var reference = box.data('reference');
        $('#dynamic-inputs').append("<input type='hidden' name='src' value='" + getParameter('src') + "'>");

        $('.dynamic-gating-form form').submit(function(e) {
            e.preventDefault();
            $that = $(this);

            var userEmail = $that.find('input[name=emailAddress]').val();
            var encrypt = CryptoJS.AES.encrypt(userEmail, '1841293763537080');
            var expiryDate = new Date();
            expiryDate.setMonth(expiryDate.getMonth() + 3);
            document.cookie = 'cld_reg=' + encrypt + '; path=/' + ';expires=' + expiryDate.toGMTString();

            var url = $that.attr('action');
            $.post(url, $that.serialize());
            $that.hide();
            if ($('#resourceExternalLink').length) {
                window.location.href = $('#resourceExternalLink').attr('data-external-link');
            } else {
                $('#cloudera-video-embed').show();
                $('#pdf-container').show();
                $("body").animate({
                    scrollTop: $('.dynamic-gating-form').offset().top
                }, "slow");
            }
            if (dtmTypeofSubmit === 'user') {
                _satellite.track('blindSubmit-LoggedInUser');
            } else if (dtmTypeofSubmit === 'cookie') {
                _satellite.track('blindSubmit-Cookie');
            } else {
                _satellite.track('formSubmit');
            }
        });

        $(window).load(function() {

            var loggedInUserEmail = userInfoHandler["email"];
            var regForm = $('.dynamic-gating-form form');

            if (loggedInUserEmail !== "") {
                regForm.find('input[name=emailAddress]').val(loggedInUserEmail);
                if (document.cookie.indexOf("cld_camp") >= 0) {
                    regForm.find('input[name=cid]').val(getCookie('cld_camp'));
                }
                dtmTypeofSubmit = "user";
                regForm.submit();

            } else if (document.cookie.indexOf("cld_reg") >= 0) {
                regForm.find('input[name=emailAddress]').val(decrypt());

                if (document.cookie.indexOf("cld_camp") >= 0) {
                    regForm.find('input[name=cid]').val(getCookie('cld_camp'));
                }
                if (getCookie('cld_reg') !== '') {
                    dtmTypeofSubmit = "cookie";
                    regForm.submit();
                } else {
                    regForm.css('display', 'block');
                }

            } else {
                regForm.css('display', 'block');
            }

        });

    } //resource form exist

})(jQuery);
$(function() {

    if($('.damEventsGrid').length) {
        
        $('.damSearchGrid-eventDate').each(function() {
            var $this = $(this), 
                str = $(this).text();

            if(str.includes('May.')) {
                var str1 = str.slice(0,3),
                    str2 = str.slice(4);

                $this.html(str1 + str2);
            }
        });
    }
});
$(function() {
    var $items = $('.line-item');

    if ($('#localized-resource-listing').length > 0) {
        if ($('#localized-pagination').length > 0) {
            var numPerPage = parseInt($('#localized-pagination').attr('data-numperpage'));
            paginate(0, numPerPage);
            $('.pagination .pageNumber').on('click', function(e) {
                e.preventDefault();
                $('.pagination .pageNumber').removeClass('active');
                $(this).addClass('active');
                paginate(parseInt($(this).attr('data-index')), numPerPage);
            });
        }
    }

    function paginate(currentPage, numPerPage) {
        var count = 0;
        var start = currentPage * numPerPage;
        var end = start + numPerPage;
        if (end > $items.length) { end = $items.length; }
        $items.each(function() {
            if (count >= start && count < end) {
                $(this).removeClass('hide-item');
            } else {
                $(this).addClass('hide-item');
            }
            count++;
        });
    };
});

jQuery(function($) {
    if ($("a.on24")[0]) {
        var campaignSRC = getParameter('src');
        if (campaignSRC !== undefined) {
            $('#mk-src').val(campaignSRC);
        }
        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        }
        var clreg = getCookie('cld_reg');
        var to = "&email=" + clreg;
        $("a.on24").each(function() {
            var on24Href = $(this).attr('href');
            var combine = '' + on24Href + '' + '' + to + '';
            $(this).attr('href', combine);
        });
        var on24Href2;
        $('a.on24').click(function(e) {
            /* Act on the event */
            e.preventDefault();
            on24Href2 = $(this).attr('href');
            var on24Cid = $(this).attr('data-cid');
            var blindForm = $('#blind-registration form');
            blindForm.find('input[name=emailAddress]').val(getCookie('cld_reg'));
            blindForm.find('input[name=cid]').val(on24Cid);
            blindForm.find('input[name=redir]').val(on24Href2);
            blindForm.submit();
        });
    }
});
//
//  Leadership Grid Modal
//
function leadershipModal() {
    var $leader = $('.leadership-grid__leader');

    $leader.each(function() {
        var $this = $(this);
        var leaderInfo = $this.find('.leadership-grid__leaderInfo');
        var image = $(leaderInfo).attr('data-leadership-photo');
        var name = $(leaderInfo).attr('data-leadership-name');
        var title = $(leaderInfo).attr('data-leadership-title');
        var bio = $(leaderInfo).attr('data-leadership-bio');
        var bkgrd = '';

        if (image === null || image === undefined) {
            bkgrd = 'header--hasBackground';
        }

        $this.click(function(ev) {
            ev.preventDefault;
            var modalHTML = '<div class="leadership-grid__modalWrap"><div class="leadership-grid__modal">' +
                '<button class="leadership-grid__modalClose" data-leadership-close><i class="icon-close" aria-hidden="true"></i><span class="sr-only">Close modal</span></button>' +
                '<div class="leadership-grid__modalHeader ' + bkgrd +'">' +
                    '<img class="leadership-grid__modalPhoto" src="' + image + '" alt="'+ name +', '+ title +'">' +
                    '<h3 class="leadership-grid__modalName">' + name + 
                    '<span class="leadership-grid__modalTitle">' + title + '</span></h3>' +
                '</div>' +
                '<div class="leadership-grid__modalContent">' +
                    '<div class="leadership-grid__modalBio">' + bio +'</div>' +
                        '<button class="leadership-grid__modalClose" data-leadership-close><i class="icon-close" aria-hidden="true"></i> Close</button>' +
                '</div>' +
            '</div></div>';

            $('body').append(modalHTML);
            $('body').addClass('disable-scroll');

            $(document).on('click', '[data-leadership-close]', function() {
                $('.leadership-grid__modal, .leadership-grid__modalWrap').remove();
                $('body').removeClass('disable-scroll');
            });
        });
    });
}

$(function() {
    if($('.leadership-grid').length) {
        leadershipModal();
    }
});
// Search & Promote
function openSearchFilters() {
    $('.search-promote__filters-cat').each(function() {
        var $category = $(this);
        var $link = $category.find('.search-promote__filters-cat-title');

        $link.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            if ($category.hasClass('filters--open')) {
                $category.removeClass('filters--open');

            } else {
                $('.search-promote__filters-cat').removeClass('filters--open');
                $category.addClass('filters--open');
            }
        });
    });

    $('.search-promote__categories-wrap-title').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('categories--open');
        $('.search-promote__categories-list').toggleClass('categories--open');
    });
}

function searchFilterDropdown() {
    var $twoColumnList = $('.search-promote__filter-sublist').closest('.search-promote__filters-dropdown');

    $twoColumnList.addClass('dropdown--wide');

}

function currentCategory() {
    $('.search-promote__categories-link').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('category--current');
        $('.search-promote__categories-link').not(this).removeClass('category--current');
    });
}

function mobileFilterMenu() {
   var $mobileMenu = $('.search-promote__mobile-menu');

   $('.search-promote__mobile-menu-show').on('click', function() {
       $mobileMenu.addClass('search-promote__mobile-menu--open');
       $('body').addClass('mobile-menu--open');
   });

   $('.search-promote__mobile-menu-close').on('click', function() {
       $mobileMenu.removeClass('search-promote__mobile-menu--open');
       $('body').removeClass('mobile-menu--open');
   });
}

$(function() {
    if ($('search-promote')) {
        openSearchFilters();
        searchFilterDropdown();
        currentCategory();
        mobileFilterMenu();
    }
});
if(document.getElementById("twitterTime")){
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){js=d.createElement(s);js.id=id;
    js.src="//platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js,fjs);}
}(document,"script","twitter-wjs");

var CustomizeTwitterWidget=function(e){window.console&&console.log||(console={log:function(){},debug:function(){},info:function(){},warn:function(){},error:function(){}});var t=function(e){return isNaN(parseFloat(e))&&isFinite(e)},n=function(e,t){var n=e.createElement("link");return n.href=t,n.rel="stylesheet",n.type="text/css",n},o=function(e,t){var o=n(e,t),i=e.getElementsByTagName("head")[0];i.appendChild(o)},i=function(e,t){return e.indexOf(t)>=0},r=function(e){return e.frameElement.id.indexOf("twitter-widget")>=0},u=function(t,n,c){for(var l=0;l<frames.length;l++)try{r(frames[l])&&!i(t,frames[l].name)&&(o(frames[l].document,e.url),t.push(l))}catch(f){console.log("caught an error"),console.log(f)}t.length<n&&setTimeout(function(){u(t)},c)};if(void 0===e.url)return console.log("need to specify a link to your CSS file. quitting"),void 0;var c;c=void 0===e.widget_count||t(e.widget_count)?1:e.widget_count;var l;l=void 0===e.timeout_length||t(e.timeout_length)?300:e.timeout_length,setTimeout(function(){u([],c,l)},l)};

var twitterFeedcss = {
    "url": "/apps/settings/wcm/designs/www/clientlibs-marketing/css/twitter-timline.css"
};

CustomizeTwitterWidget(twitterFeedcss);


}
