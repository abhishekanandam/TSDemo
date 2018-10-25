var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.id = key;
        this.name = value;
    }
    KeyValuePair.prototype.display = function () {
        console.log(this.id + " : " + this.name);
    };
    return KeyValuePair;
}());
var clsObj1 = new KeyValuePair(1, "Abhishek");
var clsObj2 = new KeyValuePair(1, new Date());
clsObj1.display();
clsObj2.display();
//# sourceMappingURL=genericcls.js.map