// 1. Write a program that should interpret each array item as a number, and return the sum.

function arrayInterpretSum(arrNum) {
  let flatArr = arrNum.flat();
  for (let i = 0; i < flatArr.length; i++) {
    if (typeof flatArr[i] !== "number") {
      return "input should be numbers";
    }
  }

  return arrNum.reduce((acc, item) => Number(item.join("")) + acc, 0);
}

function arraySumTest(array){
    array.forEach(element => {
        const result = arrayInterpretSum(element[0])
        if(result === element[1]){
            console.log("Passed")
        }
        else{
            console.log("Failed")
        }
    });

    return "Completed...!"
}

console.log(arraySumTest([
    [[[1,2,3], [0, 7]],130],
    [[[5,2,3], [0, 4],[6,2]],589],
    [[[1,0,0,1],[0,0,0,2],[0,0,0,1],[0,0,0,5]],1009],
    [[['1','3',"4"],[0,0,0,2],[0,0,0,1],[0,0,0,5]],"input should be numbers"],
    [[[true,false,true],[true,false]],"input should be numbers"],
    [[[1,2,3,4,5,6,7,8,9,0],[1,0,0,0,0,0,0,0,0,0]],2234567890],
    [[[[1],[2],[3]],[1,2,4]],"input should be numbers"],
    [[[],[]],0],
    [[[{a:1,b:3},{a:2}]],"input should be numbers"],
    [[[1,4],[4,4]],58],
    [[[true,false],[1,3]],"input should be numbers"],
    [[[(item)=>item + 1],[9]],"input should be numbers"],
    [[[1,1,1,1],[2,2,2,2],[4,4,4,4]],7777],
    [[[12,53,90],[23,52,66]],360656],
    [[[1],[2],[3],[4],[5],[6],[8],[9],[10]],48]
]))
