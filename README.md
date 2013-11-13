Waterbird v1.0

Created by Joe Ssekono
http://josephssekono.novariss.com

This plugin is licensed under the [MIT License](LICENSE.txt).

Waterbird is a JQuery plugin that validates HTML forms. The plugin simplifies
the process on validating a form by simply setting up the plugin's config file.
Validation is done as soon as one moves from the respective form and and feedback
to whether the content is valid is given back. This enables the form user to
quickly fix it. The plugin also provides field-tip feature that can contain
information that aid a form user on what content or format input should be made.

Please give feedback of what can be improved and what new features can be added.

Enjoy using this plugin


Requirements
============
1. JQuery library (1.8.0 and above)


Waterbird Files
===============
1. waterbird.form.validator.js
   This file contains all the functions that run the form validation process.
   
2. waterbird.form.validator.min.js
   This is a minified version of waterbird.form.validator.js 
   
3. waterbird.form.config.js
   This file contains the settings to which form elements are to be validated
   and options to how they should be validated.

4. waterbird.form.fieldtip.js
   This file enables the insertion of input field-tips.


How to use Waterbird Plugin
===========================
1. Give your form elements unique id names that will be used by the plugin to
   validate form entries
2. Plugin output information will be sent to the html element that has an id 
   name with a suffix '-msg' of the respective form element
3. Set the type of validation that you desire to be carried out on a desired 
   form element in waterbird.form.config.js file
4. If an form entry is required, ensure that you set 'required' to 'yes' in the
   waterbird.form.config.js file
5. Adding waterbird.form.fieldtip.js file will add a field-tip in an empty 
   input form input field. The field-tip is picked from the title attribute of
   the form element.
   
Config File settings
====================
1. type
   Sets the type of validation to be done
        Accepted Values: text, number, date, phone, url, email

2. requried
   Sets the validator to only validate the field if it is not empty
        Accepted Values: yes, no
