/**
 * An array to store the items.
 * @type {Array}
 */
let items = [];

/**
 * Saves the items to the local storage.
 */
function saveItems() {
  localStorage.setItem("items", JSON.stringify(items));
}

/**
 * Loads the items from the local storage and displays them.
 */
function loadItems() {
  const storedItems = localStorage.getItem("items");
  if (storedItems) {
    items = JSON.parse(storedItems);
    displayItems();
  }
}

/**
 * Creates a new item and adds it to the items array.
 * Clears the input field, saves the items, and displays them.
 */
function createItem() {
  const itemInput = document.getElementById("itemInput");
  if (itemInput.value) {
    items.push(itemInput.value);
    itemInput.value = "";
    saveItems();
    displayItems();
  }
}

/**
 * Displays the items in the itemsList element.
 */
function displayItems() {
  const itemsList = document.getElementById("itemsList");
  itemsList.innerHTML = "";
  items.forEach((item, index) => {
    itemsList.innerHTML += `<li>${item}</li>`;
  });
}

/**
 * Shows the update section by setting its display property to "block".
 */
function showUpdateSection() {
  document.getElementById("updateSection").style.display = "block";
}

function cancelUpdate() {
  document.getElementById("updateSection").style.display = "none";
}

/**
 * Updates an item in the items array.
 * Finds the index of the current item, replaces it with the new item,
 * saves the items, and displays them.
 */
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

/**
 * Deletes an item from the items array.
 * Finds the index of the item, removes it from the array,
 * saves the items, and displays them.
 */
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
