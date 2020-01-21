const { interval, range } = require("rxjs")
const { skipWhile } = require("rxjs/operators")

// interval(100)
//  .pipe(
//	  take(20),
// 	  skipWhile((v, i) => i !== 10)
//  )
// 	.subscribe(i => {
// 		console.log('skip while: ', i)
// 	})

range(1, 20)
  .pipe(
    skipWhile((e, i) => {
      return e % 7 === 1
    })
  )
  .subscribe(i => {
    console.log("skip while: ", i)
  })
