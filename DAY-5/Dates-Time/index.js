//1

// console.log(`${new Date().getDate()} ${new Date().getHours() % 12}:${new Date().getMinutes()}:${new Date().getSeconds() }`)
// console.log(`${new Date().getUTCDate()} ${new Date().getUTCHours()}:${new Date().getMinutes()}:${new Date().getUTCSeconds()}`)

//2

// const date = new Date('2025-01-01T00:00:00Z')
// console.log(date.toISOString())
// console.log(date.toLocaleString())

//3

// function daysBetween(date1, date2) {
//   const noDays = {year:365,month:30}
//     let day = 0

//   const year1 = new Date(date1).getFullYear()
//   const year2 = new Date(date2).getFullYear()
//   const month1 = new Date(date1).getMonth()
//   const month2 = new Date(date2).getMonth()
//   const day1  = new Date(date1).getDate()
//   const day2  = new Date(date2).getDate()

//    if(Math.abs(year1-year2) > 0){
//      day = day + Math.abs(year1-year2) * noDays.year
//    }
//    else if(Math.abs(month1 - month2) > 0){
//     day =day +  Math.abs(month1 - month2) * noDays.month
//    }
//    else{
//      day = day + Math.abs(day1 - day2)
//    }
  
//    return day

// }

// console.log(daysBetween("11/08/2025", "11/31/2025"));

//4

// function addDays(date,n){
//     const event = new Date(date);
//     event.setDate(event.getDate() + n);
//    return event.getDate()
// }

// console.log(addDays('8/15/2024',10))



//3 after referring


// function daysBetween(date1, date2){
//  const oneDay = 24 * 60 * 60 * 1000 //one day in milliseconds
//  const firstDate = new Date(date1)
//  const secondDate = new Date(date2)

//  const diff = Math.round(Math.abs(firstDate - secondDate)/oneDay)

//  return diff
// }

// console.log(daysBetween("11/08/2025", "11/01/2025"))