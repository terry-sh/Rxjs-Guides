const { never } = require("rxjs")
const { startWith } = require("rxjs/operators")

const o = never().pipe(startWith(8))
o.subscribe(
  i => {
    console.log(i)
  },
  () => {},
  () => {
    console.log("complete")
  }
)
