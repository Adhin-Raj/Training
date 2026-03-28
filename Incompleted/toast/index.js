const toastBtn = document.querySelector(".toast-btn");
const toastContainer = document.querySelector(".toast-container");

let toasts = [];
let index = 1;

toastBtn.addEventListener("click", () => {
  toasts.unshift({
    id: index,
    content: `Toast content ${index}`,
  });

  index++;
  displayToast();
});

function displayToast() {
  toastContainer.innerHTML = "";
if(toasts.length === 0){
return index = 1
} 
  toasts.forEach((toast) => {
    const toastEl = document.createElement("div");
    toastEl.classList.add("toast");

    toastEl.innerHTML = `
      <p>${toast.content}</p>
      <button class="close-btn">X</button>
    `;

    toastEl.querySelector(".close-btn").addEventListener("click", () => {
      closeToast(toast.id);
    });

    toastContainer.appendChild(toastEl);

    setTimeout(() => {
      closeToast(toast.id);
    }, 3000);
  });



}

function closeToast(index) {
  toasts = toasts.filter((item) => item.id !== index);
  displayToast();
}
