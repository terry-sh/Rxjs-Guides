# Subject

Subject 既是 Observable 又是 Observer。
作爲 Observable，它自身是一個空的事件流，可以訂閱 多個 Observer，並實現 multi-cast；
作爲 Subscriber，它可以通過 next 方法不斷發起事件；
作爲 Observer，它是可以被 Observable 訂閱，並用 Observable 的事件流作爲自己的事件流；
