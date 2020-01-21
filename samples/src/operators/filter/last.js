const { empty, of, Observable } = require("rxjs")
const { last, catchError } = require("rxjs/operators")

empty()
.pipe(
  last(),
  catchError(err => of('no exist.'))
)
.subscribe(i => {
  console.log("last", i)
})

const stream = new Observable(obs => {
  obs.next(1)
  obs.next(2)
  // 如果沒有 complete，則不會觸發
  obs.complete()
})

stream.pipe(last()).subscribe(i => {
  console.log("last", i)
})
