//CommonJS, every file is a module (by default) (node uses commonjs library under the hood)
//Modules (ES6) - Encapsulated Code (only share minimum)

const names = require("./4-names");
const { john, peter } = require("./4-names");
const data = require("./6-alternative-flavour");
console.log(data);
const sayHiTo = require("./5-utils");
sayHiTo(john);

require("./7-mind-grenade"); //the code is executed, it is invoked so it is printed
