const { interval } = require("rxjs")
const { take, map, mergeMap } = require("rxjs/operators")

const source = interval(100).pipe(take(20))

const mix = source.pipe(
  mergeMap(s =>
    interval(500).pipe(
      take(5),
      map(i => s + "-" + i)
    )
  )
)

mix.subscribe(x => console.log(x))
