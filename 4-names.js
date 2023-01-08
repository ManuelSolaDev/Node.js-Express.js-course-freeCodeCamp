//CommonJS, every file is a module (by default) (node uses commonjs library under the hood)
//Modules (ES6) - Encapsulated Code (only share minimum)

//local (no one who requires this module have access to secret)
const secret = "SUPER SECRET";
//shared
const peter = "peter";
const john = "john";

//console.log(module); //see exports
module.exports = { peter, john };
//console.log(module); //see exports
