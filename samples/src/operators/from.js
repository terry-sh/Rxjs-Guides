const Rx = require('rxjs')

/**
 * from
 * 将 array-like 的对象转化成 event stream
 */
const obs = Rx.Observable.from([1, 2, 3, 4])

obs.subscribe(i => {
	console.log('<1>', i)
})

obs.subscribe(i => {
	console.log('<2>', i)
})