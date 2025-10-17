const inputEl = document.getElementById("image-input");
const divEl = document.getElementById("show-image");
const deleteBtn = document.getElementById("delete-btn");

let imageArr = [];
let selectedImg = [];

function fileDisplay() {
  const src = URL.createObjectURL(this.files[0]);
  imageArr.push(src);
  handleShowImage(imageArr);
  inputEl.value = null;
}

function uploadMessage(imageArr) {
  if (!imageArr.length > 0) {
    return (divEl.innerHTML = `<span class="empty-text" >Upload images to see</span>`);
  }
}

function deleteImg(index) {
  const afterDeleted = imageArr.filter((_, i) => i !== index);
  imageArr = afterDeleted;
  uploadMessage(imageArr);
  handleShowImage(imageArr);
}

function handleShowImage(imageList, selected = []) {
  divEl.innerHTML = "";
  if (selected.length > 0) {
    deleteBtn.classList = "active";
  } else {
    deleteBtn.classList.remove("active");
    deleteBtn.classList.add("select-delete");
  }
  imageList.map((item, index) => {
    const newDiv = document.createElement("div");
    if (item == selected[index]) {
      newDiv.style.border = "2px solid rgb(255, 136, 92)";
    }
    newDiv.className = "image-container";
    divEl.append(newDiv);
    return (newDiv.innerHTML = `<img src=${item} alt="uploaded-image" onclick="selectImage(${index})" /> 
        <button onclick="deleteImg(${index})" class="delete-btn">X</button>`);
  });
}

function selectImage(index) {
  const afterFilter = imageArr.filter((_, i) => i === index);
  if (!selectedImg.includes(afterFilter[0])) {
    selectedImg.push(afterFilter[0]);
  }
  handleShowImage(imageArr, selectedImg);
}

function displayDelete() {
  const afterDeleted = imageArr.filter((item) => !selectedImg.includes(item));
  imageArr = afterDeleted;
  selectedImg = [];
  handleShowImage(imageArr, selectedImg);
}

deleteBtn.addEventListener("click", displayDelete);

uploadMessage(imageArr);
inputEl.addEventListener("change", fileDisplay);
