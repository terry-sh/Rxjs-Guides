# bindCallback

傳入一個最後的參數爲 callback 的函數 F，返回一個產生 observable 的函數——其參數列表爲函數 F 除 callback 外的其它參數。

```ts
function bindCallback<ARGS>(fn: (...rest, cb: (..args: ARGS) => any) => any) {
	function callback(...rest) : Observable<ARGS> {
		return Observable.of([...args])
	}

	return callback;
}
```