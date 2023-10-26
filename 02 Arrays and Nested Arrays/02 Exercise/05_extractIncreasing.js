function solve(array) {

    let result = [];
    result.push(array[0]);

    for (let i = 1; i < array.length; i++) {

        if (array[i] > result[result.length - 1]) {
            result.push(array[i]);
        }
    }

    console.log(result);
}

solve([20,
    3,
    2,
    15,
    6,
    1]
);