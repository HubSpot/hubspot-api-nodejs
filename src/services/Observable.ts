export class Observable<T> {
  constructor(private promise: Promise<T>) {}

  public toPromise() {
    return this.promise
  }

  public pipe<S>(callback: (value: T) => S | Promise<S>): Observable<S> {
    return new Observable(this.promise.then(callback))
  }
}
