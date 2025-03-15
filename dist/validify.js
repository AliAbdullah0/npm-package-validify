export default class Validify {
    // Username/Text Validation
    validateText(text, special = true, min = 3, max = 15, allowedSymbols = ['_', '-', '@']) {
        const regex = special
            ? new RegExp(`^[a-zA-Z0-9${allowedSymbols.join('')}]{${min},${max}}$`)
            : new RegExp(`^[a-zA-Z0-9]{${min},${max}}$`);
        return regex.test(text);
    }
    // Password Validation
    validatePassword(password, min = 8, max = 20, complexity = {
        requireUppercase: true,
        requireLowercase: true,
        requireNumber: true,
        requireSpecialChar: true,
    }) {
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
    }
    // Email Validation
    validateEmail(email, regex) {
        const pattern = regex || /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
    // Number Validation
    validateNumber(num, min = 1, max = 20) {
        const str = num.toString();
        return str.length >= min && str.length <= max && /^[0-9]+$/.test(str);
    }
    // Date Validation
    validateDate(date, format) {
        const dateFormatRegexMap = {
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
        const regex = dateFormatRegexMap[format];
        if (!regex)
            throw new Error("Unsupported date format");
        return regex.test(date);
    }
    // URL Validation
    validateUrl(url) {
        const pattern = /^(https?:\/\/)?([\w\-]+\.)+[\w]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
        return pattern.test(url);
    }
    // Phone Number Validation
    validatePhone(phoneNumber) {
        const pattern = /^\+?[\d\s\-().]{7,20}$/;
        return pattern.test(phoneNumber);
    }
    // Custom Regex Validation
    validateWithRegex(value, regex) {
        return regex.test(value);
    }
}
//# sourceMappingURL=validify.js.map