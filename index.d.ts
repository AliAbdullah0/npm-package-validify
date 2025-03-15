declare module "input-validify" {
  export interface PasswordComplexity {
    requireUppercase?: boolean;
    requireLowercase?: boolean;
    requireNumber?: boolean;
    requireSpecialChar?: boolean;
  }

  export type DateFormat =
    | "YYYY-MM-DD"
    | "DD/MM/YYYY"
    | "MM/DD/YYYY"
    | "YYYY/MM/DD"
    | "YYYY-MM-DD HH:mm:ss"
    | "DD/MM/YYYY HH:mm:ss"
    | "MM/DD/YYYY HH:mm:ss"
    | "YYYY/MM/DD HH:mm:ss"
    | "YYYY-MM-DDTHH:mm:ss"
    | "YYYY-MM-DDTHH:mm:ss.SSS";

  export default class Validify {
    validateText(
      text?: string,
      special?: boolean,
      min?: number,
      max?: number,
      allowedSymbols?: string[]
    ): boolean;

    validatePassword(
      password?: string,
      min?: number,
      max?: number,
      complexity?: PasswordComplexity
    ): boolean;

    validateEmail(email?: string, regex?: RegExp): boolean;

    validateNumber(number: number | string, min?: number, max?: number): boolean;

    validateDate(date: string, format: DateFormat): boolean;

    validateUrl(url: string): boolean;

    validateWithRegex(value: string, regex: RegExp): boolean;

    validatePhone(phoneNumber: string): boolean;
  }
}
