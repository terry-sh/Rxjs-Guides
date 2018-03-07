# Observable

Observable 是 Rxjs 的核心，它主要負責事件流的產生及分發。

## Operators（運算符）

分類：

- Creation Operators
  * ajax - 將 Ajax 請求轉化爲 Observable
  * bindCallback - 將一個最後一個參數爲 callback 的函數一轉化爲一個產生 observable 的函數二，函數二的參數列表爲函數一除 callback 外的其它參數；
  * bindNodeCallback - 特殊格式的 bindCallback
  * create - 接收一個函數，生成一個 obsevable
  * defer
  * empty
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
  * range
  * throw
  * timer

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
  * forkJoin
  * merge
  * mergeAll
  * race
  * startWith
  * switch
  * withLatestFrom
  * zip
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