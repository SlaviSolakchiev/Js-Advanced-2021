function solve(array) {

    let result = array
        .map(x => Number(x))
        .filter((x, i) => i % 2 == 0);

        console.log(result);
}


solve(['20', '30', '40', '50', '60']);  