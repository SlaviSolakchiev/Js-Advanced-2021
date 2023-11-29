function encodeAndDecodeMessages() {

    let encodeButton = document.getElementsByTagName('button')[0];
    let decodeButton = document.getElementsByTagName('button')[1];

    let inputText = document.getElementsByTagName('textarea')[0];
    let outputText = document.getElementsByTagName('textarea')[1];


    let encodeText = '';


    encodeButton.addEventListener('click', () => {

        encodeText = inputText.value.split("").map(x => String.fromCharCode(x.charCodeAt(0) + 1)).join('');
        outputText.value = encodeText;
    });



    decodeButton.addEventListener('click', () => {
        outputText.value = encodeText.split("").map(x => String.fromCharCode(x.charCodeAt(0) - 1)).join('');

    });



}
