const Rx = require('rxjs')

Rx.Observable.interval(1100).take(5)
	.switchMap(i => Rx.Observable.interval(300).take(i + 1))
	.subscribe(i => {
		console.log(i)
	})