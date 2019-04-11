const { generate } = require("rxjs")
const { take } = require("rxjs/operators")

const double = x => x * 2
const increase = x => x + 1

/**
 * 第一個參數是初始值
 * 第二個參數是條件判斷
 * 第三個參數是遞增函數
 * 第四個是 map(映射)
 */
const onehand = generate(1, x => x <= 5, double)
onehand.subscribe(i => console.log(i))
// 1, 2, 4

const onehand2 = generate(1, x => x <= 5, double, increase)
onehand2.subscribe(i => console.log(i))
// 2, 3, 5

const infinite = generate(1, () => true, increase)
const subscription = infinite.pipe(take(10)).subscribe(x => console.log(x))

// TODO: 为什么？
// 做得注意的是，因爲這是同步的，所以如果是無限的 generator，但 subscription 不能 unsubscribe；運行不到這一步。
subscription.unsubscribe()