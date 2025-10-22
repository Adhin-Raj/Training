const box = document.querySelector(".box")

const colors = ['red','green','orange','yellow','blue','black','violet']

function randomColor(){
    const randomIndex = Math.floor(Math.random() * colors.length)
    box.style.background =colors[randomIndex]
}


function removeColor(){
    box.style.background ="transparent"
}
