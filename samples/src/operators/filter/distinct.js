const { of } = require("rxjs")
const { distinct } = require("rxjs/operators")

of(2, 1, 2, 3, 4, 3, 7, 9, 9, 2, 4, 2, 7)
  .pipe(distinct())
  .subscribe(i => {
    console.log(i)
  })

const data = [
  { x: 1, y: 1 },
  { x: 1, y: 3 },
  { x: 2, y: 3 },
  { x: 2, y: 4 },
  { x: 1, y: 4 },
  { x: 2, y: 5 }
]

// 等价于
from(data)
  .pipe(distinct(e => e.x))
  .subscribe(i => {
    console.log(i)
  })
