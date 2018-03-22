const Rx = require('rxjs')

Rx.Observable.of(2,1,2,3,4,3,7,9,9,2,4,2,7).distinct().subscribe(i => {
	console.log(i)
})