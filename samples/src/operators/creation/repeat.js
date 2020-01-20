const { Observable, empty, interval } = require("rxjs")
const { take, repeat, startWith } = require("rxjs/operators")

empty()
  .pipe(startWith("empty/startWith"), repeat(2))
  .subscribe(i => {
    console.log(i)
  })

interval(500)
  .pipe(take(2), repeat(3))
  .subscribe(i => {
    console.log("interval/take/repeat", i)
  })

// 输出 2 次：
interval(500)
  .pipe(repeat(5), take(2))
  .subscribe(i => {
    console.log("interval/repeat/take", i)
  })

Observable.create(observable => {
  observable.next("from create")
  // 如果不加 complte，则无效；即只输出一次
  // observable.complete()
})
  .pipe(repeat(5))
  .subscribe(i => {
    console.log(i)
  })
