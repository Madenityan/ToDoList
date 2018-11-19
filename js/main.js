function newElement() {
    let item = document.getElementById('task').value;
    let newItem = document.createElement('li');
    newItem.setAttribute('onclick','checkedItem(event)');
    let textItem = document.createElement('p');
    textItem.textContent = item;
    newItem.appendChild(textItem);
    addIcon(newItem);
    document.getElementById('toDoList').appendChild(newItem);

    let toDoList = JSON.parse(localStorage.getItem('task')) || [];
    toDoList.push({
        item: item,
        isChecked: false
    });
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

    //update checked status
    let toDoList = JSON.parse(localStorage.getItem('task')) || [];
    let currentItemText = event.target.textContent;

    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i] && toDoList[i].item === currentItemText) {
            toDoList[i].isChecked = !toDoList[i].isChecked;
        }
    }

    localStorage.setItem('task', JSON.stringify(toDoList));
}

document.onkeydown = function (enter) {
    let keyCode = enter.keyCode || enter.charCode;
    if (keyCode === 13) {
        event.preventDefault();
        newElement();
    }
};

function onLoad() {
    let toDoList = JSON.parse(localStorage.getItem('task')) || [];
    for (let i = 0; i < toDoList.length; i++) {
        let text = toDoList[i].item;
        let newLi = document.createElement('li');
        newLi.setAttribute('onclick','checkedItem(event)');
        let newTextItem = document.createElement('p');
        newTextItem.textContent = text;
        if (toDoList[i].isChecked === true) {
            newTextItem.classList.add('checked');
        }
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
    let toDoList = JSON.parse(localStorage.getItem('task')) || [];
    let currentItemText = event.target.parentElement.firstChild.textContent;

    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i] && toDoList[i].item === currentItemText) {
            toDoList.splice(i, 1);
        }
    }

    localStorage.setItem('task', JSON.stringify(toDoList));
}

window.onload = ()=> {
    onLoad();
};