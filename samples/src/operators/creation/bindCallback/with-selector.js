const Rx = require('rxjs')

// 多參數 加 selector
const obs3 = Rx.Observable.bindCallback(
	(x, y, cb) => {
		const z = x + y
		cb(z, x, y)
	},
	(z, x, y) => {
		console.log('in selector:', z, x, y)
		return z - x - y
	}
)

obs3(1, 2).subscribe(function cb(z) {
	console.log(z)
	// in selector: 3 1 2
	// 0
})

obs3(1, 2).subscribe(function cb(z, x, y) {
	console.log(z, x, y)
	// in selector: 3 1 2
	// 0, undefined, undefeind
})
