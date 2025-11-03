const textInput = document.getElementById("text-input")
const resultEl = document.getElementById("result")



function display() {
    resultEl.innerHTML=`Hello ${textInput.value}`
}

function debounce(callback, delay) {
    let timer
    return function() {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback();
        }, delay)
    }
}

const betterFun = debounce(display,1000)

textInput.addEventListener('input',betterFun)