const Rx = require('rxjs')

// 基本使用
const obs1 = Rx.Observable.bindCallback((x, y, cb) => {
	const z = x + y
	return cb(z)
})

obs1(1, 2).subscribe(function cb(z) {
	console.log(z) // 3
})

// 多參數
const obs2 = Rx.Observable.bindCallback((x, y, cb) => {
	const z = x + y
	return cb(z, x, y)
})

obs2(1, 2).subscribe(function cb(z) {
	console.log(z) // [3, 1, 2]
})

obs2(1, 2).subscribe(function cb(z, x, y) {
	console.log(z, x, y) // [3, 1, 2], undefined, undefined
})

// 多參數 加 selector
const obs3 = Rx.Observable.bindCallback(
	(x, y, cb) => {
		const z = x + y
		return cb(z, x, y)
	},
	(z, x, y) => {
		console.log('in selector:', z, x, y)
		return z - x - y
	}
)

obs3(1, 2).subscribe(function cb(z) {
	console.log(z)
	// in selector: 3 1 2
	// 0
})

obs3(1, 2).subscribe(function cb(z, x, y) {
	console.log(z, x, y)
	// in selector: 3 1 2
	// 0, undefined, undefeind
})

// 使用異步的 `Scheduler`
function someFun(cb) {
  cb();
}

const boundSyncFn = Rx.Observable.bindCallback(someFun)
const boundAsyncFn = Rx.Observable.bindCallback(someFun, null, Rx.Scheduler.async)

boundSyncFn().subscribe(() => console.log('I was sync!'))
boundAsyncFn().subscribe(() => console.log('I was async!'))
console.log('This happened...')