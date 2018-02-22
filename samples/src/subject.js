var Rx = require('rxjs')

// Observable 和 Subject 的區別

const observable = Rx.Observable.from([1, 2, 3]);
observable.subscribe(i => console.log('observable 1', i))
observable.subscribe(i => console.log('observable 2', i))

const subject = new Rx.Subject();
subject.subscribe(i => console.log('subject 1', i))
subject.subscribe(i => console.log('subject 2', i))
observable.subscribe(subject)

// Subject 的用法

console.log('\n\n\n<TEST>:')

const idSub = new Rx.Subject()
const idReducer = idSub.map(id => state => Object.assign({}, state, {
	id
}))

const countSub = new Rx.Subject()
const countReducer = countSub.map(count => state => Object.assign({}, state, {
	count
}))

Rx.Observable.of(() => ({
	id: 0,
	count: 0
})).merge(idReducer, countReducer).subscribe(val => {
	console.log('next:', val)
})

idSub.next(1)
// countSub.next(1)