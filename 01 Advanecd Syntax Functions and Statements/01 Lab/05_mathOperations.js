function calc(x, y, a) {
    const operators = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
        "%": (x, y) => x % y,
        "**": (x, y) => x ** y,
    }

    return operators[a](x, y)

}

console.log(calc(5, 6, '+'))