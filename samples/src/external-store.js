var Rx = require('rxjs')

function initialState() {
    return {
        id: 0,
        count: 0
    }
}

// RxJs 用作 store
console.log('<TEST>:')

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
    .scan((state, reducer) => reducer(state), initialState())

store.subscribe(val => {
    console.log('next 1:', val)
})

store.subscribe(val => {
    console.log('next 2:', val)
})

idSub.next(1)
// next 1: { id: 1, count: 0 }
// next 2: { id: 1, count: 0 }

countSub.next(2)
// next 1: { id: 1, count: 2 }
// next 2: { id: 1, count: 2 }

store.subscribe(val => {
    console.log('next 3:', val)
})

idSub.next(3)
// next 1: { id: 3, count: 2 }
// next 2: { id: 3, count: 2 }
// next 3: { id: 3, count: 0 }