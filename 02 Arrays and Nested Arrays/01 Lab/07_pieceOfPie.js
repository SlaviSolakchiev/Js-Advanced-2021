function solve(array, start, end) {

    let a = array.indexOf(start);
    let b = array.indexOf(end);

    let result = array.slice(a, b + 1);

    console.log(result);
}

solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
);