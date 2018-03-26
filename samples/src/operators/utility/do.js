const Rx = require('rxjs')

Rx.Observable
	.interval(200)
	.take(5)
	.do(x => {
		x ++
		console.log(x)
	})
	.map(x => x + Math.random())
	.subscribe(
		i => console.log('subscribe', i)
	)