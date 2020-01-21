const { interval } = require("rxjs")
const { take, switchMap } = require("rxjs/operators")

interval(1100)
  .pipe(
    take(5),
    switchMap(i => interval(300).pipe(take(i + 1)))
  )
  .subscribe(i => {
    console.log(i)
  })
