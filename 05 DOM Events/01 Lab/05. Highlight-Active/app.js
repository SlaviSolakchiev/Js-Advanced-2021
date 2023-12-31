function focus() {
    const inputs = document.getElementsByTagName("input");

    const addFocus = e => (e.parentNode.className = "focused");
    const removeFocus = e => (e.parentNode.className = "");

    Array.from(inputs).forEach(x => {
        x.addEventListener("focus", e => {
            addFocus(e.target);
            e.target.parentNode.style.background = 'grey';
        });

        x.addEventListener('blur', e => {
            removeFocus(e.target);
            e.target.parentNode.style.background = 'white';
            
        });


    })
}
