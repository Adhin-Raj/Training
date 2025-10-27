// 5. Write a function to check object equality. Which receives two objects as arguments, and it should return "Equal" if both contain same keys, values, "Not Equal" if not.
function objectEqualityCheck(obj1, obj2) {
    var objArr1 = Object.entries(obj1);
    var objArr2 = Object.entries(obj2);
    if (objArr1.length !== objArr2.length)
        return "Not Equal";
    var count = 0;
    for (var _i = 0, objArr1_1 = objArr1; _i < objArr1_1.length; _i++) {
        var _a = objArr1_1[_i], key1 = _a[0], values1 = _a[1];
        for (var _b = 0, objArr2_1 = objArr2; _b < objArr2_1.length; _b++) {
            var _c = objArr2_1[_b], key2 = _c[0], values2 = _c[1];
            if (key1 === key2 && values1 === values2) {
                count += 1;
            }
        }
    }
    if (count === objArr1.length)
        return "Equal";
    else
        return "Not Equal";
}
console.log(objectEqualityCheck({ a: 1, b: 2 }, { b: 3, c: 4 }));
console.log(objectEqualityCheck({ a: 1, b: 2 }, { b: 2, a: 1 }));
console.log(objectEqualityCheck({ a: 1, b: 2 }, { b: 2, a: 1, c: 4 }));
console.log(objectEqualityCheck({ a: 1, b: 2, c: 4 }, { b: 2, a: 1, c: 4 }));
