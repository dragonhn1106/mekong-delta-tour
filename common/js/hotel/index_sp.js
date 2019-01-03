var toggleInfo = function() {
	$('.list-hotels .hotel .toggle-btn').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('close');
		var $parent = $(this).parent().parent().parent();
		$parent.find('.map').slideToggle();
		$parent.find('.meta-toggle').slideToggle();
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

$(document).ready(function() {
	toggleInfo();
	filterPopup();
});