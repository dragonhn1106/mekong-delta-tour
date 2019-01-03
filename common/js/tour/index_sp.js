var toggleInfo = function() {
	$('.list-tours .tour .toggle-btn').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('close');
		var $parent = $(this).parent().parent().parent();
		$parent.find('.map').slideToggle();
		$parent.find('.meta-02').slideToggle();
		$parent.find('.meta-03').slideToggle();
		$parent.find('.meta-05').slideToggle();
	});
}
var filterPopup = function() {
	$('#formFilter .btn-form').on('click', function(event) {
		event.preventDefault();
		$('body').toggleClass('show');
		var $box = $('#'+$(this).data('box'));
		$box.toggleClass('show');
		$box.find('.inner-popup').fadeIn();
	});

	$('#formFilter .mask').on('click', function(event) {
		event.preventDefault();
		$('body').removeClass('show');
		$('.popup-cont .inner-popup').fadeOut(300, function() {
			$('.popup-cont').removeClass('show');
		});
	});

	$('#filter-popup .box-results .result').on('click', function(event) {
		event.preventDefault();
		$('body').removeClass('show');
		$('.popup-cont .inner-popup').fadeOut(300, function() {
			$('.popup-cont').removeClass('show');
		});
	});
}

var toggleText = function() {
	$('.meta-03 .link-more').on('click', function(e) {
		$(this).parent().removeClass('more');
		$(this).hide();
		e.preventDefault();
	});
}

$(document).ready(function() {
	toggleInfo();
	filterPopup();
	toggleText();
});