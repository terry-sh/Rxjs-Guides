const Rx = require('rxjs')

// const timer = Rx.Observable.interval(1000).take(5)

// timer.timeout(1100).subscribe(
// 	i => console.log('1.1s ->', i),
// 	err => console.log('too late to emit (within 1.1s).')
// )

// timer.timeout(900).subscribe(
// 	i => console.log('0.9s ->', i),
// 	err => console.log('too late to emit (within 0.9s).')
// )

Rx.Observable.create(obs => {
		setTimeout(() => obs.next('a'), 900)
		setTimeout(() => obs.next('b'), 1800)
		setTimeout(() => obs.next('c'), 2900)
		setTimeout(() => obs.next('d'), 3200)
	})
	.timeout(1000)
	.subscribe(
		i => console.log('random time span ->', i),
		err => console.log('error of random')
	)