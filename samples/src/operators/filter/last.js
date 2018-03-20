const Rx = require('rxjs')

try {
	Rx.Observable.empty().last().subscribe(i => {
		console.log('last')
	})
} catch(error) {
	// exception
	console.log('no last element')
}

Rx.Observable.create(obs => {
	obs.next(1)
	obs.next(2)
	// 如果沒有 complete，則不會觸發
	obs.complete()
}).last().subscribe(i => {
	console.log('last', i)
})