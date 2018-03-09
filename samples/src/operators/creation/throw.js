const Rx = require('rxjs')

Rx.Observable.throw().subscribe(
	val => {
		console.log('next')
	},
	err => {
		console.log('error')
	},
	complete => {
		console.log('complete')
	})