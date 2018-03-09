const Rx = require('rxjs')

const o = Rx.Observable.never().startWith(8)
o.subscribe(
	i => { console.log(i) },
	() => {},
	() => { console.log('complete') }
)
