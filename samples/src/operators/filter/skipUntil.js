const { interval, of } = require("rxjs")
const { skipUntil, delay, take } = require("rxjs/operators")

interval(1000)
  .pipe(skipUntil(of(1).pipe(delay(3000)), take(10)))
  .subscribe(i => {
    console.log("take", i)
  })
// 輸出： 2 - 11
