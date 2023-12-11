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

function loadInput() {
  const itemInput = document.getElementById("itemInput");
  itemInput.focus();
  itemInput.select();
  itemInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      console.log("Item Created");
      createItem();
    }
  });
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
    itemsList.innerHTML += `
      <li>
        <div class="item">
          <span>${item}</span>
        </div>
        <div class="buttons">
          <button class="update" onclick="updateItem(${index})">✎</button>
          <button class="delete" onclick="deleteItem(${index})">ｘ</button>
        </div>
      </li>
    `;
  });
}

function cancelUpdate() {
  document.getElementById("updateSection").style.display = "none";
}

/**
 * Updates an item in the items array.
 * Finds the index of the current item, replaces it with the new item,
 * saves the items, and displays them.
 */
function updateItem(index) {
  // Build the form into the list item
  const itemsList = document.getElementById("itemsList");
  const item = items[index];
  itemsList.innerHTML = `
    <li>
      <div class="item">
        <input id="editInput" type="text" value="${item}">
      </div>
      <div class="buttons"> 
        <button class="delete" onclick="cancelUpdate()">Cancel</button>
      </div>
    </li>
  `;

  // update the item with new input
  setTimeout(() => {
    // wait for the DOM to update
    const editInput = document.getElementById("editInput");
    editInput.focus();
    editInput.select();
    editInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        console.log("Item Updated");
        saveUpdate(index);
      }
    });
  }, 150);
}

saveUpdate = (index) => {
  const editInput = document.getElementById("editInput");
  const newItem = editInput.value;
  if (newItem) {
    items[index] = newItem;
    saveItems();
    displayItems();
  }
};

cancelUpdate = () => {
  displayItems();
};

/**
 * Deletes an item from the items array.
 * Finds the index of the item, removes it from the array,
 * saves the items, and displays them.
 */
function deleteItem(index) {
  const itemInput = document.getElementById("itemInput");
  if (index !== -1) {
    items.splice(index, 1);
    saveItems();
    displayItems();
  }
  itemInput.value = "";
}

// Initial display
loadInput();
loadItems();
displayItems();
