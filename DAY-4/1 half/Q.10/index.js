// 10. Write a program that checks if a given string is a valid email address.

function emailValidator(str){
    const regEx = /.com$/g
    if(!(str.match("@") && str.match(regEx))) return false

    return true
}

console.log(emailValidator("test@example.com"))
console.log(emailValidator("invalid.email.com"))
console.log(emailValidator( "user@domain")) 
