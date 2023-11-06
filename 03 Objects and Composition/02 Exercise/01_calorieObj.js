function solve(args) {

    return args.reduce((a, x, i) => {
        if (i % 2 === 0) {
            a[args[i]] = Number(args[i + 1])
        }

        return a;
    }, {})


}



console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));