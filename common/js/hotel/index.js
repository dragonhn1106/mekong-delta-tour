var acrdSidebar = function() {
	$('.sidebar h3').each(function(index, el) {
		$(this).on('click',function(event) {
			$(this).toggleClass('hide');
			$(this).next().slideToggle();
		});
	});
}
var fnLoadMore = function(elm,df) {
	$(elm).children('.item').slice(0, df).show();
	var hidden = $(elm).children('.item:hidden').length;
	if(hidden < 1) {
		$(elm).next('.more').hide();
	}
	$('.more a').not('.view').each(function(index, el) {
		$(this).on('click', function (event) {
	    event.preventDefault();
	    $(this).parent().prev().children('.item:hidden').slideDown();
	    $(this).parent().hide();
	  });
	});
}

var loadFilter = function() {
	$("form#formFiterHotel").change(function() {
		$('#loading').show();
		setTimeout(function() {
			$('#loading').hide();
		}, 1000);
	});
}

$(function(){
	$('#range-rate').slider({
		range: "max",
    min: 1,
    max: 10,
    create: function() {
    	$('#txtRate').val(1).trigger('change');
    	// $(this).find('.ui-slider-handle').html('<span>1</span>');
    },
    slide: function( event, ui ) {
    	$('#txtRate').val(ui.value);
    	// $(this).find('.ui-slider-handle').html('<span>'+ui.value+'</span>');
    },
    change: function( event, ui ) {
    	$('#txtRate').val(ui.value).trigger('change');
    }
	});

	$('#range-price').slider({
    range: true,
    min: 5,
    max: 1000,
    step: 5,
    values: [5, 1000],
    create: function() {
    	$('#priceMin').text(5);
    	$('#priceMax').text(1000);
    	$('#txtMinPrice').val(5).trigger('change');
    	$('#txtMaxPrice').val(1000).trigger('change');
    },
    slide: function( event, ui ) {
    	$('#priceMin').text(ui.values[0]);
    	$('#priceMax').text(ui.values[1]);
    },
    change: function( event, ui ) {
    	$('#txtMinPrice').val(ui.values[0]).trigger('change');
    	$('#txtMaxPrice').val(ui.values[1]).trigger('change');
    }
  });
	fnLoadMore('.list-filter',4);
	fnLoadMore('.list-room',5);
	fnLoadMore('.list-destinations',8);
	acrdSidebar();

	loadFilter();
})