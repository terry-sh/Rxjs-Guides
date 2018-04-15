const Rx = require('rxjs')

// 使用異步的 `Scheduler`
function someFun(cb) {
  cb();
}

const boundSyncFn = Rx.Observable.bindCallback(someFun)
const boundAsyncFn = Rx.Observable.bindCallback(someFun, null, Rx.Scheduler.async)

boundSyncFn().subscribe(() => console.log('I was sync!'))
boundAsyncFn().subscribe(() => console.log('I was async!'))
console.log('This happened...')