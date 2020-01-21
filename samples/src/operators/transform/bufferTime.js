const { interval } = require("rxjs")
const { bufferTime, take } = require("rxjs/operators")

const event = interval(200).pipe(take(20))
event.pipe(bufferTime(700)).subscribe(i => {
  console.log(i)
})

//   0   1   2   3   4   5   6   7   8   9    10
//             0             1              2
// ->
// [0, 1, 2], [3, 4, 5, 6], [7, 8, 9] ...
// 也可能会是
// [0, 1, 2], [3, 4, 5], [6, 7, 8, 9] ...