const Rx = require('rxjs')

Rx.Observable
	.of(1, 2, 3)
	.map(i => i * 3)
	.subscribe(i => {
		console.log(i)
	})