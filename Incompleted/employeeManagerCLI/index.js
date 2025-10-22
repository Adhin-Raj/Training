const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = async (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
};

let employee = [];

const main = async () => {
  try {
    const option = await askQuestion(
      "\tEmployee Manager\n   \n Menu \n    \n 1.Add employee .\n 2.List employees \n 3.Delete employee by name \n 4.exit \n Enter your option number:"
    );
    switch (option) {
        case "1":
        addEmployee(); 
        break;
      case  "2":
        if(employee.length >0){
            console.log("Employee List\n \n", employee);
        }
        else{
            console.log("No data...!")
        }
        break;
      case  "3":
        deleteEmployee();
        break;
      case '4':
        rl.close();
        break;
      default:rl.close();
    }

    const resume = await askQuestion("Do you want to continue?(yes/no):");
    if (resume.toLowerCase() === "yes") {
      main();
    } else {
      rl.close();
    }
  } catch (error) {
    console.log("error message", error);
  }
};

main();

async function addEmployee() {
  try {
    const name = await askQuestion("What's your name?:");
    const age = await askQuestion("What's your age?:");
    const role = await askQuestion("What's your role?:");
    employee = [...employee, { name: name, age: age, role: role }];
    console.log("Employees Added...!");
    menuOption()
  } catch (error) {
    console.log("error message", error);
  }
}

async function deleteEmployee() {
  try {
    const employeeName = await askQuestion("Enter employee name to delete:");
    employee = employee.filter((item) => item.name !== employeeName.toLowerCase());
    console.log("employee deleted...!");
    menuOption()
  } catch (error) {
    console.log("error message", error);
  }
}


async function menuOption(){
    const resume = await askQuestion("Do you want to continue?(yes/no)");
    if (resume.toLowerCase() === "yes") {
      main();
    } else {
      rl.close();
    }
}