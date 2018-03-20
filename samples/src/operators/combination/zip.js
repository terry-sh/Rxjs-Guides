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

{
	// 模拟多个 Ajax获取数据合并

	const o1 = Rx.Observable.of({ id: 10 }).delay(1000).do(() => { console.log('api one finished.') })
	const o2 = Rx.Observable.of({ name: 'good user' }).delay(2000).do(() => { console.log('api two finished.') })
	const o3 = Rx.Observable.of({ shoppingCart: [] }).delay(3000).do(() => { console.log('api three finished.') })

	const boundup = Rx.Observable
		.zip(o1, o2, o3, (s1, s2, s3) => ({ ...s1, ...s2,	...s3 }))
		.subscribe(state => {
			console.log('now app is boostrapping with state: ', state)
		})
}