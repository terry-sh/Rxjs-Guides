const Rx = require("rxjs")

Rx.Observable.of(
	Rx.Observable.of(1, 2, 3),
	Rx.Observable.of('Han Meimei', 'Jim', 'Li Lei'),
	Rx.Observable.of('1995-03-10', '1994-11-15', '1993-07-19')
).zipAll(
	(id, name, birthday) => ({ id, name, birthday})
).subscribe(
	student => {
		console.log(`${student.id} / ${student.name} / ${student.birthday}`)
	}
)