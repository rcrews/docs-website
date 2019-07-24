/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.4",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.4",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.4",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.4",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.4",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.4",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});
if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.4",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a(document.body).height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
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
/*  jQuery Nice Select - v1.1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */

/*  Customizations for data-value in span.current
 *  by Christine Murray christine@infielddigital.com */
 
(function($) {

  $.fn.niceSelect = function(method) {
    
    // Methods
    if (typeof method == 'string') {      
      if (method == 'update') {
        this.each(function() {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          var open = $dropdown.hasClass('open');
          
          if ($dropdown.length) {
            $dropdown.remove();
            create_nice_select($select);
            
            if (open) {
              $select.next().trigger('click');
            }
          }
        });
      } else if (method == 'destroy') {
        this.each(function() {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          
          if ($dropdown.length) {
            $dropdown.remove();
            $select.css('display', '');
          }
        });
        if ($('.nice-select').length == 0) {
          $(document).off('.nice_select');
        }
      } else {
        console.log('Method "' + method + '" does not exist.')
      }
      return this;
    }
      
    // Hide native select
    //this.hide();
    
    // Create custom markup
    this.each(function() {
      var $select = $(this);
      
      if (!$select.next().hasClass('nice-select')) {
        create_nice_select($select);
      }
    });
    
    function create_nice_select($select) {
      $select.after($('<div></div>')
        .addClass('nice-select')
        .addClass($select.attr('class') || '')
        .addClass($select.attr('disabled') ? 'disabled' : '')
        .attr('tabindex', $select.attr('disabled') ? null : '0')
        .html('<span class="current" data-value="default"></span><ul class="list"></ul>')
      );
        
      var $dropdown = $select.next();
      var $options = $select.find('option');
      var $selected = $select.find('option:selected');
      var selectedValue = $selected.val();
      
      $dropdown.find('.current').html($selected.data('display') || $selected.text());

      if (selectedValue != '') {
        $dropdown.find('.current').attr('data-value', selectedValue);
      }
      
      $options.each(function(i) {
        var $option = $(this);
        var display = $option.data('display');

        $dropdown.find('ul').append($('<li></li>')
          .attr('data-value', $option.val())
          .attr('data-display', (display || null))
          .addClass('option' +
            ($option.is(':selected') ? ' selected' : '') +
            ($option.is(':disabled') ? ' disabled' : ''))
          .html($option.text())
        );
      });
    }
    
    /* Event listeners */
    
    // Unbind existing events in case that the plugin has been initialized before
    $(document).off('.nice_select');
    
    // Open/close
    $(document).on('click.nice_select', '.nice-select', function(event) {
      var $dropdown = $(this);
      
      $('.nice-select').not($dropdown).removeClass('open');
      $dropdown.toggleClass('open');
      
      if ($dropdown.hasClass('open')) {
        $dropdown.find('.option');  
        $dropdown.find('.focus').removeClass('focus');
        $dropdown.find('.selected').addClass('focus');
      } else {
        $dropdown.focus();
      }
    });
    
    // Close when clicking outside
    $(document).on('click.nice_select', function(event) {
      if ($(event.target).closest('.nice-select').length === 0) {
        $('.nice-select').removeClass('open').find('.option');  
      }
    });
    
    // Option click
    $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function(event) {
      var $option = $(this);
      var $dropdown = $option.closest('.nice-select');
      var dropdownValue = $option.data('value');

      if (dropdownValue === '') {
        dropdownValue = 'default';
      }
      
      $dropdown.find('.selected').removeClass('selected');
      $option.addClass('selected');
      
      var text = $option.data('display') || $option.text();
      $dropdown.find('.current').text(text).attr('data-value', dropdownValue);
      
      $dropdown.prev('select').val($option.data('value')).trigger('change');
    });

    // Keyboard events
    $(document).on('keydown.nice_select', '.nice-select', function(event) {    
      var $dropdown = $(this);
      var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));
      
      // Space or Enter
      if (event.keyCode == 32 || event.keyCode == 13) {
        if ($dropdown.hasClass('open')) {
          $focused_option.trigger('click');
        } else {
          $dropdown.trigger('click');
        }
        return false;
      // Down
      } else if (event.keyCode == 40) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $next = $focused_option.nextAll('.option:not(.disabled)').first();
          if ($next.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $next.addClass('focus');
          }
        }
        return false;
      // Up
      } else if (event.keyCode == 38) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $prev = $focused_option.prevAll('.option:not(.disabled)').first();
          if ($prev.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $prev.addClass('focus');
          }
        }
        return false;
      // Esc
      } else if (event.keyCode == 27) {
        if ($dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        }
      // Tab
      } else if (event.keyCode == 9) {
        if ($dropdown.hasClass('open')) {
          return false;
        }
      }
    });

    // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
    var style = document.createElement('a').style;
    style.cssText = 'pointer-events:auto';
    if (style.pointerEvents !== 'auto') {
      $('html').addClass('no-csspointerevents');
    }
    
    return this;

  };

}(jQuery));
jQuery(function ($) {

        tabcordion();
    
function tabcordion(){
    
    var hash = window.location.hash.substring(1);
    var historyApi = !!(window.history && history.replaceState);

    
    
 //HORIZONTAL TABS   
    if ($('div#hor_1').length) { 
        
        var tabIndex = $('.tc-list.hor_1').find('ul.tc-list li').text();
        if (hash != '') {
           $('div#hor_1').find('.tc-active').removeClass('tc-active');
            $('div#hor_1').find('.tc-content-active').removeAttr('style').removeClass('tc-content-active').removeClass('tc-accordion-closed');

            //Show the selected tabs content
            $('.tc-list.hor_1').find('[data-tc="' + hash + '"]').addClass('tc-active').siblings().removeClass('tc-active');
            $('div[data-tc="' + hash + '"]').addClass('tc-content-active').siblings().removeClass('tc-content-active');
        } else{
        
        //Default to first TAB on LOAD
        $('div#hor_1').find('ul.tc-list li').first().addClass('tc-active');
        $('div#hor_1').find('.tc-container.hor_1 div').first().addClass('tc-content-active');
        $('div#hor_1').find('.tc-container.hor_1 h2').first().addClass('tc-active');
        }
        
        //Tab Click Binding
            $('h2.tc-accordion.hor_1, li.tc-item.hor_1').bind("click", function(){
                //If Active Accordion
                var target = $(this).attr('aria-controls');
                if ($(this).hasClass('tc-accordion') && $(this).hasClass('tc-active')){
                    //if accordion is open for this tab then close it
                    $('div#hor_1').find('.hor_1.tc-content-active').slideUp('', function () {
                       $(this).addClass('tc-accordion-closed');
                    });
                    
                    $(this).removeClass('tc-active');
                    return false;
                          
                } 
                //end if
                //If inactive Accordion
                if (!$(this).hasClass('tc-active') && $(this).hasClass('tc-accordion')){
                    $('div#hor_1').find('.hor_1.tc-active').removeClass('.tc-active');
                    $('div#hor_1').find('.hor_1.tc-content-active').slideUp().removeClass('tc-content-active tc-accordion-closed');
                     $('div#hor_1').find("[aria-controls=" + target + "]").addClass('tc-active').siblings().removeClass('tc-active');
                    $('div#hor_1').find("[aria-labelledby=" + target + "]").slideDown().addClass('tc-content-active');
                } 
                
                //end if
                //ELSE NON-RESPONSIVE View
                else {
                    
                    $('div#hor_1').find('.hor_1.tc-active').removeClass('tc-active');
                    
                    
                    $('div#hor_1 .tc-container.hor_1').find('.hor_1.tc-content-active').removeAttr('style').removeClass('tc-content-active').removeClass('tc-accordion-closed');
                    //Show the selected tabs content
                    $('div#hor_1').find("[aria-controls=" + target + "]").addClass('tc-active');
                    $('div#hor_1').find("[aria-labelledby=" + target + "]").addClass('tc-content-active');
                    
                    $(this).addClass('tc-active').siblings().removeClass('tc-active');
                }
                 
                
                //End ELSE
                //Update Browser History
                /*        if (historyApi) {
                            var currentHash = window.location.hash;
                            var tabTitle = $(this).text();
                            if (currentHash != ""){
                                if (currentHash == hash){
                                    newHash = '#' + currentHash;
                                }
                                else{
                                newHash = '#' + tabTitle;
                                }
                            }
                            else{
                                newHash = '#' + tabTitle;
                            }
                            history.replaceState(null, null, newHash);
                        */
                 //Window resize function                   
                $(window).resize(function () {
                    $('div#hor_1').find('.resp-accordion-closed').removeAttr('style');
                });
                
            });
    }
    
    //VERTICAL TABS
    if ($('div#ver_1').length) { 
        //Default to first TAB on LOAD
        $('div#ver_1').find('ul.tc-list li').first().addClass('tc-active');
        $('div#ver_1').find('.tc-container.ver_1 div').first().addClass('tc-content-active');
        $('div#ver_1').find('.tc-container.ver_1 h2').first().addClass('tc-active');
        
        //Tab Click Binding
            $('h2.tc-accordion.ver_1, li.tc-item.ver_1').bind("click", function(){
                //If Active Accordion
                if ($(this).hasClass('tc-accordion') && $(this).hasClass('tc-active')){
                    //if accordion is open for this tab then close it
                    $('div#ver_1').find('.tc-content-active').slideUp('', function () {
                       $(this).addClass('tc-accordion-closed');
                    });
                    
                    $(this).removeClass('tc-active');
                    return false;
                          
                } 
                //end if
                //If inactive Accordion
                if (!$(this).hasClass('tc-active') && $(this).hasClass('tc-accordion')){
                    $('div#ver_1').find('.tc-active').removeClass('.tc-active');
                    $('div#ver_1').find('.tc-content-active').slideUp().removeClass('tc-content-active tc-accordion-closed');
                    var target = $(this).attr('aria-controls');
                     $('div#ver_1').find("[aria-controls=" + target + "]").addClass('tc-active').siblings().removeClass('tc-active');
                    $('div#ver_1').find("[aria-labelledby=" + target + "]").slideDown().addClass('tc-content-active');
                } 
                
                //end if
                //ELSE NON-RESPONSIVE View
                else {
                    
                    $('div#ver_1').find('.tc-active').removeClass('tc-active');
                    
                    
                    $('div#ver_1').find('.tc-content-active').removeAttr('style').removeClass('tc-content-active').removeClass('tc-accordion-closed');
                    //Show the selected tabs content
                    var target = $(this).attr('aria-controls');
                    $('div#ver_1').find("[aria-controls=" + target + "]").addClass('tc-active');
                    $('div#ver_1').find("[aria-labelledby=" + target + "]").addClass('tc-content-active');
                    
                    $(this).addClass('tc-active').siblings().removeClass('tc-active');
                }
                 
                
                //End ELSE
                 //Window resize function                   
                $(window).resize(function () {
                    $('div#ver_1').find('.resp-accordion-closed').removeAttr('style');
                });
                
            });
    }

    

    
}    
    

});
jQuery(function(){
    comGap();
});

