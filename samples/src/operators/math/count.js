const {
	Observable,
	interval
} = require('rxjs')
const {
	take,
	count
} = require('rxjs/operators')

interval(10).pipe(
	take(20),
	count()
).subscribe(i => {
	console.log('count from interval', i)
})

const observable = Observable.create(observer => {
	observer.next(1)
	observer.next(2)
	observer.next(3)

	// 如果沒有 complete，則不會計數，即 subscribe 不觸發
	observer.complete()

	observer.next(4)
})

observable.pipe(count()).subscribe(i => {
	console.log('count from create', i) // 3
})