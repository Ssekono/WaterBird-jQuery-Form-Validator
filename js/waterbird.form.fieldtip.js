$(document).ready(function() {
	$("input[type=text][title]").each(function() {
		
			  $(this).val($(this).attr("title"));
			  
			//Setting fieldtip into input field
			  if($.trim($(this).val()) == "") {
				  $(this).val($(this).attr("title"));
			  }
			  
			  //Setting fieldtip if input field is empty
			  $(this)
			    .focus(function() {
			      if($(this).val() == $(this).attr("title")) {
			    	  $(this).val("");
			      }
			    })
			    .focusout(function() {
			      if($.trim($(this).val()) == "") {
			    	  $(this).val($(this).attr("title"));
			      }
			    });
			});
});