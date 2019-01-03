var dropdownMenu = function () {
	// $('.main-head .dropdown .list-sub li').eq(0).find('a').addClass('active');
	// $('.main-head .main-sub .inner-main-sub').eq(0).show();
	$('.main-head .dropdown').each(function (index, val) {
		$(this).next().find('.list-sub li').eq(0).find('a').addClass('active');
		$(this).next().find('.main-sub .inner-main-sub').eq(0).show();
		$(this).on('click', function (e) {
			e.preventDefault();
			if (!$(this).hasClass('active')) {
				// $(this).find('.dropdown').removeClass('active')
				// (this).find('.dropdown-menu').hide();
				$('.main-head .dropdown').removeClass('active');
				$('.main-head .dropdown-menu').hide();
				$(this).addClass('active');
				$(this).next().css('display', 'flex');
			} else {
				$(this).next().find('.list-sub li').eq(0).find('a').addClass('active');
				$(this).next().find('.main-sub .inner-main-sub').eq(0).show();
				$(this).removeClass('active');
				$(this).next().hide();
			}
		});

		$('.container').on('click', function (event) {
			if (!$(event.target).is('.container .nav .item-drop *')) {
				$('.main-head .dropdown').removeClass('active')
				$('.main-head .dropdown-menu').hide();
			}
			//   $('.main-head .dropdown').each(function(index,val) {
			// 	$(this).next().find('.list-sub li').eq(0).find('a').addClass('active');
			// 	$(this).next().find('.main-sub .inner-main-sub').eq(0).show();
			// });
		});
	})
	$('.main-head .dropdown-menu .list-sub li a').each(function (index, val) {
		$(this).on('click', function (e) {
			e.preventDefault();
			var href = $(this).attr('href');
			// $(this).parents('.dropdown-menu').addClass('active');
			$(this).parents('.dropdown-menu').find('.list-sub li a').removeClass('active');
			// $('.main-head .dropdown-menu .list-sub li a').removeClass('active');
			$(this).parents('.dropdown-menu').find('.inner-main-sub').hide();
			$(this).addClass('active');
			$(href).show();
		})
	});
}

var showLoginForm = function () {
	$('#login-form').on('click', function (e) {
		e.preventDefault();
		$('html').addClass('show');
		$('.modal-login').addClass('open');
		$('.modal-login-dialog').animate({
			top: '10%'
		}, 700)
	});
	$('#modal-login-bg, .modal-login .close').on('click', function (event) {
		$('html').removeClass('show');
		$('.modal-login').fadeOut(500, function () {
			$(this).removeAttr('style').removeClass('open')
			$('.modal-login-dialog').removeAttr('style');
		});
	});
}
var showNavigationMobile = function () {
	$('.btn-menu-hamburger').on('click', function () {
		$('.board-menu-sp').toggleClass('show');
		$('body').toggleClass('show');
		$('#mask').show();
	});
	$('#mask').on('click', function (event) {
		$('.board-menu-sp').removeClass('show');
		$('body').removeClass('show');
		$(this).hide();
	})

}

var datePickerInit = function (elem) {
	var $elem = $(elem);
	$elem.each(function (index, el) {
		var _format = $(this).data('format');
		var _placeholder = $(this).data('placeholder');
		var _type = $(this).data('picker-type') ? $(this).data('picker-type') : 0;

		if (_format === '' || typeof _format === 'undefined') {
			_format = "mm/dd/yy";
		}
		if (_type === 0) {
			$(this).datepicker({
				numberOfMonths: 2,
				changeYear: true,
				changeMonth: true,
				minDate: 0,
				dateFormat: _format,
				yearRange: "-100:+20",
				showButtonPanel: true,
			}).datepicker('setDate', 'today');
		} else {
			var datepickersOpt = {
				numberOfMonths: 2,
				changeYear: true,
				changeMonth: true,
				minDate: 0,
				dateFormat: _format,
				yearRange: "-100:+20",
				showButtonPanel: true,
			};
			if ($(this).attr('id') === 'day_check_in' || $(this).attr('id') === 'day_check_out') {
				$("#day_check_in").datepicker($.extend({
					onSelect: function () {
						var minDate = $(this).datepicker('getDate');
						minDate.setDate(minDate.getDate());
						$("#day_check_out").datepicker("option", "minDate", minDate);
					}
				}, datepickersOpt));

				$("#day_check_out").datepicker($.extend({
					onSelect: function () {
						var maxDate = $(this).datepicker('getDate');
						maxDate.setDate(maxDate.getDate());
						$("#day_check_in").datepicker("option", "maxDate", maxDate);
					}
				}, datepickersOpt));
			} else {
				$(this).datepicker(datepickersOpt);
			}
		}
	});
}

var resultPassenger = function () {
	var $passenger_text = $('#passenger_text');
	var _adult = parseInt($('input[name="adult"]').val()),
		_student = parseInt($('input[name="student"]').val()),
		_youth = parseInt($('input[name="youth"]').val()),
		_children = parseInt($('input[name="children"]').val()),
		_infants = parseInt($('input[name="infants"]').val());
	var _result = '';
	var _separator = ' + ';

	if (_adult > 0 && _student > 0 && _youth > 0 || _adult > 0 && _children > 0 && _infants > 0 || _adult > 0 && _student > 0 && _children > 0 || _adult > 0 && _student > 0 && _infants > 0 || _adult > 0 && _youth > 0 && _children > 0 || _adult > 0 && _youth > 0 && _infants > 0) {
		_result = _adult + _children + _infants + _student + _youth;
		$passenger_text.html(_result + ' Passenger');
	} else {
		if (_adult > 0) {
			_result += 'Adult x ' + _adult;
		}
		if (_student > 0) {
			_result += ' Students x ' + _student;
		}
		if (_youth > 0) {
			_result += ' Youth x ' + _youth;
		}
		if (_children > 0) {
			_result += ' Children x ' + _children;
		}
		if (_infants > 0) {
			_result += ' Infants x ' + _infants;
		}
		$passenger_text.html(_result);
	}
}


