const { from } = require("rxjs")
const { distinctUntilChanged } = require("rxjs/operators")

const data = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 2, y: 4 },
  { x: 1, y: 5 },
  { x: 2, y: 6 }
]

from(data)
  .pipe(distinctUntilChanged((i, j) => i.x === j.x))
  .subscribe(i => {
    console.log(i)
  })

const data2 = [
  { x: "1", y: 1 },
  { x: "1", y: 2 },
  { x: "2", y: 3 },
  { x: "2", y: 4 },
  { x: "1", y: 5 },
  { x: "2", y: 6 }
]

from(data2)
  .pipe(distinctUntilChanged((i, j) => i.x !== j.x))
  .subscribe(i => {
    console.log(i)
  })

// ?
