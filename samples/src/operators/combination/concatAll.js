const { of, interval } = require("rxjs")
const { take, concatAll } = require("rxjs/operators")

const start = new Date()

of(interval(300).pipe(take(4)), of("a", "b", "c"), interval(2000).pipe(take(3)))
  .pipe(concatAll())
  .subscribe(i => {
    const duration = (new Date() - start) / 1000
    console.log(`${i}: at ${duration} seconds`)
  })
