function solve(input) {

    let numbers = input.map(x => Number(x));
    let result = numbers[0] + numbers[numbers.length - 1];
    console.log(result);

}

solve(['20', '30', '40']);