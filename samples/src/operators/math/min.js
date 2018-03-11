const Rx = require('rxjs')

Rx.Observable.range(0, 10).map(() => Math.floor(Math.random() * 100)).min().subscribe(i => {
	console.log('min value of 10 random numbers: ', i)
})