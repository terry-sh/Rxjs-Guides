const Rx = require('rxjs')

Rx.Observable.of(
	{ x: 1, y: 1 },
	{ x: 1, y: 2 },
	{ x: 2, y: 3 },
	{ x: 2, y: 4 },
	{ x: 1, y: 5 },
	{ x: 2, y: 6 }
).distinctUntilKeyChanged('x').subscribe(i => {
	console.log(i)
})