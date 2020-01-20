const { of } = require("rxjs")
const { startWith } = require("rxjs/operators")

of(2, 3, 4, 5)
  .pipe(startWith(1))
  .subscribe(i => {
    console.log(i)
  })
