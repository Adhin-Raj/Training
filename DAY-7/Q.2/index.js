const textEl = document.getElementById("text-area");
const btnEl = document.querySelector(".toggle-btn");
const textShowEl = document.querySelector(".text-show");
const textCl = textEl.classList;
let textVal = "";

textEl.addEventListener("input", (e) => {
  textVal = e.target.value;
});

btnEl.addEventListener("click", () => {
  const toggleFun = textCl.toggle(textVal);

  if (toggleFun) {
    textShowEl.innerHTML = textVal;
  } else {
    textShowEl.innerHTML = "";
  }
});
