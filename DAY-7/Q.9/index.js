const createBtn = document.getElementById("create-btn")
const inputText = document.getElementById("text-field")
const ulEl  = document.querySelector(".list-container")

let listArr = []

const createList =()=>{
    listArr = [...listArr,inputText.value]
    listMap()
}

function listMap(){
    ulEl.innerHTML =""
    listArr.map((item)=>{
        const liEl = document.createElement("li")
        ulEl.append(liEl)
        liEl.innerText = item

    })
}