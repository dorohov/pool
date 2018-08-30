'use strict';
$(function() { 
	var header = $('[data-slider-slick="slick-header"]');	
	var reviews = $('[data-slider-slick="slick-reviews"]');	
	var gallery = $('[data-slider-slick="slick-gallery"]');	
	var catalog = $('[data-slider-slick="slick-catalog"]');	
	var catalog_nav = $('[data-slider-slick="slick-catalog-nav"]');	
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
	//var CMS__TPL_PATH = '/esbvolga';  
	//var CMS__TPL_PATH = '';  
	//local
	var prevArrow = '<button type="button" class="btn-nav__item  is--nav  is--slick  is--prev"><span class="sr-only">Предыдущий слайд</span><svg class="icon-svg icon-icon-prev" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#icon-prev"></use></svg></button>';
	var nextArrow = '<button type="button" class="btn-nav__item  is--nav  is--slick  is--next"><span class="sr-only">Следующий слайд</span><svg class="icon-svg icon-icon-next" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#icon-next"></use></svg></button>';	
	
	var slide_card = '.content-block__slick-item';
	var count_num = $('.slick-num');
    reviews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $(this).find(count_num).html('<div><span>' + i + '</span>/' + slick.slideCount + '</div>');
    });
    
	header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		dots: false,
		//infinite: true, 
		autoplay: true,
  		autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true
	});
	reviews.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
        slide: slide_card,
		//infinite: true, 
		//autoplay: true,
  		//autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true
	});
	catalog.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		fade: true,
  		asNavFor: catalog_nav
	});
	catalog_nav.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		centerMode: true,
		focusOnSelect: true,
  		asNavFor: catalog,
  		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
		    },
		    {
				breakpoint: 1025,
				settings: {					
					slidesToShow: 2,
					slidesToScroll: 1,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
		    }
		]
	});
	
	catalog.on('init', function(event, slick, direction){
		$('.slick-cloned .card-item__preview').removeAttr('data-fancybox');
	});
	/*gallery.on('init', function(event, slick, direction){
		$('.slick-cloned .card-item__preview').removeAttr('data-fancybox');
	});*/
	
	gallery.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: true,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 1400,
				settings: {
					//dots: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 1025,
				settings: {					
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					//dots: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 565,
				settings: {
					arrows: false,
					//dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
}); 