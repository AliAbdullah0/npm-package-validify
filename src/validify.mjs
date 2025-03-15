var Validify = /** @class */ (function () {
    function Validify() {
    }
    // Username/Text Validation
    Validify.prototype.validateText = function (text, special, min, max, allowedSymbols) {
        if (special === void 0) { special = false; }
        if (min === void 0) { min = 2; }
        if (max === void 0) { max = 20; }
        if (allowedSymbols === void 0) { allowedSymbols = []; }
        if (!text)
            throw new Error("ERR_TEXT_EMPTY");
        var escapeChar = function (char) { return char.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&'); };
        var escapedSymbols = allowedSymbols.map(escapeChar).join('');
        var regex = special
            ? new RegExp("^[a-zA-Z0-9".concat(escapedSymbols, "]{").concat(min, ",").concat(max, "}$"))
            : new RegExp("^[a-zA-Z0-9]{".concat(min, ",").concat(max, "}$"));
        if (!regex.test(text))
            throw new Error("ERR_TEXT_INVALID");
        return true;
    };
    // Password Validation
    Validify.prototype.validatePassword = function (password, min, max, complexity) {
        if (min === void 0) { min = 8; }
        if (max === void 0) { max = 20; }
        if (complexity === void 0) { complexity = {
            requireUppercase: true,
            requireLowercase: true,
            requireNumber: true,
            requireSpecialChar: true,
        }; }
        if (password.length < min || password.length > max)
            return false;
        if (complexity.requireUppercase && !/[A-Z]/.test(password))
            return false;
        if (complexity.requireLowercase && !/[a-z]/.test(password))
            return false;
        if (complexity.requireNumber && !/[0-9]/.test(password))
            return false;
        if (complexity.requireSpecialChar && !/[^A-Za-z0-9]/.test(password))
            return false;
        return true;
    };
    // Email Validation
    Validify.prototype.validateEmail = function (email, regex) {
        var pattern = regex || /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };
    // Number Validation
    Validify.prototype.validateNumber = function (num, min, max) {
        if (min === void 0) { min = 1; }
        if (max === void 0) { max = 20; }
        var str = num.toString();
        return str.length >= min && str.length <= max && /^[0-9]+$/.test(str);
    };
    // Date Validation
    Validify.prototype.validateDate = function (date, format) {
        var dateFormatRegexMap = {
            'YYYY-MM-DD': /^\d{4}-\d{2}-\d{2}$/,
            'DD/MM/YYYY': /^\d{2}\/\d{2}\/\d{4}$/,
            'MM/DD/YYYY': /^\d{2}\/\d{2}\/\d{4}$/,
            'YYYY/MM/DD': /^\d{4}\/\d{2}\/\d{2}$/,
            'YYYY-MM-DD HH:mm:ss': /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/,
            'DD/MM/YYYY HH:mm:ss': /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}$/,
            'MM/DD/YYYY HH:mm:ss': /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}$/,
            'YYYY/MM/DD HH:mm:ss': /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/,
            'YYYY-MM-DDTHH:mm:ss': /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/,
            'YYYY-MM-DDTHH:mm:ss.SSS': /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}$/
        };
        var regex = dateFormatRegexMap[format];
        if (!regex)
            throw new Error("Unsupported date format");
        return regex.test(date);
    };
    // URL Validation
    Validify.prototype.validateUrl = function (url) {
        var pattern = /^(https?:\/\/)?([\w\-]+\.)+[\w]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
        return pattern.test(url);
    };
    // Phone Number Validation
    Validify.prototype.validatePhone = function (phoneNumber) {
        var pattern = /^\+?[\d\s\-().]{7,20}$/;
        return pattern.test(phoneNumber);
    };
    // Custom Regex Validation
    Validify.prototype.validateWithRegex = function (value, regex) {
        return regex.test(value);
    };
    return Validify;
}());
export default Validify;
var vld = new Validify();
var Username = 'test';
console.log(vld.validateText(Username));
