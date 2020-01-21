const { range } = require("rxjs")
const { map, min } = require("rxjs/operators")

range(0, 10)
  .pipe(
    map(() => Math.floor(Math.random() * 100)),
    min()
  )
  .subscribe(i => {
    console.log("min value of 10 random numbers: ", i)
  })
