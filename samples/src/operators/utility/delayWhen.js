const { interval } = require("rxjs")
const { take, delayWhen } = require("rxjs/operators")

{
  interval(500)
    .pipe(
      take(10),
      delayWhen(i => interval(Math.random() * 5000))
    )
    .subscribe(i => {
      console.log(i)
    })
}
