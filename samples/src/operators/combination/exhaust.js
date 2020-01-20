const { Observable, interval } = require("rxjs")
const { map, take, exhaust } = require("rxjs/operators")

const clicks = new Observable(obs => {
  setTimeout(() => {
    console.log("clicks 0")
    obs.next(1)
  }, 0)
  setTimeout(() => {
    console.log("clicks 1")
    obs.next(0)
  }, 2000)
  setTimeout(() => {
    console.log("clicks 2")
    obs.next(2)
  }, 5000)
})
//       2000       1500           1500
//                         4000
//                                             9000

const higherOrder = clicks.pipe(map(i => interval(1500).pipe(take(i + 1))))
higherOrder.pipe(exhaust()).subscribe(x => console.log(x))
