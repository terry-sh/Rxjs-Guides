const { Observable, of } = require("rxjs")
const { skipLast } = require("rxjs/operators")

of(1, 2, 3, 4, 5)
  .pipe(skipLast(2))
  .subscribe(i => {
    console.log(i)
  })

const stream = Observable.create(obs => {
  obs.next(1)
  obs.next(2)
  obs.next(3)
  obs.next(4)
})

stream.pipe(skipLast(2)).subscribe(
  i => {
    console.log("no complete:", i)
  },
  err => {},
  () => {
    console.log("complete: no complete")
  }
)
