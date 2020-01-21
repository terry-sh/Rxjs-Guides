const { of, Observable } = require("rxjs")
const { single, catchError } = require("rxjs/operators")

/*
  S : stream
  c : condition
  M : matched stream

  M = S.pipe(single(c))
  if card(M) = 1 return the exact element
  if card(M) = 0 return undefined
  if card(M) > 1 throw exception
  */
const stream = new Observable(obs => {
  obs.next(1)
  obs.next(2)
  obs.next(4)
  // 沒有 complete 則不起作用
  obs.complete()
})

stream.pipe(single(i => i === 1)).subscribe(i => {
  console.log("1. single", i)
})

stream.pipe(single(i => i % 2 === 1)).subscribe(i => {
  console.log("2. single", i)
})

of(1, 2, 2, 3)
  .pipe(
    single(i => i === 2),
    catchError(err => of(4))
  )
  .subscribe(i => {
    console.log("single = ", i)
  })

of(1, 2, 3)
  .pipe(single(i => i === 4))
  .subscribe(i => {
    if (i === undefined) {
      console.log("condition not matched")
    }
  })
