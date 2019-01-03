var acrdSidebar = function() {
	$('.sidebar h3').each(function(index, el) {
		$(this).on('click',function(event) {
			$(this).toggleClass('hide');
			$(this).next().slideToggle();
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
	acrdSidebar();
	frmRange('#range-date','#txtRangeDate',1,1,10,3,10,true,1,'day');
	frmRange('#price01','#txtPrice01',10,20,9100,20,9100,false,0,'$');
	frmRange('#price02','#txtPrice02',10,0,1000,0,1000,false,0,'$');

	loadFilter();
})