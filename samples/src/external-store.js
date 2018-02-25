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

    function readonly(value) {
        return {
            enumerable: true,
            writable: false,
            value
        }
    }

    function createModule(reducer) {
        const subject = new Rx.Subject()
        const action = subject.map(reducer)

        const emit = (payload) => subject.next(payload)
        Object.defineProperties(emit, {
            subject: readonly(subject),
            action: readonly(action),
        })

        return emit
    }

    const id = createModule(id => state => Object.assign({}, state, {
        id
    }))
    const count = createModule(count => state => Object.assign({}, state, {
        count
    }))

    const store = Rx.Observable
        .merge(id.action, count.action)
        .scan((state, reducer) => reducer(state), initialState())
        .share()

    return {
        store,
        action: {
            id,
            count
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
        userStore.action.id(1)

        let body = new Body()
        userStore.action.id(2)

        let footer = new Footer()
        userStore.action.count(3)

        header.componentWillUnmount()
        body.componentWillUnmount()

        userStore.action.id(4)
        footer.componentWillUnmount()

        userStore.action.count(5)
    }

}

new App().render()