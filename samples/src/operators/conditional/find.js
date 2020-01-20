const { of } = require("rxjs")
const { find } = require("rxjs/operators")

of(2, 1, 3, 2, 1, 4, 3)
  .pipe(find(i => i % 2 === 1))
  .subscribe(i => {
    console.log(i)
  })
