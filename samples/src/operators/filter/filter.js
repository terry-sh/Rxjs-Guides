const { range } = require("rxjs")
const { filter } = require("rxjs/operators")

range(1, 10)
  .pipe(filter(i => i % 2 === 1))
  .subscribe(i => {
    console.log("odd number: ", i)
  })
