const Rx = require('rxjs')

const clicks = Rx.Observable.create(obs => {
	setTimeout(() => {
		console.log('clicks 0')
		obs.next(0)
	}, 2000)
	setTimeout(() => {
		console.log('clicks 1')
		obs.next(1)
	}, 4000)
	setTimeout(() => {
		console.log('clicks 2')
		obs.next(2)
	}, 9000)
})

const higherOrder = clicks.map((ev) => Rx.Observable.interval(900))
const switched = higherOrder.switch()
switched.subscribe(x => console.log(x))
