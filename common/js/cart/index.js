var toggleOption = function() {
	$('.option-toggle dt').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('close');
		$(this).parent().find('dd').slideToggle();
	});
}
var calcAmount = function(elem) {
	var $parent = $(elem).parents('.box-optional-row');
	var unit = parseInt($parent.find('.select-box select').val());
	var rate = parseInt($parent.find('.rate').html().replace('$', ''), 10);
	$parent.find('.amount').html('$'+unit*rate);
}
var checkOption = function() {
	var checkBox = $('.option-check input[type="checkbox"]');
	
	$.each(checkBox, function(index, val) {
		if($(this)[0].name === 'optional_service[]') {
			calcAmount($(this));
		}
		if($(this)[0].checked) {
			$(this).parents('.box-optional-row').addClass('checked');
		} else {
			$(this).parents('.box-optional-row').removeClass('checked');
		}
	});
	
	$(document).on('change', '.box-optional-row.checked .select-box select', function(event) {
		event.preventDefault();
		calcAmount($(this));
		totalList();
	});
	
	checkBox.on('change', function(event) {
		event.preventDefault();
		if($(this)[0].name === 'optional_service[]') {
			calcAmount($(this));
		}
		totalList();
		if($(this)[0].checked) {
			$(this).parents('.box-optional-row').addClass('checked');
		} else {
			$(this).parents('.box-optional-row').removeClass('checked');
		}
	});
}

var toggleQuestion = function() {
	$('.box-question-list dt').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('close');
		$(this).parent().find('dd').slideToggle();
	});
}

var totalList = function() {
	var option_value = $('.box-optional .option-toggle dd');
	var transfer_option = $('.box-optional .option-check input[name="transfer_option[]"]:checked');
	var optional_service = $('.box-optional .option-check input[name="optional_service[]"]:checked');
	var _list_item = '';
	var list_item_cart = $('.box-total .list-item-cart');
	
	$.each(option_value, function(index, val) {
		_list_item += '<li><p class="name-item">'+$(this).html()+'</p><p class="price-item">$35</p></li>';
		list_item_cart.html(_list_item);
	});
	$.each(transfer_option, function(index, val) {
		var _price = $(this).parents('.box-optional-row').find('.amount').html();
		_list_item += '<li><p class="name-item">'+$(this)[0].value+'</p><p class="price-item">'+_price+'</p></li>';
		list_item_cart.html(_list_item);
	});
	$.each(optional_service, function(index, val) {
		var _price = $(this).parents('.box-optional-row').find('.amount').html();
		_list_item += '<li><p class="name-item">'+$(this)[0].value+'</p><p class="price-item">'+_price+'</p></li>';
		list_item_cart.html(_list_item);
	});
}

var clickGiftcode = function() {
	$("#giftcodeTxt").click(function(){
		if ( $(this).text() == 'Do you have a gift code to redeem ?' ) {
			$(this).addClass('text-change');
			$('#giftcodeTxt').text('Enter gift code or promo code');
			$(this).next('.form-group').slideToggle();
		}
	});
}

var removeCartItem = function() {
	$('.remove-link a').on('click', function() {
		$(this).parents('.box-sell').remove();
	});
}

var popupInit = function() {
	$('.open-popup').magnificPopup({
		type:'inline',
		midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		removalDelay: 800, 
		mainClass: 'mfp-fade',
		callbacks: {
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
	});
	
	$('.btn-add-to-cart').magnificPopup({
		type:'inline',
		midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		removalDelay: 800, 
		mainClass: 'mfp-fade',
		callbacks: {
			beforeOpen: function() {

			},
		}
	});
	
	$('.btn-popup-close').on('click', function(e) {
		e.preventDefault();
		$.magnificPopup.close();
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

var ajaxOptionBooking = function() {
	var $btn_submit = $('.booking_btn');
	var ajax_url = '/ajax_url';
	$btn_submit.on('click', function(event) {
		var url = '';
		var loader = $(this).parents('.popup').find('.loader');
		var table_data_ajax = $(this).parents('.popup').find('.table-data-ajax');
		var type = $(this).parents('form').find('input[name="type_booking"]').val();

		// show loading
		loader.show();
		if(type == 'tour') {
			url = '/common/inc/table_data_tour.html';
		} else {
			url = '/common/inc/table_data_hotel.html'
		}
		$.ajax({
			url: url,
			success: function(data) {
				setTimeout(function() {
					loader.hide();
					
					table_data_ajax.html(data);

				}, 3000);
			}
		});
		event.preventDefault();
	});
	
	$('.btn-close').on('click', function(e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
}

$(document).ready(function() {
	toggleOption();
	checkOption();
	toggleQuestion();
	clickGiftcode();
	removeCartItem();
	popupInit();
	dlToggle();
	ajaxOptionBooking();
});
