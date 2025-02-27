(function($) {
    // Define validation patterns
    const validationPatterns = {
        'phone': /^\+?(\d{1,4})?[-. ]?(\(?\d{1,4}\)?)?[-. ]?\d{1,4}[-. ]?\d{1,9}$/,
        'phone-ug': /^\+256\d{9}$/,
        'email': /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'date': /^\d{4}-\d{2}-\d{2}$/,
        'alpha-numeric': /^[a-zA-Z0-9]+$/,
        'alpha-numeric-space': /^[a-zA-Z0-9\s]+$/,
        'alpha-numeric-punct': /^[a-zA-Z0-9\s~!#$%&*\-_+=|:\.]+$/,
        'alpha-numeric-space-dash': /^[a-zA-Z0-9\s\-_]+$/,
        'alpha-numeric-dash': /^[a-zA-Z0-9\-_]+$/,
        'alpha': /^[a-zA-Z]+$/,
        'number': /^-?\d+(\.\d+)?$/,
        'natural-number': /^\d+$/,
        'url': /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        'credit-card': /^\d{4}-\d{4}-\d{4}-\d{4}$/,
        'ipv4': /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        'ipv6': /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/,
        'year': /^\d{4}$/,
        'month': /^(0?[1-9]|1[0-2])$/,
        'day': /^(0?[1-9]|[12][0-9]|3[01])$/,
        'strong-password': /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    };

    // Default error messages
    const defaultErrorMessages = {
        'phone': 'Please enter a valid phone number.',
        'phone-ug': 'Please enter a valid Uganda phone number.',
        'email': 'Please enter a valid email address.',
        'date': 'Please enter a valid date (YYYY-MM-DD).',
        'alpha-numeric': 'Please enter only letters and numbers.',
        'alpha-numeric-space': 'Please enter only letters, numbers, and spaces.',
        'alpha-numeric-punct': 'Please enter only letters, numbers, spaces, and the following special characters: ~ ! # $ % & * - _ + = | : .',
        'alpha-numeric-space-dash': 'Please enter only letters, numbers, spaces, hyphen, and underscore.',
        'alpha-numeric-dash': 'Please enter only letters, numbers, hyphen, and underscore.',
        'alpha': 'Please enter only letters.',
        'number': 'Please enter a valid number.',
        'natural-number': 'Please enter a valid natural number.',
        'url': 'Please enter a valid URL.',
        'credit-card': 'Please enter a valid credit card number.',
        'ipv4': 'Please enter a valid IPv4 address.',
        'ipv6': 'Please enter a valid IPv6 address.',
        'year': 'Please enter a valid year.',
        'month': 'Please enter a valid month (1-12).',
        'day': 'Please enter a valid day (1-31).',
        'strong-password': 'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters.'
    };

    // Plugin definition
    $.fn.validateForm = function(options) {
        // Default settings
        const settings = $.extend({
            submitButton: 'input[type="submit"]', // Selector for the submit button
            errorClass: 'validation-fail', // Class for invalid inputs
            successClass: 'validation-pass', // Class for valid inputs
            errorMessageClass: 'validation-error-message', // Class for error messages
            showErrorMessages: true, // Whether to display error messages
            validateOnLoad: false, // Whether to validate on form load
            globalErrorContainer: '.global-error-message', // Container for global error messages
            globalErrorMessage: 'Please fill out all required fields correctly.' // Global error message
        }, options);

        // Function to validate a single input field
        function validateInput(input) {
            const validationType = input.attr('data-validation');
            const value = input.val().trim();
            const isRequired = input.is('[required]');

            // Skip validation if the field is not required and empty
            if (!isRequired && value === '') {
                input.removeClass(settings.errorClass).addClass(settings.successClass);
                return true;
            }

            // Validate required fields or non-empty fields
            const pattern = validationPatterns[validationType];
            const isValid = pattern && pattern.test(value);

            // Add/remove validation classes
            if (isValid) {
                input.removeClass(settings.errorClass).addClass(settings.successClass);
            } else {
                input.removeClass(settings.successClass).addClass(settings.errorClass);
            }

            // Display error message if enabled
            if (settings.showErrorMessages) {
                let errorMessage = input.next(`.${settings.errorMessageClass}`);
                if (!errorMessage.length) {
                    errorMessage = $(`<span class="${settings.errorMessageClass}"></span>`).insertAfter(input);
                }
                const customErrorMessage = input.attr('data-error');
                errorMessage.text(isValid ? '' : (customErrorMessage || defaultErrorMessages[validationType] || 'Invalid input.'));
            }

            return isValid;
        }

        // Function to check overall form validity
        function checkFormValidity(form) {
            let isFormValid = true;

            form.find('input[data-validation]').each(function() {
                if (!validateInput($(this))) {
                    isFormValid = false;
                }
            });

            // Enable or disable the submit button based on form validity
            if (isFormValid) {
                form.find(settings.submitButton).prop('disabled', false);
                $(settings.globalErrorContainer).text('').hide(); // Hide global error message
            } else {
                form.find(settings.submitButton).prop('disabled', true);
                $(settings.globalErrorContainer).text(settings.globalErrorMessage).show(); // Show global error message
            }

            return isFormValid;
        }

        // Apply validation to each form in the selection
        return this.each(function() {
            const form = $(this);

            // Validate on blur (when the input loses focus)
            form.find('input[data-validation]').on('blur', function() {
                validateInput($(this)); // Validate only the blurred field
            });

            // Validate on form load (if enabled)
            if (settings.validateOnLoad) {
                form.find('input[data-validation]').each(function() {
                    validateInput($(this)); // Validate each field individually
                });
                checkFormValidity(form); // Check overall form validity
            }

            // Validate on form submission
            form.on('submit', function(event) {
                const isFormValid = checkFormValidity(form); // Check overall form validity

                if (!isFormValid) {
                    event.preventDefault(); // Prevent form submission if validation fails
                }
            });
        });
    };
})(jQuery);