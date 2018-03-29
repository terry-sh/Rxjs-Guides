const Rx = require('rxjs')

Rx.Observable
.interval(300).take(12).map(i => 'source:' + i)
.withLatestFrom(
	Rx.Observable.interval(500).map(i => 'dest A:' + i),
	Rx.Observable.interval(700).map(i => 'dest B:' + i),
).subscribe(i => {
	console.log(i)
})