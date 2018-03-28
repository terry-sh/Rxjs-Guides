const Rx = require('rxjs')

const source = Rx.Observable.interval(100)

const mix = source.mergeMap(s =>
	Rx.Observable.interval(500).take(5).map(i => s + '-' + i)
)
mix.subscribe(x => console.log(x))