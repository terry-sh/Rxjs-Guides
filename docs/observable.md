# Observable

Observable 是 Rxjs 的核心，它主要數據流的產生及分發。

## Operators（運算符）

分類：

- Creation Operators
  * ajax
  * bindCallback
  * bindNodeCallback
  * create
  * defer
  * empty
  * from
  * fromEvent
  * fromEventPattern
  * fromPromise
  * generate
  * interval
  * never
  * of
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