const { Observable, combineLatest } = require("rxjs")

// function createAsync<T>(pairs: [{ time: number, event: T }]);
function createAsync(pairs) {
  return new Observable(obs => {
    pairs.forEach(item => {
      setTimeout(() => obs.next(item.event), item.time)
    })
  })
}

const eventStreamLetter = [
  { time: 800, event: "a" },
  { time: 1100, event: "b" },
  { time: 1800, event: "c" },
  { time: 2300, event: "d" },
  { time: 2900, event: "e" }
]

const eventStreamNumber = [
  { time: 950, event: 1 },
  { time: 1200, event: 2 },
  { time: 1400, event: 3 },
  { time: 1500, event: 4 }
]

combineLatest(
  createAsync(eventStreamLetter),
  createAsync(eventStreamNumber),
  (x, y) => x + y
).subscribe(i => {
  console.log(i)
})

// of(createAsync(eventStreamLetter), createAsync(eventStreamNumber))
// pipe(combineAll((x, y) => x + y)).subscribe(i => {
// 	console.log(i)
// })
