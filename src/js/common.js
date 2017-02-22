$(function(){
	$('.faq-item .name').click(function() {
		$(this).toggleClass('active');
		$(this).next('.faq-item .text').slideToggle();
	});
	$('.menubg').click(function() {
		$('.header .top-menu').removeClass('opened');
		$('.menubg').fadeOut();
	});
	$('.header .menu-button').click(function() {
		$('.header .top-menu').addClass('opened');
		$('.menubg').fadeIn();
	});
	$('.popupbg .bg').click(function() {
		$('.popupbg').fadeOut();
	});
	$('.index-page-items .btn').click(function() {
		$('.popupbg').fadeIn();
	});
	$('.soft-slider .list').slick({
		dots: true,
		arrows: false
	});
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: false,
	  focusOnSelect: true
	});
	$('.slider-for2').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  asNavFor: '.slider-nav2'
	});
	$('.slider-nav2').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for2',
	  dots: false,
	  arrows: false,
	  focusOnSelect: true
	});
	$('.slider-for3').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  asNavFor: '.slider-nav3'
	});
	$('.slider-nav3').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for3',
	  dots: false,
	  arrows: false,
	  focusOnSelect: true
	});
	$('.slider-for4').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  asNavFor: '.slider-nav4'
	});
	$('.slider-nav4').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for4',
	  dots: false,
	  arrows: false,
	  focusOnSelect: true
	});
	$('.index-page-slider').slick({
		dots: true,
		arrows: false
	});
});