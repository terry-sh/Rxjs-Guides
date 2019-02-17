const { defer, timer } = require('rxjs')
const { mapTo } = require('rxjs/operators')

const lazyObs = defer(() => {
	const random = Math.random()

	return timer(2000).pipe(mapTo(random))
})

// 將會輸入不同的內容
lazyObs.subscribe(x => console.log('s1: ', x))
lazyObs.subscribe(x => console.log('s2: ', x))
