const Rx = require('rxjs')

Rx.Observable
.interval(200)
.take(5)
.map(i => Rx.Observable.interval(300).take(Math.floor(Math.random() * 9) + 1))
.mergeAll()
// or
// .flatMap(i => i.reduce((g, e) => [...g, e], []))
.subscribe(i => {
	console.log(i)
})
