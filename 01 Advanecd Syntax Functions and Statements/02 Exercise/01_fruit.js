function calc(fruit, weightInGrams, pricePerKg) {

    let weightInKg = ((Number(weightInGrams) / 1000)).toFixed(2);
    let money = (Number(weightInKg) * Number(pricePerKg)).toFixed(2);

    console.log(`I need $${money} to buy ${weightInKg} kilograms ${fruit}.`)
}

calc('apple', 1563, 2.35);