const { range, of, Observable } = require("rxjs")
const { takeLast } = require("rxjs/operators")

range(0, 5)
  .pipe(takeLast(11))
  .subscribe(i => {
    console.log("take last", i)
  })
// 只有 0 - 4

const stream = Observable.create(obs => {
  obs.next(1)
  obs.next(2)
  obs.next(3)
  // obs.complete()
})
stream.pipe(takeLast(11)).subscribe(i => {
  console.log("take last > ", i)
})
