const { of, empty } = require("rxjs")
const { defaultIfEmpty } = require("rxjs/operators")

empty()
  .pipe(defaultIfEmpty("it is empty"))
  .subscribe(i => {
    console.log(i) // it is empty
  })

of(1)
  .pipe(defaultIfEmpty("it is empty"))
  .subscribe(i => {
    console.log(i) // 1
  })
