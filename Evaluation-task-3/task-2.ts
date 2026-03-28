// Write a function checkSameWeek(date1, date2) that:​
// Checks whether the two given dates fall in the same calendar week.​
// Example:
// Input:
// date1 = "2025-01-02" //Thursday
// date2 = "2025-01-05" //sunday
// Output: false​

function checkSameWeek(date1:string,date2:string) {
    let dateUpdated1 = new Date(date1)
    let dateUpdated2 = new Date(date2)

    const diffDay = Math.abs(dateUpdated1.getDay() - dateUpdated2.getDay())
    const diffDate = Math.abs(dateUpdated1.getDate() - dateUpdated2.getDate())

    if(diffDate >= 7) {
        return false
    }
    else if( diffDate >= diffDay) {
        return true
    }
    else{
        return false
    }
}

console.log(checkSameWeek("2025-01-02","2025-01-05"))//false
console.log(checkSameWeek("2025-01-04","2025-01-02"))//true
console.log(checkSameWeek("2025-01-01","2025-01-02"))//true
console.log(checkSameWeek("2025-01-05","2025-01-11"))//true

