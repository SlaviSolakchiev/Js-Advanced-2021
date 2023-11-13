function search() {

    let matches = document.getElementById('result');
    let matchesCount = 0;

    let inputTown = document.getElementById('searchText');

    let towns = document.getElementById('towns').children;
    for (let i = 0; i < towns.length; i++) {
        towns[i].style.fontWeight = "normal";

    }

    for (let i = 0; i < towns.length; i++) {

        if (towns[i].innerHTML.includes(inputTown.value)) {


            towns[i].style.fontWeight = "bold";
            matchesCount++;
            matches.innerHTML = `${matchesCount} matches found`;
        }

    };


}