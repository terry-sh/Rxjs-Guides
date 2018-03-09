const Rx = require('rxjs')

// 接收兩個參數，第一個是時間間隔，第二個是 Scheduler

function timeout(time) {

	const start = Date.now()
	console.log(0, 'start')

	const timer = Rx.Observable.interval(1000).subscribe(x => {
		console.log((Date.now() - start) / 1000, x)
	})

	setTimeout(() => {
		timer.unsubscribe()
		console.log((Date.now() - start) / 1000, 'done')
	}, time)

}

timeout(3000)
// 0 - 1

setTimeout(() => {
	timeout(3100)
}, 4000)
// 0 - 1 - 2

// ！！ 所以總感覺這個不太靠譜，除非使用整點秒數的時間，否則很難保證準確性。
