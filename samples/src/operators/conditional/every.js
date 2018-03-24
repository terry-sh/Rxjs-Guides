const Rx = require('rxjs')

Rx.Observable.of(2, 1, 3, 2, 1, 4, 3)
	.every(i => i % 2 === 0)
	.subscribe(i => {
		console.log(i ? 'yes' : 'no')
	})