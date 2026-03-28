const navData = [
  {
    title: "Main 1",
    dropdown: [
      { label: "Sub 1", items: ["item A", "item B", "item C"] },
      { label: "Sub 2", items: ["item X", "item Y"] }
    ]
  },
  {
    title: "Main 2",
    dropdown: [
      { label: "Sub 3", items: ["item 1", "item 2"] },
      { label: "Sub 4", items: ["item 3", "item 4", "item 5"] }
    ]
  }
];

const navEl = document.getElementById("nav-list");

function createNav() {
  navData.forEach(mainItem => {
    const mainDiv = document.createElement("div");
    mainDiv.className = "mainHead";
    mainDiv.textContent = mainItem.title;

    mainDiv.addEventListener("mouseenter", () =>
      showDropdown(mainDiv, mainItem)
    );
    mainDiv.addEventListener("mouseleave", () =>
      hideDropdown(mainDiv)
    );

    navEl.append(mainDiv);
  });
}

function showDropdown(mainDiv, mainItem) {
  hideDropdown(mainDiv);

  const dropdown = document.createElement("div");
  dropdown.className = "drop-container-one";

  mainItem.dropdown.forEach(subItem => {
    const subDiv = document.createElement("div");
    subDiv.className = "sub-menu-one";
    subDiv.textContent = subItem.label;

    subDiv.addEventListener("mouseenter", () =>
      showSubMenu(subDiv, subItem)
    );
    subDiv.addEventListener("mouseleave", () =>
      hideSubMenu(subDiv)
    );

    dropdown.append(subDiv);
  });

  mainDiv.append(dropdown);
}

function hideDropdown(mainDiv) {
  const dropdown = mainDiv.querySelector(".drop-container-one");
  if (dropdown) dropdown.remove();
}

function showSubMenu(subDiv, subItem) {
  hideSubMenu(subDiv);

  const subMenu = document.createElement("div");
  subMenu.className = "sub-menu-two";

  subItem.items.forEach(text => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "sub-menu-item";
    itemDiv.textContent = text;
    subMenu.append(itemDiv);
  });

  subDiv.append(subMenu);
}

function hideSubMenu(subDiv) {
  const menu = subDiv.querySelector(".sub-menu-two");
  if (menu) menu.remove();
}

createNav();
