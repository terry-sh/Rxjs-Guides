const Rx = require('rxjs')

Rx.Observable.of(1, 2, 3, 4, 5).skipLast(2).subscribe(i => {
	console.log(i)
})

Rx.Observable.create(obs => {
	obs.next(1)
	obs.next(2)
	obs.next(3)
	obs.next(4)
}).skipLast(2).subscribe(
	i => {
		console.log('no complete:', i)
	},
	err => {},
	() => {
		console.log('complete: no complete')
	})