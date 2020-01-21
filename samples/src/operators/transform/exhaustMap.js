const { interval } = require("rxjs")
const { exhaustMap, take, mapTo } = require("rxjs/operators")

interval(1000)
  .pipe(
    take(10),
    exhaustMap(i => interval(i * 120).pipe(take(i), mapTo(i)))
  )
  .subscribe(x => console.log(x))
