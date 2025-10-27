// 2. Write a function getTicketPrice(age) that takes a person's age (a number) and returns the price of a movie ticket based on these rules:

// 	- Children (age 12 and under): $10
// 	- Adults (age 13 to 59): $20
// 	- Seniors (age 60 and over): $15

function getTicketPrice(age:number){
   if(age <=12){
    return `Children (age 12 and under): $10`
   }
   else if(age >= 13 && age <=59){
    return `Adults (age 13 to 59): $20`
   }
   else if(age >=60){
    return `Seniors (age 60 and over): $15`
   }
}

console.log(getTicketPrice(18))