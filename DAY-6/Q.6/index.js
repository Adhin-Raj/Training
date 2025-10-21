// Given a password string, check and print whether it is Weak, Medium, or Strong based on these rules:

function passwordCheck(password) {
  if (password.length < 6) return `Weak`;
  const regexMedium = /\d|[@#!$%^&*?]/g;
  const regexStrong = /(?=.*[@#!$%^&*?])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/g;
  console.log(regexStrong.test(password));
  if (password.length >= 6 && regexStrong.test(password)) {
    return "Strong";
  } else if (password.length >= 6 && regexMedium.test(password)) {
    return `Medium`;
  }

  return `Weak`;
}

console.log(passwordCheck("pass981234"));
