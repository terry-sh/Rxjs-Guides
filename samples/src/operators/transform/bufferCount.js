const {
	empty,
	interval
} = require('rxjs')
const {
	bufferCount,
	delay,
	take
} = require('rxjs/operators')

const event = interval(200).pipe(take(20))

event.pipe(
	bufferCount(3)
).subscribe(i => {
	console.log(i)
})

empty().pipe(
	delay(200 * 21)
).subscribe({
	complete: () => {
		console.log('\n')
		event.pipe(
			bufferCount(3, 4)
		).subscribe(i => {
			console.log(i)
		})
	}
})