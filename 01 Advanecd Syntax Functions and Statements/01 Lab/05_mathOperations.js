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

console.l(calc(5, 6, '+'))