function comGap(){
    if (window.location.href.indexOf("sqoop") > 0){
         $('div.community').css("margin-top", "0px");
    }    
         
}





function resetScrollTo() {
    $('.js-scrolltotop').hide();
    $('.js-scrolltobottom').show();
}

function enableContinue(e) {
    var elem = $(e.currentTarget);

    if (elem[0].scrollHeight - elem.scrollTop() <= elem.outerHeight()) {
        $('.js-terms-continue').removeAttr('disabled');
        $('.js-scrolltotop').show();
        $('.js-scrolltobottom').hide();
    } else {
        $('.js-terms-continue').attr('disabled', 'disabled');
        resetScrollTo();
    }
}

function enableContinueMobile(e) {
    var elem = $(e.currentTarget);

    if ($('html')[0].scrollHeight - elem.scrollTop() <= elem.outerHeight()) {
        $('.js-terms-continue').removeAttr('disabled');
        $('.js-scrolltotop').show();
        $('.js-scrolltobottom').hide();
    } else {
        $('.js-terms-continue').attr('disabled', 'disabled');
        resetScrollTo();
    }
}

function isMobile(){
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 768;
}

function calcModalOffset() {
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var acceptModalHeight = $('.modal').height();
    var errorModalHeight = $('.error-modal').height();
    var acceptModalOffset = ((((viewportHeight - acceptModalHeight) / viewportHeight) * 100) / 2) + '%';
    var errorModalOffset = ((((viewportHeight - errorModalHeight) / viewportHeight) * 100) / 2) + '%';

    $('.modal').css('bottom', acceptModalOffset);
    $('.error-modal').css('bottom', errorModalOffset);
}

function toggleAcceptModal() {
    if($('.cloud-terms__accept').hasClass('opened')) {
        $('.modal').removeAttr('style');
        $('.cloud-terms__accept').toggleClass('opened');
        $('body').toggleClass('modal-open');
        setTimeout(function(){
            $('.cloud-terms__accept').toggle();
        }, 500);
    } else {
        $('.cloud-terms__accept').toggle();
        setTimeout(function(){
            calcModalOffset();
            $('.cloud-terms__accept').toggleClass('opened');
            $('body').toggleClass('modal-open');
        }, 200);
    }
}

var unboundMobile = true;
var unboundDesktop = true;

function detectSize() {
    
    if(isMobile() && unboundMobile) {
        resetScrollTo()
        setTimeout(function(){
            $(window).scrollTop(0);
        }, 0);
        $(window).on('scroll', function(e){
            enableContinueMobile(e);
        });
        unboundMobile = false;
    } if (unboundDesktop) {
        $('.cloud-terms__scroll').scroll(function(e){
            enableContinue(e);
        });
        unboundDesktop = false;
    } if (isMobile() && unboundDesktop) {
        resetScrollTo();
        $(window).scrollTop(0);
        $('.cloud-terms__scroll').unbind('scroll');
        unboundDesktop = true;
    } if (!isMobile() && !unboundMobile) {
        resetScrollTo()
        $('.cloud-terms__scroll').scrollTop(0);
        $(window).unbind('scroll');
        unboundMobile = true;
    }
}

var isIE = window.navigator.msPointerEnabled;

if (isIE == true) {
    window.onload = function() {
        detectSize();
    }
    
    window.onresize = function() {
        detectSize();
    }
    
} else {
    
    $(window).on('load resize', function() {
        detectSize();
    });
}

$(document).ready(function(){
    
    detectSize();
    
    //Reset elements
    $('.js-scrolltotop').hide();
    $('#acceptTerms').prop('checked', false);
    $('.js-terms-submit').attr('disabled', 'disabled');
    setTimeout(function(){
        $('.cloud-terms__scroll').scrollTop(0);
    }, 10);
    $('.js-terms-continue').attr('disabled', 'disabled');



    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
           return null;
        }
        else{
           return results[1] || 0;
        }
    }

    if ($('#cloudTermsForm').length) {
        var email = $.urlParam('email');
        if (email) {
            $('input[name="email"]').val(email);
        }
        var ssourl = $.urlParam('SSOurl');
        if (ssourl) {
            $('input[name="SSOurl"]').val(ssourl);
        }
    }

    //Open/Close acceptance modal
    $('.js-terms-continue, .js-acceptance-close, .js-cancel-link').click(function(e){
        e.preventDefault();

        toggleAcceptModal();
        
        $('button[type="submit"]').removeClass('processing');
    });

    //Close Error modal
    $('.js-error-close').click(function(e){
        e.preventDefault();
        $('.error-modal').removeAttr('style');
        $('.cloud-terms__error').toggleClass('opened');
        setTimeout(function(){
            $('.cloud-terms__error').toggle();
        }, 500);
    });

    //Enable Submit button in modal
    $('#acceptTerms').click(function(){
        if ($('#acceptTerms:checked').length == 1) {
            $('.js-terms-submit').removeAttr('disabled');
        } else {
            $('#acceptTerms').prop('checked', false);
            $('.js-terms-submit').attr('disabled', 'disabled');
        }
    });

    //Auto Scroll functions
    $('.js-scrolltobottom').on('click touch', function(){
        if (isMobile()){
            $('body').animate({scrollTop: $('body')[0].scrollHeight}, 500);
        } else {
            $('.cloud-terms__scroll').animate({scrollTop: $('.cloud-terms__scroll')[0].scrollHeight}, 500);
        }
    });
    $('.js-scrolltotop').on('click touch', function(){
        if (isMobile()){
            $('body').animate({scrollTop: 0}, 500);
        } else {
            $('.cloud-terms__scroll').animate({scrollTop: 0}, 500);
        }
    });

    //Submitting form
    $('#cloudTermsForm').submit(function(e){
        e.preventDefault();
        var $form = $(this),
            postLocation = $form.attr('action'),
            formData = $form.serialize();
        
        // Add process styles to submit button
        setTimeout(function() {
            $form.find('button[type="submit"]').addClass('processing');
        }, 100);

        $.ajax({
            type: "POST",
            url: postLocation,
            data: formData,
            dataType: 'JSON',
            success: function(data) {
                console.log(data);
                var status = data.status,
                    location = data.location;

                if (status == 200) {
                    window.location.href = location;
                } else if (status == 500) {
                    toggleAcceptModal();
                    $('.cloud-terms__error').toggle();
                    setTimeout(function(){
                        calcModalOffset();
                        $('.cloud-terms__error').toggleClass('opened');
                    }, 200);
                }
            }
        });
    });
});

/*
 *  Cloud to Case JS
 */
var customerDataLoaded = false,
    accountID,
    contactID,
    userID,
    component,
    subComponent,
    bundleID,
    requestType,
    appDescription,
    enviroment,
    bid,
    componentList,
    requestTypeList,
    performanceList;

