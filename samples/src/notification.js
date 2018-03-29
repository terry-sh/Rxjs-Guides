const Rx = require('rxjs')

const source = Rx.Observable.of(
	Rx.Notification.createNext('b'),
	Rx.Notification.createNext('a'),
	Rx.Notification.createComplete(),
).dematerialize()

const subscription = source.subscribe(
	i => console.log(i),
	err => {},
	() => console.log('complete')
)