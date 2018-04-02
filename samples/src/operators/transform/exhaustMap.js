const Rx = require('rxjs')

Rx.Observable
	.interval(1000)
	.take(10).exhaustMap(
		i => Rx.Observable.interval(i * 120).take(i).mapTo(i)
	)
	.subscribe(x => console.log(x))
