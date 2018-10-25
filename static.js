var StaticExample = /** @class */ (function () {
    function StaticExample() {
        this.publicNumber = 0;
        console.log(StaticExample.staticCounter++);
    }
    StaticExample.prototype.publicMethod = function () {
        console.log("This is a public method");
    };
    StaticExample.staticMethod = function () {
        console.log("This is a console method");
    };
    StaticExample.staticCounter = 0;
    return StaticExample;
}());
StaticExample.staticMethod();
var static1 = new StaticExample();
var static2 = new StaticExample();
static1.publicMethod();
//# sourceMappingURL=static.js.map