// 9. Write a function to remove duplicate characters from the given string.

function removeDuplicates(str) {
  if (typeof str !== "string") return "input should be string";

  const dupObj = new Set(str);
  let afterDup = "";
  for (const char of dupObj) {
    afterDup += char;
  }

  return afterDup;
}

function removeDuplicatesTest(array){
    array.forEach((item)=>{
        const result = removeDuplicates(item[0])
        if(result === item[1]){
            console.log("Passed")
        }
        else{
            console.log("Failed")
        }
    })

    return "Completed...!"
}

console.log(removeDuplicatesTest([
    ['apple','aple'],
    ['malayalam','maly'],
    ['programming','progamin'],
    ["",""],["a",'a'],
    ["AaAaBbBb","AaBb"],
    ["HelloHELLO","HeloELO"],
    ["hello world","helo wrd"],
    [" hello guys "," heloguys"],
    ["!!@@##$$","!@#$"],
    ["abc!@#abc!@#","abc!@#"],
    ["aA1!aA1!","aA1!"],
    [true,"input should be string"],
    [123,"input should be string"],
    [["hello"],"input should be string"]
]))






