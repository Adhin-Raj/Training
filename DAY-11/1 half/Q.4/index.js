// 4. Create a function combineObject, which takes 2 objects as arguments. It should return a new object that merges the properties of both objects. If there's a property key-clash, the property from obj2 takes priority.
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
function combineObject(obj1, obj2) {
    var newObj = __assign(__assign({}, obj1), obj2);
    return newObj;
}
console.log(combineObject({ a: 1, b: 2 }, { b: 3, c: 4 }));
