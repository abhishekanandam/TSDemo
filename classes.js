function sample() {
    this.todo = [];
}
sample.prototype.getAll = function () {
    return "prototype";
};
var sampleService = new sample();
console.log(sampleService.getAll());
var Parent = /** @class */ (function () {
    function Parent(todo) {
        this.todo = todo;
        this.todo = [];
    }
    Parent.prototype.getAll = function () {
    };
    return Parent;
}());
//# sourceMappingURL=classes.js.map