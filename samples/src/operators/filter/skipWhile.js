const Rx = require('rxjs')

// Rx.Observable.interval(100).take(20)
// 	.skipWhile((v, i) => i !== 10)
// 	.subscribe(i => {
// 		console.log('skip while: ', i)
// 	})

Rx.Observable.range(1, 20)
	.skipWhile((e, i) => {
		return e % 7 === 1
	})
	.subscribe(i => {
		console.log('skip while: ', i)
	})