/*
 *  get params from url
 */
function getQueryParam(param) {
    location.search.substr(1)
        .split("&")
        .some(function(item) { // returns first occurence and stops
            return item.split("=")[0] == param && (param = item.split("=")[1])
        })
    return param
}

/*
 *  get customer data, set vars, display data
 */
function customerData() {
    // Populate Account Info from User Info Handler
    $('dd[data-js-accountname]').html(userInfoHandler.accountName);
    $('dd[data-js-customername]').html(userInfoHandler.fullName);
    $('dd[data-js-email]').html(userInfoHandler.email);
    $('dd[data-js-phone]').html(userInfoHandler.phone);

    // Populate Case Creation Form from BundleID Ajax
    var payload = {"id":bid};

    $.ajax({
        url:'/bin/services/support/api.c2c/getBundleById',
        type:'POST',
        crossDomain: true,
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(payload), 
        dataType: 'json',
        success: function(data) {

            if (data.hasOwnProperty('errorCode')) {
                $('.cloud-case__errorTitle').text(data.errorCode);
                $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
                $('.box--error').slideDown();
                $('.cloud-case__loading').addClass('loading--finished');

            } else if (data.hasOwnProperty('error')) {
                $('.cloud-case__errorTitle').text(data.error);
                $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
                $('.box--error').slideDown();
                $('.cloud-case__loading').addClass('loading--finished');

            } else {
                customerDataLoaded = true;
                accountID = data.user['accountId'];
                contactID = data.user['contactId'];
                userID = data.user['userId'];
                component = data.issue['component'];
                subComponent = data.issue['subComponent'];
                bundleID = data.issue['bundleId'];
                requestType = data.issue['requestType'];
                enviroment = data.issue['environment'];
                appDescription = data.issue['appDescription'];

                $('input#contactID').attr('value', contactID);
                $('input#accountID').attr('value', accountID);
                $('input#userID').attr('value', userID);
                $('input#bid').attr('value',bundleID);
                $('input#appDescription').attr('value', appDescription);
                $('input#enviroment').attr('value', enviroment);

                $('#cloudCaseForm').removeClass('form--disabled');
                $('#caseSubject, #caseDescription, #caseContactAlt, #caseInternalNumber, #caseSubmit').removeProp('disabled');
                $('#caseSubject, #caseDescription').prop('required');
                fieldCharCount('#caseSubject', 100);
                fieldCharCount('#caseDescription', 32000);
                cloudShowLabel();
            }
        },
        complete: function() {

            if (customerDataLoaded == true) {
                getComponentList();
                cloudCaseValidate('#cloudCaseForm');
            }
        },
        error: function(data) {
            $('.cloud-case__errorTitle').text(data.errorCode);
            $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
            $('.box--error').slideDown();
            $('.cloud-case__loading').addClass('loading--finished');
            caseToTop('#cloudCase');
        }
    });
}

/*
 *  get component/subComponent list
 */
function getComponentList() {
    var payload = {"id":"Component-Sub-Component"};

    $.ajax({
        url:'/bin/services/support/api.c2c/getPickList',
        type:'POST',
        crossDomain: true,
        contentType : "application/json; charset=utf-8",
        data: JSON.stringify(payload), 
        dataType: 'json',
        success: function(data) {

            if (data.hasOwnProperty('errorCode')) {
                $('.cloud-case__errorTitle').text(data.errorCode);
                $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
                $('.box--error').slideDown();
                $('.cloud-case__loading').addClass('loading--finished');

            } else if (data.hasOwnProperty('error')) {
                $('.cloud-case__errorTitle').text(data.error);
                $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
                $('.box--error').slideDown();
                $('.cloud-case__loading').addClass('loading--finished');

            } else {
                componentList = data;

            }
        },
        complete: function(data) {

            if(typeof componentList.pickListMapping[component] != 'undefined') {
                // populate component dropdown, select component
                dropdownUpdate(componentList, true, '[data-js-component]', 'Component', false);
                $('[data-js-component]').val(component).trigger('change');

                if (subComponent != 'undefined' && subComponent != "" && subComponent != null && componentList.pickListMapping[component].indexOf(subComponent) >= 0) {
                    // populate subcomponent dropdown, select subcomponent
                    dropdownUpdate(componentList, true, '[data-js-subcomponent]', 'Sub-Component', false, component);
                    $('[data-js-subcomponent]').val(subComponent).trigger('change');

                } else {
                    // populate subcomponent dropdown, set to enabled
                    dropdownUpdate(componentList, true, '[data-js-subcomponent]', 'Sub-Component', true, component);
                }

            } else {
                // populate component dropdown, set to enabled
                dropdownUpdate(componentList, true, '[data-js-component]', 'Component', true);
                $('[data-js-component]').on('change', function(){
                    component = $(this).val();

                    if(subComponent != 'undefined' && subComponent != "" && subComponent != null && componentList.pickListMapping[component].indexOf(subComponent) >= 0) {
                        // populate subcomponent dropdown, select subcomponent
                        dropdownUpdate(componentList, true, '[data-js-subcomponent]', 'Sub-Component', false, component);
                        $('[data-js-subcomponent]').val(subComponent).trigger('change');

                    } else {
                         // populate subcomponent dropdown, set to enabled
                        dropdownUpdate(componentList, true, '[data-js-subcomponent]', 'Sub-Component', true, component);
                    }
                });
                
            }
            
            $('.cloud-case__loading').addClass('loading--finished');
            getRequestTypes();

        },
        error: function(data) {
            $('.cloud-case__errorTitle').text(data.errorCode);
            $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
            $('.box--error').slideDown();
            $('.cloud-case__loading').addClass('loading--finished');
            caseToTop('#cloudCase');
        }
    });
}

/*
 *  get request type/sub-type list
 */
function getRequestTypes() {
    var payload = {"id":"Request Type-Sub-Request Type"};

    $.ajax({
        url:'/bin/services/support/api.c2c/getPickList',
        type:'POST',
        crossDomain: true,
        contentType : "application/json; charset=utf-8",
        data: JSON.stringify(payload), 
        dataType: 'json',
        success: function(data) {

            if (data.hasOwnProperty('errorCode')) {
                $('.cloud-case__errorTitle').text(data.errorCode);
                $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
                $('.box--error').slideDown();
                $('.cloud-case__loading').addClass('loading--finished');

            } else if (data.hasOwnProperty('error')) {
                $('.cloud-case__errorTitle').text(data.error);
                $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
                $('.box--error').slideDown();
                $('.cloud-case__loading').addClass('loading--finished');

            } else {

                requestTypeList = data;
            }
        },
        complete: function() {

            if(requestType !== 'undefined' && requestType !== null) {
                dropdownUpdate(requestTypeList, false, '[data-js-request]', 'Request Type', false);
                $('[data-js-request]').val(requestType).trigger('change');
                dropdownUpdate(requestTypeList, true, '[data-js-requestsub]', 'Request Sub-Type', true, requestType);
                getPerformanceImpact();

            } else {
                dropdownUpdate(requestTypeList, false, '[data-js-request]', 'Request Type', true);
                
                $('[data-js-request]').on('change', function() {
                    requestType = $(this).val();
                    dropdownUpdate(requestTypeList, true, '[data-js-requestsub]', 'Request Sub-Type', true, requestType);
                    getPerformanceImpact();
                });
            }
            
        },
        error: function(data) {
            $('.cloud-case__errorTitle').text(data.errorCode);
            $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
            $('.box--error').slideDown();
            $('.cloud-case__loading').addClass('loading--finished');
            caseToTop('#cloudCase');
        }
    });
}

/*
 *  get performance impact types, populate selects
 */
function getPerformanceImpact() {
    var payload = {"id":"Request Type-Performance Impact?"};

    $.ajax({
        url:'/bin/services/support/api.c2c/getPickList',
        type:'POST',
        crossDomain: true,
        contentType : "application/json; charset=utf-8",
        data: JSON.stringify(payload), 
        dataType: 'json',
        success: function(data) {

            if (data.hasOwnProperty('errorCode')) {
                $('.cloud-case__errorTitle').text(data.errorCode);
                $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
                $('.box--error').slideDown();
                $('.cloud-case__loading').addClass('loading--finished');

            } else if (data.hasOwnProperty('error')) {
                $('.cloud-case__errorTitle').text(data.error);
                $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
                $('.box--error').slideDown();
                $('.cloud-case__loading').addClass('loading--finished');

            } else {

                performanceList = data;
            }
        },
        complete: function(data) {

            dropdownUpdate(performanceList, false, '[data-js-performance]', 'Performance Impact', true, requestType);
            
        },
        error: function(data) {
            $('.cloud-case__errorTitle').text(data.errorCode);
            $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
            $('.box--error').slideDown();
            $('.cloud-case__loading').addClass('loading--finished');
            caseToTop('#cloudCase');
        }
    });
}

