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
var AbstractBase = /** @class */ (function () {
    function AbstractBase(name) {
        this._myName = name;
    }
    Object.defineProperty(AbstractBase.prototype, "Name", {
        get: function () { return this._myName; },
        enumerable: true,
        configurable: true
    });
    return AbstractBase;
}());
var ArmyBase = /** @class */ (function (_super) {
    __extends(ArmyBase, _super);
    function ArmyBase(name, totalSolders) {
        var _this = _super.call(this, name) || this;
        _this._totalSolders = totalSolders;
        return _this;
    }
    Object.defineProperty(ArmyBase.prototype, "TotalSolders", {
        get: function () { return this._totalSolders; },
        enumerable: true,
        configurable: true
    });
    ArmyBase.prototype.ActivateSelf = function () {
        return this.TotalSolders;
    };
    return ArmyBase;
}(AbstractBase));
var NavyBase = /** @class */ (function (_super) {
    __extends(NavyBase, _super);
    function NavyBase(name, totalShips) {
        var _this = _super.call(this, name) || this;
        _this._totalShips = totalShips;
        return _this;
    }
    Object.defineProperty(NavyBase.prototype, "TotalShips", {
        get: function () { return this._totalShips; },
        enumerable: true,
        configurable: true
    });
    NavyBase.prototype.ActivateSelf = function () {
        return this.TotalShips;
    };
    return NavyBase;
}(AbstractBase));
var armyBase = new ArmyBase("First army base", 100);
var navyBase = new NavyBase("First navy base", 3);
var anotherArmyBase = new ArmyBase("Second army base", 250);
console.log(armyBase.Name + " " + armyBase.ActivateSelf());
console.log(navyBase.Name + " " + navyBase.ActivateSelf());
console.log(anotherArmyBase.ActivateSelf());
//# sourceMappingURL=abstract.js.map