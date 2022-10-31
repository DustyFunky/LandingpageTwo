$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:3,
		easing:'ease',
		infinite: true,
		autoplay:true,
		autoplaySpeed:1500,
		speed:1000,
		pauseOnDotsHover:true,
		draggable:false,

	});
});