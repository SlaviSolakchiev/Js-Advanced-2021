function deleteByEmail() {

    let inputEmail = document.getElementsByName('email')[0];

    let allEmails = Array.from(
        document.querySelectorAll("tbody tr td:nth-child(2)"));

    let result = document.getElementById('result');
    let removed = false;


    allEmails.forEach(x => {
        if (x.innerHTML.includes(inputEmail.value)) {
            x.parentElement.remove();
            result.innerHTML = 'Deleted.';
            removed = true;
        }
    });
    
    if (!removed) { result.innerHTML = 'Not found.' }
}   