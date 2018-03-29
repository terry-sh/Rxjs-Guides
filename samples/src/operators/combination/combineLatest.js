const Rx = require('rxjs')

// function createAsync<T>(pairs: [{ time: number, event: T }]);
function createAsync(pairs) {

	return Rx.Observable.create(obs => {
		pairs.forEach(item => {
			setTimeout(() => {
				obs.next(item.event)
			}, item.time)
		})
	})

}

const eventStreamLetter = [{
	time: 800,
	event: 'a'
}, {
	time: 1100,
	event: 'b'
}, {
	time: 1800,
	event: 'c'
}, {
	time: 2300,
	event: 'd'
}, {
	time: 2900,
	event: 'e'
}]

const eventStreamNumber = [{
	time: 950,
	event: 1
}, {
	time: 1200,
	event: 2
}, {
	time: 1400,
	event: 3
}, {
	time: 1500,
	event: 4
}]

Rx.Observable.combineLatest(createAsync(eventStreamLetter), createAsync(eventStreamNumber), (x, y) => x + y).subscribe(i => {
	console.log(i)
})

// Rx.Observable.of(createAsync(eventStreamLetter), createAsync(eventStreamNumber)).combineAll((x, y) => x + y).subscribe(i => {
// 	console.log(i)
// })