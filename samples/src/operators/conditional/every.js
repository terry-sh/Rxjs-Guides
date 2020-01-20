const { of } = require("rxjs")
const { every } = require("rxjs/operators")

of(2, 1, 3, 2, 1, 4, 3)
  .pipe(every(i => i % 2 === 0))
  .subscribe(i => {
    console.log(i, i ? "yes" : "no")
  })
