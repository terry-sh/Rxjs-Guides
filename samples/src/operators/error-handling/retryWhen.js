const { Observable, interval, range } = require("rxjs")
const { delay, map, retryWhen, take } = require("rxjs/operators")

function testRetryWhen() {
  let chances = 1

  try {
    range(1, 8)
      .pipe(
        map(i => {
          if (i === 4 && chances === 1) {
            chances++
            throw new Error("4 is dead")
          }
          return i
        }),
        retryWhen(() =>
          // 隔 2 秒嘗試一次，共試 4 次
          interval(2000).pipe(take(4))
        )
      )
      .subscribe(i => {
        console.log(i)
      })
  } catch (err) {
    //
  }
}

function request(url) {
  return Observable.create(observer => {
    console.log("HTTP starts....")
    setTimeout(() => {
      const response = (Math.random() * 10).toFixed(2)
      if (response >= 6) {
        // console.log('HTTP error: ' + url);
        observer.error('HTTP erorr: ' + url)
      } else {
        observer.next({ url, response })
        observer.complete()
      }
    }, 2000)
  })
}

function testRetryRequest() {
  try {
    request("/login")
      .pipe(
        map(i => {
          if (i.response >= 3) {
            console.log("HTTP failed: " + i.url)
            throw new Error("HTTP failed: " + i.url)
          }
          return i
        }),
        retryWhen(error =>
          error.pipe(
            delay(5000),
            take(5)
          )
        )
      )
      .subscribe({
        next: i => {
          console.log("HTTP done: ", i.url + " @" + i.response)
        },
        error: e => {
          console.log(e);
        }
      })
  } catch (error) {
    console.log(error)
  }
}

testRetryRequest()
