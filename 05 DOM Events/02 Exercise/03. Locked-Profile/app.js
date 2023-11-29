function lockedProfile() {

    let profiles = document.getElementsByClassName('profile');

    Array.from(profiles).forEach(profile => {

        let btn = profile.getElementsByTagName('button')[0];

        btn.addEventListener('click', () => {

            let unlock = profile.querySelectorAll('input')[1].checked;
            let hiddenDiv = profile.querySelectorAll('div')[0];

            if (unlock) {
                if (btn.textContent == 'Show more') {
                    hiddenDiv.style.display = 'block';
                    btn.textContent = 'Hide it';
                }
                else if (btn.textContent == 'Hide it') {
                    hiddenDiv.style.display = 'none';
                    btn.textContent = 'Show more';
                }
            }
        })
    });
}
