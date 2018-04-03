# Observable

Observable 是 Rxjs 的核心，它主要負責事件流的產生及分發。

## Operators（運算符）

分類：

- Creation Operators (幾乎所有方法都是 static 的)
  * ajax - 將 Ajax 請求轉化爲 Observabl。
  * bindCallback - 將一個最後一個參數爲 callback 的函數一轉化爲一個產生 observable 的函數二，函數二的參數列表爲函數一除 callback 外的其它參數。
  * bindNodeCallback - 特殊格式的 bindCallback。
  * create - 接收一個函數，生成一個 observable。
  * defer - 具有 lazy 特性地生成 observable，即當 subscribe 時才生成，且每個 subscribe 都生成不同的對象。
  * empty - 生成一個只會發生 complete 的 Observale，一般不直接使用，而是用於 mergeMap 等合成場合。
  * from - 輸入數組、類數組、Promise、Iterator 等，生成 Observable。
  * fromEvent
  * fromEventPattern
  * fromPromise - 輸入 Promise 生成 Observable。
  * generate - 接受初始值，終止條件，遞增函數，（可選map函數），生成一個類似 generator 的 Observable。
  * interval - 生成一個無限的定時輸入事件流（數據爲從 0 開始的序號）的 Observable。
  * never - 從不 emit，與 empty 相似，但是連 complete 也沒有。
  * of - 接收一系列的單個元素，並其生成 Observable。
  * repeat [non-static] - 重複源 Observable 多次；Observable 必須調用了 complete 或者 error。因此，需要注意的是，某些類型的 Observable 可能不起作用。
  * repeatWhen [non-static]
  * range - 輸出一定範圍的數字。
  * throw - 只輸入 error，沒有 next 也沒有 complete。
  * timer - 第一個參數爲定時時間（即多久以後，或者某個時間點開始），如果第二個參數指定，則爲 interval；不指定則爲 timeout。
  * webSocket

- Transformation Operators
  * buffer 類
    + buffer - 將錨Observable 的事件發生時在發生點之前的源 Observable 的事件緩存起來（組成新數組）；每次緩存之後都要清空緩存並重新開始。
    + bufferCount - 按數量將事件流進行緩存；第二个参数为下次缓存再次发起的事件数间隔。
    + bufferTime - 在當前的事件時間點，将过去某段时间内的事件缓存起来；第二个参数为下次缓存再次发起次的时间间隔；第三个参数为缓存数量上限。
    + bufferToggle - 在 第一個 Observable 發起事件時開始計算，在 第二個 Observable 發起時結束，其中間的數據緩存起來。如果第一個重新發起事件而第二個未發起事件，則返回空數組並繼續計數。
    + bufferWhen - 接收一個產生 Observable 的函數，在這個函數返回的Observable有事件產生時，將源Observale 的事件緩存起來，並從新開始緩存。
  * map 類
    + map - 將事件流每一個映射爲新的事件
    + mapTo - 將所有的事件流都映射爲新的事件（同一個）
  * concatMap - 将源 Observable 中的事件先map成新的Observable，再将其 concat 起来（注意 concat 与 merge 的不同）。
  * concatMapTo - 与 concatMap 类似，区别类似于 map 与 mapTo。
  * exhaustMap - map（返回高階Observable）与 exhaust 的結合；相當於`map().exhaust()`。
  * expand - [难理解]
  * groupBy - 將事件流按其性質進行組合，返回 GroupedObservable 的 Observable；注意的是，需要 observable 是有 complete 的，否則將無效。
  * mergeMap - 先将源Observable中事件流中的事件 map 成新的 Observable，再把新的 Observable 里的所有事件 merge 起来；等价于 `map().mergeAll()`。
  * mergeMapTo - 先将事件流中的事件 map 成新 Observale 常数，再把其中的所有事件 merge 起来；等价于 `mapTo().mergeAll()`。
  * mergeScan - 先將事件流應用 scan（返回一個高階 Observable），再將返回的內部 Observable 的事件回到外層；原理上即先 scan 後 merge。
  * pairwise - 將事件流中鄰近的兩個事件合並成一個數組，作爲新的事件。注意：事件流不需要complete；如果事件數少於2，則不發起任何新事件。
  * partition - 傳入一個判斷函數，將事件流轉爲兩個不同的 Observable，組成數組返回，第一個爲通過了測試的所有事件的集合，第二個反之。
  * pluck - 類似map，但將事件流對象按某個 key 的值來一一映射。
  * scan - 類似 reduce，但每次都會發起事件。
  * switchMap -將事件流對應 map 成系列的 Observable，並對這些 Observable 應用 switch。
  * switchMapTo
  * window 類
    + window - 類似 buffer，但返回的不是數組而是 Observable。
    + windowCount - 類似 bufferCount，但返回的是 Observable。
    + windowTime - 類似 bufferTime，但返回 Observable。
    + windowToggle
    + windowWhen

