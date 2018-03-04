const Rx = require('rxjs')

const obs = Rx.Observable.create(function(observer) {
	observer.next(1)
	observer.next(2)
	observer.next(3)

	// complete 和 error 只能執行一個

	observer.complete()
	observer.error('no')
})

obs.subscribe({
	next: i => console.log(i),
	complete: () => console.log('complete'),
	error: e => console.log(e)
})

// 1
// 2
// 3
// complete