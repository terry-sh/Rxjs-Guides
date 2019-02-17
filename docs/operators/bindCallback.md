# bindCallback

# 定义

第一个参数 为最后一个参数 callback 的函数 F，callback 函数返回结果 R；
第二个参数 为对 callback 返回结果进行处理的一个函数，返回结果 S；

返回一个产生 Observable 的函数 G，G 的参数列表为函数 F 除 callback 外的其它参数。

```ts
interface BindCallback {
	<A, B>(
		generator: (...args: A, callback: (..cbArgs: B) => void) => void)
	): ((...cbArgs: A) => Observable<B>);

	<A, B, S>(
		generator: (...args: A, cb: (..cbArgs: B) => void) => void),
		selector: (...args: B) => S
	): ((...cbArgs: B) => Observable<S>);

}

```

_注意_： bindCallback 并不是一个操作符，因为它不直接返回 Observable。

## 使用场景

将其它不是产生 Observable 的函数，转化为产生 Observable 的函数。
创建一个新的函数返回 Observable.create 也可以实现类似功能。