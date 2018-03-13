const Rx = require("rxjs")

Rx.Observable.empty().isEmpty().subscribe(cond => {
	console.log('empty', cond)
})

Rx.Observable.never().isEmpty().subscribe(cond => {
	console.log('never', cond) // never logs!
})
