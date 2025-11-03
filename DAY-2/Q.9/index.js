// 9. Write a program that checks if a given string is a valid email address.

function isEmailValid(email) {
  if(typeof email !== 'string') return "input should be string"
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
  const result = email.match(regEx)
  return  result?.[0] === email ? true : false

}

function emailTest(array) {
  array.forEach(element => {
    const result = isEmailValid(element[0])
    if(result === element[1]) {
      console.log("Passed")
    }
    else{
      console.log("Failed")
    }
  });

  return "Completed...!"
}

console.log(emailTest([
  ["test@example.in",true],
  ["invalid.email.com",false],
  ["user@domain",false],
  [1244234,"input should be string"],
  ["user12@gmail.com",true],
  [true,"input should be string"],
  ["user12@gmailcom",false],
  [["user@gmail.com"],"input should be string"],
  [{a:"user@gmail.com"},"input should be string"],
  [null,"input should be string"],
  [undefined,"input should be string"],
  ["walter-123@gmail.com",true],
  ["walter@124@gmail.com",false],
  ["",false],
  ["Walter%@gmail.com",true]
]))

