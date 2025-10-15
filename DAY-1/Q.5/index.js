const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const result = document.getElementById("result");

let count = 0;

result.style.fontSize = "40px";

incrementBtn.addEventListener("click", () => {
  if (count < 10) {
    count += 1;
  }
  resultShowing(count);
});

decrementBtn.addEventListener("click",() => {
  if (count > -10) {
    count -= 1;
  }
  resultShowing(count);
});

resetBtn.addEventListener("click",() => {
  count = 0;
  resultShowing(count);
});

function resultShowing(count) {
  result.innerText = count;
  if (count <= 10 && count > 0) {
    result.style.color = "green";
  } else if (count >= -10 && count < 0) {
    result.style.color = "red";
  } else {
    result.style.color = "grey";
  }
}

window.addEventListener("load",()=> resultShowing(count));
