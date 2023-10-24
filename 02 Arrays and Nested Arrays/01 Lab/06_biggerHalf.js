function solve(input) {

    let a = input.length;
    let b = Math.round((input.length) / 2);

    let e = input.slice(b, a);
    result = input.sort((a, b) => a - b).slice(-Math.round((input.length) / 2));

    console.log(result);

}

solve([3, 19, 14, 7, 2, 19, 6]);