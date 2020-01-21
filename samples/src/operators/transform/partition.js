const { range } = require("rxjs")
const { partition } = require("rxjs/operators")

const [evenNumber, oddNumber] = range(1, 20).pipe(partition(i => i % 2 === 0))

evenNumber.subscribe(i => console.log("even", i))
oddNumber.subscribe(i => console.log("odd", i))
