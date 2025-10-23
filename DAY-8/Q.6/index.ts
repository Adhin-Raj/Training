// 6. Create an enum Direction with values Up, Down, Left, and Right.
// Write a function that takes a direction and logs a message like "You moved Up!".


 enum Direction {
  Up="Up",
  Down="Down",
  Left="Left",
  Right="Right"
}

function movedDirection(val:Direction){
   return `You moved ${val}!`
}

console.log(movedDirection(Direction.Up))