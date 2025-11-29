function findGCD(a:number, b:number) {
    if (a === 0)
        return b;
    return findGCD(b % a, a);
}

   console.log(findGCD(35,15))
   console.log(findGCD(18,12))


