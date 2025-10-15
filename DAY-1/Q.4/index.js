const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("submit-btn");
const ulEl = document.querySelector(".list");
const pendingBtn = document.getElementById("pending-btn");
const clearBtn = document.getElementById("clear");

let taskList = [];

taskList = JSON.parse(localStorage.getItem("tasks"));

buttonEl.addEventListener("click", () => {
  let tasks = {};
  tasks = { task: inputEl.value, isCompleted: false };
  let existingItem = JSON.parse(localStorage.getItem("tasks")) || [];
  existingItem = [...existingItem, tasks];
  localStorage.setItem("tasks", JSON.stringify(existingItem));
  taskList = JSON.parse(localStorage.getItem("tasks"));

  taskListMapping(taskList);
  inputEl.value = "";
});

function taskListMapping(taskList) {
  ulEl.innerHTML = "";
  taskList.map((item) => {
    const liEl = document.createElement("li");
    liEl.innerHTML = item.task;
    liEl.style.cursor = "pointer";
    if (item.isCompleted) {
      liEl.style.textDecoration = "line-through";
    }
    liEl.addEventListener("click", () => {
      liEl.style.textDecoration = "line-through";
      item.isCompleted = true;

      localStorage.setItem("tasks", JSON.stringify(taskList));
      taskList = JSON.parse(localStorage.getItem("tasks"));
    });
    ulEl.append(liEl);
  });
}

pendingBtn.addEventListener("click", () => {
  const striked = taskList.filter((task) => task.isCompleted !== true);
  taskListMapping(striked);
});

window.addEventListener("load", () => taskListMapping(taskList));

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});