- Filtering Operators
  * 節流/穩流
    + audit
    + auditTime
    + debounce - 如果當前事件距離上一個事件的間隔超過規定時間，則發起事件，否則重新開始計時。
    + debounceTime - 功能同 debounce，只不過第一個參數爲時間
    + sample 
    + sampleTime
    + throttle
    + throttleTime
  * distinct
    + distinct - 將事件流中的事件比較，去重並依序返回；可傳入比較函數作參數，否則使用 ===（全等比較）。
    + distinctKey - 與 distinct 類似，但將事件流中的事件對象要某個key的值進行比較。
    + distinctUntilChanged - 將當前事件與前一個進行比較，若相同則過濾；可傳入一個比較函數。
    * distinctUntilKeyChanged - 與 distinctUntilChanged 想似；將當前事件與前一個事件比較其對象中某個key下的值，如果相同則過濾。
  * elementAt - 返回第 i + 1 個事件（即序數從 0 開始），並發起 complete。
  * filter - 傳入條件判斷函數，返回符合條件的事件
  * first - 返回事件流中的第一個，如果沒有，則會拋出異常。
  * ignoreElements - 忽略所有的事件，只留下 complete 和 error。
  * last - 返回事件流中的最後一個（所以必須要有 complete）；如果沒有，則拋出異常。
  * single - 當且僅且事件流中符合條件的事件只有一個；如果多於一個會拋出異常；少於一個會返回 undefined。
  * skip 類
    + skip - 將事件流中前 n 個事件過濾掉；如果 n 大於事件流總數，則全部事件都爲空。事件流不需要 complete。
    + skipLast - 從最後一個算起，過濾最後的 n 個事件。如果 n 爲負數，則拋出異常。事件流不需要 complete。
    + skipUntil - 傳入 Observable，忽略源數據流的數據直到這個 Observable 發出事件。
    + skipWhile - 傳入一個判斷函數，返回該函數第一次返回 false 的時候及之後的所有事件流（之前的則忽略）
  * take 類
    + take - 從事件流中，從第一個元素開始選擇一定數量的事件；如果數量不足，不會拋出異常；
    + takeLast - 從事件流中，以最後一個元素講，選擇一定數量的事件（必須要有 complete）；如果數量不足，不會拋出異常；
    + takeUntil - 傳入一個 Observable，取當其發起一個事件時的所有源事件。
    + takeWhile - 傳入一個判斷函數，返回該函數第一次返回 false 之前的所有事件，並發起 complete。

