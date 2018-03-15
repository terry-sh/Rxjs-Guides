const Rx = require('rxjs')

const event = Rx.Observable.interval(200).take(20)
event.bufferTime(
	700
	// , 800
	// , 3
).subscribe(i => {
	console.log(i)
})

//   0   1   2   3   4   5   6   7   8   9    10
//             0             1              2
// ->
// [0, 1, 2], [3, 4, 5, 6], [7, 8, 9]