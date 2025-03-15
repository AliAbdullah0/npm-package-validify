export default class Validify {
    // Username/Text Validation
    validateText(text:string, special = false, min = 2, max = 20, allowedSymbols = []) {
      if (!text) throw new Error("ERR_TEXT_EMPTY");
    
      const escapeChar = (char) => char.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
      const escapedSymbols = allowedSymbols.map(escapeChar).join('');
    
      const regex = special
        ? new RegExp(`^[a-zA-Z0-9${escapedSymbols}]{${min},${max}}$`)
        : new RegExp(`^[a-zA-Z0-9]{${min},${max}}$`);
    
      if (!regex.test(text)) throw new Error("ERR_TEXT_INVALID");
    
      return true;
    }
    
  
    // Password Validation
    validatePassword(
      password: string,
      min = 8,
      max = 20,
      complexity = {
        requireUppercase: true,
        requireLowercase: true,
        requireNumber: true,
        requireSpecialChar: true,
      }
    ) {
      if (password.length < min || password.length > max) return false;
      if (complexity.requireUppercase && !/[A-Z]/.test(password)) return false;
      if (complexity.requireLowercase && !/[a-z]/.test(password)) return false;
      if (complexity.requireNumber && !/[0-9]/.test(password)) return false;
      if (complexity.requireSpecialChar && !/[^A-Za-z0-9]/.test(password)) return false;
      return true;
    }
  
    // Email Validation
    validateEmail(email: string, regex?: RegExp) {
      const pattern = regex || /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    }
  
    // Number Validation
    validateNumber(num: number | string, min = 1, max = 20) {
      const str = num.toString();
      return str.length >= min && str.length <= max && /^[0-9]+$/.test(str);
    }
  
    // Date Validation
    validateDate(date: string, format: string) {
      const dateFormatRegexMap: Record<string, RegExp> = {
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
      if (!regex) throw new Error("Unsupported date format");
      return regex.test(date);
    }
  
    // URL Validation
    validateUrl(url: string) {
      const pattern = /^(https?:\/\/)?([\w\-]+\.)+[\w]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
      return pattern.test(url);
    }
  
    // Phone Number Validation
    validatePhone(phoneNumber: string) {
      const pattern = /^\+?[\d\s\-().]{7,20}$/;
      return pattern.test(phoneNumber);
    }
  
    // Custom Regex Validation
    validateWithRegex(value: string, regex: RegExp) {
      return regex.test(value);
    }
  }
  