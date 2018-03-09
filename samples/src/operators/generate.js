const Rx = require('rxjs')

/**
 * 第一個參數是初始值
 * 第二個參數是條件判斷
 * 第三個參數是遞增函數
 * 第四個是map值
 */
const o = Rx.Observable.generate(1, x => x < 5, x => x * 2, x => x + 1)
o.subscribe(i => {
	console.log(i)
})
// 2, 3, 5

const infinite = Rx.Observable.generate(1, x => true, x => x + (Math.random() >= 0.5 ? -1 : 1), x => x + 1)
const subscription = infinite.subscribe(x => {
	console.log(x)
})

subscription.unsubscribe() // 永遠運行不到這一步

// 做得注意的是，因爲這是同步的，所以如果是無限的 generator，但 subscription 不能 unsubscribe；運行不到這一步。