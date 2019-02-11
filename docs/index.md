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

- Observable 發送事件，數據流的來源（可以被多個Observer使用，但不同的 Observer 订阅的是不同的数据流实例）
  - Subject 可以向多个 Observer 发送数据的 Observable，并且其可以在创建完成后发送数据；同時，Subject 也是 Observer（可以订阅数据）
- Observer *異步*地接收事件
- Subscription 用於取消Observable訂閱的實例