/*
 *  Update dropdown
 */
function dropdownUpdate(list, alpha, dropdown, title, enabled, selected) {

    // empty dropdown, re-add default option
    $(dropdown).empty();
    $(dropdown).append($('<option>').text(title).attr('value', ''));

    // populate dropdown options
    if (selected !== undefined) {

        // secondary list (paired with primary list)
        if(alpha == true) {
            // alphabetized 
            var sorted = list.pickListMapping[selected].sort(function(a, b) {
                a = a.toLowerCase();
                b = b.toLowerCase();
                
                return (a < b) ? -1 : (a > b) ? 1 : 0;
            });

            $.each(sorted, function(i, value) {
                $(dropdown).append($('<option>').text(value).attr('value', value));
            });

        } else {

            // not alphabetized 
            $.each(list.pickListMapping[selected], function(i, value) {
                $(dropdown).append($('<option>').text(value).attr('value', value));
            });
        }

    } else {
        
        // primary list
        if(alpha == true) {
            //alphabetized 
            var sorted = Object.keys(list.pickListMapping).sort(function(a, b) {
                a = a.toLowerCase();
                b = b.toLowerCase();
                
                return (a < b) ? -1 : (a > b) ? 1 : 0;
            });

            $.each(sorted, function(i, value) {
                $(dropdown).append($('<option>').text(value).attr('value', value));
            });

        } else {
            // not alphabetized 
            $.each(Object.keys(list.pickListMapping), function(i, value) {
                $(dropdown).append($('<option>').text(value).attr('value', value));
            });
        }
    }

    // enable dropdown
    if (enabled == true) {
        $(dropdown).removeProp('disabled').parent('div').removeClass('select--disabled');
    }

    // destroy and re-init custom select plugin (update function doesn't seem to work)
    $(dropdown).niceSelect('destroy');
    setTimeout(function() {
        $(dropdown).niceSelect();
    }, 50);
}

/*
 *  Submit case
 */
function caseSubmit(formID) {
    // enabled fields so they serialize properly
    $('#caseComponent, #caseRequest').removeProp('disabled');
    if($('#caseSubComponent').val() !== '') {
        $('#caseSubComponent').removeProp('disabled');
    }

    // serialize form data
    var caseData = $(formID).serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {});

    // submit case
    $.ajax({
        url:'/bin/services/support/api.sfdc/createCase',
        type:'POST',
        crossDomain: true,
        contentType : "application/json; charset=utf-8",
        data: JSON.stringify(caseData), 
        dataType: 'json',
        success: function(data) {

            if (data.hasOwnProperty('errorCode')) {
                $('.cloud-case__errorTitle').text(data.errorCode);
                $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
                $('.box--error').slideDown();
                $('.cloud-case__loading').addClass('loading--finished');

            } else if (data.hasOwnProperty('error')) {
                $('.cloud-case__errorTitle').text(data.error);
                $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
                $('.box--error').slideDown();
                $('.cloud-case__loading').addClass('loading--finished');

            } else {
                // Success Message
                $('.box--error').hide();
                $('.cloud-case__loading').addClass('loading--finished');
                $('.cloud-case__successTitle').text('Case #' + data.CaseNumber + ' has been submitted.');
                $('.cloud-case__successMsg').html('A Cloudera Support Engineer will reply within the response time outlined in your support contract.');
                $('.box--success').slideDown();
                $('.cloud-case__formFields').hide();

                // Data Submitted display
                $('dd[data-js-successpriority]').prepend(data.Priority);
                $('dd[data-js-successstatus]').text(data.Status);
                $('dd[data-js-successcomponent]').text(data.Component__c);
                $('dd[data-js-successsubcomponent]').text(data.Sub_Component__c);
                $('dd[data-js-successrequest]').text(data.Request_Type__c);
                $('dd[data-js-successsubrequest]').text(data.Sub_Request_Type__c);
                $('dd[data-js-successperformance]').text(data.Performance_Impact__c);
                $('dd[data-js-successsubject]').text(data.Subject);
                if (data.hasOwnProperty('Alternate_Contact_Info__c')) {
                    $('dd[data-js-successaltcontact]').text(data.Alternate_Contact_Info__c);
                }
                if (data.hasOwnProperty('Internal_Case__c')) {
                    $('dd[data-js-successcasenumber]').text(data.Internal_Case__c);
                }

                var salesforce = $('[data-js-salesforce]').attr('data-js-salesforce');
                $('[data-js-editcase]').attr('href', salesforce + '/' + data.Id + '/e?retURL=%2Fapex%2FSupportCase%3Fid%3D' + data.Id + '%26id%3D' + data.Id);
                $('[data-js-viewcase]').attr('href', salesforce + '/' + data.Id);
                $('.cloud-case__formSuccess').show();
                caseToTop('#cloudCase');
            }
        },
        error: function(data) {
            $('.cloud-case__errorTitle').text(data.error);
            $('.cloud-case__errorMsg').html(data.message + ". Status: " + data.status);
            $('.box--error').slideDown();
            caseToTop('#cloudCase');
        }
    });
}

/*
 *  Cloud to Case Form Validation
 */
function cloudCaseValidate(formID) {
    // Add select "not empty" test
    jQuery.validator.addMethod("valueNotEmpty", function (value) {
        return value !== "";
    }, "This field is required.");

    $(formID).validate({
        submitHandler: function(form) {
            $('.cloud-case__loadingTitle').text('Creating case...');
            $('.cloud-case__loading').removeClass('loading--finished');
            caseSubmit(formID);
        },
        rules: {
            'Component__c': {
                valueNotEmpty: true
            },
            'Sub_Component__c': {
                valueNotEmpty: true
            },
            'Request_Type__c': {
                valueNotEmpty: true
            },
            'Sub_Request_Type__c': {
                valueNotEmpty: true
            },
            'Performance_Impact__c': {
                valueNotEmpty: true
            },
            'subject': {
                required: true,
                maxlength: 100
            },
            'description': {
                required: true,
                maxlength: 32000
            }
        },
        highlight: function(element) {
            $(element).addClass('form--error');
            $(element).parent('div').addClass('form--error');
        },
        unhighlight: function(element) {
            $(element).removeClass('form--error');
            $(element).parent('div').removeClass('form--error');
        },
        invalidHandler: function(form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                $('.cloud-case__errorTitle').text('Cannot submit form.');
                $('.cloud-case__errorMsg').html('Please complete all required fields.');
                $('.box--error').slideDown();
                $('#cloudCaseForm').find('select:not([disabled])').niceSelect('destroy');
                setTimeout(function() {
                    $('#cloudCaseForm').find('select:not([disabled])').niceSelect();
                }, 50);
                caseToTop('#cloudCase');

            } else {
                $('.box--error').slideUp();
            }
        }
    }); 

    $(document).on('click', '.nice-select .option:not(.disabled)', function(event) {
        var $dropdown = $(this).closest('.nice-select');

        setTimeout(function() {
            $dropdown.prev('select').valid();
        }, 50);   
    });
}

/*
 *  Cloud to Case Show/Hide Label
 */
function cloudShowLabel() {
    $('#cloudCaseForm').find('select').on('change', function() {
        var $this = $(this);

        if($this.find(':selected').val() != '') {
            $this.closest('[class*="col-"]').find('.form__label').addClass('label--show');

        } else {
            $this.closest('[class*="col-"]').find('.form__label').removeClass('label--show');
        }
    });

    $('#cloudCaseForm').find('input, textarea').on('keyup', function() {

        if($(this).val() != '') {
            $(this).parent().find('.form__label').addClass('label--show');

        } else {
            $(this).parent().find('.form__label').removeClass('label--show');
        }
    });
}

/*
 *  Field Character Account
 *  updates on keyup
 */
function fieldCharCount(field, maxCount) {

    $(field).on('keyup change paste', function () {
        var len = $(this).val().length;

        $(this).siblings('.form__charCount').find('.charCount__used').text(len);
    });
}

/*
 *  Scroll to top of element
 */
function caseToTop(el) {
    $('html,body').animate({scrollTop: $(el).offset().top});
}

/*
 * init functions on window load
 */
$(window).load(function() {

    if($('#cloudCase').length) {

        bid = getQueryParam('bid');

        $('#cloudCaseForm').find('select').niceSelect();

        if (bid != null && bid != '' && bid != 'bid') {
            // ajax calls, get data
            customerData();


        } else {
            $('.cloud-case__errorTitle').text('Case Creation Error');
            $('.cloud-case__errorMsg').html('Invalid or missing bundle ID.');
            $('.box--error').slideDown();
            $('.cloud-case__loading').addClass('loading--finished');
        }

        $('[data-js-formreset]').on('click', function() {
            $(this).hide();
            
            $('#cloudCaseForm').find('select:not([disabled])').niceSelect('destroy');
            setTimeout(function() {
                $('#cloudCaseForm').find('select:not([disabled])').niceSelect();
            }, 50);
        });
    }
});

