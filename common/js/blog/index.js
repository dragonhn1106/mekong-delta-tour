var topBanner = function() {
	var banner = $('#bnr-sld');
	if(banner.find('.item').length > 1) {
		banner.slick({
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
		    infinite: true,
		    speed: 500,
		    arrows: false
		});
	}
}


$(document).ready(function() {
	topBanner();
});


