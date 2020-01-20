const { interval } = require("rxjs")
const { take, map, withLatestFrom } = require("rxjs/operators")

interval(300)
  .pipe(
    take(12),
    map(i => "source:" + i),
    withLatestFrom(
      interval(500).pipe(map(i => "dest A:" + i)),
      interval(700).pipe(map(i => "dest B:" + i))
    )
  )
  .subscribe(i => {
    console.log(i)
  })
