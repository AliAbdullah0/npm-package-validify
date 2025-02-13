class Validify {
    validateText(text = '', special = false, min = 2, max = 20, allowedSymbols = []) {
        const defaultSymbols = ['!', '@', '#', "$", '%', '^', '&', '*', '(', ')', '-', '=', '+', ',', '/', '?', ']', '[', '`', '~', ';', ':'];
        const symbols = allowedSymbols.length > 0 ? allowedSymbols : defaultSymbols;

        if (!text) throw new Error('text is empty or undefined!');
        if (text.length > max) throw new Error(`Max characters allowed: ${max}`);
        if (text.length < min) throw new Error(`Minimum characters required: ${min}`);

        if (!special) {
            for (const char of text) {
                if (symbols.includes(char)) throw new Error("Cannot contain special characters!");
            }
        }

        return true;
    }

    validatePassword(password = '', min = 6, max = 20, complexity = {}) {
        if (!password) throw new Error('Password cannot be empty!');
        if (password.length < min) throw new Error(`Minimum required length of password is ${min}`);
        if (password.length > max) throw new Error(`Maximum allowed length of password is ${max}`);

        if (complexity.requireUppercase && !/[A-Z]/.test(password)) {
            throw new Error('Password must contain at least one uppercase letter.');
        }
        if (complexity.requireLowercase && !/[a-z]/.test(password)) {
            throw new Error('Password must contain at least one lowercase letter.');
        }
        if (complexity.requireNumber && !/[0-9]/.test(password)) {
            throw new Error('Password must contain at least one number.');
        }
        if (complexity.requireSpecialChar && !/[!@#$%^&*()\-_=+[{\]};:'",<.>/?`~]/.test(password)) {
            throw new Error('Password must contain at least one special character.');
        }

        return true;
    }

    validateEmail(email = '', regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) {
        if (regex instanceof RegExp && regex.test(email)) return true;
        throw new Error("Invalid Email address!");
    }

    validateNumber(number, min = 4, max = 20) {
        if (typeof number !== 'number' && typeof number !== 'string') {
            throw new Error('Input must be a number or a string representation of a number.');
        }

        const numberString = number.toString();
        if (numberString.length < min) throw new Error(`Minimum length should be ${min}`);
        if (numberString.length > max) throw new Error(`Maximum length should be ${max}`);

        return true;
    }
}

export default Validify;