function newElement() {
    let item = document.getElementById('task').value;
    let text = document.createTextNode(item);
    let newItem = document.createElement('li');
    newItem.appendChild(text);
    addIcon(newItem);
    document.getElementById('toDoList').appendChild(newItem);
    localStorage.setItem('task', item);
}


function addIcon(element) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.setAttribute('onclick','removeItem(event)');
    span.appendChild(txt);
    element.appendChild(span);
}

function removeItem(event) {
    event.target.parentElement.remove();
}