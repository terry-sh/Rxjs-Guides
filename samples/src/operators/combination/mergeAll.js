const { interval } = require("rxjs")
const { take, map, mergeAll } = require("rxjs/operators")

interval(200)
  .pipe(
    take(5),
    map(() => interval(300).pipe(take(3))),
    // or
    // .flatMap(i => i.reduce((g, e) => [...g, e], []))
    mergeAll()
  )
  .subscribe(i => {
    console.log(i)
  })
