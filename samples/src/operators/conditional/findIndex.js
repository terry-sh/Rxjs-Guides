const { of } = require("rxjs")
const { findIndex } = require("rxjs/operators")

of(2, 1, 3, 2, 1, 4, 3)
  .pipe(findIndex(i => i % 2 === 1))
  .subscribe(i => {
    console.log(`this ${i + 1}th element`)
  })
