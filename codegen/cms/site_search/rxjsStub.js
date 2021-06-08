var Observable = (function () {
    function Observable(promise) {
        this.promise = promise;
    }
    Observable.prototype.toPromise = function () {
        return this.promise;
    };
    Observable.prototype.pipe = function (callback) {
        return new Observable(this.promise.then(callback));
    };
    return Observable;
})();
exports.Observable = Observable;
function from(promise) {
    return new Observable(promise);
}
exports.from = from;
function of(value) {
    return new Observable(Promise.resolve(value));
}
exports.of = of;
function mergeMap(callback) {
    return function (value) { return callback(value).toPromise(); };
}
exports.mergeMap = mergeMap;
function map(callback) {
    return callback;
}
exports.map = map;
