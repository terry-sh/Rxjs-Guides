const Rx = require('rxjs')

Rx.Observable.range(0, 5).take(11).subscribe(i => {
	console.log('take more', i)
})
// 0 - 4

Rx.Observable.range(0, 12).take(5).subscribe(i => {
	console.log('take less', i)
})
// 0 - 4