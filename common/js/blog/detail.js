var tableOfContent = function() {
	var ToC = '<ul class="list-hd-index">';

	var newLine, el, title, link;

	$('.main-content article h2').each(function() {

	  el = $(this);
	  title = el.text();
	  link = '#' + el.attr('id');

	  newLine =
	    "<li>" +
	      "<a href='" + link + "'><i class='fa fa-angle-right'></i>" +
	        title +
	      "</a>" +
	    "</li>";

	  ToC += newLine;

	});

	ToC += '</ul>';

	$('#table-of-post-content').html(ToC);
}

var anchorTableOfContent = function() {
	var anchorLink = $('#table-of-post-content .list-hd-index li a');

	anchorLink.on('click', function(event) {
		event.preventDefault();
		var _target = event.target.hash;
		var _offSetTop = $(_target).offset().top;

		$('html, body').stop(300).animate({
      scrollTop: _offSetTop
    }, 500);

	});
}

$(document).ready(function() {
	tableOfContent();
	anchorTableOfContent();
});