//INIITALIZE DL FORM
function InitDLForm(){    
   	var terms = "/legal/terms-and-conditions/ClouderaStandardLicense.html .bucket"
   	if (document.location.href.indexOf('beta') > -1){
   		terms = "/legal/terms-and-conditions/ClouderaBetaLicense.html .bucket"
   	} else if (document.location.href.indexOf('connectors/hive') > -1 || document.location.href.indexOf('connectors/impala') > -1) {
   	    terms = "/legal/terms-and-conditions/cloudera-connectors-free-download-license-agreement.html .bucket";
   	}
    //$('div.dlprompt').hide();
    $('div.row.col_control.dlComplete').hide();
    $('th.pkgs, td.pkgs').hide();
    $('#gate').hide();  
    $('#dlGate').hide();     
    $('#dlTerms').hide();
    if (typeof $('#customTermsPath') == 'undefined') {
        $( "#agreement" ).load(terms, function(){
            $('section.section_padding').css('padding', '0px');
            $('div.text.parbase.section').css('margin-bottom', '0px');
            $('h1').css('margin-bottom', '0px');
        });
    }
    //
    //var eqName = $("input[name='eqName']").val();
    //$("input[name='elqFormName']").val(eqName);
    var eqcid = $("input[name='eqcid']").val();
    $("input[name='cid']").val(eqcid);
    var eqlsd = $("input[name='eqlsd']").val();
    $("input[name='LeadSourceDetail']").val(eqlsd);
    var src = $.urlParam('src'); 
    $("input[name='src']").val(src);
}

//DISPLAY GATE
function DisplayEqGate(e){
    e.preventDefault();
    e.stopPropagation();
    $('#dlGate').hide();     
    $('#dlTerms').hide();
    $('#gate').lightbox_me();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('#dlGate').show();
}

//REFRESH GATE WITH TERMS AFTER EQ FORM COMPLETION
function activateTerms(e){
    e.preventDefault();
    e.stopPropagation(); 
    //HIDE FORM LightBox
    $('#dlGate').hide();
    //SHOW TERMS in LIGHTBOX
    $('#dlTerms').show();
    chkTerms();
}

//SHOW TERMS TO AUTHENTICATED USERS
function DisplayTerms(e){
    e.preventDefault();
    e.stopPropagation();    
    $('#dlTerms').hide();
    $('#gate').lightbox_me(); 
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('#dlTerms').show();
    $('#hemailAddress').attr("value",userInfoHandler.email);
    $('#hfirstName').attr("value",userInfoHandler.givenName);
    $('#hlastName').attr("value",userInfoHandler.familyName);  
    chkTerms();
}

//'X' OR CANCEL OUT OF ELOQUA FORM
function eqFormCancel(e){
    e.preventDefault();
    e.stopPropagation();
    $('#dlGate').hide();     
    $('#dlTerms').hide();
    $('#dlGate').hide();
    $('#gate').trigger('close');
}

//EQ FORM AND TERMS ACCEPTANCE SUMBISSION
function dlComplete(e){
    var loc = $('a.dlComplete').attr('href');
    jQuery.validator.setDefaults({debug:true});
    //FORM VALIDATION FUNCTION CALL
    
    //BEGIN SUBMIT FORM
        console.log('initiating request');
        var request = $.ajax({
        	//url: 'https://s1465054361.t.eloqua.com/e/f2', 
        	url: '/bin/services/content/cloudera/pardot.2018-11-13/21d2wjs',
            type:'POST',
            crossDomain: true,
            xhrFields: {withCredentials: true},
            data:$('#register').serialize()
        });
    //END Submit Form
    if ($('a.dlComplete').hasClass('link')){
        window.location = loc;
    }
    
    $('div.row.col_control.dlComplete, #download_text_section').show();
    $('div.row.col_control.dlPrompt').hide();
    $("html, body").animate({ 
        scrollTop: $(".dlComplete, #download_text_section").offset().top
        }, 1000);
    $('#gate').trigger('close');
    
    if (loc.indexOf("/dam/www/Downloads") >= 0 || loc.indexOf("downloads.cloudera.com") >= 0 || loc.indexOf("archive.cloudera.com") >= 0 || loc.indexOf("hub.docker.com") >= 0) {
        window.location.href = loc;
    } else {
        return;
    }
    
}



//FORM IDENTIFICATION AND LAUNCH
function idForm(e){
    //Assign any Bits
    ab();
    //Test if Hidden Form is Present and Display EQ Gate if it is not
    if ($("#hiddenForm").length > 0){
        DisplayTerms(e);
    }else if ($("#register").length > 0){
        DisplayEqGate(e);
    }else{
        DisplayTerms(e); 
    }
    
}

// Enable Submit button on Terms Acceptance
function chkTerms(){
    $("input[name='dlterms']").on("click", function(e){
        if($("input[name='dlterms']").is(':checked')){
            $("#dlSubmit").removeClass("disabled");
            $("#dlSubmit").prop("disabled", false);
        }else{
            $("#dlSubmit").addClass("disabled");
            $("#dlSubmit").prop("disabled", true); 
        }      
    });
}

function odbcSelect(e){
    e.preventDefault();
    //e.stopPropagation();
    //Reset other dropdowns
    $('td span.ddSelect').text('Select a Version');
    //Disable other buttons
    $('button.osSelect').addClass('disabled');
    $('button.osSelect').prop('disabled',true);
    //Get ID for clicked element
    var id = $(e.target).attr('id');
    var txt = $("#" + id).text();
    var durl = $("input[name='"+id+"']").val();
    var dd = $(e.target).parents('.dropdown').find('span.ddSelect');
    var dl = $(e.target).parents('td').next().find('.osSelect');

    $(dd).text(txt);
    $('a.dlComplete').attr('href',durl);
    $('#burl').attr('href',durl);
    $(dl).removeClass("disabled");
    $(dl).prop("disabled", false);
    // $(dl).children('a').attr('href', url);
}

function plSelect(e){
    e.preventDefault();
    //Get ID for clicked element
    var id = $(e.target).attr('id');
    var hash = id + "Sha";
    var txt = $("#" + id).text();
    var durl = $("input[name='"+id+"']").val();
    var hash = $("input[name='"+hash+"']").val();
    $('.plSelector').text(txt);
    $('a.dlComplete').attr('href',durl);
    if (!hash){
        $('a.dlComplete').addClass('link');
        $('span#dlhash').parent().hide();
    } else {
        $('a.dlComplete').removeClass('link');
        $('span#dlhash').parent().show();
    }
    $('#burl').attr('href',durl);
    $('span#dlhash').text(hash);
    $('button.dlbtn').removeClass("disabled");
    $('button.dlbtn').prop("disabled", false);
}


function ktServerDelOptions(dltype){
    $('a#dlcta button').addClass('disabled');
    $('a#dlcta button').prop('disabled',true);

    if (dltype == 'prc'){
        $('th.prc').css("width","65%");  
        $('td span.ddSelect.type').text('Parcels');
        $('th.pkgs, td.pkgs').hide();
        var durl = $("input[name='parcels']").val();
        $('a.dlComplete').attr('href',durl);
        $('#burl').attr('href',durl);
        $('a#dlcta button').removeClass("disabled");
        $('a#dlcta button').prop("disabled", false);
    } else {
        $('td span.ddSelect.type').text('Packages');   
        $('th.pkgs, td.pkgs').show();
        $('th.prc').css("width","35%");       
    }

}

function ktServerOS(dltype, dlName){
    $('a#dlcta button').addClass('disabled');
    $('a#dlcta button').prop('disabled',true);
    $('td span.ddSelect.os').text(dlName);
    var durl = $("input[name='" + dltype + "']").val();
    $('a.dlComplete').attr('href',durl);
    $('#burl').attr('href',durl);
    $('a#dlcta button').removeClass("disabled");
    $('a#dlcta button').prop("disabled", false);

}


function ab(){
    //Assign Sqoop Connectors to terms acceptance
    if ($("input[name='sqbits']").length){
        var bits = $("input[name='sqbits']").val();
        $('a.dlComplete').attr('href',bits);
        $('#burl').attr('href',bits);
    } else {
        return;
    }
}

function getUserInfo(){
    if (userInfoHandler){
        var first = userInfoHandler.givenName;
        var last = userInfoHandler.familyName;
        var email = userInfoHandler.email;
        var status = userInfoHandler.loggedIn;
    }else{
        return;
    }
}

function setComponentAndVersion() {
    var splitUrl = window.location.pathname.split('/');
    $('input[id=component]').val(splitUrl[splitUrl.length-2]);
    $('input[id=componentVersion]').val(splitUrl[splitUrl.length-1].split('.')[0]);
}

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

