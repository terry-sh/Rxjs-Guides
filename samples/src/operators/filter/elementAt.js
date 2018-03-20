const Rx = require('rxjs')

Rx.Observable.interval(10).take(10).elementAt(3).subscribe(i => console.log(i))

// index out of range, return default value.
// if index is negative number, throws error
Rx.Observable.interval(10).take(10).elementAt(10, -1).subscribe(i => console.log(i))

// erros
try {
	Rx.Observable.interval(10).take(10).elementAt(-1, -1).subscribe(
		i => console.log(i),
		e => console.log('error!')
	)
} catch (error) {
	console.log('out of range erros')
}