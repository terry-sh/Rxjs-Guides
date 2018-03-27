const Rx = require('rxjs')

Rx.Observable
	.of(1, 2, 3, 4)
	// .of(1) // 如果只有一個，不會發起任何新事件
	.pairwise()
	.subscribe(pair => {
		console.log(pair)
	})
// [1,2], [2,3], [3,4]

Rx.Observable.create(obs => {
	obs.next('a')
	obs.next('b')
	obs.next('c')
	obs.next('d')
})
.pairwise()
.subscribe(pair => {
	console.log(pair)
})