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
