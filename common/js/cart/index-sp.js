var toggleOption = function() {
	$('.option-toggle dt').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('close');
		$(this).parent().find('dd').slideToggle();
	});
}

var toggleQuestion = function() {
	$('.box-question-list dl dt').on('click', function(event) {
			event.preventDefault();
			$(this).toggleClass('close');
			$(this).next().slideToggle();
	});
}

var checkIpt = function() {
	var _checked = $('.check_opt');
	_checked.on('click', function(){
		if ($(this).is(':checked')) {
			$(this).parents('.col-01').next().addClass('ipt_check');
		} else {
			$(this).parents('.col-01').next().removeClass('ipt_check');
		}
	});
}

var ajaxOptionBooking = function() {
	var $btn_submit = $('.booking_btn-rs');
	var ajax_url = '/ajax_url';
	$btn_submit.on('click', function(event) {
		event.preventDefault();
		var pos = $('.rs-search').offset().top - 20;
		$('.loader').show();
		var rsBefore = $(this).parents('.service-popup').find('.rs-before');
		var rsAfter = $(this).parents('.service-popup').find('.rs-after');
		setTimeout(function() {
			$('.loader').hide();
			rsBefore.hide();
			rsAfter.show();
			$('html, body').stop(300).animate({
				scrollTop: pos
			}, 500);
		}, 3000);
		// $.ajax({
		// 	url: ajax_url,
		// 	data: {
		// 	  format: 'json'
		// 	},
		// 	dataType: 'json',
		// 	beforeSend: function() {
		// 		$('#loader').show();
		// 	},
		// 	success: function(data) {
		// 	  $('#loader').hide();
		// 	}
		// });
	});
}

var anchorSmooth = function() {
	$('.scroll-a').each(function(index,val) {
		$(this).on('click',function(event) {
			event.preventDefault();
			var target = $(this).parents('.service-popup').find('.search-box');
			$('html, body').stop(300).animate({
				scrollTop: $(target).offset().top
			}, 1000);
		});
	})
}

var toggleQuestionPopup = function() {
	$('.popup-show-details .question-box dt').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('close');
		$(this).parent().find('dd').slideToggle();
	});
}

$(function($) {
	anchorSmooth();
	toggleOption();
	toggleQuestion();
	toggleQuestionPopup();
	checkIpt();
	ajaxOptionBooking();

	$(document).on('click', '.showDetailOption, .seemore a', function(e) {
		e.preventDefault();
		$(this).magnificPopup({
			type:'inline',
			midClick: true,
			mainClass: 'mfp-fade',
			// Delay in milliseconds before popup is removed
			removalDelay: 300,
			callbacks: {
				open: function() { 
					// $('.container').css('z-index', '-1');
				},
				close: function() {
					// $('.container').removeAttr("style");
				},
				beforeOpen: function() {
					$('.popup .list-photos').not('.slick-initialized').slick({
						dots: true,
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
				},
			 }
		}).magnificPopup('open');
	});

	$(document).on('click', '.btn-popup-close', function(e) {
		$.magnificPopup.close();
		e.preventDefault();
	});
})