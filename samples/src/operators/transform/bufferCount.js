const { interval, timer } = require("rxjs")
const { bufferCount, take } = require("rxjs/operators")

const event = interval(200).pipe(take(20))

event.pipe(bufferCount(3)).subscribe(i => {
  console.log(i)
})

timer(200 * 21).subscribe({
  complete: () => {
    console.log("\n")
    event.pipe(bufferCount(3, 4)).subscribe(i => {
      console.log(i)
    })
  }
})
