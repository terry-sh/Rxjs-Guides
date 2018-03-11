const Rx = require('rxjs')

Rx.Observable.empty().startWith('empty/startWith').repeat(5).subscribe(i => {
	console.log(i)
})

Rx.Observable.interval(500).take(2).repeat(3).subscribe(i => {
	console.log('interval/take/repeat', i)
})

// 只會了輸出 2 次：
Rx.Observable.interval(500).repeat(5).take(2).subscribe(i => {
	console.log('interval/repeat/take', i)
})

// only once!
Rx.Observable.create(observable => {
	observable.next('from create')
	// 如果不加 complte，則無效
	// observable.complete()
}).repeat(5).subscribe(i => {
	console.log(i)
})
