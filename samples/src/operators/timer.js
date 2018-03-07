const Rx = require('rxjs')

Rx.Observable.timer(1000).subscribe(i => {
	console.log('timeout', i)
})

Rx.Observable.timer(2000, 500).take(2).subscribe(i => {
	console.log('interval', i)
})
