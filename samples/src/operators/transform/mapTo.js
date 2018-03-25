const Rx = require('rxjs')

Rx.Observable
	.of(1, 2, 3)
	.mapTo('x')
	.subscribe(i => {
		console.log(i)
	})