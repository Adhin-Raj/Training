// 5. Write a function which receives 'n' number of number arguments, and it should return their sum. (Note: Arguments can be in any count).

function sumOfArr(...args) {
  for (const item of args) {
    if (typeof item !== "number") {
      return "input should be number";
    }
  }
  return args.reduce((acc, item) => item + acc, 0);
}

function sumOfArgTest(array) {
  array.forEach((element) => {
    const result = sumOfArr(...element[0]);
    console.log(result)
    if (result === element[1] || isNaN(result)) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  sumOfArgTest([
    [[1,2,3,4],10],
    [[1,2,3,4,5,6,7,8,9],45],
    [[-1,0,1,2],2],
    [[-2,-1,0,1,2,3],3],
    [['1','2','3'],"input should be number"],
    [[true,false,true,false,false],"input should be number"],
    [[NaN, NaN, NaN], NaN],
    [[1,2,3,true,'2'],"input should be number"],
    [[3,4,5,6,9],27],
    [[(item)=>item *2,(item)=>item + 1],"input should be number"],
    [[{a:1,b:2},{c:2,d:1}],"input should be number"],
    [[100000,200000,300000,400000],1000000],
    [[[1],[2],[3],[4],[5]],"input should be number"],
    [["","","",""],"input should be number"],
    [[1.1,1.2,1.3,1.4],5]
  ])
);
