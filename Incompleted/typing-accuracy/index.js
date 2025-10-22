const inputEl = document.querySelector(".input-field");
const paraEl = document.querySelector(".word");
const accEl = document.getElementById("accuracy")


const wordArr = [
  "The sun rises in the east and sets in the west.",
  "A skilled guitarist performs at local bars.",
  "The cat sat on the mat.",
  "My pen broke and leaked blue ink all over my new dress.",
  "The old apple revels in its authority",
];

let randomWord = ""

function randomWordSelect() {
   randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
   paraEl.innerHTML=`Type this to check accuracy: ${randomWord}`
}

randomWordSelect();


function handleTyping(e){
    const {value} = e.target
    let count=0;
        inputEl.style.color="gray"
    // for(let i=0;i<randomWord.length;i++){
    confirm.length(value[value.length] , randomWord[value.length])
        if(value[value.length] === randomWord[value.length]){
            // console.log(value[i],randomWord[i])
            inputEl.style.color="green"
        }
        else{
            inputEl.style.color="red"
        }
    // }

    // if(value.length === randomWord.length){
        for(let i=0;i<value.length;i++){
            if(value[i] === randomWord[i]){
                count++
            }
        }
    // }

    let accuracy = ((count/randomWord.length) * 100).toFixed(2)

    accEl.innerHTML=`Accuracy:${accuracy}`

}


inputEl.addEventListener("input",handleTyping)