const { Observable, Subject } = require("rxjs")

function emit(obs) {
  let i = 0
  const timer = setInterval(() => {
    if (i === 5) {
      obs.complete()
      clearInterval(timer)
    } else {
      i++
      obs.next(`index: ${i}, timestamp: ${Date.now()}`)
    }
  }, 300)
}

let debugObservable = true
if (debugObservable) {
  const observable = Observable.create(emit)
  // o1, o2, o3 will always output different values
  observable.subscribe(v => console.log("<o1>", v))
  setTimeout(() => observable.subscribe(v => console.log("<o2>", v)), 500)
  setTimeout(() => observable.subscribe(v => console.log("<o3>", v)), 1000)
}

let debugSubject = true
if (debugSubject) {
  const subject = new Subject()
  // s1, s2, s3 will always output the same value once they are subscribed
  subject.subscribe(v => console.log("<s1>", v))
  setTimeout(() => subject.subscribe(v => console.log("<s2>", v)), 500)
  setTimeout(() => subject.subscribe(v => console.log("<s3>", v)), 1000)
  emit(subject)
}
