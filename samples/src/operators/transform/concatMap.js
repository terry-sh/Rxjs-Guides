const Rx = require('rxjs')

const source = Rx.Observable.interval(100).take(3)

const mix = source.concatMap(s =>
	Rx.Observable.interval(500).take(5).map(i => s + '-' + i)
)
mix.subscribe(x => console.log(x))