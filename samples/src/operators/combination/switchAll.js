const { Observable, interval } = require("rxjs")
const { map, switchAll, take, switchMap } = require("rxjs/operators")

const clicks = Observable.create(obs => {
  setTimeout(() => {
    console.log("clicks 0")
    obs.next(0)
  }, 2000)
  setTimeout(() => {
    console.log("clicks 1")
    obs.next(1)
  }, 4000)
  setTimeout(() => {
    console.log("clicks 2")
    obs.next(2)
  }, 9000)
})

clicks
  .pipe(
    map(() => interval(900).pipe(take(8))),
    switchAll()
  )
  .subscribe(x => console.log(x))

// equivalent to:
/*
clicks.pipe(
	switchMap(() => interval(900).pipe(take(8)))
).subscribe(x => console.log(x))
*/
