const Rx = require('rxjs')

Rx.Observable.range(0, 5).take(11).subscribe(i => {
	console.log('take', i)
})
// 只有 0 - 4