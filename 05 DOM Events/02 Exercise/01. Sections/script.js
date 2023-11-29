function create(arr) {
    let content = document.getElementById('content');

    function eFactory(tag, content = "") {
        const temp = document.createElement(tag)
        temp.innerHTML = content

        return temp
    }

    arr.forEach(x => {

        let div = eFactory('div');
        let p = eFactory('p', x);
        p.style.display = 'none';

        div.appendChild(p);

        div.addEventListener('click', () => { p.style.display = 'block' });
        content.appendChild(div);
    });

}
