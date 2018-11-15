function newElement() {
    let item = document.getElementById('task').value;
    let toDoList = JSON.parse(localStorage.getItem('task')) || {};

    let text = document.createTextNode(item);
    let newItem = document.createElement('li');
    newItem.appendChild(text);
    addIcon(newItem);
    document.getElementById('toDoList').appendChild(newItem);

    toDoList[Object.keys(toDoList).length]={item};
    localStorage.setItem('task', JSON.stringify(toDoList));
    document.forms[0].reset();

    if (item === '' || null) {
        alert('Add some task!');
        newItem.style.display = "none";
    }
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
