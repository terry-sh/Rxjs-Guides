const { interval } = require("rxjs")
const { buffer, take } = require("rxjs/operators")

const event = interval(200).pipe(take(20))

const closingNotifier = interval(1000)
event.pipe(buffer(closingNotifier)).subscribe(i => {
  console.log(i)
})

// 0 1 2 3 4 5 6 7 8 9 10
//         0         1
