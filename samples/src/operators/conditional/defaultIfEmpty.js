var Rx = require('rxjs')

Rx.Observable.empty().defaultIfEmpty('it is empty').subscribe(i => {
	console.log(i) // it is empty
})

Rx.Observable.of(1).defaultIfEmpty('it is empty').subscribe(i => {
	console.log(i) // 1
})