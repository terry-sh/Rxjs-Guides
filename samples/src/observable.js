var Rx = require('rxjs')

const observable = Rx.Observable.create(observer => {
	observer.next(1);
	observer.next(2);
	observer.next(3);
	observer.complete();
});

const subscription = observable.subscribe({
	next: (val) => {
		setTimeout(() => {
			console.log(val);
		}, 1000)
	},
	complete: () => {
		console.log('complete')
	},
	error: () => {
		console.log('error')
	}
});