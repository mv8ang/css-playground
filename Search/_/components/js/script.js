$(function() {
	$("#input_fld").on('focus', function() {
		$(this).parent('label').addClass('active');
	})
})