const Rx = require('rxjs')

const o1 = i => {
	console.log('<1>', i)
}

const o2 = i => {
	console.log('<2>', i)
}


/**
 * @function
 * from
 * 将
 *   - array
 *   - array-like 的对象
 *   - Promise
 *   - iterator
 *   - 可訂閱的對象 / Observable 對象
 * 转化成 event stream
 */


// 数组(array)作为参数
const obs1 = Rx.Observable.from([1, 2, 3, 4])
obs1.subscribe(o1)
obs1.subscribe(o2)

// array-like 对象作为参数
const obs2 = Rx.Observable.from({
	0: 'a',
	1: 'b',
	2: 'c',
	3: 'd',
	length: 4,
})

obs2.subscribe(o1)
obs2.subscribe(o2)

// `Promise` 作爲參數
const obs3 = Rx.Observable.from(new Promise((resolve, reject) => {
	const seed = Math.random()
	if (seed > 0.5) {
		resolve(seed)
	} else {
		reject(seed)
	}
})).subscribe(
	seed => {
		console.log('<Promise> success with ', seed)
	},
	seed => {
		console.log('<Promise> failed with ', seed)
	},
	() => {
		console.log('<Promise> complete')
	}
)

// iterator 作爲參數
function* indexGenerator() {
	let i = 0
	while (true) {
		yield ++i
	}
}

const obs4 = Rx.Observable.from(indexGenerator()).take(4).subscribe(
	i => {
		console.log('<Iterator>', i)
	},
	err => {},
	() => console.log('<Iterator> complete')
)

// form Observable 對象
const obs5 = Rx.Observable.from(Rx.Observable.create(function(observer) {
	observer.next(1)
	observer.next(2)
	observer.complete()
})).subscribe({
	next(val) {
		console.log('<subscribable object> next', val)
	},
	complete() {
		console.log('<subscribable object> complete')
	},
	error(err) {
		//
	}
})
