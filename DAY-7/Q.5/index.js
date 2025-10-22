const box = document.querySelector(".box");

const colors = ["red", "green", "orange", "yellow", "blue", "black", "violet"];

let isIndex = false;

function changeBorder() {
  if (!isIndex) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    isIndex = true;
    box.style.border = `5px solid ${colors[randomIndex]} `;
  }
}
