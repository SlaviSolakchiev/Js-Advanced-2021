function foo(...args) {
    const length = args.reduce((a, x) => a + x.length, 0)
    console.log(`${length}
${Math.round(length / args.length)}`)
}

foo('chocolate', 'ice cream', 'cake')
