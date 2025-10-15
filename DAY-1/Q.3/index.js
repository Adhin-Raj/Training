
const students = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
];

[
  { name: "Alice", status: "Fail" },
  { name: "Bob", status: "Pass" },
  { name: "Charlie", status: "Fail" },
]

function  studentResult(students){
    let resultList =[]
    let resultObj = {}
    for(const item of students ){
        if(item.marks > 60){
         resultObj={name:item.name,result:"Pass"}
        }
        else{
         resultObj={name:item.name,result:"Fail"}
        }
        resultList.push(resultObj)
    }
    return resultList
}

console.log(studentResult(students))


