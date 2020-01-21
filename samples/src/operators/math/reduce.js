const { range } = require("rxjs")
const { map, reduce } = require("rxjs/operators")

range(1, 100)
  .pipe(reduce((c, i) => i + c, 0))
  .subscribe(i => {
    console.log("gauss count", i)
  })

range(0, 100)
  .pipe(
    map(() => x => Math.floor(Math.random() * 10 + x)),
    reduce((val, fn) => fn(val), 1)
  )
  .subscribe(i => {
    console.log("finally reduce", i)
  })
