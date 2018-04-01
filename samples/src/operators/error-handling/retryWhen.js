const Rx = require('rxjs')

let chances = 0

try {
	Rx.Observable.range(1, 8)
	.map(i => {
		if (i == 3 && chances < 2) {
			chances ++
			throw '4 is dead'
		}
		return i
	})
	.retryWhen(obs => {
		// 隔 2 秒嘗試一次，共試 4 次
		return Rx.Observable.interval(2000).take(4)
	})
	.subscribe(i => {
		console.log(i)
	})
} catch(err) {
	//
}
