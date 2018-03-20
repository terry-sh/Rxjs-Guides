const Rx = require('rxjs')

Rx.Observable.range(0, 5).takeLast(11).subscribe(i => {
	console.log('take last', i)
})
// 只有 0 - 4

Rx.Observable.create(obs => {
	obs.next(1)
	obs.next(2)
	obs.next(3)
}).takeLast(11).subscribe(i => {
	console.log('take last > ', i)
})