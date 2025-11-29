// 1. Write a function DetectSymmetry(matrix) that checks if a given 2D matrix is symmetric horizontally, vertically, or diagonally.
// Return an object with three boolean properties:
// horizontal — true if the matrix reads the same top-to-bottom
// vertical — true if the matrix reads the same left-to-right
// diagonal — true if the matrix equals its diagonal mirror
// (i.e., matrix[i][j] === matrix[j][i])

// function horizontalCheck(firstRow: number[], lastRow: number[]) {
//   if (firstRow.length !== lastRow.length) return   false

//   for (let i = 0; i < firstRow.length; i++) {
//     if (firstRow[i] !== lastRow[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// function verticalCheck(matrix: number[][]) {
//   const lastIndex = matrix[0].length - 1;
//   for (let i = 0; i < matrix.length; i++) {
//     if (matrix[i][0] !== matrix[i][lastIndex]) {
//       return false;
//     }
//   }

//   return true;
// }

// function diagonalCheck(matrix: number[][]) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] !== matrix[j][i]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// function DetectSymmetry(matrix: number[][]) {
//   let matrixLen = matrix.length - 1;
//   let finalResult = {}
//   const horizontalValue = horizontalCheck(matrix[0], matrix[matrixLen]);
//   finalResult = {...finalResult,horizontal:horizontalValue}
//   const verticalValue = verticalCheck(matrix);
//   finalResult = {...finalResult,vertical:verticalValue}
//   const diagonalValue = diagonalCheck(matrix);
//   finalResult = {...finalResult,diagonal:diagonalValue}
//   return finalResult
// }

// let matrix = [
//   [1, 2, 3, 2],
//   [2, 5, 6, 5],
//   [3, 6, 8, 6],
//   [2, 5, 6, 5]
// ];

// console.log(DetectSymmetry(matrix));

// 2. Write a function FindAvailableSeats(seatGrid, groupSize) that finds all horizontally consecutive seat blocks of size groupSize available (0 = empty, 1 = booked). Return each block's starting coordinate.

// function FindAvailableSeats(seatGrid: number[][], groupSize: number) {
//   let AvailableSeat = [];
//   let cor = [];
//   for (let i = 0; i < seatGrid.length; i++) {
//     let count = 0;
//     for (let j = 0; j < seatGrid[i].length; j++) {
//       if (seatGrid[i][j] === 0) {
//         count++;
//         if (count === 1) {
//           cor.push(i, j);
//         }
//       } else {
//         count = 0;
//         cor = [];
//       }

//       if (count === groupSize) {
//         AvailableSeat.push(cor);
//         cor = [];
//         if (j !== seatGrid[i].length - 1) {
//           j--;
//         }
//         count = 0;
//       }
//     }
//   }

//   return AvailableSeat;
// }

// let seatGrid = [
//   [0, 0, 0, 1, 0],
//   [1, 1, 0, 0, 0],
//   [0, 1, 1, 1, 0]
// ];

// console.log(FindAvailableSeats(seatGrid,3))

//  Write a function TeamSelection(players, teamSize) that lists all unique possible team combinations from a list of players. Each team should be represented as an array of names.

// function TeamSelection(players: string[], teamSize: number): string[][] {
//     const teams: string[][] = [];

//     function buildTeam(start: number, team: string[]) {

//         if (team.length === teamSize) {
//             teams.push([...team]);
//             return;
//         }

//         for (let i = start; i < players.length; i++) {
//             team.push(players[i]);
//             buildTeam(i + 1, team);
//             team.pop();
//         }
//     }

//     buildTeam(0, []);
//     return teams;
// }

// const players = ["Alice", "Bob", "Charlie",'David'];
// const teamSize = 3;

// const allTeams = TeamSelection(players, teamSize);

// console.log("All teams:", allTeams);
// console.log("Total teams:", allTeams.length);

// function TeamSelection(players:string[],teamSize:number){
//     let allCombinationTeam:string[][] = []

//     function buildTeam(start:number,team:string[]) {

//         if(team.length === teamSize) {
//             allCombinationTeam.push([...team])
//             return
//         }

//         for(let i= start;i<players.length;i++) {
//             team.push(players[i])
//             buildTeam(i + 1,team)
//             team.pop()
//         }
//     }

//     buildTeam(0,[])

//     return allCombinationTeam
// }

// console.log(TeamSelection( ["Alice", "Bob", "Charlie",'David'],2))

// permutation question

