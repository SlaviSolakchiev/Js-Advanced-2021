function solve(names) {

    let result = names.sort((a,b) => a.localeCompare(b))

    console.log(result);
}


solve(["John", "Bob", "Christina", "Ema"]); 