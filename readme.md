# Validify

A lightweight JavaScript validation library for usernames, passwords, emails, and numbers.

## Installation

Install the package using npm :

<code>npm install input-validify</code>

<code>import Validify from "input-validify";</code><br>
<code>const vld = new Validify()</code>
<h2>Username Validation | validateText(text, special, min, max, allowedSymbols)</h2>
<p>Validify allows you to validate usernames based on length and special character restrictions.</p>
<div style='background:rgb(15,20,30);padding:20px;border-radius:10px;color:white;'>
    vld.validateText("User123",true,2,10,['_','-','@']);
</div>
<h2>Password Validation | validatePassword(password, min, max, complexity)</h2>
<p>Validate passwords with specific length requirements and complexity rules.</p>
<div style='background:rgb(15,20,30);padding:20px;border-radius:10px;color:white;'>
    vld.validatePassword("SecurePass1!", 8, 20, {<br>
        requireUppercase: true,<br>
        requireLowercase: true,<br>
        requireNumber: true,<br>
        requireSpecialChar: true,<br>
    });
</div>

<h2>Email Validation | validateEmail(email, regex)</h2>
<p>Check if an email address follows a proper format. </p>
<div style='background:rgb(15,20,30);padding:20px;border-radius:10px;color:white;'>
    vld.validateEmail("example@email.com");
</div>

<h2>Number Validation | validateNumber(number, min, max)</h2>
<p>Validate numbers with length constraints.</p>
<div style='background:rgb(15,20,30);padding:20px;border-radius:10px;color:white;'>
    vld.validateNumber(12345, 4, 10);
</div>
<br>

