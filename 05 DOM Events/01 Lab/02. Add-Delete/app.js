function addItem() {

    let input = document.getElementById('newText');
    let list = document.getElementById('items');

    let item = document.createElement('li');
    item.innerHTML = input.value;

    let deleteButton = document.createElement('a');
    deleteButton.setAttribute('href', '#');
    deleteButton.innerHTML = '[Delete]';
    deleteButton.addEventListener("click", e => e.target.parentNode.remove())



    item.appendChild(deleteButton);
    list.appendChild(item);

    input.value = '';

}