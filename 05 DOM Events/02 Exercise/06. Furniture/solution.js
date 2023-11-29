function solve() {
    let generateButton = document.getElementsByTagName('button')[0].addEventListener('click', () => {
        let inputJson = document.getElementsByTagName('textarea')[0];
        let furnituresArray = JSON.parse(inputJson.value);
        let tbody = document.querySelector('tbody');


        furnituresArray.forEach(x => {

            let { name, img, price, decFactor } = x;

            let html = `<tr>
            <td><img src=${img}></td>
            <td><p>${name}</p></td>
            <td><p>${price}</p></td>
            <td><p>${decFactor}</p></td>
            <td><input type="checkbox"/></td>
            </tr>`;

            tbody.innerHTML = tbody.innerHTML + html;
        });




        let buyButton = document.getElementsByTagName('button')[1].addEventListener('click', () => {


            let allTr = tbody.children;
            let [names, prices, decFactors] = [[], [], []];

            Array.from(allTr).forEach(x => {

                let checkbox = x.getElementsByTagName('input')[0];
                if (checkbox.checked) {


                    let name = x.querySelector('td p').textContent;
                    names.push(name);

                }


            });
        });
    });


}