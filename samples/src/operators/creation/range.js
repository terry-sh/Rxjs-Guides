const { range } = require('rxjs')

// 第一個參數爲起始點，第二個爲總的數量
range(0, 4).subscribe(i => {
	console.log(i)
})
