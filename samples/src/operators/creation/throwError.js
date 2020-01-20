const { throwError } = require("rxjs")

throwError().subscribe(
  val => {
    console.log("next")
  },
  err => {
    console.log("error")
  },
  complete => {
    console.log("complete")
  }
)
