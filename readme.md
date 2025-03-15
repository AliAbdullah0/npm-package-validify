# 📦 Validify

A lightweight and powerful JavaScript validation library for usernames, passwords, emails, numbers, dates, URLs, phone numbers, and more — now with standardized error codes for cleaner error handling.

---

## 🚀 Installation

Install the package using npm:

```bash
npm install input-validify
```

---

## 📥 Import & Usage

```js
import Validify from "input-validify";

const vld = new Validify();
```

---

## 🔤 Username Validation

### `validateText(text, special = false, min = 2, max = 20, allowedSymbols = [])`

Validates a text input such as a username by restricting special characters and setting length limits.

#### Parameters:
- `text`: string — The input text to validate.
- `special`: boolean — Allow special characters (`true`) or not (`false`).
- `min`: number — Minimum character length.
- `max`: number — Maximum character length.
- `allowedSymbols`: string[] — Custom allowed special characters (optional).

#### Example:
```js
vld.validateText("User_123", true, 2, 10, ['_', '-', '@']);
```

---

## 🔐 Password Validation

### `validatePassword(password, min = 6, max = 20, complexity = {})`

Validates passwords for minimum/maximum length and character complexity.

#### Parameters:
- `password`: string — The password to validate.
- `min`: number — Minimum character length.
- `max`: number — Maximum character length.
- `complexity`: object — Complexity rules:
  - `requireUppercase`: boolean
  - `requireLowercase`: boolean
  - `requireNumber`: boolean
  - `requireSpecialChar`: boolean

#### Example:
```js
vld.validatePassword("StrongPass123!", 8, 20, {
  requireUppercase: true,
  requireLowercase: true,
  requireNumber: true,
  requireSpecialChar: true,
});
```

---

## 📧 Email Validation

### `validateEmail(email, regex?)`

Validates email format using default or custom regular expression.

#### Parameters:
- `email`: string — Email address to validate.
- `regex`: RegExp — Optional custom regex.

#### Example:
```js
vld.validateEmail("example@email.com");

// With custom regex
vld.validateEmail("user@gmail.com", /^[a-z0-9._%+-]+@gmail\.com$/i);
```

---

## 🔢 Number Validation

### `validateNumber(number, min = 4, max = 20)`

Validates number or numeric string length.

#### Parameters:
- `number`: number|string — The number to validate.
- `min`: number — Minimum length.
- `max`: number — Maximum length.

#### Example:
```js
vld.validateNumber(123456, 4, 10);
```

---

## 📅 Date Validation

### `validateDate(date, format)`

Validates date string based on format.

#### Supported Formats:
- `YYYY-MM-DD`
- `DD/MM/YYYY`
- `MM/DD/YYYY`
- `YYYY/MM/DD`
- `YYYY-MM-DD HH:mm:ss`
- `DD/MM/YYYY HH:mm:ss`
- `MM/DD/YYYY HH:mm:ss`
- `YYYY/MM/DD HH:mm:ss`
- `YYYY-MM-DDTHH:mm:ss`
- `YYYY-MM-DDTHH:mm:ss.SSS`

#### Parameters:
- `date`: string — The date string to validate.
- `format`: string — The expected format.

#### Example:
```js
vld.validateDate("2025-03-15", "YYYY-MM-DD");
vld.validateDate("15/03/2025 10:30:00", "DD/MM/YYYY HH:mm:ss");
```

---

## 🌐 URL Validation

### `validateUrl(url)`

Validates if the string is a valid URL.

#### Parameters:
- `url`: string — The URL to validate.

#### Example:
```js
vld.validateUrl("https://example.com");
```

---

## 🔎 Regex Validation

### `validateWithRegex(value, regex)`

Custom validation using regular expressions.

#### Parameters:
- `value`: string — The value to validate.
- `regex`: RegExp — The regular expression.

#### Example:
```js
vld.validateWithRegex("abc123", /^[a-z0-9]+$/i);
```

---

## ☎️ Phone Number Validation

### `validatePhone(phoneNumber)`

Validates phone numbers in various formats.

#### Parameters:
- `phoneNumber`: string — The phone number to validate.

#### Example:
```js
vld.validatePhone("+1 (123) 456-7890");
vld.validatePhone("123-456-7890");
```

---

## ❗ Error Handling

All methods throw **Error objects with error codes** instead of plain text messages, so you can handle errors more programmatically:

#### Example:
```js
try {
  vld.validateText("");
} catch (err) {
  console.log(err.message); // Example: "ERR_TEXT_EMPTY"
}
```

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Ali Abdullah  
[GitHub](https://github.com/AliAbdullah0)