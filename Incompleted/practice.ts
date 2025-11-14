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

type NestedArray =  number | NestedArray[]

function SortMixedNested(arr:NestedArray) {
    let allNumber:number[]=[]
    function flattenArr(a:NestedArray) {
        if(typeof a === 'number') {
            allNumber.push(a)
        }
        else{
            a.forEach(flattenArr)
        }
    }

    flattenArr(arr)

    allNumber.sort((a,b)=>a-b)

    function rebuild (a:NestedArray) : NestedArray {
        if(typeof a === 'number' ) {
           return allNumber.shift()!;
        }
        else{
          return a.map(rebuild)
        }
    }

   return rebuild(arr)
}

console.log(SortMixedNested([3, [2, [5, 1]], 4]))

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

interface outputType {
  name: string;
  age: number;
  experience: number;
  score: number;
  submittedDaysAgo: number;
}

interface inputType {
    id: number;
  profile: {
    personal: {
        name: string;
        dob: string;
        active: boolean;
    };
    professional: {
        experience: {
            totalYears: number;
            domains: string[];
        };
        performance: {
            score: string | null;
            lastReview: string;
        };
    };
};
application: {
    position: {
        title: string;
        level: string;
    };
    submission: {
      date: string;
      referred: boolean;
    };
};
}


function SortCandidatesByScoreAndExperience(data: inputType[]) {
  const filtered = data.filter(
    (item) =>
      item.profile.personal.active === true &&
      item.profile.professional.experience.totalYears >= 2 &&
      isNaN(Number(item.profile.professional.performance.score))
  );

  let outputData: outputType[] = [];

  const today = new Date();

  filtered.map((item) => {
    let currentAge = Math.abs(
      Number(item.profile.personal.dob.slice(0, 4)) - today.getFullYear()
    );
    let submittedDate = new Date(item.application.submission.date);
    const diff = Math.floor(
      (today.getTime() - submittedDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    let outputObj: outputType = {
      name: item.profile.personal.name,
      age: currentAge,
      experience: item.profile.professional.experience.totalYears,
      score: Number(item.profile.professional.performance.score?.slice(0, -1)),
      submittedDaysAgo: diff,
    };
    outputData.push(outputObj);
  });

  return outputData.sort((a,b)=> b.score - a.score)
}

console.log(
  SortCandidatesByScoreAndExperience([
    {
      id: 1001,
      profile: {
        personal: { name: "Alice Johnson", dob: "1992-08-12", active: true },
        professional: {
          experience: { totalYears: 5, domains: ["frontend", "ui"] },
          performance: { score: "91%", lastReview: "2024-12-01" },
        },
      },
      application: {
        position: { title: "Frontend Engineer", level: "Mid" },
        submission: { date: "2025-02-10", referred: true },
      },
    },
    {
      id: 1002,
      profile: {
        personal: { name: "Brian Lee", dob: "1989-05-05", active: true },
        professional: {
          experience: { totalYears: 8, domains: ["backend", "api"] },
          performance: { score: "87.5%", lastReview: "2024-11-28" },
        },
      },
      application: {
        position: { title: "Backend Engineer", level: "Senior" },
        submission: { date: "2025-01-25", referred: false },
      },
    },
    {
      id: 1003,
      profile: {
        personal: { name: "Clara Doe", dob: "1995-11-30", active: false },
        professional: {
          experience: { totalYears: 4, domains: ["fullstack"] },
          performance: { score: "90%", lastReview: "2024-09-05" },
        },
      },
      application: {
        position: { title: "Fullstack Developer", level: "Mid" },
        submission: { date: "2025-01-12", referred: true },
      },
    },
    {
      id: 1004,
      profile: {
        personal: { name: "David Kim", dob: "1990-03-17", active: true },
        professional: {
          experience: { totalYears: 3, domains: ["frontend"] },
          performance: { score: null, lastReview: "2024-08-10" },
        },
      },
      application: {
        position: { title: "UI Developer", level: "Junior" },
        submission: { date: "2025-02-01", referred: true },
      },
    },
    {
      id: 1005,
      profile: {
        personal: { name: "Eva Green", dob: "1994-10-22", active: true },
        professional: {
          experience: { totalYears: 6, domains: ["frontend", "design"] },
          performance: { score: "93.2%", lastReview: "2024-12-15" },
        },
      },
      application: {
        position: { title: "Frontend Architect", level: "Senior" },
        submission: { date: "2025-01-20", referred: false },
      },
    },
  ])
);
