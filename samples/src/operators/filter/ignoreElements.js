const Rx = require('rxjs')

Rx.Observable.create(obs => {
	obs.next(1)
	obs.next(2)
	obs.next(3)

	if (Math.random() > 0.5) {
		obs.complete()
	} else {
		obs.error('oops!')
	}

}).ignoreElements().subscribe(i => {
	console.log(i)
},
err => {
	console.log(err)
},
complete => {
	console.log('finish')
})