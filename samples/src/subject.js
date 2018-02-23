var Rx = require('rxjs')

// Observable 和 Subject 的區別

const observable = Rx.Observable.from([1, 2, 3]);
observable.subscribe(i => console.log('observable 1', i))
observable.subscribe(i => console.log('observable 2', i))

const subject = new Rx.Subject();
subject.subscribe(i => console.log('subject 1', i))
subject.subscribe(i => console.log('subject 2', i))
observable.subscribe(subject)

// Subject 的用法（RxJs 用作 store）

console.log('\n\n\n<TEST>:')

const idSub = new Rx.Subject()
const idReducer = idSub.map(id => state => Object.assign({}, state, {
	id
}))

const countSub = new Rx.Subject()
const countReducer = countSub.map(count => state => Object.assign({}, state, {
	count
}))

const store = Rx.Observable
	.merge(idReducer, countReducer)
	.scan((state, reducer) => reducer(state), {
		id: 0,
		count: 0
	})

store.subscribe(val => {
	console.log('next 1:', val)
})

store.subscribe(val => {
	console.log('next 2:', val)
})

idSub.next(1)
countSub.next(2)