// function simplePermutations(str:string){
//     let result:string[] = []

//     function permute(current:string,remaining:string) {
//         if(remaining.length === 0) {
//             result.push(current)
//             return
//         }

//         for(let i=0;i<remaining.length;i++) {
//             const next = remaining[i]
//             const rest = remaining.slice(0,i) + remaining.slice(1+i)
//             permute(current+ next,rest)
//         }
//     }

//     permute("",str)

//     return result
// }

// console.log(simplePermutations('ABC'))

// Write a function AnalyzeHeatmap(heatmap) that takes a 2D array of temperature readings and returns an object with:
// - maxTemp, minTemp, averageTemp
// - coordinates of the hottest and coldest points.
// Example:
// Input: [[30,32,35],[28,40,33],[31,36,38]]
// Output: { maxTemp: 40, minTemp: 28, averageTemp: 33.7, hottestPoint: [1,1], coldestPoint: [1,0] }

// function AnalyzeHeatmap(heatmap:number[][]) {
//     let maxTemp = heatmap[0][0]
//     let minTemp = heatmap[0][0]
//     const averageTemp = ((heatmap.flat().reduce((acc,item)=> acc + item ,0))/heatmap.flat().length).toFixed(1)
//     let hottestPoint:number[]=[]
//     let coldestPoint:number[]=[]
//     for(let i=0;i<heatmap.length;i++) {
//         for(let j=0;j<heatmap[i].length;j++) {
//             if(maxTemp < heatmap[i][j]) {
//                 maxTemp = heatmap[i][j]
//                 hottestPoint = [i,j]
//             }
//             if(minTemp > heatmap[i][j]) {
//                 minTemp = heatmap[i][j]
//                 coldestPoint = [i,j]
//             }
//         }
//     }

//     return {maxTemp:maxTemp,minTemp:minTemp,averageTemp:averageTemp,hottestPoint:hottestPoint,coldestPoint:coldestPoint}
// }

// console.log(AnalyzeHeatmap([[30,32,35],[28,40,33],[31,36,38]]))

// Write a function SortMixedNested(arr) that takes an array of mixed types and nested arrays, and sorts all numbers in ascending order recursively, keeping the same nested structure.
// Example:
// Input: [3, [2, [5, 1]], 4]
// Output: [1, [2, [3, 4]], 5

// type NestedArray =  number | NestedArray[]

// function SortMixedNested(arr:NestedArray) {
//     let allNumber:number[]=[]
//     function flattenArr(a:NestedArray) {
//         if(typeof a === 'number') {
//             allNumber.push(a)
//         }
//         else{
//             a.forEach(flattenArr)
//         }
//     }

//     flattenArr(arr)

//     allNumber.sort((a,b)=>a-b)

//     function rebuild (a:NestedArray) : NestedArray {
//         if(typeof a === 'number' ) {
//            return allNumber.shift()!;
//         }
//         else{
//           return a.map(rebuild)
//         }
//     }

//    return rebuild(arr)
// }

// console.log(SortMixedNested([3, [2, [5, 1]], 4]))

// 4.Write a function SortCandidatesByScoreAndExperience(candidates) that processes a deeply nested list of candidate profiles.
// The function should filter invalid entries, normalize data types, calculate derived values, and finally return a sorted list of simplified candidate summaries.
// Filter:
// Include only candidates where:
// profile.personal.active === true
// profile.professional.performance.score exists and is valid
// profile.professional.experience.totalYears >= 2

// Sorting Rules:
// performance.score descending
// experience.totalYears descending
// application.submission.date ascending
// profile.personal.name alphabetically ascending

// Compute submittedDaysAgo = number of days between now and submission.date.

// Return:
// An array of simplified summaries in this format:

// interface outputType {
//   name: string;
//   age: number;
//   experience: number;
//   score: number;
//   submittedDaysAgo: number;
// }

// interface inputType {
//     id: number;
//   profile: {
//     personal: {
//         name: string;
//         dob: string;
//         active: boolean;
//     };
//     professional: {
//         experience: {
//             totalYears: number;
//             domains: string[];
//         };
//         performance: {
//             score: string | null;
//             lastReview: string;
//         };
//     };
// };
// application: {
//     position: {
//         title: string;
//         level: string;
//     };
//     submission: {
//       date: string;
//       referred: boolean;
//     };
// };
// }

