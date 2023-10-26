function solve(array, n) {

    let counter = 0;
    let result = [];
    result.push(array[0]);

    for (let i = 1; i < array.length; i++) {
        counter++;
        if (counter == n) {
            result.push(array[i])
            counter = 0;
        }
    }

    console.log(result);
}

solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
);