- Combination Operators
  * combineAll - 高階 Observable 的用法，在此 Observable 執行 complete 後，執行 combineLatest；參見 combineLatest。
  * combineLatest [static] - 傳入多個 Observable 和一個函數，當有其中一個 Observable 有事件發起時，將其他 Observable 上最近的事件與之一起傳入函數得出新的事件，導入新目標 Observable 的流中。
  * concat [static] - 將事件流中的內部 Observable 的事件合並，功能與 concatAll 相同，但爲 static 方法。
  * concatAll - 將事件流中的的多個 類型爲 Observable 的事件其內部的事件，依次（按照 Observable 的顺序而不是事件的顺序）合並（因此需要內部 Observable 有 complete）。需要注意的是，合並並不會改變事件的時間间隔。
  * exhaust - 高阶 Observable 的方法，直到当前的事件（Observable）complete，才开始消费新的 Observable，否则将跳过。
  * forkJoin [static] - 將每個 Observable 最後一個事件組合成（因此需要 Observable 有 complete）；最後的參數爲合成函數，如不傳入，則合成數組。
  * merge [static] - 將各個 Observable 的事件流合並成一個流。
  * mergeAll - 將內層的 Observable 事件中的 事件 合並到外層。
  * race - 多個 Observable 作爲參數，第一個 emit 的 Observable 將被使用，其它的被忽略。
  * startWith - 在事件流前插入一個指定的事件
  * switch - 可应用 switch 的 Observable 其事件类型必须也为 Observable。当每次有新的事件发起时，都使用最新的那个 Observable；当源 Observable 的事件不为 Observable，则抛出异常。
  * withLatestFrom - 固定一個 Observable 作爲源 Observable，當其發起事件時，從其它 Observable 中取一個最近的事件與之結合；類似的請參考 combineLatest。
  * zip [static] - 傳入多個 Observable ，將其值一一對應，融合成一個。最後一個可选參數數是 zip 函數，如果沒有則合並成一個數組。
  * zipAll - 功能與 zip 類似，但不是 static 方法；可選參數爲函數。

- Multicasting Operators
  * cache
  * multicast
  * publish
  * publishBehavior
  * publishLast
  * publishReplay
  * share

- Error Handling Operators
  * catch - 捕捉事件流中的異常並以新的 Observable 代表當前的 Observale，以使事件流可以繼續。
  * retry - 出錯時重試（從頭開始）；如果在嘗試次數內已完成，則不需繼續重試。
  * retryWhen - 傳入一個 Observable，用戶可以操作以決定何時終止重試等。

- Utility Operators
  * do - 用於消費事件流中的事件，但舊的事件流仍然照原樣返回。通常用於 debug。需要注意的是，如果沒有 subscribe，則不會有任何效果。
  * delay - 將事件流延遲；如果參數是數字，則延後該數字間隔的時間；如果是時間戳，則延遲至該時間（即到該時間才發起第一個事件）。
  * delayWhen - 傳入一個返回 Observable 的函數，將源 Observable 的事件發起事件依次對應爲每個返回的 Observable 的第一個事件發起的時間。
  * dematerialize
  * finally
  * let
  * materialize
  * observeOn
  * subscribeOn
  * timeInterval
  * timestamp
  * timeout - 檢測一段時間間隔內是否有事件。如果有，則繼續；如果沒有事件，則拋出異常，並中止後續的事件。
  * timeoutWith
  * toArray - 將多個事件流合並成一個數組
  * toPromise

- Conditional and Boolean Operators
  * defaultIfEmpty - 如果事件流爲空（即無next，只有complete），則將參數作爲值返回。
  * every - 檢測是否所有的事件流都符合條件
  * find - 查找事件流中符合條件的第一個（即使不存在也不會異常，與first不同）
  * findIndex - 與 find 類似，但返回的是索引。
  * isEmpty - 檢測事件流是否爲空，返回新的Observable，是則發起 true 否則發起 false 

- Mathematical and Aggregate Operators
	* count - 對事件流總數進行計數（必須有 complete）
	* max - 返回數據流中的最大值
	* min - 返回數據流中的最小值
	* reduce - 將事件流進行 reduce 操作，最後只發起一個事件

## 難點

Observable 的運算符難點在於：

  1. Creation 類操作符：
    - bindCallback
  1. transform 類操作符
  2. combination 類操作符：
    - combineAll
    - combineLatest
    - exhaust
    - race
    - switch
    - withLatestFrom
  3. utility 類中的：
    - observeOn

## Reference

  - [Observable 標準提案](https://github.com/tc39/proposal-observable)