// function SortCandidatesByScoreAndExperience(data: inputType[]) {
//   const filtered = data.filter(
//     (item) =>
//       {
//        const  active = item.profile.personal.active === true
//     const  experience = item.profile.professional.experience.totalYears >= 2

//     const rawScore = item.profile.professional.performance.score

//     if(!rawScore) return false

//     const numericScore = Number(rawScore.replace('%',''))

//     return active && experience && !isNaN(numericScore)

//       }

//   );

//   let outputData: outputType[] = [];

//   const today = new Date();

//   filtered.map((item) => {
//     let currentAge = Math.abs(
//       Number(item.profile.personal.dob.slice(0, 4)) - today.getFullYear()
//     );
//     let submittedDate = new Date(item.application.submission.date);
//     const diff = Math.floor(
//       (today.getTime() - submittedDate.getTime()) / (1000 * 60 * 60 * 24)
//     );

//     let outputObj: outputType = {
//       name: item.profile.personal.name,
//       age: currentAge,
//       experience: item.profile.professional.experience.totalYears,
//       score: Number(item.profile.professional.performance.score?.slice(0, -1)),
//       submittedDaysAgo: diff,
//     };
//     outputData.push(outputObj);
//   });

//   return outputData.sort((a,b)=> {
//     if(a.score !== b.score) return b.score - a.score
//     if(b.experience !== a.experience) return b.experience - a.experience
//     if(a.submittedDaysAgo !== b.submittedDaysAgo) return b.submittedDaysAgo - a.submittedDaysAgo

//     return a.name.localeCompare(b.name)
//   })
// }

// console.log(
//   SortCandidatesByScoreAndExperience([
//     {
//       id: 1001,
//       profile: {
//         personal: { name: "Alice Johnson", dob: "1992-08-12", active: true },
//         professional: {
//           experience: { totalYears: 5, domains: ["frontend", "ui"] },
//           performance: { score: "91%", lastReview: "2024-12-01" },
//         },
//       },
//       application: {
//         position: { title: "Frontend Engineer", level: "Mid" },
//         submission: { date: "2025-02-10", referred: true },
//       },
//     },
//     {
//       id: 1002,
//       profile: {
//         personal: { name: "Brian Lee", dob: "1989-05-05", active: true },
//         professional: {
//           experience: { totalYears: 8, domains: ["backend", "api"] },
//           performance: { score: "87.5%", lastReview: "2024-11-28" },
//         },
//       },
//       application: {
//         position: { title: "Backend Engineer", level: "Senior" },
//         submission: { date: "2025-01-25", referred: false },
//       },
//     },
//     {
//       id: 1003,
//       profile: {
//         personal: { name: "Clara Doe", dob: "1995-11-30", active: false },
//         professional: {
//           experience: { totalYears: 4, domains: ["fullstack"] },
//           performance: { score: "90%", lastReview: "2024-09-05" },
//         },
//       },
//       application: {
//         position: { title: "Fullstack Developer", level: "Mid" },
//         submission: { date: "2025-01-12", referred: true },
//       },
//     },
//     {
//       id: 1004,
//       profile: {
//         personal: { name: "David Kim", dob: "1990-03-17", active: true },
//         professional: {
//           experience: { totalYears: 3, domains: ["frontend"] },
//           performance: { score: null, lastReview: "2024-08-10" },
//         },
//       },
//       application: {
//         position: { title: "UI Developer", level: "Junior" },
//         submission: { date: "2025-02-01", referred: true },
//       },
//     },
//     {
//       id: 1005,
//       profile: {
//         personal: { name: "Eva Green", dob: "1994-10-22", active: true },
//         professional: {
//           experience: { totalYears: 6, domains: ["frontend", "design"] },
//           performance: { score: "93.2%", lastReview: "2024-12-15" },
//         },
//       },
//       application: {
//         position: { title: "Frontend Architect", level: "Senior" },
//         submission: { date: "2025-01-20", referred: false },
//       },
//     },
//   ])
// );

// function lastTenDigits(n:number) {
//     if (typeof (n) != 'number' || Math.round(n) !== n || n <= 0)
//         return 'Invalid number';
//     let sum = 0n;
//     for (let i = 1n; i <= BigInt(n); i++) {
//         sum += i ** i;
//     }
//     let result = sum.toString().slice(-10).padStart(10, '0');
//     return result;
// }

// console.log(lastTenDigits(10))

// async function ParallelLimit<T>(tasks:Array<()=>Promise<T>>,limit:number) :Promise<T[]> {
//     const result:T[] = []
//     let index = 0

