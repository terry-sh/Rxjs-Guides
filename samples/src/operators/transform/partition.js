const Rx = require('rxjs')

const partitions = Rx.Observable.range(1, 20).partition(i => i % 2 === 0)

const evenNumber = partitions[0]
const oddNumber = partitions[1]

evenNumber.subscribe(i => console.log('even', i))
oddNumber.subscribe(i => console.log('odd', i))