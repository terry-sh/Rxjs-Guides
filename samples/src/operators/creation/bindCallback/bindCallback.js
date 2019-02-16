const { bindCallback } = require('rxjs')

function api(url, options) {
	return new Promise((resolve, reject) => {
		console.log('HTTP get ' + url)
		setTimeout(() => {
			let isFailed = Math.random() > 0.9
			console.log('HTTP Request ' + (isFailed ? 'failed' : 'succeeded'))

			if (isFailed) {
				reject({ url: url, options: options, error: 'doom' })
			} else {
				resolve({ url: url, options: options, message : 'victory' })
			}
		}, Math.random() * 3000)
	})
}

// 基本使用
const obs1 = bindCallback((url, options, cb) => {
	api(url, options).then(
		res => cb(res),
		err => cb(err)
	)
})

obs1('/api/v1/articles', undefined).subscribe(function cb(z) {
	console.log(z) // 3
})

obs1('/api/v1/posts', {}).subscribe(function cb(z) {
	console.log(z) // 3
})
