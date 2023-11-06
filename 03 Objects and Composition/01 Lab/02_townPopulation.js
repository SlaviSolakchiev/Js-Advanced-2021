function solve(array) {

    // let res = {};

    // res[array[0]] = array[0] + Number(67589);


    let res = '';

    const parsedData = array.reduce((a, x) => {
        const [name, population] = x.split(" <-> ");

        a[name] = (a[name] || 0) + Number(population);

        return a;
    }, {})

    for (const key in parsedData) {
        res += `${key} : ${parsedData[key]} \n`
    }


    
    console.log(res);

}


solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);