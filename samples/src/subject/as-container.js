const Rx = require('rxjs');

const subject = new Rx.Subject();

subject.throttleTime(1000).subscribe(i => console.log('[subject 1]', i));
subject.debounceTime(1000).subscribe(i => console.log('[subject 2]', i));

[200, 800, 300, 220, 400, 900, 1050, 600, 1100, 500].reduce((time, gap) => {
	setTimeout(() => {
		subject.next(`${time}\t${gap}`)
	}, time)

	return time + gap
}, 0);
