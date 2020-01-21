const { interval } = require("rxjs")
const { take, debounceTime } = require("rxjs/operators")

interval(100)
  .pipe(take(10), debounceTime(110))
  .subscribe(
    i => console.log(i),
    err => {},
    () => console.log("complete")
  )

interval(100)
  .pipe(take(10), debounceTime(120))
  .subscribe(
    i => console.log(i),
    err => {},
    () => console.log("complete")
  )
