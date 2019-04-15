const { range, of } = require("rxjs")
const { catchError, map } = require("rxjs/operators")

range(1, 8)
  .pipe(
    map(i => {
      if (i == 4) {
        throw "4 is dead"
      }
      return i
    }),
    catchError(err => of("A", "B", "C"))
  )
  .subscribe(i => {
    console.log(i)
  })
