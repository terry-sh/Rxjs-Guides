const { interval } = require("rxjs")
const { elementAt, take } = require("rxjs/operators")

interval(10)
  .pipe(take(10), elementAt(3))
  .subscribe(i => console.log(i))

// index out of range, return default value.
// if index is negative number, throws error
interval(10)
  .pipe(take(10), elementAt(10, -1))
  .subscribe(i => console.log(i))

// errors
try {
  interval(10)
    .pipe(take(10), elementAt(-1, -1))
    .subscribe(
      i => console.log(i),
      e => console.log("error!")
    )
} catch (error) {
  console.log("out of range erros")
}
