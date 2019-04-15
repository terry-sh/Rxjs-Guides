const { Subject } = require("rxjs")
const { throttleTime, debounceTime, switchMap } = require("rxjs/operators")

const subject = new Subject()

const pipe1 = subject.pipe(throttleTime(1000))
const pipe2 = subject.pipe(debounceTime(1000))

pipe1.subscribe(i => console.log("[subject 1]", i))
pipe2.subscribe(i => console.log("[subject 2]", i))

;[200, 800, 300, 220, 400, 900, 1050, 600, 1100, 500].reduce((time, gap) => {
  setTimeout(() => {
    subject.next(`${time}\t${gap}`)
  }, time)

  return time + gap
}, 0)
