var example = /** @class */ (function () {
    function example() {
    }
    Object.defineProperty(example.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return example;
}());
var exampleObj = new example();
exampleObj.name = "Abhishek";
console.log(exampleObj.name);
//# sourceMappingURL=accessors.js.map