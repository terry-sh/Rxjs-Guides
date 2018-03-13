const Rx = require('rxjs')

Rx.Observable.interval(100).take(10).debounce(() => Rx.Observable.interval(100)).subscribe(
	i => {
		console.log(i)
	},
	err => {},
	() => {
		console.log('complete')
	})