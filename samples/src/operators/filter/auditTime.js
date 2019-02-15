const {
  interval
} = require('rxjs')
const {
  take,
  auditTime
} = require('rxjs/operators')

interval(100)
  .pipe(
    take(10),
    auditTime(120)
  )
  .subscribe(
    i => console.log(i),
    err => {},
    () => console.log('complete')
  )

//|- 0  -  1  -  2  -  3  - 4  -  5  -  6  -  7  -  8 -  9 -|
//           1.2   2.4   3.6   4.8      6       7.2   8.4
//
// 1, 3, 5, 7