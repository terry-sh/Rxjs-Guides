const Rx = require('rxjs')

// 該操作符在某些版本中可能已刪除
Rx.Observable.of(
	{ x: 1, y: 1 },
	{ x: 1, y: 2 },
	{ x: 2, y: 3 },
	{ x: 2, y: 4 },
	{ x: 1, y: 5 },
	{ x: 2, y: 6 }
).distinctKey('x').subscribe(i => {
	console.log(i)
})