const box = document.querySelector(".box");

const colors = ["red", "green", "orange", "yellow", "blue", "black", "violet"];

function changeBorder() {
  const randomIndex = Math.floor(Math.random() * colors.length);

  box.style.border = `5px solid ${colors[randomIndex]} `;
}
