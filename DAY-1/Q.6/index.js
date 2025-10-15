const tableRow = document.getElementById("table-data");
const randomUser = document.getElementById("random-pick");
const searchInput = document.getElementById("searchInput");

let result = [];
async function fetchUser() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
    result = data.results;
    listingUsers(result);
  } catch (error) {
    console.log(error);
  }
}

//table heading is not working
fetchUser(); //what about normal calling without the load function

function listingUsers(data) {
  tableRow.innerHTML = "";
  if (data.length > 0) {
    data.map((item) => {
      const trEl = document.createElement("tr");
      tableRow.append(trEl);
      return (trEl.innerHTML = `<td><img src="${item.picture.medium}" alt="user-image"/></td>
                            <td>${item.name.title}. ${item.name.first} ${item.name.last}</td>
                            <td>${item.email}</td>`);
    });
  } else {
    tableRow.innerHTML = `<div>No data found</div>`;
  }
}

randomUser.addEventListener("click", fetchUser);

searchInput.addEventListener("change", (e) => {
  const { value } = e.target;
  console.log(value);
  if (value === "") {
    return listingUsers(filtered);
  }

  const searchName = value.toLocaleLowerCase();

  const filtered = result.filter(
    (item) =>
      item.name.first.toLocaleLowerCase() === value ||
      item.name.last.toLocaleLowerCase() === searchName ||
      item.name.first.toLocaleLowerCase() +
        " " +
        item.name.last.toLocaleLowerCase() ===
        searchName
  );

  listingUsers(filtered);
});
