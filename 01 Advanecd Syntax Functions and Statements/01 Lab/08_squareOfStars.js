function printSquare(n) {
    const row = "* ".repeat(n).trim()
	for (let i = 0; i < n; i++) {
		console.log(row)
	}
}

printSquare(5);