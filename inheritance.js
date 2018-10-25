var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ParentClass = /** @class */ (function () {
    function ParentClass(city) {
        this.city = city;
    }
    ParentClass.prototype.display = function () {
        console.log("parent class");
    };
    return ParentClass;
}());
var ChildClass = /** @class */ (function (_super) {
    __extends(ChildClass, _super);
    function ChildClass(city) {
        return _super.call(this, city) || this;
    }
    ChildClass.prototype.display = function () {
        _super.prototype.display.call(this);
    };
    return ChildClass;
}(ParentClass));
var childObj = new ChildClass("Bangalore");
childObj.display();
//# sourceMappingURL=inheritance.js.map