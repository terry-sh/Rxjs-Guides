const Rx = require('rxjs')

const event = Rx.Observable.interval(200).take(20)

const o1 = Rx.Observable.create((observable) => {
	const next = () => observable.next()
	setTimeout(next, 100)
	setTimeout(next, 210)
	setTimeout(next, 610)
	setTimeout(next, 710)
	setTimeout(next, 1010)

	setTimeout(() => observable.complete(), 1200)
})

const o2 = Rx.Observable.create((observable) => {
	const next = () => observable.next()
	setTimeout(next, 500)
	setTimeout(next, 900)
	setTimeout(next, 1100)

	setTimeout(() => observable.complete(), 1300)
})

event.buffer(o1, o2).subscribe(i => {
	console.log(i)
})

// 0 1 2 3 4 5 6 7 8 9 10
//         0         1