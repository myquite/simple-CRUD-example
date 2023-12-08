let items = [];

function createItem(item) {
  items.push(item);
  console.log(`Item ${item} created`);
}

function readItems() {
  console.log("Items List:");
  items.forEach((item) => console.log(item));
}

function updateItem(item, newItem) {
  const index = items.indexOf(item);
  items[index] = newItem;
  console.log(`Item ${item} updated to ${newItem}`);
}

function deleteItem(item) {
  const index = items.indexOf(item);
  items.splice(index, 1);
  console.log(`Item ${item} deleted`);
}

createItem("Apple");
createItem("Banana");
createItem("Orange");
readItems();

updateItem("Banana", "Pineapple");
readItems();

deleteItem("Orange");
readItems();
