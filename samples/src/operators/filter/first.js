const { empty, of, Observable } = require("rxjs")
const { first, catchError } = require("rxjs/operators")

empty()
  .pipe(
    first(),
    catchError(() => of(1))
  )
  .subscribe(i => {
    console.log("first", i)
  })

new Observable(obs => obs.next(1)).pipe(first()).subscribe(i => {
  console.log("first", i)
})
