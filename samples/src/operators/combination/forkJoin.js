const { forkJoin, interval, zip } = require("rxjs")
const { take, last } = require("rxjs/operators")

const start = new Date()

forkJoin(
  interval(200).pipe(take(30)),
  interval(300).pipe(take(15)),
  (n, m) => n + m
).subscribe(i => {
  console.log(i) // 43
  const duration = (new Date() - start) / 1000
  console.log(`takes ${duration} seconds`)
})

// 等价于：
zip(
  interval(200).pipe(take(30), last()),
  interval(300).pipe(take(15), last()),
  (n, m) => n + m
).subscribe(i => {
  console.log(i) // 43
  const duration = (new Date() - start) / 1000
  console.log(`takes ${duration} seconds`)
})
