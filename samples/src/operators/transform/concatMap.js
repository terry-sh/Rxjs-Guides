const { interval } = require("rxjs")
const { concatMap, take, map } = require("rxjs/operators")

const source = interval(100).pipe(take(3))

const mix = source.pipe(
  concatMap(s =>
    interval(500).pipe(
      take(5),
      map(i => s + "-" + i)
    )
  )
)
mix.subscribe(x => console.log(x))
