const { interval } = require("rxjs")
const { take, mapTo, switchMapTo, switchAll } = require("rxjs/operators")

interval(700)
  .pipe(take(5), switchMapTo(interval(300).pipe(take(3))))
  .subscribe(i => {
    console.log(i)
  })

// 等价于：
interval(700)
  .pipe(take(5), mapTo(interval(300).pipe(take(3))), switchAll())
  .subscribe(i => {
    console.log(i)
  })
