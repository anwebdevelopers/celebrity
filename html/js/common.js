
$(function() {

	var time = new Date("2016-11-01");
	// var time = 0
     $('#defaultCountdown').countdown({until: time, format: 'dHMS'});

	//Адаптивный слайдер

	$(".advertising__slider").owlCarousel({
		loop: true,
		autoplay: true,
		items: 1,
		nav:true,
		navText: '',
	});
	$(".advertising__slider-button-right").click(function(){
		$(".advertising__slider").trigger("next.owl.carousel");
	});
	$(".advertising__slider-button-left").click(function(){
		$(".advertising__slider").trigger("prev.owl.carousel");
	});

	$(".about-speak__slider").owlCarousel({
		loop: true,
		autoplay: true,
		items: 1,
		nav:true,
		navText: '',
	});
	$(".about-speak__slider-button-right").click(function(){
		$(".about-speak__slider").trigger("next.owl.carousel");
	});
	$(".about-speak__slider-button-left").click(function(){
		$(".about-speak__slider").trigger("prev.owl.carousel");
	});

	$(".about-talk__slider").owlCarousel({
		loop: true,
		// autoplay: true,
		// autoplayTimeout: 10000,
		items: 1,
		nav:true,
		autoHeight: true,
		navText: '',
		smartSpeed: 800
	});
	$(".about-talk__slider-button-right").click(function(){
		$(".about-talk__slider").trigger("next.owl.carousel");
	});
	$(".about-talk__slider-button-left").click(function(){
		$(".about-talk__slider").trigger("prev.owl.carousel");
	});

	//Выравнивание блоков по высоте

	$(".direction__item-position").equalHeights();

	//popup

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	// scroll To Id
	$(document).ready(function(){
		//$("a[href*='#']").mPageScroll2id();
		$("a[href='#invite']").mPageScroll2id();
		$("a[href='#speakers']").mPageScroll2id();
		$("a[href='#price']").mPageScroll2id();
		$("a[href='#objective']").mPageScroll2id();

	});

	$(window).ready(function() {
		var w = $(window).width();
        if(w > 768) {
		    $(".objective__box-left-col .objective__item").animated("fadeInLeft");
		    $(".objective__box-right-col .objective__item").animated("fadeInRight");
		    $(".participants__item").animated("zoomIn");
		    $(".plase__adress").animated("zoomIn");
		    $(".plase__logo").animated("zoomIn");
		    $(".program__item i").animated("rotateIn");
		    $(".themes__item span").animated("fadeInUp");
		    $(".speakers__item").animated("flipInY");
		    $(".facilities__title").animated("fadeInLeft");
		    $(".facilities__box").animated("fadeInRight");
		    $(".direction__item").animated("flipInY");
		};
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(window).ready(function() {
		$("#preloader__img").fadeOut();
		$("#preloader").delay(400).fadeOut("slow");
	});

});


