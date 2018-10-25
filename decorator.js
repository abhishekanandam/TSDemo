var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function componentDecorator(options) {
    return function (target) {
        target.id = options.id;
        console.log(target);
        console.log(options);
    };
}
var component = /** @class */ (function () {
    function component(id, name) {
        this.id = id;
        this.name = name;
    }
    component.prototype.disp = function () {
        console.log(this.id);
    };
    component = __decorate([
        componentDecorator({
            id: 123
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], component);
    return component;
}());
var o = new component(1, "Abhishek");
o.disp();
//# sourceMappingURL=decorator.js.map