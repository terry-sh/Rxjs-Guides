const { Observable } = require("rxjs")
const { ignoreElements } = require("rxjs/operators")

const stream = new Observable(obs => {
  obs.next(1)
  obs.next(2)
  obs.next(3)

  if (Math.random() > 0.5) {
    obs.complete()
  } else {
    obs.error("oops!")
  }
})

stream.pipe(ignoreElements()).subscribe(
  i => {
    console.log(i)
  },
  err => {
    console.log(err)
  },
  complete => {
    console.log("finish")
  }
)
