const textInput = document.getElementById("text-input")
const resultEl = document.getElementById("result")


textInput.addEventListener('keypress',handleInput)

function handleInput(){ 
setTimeout(()=>{
    if(textInput.value !== ''){
        resultEl.innerHTML = `Hello, ${textInput.value}`
    }
    else{
        resultEl.innerHTML =''
    }
    
},1000)
} 