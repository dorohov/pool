$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();r.indexOf("msie")!=-1&&(e="msie"),r.indexOf("trident")!=-1&&(e="msie"),r.indexOf("konqueror")!=-1&&(e="konqueror"),r.indexOf("firefox")!=-1&&(e="firefox"),r.indexOf("safari")!=-1&&(e="safari"),r.indexOf("chrome")!=-1&&(e="chrome"),r.indexOf("chromium")!=-1&&(e="chromium"),r.indexOf("opera")!=-1&&(e="opera"),r.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(a){a.preventDefault(),console.log("body trigger:click.fecss.scrollto");var e=$(this),t=$(e.attr("href")).eq(0),r=parseInt(e.attr("data-scrollto-diff"))||0,o=parseInt(e.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:t.offset().top+r},o),$(".navbar__nav .navbar__nav-item").removeClass("is--active"),e.parent().addClass("is--active")}),$(document.body).on("click",".navbar__collapse.is--open .navbar__nav-link.scrollto",{},function(a){(screenJS.isXS()||screenJS.isSM()||screenJS.isMD())&&(a.preventDefault(),$(".navbar__hamburger-card").trigger("click"))});
$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}),$(".form__block").validationEngine("attach",{promptPosition:"bottomLeft",scroll:!1});
$("img").addClass("img-responsive");
var humb=$(".navbar__hamburger-card"),toggle_navbar=humb.data("toggle-nav"),toggle_body=humb.data("body"),toggle_collapse=humb.data("collapse-nav");humb.on("click",function(){$(toggle_body).toggleClass("is--open-navbar"),$(toggle_navbar).toggleClass("is--open"),$(toggle_collapse).toggleClass("is--open"),$(this).toggleClass("is--active")}),$(document.body).on("click",function(a){0==$(a.target).closest(".navbar__block").length&&($(toggle_body).removeClass("is--open-navbar"),$(toggle_navbar).removeClass("is--open"),$(toggle_collapse).removeClass("is--open"),humb.removeClass("is--active"))});var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.tabs__nav a[href="'+url+'"]').parent().addClass("is--active"),$('[data-azbn-toggle="dropdown"]').on("click",function(a){$(".azbn-dropdown").toggleClass("open")}),$('.navbar-aside__dropdown [data-toggle="dropdown"]').on("click",function(a){a.preventDefault(),a.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open")}),$(".azbn__search-dropdown").on("shown.bs.dropdown",function(a){$(".azbn__search-input").focus()});
"use strict";$(function(){var s=$('[data-slider-slick="slick-header"]'),i=$('[data-slider-slick="slick-reviews"]'),e=$('[data-slider-slick="slick-gallery"]'),o=$('[data-slider-slick="slick-catalog"]'),l=$('[data-slider-slick="slick-catalog-nav"]'),t="/wp-content/themes/azbn7theme",n='<button type="button" class="btn-nav__item  is--nav  is--slick  is--prev"><span class="sr-only">Предыдущий слайд</span><svg class="icon-svg icon-icon-prev" role="img"><use xlink:href="'+t+'/img/svg/sprite.svg#icon-prev"></use></svg></button>',r='<button type="button" class="btn-nav__item  is--nav  is--slick  is--next"><span class="sr-only">Следующий слайд</span><svg class="icon-svg icon-icon-next" role="img"><use xlink:href="'+t+'/img/svg/sprite.svg#icon-next"></use></svg></button>',a=".content-block__slick-item",c=$(".slick-num");i.on("init reInit afterChange",function(s,i,e,o){var l=(e?e:0)+1;$(this).find(c).html("<div><span>"+l+"</span>/"+i.slideCount+"</div>")}),s.slick({slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1,dots:!1,autoplay:!0,autoplaySpeed:4e3,prevArrow:n,nextArrow:r,fade:!0}),i.slick({slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!0,dots:!1,slide:a,prevArrow:n,nextArrow:r,fade:!0}),o.slick({slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1,fade:!0,asNavFor:l}),l.slick({slidesToShow:3,slidesToScroll:1,infinite:!0,prevArrow:n,nextArrow:r,centerMode:!0,focusOnSelect:!0,asNavFor:o,responsive:[{breakpoint:1600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:1025,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}}]}),o.on("init",function(s,i,e){$(".slick-cloned .card-item__preview").removeAttr("data-fancybox")}),e.slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!0,infinite:!0,prevArrow:n,nextArrow:r,responsive:[{breakpoint:1600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1400,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:1025,settings:{arrows:!1,slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{arrows:!1,slidesToShow:2,slidesToScroll:2}},{breakpoint:565,settings:{arrows:!1,slidesToShow:1,slidesToScroll:1}}]})});
$(".text__block table").addClass("table table-bordered"),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled"),$(".text__block .table.table-bordered").wrap('<div class="table-responsive"></div>');