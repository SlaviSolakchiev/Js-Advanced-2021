function solve(input) {

    let result = [];
    let count = 1;

    input.forEach(command => {
        if (command === 'add') {
            result.push(count);
        }

        if (command === 'remove') {
            result.pop();
        }

        count++;
    });

    result.length > 0 ? console.log(result.join('\n')) : console.log('Empty')

}


solve(['add',
    'add',
    'remove',
    'add',
    'add']
);