const Rx = require('rxjs')

const event = Rx.Observable.interval(400).take(30)

const buffered = event.bufferWhen(() =>
  Rx.Observable.interval(1000 + Math.random() * 4000)
)

buffered.subscribe(x => console.log(x))