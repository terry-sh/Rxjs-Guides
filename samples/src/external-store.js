var Rx = require('rxjs')

function initialState() {
    return {
        id: 0,
        count: 0
    }
}

// RxJs 用作 store
console.log('<TEST>:')

function UserStore() {
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
        .share()

    return {
        store,
        action: {
            id: idSub,
            count: countSub
        }
    }
}

const userStore = UserStore()

class Component {

    setState(state) {
        this.state = state
        this.render()
    }

    componentWillMount() {}
    componentWillUnmount() {}
    render() {}
}

class StoreComponent extends Component {

    constructor() {
        super()
        this.componentWillMount()
    }

    componentWillMount() {
        this.subscription = userStore.store.subscribe(state => {
            this.setState(state)
        })
    }

    componentWillUnmount() {
        this.subscription.unsubscribe()
    }

}

class Header extends StoreComponent {
    render() {
        console.log('<header />', this.state)
    }
}

class Body extends StoreComponent {
    render() {
        console.log('<body   />', this.state)
    }
}

class Footer extends StoreComponent {
    render() {
        console.log('<footer />', this.state)
    }
}

class App extends Component {

    render() {
        let header = new Header()
        userStore.action.id.next(1)

        let body = new Body()
        userStore.action.id.next(2)

        let footer = new Footer()
        userStore.action.count.next(3)


        header.componentWillUnmount()
        body.componentWillUnmount()

        userStore.action.id.next(4)
        footer.componentWillUnmount()

        userStore.action.count.next(5)
    }

}

new App().render()