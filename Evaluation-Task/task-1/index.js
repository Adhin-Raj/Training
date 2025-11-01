const nameEl = document.getElementById("name");
const ageEl = document.getElementById("age");
const addressEl = document.getElementById("address");
const genderEl = document.getElementById("gender");
const prevResultEl = document.querySelectorAll(".isPassed");
const favSubEl = document.querySelectorAll(".favorite-sub");
const submitBtn = document.getElementById("submit-btn");
const clearBtn = document.getElementById("clear-btn");
const ulEl = document.getElementById("student-list");

let student = {
  name: "",
  age: "18",
  address: "",
  gender: "male",
  hasPassedPreviousExam: "",
  favSubject: [],
};
let favSub = [];
let studentData = [];

nameEl.addEventListener("change", (e) => {
  student = { ...student, name: e.target.value };
  clearBtn.disabled = false;
});

ageEl.addEventListener("change", (e) => {
  student = { ...student, age: e.target.value };
  clearBtn.disabled = false;
});

addressEl.addEventListener("change", (e) => {
  student = { ...student, address: e.target.value };
  clearBtn.disabled = false;
});

genderEl.addEventListener("change", (e) => {
  student = { ...student, gender: e.target.value };
  clearBtn.disabled = false;
});

prevResultEl.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.checked) {
      student = { ...student, hasPassedPreviousExam: e.target.value };
      clearBtn.disabled = false;
    }
  });
});

favSubEl.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.checked) {
      favSub.push(e.target.value);
      student = { ...student, favSubject: favSub };
      clearBtn.disabled = false;
    }
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let flag = true;
  for (let key in student) {
    if ((student[key] === "" && flag) || (student[key].length < 1 && flag)) {
      console.log(`${key} field is missing...!`);
      flag = false;
    }
  }
  if (flag) {
    studentData = JSON.parse(localStorage.getItem("student")) || [];
    studentData = [...studentData, student];
    localStorage.setItem("student", JSON.stringify(studentData));

    listStudentData();
  }
});

clearBtn.addEventListener("click", () => {
  window.location.reload();
});

let liEl;

function listStudentData() {
  studentData = JSON.parse(localStorage.getItem("student"));
  ulEl.innerHTML = "";
  studentData.map((data, index) => {
    liEl = document.createElement("li");
    ulEl.append(liEl);
    liEl.innerHTML = data.name;
    liEl.className = "student-lists";
    liEl.style.cursor = "pointer";
    liEl.addEventListener("click", () => expandList(index));
  });
}

function expandList(index) {
  let liListEl = document.querySelectorAll(".student-lists");
  const studentList = studentData[index];

  liListEl[index].innerHTML = `<div>
  Name:${studentList.name}<br>
  Age:${studentList.age}<br>
  Address:${studentList.address}<br>
  Gender:${studentList.gender}<br>
  Has passed previous exam:${studentList.hasPassedPreviousExam}<br>
  Favorite subject:
  </div>`;

  studentList?.favSubject?.map((item) => {
    liListEl[index].innerHTML += item + " ,";
  });
}

listStudentData();
