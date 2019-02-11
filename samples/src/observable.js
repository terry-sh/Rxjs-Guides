const { Observable } = require("rxjs")

let _observer = null

const observable = Observable.create(observer => {
  _observer = observer

  observer.next(1)
  observer.next(2)
  observer.next(3)
})

const subscribe = tag => {
  observable.subscribe({
    next: val => console.log(`<${tag}>`, val),
    complete: () => console.log(`<${tag}>`, '[[complete]]')
  })
}

// 每次 subscribe 的时候，都会产生一个新的 observer

subscribe(1)
_observer.next("o11 - " + Math.random())
_observer.next("o12 - " + Math.random())

subscribe(2)
_observer.next("o21 - " + Math.random())

subscribe(3)
_observer.complete()
