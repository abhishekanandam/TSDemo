var toDoModel2;
(function (toDoModel2) {
    var e1;
    (function (e1) {
        e1[e1["new"] = 1] = "new";
    })(e1 = toDoModel2.e1 || (toDoModel2.e1 = {}));
})(toDoModel2 || (toDoModel2 = {}));
var demoClass = /** @class */ (function () {
    function demoClass(id, name) {
        this.id = id;
        this.name = name;
    }
    demoClass.prototype.get = function () {
        return this;
    };
    return demoClass;
}());
var obj = new demoClass(1, "Abhishek");
console.log(obj.get());
//# sourceMappingURL=namespacedemo.js.map