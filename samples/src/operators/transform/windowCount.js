const Rx = require('rxjs')

const event = Rx.Observable.interval(200).take(20)

event.windowCount(3)
.subscribe(i => {
	i.reduce((g,e) => [...g, e], []).subscribe(x => {
		console.log(x)
	})
});

// event.windowCount(3)
// .flatMap(group => group.reduce((list, e) => [...list, e], []))
// .subscribe(i => {
// 	console.log(i)
// })