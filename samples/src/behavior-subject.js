var Rx = require('rxjs')

/**
 * 使用 BehaviorSubject 作全局的 store
 */

function initialUserState() {
	return {
		id: 1,
		name: 'store'
	}
}

function createStore(initialState) {
	const store = new Rx.BehaviorSubject(initialState())
	const emit = new Rx.Subject()
	emit.subscribe(store)

	return {
		subscribe: store.subscribe.bind(store),

		next: patch => {
			const state = store.getValue()
			emit.next(Object.assign({}, state, patch(state)))
		}
	}
}

const store = createStore(initialUserState)

const s1 = store.subscribe(val => {
	console.log('s1', val)
})

store.next(state => ({
	id: 2
}))

const s2 = store.subscribe(val => {
	console.log('s2', val)
})

store.next(state => ({
	id: 3,
	name: 'store 3'
}))