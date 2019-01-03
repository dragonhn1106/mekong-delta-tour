var topBanner = function() {
	var banner = $('#top-banner');
	if(banner.find('.item').length > 1) {
		banner.slick({
			dots: false,
			autoplay: true,
			autoplaySpeed: 2000,
		  infinite: true,
		  speed: 500,
		  fade: true,
		  arrows: false,
		  prevArrow: '<div class="slick-arrow"><span class="arrow-prev"><i class="fa fa-chevron-left"></i></span></div>',
		  nextArrow: '<div class="slick-arrow"><span class="arrow-next"><i class="fa fa-chevron-right"></i></span></div>',
		  cssEase: 'linear',
		});
	}
}

var acrdSidebar = function() {
	$('.item-toggle .tl').each(function(index, el) {
		$(this).on('click',function(event) {
			$(this).toggleClass('hide');
			$(this).next().slideToggle();
		});
	});
}


$(document).ready(function() {
	topBanner();
	acrdSidebar();
});


