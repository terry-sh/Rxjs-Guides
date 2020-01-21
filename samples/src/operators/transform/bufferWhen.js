const { interval } = require("rxjs")
const { bufferWhen, take } = require("rxjs/operators")

const event = interval(400).pipe(take(30))

const buffered = event.pipe(
  bufferWhen(() => interval(1000 + Math.random() * 4000))
)

buffered.subscribe(x => console.log(x))
