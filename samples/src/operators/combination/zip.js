const { of, zip, interval, BehaviorSubject } = require("rxjs")
const { delay, map, tap, filter } = require("rxjs/operators")

{
  const id = of(1, 2, 3)
  const name = of("Han Meimei", "Jim Green", "Li Lei")
  const birthday = of("1995-03-10", "1994-11-15", "1993-07-19")

  zip(id, name, birthday).subscribe(([id, name, birthday]) => {
    console.log(`${id} \t ${name} \t ${birthday}`)
  })
}

{
  // 模拟多个 Ajax获取数据合并
  const auth$ = new BehaviorSubject({ token: "###" })
  const info$ = new BehaviorSubject({ id: 1, name: "lucky sweetie" })
  const cart$ = new BehaviorSubject({ carts: ["book(1)## RxJs Guides"] })

  function onEmit(o, i) {
    return o.pipe(
      delay(1000 * i),
      filter(val => !!val),
      tap(() => console.log(`api ${i} finished.`))
    )
  }

  const o1 = onEmit(auth$, 1)
  const o2 = onEmit(info$, 2)
  const o3 = onEmit(cart$, 3)

  const aggregate = (s1, s2, s3) => ({ ...s1, ...s2, ...s3 })
  zip(o1, o2, o3, aggregate).subscribe(state => {
    console.log("app runs with state = ", state)
  })
}

{
  const o1 = interval(3400).pipe(map(() => 1))
  const o2 = interval(4600).pipe(map(() => 2))
  const o3 = new BehaviorSubject(3);
  // interval(2300).pipe(map(() => 3))

  zip(o1, o2, o3).subscribe(value => {
    console.log("zip", value)
  })

  setTimeout(() => {
    o3.next(3.1)
    o3.complete()
  }, 6000)
}
