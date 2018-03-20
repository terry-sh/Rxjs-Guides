const Rx = require('rxjs')

Rx.Observable.interval(10).take(20).count().subscribe(i => {
	console.log('count from interval', i)
})

Rx.Observable.create(observable => {
	observable.next(1)
	observable.next(2)
	observable.next(3)

	// 如果沒有 complete，則不會計數，即 subscribe 不觸發
	observable.complete()

	observable.next(4)
}).count().subscribe(i => {
	console.log('count from create', i) // 3
})