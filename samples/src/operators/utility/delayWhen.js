const Rx = require('rxjs')

{
	Rx.Observable
		.interval(500)
		.take(10)
		.delayWhen(i => Rx.Observable.interval(Math.random() * 5000))
		.subscribe(i => {
			console.log(i)
		})
}