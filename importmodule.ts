// CommonJS syntax
import ex = require('./exportmodule');

// ES6 syntax
import { exClass } from './exportmodule';


// Common JS syntax
let commonJs = new ex.exClass(1, "Common JS");
console.log(commonJs.display());


// ES6 syntax
let es6  = new exClass(1, "ES6");
console.log(es6.display());