var disableMinusNumberBox = function (elem) {
	var _val = parseInt($(elem).val()),
		_min = parseInt($(elem).attr('min'));
	if (_val > _min) {
		$(elem).parent().find('.minus').removeClass('disable');
	} else {
		$(elem).parent().find('.minus').addClass('disable');
	}
}

var searchBoxControl = function () {
	var datepickersOpt = {
		numberOfMonths: 2,
		changeYear: true,
		changeMonth: true,
		minDate: 0,
		dateFormat: 'mm/dd/yy',
		yearRange: "-100:+20",
		showButtonPanel: true
	}

	$("#day_of_arrival").datepicker($.extend({
		onSelect: function () {
			var minDate = $(this).datepicker('getDate');
			minDate.setDate(minDate.getDate());
			$("#day_to_go").datepicker("option", "minDate", minDate);
		}
	}, datepickersOpt)).datepicker('setDate', 'today');

	$("#day_to_go").datepicker($.extend({
		onSelect: function () {
			var maxDate = $(this).datepicker('getDate');
			maxDate.setDate(maxDate.getDate());
			$("#day_of_arrival").datepicker("option", "maxDate", maxDate);
		}
	}, datepickersOpt)).datepicker('setDate', 'today');

	$('.search-box .tab-pannel .item a').on('click', function (event) {
		event.preventDefault();
		$('.search-box .tab-pannel .item a').removeClass('active');
		$(this).addClass('active');
		var _href = $(this).attr('href');
		$('.tab-item').hide();
		$(_href).fadeIn();
	});

	$('#ticket_type input[name="ticket_type"]').on('change', function (event) {
		event.preventDefault();
		var _val = $(this).val();
		var ticket_type_roundtrip = $('#ticket_type_roundtrip');
		if (_val == 2) {
			ticket_type_roundtrip.show();
		} else {
			ticket_type_roundtrip.hide();
		}
	});

	$('#passenger_text').on('focus', function () {
		$(this).parent().find('.input-dropdown').addClass('show');
		$(this).parent().find('.input-dropdown-mask').addClass('show');
	});

	$('.input-dropdown-mask').on('click', function (event) {
		if ($('.input-group .input-dropdown').hasClass('show')) {
			event.preventDefault();
			$('.input-dropdown').removeClass('show');
			$('.input-dropdown-mask').removeClass('show');
		}
	});

	$('.number-box .number-btn').on('click', function (event) {
		event.preventDefault();
		if (!$(this).hasClass('disable')) {
			var $input = $(this).parent().find('input');
			var _val = parseInt($input.val());
			var _min = parseInt($input.attr('min'));
			if ($(this).hasClass('plus')) {
				_val++;
			} else {
				if (_val > _min) {
					_val--;
				}
			}
			$input.val(_val);
			disableMinusNumberBox($input);
			resultPassenger();
		}
	});
}

var favoriteAction = function () {
	$('.btn-favorite').on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass('favorited');
		// var x = document.getElementsByClassName('arrow_box');
		// var y = '';
		// for (i = 0; i < x.length; i++) {
		// 	y = x[i];
		// };
		// console.log(y);

		// $(y).toggleClass('hide-show')
		// more action here
	});
}

var frmRange = function (elm, out, vStep, vMin, vMax, sMin, sMax, svl, type, txt) {
	var vlMin, vlMax;
	$(elm).slider({
		range: true,
		min: vMin,
		max: vMax,
		step: vStep,
		values: [sMin, sMax],
		create: function () {
			if (type === 0) {
				vlMin = txt + sMin;
				vlMax = txt + sMax;
			} else {
				vlMin = sMin + ' ' + txt;
				vlMax = sMax + ' ' + txt;
			}
			if (svl) {
				$(this).find('.ui-slider-handle').eq(0).html('<span>' + vlMin + '</span>');
			}
			$(out).val(vlMin + ' - ' + vlMax);
		},
		slide: function (event, ui) {
			if (type === 0) {
				vlMin = txt + ui.values[0];
				vlMax = txt + ui.values[1];
			} else {
				vlMin = ui.values[0] + ' ' + txt;
				vlMax = ui.values[1] + ' ' + txt;
			}
			if (svl) {
				$(this).find('.ui-slider-handle').eq(0).html('<span>' + vlMin + '</span>');
			}
			$(out).val(vlMin + ' - ' + vlMax);
		},
		change: function (event, ui) {
			if (type === 0) {
				vlMin = txt + ui.values[0];
				vlMax = txt + ui.values[1];
			} else {
				vlMin = ui.values[0] + ' ' + txt;
				vlMax = ui.values[1] + ' ' + txt;
			}
			$(out).val(vlMin + ' - ' + vlMax).trigger('change');
		}
	});
}

$(function () {
	disableMinusNumberBox('.number-box input[type="number"]');
	datePickerInit('.datepicker');
	showLoginForm();
	dropdownMenu();
	searchBoxControl();
	favoriteAction();
	showNavigationMobile();
})