//    async function worker() {
//      while(index < tasks.length) {
//         const taskIndex = index++
//         const task  = tasks[taskIndex]
//         result[index] = await task()
//     }
//    }

//     const workers = Array.from({length:Math.min(limit,tasks.length)},()=>{
//         worker()
//     })

//     await Promise.all(workers)

// }

// const tasks = [
//   () => fetch('/api/1'),
//   () => fetch('/api/2'),
//   () => fetch('/api/3')
// ];

// await ParallelLimit(tasks, 2);

// async function ParallelLimit<T>(
//   tasks: Array<() => Promise<T>>,
//   limit: number
// ): Promise<T[]> {
//   const result: T[] = [];
//   let index = 0;

//   async function worker() {
//     while (index < tasks.length) {
//       const taskIndex = index;
//       const task = tasks[index];
//       index++;
//       result[taskIndex] = await task();
//     }
//   }

//   const workers = Array.from(
//     { length: Math.min(limit, tasks.length) },
//     () => worker()
//   );

//   await Promise.all(workers);

//   return result;
// }

// // Example tasks
// const tasks = [
//   () => fetch('/api/1').then(res => res.json()),
//   () => fetch('/api/2').then(res => res.json()),
//   () => fetch('/api/3').then(res => res.json())
// ];

// // Call the function
// async function resultFun() {
//   try {
//     const result = await ParallelLimit(tasks, 2);
//     console.log(result);
//   } catch (err) {
//     console.error('Error:', err);
//   }
// }

// resultFun();

// 1. Write a program to rotate an matrix by 90deg (clockwise).
// Input:  [
// [1,2,3],
// [4,5,6],
// [7,8,9]]

// Output: [
// [7,4,1],
// [8,5,2],
// [9,6,3]]

