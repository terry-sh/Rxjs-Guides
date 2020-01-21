const { interval } = require("rxjs")
const { windowCount, take, reduce } = require("rxjs/operators")

const event = interval(200).pipe(take(20))

event.pipe(windowCount(3)).subscribe(i => {
  i.pipe(reduce((g, e) => [...g, e], [])).subscribe(x => {
    console.log(x)
  })
})

// event.pipe(
//   windowCount(3),
//   flatMap(group => group.pipe(reduce((list, e) => [...list, e], [])))
// )
// .subscribe(i => {
// 	console.log(i)
// })
