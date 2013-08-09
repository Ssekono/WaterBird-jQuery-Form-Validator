$(document).ready(function () {

//Each field on the form

  $("#fname").focusout(function() {
      validateText("#fname", ".fname-warning");
      validateRequired("#fname", ".fname-warning");
  });

  $(".required").focusin(function(){

  });
 
 });
