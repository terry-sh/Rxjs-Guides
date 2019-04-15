const { interval } = require("rxjs")
const { take, delay } = require("rxjs/operators")

const start = Date.now()
const log = (order, delayTime) => {
  const lapse = (Date.now() - start) / 1000
  console.log(
    `delay after ${delayTime}s; order = ${order}; time lapsed = ${lapse}`
  )
}

{
  interval(1000)
    .pipe(
      take(3),
      delay(2000)
    )
    .subscribe(i => {
      log(i, 1)
    })
}

{
  interval(2000)
    .pipe(
      take(3),
      delay(new Date(Date.now() + 1000 * 10))
    )
    .subscribe(i => {
      log(i, 10)
    })
}
