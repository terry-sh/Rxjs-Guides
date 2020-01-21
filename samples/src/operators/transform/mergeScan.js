const { interval, range } = require("rxjs")
const { mergeScan, take } = require("rxjs/operators")

interval(100)
  .pipe(
    take(5),
    mergeScan((acc, one) => range((acc += one), one), 0)
  )
  .subscribe(x => console.log(x))
