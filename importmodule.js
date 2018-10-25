System.register(["./exportmodule"], function (exports_1, context_1) {
    "use strict";
    var ex, exportmodule_1, commonJs, es6;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ex_1) {
                ex = ex_1;
                exportmodule_1 = ex_1;
            }
        ],
        execute: function () {
            // Common JS syntax
            commonJs = new ex.exClass(1, "Common JS");
            console.log(commonJs.display());
            // ES6 syntax
            es6 = new exportmodule_1.exClass(1, "ES6");
            console.log(es6.display());
        }
    };
});
//# sourceMappingURL=importmodule.js.map