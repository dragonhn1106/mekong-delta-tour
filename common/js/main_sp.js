
var dropdownMenu = function() {
	$('.main-head .dropdown').each(function(index,val) {
		$(this).on('click',function(e) {
			e.preventDefault();
			if(!$(this).hasClass('active')) {
				$('.main-head .dropdown').removeClass('active')
				$('.main-head .dropdown-menu').hide();
				$(this).toggleClass('active');
				$(this).next().slideToggle(300);
			}
			else {
				$(this).toggleClass('active');
				$(this).next().slideToggle(300);
			}
		});
		
		$('.container').on('click', function(event) {
			if (!$(event.target).is('.container .header-user-action .item-drop *')) {
				$('.main-head .dropdown').removeClass('active')
				$('.main-head .dropdown-menu').hide();
			} 
		});
	})
}

var showLoginForm = function() {
	$('#login-form').on('click', function(e) {
		e.preventDefault();
		$('html').addClass('show');
		$('.modal-login').addClass('open');
	});
	$('.modal-login-bg').on('click', function(event) {
		$('html').removeClass('show');
		$('.modal-login').removeClass('open');
	});
}
var showNavigationMobile = function() {
	$('.btn-menu-hamburger').on('click',function() {
		var sTop = $(window).scrollTop();
		$('.board-menu-sp').toggleClass('show');
		$('#main-board').toggleClass('show');
		$('body').toggleClass('show');
		$('.container').css('top', -sTop);
		$('#mask').show();
		$('#mask').on('click', function(event) {
			$('.board-menu-sp').removeClass('show');
			$('.main-board').removeClass('show');
			$('body').removeClass('show');
			$('.container').removeAttr('style');
			$(this).hide();
			$(window).scrollTop(sTop)
		})
	});
	
	$('.transfer-nav li a').on('click', function(event) {
		event.preventDefault();
		$(this).parent().find('.sub').toggleClass('show');
	});
	
	$('.main-board ul li a.has-sub-menu').on('click', function(event) {
		event.preventDefault();
		var _sub_menu_id = '#'+$(this).data('menu-id');
		$(_sub_menu_id).addClass('show');
	});
	$('.main-board .back').on('click', function(event) {
		event.preventDefault();
		$(this).parents('.main-board').removeClass('show')
	});
}

var datePickerInit = function(elem,type) {
	var $elem = $( elem );
	var day_check_out, day_check_in;
	$elem.each(function(index, el) {
		var _format = $(this).data('format');
		var _arialabel = $(this).data('placeholder') ? $(this).data('placeholder') : '';
		var _container = 'modal-datepicker';
		
		if(_format === '' || typeof _format === 'undefined') {
			_format = "mm/dd/yy";
		}
		
		if( $(this).attr('id') === 'day_check_in' ) {
			day_check_in = new Pikaday({
				field: $(this)[0],
				minDate: new Date(),
				format: _format,
				container: document.getElementById(_container),
				ariaLabel: _arialabel,
				keyboardInput: false,
				blurFieldOnSelect: true,
				onDraw() {
					$('#'+_container).parent().addClass('is-show');
				},
				onOpen() {
					
				},
				onSelect() {
					day_check_out.config({minDate: this.getDate()});
				},
				onClose() {
					$('#'+_container).parent().removeClass('is-show');
				}
			});
		} else if ( $(this).attr('id') === 'day_check_out' ) {
			day_check_out = new Pikaday({
				field: $(this)[0],
				minDate: new Date(),
				format: _format,
				container: document.getElementById(_container),
				ariaLabel: _arialabel,
				keyboardInput: false,
				blurFieldOnSelect: true,
				onDraw() {
					$('#'+_container).parent().addClass('is-show');
				},
				onOpen() {
					
				},
				onSelect() {
					
				},
				onClose() {
					$('#'+_container).parent().removeClass('is-show');
				}
			});
		} else {
			var pika = new Pikaday({
				field: $(this)[0],
				minDate: new Date(),
				format: _format,
				container: document.getElementById(_container),
				ariaLabel: _arialabel,
				// setDefaultDate: true,
				// defaultDate: new Date(),
				keyboardInput: false,
				blurFieldOnSelect: true,
				toString(date, format) {
					// you should do formatting based on the passed format,
					// but we will just return 'D/M/YYYY' for simplicity
					const day = date.getDate();
					const month = date.getMonth() + 1;
					const year = date.getFullYear();
					return `${day}/${month}/${year}`;
				},
				parse(dateString, format) {
					// dateString is the result of `toString` method
					const parts = dateString.split('/');
					const day = parseInt(parts[0], 10);
					const month = parseInt(parts[1], 10) - 1;
					const year = parseInt(parts[2], 10);
					return new Date(year, month, day);
				},
				onDraw() {
					$('#'+_container).parent().addClass('is-show');
				},
				onOpen() {
					
				},
				onSelect(date) {
					return this.getDate();
				},
				onClose() {
					$('#'+_container).parent().removeClass('is-show');
				}
			});
		}
	});
}

