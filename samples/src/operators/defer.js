const Rx = require('rxjs')

const lazyObs = Rx.Observable.defer(() => {
	const random = Math.random()

	return Rx.Observable.timer(2000).mapTo(Math.random())
})

// 將會輸入不同的內容
lazyObs.subscribe(x => console.log('s1: ', x))
lazyObs.subscribe(x => console.log('s2: ', x))
