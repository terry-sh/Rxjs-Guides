const { from, Subject } = require("rxjs")

// Subject 的數據來源

const obs = from([1, 2, 3])
const subj = new Subject()

subj.subscribe({
  next(i) {
    console.log(i)
  },
  error(e) {
    console.log(e)
  },
  complete() {
    console.log("[done]")
  }
})

obs.subscribe(subj)

subj.next(143)
