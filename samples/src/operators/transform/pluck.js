const Rx = require('rxjs')

const event = Rx.Observable
.of({x: 1}, {x: 2})
.pluck('x')
.subscribe(i => {
	console.log(i)
})