var resultPassenger = function() {
	var $passenger_text = $('#passenger_text');
	var _adult = parseInt($('input[name="adult"]').val()),
	_student = parseInt($('input[name="student"]').val()),
	_youth = parseInt($('input[name="youth"]').val()),
	_children = parseInt($('input[name="children"]').val()),
	_infants = parseInt($('input[name="infants"]').val());
	var _result = '';
	var _separator = ' + ';
	
	if(_adult > 0 && _student > 0 && _youth > 0 || _adult > 0 && _children > 0 && _infants > 0 || _adult > 0 && _student > 0 && _children > 0 || _adult > 0 && _student > 0 && _infants > 0 || _adult > 0 && _youth > 0 && _children > 0 || _adult > 0 && _youth > 0 && _infants > 0) {
		_result = _adult + _children + _infants + _student + _youth;
		$passenger_text.html(_result + ' Passenger');
	} else {
		if( _adult > 0 ) {
			_result += 'Adult x '+_adult;
		}
		if( _student > 0 ) {
			_result += ' Students x '+_student;
		}
		if( _youth > 0 ) {
			_result += ' Youth x '+_youth;
		}
		if( _children > 0 ) {
			_result += ' Children x '+_children;
		}
		if( _infants > 0 ) {
			_result += ' Infants x '+_infants;
		}
		$passenger_text.html(_result);
	}
}

var disableMinusNumberBox = function(elem) {
	var _val = parseInt($(elem).val()),
	_min = parseInt($(elem).attr('min'));
	if(_val > _min) {
		$(elem).parent().find('.minus').removeClass('disable');
	} else {
		$(elem).parent().find('.minus').addClass('disable');
	}
}

var searchBoxControl = function() {
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
		onSelect: function() {
			var minDate = $(this).datepicker('getDate');
			minDate.setDate(minDate.getDate());
			$("#day_to_go").datepicker( "option", "minDate", minDate);
		}
	}, datepickersOpt)).datepicker('setDate', 'today');
	
	$("#day_to_go").datepicker($.extend({
		onSelect: function() {
			var maxDate = $(this).datepicker('getDate');
			maxDate.setDate(maxDate.getDate());
			$("#day_of_arrival").datepicker( "option", "maxDate", maxDate);
		}
	}, datepickersOpt)).datepicker('setDate', 'today');
	
	$('.search-box .tab-pannel .item a').on('click', function(event) {
		event.preventDefault();
		$('.search-box .tab-pannel .item a').removeClass('active');
		$(this).addClass('active');
		var _href = $(this).attr('href');
		$('.tab-item').hide();
		$(_href).fadeIn();
	});
	
	$('#ticket_type input[name="ticket_type"]').on('change', function(event) {
		event.preventDefault();
		var _val = $(this).val();
		var ticket_type_roundtrip = $('#ticket_type_roundtrip');
		if(_val == 2) {
			ticket_type_roundtrip.show(); 
		} else {
			ticket_type_roundtrip.hide();
		}
	});
	
	$('#passenger_text').on('focus', function() {
		$(this).parent().addClass('show');
		$(this).parent().find('.input-dropdown').addClass('show');
		$(this).parent().find('.input-dropdown-mask').addClass('show');
	});
	
	$('.input-dropdown-mask, .input-group .btn-sp').on('click', function(event) {
		if($('.input-group .input-dropdown').hasClass('show')) {
			event.preventDefault();
			$('.input-group').removeClass('show');
			$('.input-dropdown').removeClass('show');
			$('.input-dropdown-mask').removeClass('show');
		}
	});
	
	$(document).on('click', '.number-box .number-btn', function(event) {
		event.preventDefault();
		if( ! $(this).hasClass('disable') ) {
			var $input = $(this).parent().find('input');
			var _val = parseInt($input.val());
			var _min = parseInt($input.attr('min'));
			var _unit = $input.data('unit');
			if($(this).hasClass('plus')) {
				_val++;
			} else {
				if(_val > _min) {
					_val--;
				}
			}
			if (_unit) {
				$input.val(_val + ' ' + _unit);
			} else {
				$input.val(_val);
			}
			disableMinusNumberBox($input);
			resultPassenger();
		}
	});
}

