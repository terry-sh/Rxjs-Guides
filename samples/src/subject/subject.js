var { from, Subject } = require("rxjs")

// Observable 和 Subject 的區別

const observable = from([1, 2, 3]) // has complete
observable.subscribe({
    next: i => console.log('[observable 1]', i),
    complete: () => console.log('[observable 1].complete')
})
observable.subscribe({
    next: i => console.log('[observable 2]', i),
    complete: () => console.log('[observable 2].complete')
})

const subject = new Subject()
subject.subscribe({
  next: i => console.log("[subject 1]", i),
  complete: () => console.log("[subject 1].complete")
})
subject.subscribe({
  next: i => console.log("[subject 2]", i),
  complete: () => console.log("[subject 2].complete")
})
observable.subscribe(subject)

// after complete, `next` will not working
subject.next("string")
