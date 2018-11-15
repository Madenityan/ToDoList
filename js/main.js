function newElement() {
    let item = document.getElementById('task').value;
    let text = document.createTextNode(item);
    let newItem = document.createElement('li');
    newItem.appendChild(text);
    addIcon(newItem);
    document.getElementById('toDoList').appendChild(newItem);

    let toDoList = JSON.parse(localStorage.getItem('task')) || {};
    toDoList[Object.keys(toDoList).length]={item};
    localStorage.setItem('task', JSON.stringify(toDoList));

    document.forms[0].reset();

    if (item === '' || null) {
        alert('Add some task!');
        newItem.style.display = "none";
    }
}

document.body.onkeydown = function (enter) {
    enter = enter || window.event;
    let keyCode = enter.keyCode || enter.charCode;
    if (keyCode === 13) {
        newElement();
    }
};

function onLoad() {
    let toDoList = JSON.parse(localStorage.getItem('task')) || {};
    for (let i = 0; i < Object.keys(toDoList).length; i++) {
        let text = toDoList[i].item;
        let newLi = document.createElement('li');
        let newText = document.createTextNode(text);
        newLi.appendChild(newText);
        addIcon(newLi);
        document.getElementById('toDoList').appendChild(newLi);
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

window.onload = ()=> {
    onLoad();
};