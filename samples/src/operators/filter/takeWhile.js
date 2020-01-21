const { interval } = require("rxjs")
const { takeWhile } = require("rxjs/operators")

interval(100)
  .pipe(takeWhile((v, i) => i >= 0 && i <= 10))
  .subscribe(i => {
    console.log("take while", i)
  })

// 如果也沒有，因爲第一個就不符合
interval(100)
  .pipe(takeWhile((v, i) => i > 0 && i <= 10))
  .subscribe(i => {
    console.log("take while 2", i)
  })
