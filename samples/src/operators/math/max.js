const { range } = require('rxjs')
const { map, max } = require('rxjs/operators')

range(0, 10).pipe(
	map(() => Math.floor(Math.random() * 100)),
	max(),
).subscribe(i => {
	console.log('max value of 10 random numbers: ', i)
})