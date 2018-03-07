# Observable

Observable 是 Rxjs 的核心，它主要負責事件流的產生及分發。

## Operators（運算符）

分類：

- Creation Operators (所有方法都是 static 的)
  * ajax - 將 Ajax 請求轉化爲 Observable
  * bindCallback - 將一個最後一個參數爲 callback 的函數一轉化爲一個產生 observable 的函數二，函數二的參數列表爲函數一除 callback 外的其它參數；
  * bindNodeCallback - 特殊格式的 bindCallback
  * create - 接收一個函數，生成一個 obsevable
  * defer
  * empty - 生成一個只會發生 complete 的 Observale，一般不直接使用，而是用於 mergeMap 等合成場合。
  * from - 輸入數組、類數組、Promise、Iterator 等，生成 Observable
  * fromEvent
  * fromEventPattern
  * fromPromise - 輸入 Promise 生成 Observable
  * generate
  * interval - 生成一個無限的定時輸入事件流（數據爲從 0 開始的序號）的 Observable
  * never
  * of - 接收一系列的單個元素，並其生成 Observable
  * repeat
  * repeatWhen
  * range - 輸出一定範圍的數字
  * throw
  * timer - 第一個參數爲定時時間（即多久以後，或者某個時間點開始），如果第二個參數指定，則爲 interval；不指定則爲 timeout。
  * webSocket

- Transformation Operators
  * buffer
  * bufferCount
  * bufferTime
  * bufferToggle
  * bufferWhen
  * concatMap
  * concatMapTo
  * exhaustMap
  * expand
  * groupBy
  * map
  * mapTo
  * mergeMap
  * mergeMapTo
  * mergeScan
  * pairwise
  * partition
  * pluck
  * scan
  * switchMap
  * switchMapTo
  * window
  * windowCount
  * windowTime
  * windowToggle
  * windowWhen

- Filtering Operators
  * debounce
  * debounceTime
  * distinct
  * distinctKey
  * distinctUntilChanged
  * distinctUntilKeyChanged
  * elementAt
  * filter
  * first
  * ignoreElements
  * audit
  * auditTime
  * last
  * sample
  * sampleTime
  * single
  * skip
  * skipLast
  * skipUntil
  * skipWhile
  * take
  * takeLast
  * takeUntil
  * takeWhile
  * throttle
  * throttleTime

- Combination Operators
  * combineAll
  * combineLatest
  * concat
  * concatAll
  * exhaust
  * forkJoin [static]
  * merge [static]
  * mergeAll
  * race
  * startWith
  * switch
  * withLatestFrom
  * zip [static]
  * zipAll

- Multicasting Operators
  * cache
  * multicast
  * publish
  * publishBehavior
  * publishLast
  * publishReplay
  * share

- Error Handling Operators
  * catch
  * retry
  * retryWhen

- Utility Operators
  * do
  * delay
  * delayWhen
  * dematerialize
  * finally
  * let
  * materialize
  * observeOn
  * subscribeOn
  * timeInterval
  * timestamp
  * timeout
  * timeoutWith
  * toArray
  * toPromise

- Conditional and Boolean Operators
  * defaultIfEmpty
  * every
  * find
  * findIndex
  * isEmpty

- Mathematical and Aggregate Operators
	* count
	* max
	* min
	* reduce