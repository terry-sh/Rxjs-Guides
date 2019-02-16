const { bindCallback } = require('rxjs')


// 多參數 加 selector
const obs3 = bindCallback(
	(x, y, cb) => {
		const z = x + y
		cb(z, x, y)
	},
	(z, x, y) => {
		return 'abkachi'
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
