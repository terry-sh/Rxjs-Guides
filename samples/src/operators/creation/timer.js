const { timer } = require("rxjs")
const { take } = require("rxjs/operators")

const label1 = "timeout-1"
console.time(label1)
timer(new Date(Date.now() + 1000 * 2.3)).subscribe(i => {
  console.log(label1, i)
  console.timeEnd(label1)
})

const label2 = "timeout-2"
console.time(label2)
timer(1000).subscribe(i => {
  console.log(label2, i)
  console.timeEnd(label2)
})

timer(3000, 500)
  .pipe(take(3))
  .subscribe(i => {
    console.log("interval", i)
  })
