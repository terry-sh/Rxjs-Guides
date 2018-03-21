const Rx = require('rxjs')

Rx.Observable.create(obs => {
	obs.next(1)
	obs.next(2)
	// 沒有 complete 則不起作用
	// obs.complete()
}).single(i => i === 1).subscribe(
	i => {
		console.log('single', i)
	},
	err => {},
	() => {
		console.log('complete')
	}
)

try {
	Rx.Observable.of(1,2,2,3).single(i => i === 2).subscribe(i => {
		console.log('single', i)
	})
} catch(error) {
	console.log(error)
}

try {
	Rx.Observable.of(1,2,3).single(i => i === 4).subscribe(i => {
		console.log('single is:', i)
	})
} catch(error) {
	console.log(error)
}
