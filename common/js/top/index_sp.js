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
		  prevArrow: '<div class="slick-arrow"><span class="arrow-prev"><i class="fa fa-angle-left"></i></span></div>',
		  nextArrow: '<div class="slick-arrow"><span class="arrow-next"><i class="fa fa-angle-right"></i></span></div>',
		  cssEase: 'linear',
		});
	}
}

var coundownTime = function() {
	var listTime = $('#table-last-deal .time-end-in');
	$.each(listTime, function(index, val) {
		if($(this).html() !== '') {
			var h = null;
	    var m = null;
	    var s = null;
	    var $h = $(this).find('.h');
	    var $m = $(this).find('.m');
	    var $s = $(this).find('.s');
	 
	    var timeout = null;

	    start();

	    function start() {
	    	if (h === null) {
	        h = parseInt($h.html());
	        m = parseInt($m.html());
	        s = parseInt($s.html());
		    }
		    if (s === -1) {
	        m -= 1;
	        s = 59;
	    	}
	    	if (m === -1) {
	        h -= 1;
	        m = 59;
	    	}
	    	if (h == -1) {
	        clearTimeout(timeout);
	        stop();
	        return false;
	    	}
	    	$h.html(h);
	    	$m.html(m);
	    	$s.html(s);

	    	timeout = setTimeout(function() {
		      s--;
		      start();
		    }, 1000);
	    }
		}
	});
}

$(document).ready(function() {
	topBanner();
	coundownTime();
});


