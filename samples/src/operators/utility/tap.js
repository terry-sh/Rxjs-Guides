const { interval } = require("rxjs")
const { take, tap, map } = require("rxjs/operators")

interval(200)
  .pipe(
    take(5),
    tap(x => {
      x++
      console.log(x)
    }),
    // map(x => x + Math.random())
  )
  .subscribe(i => console.log("subscribe", i))
