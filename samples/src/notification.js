const { of, Notification } = require('rxjs')
const { dematerialize } = require('rxjs/operators')

const source = of(
	Notification.createNext('b'),
	Notification.createNext('a'),
	Notification.createComplete(),
).pipe(dematerialize())

const subscription = source.subscribe(
	i => console.log(i),
	err => {},
	() => console.log('complete')
)