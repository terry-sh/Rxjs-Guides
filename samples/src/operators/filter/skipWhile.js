const Rx = require('rxjs')

Rx.Observable.interval(100).take(20).skipWhile((v, i) => i !== 10).subscribe(i => {
	console.log('skip while: ', i)
})