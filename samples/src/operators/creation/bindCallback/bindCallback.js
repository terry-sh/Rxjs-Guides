const Rx = require('rxjs')

// 基本使用
const obs1 = Rx.Observable.bindCallback((x, y, cb) => {
	const z = x + y
	cb(z)
})

obs1(1, 2).subscribe(function cb(z) {
	console.log(z) // 3
})

// 多參數
const obs2 = Rx.Observable.bindCallback((x, y, cb) => {
	const z = x + y
	cb(z, x, y)
})

obs2(1, 2).subscribe(function cb(z) {
	console.log(z) // [3, 1, 2]
})

obs2(1, 2).subscribe(function cb(z, x, y) {
	console.log(z, x, y) // [3, 1, 2], undefined, undefined
})