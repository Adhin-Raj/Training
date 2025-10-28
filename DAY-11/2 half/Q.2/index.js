const ulEl = document.querySelector(".list-container");

let x = 0;
let y = 0;

const cricketers = [
  "Mahendra Singh Dhoni",
  "Virat Kohli",
  "Rohit",
  "A B D villiers",
  "Jasprit Bumrah"
];

cricketers.map((item, index) => {
  ulEl.innerHTML += `<li onmouseenter="handleMouseEnter(${index})" onmouseleave="handleMouseLeave(${index})" class="list">${item}</li>`;
});

const liEl = document.querySelector(".list");
let buttonEl;

function handleMouseEnter(i) {
  const btnEl = document.createElement("button");
  ulEl.children[i].append(btnEl);
  btnEl.classList = "tooltip";
  btnEl.innerText = cricketers[i];
  buttonEl = document.querySelector(".tooltip");
}

function handleMouseLeave(i) {
  buttonEl.classList = "none";
}

window.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
  buttonEl.style.top = `${y}px`;
  buttonEl.style.left = `${x}px`;
});
