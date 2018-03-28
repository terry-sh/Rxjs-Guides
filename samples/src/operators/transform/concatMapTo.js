const Rx = require('rxjs')

const source = Rx.Observable.interval(100).take(5)

const mix = source.concatMapTo(
	Rx.Observable.interval(80).take(4).map(i => ['a', 'b', 'c'][i%3])
)
mix.subscribe(x => console.log(x))