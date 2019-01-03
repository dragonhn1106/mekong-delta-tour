var changeTabWidget = function() {
	var widget_tab_post = $('.widget-post-tab');
	var widget_tab_post_control = widget_tab_post.find('.post-tab-control');

	widget_tab_post_control.each(function(index, el) {
		$(this).find('a').on('click', function(event) {
			event.preventDefault();
			var _tab = $(this).attr('href');
			widget_tab_post_control.find('a').removeClass('active');
			widget_tab_post.find('.list-post-tab').removeClass('active');
			$(this).addClass('active');
			$(_tab).addClass('active');
		});
	});
}

$(document).ready(function() {
	changeTabWidget();
});
