const Rx = require('rxjs')

Rx.Observable
.range(1, 20)
// .create(obs => {
// 	obs.next(1)
// 	obs.next(20)
// })
.groupBy(i => i % 5)
.flatMap(group => group.reduce((list, e) => [...list, e], []))
.subscribe(g => {
	console.log(g)
})