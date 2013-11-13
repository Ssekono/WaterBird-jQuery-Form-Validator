/*! Copyright (c) 2013 Joe Ssekono (http://josephssekono.novariss.com)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.0
 *
 * Requires: 1.8.0+
 */

(function($) {

	$.fn.extend({

		// Plugin Name
		waterBird : function(options) {

			// Defaults options are set here
			var defaults = {
					type : 'text',
					required : 'yes',
				};
			
			var options = $.extend(defaults, options);

			return this.each(function() {
				
				var element = '#' + this.id;
				var message = element + '-msg';
				
				//Setting up variable to check whether its required
				var status = true;
				if (options.required == 'yes'){
					status = true;
				}
				else{
					status = false;
				}
				

				switch (options.type) {
					case 'text':
						if (options.required == 'yes') {
							// check for empty field
							if (validateRequired(element, message)) {
								// validate input
								validateText(element, message, status);
								}
							} 
						else {
							// validate input
							validateText(element, message, status);
							}
						break;

					case 'number':
						if (options.required == 'yes') {
							// check for empty field
							if (validateRequired(element, message)) {
								// validate input
								validateNumber(element, message, status);
								}
							} 
						else {
							// validate input
							validateNumber(element, message, status);
							}
						break;

					case 'phone':
						if (options.required == 'yes') {
							// check for empty field
							if (validateRequired(element, message)) {
								// validate input
								validatePhone(element, message, status);
								}
							} 
						else {
							// validate input
							validatePhone(element, message, status);
							}
						break;

					case 'email':
						if (options.required == 'yes') {
							// check for empty field
							if (validateRequired(element, message)) {
								// validate input
								validateEmail(element, message, status);
								}
							} 
						else {
							// validate input
							validateEmail(element, message, status);
							}
						break;

					case 'url':
						if (options.required == 'yes') {
							// check for empty field
							if (validateRequired(element, message)) {
								// validate input
								validateUrl(element, message, status);
								}
							} 
						else {
							// validate input
							validateUrl(element, message, status);
							}
						break;

					case 'date':
						if (options.required == 'yes') {
							// check for empty field
							if (validateRequired(element, message)) {
								// validate input
								validateDate(element, message, status);
								}
							} 
						else {
							// validate input
							validateDate(element, message, status);
							}
						break;

						default:

					}
				
				

				
				
				
				/**
				 * a is input field id name 
				 * b is invalid input message <p> class name
				 * 
				 * Function validates filled fields only
				 */
				
				function validateRequired(a, b, c) {
					//Checking if field is empty
					if ($(a).val() == "") {
						$(b).text("Field is required. Cannot be left empty")
							.attr("class", "invalid");
						return false;
					} 
					else {
						$(b).text("valid").attr("class", "valid");
						return true;
					}
				}
				

				/**
				 *  a is input field id name 
				 *  b is invalid input message <p> class name
				 * c is boolean value for required
				 *  
				 *  Function validates only text content 
				 */
				

				function validateText(a, b, c) {
					// Value in the field
					var text = $(a).val();
					// Regular Expression to validate value against
					var regularExpression = /^[a-zA-Z]+$/;

					if (c) {
						// Validating field content
						if (!regularExpression.test(text)) {
							$(b).text("Your input is invalid. Text only!")
									.attr("class", "invalid");
						} else {
							$(b).text("valid").attr("class", "valid");
						}
					}

				}


				/**
				 *  a is input field id name 
				 *  b is invalid input message <p> class name
				 *  c is boolean value for required
				 *  
				 *  Function validates only number content 
				 */
								
				function validateNumber(a, b, c) {
					// Value in the field
					var number = $(a).val();
					// Regular Expression to validate value against
					var regularExpression = /^[0-9]+$/;

					if (c) {
						// Validating field content
						if (!regularExpression.test(number)) {
							$(b).text("Your input is invalid. Numbers only!")
									.attr("class", "invalid");
						} else {
							$(b).text("valid").attr("class", "valid");
						}
					}
				}


				/**
				 *  a is input field id name 
				 *  b is invalid input message <p> class name
				 *  c is boolean value for required
				 *  
				 *  Function validates only email
				 */

				function validateEmail(a, b, c) {
					// Value in the field
					var email = $(a).val();
					// Regular Expression to validate value against
					var regularExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

					if (c) {
						// Validating field content
						if (!regularExpression.test(email)) {
							$(b).text("Your input is invalid. Email only!")
									.attr("class", "invalid");
						} else {
							$(b).text("valid").attr("class", "valid");
						}
					}
				}
				
				
				
				/**
				 *  a is input field id name 
				 *  b is invalid input message <p> class name
				 *  c is boolean value for required
				 *  
				 *  Function validates only url
				 */

				function validateUrl(a, b, c) {
					// Value in the field
					var url = $(a).val();
					// Regular Expression to validate value against
					var regularExpression = /^((https?|ftp):\/\/|(www|ftp)\.)[a-z0-9-]+(\.[a-z0-9-]+)+([\/?].*)?$/;

					if (c) {
						// Validating field content
						if (!regularExpression.test(url)) {
							$(b).text("Your input is invalid. Url only!")
									.attr("class", "invalid");
						} else {
							$(b).text("valid").attr("class", "valid");
						}
					}
				}



				/**
				 *  a is input field id name 
				 *  b is invalid input message <p> class name
				 *  c is boolean value for required
				 *  
				 *  Function validates only phone numbers using international EPP format
				 */

				function validatePhone(a, b, c) {
					// Value in the field
					var phone = $(a).val();
					// Regular Expression to validate value against
					var regularExpression = /^\+[0-9]{1,3}\-[0-9]{4,14}(?:x.+)?$/;

					if (c) {
						// Validating field content
						if (!regularExpression.test(phone)) {
							$(b).text("Your input is invalid. Phone number only!")
									.attr("class", "invalid");
						} else {
							$(b).text("valid").attr("class", "valid");
						}
					}
				}




				/**
				 *  a is input field id name 
				 *  b is invalid input message <p> class name
				 *  c is boolean value for required
				 *  
				 *  Function validates only date using d/m/yy or dd/mm/yyyy format
				 */

				function validateDate(a, b, c) {
					// Value in the field
					var date = $(a).val();
					// Regular Expression to validate value against
					var regularExpression = /^(3[01]|[12][0-9]|0?[1-9])-(1[0-2]|0?[1-9])-(?:[0-9]{2})?[0-9]{2}$/;

					if (c) {
						// Validating field content
						if (!regularExpression.test(date)) {
							$(b).text("Your input is invalid. Date number only!")
									.attr("class", "invalid");
						} else {
							$(b).text("valid").attr("class", "valid");
						}
					}
				}



				
				
				
				
	
			});
		}
	});
})(jQuery);