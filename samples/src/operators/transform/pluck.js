const { of } = require("rxjs")
const { pluck } = require("rxjs/operators")

of({ x: 1 }, { x: 2 })
  .pipe(pluck("x"))
  .subscribe(i => {
    console.log(i)
  })
