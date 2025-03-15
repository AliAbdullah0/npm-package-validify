export default class Validify {
    validateText(text: string, special?: boolean, min?: number, max?: number, allowedSymbols?: string[]): boolean;
    validatePassword(password: string, min?: number, max?: number, complexity?: {
        requireUppercase: boolean;
        requireLowercase: boolean;
        requireNumber: boolean;
        requireSpecialChar: boolean;
    }): boolean;
    validateEmail(email: string, regex?: RegExp): boolean;
    validateNumber(num: number | string, min?: number, max?: number): boolean;
    validateDate(date: string, format: string): boolean;
    validateUrl(url: string): boolean;
    validatePhone(phoneNumber: string): boolean;
    validateWithRegex(value: string, regex: RegExp): boolean;
}
