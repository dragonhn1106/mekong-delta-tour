var toggleOption = function() {
	$('.question-box dl dt').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('close');
		$(this).parent().find('dd').slideToggle();
	});
}
$(document).ready(function() {
	toggleOption();
});
