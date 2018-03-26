const Rx = require('rxjs')

{
	Rx.Observable
		.interval(1000)
		.take(3)
		.toArray()
		.subscribe(i => {
			console.log(i)
		})
}

{
	Rx.Observable
		.of(1, 2, 3, 4, 5)
		.toArray()
		.subscribe(i => {
			console.log(i)
		})
}

// 相當於：
{
	Rx.Observable
		.of(1, 2, 3, 4, 5)
		.reduce((g, e) => [...g, e], [])
		.subscribe(i => {
			console.log(i)
		})
}