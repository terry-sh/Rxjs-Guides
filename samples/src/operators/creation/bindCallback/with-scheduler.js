const { bindCallback, Scheduler } = require('rxjs')

// 使用異步的 `Scheduler`
function someFun(cb) {
  cb();
}

const boundSyncFn = bindCallback(someFun)
const boundAsyncFn = bindCallback(someFun, null, Scheduler.async)

boundSyncFn().subscribe(() => console.log('I was sync!'))
boundAsyncFn().subscribe(() => console.log('I was async!'))
console.log('This happened...')