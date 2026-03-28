// 1. Write a function AnalyzeHeatmap(heatmap) that takes a 2D array of temperature readings and returns an object with:
// - maxTemp, minTemp, averageTemp
// - coordinates of the hottest and coldest points.

// Input: [[30,32,35],[28,40,33],[31,36,38]]
// Output: { maxTemp: 40, minTemp: 28, averageTemp: 33.7, hottestPoint: [1,1], coldestPoint: [1,0] }


function AnalyzeHeatmap(array:number[][]) {
    const flattenArr = array.flat()
    const maxTemp = Math.max(...flattenArr)
    const minTemp = Math.min(...flattenArr)
    const averageTemp = Number((flattenArr.reduce((item,acc)=> item+=acc,0) / flattenArr.length).toFixed(1))
    let hottestPoint:number[]=[]
    let coldestPoint:number[]=[]
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++) {
            if(array[i][j] === maxTemp){
                hottestPoint = [i,j]
             }
             else if(array[i][j] === minTemp) {
                coldestPoint = [i,j]
             }
        }
    }

    return {maxTemp:maxTemp,minTemp:minTemp,averageTemp:averageTemp,hottestPoint:hottestPoint,coldestPoint:coldestPoint}
}

console.log(AnalyzeHeatmap([[30,32,35],[28,40,33],[31,36,38]]))