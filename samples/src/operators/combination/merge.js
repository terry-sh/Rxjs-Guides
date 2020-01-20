const { interval, merge } = require("rxjs")
const { take, map, delay } = require("rxjs/operators")

const a = interval(1100).pipe(
  take(12),
  map(i => `a ${i}`)
)

const b = interval(1700).pipe(
  delay(1000),
  take(8),
  map(i => `b ${i}`)
)

merge(a, b).subscribe(i => console.log(i))
