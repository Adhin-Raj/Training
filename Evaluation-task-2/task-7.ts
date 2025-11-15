// Write a function to return only valid emails without using regex.​
// An email is considered valid only if:
// It contains exactly one @ symbol.
// It has a non-empty local part (before @).
// Local part must contain only letters, digits, dots (.), underscores (_), and hyphens
// (-).
// It cannot start or end with .
// It cannot have consecutive dots (“..”).
// It has a non-empty domain part (after @).
// Domain must contain at least one dot (.).
// Domain name parts must be letters or digits only (no hyphens at start/end).
// The last part (TLD) must be at least 2 letters (e.g., .com, .in, .org).No spaces allowed anywhere.​
// Example​
// ["test@mail.com", "abc@", "ok@gmail.com"] → ["test@mail.com", "ok@gmail.com"]

function validEmail(emailList: string[]) {
  let afterValidation = [];

  for (let email of emailList) {
    let indexOfDot = email.indexOf(".");
    let lastPart = email.slice(indexOfDot + 1, email.length);
    let HasHyphensStartEnd =
      !email.includes("-") &&
      email.indexOf("-") !== 0 &&
      email.indexOf("-") !== email.length - 1;

    if (
      email.includes("@") &&
      email.indexOf("@") !== 0 &&
      (email.indexOf(".") !== 0 || email.indexOf(".") !== email.length - 1) &&
      !email.includes("..") &&
      email.indexOf("@") !== email.length - 1 &&
      lastPart.length >= 2 &&
      HasHyphensStartEnd &&
      !email.includes(" ")
    ) {
      afterValidation.push(email);
    }
  }

  return afterValidation;
}

console.log(
  validEmail(["test@mail.com", "abc@", "ok@gmail.com", "ok@gmail.m","test-@gmail.com","-test.com","walter2@gmail.com"])
);

