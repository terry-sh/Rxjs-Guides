const Rx = require('rxjs')

Rx.Observable.range(1, 10).filter(i => i % 2 === 1).subscribe(i => {
	console.log('odd number: ', i)
})