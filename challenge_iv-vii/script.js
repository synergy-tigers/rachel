let x = document.getElementById("addBtn");

function addToList() {
    let newItem = prompt("Please enter new item", "");
    
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(newItem));

    document.querySelector('ul').appendChild(item);
}
