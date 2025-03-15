declare module 'validify' {
    export interface PasswordComplexityOptions {
      requireUppercase?: boolean;
      requireLowercase?: boolean;
      requireNumber?: boolean;
      requireSpecialChar?: boolean;
    }
  
    export type DateFormat =
      | 'YYYY-MM-DD'
      | 'DD/MM/YYYY'
      | 'MM/DD/YYYY'
      | 'YYYY/MM/DD'
      | 'YYYY-MM-DD HH:mm:ss'
      | 'DD/MM/YYYY HH:mm:ss'
      | 'MM/DD/YYYY HH:mm:ss'
      | 'YYYY/MM/DD HH:mm:ss'
      | 'YYYY-MM-DDTHH:mm:ss'
      | 'YYYY-MM-DDTHH:mm:ss.SSS';
  
    export default class Validify {
      /**
       * Validate a string text.
       * @throws Error with `.code` like 'TEXT_EMPTY', 'TEXT_TOO_SHORT', etc.
       */
      validateText(
        text?: string,
        special?: boolean,
        min?: number,
        max?: number,
        allowedSymbols?: string[]
      ): true;
  
      /**
       * Validate a password with optional complexity rules.
       * @throws Error with `.code` like 'PASSWORD_TOO_SHORT', etc.
       */
      validatePassword(
        password?: string,
        min?: number,
        max?: number,
        complexity?: PasswordComplexityOptions
      ): true;
  
      /**
       * Validate an email with a custom or default regex.
       * @throws Error with `.code` = 'EMAIL_INVALID'
       */
      validateEmail(email?: string, regex?: RegExp): true;
  
      /**
       * Validate a number or numeric string.
       * @throws Error with `.code` like 'NUMBER_TOO_SHORT', etc.
       */
      validateNumber(number: number | string, min?: number, max?: number): true;
  
      /**
       * Validate a date string against common formats.
       * @throws Error with `.code` = 'DATE_INVALID_FORMAT'
       */
      validateDate(date: string, format: DateFormat): true;
  
      /**
       * Validate a URL.
       * @throws Error with `.code` = 'URL_INVALID'
       */
      validateUrl(url: string): true;
  
      /**
       * Validate a value using custom regex.
       * @throws Error with `.code` = 'REGEX_VALIDATION_FAILED'
       */
      validateWithRegex(value: string, regex: RegExp): true;
  
      /**
       * Validate a phone number string.
       * @throws Error with `.code` = 'PHONE_INVALID'
       */
      validatePhone(phoneNumber: string): true;
    }
  }
  