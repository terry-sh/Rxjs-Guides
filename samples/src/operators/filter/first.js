const Rx = require('rxjs')

try {
	Rx.Observable.empty().first().subscribe(i => {
		console.log('first')
	})
} catch(error) {
	// exception
	console.log('no first element')
}

Rx.Observable.create(obs => {
	obs.next(1)
}).first().subscribe(i => {
	console.log('first', i)
})