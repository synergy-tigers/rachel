let listItems = new Array();
let listIndex = 0;

function addItemFromPrompt() {
    let newItem = prompt("Please enter new item", "");
    updateList(newItem);
}

function addItemFromForm() {
    let newItem = document.getElementById("itemInput").value;
    updateList(newItem);
}

function updateList(newItem) {
    listItems[listIndex] = newItem;
    listIndex++;

    let item = document.createElement('li');
    item.appendChild(document.createTextNode(newItem)); 
    document.querySelector('ul').appendChild(item);
}

function printListToAlert() {
    alert(listItems.toString());
}
