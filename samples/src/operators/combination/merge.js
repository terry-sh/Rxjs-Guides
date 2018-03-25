const Rx = require('rxjs')

const a = Rx.Observable.interval(200).take(12).map(i => `a ${i}`)
const b = Rx.Observable.interval(300).take(8).delay(50).map(i => `b ${i}`)

Rx.Observable.merge(a, b).subscribe(i => console.log(i))