
const Rx = require('rxjs')

Rx.Observable.interval(100).take(20)
.window(Rx.Observable.interval(230))
.flatMap(group => group.reduce((list, e) => [...list, e], []))
.subscribe(i => {
	console.log(i)
})