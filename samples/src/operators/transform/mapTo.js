const { of } = require("rxjs")
const { mapTo } = require("rxjs/operators")

of(1, 2, 3)
  .pipe(mapTo("x"))
  .subscribe(i => {
    console.log(i)
  })
