const Rx = require('rxjs')

Rx.Observable.interval(700).take(5)
	.switchMapTo(Rx.Observable.interval(300).take(3))
	.subscribe(i => {
		console.log(i)
	})

// 等价于：
Rx.Observable.interval(700).take(5)
	.mapTo(Rx.Observable.interval(300).take(3))
	.switch()
	.subscribe(i => {
		console.log(i)
	})