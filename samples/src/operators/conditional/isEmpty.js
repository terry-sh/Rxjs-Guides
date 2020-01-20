const { empty, never } = require("rxjs")
const { isEmpty } = require("rxjs/operators")

empty()
  .pipe(isEmpty())
  .subscribe(cond => {
    console.log("empty", cond)
  })

never()
  .pipe(isEmpty())
  .subscribe(cond => {
    console.log("never", cond) // never logs!
  })
