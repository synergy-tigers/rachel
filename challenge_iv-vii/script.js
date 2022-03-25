let listItems = new Array();
let listIndex = 0;

function addToList() {
    let newItem = prompt("Please enter new item", "");
    listItems[listIndex] = newItem;
    listIndex++;
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(newItem));

    document.querySelector('ul').appendChild(item);
}

function printListToAlert() {
    alert(listItems.toString());
}
