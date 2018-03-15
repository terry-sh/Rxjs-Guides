const Rx = require('rxjs')

const event = Rx.Observable.interval(200).take(20)

event.bufferCount(3).subscribe(i => {
	console.log(i)
})

console.log('\n')

Rx.Observable.empty().delay(200 * 21).subscribe({
	complete: () => {
		event.bufferCount(3, 4).subscribe(i => {
			console.log(i)
		})
	}
})
