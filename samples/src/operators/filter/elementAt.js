const Rx = require('rxjs')

Rx.Observable.interval(10).take(10).elementAt(3).subscribe(i => console.log(i))