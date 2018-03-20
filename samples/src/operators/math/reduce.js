const Rx = require('rxjs')

Rx.Observable
.range(1, 100)
.reduce((c, i) => i + c, 0)
.subscribe(i => {
	console.log('gauss count', i)
})

Rx.Observable
.range(0, 100)
.map(() => x => Math.floor(Math.random() * 10 + x))
.reduce((val, fn) => fn(val), 1)
.subscribe(i => {
	console.log('finally reduce', i)
})
