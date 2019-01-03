var bannerSlider = function() {
	$('#product-photos').slick({
			dots: false,
			autoplay: true,
			autoplaySpeed: 2000,
		  infinite: true,
		  speed: 500,
		  fade: true,
		  arrows: true,
		  prevArrow: '<div class="slick-arrow"><span class="arrow-prev"><i class="fa fa-angle-left"></i></span></div>',
		  nextArrow: '<div class="slick-arrow"><span class="arrow-next"><i class="fa fa-angle-right"></i></span></div>',
		  cssEase: 'linear',
	});
}

var dlToggle = function() {
	var _elem = $('.question-box dl dt');
	_elem.on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('close');
		$(this).parent().find('dd').slideToggle();
	});
}

var ratePercent = function() {
	var $elem = $('#ratePercent li .num-rate');
	$.each($elem, function(index, val) {
		var _per = parseFloat($(this).html()) * 10;
		$(this).parent().find('.skills span').css({
			'width': _per+'%'
		})
	});
}

var anchorSmooth = function() {
	$('.anchor').each(function(index,val) {
		$(this).on('click',function(event) {
			event.preventDefault();
			var _controltab_h = $('.control-tab').height();
			var target = $(this).attr('href');
			$('html, body').stop(300).animate({
          scrollTop: $(target).offset().top - _controltab_h - 20
      }, 1000);
		});
	})
}

var setActive = function() {
	$('.control-tab .anchor').each(function(index,val) {
		var target = $(this).attr('href');
		var topTarget = $(target).offset().top - 67;
		var bottomTarget = topTarget + $(target).outerHeight();
		var scrPos = $(window).scrollTop();
		if(scrPos > topTarget && scrPos < bottomTarget) {
			$(this).addClass('active');
		}
		else {
			$(this).removeClass('active')  
		}
	})
}

var fixedTab = function() {
	var target = $('.product-entry-photos');
	var tab_panel = $('.control-tab');
	var targetHeight = target.offset().top + target.outerHeight();
	var scrPos = $(window).scrollTop();
	if(scrPos > targetHeight) {
		tab_panel.addClass('fixed');
	}
	else {
		tab_panel.removeClass('fixed');
	}
}

var fixedTabPanel = function() {
	var tab_panel = $('.control-tab');
	var offset_tab_panel = tab_panel.offset().top;
	var tab_panel_height = tab_panel.outerHeight();
	var main_content = $('.main-content');

	if($(window).scrollTop() >= offset_tab_panel + tab_panel_height + 30) {
		main_content.css({'padding-top': tab_panel_height+'px'});
		tab_panel.addClass('fixed');
	} else {
		tab_panel.removeClass('fixed');
		main_content.removeAttr('style')
	}
	$(window).on('scroll', function() {
		if($(window).scrollTop() >= offset_tab_panel + tab_panel_height + 30) {
			main_content.css({'padding-top': tab_panel_height+'px'});
			tab_panel.addClass('fixed');
		} else {
			tab_panel.removeClass('fixed');
			main_content.removeAttr('style')
		}
	});
}

var ajaxOptionBooking = function() {
	var $btn_submit = $('#booking_btn');
	var ajax_url = '/ajax_url';
	$btn_submit.on('click', function(event) {
		var tab_panel_height = $('.control-tab').outerHeight();
		var pos = $('.option-booking').offset().top - tab_panel_height - 20;
		// show loading
		$('#loader').show();

		$.ajax({
			url: '/product/table_data_hotel.html',
			success: function(data) {
				setTimeout(function() {
					$('#loader').hide();
					
					$('#table-data-ajax').html(data);

					$('html, body').stop(300).animate({
						scrollTop: pos
					}, 500);
				}, 3000);
			}
		});
		event.preventDefault();
	});
}

var showMoreReviews = function() {
	var $show_more_reviews = $('#show_more_reviews');
	$show_more_reviews.on('click', function(event) {
		event.preventDefault();
		var _rvclient = '<div class="rvclient">';
        _rvclient += '<div class="rate-score-left">';
        _rvclient += '<div class="rateboxscore">';
        _rvclient += '<span>9.6</span>';
				_rvclient += '</div>';
				_rvclient += '<p>Ms.Aleksandra Ostojic</p>';
				_rvclient += '<div class="addandtime">';
				_rvclient += '<span>Ottawa, Canada</span><br>';
				_rvclient += '<span>3 May, 2017</span>';
				_rvclient += '</div>';
				_rvclient += '</div>';
				_rvclient += '<div class="ratecomment">';
				_rvclient += '<span class="titcomment">"Enjoyable holiday "</span>';
				_rvclient += '<p>Amazingly well organized, good value, pleasure to deal with everyone we met, great itinerary. Your services were 10/10 and were perfect. All we could ask from a tour company. Everything was super well organized and everyone was great. The itinerary was fantastic, and we would not change anything! </p>';
				_rvclient += '</div>';
				_rvclient += '</div>';
				_rvclient += '</div>';
		$('#rvclient-list').append(_rvclient);
		$('#rvclient-list').append(_rvclient);
		$('#rvclient-list').append(_rvclient);

		$(this).hide();
	});
}

var slideShowModal = function() {
	$('.list-slide-show li img').on('click', function(event) {
		event.preventDefault();
		var _src = $(this).attr('src');
		$('.slide-show-large').find('img').attr({'src': _src});
	});
}

$(window).on('load scroll',function() {
	setActive();
	fixedTab();
})

$(document).ready(function() {
	slideShowModal();
	anchorSmooth();

	ratePercent();
	dlToggle();
	bannerSlider();
	ajaxOptionBooking();
	showMoreReviews();

	$('#product-photos').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-fade',
		// Delay in milliseconds before popup is removed
		removalDelay: 500,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
	$('.btn-more-photo').on('click', function(e) {
		e.preventDefault();
		$('#product-photos').magnificPopup('open');
	});

	$(document).on('click', '.showDetailOption', function(e) {
		e.preventDefault();
		$(this).magnificPopup({
			type:'inline',
			midClick: true,
			mainClass: 'mfp-fade',
			// Delay in milliseconds before popup is removed
			removalDelay: 300,
		}).magnificPopup('open');
	});
});

jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

    btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
        var newVal = oldValue;
    } else {
        var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
        var newVal = oldValue;
    } else {
        var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
    });

});