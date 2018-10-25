System.register([], function (exports_1, context_1) {
    "use strict";
    var exClass;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exClass = /** @class */ (function () {
                function exClass(id, name) {
                    this.id = id;
                    this.name = name;
                }
                exClass.prototype.display = function () {
                    return this.id + " " + this.name;
                };
                return exClass;
            }());
            exports_1("exClass", exClass);
        }
    };
});
//# sourceMappingURL=exportmodule.js.map