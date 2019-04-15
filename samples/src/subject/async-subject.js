const { AsyncSubject } = require("rxjs")

const subject = new AsyncSubject()

subject.subscribe({
  next: i => console.log("[subject 1]", i),
  complete: () => console.log("[subject 1] complete"),
  error: (error) => console.log("[subject 1] error:", error)
})

subject.next("first")

subject.subscribe({
  next: i => console.log("[subject 2]", i),
  complete: () => console.log("[subject 2] complete"),
  error: (error) => console.log("[subject 2] error:", error)
})

subject.next("second")

subject.next("third")

subject.complete()

// or:
// subject.error('4 is dead')
