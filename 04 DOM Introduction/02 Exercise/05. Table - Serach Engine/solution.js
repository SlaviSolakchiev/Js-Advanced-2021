function solve() {

    let btn = document.getElementById('searchBtn');

    btn.addEventListener("click", () => {
        
        let searchInput = document.getElementById('searchField');
        let data = document.querySelectorAll("tbody > tr > td");
        
        for (let i = 0; i < data.length; i++) {
            if (data[i].innerHTML.includes(searchInput.value)) {
                data[i].parentElement.style.backgroundColor = 'yellow';
            }
        }
        searchInput.value = '';

    })


}
