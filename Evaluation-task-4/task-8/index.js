const inputEl = document.getElementById('input')
const pEl = document.getElementById('para')


let searchVal;
let text;
inputEl.addEventListener('input',(e)=>{
    searchVal = e.target.value
     text =  pEl.innerText

    if(text.includes(searchVal)){
 
    }
    
    highlight()
})

function highlight() {
    console.log('running')
    pEl.innerText=text
}




