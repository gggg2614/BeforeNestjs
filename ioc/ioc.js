var A = /** @class */ (function () {
    function A(name) {
        this.name = name;
    }
    return A;
}());
//高耦合
// class B {
//     a: any
//     constructor() {
//         this.a = new A().name
//     }
// }
// class C {
//     a: any
//     constructor() {
//         this.a = new A().name
//     }
// }
//低耦合
var C = /** @class */ (function () {
    function C(name) {
        this.name = name;
    }
    return C;
}());
var Container = /** @class */ (function () {
    function Container() {
        this.mo = {};
    }
    Container.prototype.provide = function (key, mo) {
        this.mo[key] = mo;
    };
    Container.prototype.get = function (key) {
        return this.mo[key];
    };
    return Container;
}());
var mo = new Container();
mo.provide('a', new A('123'));
mo.provide('C', new A('123'));
console.log(mo);
var B = /** @class */ (function () {
    function B(mo) {
        this.a = mo.get('a');
        this.c = mo.get('c');
    }
    return B;
}());
