const { interval } = require("rxjs")
const { windowTime, take, flatMap, reduce } = require("rxjs/operators")

const event = interval(200).pipe(take(20))

// , 800
// , 3
event
  .pipe(
    windowTime(700),
    flatMap(group => group.pipe(reduce((list, e) => [...list, e], [])))
  )
  .subscribe(i => {
    console.log(i)
  })

//   0   1   2   3   4   5   6   7   8   9    10
//             0             1              2
// ->
// [0, 1, 2], [3, 4, 5, 6], [7, 8, 9]
