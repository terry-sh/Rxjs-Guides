const Rx = require('rxjs')

const clicks = Rx.Observable.create(obs => {
	setTimeout(() => {
		console.log('clicks 0')
		obs.next(1)
	}, 0)
	setTimeout(() => {
		console.log('clicks 1')
		obs.next(0)
	}, 2000)
	setTimeout(() => {
		console.log('clicks 2')
		obs.next(2)
	}, 5000)
})
//       2000       1500           1500
//                         4000
//                                             9000

const higherOrder = clicks.map(i => Rx.Observable.interval(1500).take(i + 1))
higherOrder.exhaust().subscribe(x => console.log(x))