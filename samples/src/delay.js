const { interval } = require("rxjs")
const { skip, take, tap, delay, timeInterval } = require("rxjs/operators")

interval(1000)
  .pipe(
    skip(1),
    take(5),
    tap(value => console.log(`第${value}秒發送${value}`)),
    delay(2000),
    timeInterval()
  )
  .subscribe(result => {
    console.log("res->", result)
  })
