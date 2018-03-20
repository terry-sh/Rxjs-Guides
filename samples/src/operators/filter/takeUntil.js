const Rx = require('rxjs')

const i = Math.random() * 2000

Rx.Observable.interval(100).takeUntil(Rx.Observable.of(1).delay(i)).subscribe(i => {
	console.log('take', i)
})