//Lightbox Eloqua form WHEN Form button Clicked
$(document).ready(function(){
    //Initialize Page
    InitDLForm();
    setComponentAndVersion();
    
    // Show/Hide Form Field Labels
    $('#gate input').each(function() {
        var value = $(this).val();
        var name = $(this).attr('name');
        var label = 'label[for="' + name + '"]';
        if(value === '') {
            $(label).addClass('sr-only');
        } else {
            $(label).removeClass('sr-only');
        }
    });
    
    $('#gate input').on('keyup change',function() {
        var value = $(this).val();
        var name = $(this).attr('name');
        var label = 'label[for="' + name + '"]';
        if(value != '') {
            $(label).removeClass('sr-only');
        } else {
            $(label).addClass('sr-only');
        }
    });

    //Launch Lighbox based on Auth State
    $('a#dlcta').click(function(e){
        e.preventDefault();
        if (typeof _satellite != 'undefined') {
            _satellite.track('dlStart');
        }
        idForm(e);
    });
    
    //Progress to Terms Form EQ Form (Unauthenticated Flow)
    $('#continue').click(function(e){
        e.preventDefault();
        if (typeof _satellite != 'undefined') {
            _satellite.track('dlFormComplete');
        }
        activateTerms(e);
    });
    
    //Close From from Glyphicon & overlay
    $(document).on("click", ".lbClose, .dlCancel, .js_lb_overlay", function(e){
        e.preventDefault();
        $("input[name='dlterms']").attr('checked', false);
        $("#dlSubmit").addClass("disabled");
        $("#dlSubmit").prop("disabled", true); 
        eqFormCancel(e);
    });
    
    //POPULATE EQ Form Dropdowns
    $(".dropdown-menu.dl li a").click(function(e){
        e.preventDefault();
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
        $(this).parents('.btn-group.dl').find('input').val(selText).trigger('change');
        $(this).closest('.dropdown-menu').siblings('button').addClass('selection-made');
        
        var name = $(this).closest('.control-group').find('input[type="hidden"]').attr('name'),
            label = 'label[for="' + name + '"]';
        
        if(selText != '') {
            $(label).removeClass('sr-only');
        } else {
            $(label).addClass('sr-only');
        }
    });

    $("#linux li a").click(function(e){
        $('input[id=os]').val('Linux');
        $('input[id=osVersion]').val($(this).attr('id'));
    });

    $("#windows li a").click(function(e){
        $('input[id=os]').val('Windows');
        $('input[id=osVersion]').val($(this).attr('id'));
    });

    $("#macOS li a").click(function(e){
        $('input[id=os]').val('Mac');
        $('input[id=osVersion]').val($(this).attr('id'));
    });

    $("#ibmaix li a").click(function(e){
        $('input[id=os]').val('IBM AIX');
        $('input[id=osVersion]').val($(this).attr('id'));
    });

    $("#downloadType li a").click(function(e){
        $('input[id=downloadType]').val($(this).attr('id'));
    });

    $("#textBased a").click(function(e){
        $('input[id=downloadType]').val('textBased');
    });

    $("#asset a").click(function(e){
        $('input[id=downloadType]').val('asset');
    });
    
    //Process Eloqua Form
    $('a.dlComplete').click(function(e){
        e.preventDefault();
        if (typeof _satellite != 'undefined') {
            _satellite.track('dlComplete');
        }
        dlComplete(e);
    });
    
    //DISPLAY HASH AND LINK TO BITS For VM Downloads
    $('a#dlvm').click(function(e){
        e.preventDefault();
        url = $(this).attr('href');
        vmDownload('vmwareSha', url);
    });
    $('a#dlkvm').click(function(e){
        e.preventDefault();
        url = $(this).attr('href');
        vmDownload('kvmSha');
    });
    $('a#dlvb').click(function(e){
        e.preventDefault();
        url = $(this).attr('href');
        vmDownload('vbSha', url);
    });
    
    //ACTIVATE ODBC CONNECTOR DOWNLOAD BUTTON ON CONNECTOR SELECT
    $('li.osSelect a').click(function(e){
        e.preventDefault();
        odbcSelect(e);
    });
    
    //ACTIVATE QUICKSTART DOWNLOAD BUTTON ON PLATFORM SELECT
    $('li.plSelect a').click(function(e){
        e.preventDefault();
        plSelect(e);
    });
    
    //--Navigator Key Trustee Download --//
    //ACTIVATE Parcel DOWNLOAD BUTTON Or Package SELECT
    $('li.dlType a').click(function(e){
        e.preventDefault();
        var dltype = $(this).attr('id');
        ktServerDelOptions(dltype);
    
    });
    //ACTIVATE Parcel DOWNLOAD BUTTON Or Package SELECT
     $('li.dlos a').click(function(e){
        e.preventDefault();
        var dltype = $(this).attr('id');
        var dlName = $(this).html();
        ktServerOS(dltype,dlName);
    
    });
    
});

