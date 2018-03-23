const Rx = require('rxjs')

Rx.Observable.range(1, 20).groupBy(i => i % 5)
.flatMap(group => group.reduce((list, e) => [...list, e], []))
.subscribe(g => {
	console.log(g)
})
