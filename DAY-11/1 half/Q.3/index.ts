// 3. Create a person Object, which contains below said properties:
// 	- A firstName property (e.g., "John")
// 	- A lastName property (e.g., "Doe").
// 	- A birthYear property (e.g., 1990).
// 	- A method called getFullName() that returns the person's full name (e.g., "John Doe")
// 	- A method called getAge() that calculates and returns the person's current age.

interface personType{
    firstName:string,
    lastName:string,
    birthYear:string,
    getFullName:()=> string,
    getAge:()=> number
}


const person:personType={
    firstName:"John",
    lastName:"Doe",
    birthYear:"1990",
    getFullName:()=>{
        return `${person.firstName} ${person.lastName}`
    },
    getAge:()=>{
        const currentYear = new Date().getFullYear()
        return currentYear - Number(person.birthYear)
    }
}

console.log(person.getFullName())
console.log(person.getAge())
