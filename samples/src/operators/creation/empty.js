const { empty } = require("rxjs")
const { startWith } = require("rxjs/operators")

const o = empty().pipe(startWith(8))
o.subscribe(
  i => {
    console.log(i)
  },
  () => {},
  () => {
    console.log("complete")
  }
)
