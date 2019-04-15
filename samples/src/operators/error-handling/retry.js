const { range } = require("rxjs")
const { map, retry } = require("rxjs/operators")

let chances = 0

try {
  range(1, 8)
    .pipe(
      map(i => {
        if (i == 4 && chances == 0) {
          chances += 1
          throw "4 is dead"
        }
        return i
      }),
      // retry what?
      // retry `range`
      retry(3)
    )
    .subscribe(i => {
      console.log(i)
    })
} catch (err) {
  //
}
