function foo(n, k) {
    const arr = [1]
    for (let i = 1; i < n; i++) {
        arr.push(arr.slice(-k).reduce((a, x) => a + x, 0))
    }
    return arr;
}