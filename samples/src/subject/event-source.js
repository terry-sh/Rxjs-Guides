const Rx = require('rxjs')

// Subject 的數據來源

const obs = Rx.Observable.from([1, 2, 3])
const subj = new Rx.Subject()

subj.subscribe({
	next(i) {
		console.log(i)
	},
	error(e) {
		console.log(e)
	},
	complete() {
		console.log('[done]')
	}
})

obs.subscribe(subj)

subj.next(143)