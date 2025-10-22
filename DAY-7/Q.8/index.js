const buttonEl = document.querySelector(".like-btn");
const imageEl = document.querySelector(".heart-svg");
const imageClass = "toggle";
const imageCl = imageEl.classList;

buttonEl.addEventListener("click", () => {
  const toggleImg = imageCl.toggle(imageClass);
  if (toggleImg) {
    imageEl.src = "heart-red.png";
  } else {
    imageEl.src = "heart-transparent.png";
  }
});
