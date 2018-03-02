const Rx = require('rxjs')

const obs = Rx.Observable.of(1, 2, 3, 4)

obs.subscribe(i => {
	console.log('<1>', i)
})

obs.subscribe(i => {
	console.log('<2>', i)
})