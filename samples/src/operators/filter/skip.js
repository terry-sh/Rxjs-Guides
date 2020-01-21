const { Observable, of, timer } = require("rxjs")
const { skip, filter, take } = require("rxjs/operators")

of(1, 2, 3, 4, 5)
  .pipe(skip(2))
  .subscribe(i => {
    console.log(i)
  })

const stream = Observable.create(obs => {
  obs.next(1)
  obs.next(2)
  obs.next(3)
  obs.next(4)
})

stream.pipe(skip(2)).subscribe(i => {
  console.log("no complete is okay:", i)
})

{
  // won't handle user's click until the user clicks more than four times
  const userClick = timer(0, 1000) // simulates user clicking
  let handling = false
  
  userClick
    .pipe(
      skip(3),
      filter(() => !handling),
      take(3)
    )
    .subscribe(i => {
      console.log("allow click", i)
      handling = true

      // do something asynchorously
      setTimeout(() => {
        handling = false
      }, 2400)
    })
}
