var bannerSlider = function() {
	$('#product-photos').slick({
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

var dlToggle = function() {
	var _elem = $('.toggle-box dl dt');
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

var ajaxOptionBooking = function() {
	var $btn_submit = $('#booking_btn');
	var ajax_url = '/ajax_url';
	$btn_submit.on('click', function(event) {
		event.preventDefault();
		var pos = $('.rs-search').offset().top - 20;
		$('#loader').show();

		$.ajax({
			url: '/product/sp_data_tour.html',
			success: function(data) {
				setTimeout(function() {
					$('#loader').hide();
					
					$('#data-load').html(data);

					$('html, body').stop(300).animate({
						scrollTop: pos
					}, 500);
				}, 3000);
			}
		});
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

var submitQuestion = function() {
	$('#submit_question').on('click', function(event) {
		event.preventDefault();
		$('#popup-question').toggleClass('show');
		$('#popup-question .form-popup-question').fadeIn();
	});

	$('#popup-question .mask, #popup-question #submit_question_02').on('click', function(event) {
		event.preventDefault();
		$('#popup-question .form-popup-question').fadeOut(300, function() {
			$('#popup-question').removeClass('show');
		});

	});
}

var textShowMore = function() {
	$('.txt-show-more').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('show_less');
		$(this).parent().parent().find('.txt-p').toggleClass('show_text');
	});
}

var anchorSmooth = function() {
	$('.anchor').each(function(index,val) {
		$(this).on('click',function(event) {
			event.preventDefault();
			var target = $(this).attr('href');
			$('html, body').stop(300).animate({
				scrollTop: $(target).offset().top
			}, 1000);
		});
	})
}

var showMoreServices = function() {
	$('.services-more-btn').on('click', function(event) {
		event.preventDefault();
		$(this).hide();
		$(this).parent().find('.services-more-content').slideToggle();
	});
}

$(document).ready(function() {
	showMoreServices();
	anchorSmooth();
	submitQuestion();
	slideShowModal();
	ratePercent();
	dlToggle();
	bannerSlider();
	ajaxOptionBooking();
	showMoreReviews();
	textShowMore();

	$('#product-photos').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
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

	$(document).on('click', '.info-room-show-more', function(e) {
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