// Eloqua Form JS
$(function() {
    
    var numFields = 8;
    
    if ( $('.whydownload').length > 0 ) {
        numFields = 7;
    }
    
    var validationInputs = {
        "dlTabs-1": {
            valid: [],
            num: numFields,
            button: $("#continue"),
            tab: 0
        },
        "tabs-2": {
            valid: [],
            num: 1,
            button: $("#submit"),
            tab: 0
        },
    };
    
      //phone load
        $("#phoneNumber").intlTelInput({
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
                    $('#mk-country').val(countryCode);
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

        var availableTags = ["Analytics / Business Intelligence", "Analytics Consultant", "Analytics Manager", "Analytics Scientist", "Analytics Specialist", "Analytics/Business Intelligence", "AnalyticsBusiness Intelligence", "Application Engineer", "Architect", "Associate", "Associate Business Analyst", "Audit, Information Technology", "Big Data / Architecture", "Biostatistician", "Business Analysis Manager", "Business Analyst", "Business Analytics Director", "Business Consultant", "Business Development/Marketing/Sales", "Business Intelligence Analyst", "Business Intelligence Consultant", "Business Intelligence Specialist", "CAA", "CAO", "CCO", "CDO", "CEO", "CFO", "Chief Accounting Officer", "Chief Actuary of GeoSpatial Analytics and Modeling", "Chief Administrative Officer", "Chief Analytic Officer", "Chief Analytics & Algorithms Officer", "Chief Analytics Officer", "Chief Applications Architect", "Chief Architect", "Chief Compliance Officer", "Chief Contracting Officer", "Chief Credit & Analytics Officer", "Chief Data and Analytics Officer", "Chief Data Scientist", "Chief Development Officer", "Chief Digital Officer", "Chief Executive Officer", "Chief Financial Officer ", "Chief Information Officer", "Chief Marketing Officer", "Chief Operating Officer", "Chief Research & Analytics Officer", "Chief Scientist", "Chief Scientist, Global Head of Analytics", "Chief Scientist, VP of Analytics", "Chief Technical Officer", "Chief Technology Officer", "Chief Technology Officer (CTO)", "Chief Technology Officer, Enterprise Information Management & Analytics", "CIO", "Client Director, Business Analytics", "CMO", "Co-Founder", "Co-Founder and CTO", "Consultant", "COO", "Coordinator/Administrator", "Corporate VP", "CTO", "Customer Service; Information Technology", "Customer Service; Information Technology; Director", "Customer Service; Information Technology; General Operations", "Customer Service; Information Technology; General R&D", "Customer Service; Information Technology; VP", "Customer Service; Software Engineering; Information Technology", "Data Analyst", "Data Analyst/Data Scientist", "Data Analytics Consultant", "Data Anayltics Professional", "Data Architect", "Data Engineer", "Data Manager", "Data Miner", "Data Science", "Data Scientist", "Data Warehouse / Management", "Data Warehouse /Management", "Database", "Database Administrator", "Developer", "Digital Marketing Manager", "Director", "Director - Advanced Analytics", "Director - Analytic Science", "Director - BI & Analytics", "Director - Fraud Analytics & R&D", "Director - Predictive Analytics", "Director : Digital Analytics", "Director (Analytics and Creative Strategy)", "Director (Marketing Analytics)", "Director Analytics Strategy, JMP", "Director Ð Analytics Delivery", "Director Marketing Analytics", "Director of Advanced Analytics", "Director of Analytic Consulting, Product/Data Loyalty Analytics", "Director of Analytic Solutions", "Director of Analytics", "Director of Analytics (consultant)", "Director of Data Analytics and Advertising Platforms", "Director of Digital Analytics and Customer Insight", "Director of Engineering", "Director of Health Analytics", "Director of Innovation, Big Data Analytics", "Director of IT Operations", "Director of Product, Analytics", "Director of Research", "Director of Risk Analytics and Policy", "Director of Science & Analytics for Enterprise Marketing Management (EMM)", "Director of Technology", "Director of Web Analytics and Optimization", "Director, Advanced Analytics", "Director, Advanced Analytics, HumanaOne", "Director, Advanced Strategic Analytics", "Director, Analytic Science", "Director, Analytic Strategy", "Director, Analytical Services", "Director, Analytics", "Director, Big Data Analytics and Segmentation", "Director, Business Analytics", "Director, Business Analytics & Decision Management Strategy", "Director, Business Intelligence & Analytics, Pogo", "Director, Business Intelligence and Analytics", "Director, Business Planning & Analytics", "Director, Center for Business Analytics, Stern School of Business", "Director, Clinical Analytics", "Director, Customer Analytics", "Director, Customer Analytics & Pricing", "Director, Customer Insights and Business Analytics", "Director, Data Analytics", "Director, Data Science", "Director, Data Science & Analytics Practice", "Director, Data Warehousing & Analytics", "Director, Database Marketing & Analytics (Marketing)", "Director, DVD BI and Analytics", "Director, Gamification Analytics Platform, Information Analytics & Innovation", "Director, Global Digital Marketing Analytics", "Director, Group Analytics", "Director, Head of Forensic Data Analytics", "Director, Marketing Analytics", "Director, Marketing Analytics for Bing Product Group", "Director, Oracle Database Advanced Analytics", "Director, Predictive Analytic Applications", "Director, Reporting/Analytics", "Director, Risk & Analytics", "Director, Risk and Business Analytics", "Director, Statistical Modeling and Analytics", "Director, Statistics and Project Analytics / Senior Analytic Consultant", "Director, Strategic Analytics", "Director, Web Analytics", "Director; General Operations", "Director/Head of Analytics", "Director/Principal, Analytics", "Distinguished Scientist", "Engagement Manager", "Engineer", "Engineer/Developer", "Enterprise Information Architect", "ETL / ELT", "Event Sponsor ", "Executive VP", "Financial Analyst, Information Technology", "Independent Consultant", "Individual contributor", "Information Management Specialist", "Infrastructure", "IS/IT Consultant", "IS/IT Director", "IS/IT Management", "IS/IT Professional", "IT", "IT Business Analyst", "IT Manager", "IT Operations Staff", "IT Professional", "IT Staff/Technical User", "Lead Analyst", "Lead Data Scientist", "Lead Scientist", "Lead Solutions Architect", "Lead Statistician", "Lean Six Sigma Master Black Belt Consultant", "Legal, Information Technology", "Machine Learning Engineer", "Management Consultant", "Manager", "Manager Analytics", "Manager of Analytics", "Manager, Analytics", "Manager, Business Analytics", "Managing Consultant", "Market Research Analyst", "Marketing / Sales", "Marketing / Sales / BD", "MarketingSales", "Mathematician", "Networking", "Non technical", "Other", "Partner", "Planning Analyst", "Principal Architect", "Principal Consultant", "Principal Data Scientist", "Principal Engineer", "Principal Research Scientist", "Principal Scientist", "Principal Software Engineer", "Procurement, Information Technology", "Product/Market Management, Information Technology", "Programmer", "Programmer/Developer", "Project Consultant", "Project Director", "Project Lead", "Project Leader", "Project Management; Information Technology", "Project Manager", "Quality Assurance; Information Technology", "Quality Manager", "Quant", "Quantitative Analyst", "R&D Director", "Reporting Analyst", "Research Analyst", "Research and Development Manager", "Research Associate", "Research Director", "Research Engineer", "Research Fellow", "Research Manager", "Research Scholar", "Research Scientist", "Risk Analytics Manager", "Risk Consultant", "Risk Manager", "Risk Officer", "Sales Engineer", "Sales Executive, Information Technology", "Sales Executive, Software Engineering", "Sales, Information Technology", "Sales; Information Technology; Director", "SAP Solution Architect", "SAS Consultant", "SAS Data Analyst", "SAS Programmer", "Scientist", "Security / Compliance", "Senior Analyst", "Senior Analytics Consultant", "Senior Bioinformatics Scientist", "Senior Business Analyst", "Senior Business Intelligence Consultant", "Senior Business Intelligence Developer", "Senior Consultant", "Senior Credit Risk Analyst", "Senior Data Analyst", "Senior Data Scientist", "Senior Developer", "Senior Manager, Business Analytics", "Senior Managing Consultant", "Senior Market Analyst", "Senior Marketing Analyst", "Senior Programmer Analyst", "Senior Project Manager", "Senior Research Analyst", "Senior Research Associate", "Senior Research Scientist", "Senior Software Engineer", "Senior Statistician", "Senior Web Analyst", "Social Media Strategist", "Software Developer", "Software Development Engineer", "Software Engineer", "Software Engineering; Director", "Software Engineering; Information Technology", "Software Engineering; Information Technology; VP", "Software Engineering; VP", "Solution Architect", "Solutions Architect", "Sr Quantitative Analyst", "Sr Software Engineer", "Sr. Consultant", "Sr. Data Scientist", "Sr. Project Manager", "Sr. Risk Analyst", "Sr. Software Engineer", "Sr. Solution Architect", "Sr. Statistician", "Staff Engineer", "Statistical Consultant", "Statistical Programmer", "Statistical Programmer (SAS)", "Statistician", "Storage", "Student", "Subject Matter Expert", "System Analyst", "Systems Analyst", "Systems Engineer", "Team Lead", "Team Leader", "Technical Business Analyst", "Technical Consultant", "Technical Manager", "Vice President", "Vice President - Analytics", "Vice President of Engineering", "Vice President, Analytics", "VP Engineering", "VP of Analytics", "VP of Engineering", "VP, Information Security", "VP, General Operations", "Web Analyst", "Web Analytics Manager", "Web Developer"];
        $("#jobTitle").autocomplete({
            source: availableTags
        });

    // Add email validation
    jQuery.validator.addMethod("internet-email", function (value, element) {
        return this.optional(element) || /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
    }, "Please enter a valid email address.");

    // Add select "not empty" test
    jQuery.validator.addMethod("valueNotEmpty", function (value) {
        return value !== "";
    }, "Please select a value.");
    
    // Phone Number allow only numbers, spaces, hyphens, and plus sign
    jQuery.validator.addMethod('customPhone', function (value, element) {
        return this.optional(element) || /^\(?\+?[\.\d\(\-\s\)]+$/.test(value);
    }, "Please enter a valid phone number.");

    var validation = $("#register").validate({
        ignore: [],
        onsubmit: false,
        submitHandler: function(form) {
            form.submit();
        },
        rules: {
            firstName: {
                required: true,
                minlength: 2
            },
            lastName: {
                required: true,
                minlength: 2
            },
            jobTitle: {
                required: true,
                valueNotEmpty: true
            },
            whyvm: {
                valueNotEmpty: true
            },
            company: {
                valueNotEmpty: true
            },
            emailAddress: {
                required: true,
                "internet-email": true,
            },
            businessPhone: {
                valueNotEmpty: true,
                customPhone: true,
                minlength: 7
            }
        },
        messages: {
            company: {
                valueNotEmpty: "Please add your company."
            },
            title: {
                valueNotEmpty: "Please enter a job title."
            },
            country: {
                valueNotEmpty: "Please select a country."
            }
        }
    });
    //alert($('.intl-tel-input ul.country-list').find('active').attr('data-country-code'));
    $("#register input[data-validation]").on("input change blur", function() {

        var id = $(this).attr("id");
        var tabId = $(this).parents(".info").attr("id");
        var validElement = validation.element("#" + id);

       /// var getMyCountryVal = $('.country .preferred .active').attr('data-country-code').toUpperCase();
       // $('#mk-country').val(getMyCountryVal);
        if ( validElement ) {
            // Input is valid, so we add it to the array

            if ( validationInputs[tabId].valid.indexOf(id) === -1 ) {
                // The element is not yet in the validationInputs array
                // so we add it

                validationInputs[tabId].valid.push(id);
                
            }
        } else {
            // Input is wrong, so we remove it from the array

            if ( validationInputs[tabId].valid.indexOf(id) !== -1 ) {
                // If the element is in the validationInputs array
                // we can delete it

                var index = validationInputs[tabId].valid.indexOf(id);
                validationInputs[tabId].valid.splice(index, 1);
            }
        }
        
         var tabsValid = true;
        for ( var i in validationInputs ) {

            if ( validationInputs[i].valid.length === validationInputs[i].num ) {
                // enable next tab
              
                // show submit button for this tab

                if ( validationInputs[i].button ) {
                    
                    // The tab contains a "continue" button
                    validationInputs[i].button.removeClass("disabled");
                    validationInputs[i].button.prop("disabled", false);
                }
                
            } else {

                tabsValid = false;

                if ( validationInputs[i].button ) {
                    // The tab contains a "conintue" button
                    validationInputs[i].button.addClass("disabled");
                    validationInputs[i].button.prop("disabled", true);
                }
            };
        
        };
    });
    
    // Error JobRole if skipped
    $('#phoneNumber').on('keydown change',function() {
        $('#jobTitle').valid();
        //$("#country").valid();
    });
    
    // Reformat Phone Number to a string of numbers when leaving tab
    $('#tabs-2 a.next, .business a').on('click', function() {
        
        var phoneEntry = $('input#phoneNumber').val();
        var phoneString = phoneEntry.replace(/[^a-z0-9]/g, '');
        
        $('input#phoneNumber').val(phoneString).valid();
    });
        
        
    // Change DemandBase country field on select of country
  /*  $('#country').on('change blur',function() {
        var userCountry = $(this).val();
        
        $('#db_country').val(userCountry);
    });*/

});
/*
*  Download Header Component Javascript
*/
$(function () {
  'use strict';

  $(document).ready(function() {
  $('div.downloads-header__options').fadeIn('fast');
  //.css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
  });

  var hideSelects = function() {
    $('ul[data-parent]').each(function() {
      var $that = $(this);
      var hide = true;
      $('.dropdown').each(function() {
        var $current = $(this);
        if ($current.find('a[data-selected]').data('child') == $that.data('parent')) {
          hide = false;
        }
      });
      if (hide) {
        var $dropdown = $that.closest('.dropdown');
        $dropdown.addClass('dropdown-hide');
        $dropdown.find('button').addClass('fade-in');
        clearStyles($dropdown);
        removeSelected($dropdown);
      }
    });
  };

  var removeSelected = function($dropdown) {
    var selected = $dropdown.find('a[data-selected]');
    if (selected !== undefined) {
      selected.removeAttr('data-selected');
    }
    var title = $dropdown.find('span.dropdown-title');
    title.html(title.data('placeholder'));
  };

  var showLabel = function() {

    $('.dropdown-menu a').click(function() {
      $(this).closest('.dropdown').find('label').css('opacity', '1');
    });
  };

  var showChildDropdown = function(parent, child, childAnimation) {
    if (childAnimation == 'same-level') {
      parent.removeClass('hundred');
      parent.addClass('left');
      parent.addClass('fifty-fifty');
      setTimeout(function() {
        child.removeClass('dropdown-hide');
        child.addClass('fifty-fifty');
        child.addClass('right');
    }, 300);
      setTimeout(function() {
          child.find('button').removeClass('fade-out').addClass('fade-in');
      },640);
    } else {
      child.removeClass('dropdown-hide');
      child.addClass('hundred');
      setTimeout(function() {
          child.find('button').removeClass('fade-out').addClass('fade-in');
      },640);
    }
  };

  var clearStyles = function(object) {
    var objButton = object.find('button');

    object.removeClass('fifty-fifty');
    object.removeClass('left');
    object.removeClass('right');
    object.removeClass('hundred');
    if (!objButton.hasClass('first-dropdown')) {
        objButton.removeClass('fade-in').addClass('fade-out');
    }
  };

  var isOpenChild = function($dropdown) {
    var $ul = $dropdown.find('ul');
    if ($ul.data('parent')) {
      var $parentSelection = $('a[data-child="' + $ul.data('parent') +'"]');
      var $parentDropdown = $parentSelection.closest('.dropdown');
      if ($parentSelection.html() == $parentDropdown.find('span.dropdown-title').html()) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  var unevenFifty = function() {
    var left = $('.fifty-fifty.left');
    var right = $('.fifty-fifty.right');
    return (!left.length && right.length) || (left.length && !right.length);
  };

  var updateAnalytics = function($that) {
    var $ul = $that.closest('ul');
    var dropdownType = $ul.data('dropdowntype');
    if (dropdownType !== '') {
      var input = $('input[id=' + dropdownType + ']');
      if (input.length) {
        input.val($that.data('value'));
      }
    }
  };

  var updateDownloadType = function() {
    var downloadType = '';
    $('a[data-selected]').each(function() {
      var $ul = $(this).closest('ul');
      if ($ul.data('dropdowntype') == 'downloadType') {
        downloadType = $(this).data('value');
      }
    });
    $('input[id=downloadType]').val(downloadType);
  };

  $('ul[id^=download-select] > li > a').on('click', function(e) {
    //console.log('hit');
    e.preventDefault();
    //Check Terms
    var checkCustomTerms = $(this).data('customterms');
    var checkGlobalTerms = $('#globalTermsPath').attr('data-terms');
    if(checkCustomTerms !== undefined){
      //console.log('yup it has length');
      $('#customTermsPath').attr('data-terms' , checkCustomTerms);
      var cusTerms = $('#customTermsPath').attr('data-terms') + ' .bucket';
      $( "#agreement" ).load(cusTerms, function(){
        $('section.section_padding').css('padding', '0px');
        $('div.text.parbase.section').css('margin-bottom', '0px');
        $('h1').css('margin-bottom', '0px');
      });
    }else{
     // console.log(checkGlobalTerms);
      $('#customTermsPath').attr('data-terms' , "");
      var getGlobalTerms = $('#globalTermsPath').attr('data-terms') + ' .bucket';
      $( "#agreement" ).load(getGlobalTerms, function(){
        $('section.section_padding').css('padding', '0px');
        $('div.text.parbase.section').css('margin-bottom', '0px');
        $('h1').css('margin-bottom', '0px');
      });
    }

    var $that = $(this);
    var $download_button = $('#download_button');
    $download_button.removeAttr('data-download');
    var $dropdown = $that.closest('.dropdown');
    removeSelected($dropdown);
    $that.attr('data-selected','true');
    $dropdown.find('span.dropdown-title').html($that.html()).removeAttr('data-placeholder');
    if ($that.data('child')) {
      hideSelects();
      if (unevenFifty()) {
        clearStyles($dropdown);
      }
      updateAnalytics($that);
      var child = $that.data('child');
      $download_button.prop('disabled', true);
      $download_button.addClass('disabled');
      showChildDropdown($dropdown, $('ul[data-parent="' + child + '"]').closest('.dropdown'), $that.data('animation'));
    } else if ($that.data('download')) {
      hideSelects();
      if (unevenFifty() || !isOpenChild($dropdown)) {
        clearStyles($dropdown);
      }
      updateAnalytics($that);
      $download_button.removeProp('disabled');
      $download_button.removeClass('disabled');
      if ($that.data('downloadtype')) {
        if ($that.data('downloadtype') !== 'definedAbove') {
          $('input[id=downloadType]').val($that.data('downloadtype'));
        } else {
          updateDownloadType();
        }
      }
      $download_button.attr('data-download', $that.data('download'));
      $download_button.attr('data-value', $that.data('value'));
    } else {
      hideSelects();
    }
    setTimeout(function(){
      showLabel();
    }, 400);
  });

  /* START DOWNLOAD ACTION SECTION */

  $('#download_cta').on('click', function(e){
    e.preventDefault();
    if (typeof _satellite != 'undefined') {
        _satellite.track('dlStart');
    }
    var $that = $(this)
    var downloadValue = $that.find('button').attr('data-download');
    var dropdownValue = $that.find('button').attr('data-value');
    var $selected = $('a[data-value="'+ dropdownValue +'"]');
    if ($selected.data('instructions')) {
      $('.panel-body.dlComplete').empty();
      $('.panel-body.dlComplete').html($selected.data('instructions'));
    } else {
      $('.panel-body.dlComplete').empty();
      $('.panel-body.dlComplete').html($('.panel-body.dlComplete').data('placeholder'));
    }
    if ($('input[id=downloadType]').val() == 'asset') {
        $('a.dlComplete').attr('href', downloadValue);
    }
    if ($("#hiddenForm").length > 0) {
        DisplayTerms(e);
    } else if ($("#register").length > 0) {
        DisplayEqGate(e);
    } else if ($('#noTermsForm').length > 0) {
        var request = $.ajax({
            url: '/bin/services/content/cloudera/pardot.2018-11-13/21d2wjs',
            type:'POST',
            crossDomain: true,
            xhrFields: {withCredentials: true},
            data:$('#noTermsForm').serialize()
        });
        if ($('input[id=downloadType]').val() == 'asset') {
            window.location = downloadValue;
        } else {
            var $text = $('#download_text_section');
            $text.show();
            var offSet = $text.offset().top;
            $('html, body').animate({
                scrollTop: offSet
              }, 700);
        }
    } else {
        DisplayTerms(e);
    }
  });

  var initForm = function() {
    if ($('#customAcceptText').length) {
        $('#acceptanceText').html($('#customAcceptText').attr('data-text'));
    }
    var terms = $('#customTermsPath').attr('data-terms') + ' .bucket';
    $( "#agreement" ).load(terms, function(){
      $('section.section_padding').css('padding', '0px');
      $('div.text.parbase.section').css('margin-bottom', '0px');
      $('h1').css('margin-bottom', '0px');
    });
  }

  /* END DOWNLOAD ACTION SECTION */

  if ($('.dropdown').length) {
    $('#download_button').prop('disabled', true);
    $('#download_button').addClass('disabled');
  } else {
    $('input[id=downloadType]').val('asset');
  }
  hideSelects();
  initForm();
  showLabel();
});

