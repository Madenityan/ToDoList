function newElement() {
    let item = document.getElementById('task').value;
    let text = document.createTextNode(item);
    let newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('toDoList').appendChild(newItem);
    localStorage.setItem('task', item);
}

let listLi = document.getElementsByTagName("li");
let i;
for (i = 0; i < listLi.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listLi[i].appendChild(span);
}