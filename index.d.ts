declare class Validify {
    /**
     * Validate text with optional special characters and length constraints.
     */
    validateText(
      text: string,
      special?: boolean,
      min?: number,
      max?: number,
      allowedSymbols?: string[]
    ): boolean;
  
    /**
     * Validate a password with optional complexity rules and length constraints.
     */
    validatePassword(
      password: string,
      min?: number,
      max?: number,
      complexity?: {
        requireUppercase?: boolean;
        requireLowercase?: boolean;
        requireNumber?: boolean;
        requireSpecialChar?: boolean;
      }
    ): boolean;
  
    /**
     * Validate email format (custom or default regex).
     */
    validateEmail(email: string, regex?: RegExp): boolean;
  
    /**
     * Validate a number (as string or number) with digit length constraints.
     */
    validateNumber(num: number | string, min?: number, max?: number): boolean;
  
    /**
     * Validate a date string with a specified format.
     */
    validateDate(date: string, format: string): boolean;
  
    /**
     * Validate URL format.
     */
    validateUrl(url: string): boolean;
  
    /**
     * Validate phone number format.
     */
    validatePhone(phoneNumber: string): boolean;
  
    /**
     * Validate string using custom regular expression.
     */
    validateWithRegex(value: string, regex: RegExp): boolean;
  }
  
  export default Validify;
  