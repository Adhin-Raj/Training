// 9. Write a program that checks if a given string is a valid email address.

function isEmailValid(email) {
  return email.includes(".com") && email.includes("@") ? true : false;

}

console.log(isEmailValid("test@example.com"));
console.log(isEmailValid("invalid.email.com"))
console.log(isEmailValid("user@domain"))