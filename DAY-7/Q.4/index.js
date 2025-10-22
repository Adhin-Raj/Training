const inputEl = document.getElementById("text-input");
let tableEl = document.getElementById("table");

let keyList = [];

inputEl.addEventListener("keydown", (e) => {
  const { key, keyCode } = e;
  if (keyList.length === 10) {
    keyList.shift();
    keyList = [...keyList, { keyName: key, keyCode: keyCode }];
  } else {
    keyList = [...keyList, { keyName: key, keyCode: keyCode }];
  }

  keyListMap();
});

function keyListMap() {
    tableEl.innerHTML=""
    tableEl.innerHTML = ` <tr>
      <th>No</th>
      <th>key</th>
      <th>key Code</th>
    </tr>
    `
    console.log(keyList)
  keyList.map((item, index) => {
    tableEl.innerHTML += `<td>${index + 1}</td><td>${item.keyName}</td><td>${
      item.keyCode
    }</td>`;
  });
}
