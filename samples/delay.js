var Rx = require('rxjs')

Rx.Observable.interval(1000)
	.skip(1)
	.take(5)
	.do(value => {
		console.log(`第${value}秒發送${value}`)
	})
	.delay(2000)
	.timeInterval()
	.subscribe(result => {
		console.log('res->', result)
	})