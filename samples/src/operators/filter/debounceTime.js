const Rx = require('rxjs')

Rx.Observable.interval(100).take(10).debounceTime(100).subscribe(
	i => {
		console.log(i)
	},
	err => {},
	() => {
		console.log('complete')
	})

Rx.Observable.interval(100).take(10).debounceTime(120).subscribe(
	i => {
		console.log(i)
	},
	err => {},
	() => {
		console.log('complete')
	})