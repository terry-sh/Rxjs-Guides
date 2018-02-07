# Rxjs 中的繼承關係

## 類

- Observable
  - Subject
	  - AnonymousSubject
		- AsyncSubject
		- BehaviorSubject
		- CountedSubject
		- ReplaySubject
	- ConnectableObservable
- Scheduler
  - AsyncScheduler
	- *AnimationFrameScheduler
	- *AsapScheduler
	- *QueueScheduler
	- *TestScheduler
	- *VirtualTimeScheduler
- Subscription
	- Subscriber
		- SubjectSubscriber
	- Action
- Notification

## 接口

- Observer
- ObservableInput
- SubscribableOrPromise
- TeardownLogic

## 其中幾個重要的類/接口

- Observable 發送事件，數據流的來源（可以被多個Observer使用，但每個 next 只能同時向單個Observer傳送事件）
  - Subject 可以向多個 Observer 發送事件的Observable；同時，Subject 也是 Observer
- Observer *異步*地接收事件
- Subscription 用於取消Observable訂閱的實例
