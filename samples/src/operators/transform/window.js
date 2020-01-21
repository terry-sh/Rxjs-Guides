const { interval } = require("rxjs")
const { window, flatMap, take, reduce } = require("rxjs/operators")

interval(100)
  .pipe(
    take(20),
    window(interval(230)),
    flatMap(group => group.pipe(reduce((list, e) => [...list, e], [])))
  )
  .subscribe(i => {
    console.log(i)
  })
