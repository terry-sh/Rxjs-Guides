const Rx = require('rxjs')

Rx.Observable.interval(1000).skipUntil(Rx.Observable.of(1).delay(3000)).take(10).subscribe(i => {
	console.log('take', i)
})
// 輸出： 2 - 11