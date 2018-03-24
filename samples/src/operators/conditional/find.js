const Rx = require('rxjs')

Rx.Observable.of(2,1,3,2,1,4,3).find(i => i % 2 === 1).subscribe(i => {
	console.log(i)
})