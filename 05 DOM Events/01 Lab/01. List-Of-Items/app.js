function addItem() {

    let input = document.getElementById('newItemText');

    let ul = document.getElementById('items');

    let newItem = document.createElement('li');
    newItem.innerHTML = input.value;

    ul.appendChild(newItem);

    input.value = '';

}