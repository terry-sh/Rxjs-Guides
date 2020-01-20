const { of } = require("rxjs")
const { zipAll } = require("rxjs/operators")

const id$ = of(1, 2, 3)
const name$ = of("Han Meimei", "Jim", "Li Lei")
const birthday$ = of("1995-03-10", "1994-11-15", "1993-07-19")

of(id$, name$, birthday$)
  .pipe(zipAll((id, name, birthday) => ({ id, name, birthday })))
  .subscribe(student => {
    console.log(`${student.id} / ${student.name} / ${student.birthday}`)
  })
