const { interval, Observable } = require("rxjs")
const { debounce } = require("rxjs/operators")

function timerOf(timeList) {
  const timeSeries = timeList.reduce(
    ({ acc, list }, cur) => {
      list.push(acc += cur)
      return { acc, list }
    },
    { list: [], acc: 0 }
  ).list
  console.log("time series", timeSeries);

  return Observable.create(stream => {
    let i = 0
    let timer = null
  
    function setTimer() {
      clearTimeout(timer)
      timer = setTimeout(() => {
        if (i < timeList.length) {
          stream.next({ index: i, value: timeSeries[i] })
          i++
          setTimer()
        }
      }, timeList[i])
    }

    setTimer()
  })
}

{
  const timeSeries = new Array(12)
    .fill(0)
    .map(() => Math.max(Math.floor(Math.random() * 10) * 100, 100))

  const avarageGap = Math.floor(
    timeSeries.reduce((a, i) => a + i, 0) / timeSeries.length
  )

  console.log("avarage time gap", avarageGap)

  timerOf(timeSeries)
    .pipe(debounce(() => interval(avarageGap)))
    .subscribe(
      i => {
        console.log(i)
      },
      err => {},
      () => {
        console.log("complete")
      }
    )
}
