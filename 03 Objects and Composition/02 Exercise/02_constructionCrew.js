function solve(inputObj) {

    let worker = inputObj;

    if (worker['dizziness']) {
        worker['levelOfHydrated'] += Number(0.1 * worker['weight'] * worker['experience']);
    }


    console.log(worker);
}


solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}


);