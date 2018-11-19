function newElement() {
    let item = document.getElementById('task').value;
    let newItem = document.createElement('li');
    newItem.setAttribute('onclick','checkedItem(event)');
    let textItem = document.createElement('p');
    textItem.textContent = item;
    newItem.appendChild(textItem);
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


function checkedItem(event) {
    if (event.target.tagName === 'P') {
        event.target.classList.toggle('checked');
    }
}

document.onkeydown = function (enter) {
    let keyCode = enter.keyCode || enter.charCode;
    if (keyCode === 13) {
        event.preventDefault();
        newElement();
    }
};

function onLoad() {
    let toDoList = JSON.parse(localStorage.getItem('task')) || {};
    for (let i = 0; i < Object.keys(toDoList).length; i++) {
        let text = toDoList[i].item;
        let newLi = document.createElement('li');
        newLi.setAttribute('onclick','checkedItem(event)');
        let newTextItem = document.createElement('p');
        newTextItem.textContent = text;
        newLi.appendChild(newTextItem );
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
    removeItemInLocalStorage(event);
}

function removeItemInLocalStorage(event) {
    let toDoList = JSON.parse(localStorage.getItem('task')) || {};
    let eventLi = event.target.parentElement;

    for (let i = 0; i < Object.keys(toDoList).length; i++) {
        if(toDoList[i].item ===  eventLi) {
            localStorage.removeItem('task');
        }
        console.log(toDoList[i].item);
    }
}

window.onload = ()=> {
    onLoad();
};