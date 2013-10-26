$(document).ready(function() {

	$('#text').focusout(function() {
		$(this).waterBird({
			type: 'text',
			required: 'yes',
		});
	});

	$('#number').focusout(function() {
		$(this).waterBird({
			type: 'number',
			required: 'yes',
		});
	});
	
	$('#email').focusout(function() {
		$(this).waterBird({
			type: 'email',
			required: 'yes',
		});
	});
	
	$('#url').focusout(function() {
		$(this).waterBird({
			type: 'url',
			required: 'yes',
		});
	});
	
	$('#phone').focusout(function() {
		$(this).waterBird({
			type: 'phone',
			required: 'yes',
		});
	});
	
	$('#date').focusout(function() {
		$(this).waterBird({
			type: 'date',
			required: 'yes',
		});
	});

}); 