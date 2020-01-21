const { of } = require("rxjs")
const { map } = require("rxjs/operators")

of(1, 2, 3)
  .pipe(map(i => i * 3))
  .subscribe(i => {
    console.log(i)
  })
