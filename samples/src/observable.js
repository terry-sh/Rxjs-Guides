var Rx = require("rxjs")

let _observer = null

const observable = Rx.Observable.create(observer => {
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

// 如果注释掉该行，下面的代码执行时，_observer 为 null
subscribe(1)

_observer.next("o1 - " + Math.random())
_observer.next("o2 - " + Math.random())

subscribe(2)
subscribe(3)

_observer.complete()
