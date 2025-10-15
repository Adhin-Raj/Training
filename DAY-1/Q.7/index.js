const ulEl = document.getElementById("ul-tag");

let postData = [];
let userData = [];
let newData = [];

async function fetchData() {
  try {
    const responsePost = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const responseUser = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    postData = await responsePost.json();
    userData = await responseUser.json();
    userMerging(postData, userData);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

function userMerging(postData, userData) {
  for (const item of postData) {
    for (const user of userData) {
      if (item.userId === user.id) {
        newData = [...newData,{ ...item,...user,id:item.id}];
      }
    }
  }
  console.log(newData)
}



