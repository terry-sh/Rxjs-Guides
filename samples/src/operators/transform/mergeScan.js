const Rx = require('rxjs')

Rx.Observable
	.interval(100)
	.take(5)
	.mergeScan(
		(acc, one) => {
			acc += one
			return Rx.Observable.range(acc, one)
		},
		0
	)
	.subscribe(x => console.log(x))