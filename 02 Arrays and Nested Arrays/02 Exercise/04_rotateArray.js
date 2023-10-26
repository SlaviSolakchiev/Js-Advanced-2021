function solve(array, n) {

    let count = n;

    for (let i = 1; i <= count; i++) {

        let lastElement = array.pop();
        array.unshift(lastElement);

    }

    console.log(array.join(' '));

}

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
);