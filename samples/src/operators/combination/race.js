const Rx = require('rxjs')

//take the first observable to emit
const example = Rx.Observable.race(
  //emit every 1.5s
  Rx.Observable.interval(1500).mapTo('Inu'),
  //emit every 1s
  Rx.Observable.interval(1000).mapTo('Neko'),
  //emit every 2s
  Rx.Observable.interval(2000).mapTo('Tori'),
  //emit every 2.5s
  Rx.Observable.interval(2500).mapTo('Kuma')
)

const subscribe = example.subscribe(val => console.log('Winner is: ', val))