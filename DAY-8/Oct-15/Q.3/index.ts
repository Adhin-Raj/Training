type studentType = {
  name: string;
  marks?: number;
  result?:string
};

const student: studentType[] = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
];

function studentResults(student: studentType[]):studentType[] {
  let resultArr = new Array();
  let resultObj = new Object();

  for (let item of student) {
    if (item.marks > 50) {
      resultObj = { name: item.name, result: "Pass" };
    } else {
      resultObj = { name: item.name, result: "Fail" };
    }
    resultArr.push(resultObj);
  }

  return resultArr;
}

console.log(studentResults(student));
