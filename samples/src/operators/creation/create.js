const Rx = require('rxjs')

const obs = Rx.Observable.create(function (observer) {
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


// async 異步
const asyncObs = Rx.Observable.create((observer) => {
	let i = 0

	const timer = setInterval(() => {
		observer.next(i++)
	}, 1000)

	// return `unsubscribe`
	return () => {
		clearInterval(timer)
		observer.complete()
	}
})

const obs2 = asyncObs.subscribe({
	next: i => {
		console.log(i)
	},
	error: err => {},
	complete: () => {
		console.log('async complete')
	}
})

setTimeout(() => {
	obs2.unsubscribe()
}, 4000)