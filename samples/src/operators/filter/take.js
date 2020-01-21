const { range } = require("rxjs")
const { take } = require("rxjs/operators")

range(0, 5)
  .pipe(take(11))
  .subscribe(i => {
    console.log("take more", i)
  })
// 0 - 4

range(0, 12)
  .pipe(take(5))
  .subscribe(i => {
    console.log("take less", i)
  })
// 0 - 4
