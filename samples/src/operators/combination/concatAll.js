const Rx = require('rxjs')

const start = new Date()

Rx.Observable.of(
		Rx.Observable.interval(300).take(4),
		Rx.Observable.of('a', 'b', 'c'),
		Rx.Observable.interval(2000).take(3),
	)
	.concatAll()
	.subscribe(i => {
		const duration = (new Date() - start) / 1000
		console.log(`${i}: at ${duration} seconds`)
	})