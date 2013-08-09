$(document).ready(function () {

//  $(".required").focusin(function(){ });


  //Each field on the form

  $("#fname").focusout(function() {
      validateText("#fname", ".fname-warning");
      validateRequired("#fname", ".fname-warning");
  });

  $("#lname").focusout(function() {
      validateText("#lname", ".lname-warning");
      validateRequired("#lname", ".lname-warning");
  });

  $("#age").focusout(function() {
      validateNumber("#age", ".age-warning");
      validateRequired("#age", ".age-warning");  
  });

  $("#email").focusout(function() {
      validateEmail("#email", ".email-warning");
      validateRequired("#email", ".email-warning");
  });

  $("#website").focusout(function() {
      validateWebsite("#website", ".website-warning");
      validateRequired("#website", ".website-warning");
  });

  $("#phone").focusout(function() {
      validatePhone("#phone", ".phone-warning");
      validateRequired("#phone", ".phone-warning");
  });

  $("#password").focusout(function() {
      //validatePassword("#password", ".password-warning");
      validateRequired("#password", ".password-warning");
  });

  $("#password-2").focusout(function() {
      validateCompare("#password", "#password-2","Passwords",  ".password-2-warning");
      validateRequired("#password-2", ".password-2-warning");
  });


  
  
  
  
  
  
  
  
//  ===================================================================
//  Function definitions
  
  
/*
* a is input field id name
* b is invalid input message p class name
*/
  function validateText(a,b) {
    var text =$(a).val();
 //   if (!(text == NULL)) {
        var regularExpression = /^[a-zA-Z]+$/; 
        if(!regularExpression.test(text) ) { 
          $(b).text("Your input is invalid. Text only!").attr( "class", b.replace(".", "")+" invalid" );  
        }
        else {
          $(b).text("").attr( "class", b.replace(".", "")+" valid");
        } 
 //   }
  }  
  
/*
* a is input field id name
* b is invalid input message p class name
*/
  function validatePhone() {
    var text =$(a).val();
    
    
   // var regularExpression = /^(+)+[0-9]+$/;     
    var regularExpression = /^[0-9]+$/;     
    if(!regularExpression.test(text) ) { 
      $(b).text("Not a valid Phone number!").attr( "class", b.replace(".", "")+" invalid" );  
    }
    else {
      $(b).text("").attr( "class", b.replace(".", "")+" valid");
    } 
  }  
  
/*
* a is input field id name
* b is invalid input message p class name
*/
  function validateNumber() {
    var text =$(a).val();
    //var regularExpression = /^d+$/; 
    var regularExpression = /^[0-9]+$/;     
    if(!regularExpression.test(text) ) { 
      $(b).text("Your input is invalid. Numbers only!").attr( "class", b.replace(".", "")+" invalid" );  
    }
    else {
      $(b).text("").attr( "class", b.replace(".", "")+" valid");
    } 
  }
  
/*
* a is input field id name
* b is invalid input message p class name
*/
  function validateEmail(a,b) {
      var emailAddress = $(a).val();
      var regularExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      
      //testing if all email requirements are there
          if(!regularExpression.test(emailAddress) ) {
          //testing if all validated requirements are positioned correctly
              var atpos = emailAddress.indexOf("@");
              var dotpos = emailAddress.lastIndexOf(".");
              if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= x.length) {
                $(b).text("Not a valid e-mail address").attr( "class", b.replace(".", "")+" invalid" );
              }
              else {
                $(b).text("").attr( "class", b.replace(".", "")+" valid" );
              }
          }
          else {
            $(b).text("Not a valid e-mail address").attr( "class", b.replace(".", "")+" invalid" );
          }
  }

/*
* a is input field id name
* b is invalid input message p class name
*/
  function validateWebsite() {
      var url = $(a).val();  
      var regularExpression = /^(https?|ftp|file):\/\/.+$/;
  
      //testing if all url requirements are there
          if(!regularExpression.test(url) ) {
            $(b).text("Not a valid website URL").attr( "class", b.replace(".", "")+" invalid" );
          }
          else {
            $(b).text("").attr( "class", b.replace(".", "")+" valid" );
          }
  }






/*
* a is input field id name
* b is invalid input message p class name
*/
  function validateRequired(a,b) {
  //  if ($(a).is(":empty")) {
    if ($(a).val() == NULL) {
      $(b).text("Field is required. Cannot be left empty").attr( "class", b.replace(".", "")+" invalid" );
    } 
    else {
      $(b).text(" ").attr( "class", b.replace(".", "")+" valid" );
    }
  }

/*
* a is input field id name
* b is invalid input message p class name
*/
  function validateStrongPassword() {
    if ($(".required").is(":empty")) {
      $(".warning").text("empty input");
    } 
  }

/*
* a is input field id name
* b is invalid input message p class name
*/
  function validatePassword() {
    if ($(".required").is(":empty")) {
      $(".warning").text("empty input");
    } 
  }

/*
* a is  first input field id name
* b is  second input field id name
* c is  name of input fields being compared
* d is name of id to hold message output
*/
  function validateCompare(a,b,c,d) {
    var item_1 = $(a).val(); //first item
    var item_2 = $(b).val(); //second item to compare with first item
    var msg = $(c);  //name of input fields being compared
    var msg = $(d);  //name of id to hold message output
  
    if (!(item_1 == item_2)) {
      $(d).text(msg+" do not match!").attr( "class", d.replace(".", "")+" invalid");
    } 
    else {
      $(d).text(msg+" do match!").attr( "class", d.replace(".", "")+" valid");
    } 
    
  }

});
