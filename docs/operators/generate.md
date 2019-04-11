# `generate`

```ts
function generate<T>(
    initial: T,
    condition: (value: T) => boolean,
    iterator: (oldValue: T) => T,
    mapperOrScheduler: (oldValue: T) => T | Scheduler
): Observable<T>;
```