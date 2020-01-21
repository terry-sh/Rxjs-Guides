const { from } = require("rxjs")
const { distinctUntilKeyChanged } = require("rxjs/operators")

const data = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 2, y: 4 },
  { x: 1, y: 5 },
  { x: 2, y: 6 }
]

from(data)
  .pipe(distinctUntilKeyChanged("x"))
  .subscribe(i => {
    console.log(i)
  })
