const Rx = require('rxjs')

const source = Rx.Observable
.interval(500)
.mapTo(1)
.expand(
	i => Rx.Observable.of(2 * i).delay(1000)
)
.take(10)
.subscribe(x => console.log(x))