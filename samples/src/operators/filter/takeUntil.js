const { interval, timer } = require("rxjs")
const { takeUntil } = require("rxjs/operators")

const DELAY = Math.max(300, Math.random() * 2000)

interval(200)
  .pipe(takeUntil(timer(DELAY)))
  .subscribe(i => {
    console.log("take", i)
  })
