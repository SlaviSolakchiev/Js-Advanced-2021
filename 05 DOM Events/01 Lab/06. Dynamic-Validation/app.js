function validate() {
    let input = document.getElementById('email');

    function isValidEmail(str) {
        if (/^[a-z]+@[a-z]+\.[a-z]+/g.test(str)) return true

        return false
    }


    input.addEventListener('change', e => {
        if (!isValidEmail(e.target.value)) {
            e.target.className = 'error';
        }
        else {
            e.target.className = '';
        }
    })

}