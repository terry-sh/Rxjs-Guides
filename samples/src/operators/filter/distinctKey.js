const Rx = require('rxjs')

const data = [
	{ x: 1, y: 1 },
	{ x: 1, y: 3 },
	{ x: 2, y: 3 },
	{ x: 2, y: 4 },
	{ x: 1, y: 4 },
	{ x: 2, y: 5 }
]

// 該操作符在某些版本中可能已刪除
// Rx.Observable.from(data)
// .distinctKey('x')
// .subscribe(i => {
// 	console.log(i)
// })

// 等价于
Rx.Observable.from(data)
.distinct(e => e.x)
.subscribe(i => {
	console.log(i)
})