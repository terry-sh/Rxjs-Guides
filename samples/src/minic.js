/**
 * 模仿 Observable 的簡單 JavaScript
 */

function nop() {
  /** no-op function **/
}

function Observable(obserableCreator) {
  return {
    subscribe(observer) {
      return {
        unsubscribe: obserableCreator(observer) || nop
      }
    }
  }
}

const observable = Observable(observer => {
  let index = 0

  const timer = setInterval(() => {
    observer.next(++index)

    if (index >= 20) {
      observer.complete()
      clearInterval(timer)
    }
  }, 1000)

  return () => {
    clearInterval(timer)
  }
})

const subscription = observable.subscribe({
  next(val) {
    console.log(val)
  },
  error(err) {
    //
  },
  complete() {
    console.log("complete")
  }
})

setTimeout(() => {
  subscription.unsubscribe()
}, 6000)
