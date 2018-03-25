const Rx = require('rxjs')

const start = new Date()

Rx.Observable
	.forkJoin(
		Rx.Observable.interval(200).take(30),
		Rx.Observable.interval(300).take(15),
		(n, m) => n + m
	)
	.subscribe(i => {
		console.log(i) // 43
		const duration = (new Date() - start) / 1000
		console.log(`takes ${duration} seconds`)
	})