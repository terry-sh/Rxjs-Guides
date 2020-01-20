const { race, interval } = require('rxjs')
const { mapTo, take } = require('rxjs/operators')

//take the first observable to emit
const example = race(
  //emit every 1.5s
  interval(1500).pipe(mapTo('Inu')),
  //emit every 1s
  interval(1000).pipe(mapTo('Neko')),
  //emit every 2s
  interval(2000).pipe(mapTo('Tori')),
  //emit every 2.5s
  interval(2500).pipe(mapTo('Kuma'))
)

example.pipe(take(3)).subscribe(val => console.log('Winner is: ', val))