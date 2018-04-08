const Rx = require('rxjs')

Rx.Observable.create(obs => {
		setTimeout(() => obs.next('a'), 900)
		setTimeout(() => obs.next('b'), 1800)
		setTimeout(() => obs.next('c'), 2900)
		setTimeout(() => obs.next('d'), 4000)
		setTimeout(() => obs.complete(), 3000)
	})
	.timestamp()
	.subscribe(
		i => console.log('random time span ->', i),
		err => console.log('error of random'),
		() => console.log('complete') 
	)
