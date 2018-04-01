const Rx = require('rxjs')

let chances = 0

try {
	Rx.Observable.range(1, 8)
	.map(i => {
		if (i == 4 && chances == 0) {
			chances += 1
			throw '4 is dead'
		}
		return i
	})
	.retry(3)
	.subscribe(i => {
		console.log(i)
	})
} catch(err) {
	//
}