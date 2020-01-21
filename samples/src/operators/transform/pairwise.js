const { of, Observable } = require("rxjs")
const { pairwise } = require("rxjs/operators")

// of(1) // 如果只有一個，不會發起任何新事件
of(1, 2, 3, 4)
  .pipe(pairwise())
  .subscribe(pair => {
    console.log(pair)
  })
// [1,2], [2,3], [3,4]

const noComplete = Observable.create(obs => {
  obs.next("a")
  obs.next("b")
  obs.next("c")
  obs.next("d")
})

noComplete.pipe(pairwise()).subscribe(pair => {
  console.log(pair)
})
