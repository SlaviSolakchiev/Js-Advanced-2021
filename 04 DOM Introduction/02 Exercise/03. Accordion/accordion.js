function toggle() {

    let button = document.getElementsByClassName('button')[0];
    let extraDiv = document.getElementById('extra');

    if (button.innerHTML === 'More') {
        extraDiv.style.display = 'block';
        button.innerHTML = 'Less';
    }
    else {
        extraDiv.style.display = 'none';
        button.innerHTML = 'More';
    }
} 