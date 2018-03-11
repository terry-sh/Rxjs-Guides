const Rx = require('rxjs')

Rx.Observable.range(0, 10).map(() => Math.floor(Math.random() * 100)).max().subscribe(i => {
	console.log('max value of 10 random numbers: ', i)
})