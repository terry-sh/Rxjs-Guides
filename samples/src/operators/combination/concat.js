const { concat, interval, of } = require("rxjs")
const { take } = require('rxjs/operators')
const start = new Date()

concat(
  interval(300).pipe(take(4)),
  of("a", "b", "c"),
  interval(2000).pipe(take(3))
).subscribe(i => {
  const duration = (new Date() - start) / 1000
  console.log(`${i}: at ${duration} seconds`)
})
