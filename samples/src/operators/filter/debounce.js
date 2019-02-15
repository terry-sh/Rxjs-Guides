const {
  interval
} = require('rxjs')
const {
  take,
  debounce
} = require('rxjs/operators')

interval(100).pipe(
    take(10),
    debounce(() => interval(120))
  )
  .subscribe(
    i => console.log(i),
    err => {},
    () => console.log('complete')
  )