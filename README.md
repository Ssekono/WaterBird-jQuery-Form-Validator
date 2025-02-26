# WaterBird jQuery Form Validator

**WaterBird jQuery Form Validator** is a lightweight and flexible jQuery plugin designed to simplify form validation. It allows you to validate form input fields based on the `data-validation` attribute, adding `validation-pass` or `validation-fail` classes to the input fields. It supports real-time validation on `blur` and displays custom error messages below the input fields.

---

## Features

- **Custom Validation Rules**: Define validation rules using the `data-validation` attribute.
- **Real-Time Validation**: Validate fields on `blur` (when the input loses focus).
- **Custom Error Messages**: Use the `data-error` attribute to display custom error messages.
- **Pre-Filled Field Validation**: Optionally validate pre-filled fields on form load.
- **Flexible Configuration**: Customize error classes, success classes, and more.
- **Lightweight**: Built with jQuery for easy integration.

---

## Installation

1. Include jQuery in your project:
   ```html
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   ```

2. Include the WaterBird jQuery Form Validator plugin:
   ```html
   <script src="path/to/waterbird-validator.js"></script>
   ```

---

## Usage

### Basic Setup

1. Add the `data-validation` attribute to your input fields:
   ```html
   <form id="myForm">
       <label for="email">Email:</label>
       <input type="text" id="email" name="email" data-validation="email" data-error="Please provide a valid email address.">
       <br>

       <label for="phone">Phone (UG):</label>
       <input type="text" id="phone" name="phone" data-validation="phone-ug">
       <br>

       <label for="password">Password:</label>
       <input type="password" id="password" name="password" data-validation="strong-password">
       <br>

       <input type="submit" value="Submit">
   </form>
   ```

2. Initialize the plugin:
   ```javascript
   $(document).ready(function() {
       $('#myForm').validateForm({
           showErrorMessages: true, // Enable error messages
           validateOnLoad: true // Validate pre-filled fields on form load
       });
   });
   ```

---

### Validation Types

The plugin supports the following validation types:

| Validation Type       | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| `phone`               | Valid phone number format.                                                  |
| `phone-ug`            | Valid Uganda phone number format.                                           |
| `email`               | Valid email format.                                                         |
| `date`                | Valid date format (YYYY-MM-DD).                                             |
| `alpha-numeric`       | Alphanumeric string (letters and numbers).                                  |
| `alpha-numeric-space` | Alphanumeric string with spaces.                                            |
| `alpha-numeric-punct` | Alphanumeric string with spaces and special characters: `~!@#$%&*-_+=|:.`. |
| `alpha`               | Alphabetic string (letters only).                                           |
| `number`              | Valid number (including decimals).                                          |
| `natural-number`      | Valid natural number (positive integers).                                   |
| `url`                 | Valid URL format.                                                           |
| `credit-card`         | Valid credit card number format.                                            |
| `ipv4`                | Valid IPv4 address format.                                                  |
| `ipv6`                | Valid IPv6 address format.                                                  |
| `year`                | Valid year.                                                                 |
| `month`               | Valid month (1-12).                                                         |
| `day`                 | Valid day (1-31).                                                           |
| `strong-password`     | Strong password (8+ characters, including uppercase, lowercase, numbers, and special characters). |

---

### Custom Error Messages

You can provide custom error messages using the `data-error` attribute:
```html
<input type="text" id="email" name="email" data-validation="email" data-error="Please provide a valid email address.">
```

If no `data-error` attribute is provided, the plugin will use default error messages.

---

### Plugin Options

The plugin supports the following options:

| Option               | Default Value               | Description                                                                 |
|----------------------|-----------------------------|-----------------------------------------------------------------------------|
| `submitButton`       | `'input[type="submit"]'`    | Selector for the submit button.                                             |
| `errorClass`         | `'validation-fail'`         | CSS class added to invalid inputs.                                          |
| `successClass`       | `'validation-pass'`         | CSS class added to valid inputs.                                            |
| `errorMessageClass`  | `'validation-error-message'`| CSS class for error messages.                                               |
| `showErrorMessages`  | `true`                      | Whether to display error messages.                                          |
| `validateOnLoad`     | `false`                     | Whether to validate pre-filled fields on form load.                         |

Example with custom options:
```javascript
$('#myForm').validateForm({
    submitButton: '.submit-btn', // Custom submit button selector
    errorClass: 'input-error', // Custom error class
    successClass: 'input-success', // Custom success class
    errorMessageClass: 'custom-error-message', // Custom error message class
    showErrorMessages: true, // Enable error messages
    validateOnLoad: true // Validate pre-filled fields on form load
});
```

---

### Styling

You can customize the appearance of validation states and error messages using CSS:

```css
.validation-fail {
    border: 2px solid red;
}

.validation-pass {
    border: 2px solid green;
}

.validation-error-message {
    color: red;
    font-size: 0.9em;
    display: block;
    margin-top: 5px;
}

input[type="submit"]:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
```

---

## Example

Here’s a complete example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WaterBird jQuery Form Validator</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="path/to/waterbird-validator.js"></script>
    <style>
        .validation-fail { border: 2px solid red; }
        .validation-pass { border: 2px solid green; }
        .validation-error-message { color: red; font-size: 0.9em; display: block; margin-top: 5px; }
        input[type="submit"]:disabled { background-color: #ccc; cursor: not-allowed; }
    </style>
</head>
<body>
    <form id="myForm">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" data-validation="email" data-error="Please provide a valid email address.">
        <br>

        <label for="phone">Phone (UG):</label>
        <input type="text" id="phone" name="phone" data-validation="phone-ug">
        <br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" data-validation="strong-password">
        <br>

        <input type="submit" value="Submit">
    </form>

    <script>
        $(document).ready(function() {
            $('#myForm').validateForm({
                showErrorMessages: true,
                validateOnLoad: true
            });
        });
    </script>
</body>
</html>
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## Support

If you have any questions or need help, feel free to open an issue on GitHub.

---

Enjoy using **WaterBird jQuery Form Validator**! 🚀