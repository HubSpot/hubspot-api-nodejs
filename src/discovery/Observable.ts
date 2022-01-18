export class Observable<T> {
    constructor(private promise: Promise<T>) {}
  
    toPromise() {
      return this.promise;
    }
  
    pipe<S>(callback: (value: T) => S | Promise<S>): Observable<S> {
      return new Observable(this.promise.then(callback));
    }
  }