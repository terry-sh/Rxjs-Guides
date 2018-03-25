const Rx = require('rxjs')

{
	Rx.Observable
		.interval(1000)
		.take(3)
		.delay(2000)
		.subscribe(i => {
			console.log(i)
		})
}

{
	Rx.Observable
		.interval(2000)
		.take(3)
		.delay(new Date(Date.now() + 1000 * 10))
		.subscribe(i => {
			console.log(i)
		})
}