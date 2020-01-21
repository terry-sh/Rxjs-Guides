const { range } = require("rxjs")
const { groupBy, flatMap, reduce } = require("rxjs/operators")

range(1, 20)
  .pipe(
    groupBy(i => i % 5),
    flatMap(group => group.pipe(reduce((list, e) => [...list, e], [])))
  )
  .subscribe(g => {
    console.log(g)
  })
