function solve(numbers) {

    let ascendingSorted = [...numbers].sort((a, b) => a - b);
    let descendingSorted = [...numbers].sort((a, b) => a - b).reverse();
    let result = [];

    // -3, 1, 3, 18, 31, 48, 52, 56, 61, 63, 65
    let index = 0;
    while (result.length < numbers.length) {

        result.push(ascendingSorted[index]);
        result.push(descendingSorted[index]);

        index++;
    }

    console.log(result);

}


solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);