var frmRange = function(elm,out,vStep,vMin,vMax,sMin,sMax,svl,type,txt) {
	var vlMin, vlMax;
	$(elm).slider({
		range: true,
		min: vMin,
		max: vMax,
		step: vStep,
		values: [sMin, sMax],
		create: function() {
			if(type === 0) {
				vlMin = txt+sMin;
				vlMax = txt+sMax;
			}
			else {
				vlMin = sMin+ ' '+txt;
				vlMax = sMax+ ' '+txt;
			}
			if(svl) {
				$(this).find('.ui-slider-handle').eq(0).html('<span>'+vlMin+'</span>');
			}
			$(out).val(vlMin+' - '+vlMax);
		},
		slide: function( event, ui ) {
			if(type === 0) {
				vlMin = txt+ui.values[0];
				vlMax = txt+ui.values[1];
			}
			else {
				vlMin = ui.values[0]+ ' '+txt;
				vlMax = ui.values[1]+ ' '+txt;
			}
			if(svl) {
				$(this).find('.ui-slider-handle').eq(0).html('<span>'+vlMin+'</span>');
			}
			$(out).val(vlMin+' - '+vlMax);
		}
	});
}

var searchResult = function() {
	$(document).on('keyup', '#txtKey', function(event) {
		event.preventDefault();
		if($(this).val() !== '') {
			$('#suggest').addClass('is_show').show();
		} else {
			$('#suggest').removeClass('is_show').hide();
		}
	});
	// $(document).on('click', '*:not(#txtKey)', function(event) {
	// 	event.preventDefault();
	// 	$('#suggest').removeClass('is_show').hide();
	// });
	window.onkeydown = function( event ) {
		if ( event.keyCode == 27 ) {
			$('#suggest').fadeOut();
		}
	};
}

var favoriteAction = function() {
	$('.btn-favorite').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('favorited');
		// more action here
	});
}

var headerFixed = function() {
	var headerHeight = $('.main-head').outerHeight();
	var wScroll = window.scrollY;
	var bottom = $('.copy-txt').offset().top - 580;
	$(window).on('scroll',function() {
		if((wScroll < window.scrollY && headerHeight <= window.scrollY) || window.scrollY > bottom) {
			$('.search-global').addClass('fixed');
			$('.main-head .dropdown').removeClass('active')
			$('.main-head .dropdown-menu').hide();
		} 
		else { 		
			if(!$('.board-menu-sp').hasClass('show')) {
				$('.search-global').removeClass('fixed');
			}
			
		}
		wScroll = window.scrollY
	});
}

var fieldFocus = function() {
	$('input[type="text"], input[type="tel"], input[type="number"], textarea').on('focus', function() {
		$(window).scrollTop($(this).offset().top - 10);
	});
}
$(window).on('scroll',headerFixed);
$(function() {
	//fieldFocus();
	disableMinusNumberBox('.number-box input[type="number"]');
	datePickerInit('.datepicker',0);
	datePickerInit('#datSearch',1);
	showLoginForm();
	dropdownMenu();
	searchBoxControl();
	searchResult();
	showNavigationMobile();
	favoriteAction();
})