//1

// const today = new Date()

// console.log(today.toLocaleDateString("en-US"))
// console.log(today.toLocaleDateString("en-GB"))

//2

// const today = new Date()

// console.log("date",new Intl.DateTimeFormat("en-US",{
//     timeZone:'America/New_York'
// }).format(today))
// console.log("date",new Intl.DateTimeFormat("en-US",{
//     timeZone:'Asia/Kolkata'
// }).format(today))

// console.log("date",new Intl.DateTimeFormat("en-US",{
//     timeZone:'Asia/Kolkata'

// }).format(today))

//3

// console.log(new Intl.DateTimeFormat("en-US",{
//      dateStyle: 'long', timeStyle: 'short' 
// }).format(today))


//4

function formatTimeZone(zone) {
  try {
    const date = new Date();
    const formatDate = new Intl.DateTimeFormat("en-US", {
      timeZone: zone,
    }).format(date);

    return formatDate;
  } catch (error) {
    return "invalid time zone";
  }
}

function formatTimeZoneTest(array) {
  array.forEach((item) => {
    const result = formatTimeZone(item[0]);
    // console.log(result)
    if (result === item[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  formatTimeZoneTest([
    ["Asia/Kolkata", "10/31/2025"],
    ["Africa/Abidjan", "10/31/2025"],
    ["Australia/Sydney", "10/31/2025"],
    ["hello", "invalid time zone"],
    [123, "invalid time zone"],
    [()=>item  + item,"invalid time zone"],
    [[],"invalid time zone"],
    ["Asia/Kathmandu","10/31/2025"],
    ["Pacific/Honolulu","10/31/2025"],
    ["America/Los_Angeles","10/31/2025"],
    ["Europe/Minsk","10/31/2025"],
    ["Asia/Yakutsk","10/31/2025"],
    ["Asia/Bangkok","10/31/2025"],
    [true,"invalid time zone"],
    [["Pacific/Honolulu","Asia/Bangkok"],'invalid time zone']
  ])
);
