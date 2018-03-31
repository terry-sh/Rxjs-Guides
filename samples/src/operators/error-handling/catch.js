const Rx = require('rxjs')

Rx.Observable.range(1, 8)
.map(i => {
	if (i == 4) { throw '4 is dead' }
	return i
})
.catch(err => Rx.Observable.of('A', 'B', 'C'))
.subscribe(i => {
	console.log(i)
})