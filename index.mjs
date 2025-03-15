/// <reference path="./index.d.ts" />
class Validify {
    validateText(text = '', special = false, min = 2, max = 20, allowedSymbols = []) {
        const defaultSymbols = ['!', '@', '#', "$", '%', '^', '&', '*', '(', ')', '-', '=', '+', ',', '/', '?', ']', '[', '`', '~', ';', ':'];
        const symbols = allowedSymbols.length > 0 ? allowedSymbols : defaultSymbols;

        if (!text) throw this._createError('TEXT_EMPTY');
        if (text.length > max) throw this._createError('TEXT_TOO_LONG');
        if (text.length < min) throw this._createError('TEXT_TOO_SHORT');

        if (!special) {
            for (const char of text) {
                if (symbols.includes(char)) throw this._createError('TEXT_SPECIAL_CHAR_NOT_ALLOWED');
            }
        }

        return true;
    }

    validatePassword(password = '', min = 6, max = 20, complexity = {}) {
        if (!password) throw this._createError('PASSWORD_EMPTY');
        if (password.length < min) throw this._createError('PASSWORD_TOO_SHORT');
        if (password.length > max) throw this._createError('PASSWORD_TOO_LONG');

        if (complexity.requireUppercase && !/[A-Z]/.test(password)) {
            throw this._createError('PASSWORD_MISSING_UPPERCASE');
        }
        if (complexity.requireLowercase && !/[a-z]/.test(password)) {
            throw this._createError('PASSWORD_MISSING_LOWERCASE');
        }
        if (complexity.requireNumber && !/[0-9]/.test(password)) {
            throw this._createError('PASSWORD_MISSING_NUMBER');
        }
        if (complexity.requireSpecialChar && !/[!@#$%^&*()\-_=+[{\]};:'",<.>/?`~]/.test(password)) {
            throw this._createError('PASSWORD_MISSING_SPECIAL_CHAR');
        }

        return true;
    }

    validateEmail(email = '', regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) {
        if (regex instanceof RegExp && regex.test(email)) return true;
        throw this._createError('EMAIL_INVALID');
    }

    validateNumber(number, min = 4, max = 20) {
        if (typeof number !== 'number' && typeof number !== 'string') {
            throw this._createError('NUMBER_INVALID_TYPE');
        }

        const numberString = number.toString();
        if (numberString.length < min) throw this._createError('NUMBER_TOO_SHORT');
        if (numberString.length > max) throw this._createError('NUMBER_TOO_LONG');

        return true;
    }

    validateDate(date, format) {
        const regexMap = {
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
        if (!regexMap[format]?.test(date)) throw this._createError('DATE_INVALID_FORMAT');
        return true;
    }

    validateUrl(url) {
        const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        if (!regex.test(url)) throw this._createError('URL_INVALID');
        return true;
    }

    validateWithRegex(value, regex) {
        if (regex instanceof RegExp && regex.test(value)) return true;
        throw this._createError('REGEX_VALIDATION_FAILED');
    }

    validatePhone(phoneNumber) {
        const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
        if (regex.test(phoneNumber)) return true;
        throw this._createError('PHONE_INVALID');
    }

    _createError(code) {
        const error = new Error(code);
        error.code = code;
        return error;
    }
}

export default Validify;
