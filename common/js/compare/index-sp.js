$(window).on('load resize', function() {
	$('.com-col .box-meta .tl').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });

    $('.com-col .box-meta .box-pay').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
});

$(document).ready(function() {

	$('.box-img-more .list-photos').magnificPopup({
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
    $('.btn-img-more').on('click', function(e) {
        e.preventDefault();
        $(this).next('.list-photos').magnificPopup('open');
    });

});