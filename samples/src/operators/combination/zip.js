const Rx = require("rxjs")

const id = Rx.Observable.of(1, 2, 3)
const name = Rx.Observable.of('Han Meimei', 'Jim', 'Li Lei')
const birthday = Rx.Observable.of('1995-03-10', '1994-11-15', '1993-07-19')

Rx.Observable.zip(
	id, name, birthday,
	(id, name, birthday) => ({
		id,
		name,
		birthday
	})
).subscribe(
	student => {
		console.log(`${student.id} / ${student.name} / ${student.birthday}`)
	}
)