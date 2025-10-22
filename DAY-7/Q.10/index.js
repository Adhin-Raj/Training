const pEl = document.querySelector(".text");

pEl.style.display = "none";

window.addEventListener("keydown", (e) => {
  const {key,shiftKey} = e
  console.log(key,shiftKey)
  if(shiftKey && (key==='A' || key==='a')){
    pEl.style.display = "block";
  }
});

