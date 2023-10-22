function solve(input) {

    let str = input.toString().split("");
    let state = 'true';
    let numbersSum = 0;

    for (let j = 0; j < str.length; j++) {
        numbersSum += Number(str[j]);

    }

    for (let i = 0; i < str.length; i++) {


        if (str[0] !== str[i]) {
            state = 'false';
            break;
        }
    };

    console.log(state);
    console.log(numbersSum);

}



solve(555555555);