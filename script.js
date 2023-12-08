let items = [];

function saveItems() {
  localStorage.setItem("items", JSON.stringify(items));
}

function loadItems() {
  const storedItems = localStorage.getItem("items");
  if (storedItems) {
    items = JSON.parse(storedItems);
    displayItems();
  }
}

function createItem() {
  const itemInput = document.getElementById("itemInput");
  if (itemInput.value) {
    items.push(itemInput.value);
    itemInput.value = "";
    saveItems();
    displayItems();
  }
}

function displayItems() {
  const itemsList = document.getElementById("itemsList");
  itemsList.innerHTML = "";
  items.forEach((item, index) => {
    itemsList.innerHTML += `<li>${item}</li>`;
  });
}

function showUpdateSection() {
  document.getElementById("updateSection").style.display = "block";
}

function updateItem() {
  const currentItem = document.getElementById("currentItem").value;
  const newItem = document.getElementById("newItem").value;
  const index = items.indexOf(currentItem);
  if (index !== -1) {
    items[index] = newItem;
    saveItems();
    displayItems();
  }
  document.getElementById("currentItem").value = "";
  document.getElementById("newItem").value = "";
}

function deleteItem() {
  const itemInput = document.getElementById("itemInput");
  const index = items.indexOf(itemInput.value);
  if (index !== -1) {
    items.splice(index, 1);
    saveItems();
    displayItems();
  }
  itemInput.value = "";
}

// Initial display
loadItems();
displayItems();
