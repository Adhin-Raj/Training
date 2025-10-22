const heightEl = document.getElementById('height')
const widthEl = document.getElementById('width')

window.addEventListener('resize',handleResize)

function handleResize(){
    heightEl.innerHTML = `window Height:${window.innerHeight}`
    widthEl.innerHTML = `window Width:${window.innerWidth}`
}