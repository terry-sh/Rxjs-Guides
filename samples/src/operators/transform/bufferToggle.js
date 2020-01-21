const { interval, timer, Observable } = require("rxjs")
const { bufferToggle, take } = require("rxjs/operators")

const mouseMove = interval(200).pipe(take(40))

const mouseDown = Observable.create(observable => {
  ;[210, 440, 900, 1810, 3630].forEach(duration =>
    setTimeout(() => observable.next(duration), duration)
  )

  setTimeout(() => observable.complete(), 8000)
})

const mouseUp = time => {
  return timer(Math.min(time, 900))
}

mouseMove.pipe(bufferToggle(mouseDown, mouseUp)).subscribe(i => {
  console.log(i)
})

// 0 1 2 3 4 5 6 7 8 9 10
//         0         1