// function rotate90Deg(matrix: number[][]) {
//   let rotated = [];
//   let subArr = [];
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = matrix.length - 1; j >= 0; j--) {
//       subArr.push(matrix[j][i]);
//     }
//     rotated.push(subArr);
//     subArr = [];
//   }

//   return rotated;
// }

// const matrix = [
//   [1,2],
//   [3,4]
// ];

// console.log(rotate90Deg(matrix));

// 2. Write a program to parse query string into an object. Use '&' as separator.

// Input: "name=John&age=20"
// Output: { name: "John", age: "20" }

// function separator(query:string) {
//   let queryArr = query.split('&')
//   let obj:{[key:string]:string} = {}

//   for(query of queryArr) {
//     const splited = query.split('=')
//     obj[splited[0]] = splited[1]
//   }
//   return obj
// }

// console.log(separator("name=John&age=20"))

// 5. Given a nested object and a target key, return the path to the key.

// Input: {a:{b:{c:1}}}, "c"
// Output: ['a','b','c']

// function targetedPath(obj: any, tar: string) {
//   let path: string[] = [];
//   function targetArr(obj: any) {
//     for(let key in obj){
//         if(typeof obj[key] === 'object'  && tar !== key){
//             path.push(key)
//             targetArr(obj[key])
//         }
//         if(key !== tar && typeof obj[key] !== 'object') {
//             path = []
//         }
//         if(key === tar) {
//                 path.push(key)
//                 return path
//             }
//         }

//   }

//     targetArr(obj);

//     if(path.includes(tar)){
//         return path
//     }
//     else{
//         return "target is not present or nested is not object"
//     }
// }

// console.log(targetedPath({ a: { b: { c: 1 } } }, "c"));
// console.log(targetedPath({ x: 10, y: 20 }, "y"));
// console.log(targetedPath({ a: { b: 2 } },"z"))
// console.log(targetedPath({ a: { b: 2 }, c: 5 },"c"))
// console.log(targetedPath({
//   a: { b: { x: 1 } },
//   p: { q: { r: { target: 9 } } }
// },"target"))

// console.log(targetedPath({
//   a: [
//     { b: 1 },
//     { c: { d: 5 } }
//   ]
// },"d"))

// console.log(targetedPath( {
//   a: { target: 1 },
//   b: { c: { target: 2 } }
// },"target"))
// console.log(targetedPath( { a: { b: { c: { d: { e: { f: 42 } } } } } }, "f"
// ))

// Promise Function Practice

// Write a Promise that resolves after 3 seconds with the message "Done!".

// new Promise((res,rej)=>{
//     res("Done!")
// }).then((res)=>console.log(res))

// Create a function that returns a Promise which rejects if a number is negative and resolves otherwise.

// function numberCheck(num:number):Promise<string>{
//     return new Promise((res,rej)=>{
//         if(num < 0){
//             rej("Number is negative")
//         }
//         else{
//             res("number is positive")
//         }
//     })
// }

// const fun = numberCheck(-1)

// fun.then((res)=>console.log(res)).catch((error)=>console.log(error))

// Convert a callback-based function (e.g., setTimeout) into a Promise-based one.

// function promiseCallback(ms:number){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log("it will load after "+ms/1000+' seconds')
//         }, ms);
//     })
// }

// promiseCallback(3000).then((res)=>console.log(res)).catch((err)=>console.log(err))

// function toPromise(callback:Function) {
//     return new Promise((res,rej)=>{
//         try {
//             callback(res)
//         } catch (error) {
//             rej(error)
//         }
//     })
// }

// function timer(res:Function) {
//     setTimeout(() => {
//         console.log('Message came after 2 seconds')
//         res()
//     }, 2000);

// }

// toPromise(timer).then((res)=>console.log(res)).catch((err)=>console.log(err))

// Chain two Promises so that the second one uses the result of the first.

// const p =new Promise((res:(num:number)=>void)=>{
//     res(1)
// })

// p.then((res:number)=> res + 1).then((res)=>console.log(res + 1))

// Write code that logs "Success" if the Promise resolves and "Error" if it rejects.

// function promiseFun(message:string) {
//     return new Promise((res,rej)=>{
//     if(message === "Success"){
//         res(message)
//     }
//     else if(message === 'Error'){
//         rej(message)
//     }
// })
// }

// let p = promiseFun('Error')

// p.then((res)=>console.log(res)).catch((err)=>console.log("err",err))

// Use Promise.all to wait for three Promises that resolve at different times.

// const promiseOne = new Promise((res)=> {
//     setTimeout(() => {

//         res("promise one ")
//     },2000);
// })
// const promiseTwo = new Promise((res)=>{
//     setTimeout(() => {

//         res("promise Two ")
//     },4000);
// })
// const promiseThree = new Promise((res)=>{
//     setTimeout(() => {

//         res("promise Three ")
//     },6000);
// })
// Promise.all([promiseOne,promiseTwo,promiseThree]).then((res)=>console.log(res)).catch((err)=>console.log(err))

// Use Promise.race to return whichever Promise finishes first.

// const promiseOne = new Promise((res,rej)=> {
//         rej("promise one")
// })
// const promiseTwo = new Promise((res,rej)=>{
//     rej("promise two")
// })
// const promiseThree = new Promise((res,rej)=>{
//     rej("promise three")
// })

// Promise.any([promiseOne,promiseTwo,promiseThree]).then((res)=>console.log(res)).catch((err)=>console.log(err))

// Implement a function retry<T>(fn: () => Promise<T>, retries: number) that retries a failed Promise.

// with Promise

// function retry<T>(fn:()=>Promise<T>,retries:number):Promise<T> {
//         return fn().catch((err)=>{
//             if(retries <= 0) {
//                 return Promise.reject(err)
//             }
//             else{
//               return  retry(fn,retries -1)
//             }
//         })
// }

// const p = ()=>new Promise((res,rej)=>{
//     console.log('Trying...')
//     rej('Failed')
// })

// retry(p,4).then((res)=>console.log('Success')).catch((err)=>console.log(err))

// with async/await

// async function retry<T>(fn:()=>Promise<T>,retries:number):Promise<T> {
//     try {
//        return await fn()
//     } catch (error) {
//         if(retries  === 0) {
//              throw error
//         }
//         else{
//           return  retry(fn,retries -1 )
//         }
//     }
// }

// const p = ()=>new Promise((res,rej)=>{
//     console.log('Trying...')
//     rej('Failed')
// })

// retry(p,3).then((res)=>console.log(res)).catch((err)=>console.log(err))

// Create a function that runs an array of tasks sequentially using Promises (not async/await).

// const task1 = () =>
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("Task 1 done!");
//       res(1 + 1);
//     }, 30);
//   });

// const task2 = () =>
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("Task 2 done!");
//       res(2 + 2);
//     }, 20);
//   });

// function sequentially(taskList:Array<Function>) {
//     let result:number[] = []

//     let chain:Promise<number | void> = Promise.resolve()

//     taskList.forEach((task)=>{
//         chain =  chain.then(()=>task()).then((res)=> result.push(res))
//     })

//     return chain.then(()=>result)
// }

// sequentially([task1,task2])

//  Implement your own small version of Promise.all.

function parallelRunning(taskList: Array<() => Promise<any>>) {
  return new Promise((res, rej) => {
    let result: any[] = [];
    let completed = 0;

    if (taskList.length === 0) {
      res([]);
    }

    taskList.forEach((task, index) => {
      task()
        .then((val) => {
          result[index] = val;
          completed++;

          if (completed === taskList.length) {
            res(result);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
}

parallelRunning([task1, task2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));



// Implement a timeout wrapper:

// timeout<T>(promise: Promise<T>, ms: number): Promise<T>

// which rejects if the Promise doesn’t finish in time.


 function timeout<T>(promise:Promise<T>,ms:number) {
  return new Promise((res,rej)=>{
     const timer = setTimeout(() => {
      rej(new Error('Rejected'))
     }, ms);

     promise.then((val)=>{
      clearTimeout(timer)
      res(val)
     }).catch((err)=>rej(err))
  })

}

const p = new Promise((res)=>setTimeout(() => {
    res('resolved')
}, 2000))

timeout(p,2000).then((res)=>console.log(res)).catch((err)=>console.log(err))


// Write an async function getValueUntilGreaterThanTen(fetchFn) that:
// Repeatedly calls the provided async function fetchFn() until it returns a value greater
// than 10, and then returns that value.
// Example:
// Input:
// fetchFn → an async function that returns random numbers between 1 and 20
// Output: value: 14


const fetchFn = async () =>  Math.floor(Math.random() * 20) + 1

async function getValueUntilGreaterThanTen(fetchFn:()=>Promise<number>) {
  while(true){
    const val = await fetchFn()
    if(val > 10) {
      return val
    }
  }
}

getValueUntilGreaterThanTen(fetchFn).then((res)=>console.log(res))



// Write a function ParallelLimit(tasks, limit) where tasks is an array of functions that return Promises. Run only limit promises concurrently until all are resolved.
// Example:

async function ParallelLimit<T>(tasks: Array<() => Promise<T>>, limit: number): Promise<T[]> {
    const results: T[] = [];
    let index = 0;

    async function worker() {
        while (index < tasks.length) {
            const current = index++;   
            results[current] = await tasks[current]();
        }
    }

    const workers = Array.from({ length: Math.min(limit, tasks.length) }, () => worker());

    await Promise.all(workers);

    return results;
}

const tasks = [
    () => fetch('https://jsonplaceholder.typicode.com/todos/1').then(r => r.json()),
    () => fetch('https://jsonplaceholder.typicode.com/todos/2').then(r => r.json()),
    () => fetch('https://jsonplaceholder.typicode.com/todos/3').then(r => r.json())
];

ParallelLimit(tasks, 3).then((res)=>console.log(res)).catch((err)=>console.log(err))



// Remove Duplicates from an Array Without Using Set
//        Return a new array with unique values.

// function removeDuplicates(arr:number[]) {
//     let newArr:number[] = []

//     for(let i=0;i<arr.length;i++) {
//         if(!newArr.includes(arr[i])){
//             newArr.push(arr[i])
//         }
//     }

//     return newArr
// }

// console.log(removeDuplicates([1,2,2,3,3,3,4]))



// .  Find the Most Frequent Element in an Array
// input: [1,2,2,3,3,3,4]
// output: 3


// function mostFrequent(arr:number[]) {
//     let obj:{[key:number]:number} ={}

//     for(let num of arr) {
//         if(!obj[num]){
//             obj[num] = 1
//         }
//         else{
//             obj[num] = obj[num] + 1
//         }
//     }

//     return Object.entries(obj).sort((a,b)=>b[1] - a[1])[0][0]
// }

// console.log(mostFrequent([1,2,2,2,2,3,3,3,4]))


// Check if a Number is Armstrong Number (An Armstrong number is a number that is equal to the sum of its own digits, each raised to the power of the total number of digits)
//      Armstrong Number: 153 = 1³ + 5³ + 3³

// function armStrongNum(num:number) {
//     const strNum = String(num)
//     const len  = strNum.length
//     let arr=[]
//     for(let i=0;i<len;i++) {
//        arr.push(Number(strNum[i]) ** len) 
//     }
    
//     return arr.reduce((acc,item)=>acc += item,0) == num
// }   


// console.log(armStrongNum(371))

