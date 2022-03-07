// Array
// Last
// Make Arr: 2 generic ,return,overwrite interface , defult value
//addFullName : extends
// interfaces
// props
// useState
// jsx generics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var arr = [1, 2, 3];
var data = [22, 11, 344];
var last = function (data) {
    return data[data.length - 1];
};
var l = last([1, 2, 3, 4]);
// const s = last(['a','b']) //  error
var lastEl = function (arr) {
    return arr[arr.length - 1];
};
var lastElofArr = lastEl([1, 2, 3, 4, 5, 67]);
var lastStringEl = lastEl(['hell', 'world', 12]);
console.log(lastElofArr);
var makeArr = function (x, y) {
    return [x, y];
};
var v = makeArr(222, 1212);
var v2 = makeArr('string', 2);
console.log(v, v2);
// constraints
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
var v4 = makeFullName({ firstName: 'taylor', lastName: 'swift', age: 32 });
console.log(v4.fullName);
