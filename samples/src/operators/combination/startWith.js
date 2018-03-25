const Rx = require('rxjs')

Rx.Observable
	.of(2, 3, 4, 5)
	.startWith(1)
	.subscribe(i => {
		console.log(i)
	})