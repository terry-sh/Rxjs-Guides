const { interval, of } = require("rxjs")
const { delay, mapTo, expand, take } = require("rxjs/operators")

const source = interval(500).pipe(
  mapTo(1),
  expand(i => of(2 * i).pipe(delay(1000))),
  take(10)
)

source.subscribe(x => console.log(x))
