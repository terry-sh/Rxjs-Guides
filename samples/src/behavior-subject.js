const {
  BehaviorSubject,
  Subject,
  from
} = require('rxjs')
const {
  retryWhen
} = require('rxjs/operators')
const Axios = require('axios')

/**
 * 使用 BehaviorSubject 作全局的 store
 */
function initialUserState() {
  return {
    name: 'weather',
    isLoading: false,
    provinces: []
  }
}

function createStore(initialState) {
  const store = new BehaviorSubject(initialState())
  const emit = new Subject()
  emit.subscribe(store)

  return {
    subscribe: store.subscribe.bind(store),

    next: patch => {
      const state = store.getValue()
      const $patch = patch(state)
      if ($patch === undefined) {
        return
      } else {
        emit.next(Object.assign({}, state, patch(state)))
      }
    }
  }
}

const store = createStore(initialUserState)

const s1 = store.subscribe(state => {
  console.log('s1', state)
})

store.next(state => ({
  name: 'real-time weather'
}))

const s2 = store.subscribe(state => {
  console.log('s2', state)
})

store.next(state => ({
  name: 'china weather'
}))

const getProvince = () => {
  store.next(state => ({
    isLoading: true
  }))

  from(Axios.get('http://47.90.126.26/api/china'))
    .pipe(
      retryWhen(req => {
        console.log('<retry>', new Date().toLocaleString())
        return req.delay(1000).take(5)
      })
    )
    .subscribe({
      closed: true,
      next: res => {
        if (res.data instanceof Array) {
          console.log('<response-success>')
          const provinces = (res.data || []).filter((_, i) => i <= 1)
          store.next(state => ({
            isLoading: false,
            provinces
          }))
        } else {
          console.log('<response-error>')
          store.next(state => ({
            isLoading: false,
            provinces: []
          }))
        }
      },
      error: err => {
        console.log('<network-error>')
        store.next(state => ({
          isLoading: false
        }))
      },
      complete: () => {
        console.log('<complete>')

        store.next(state => {
          return state.isLoading ? {
            isLoading: false
          } : undefined
        })
      }
    })
}

const s3 = getProvince()
// s3.unsubscribe()