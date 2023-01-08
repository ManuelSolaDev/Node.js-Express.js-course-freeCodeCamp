const { readFileSync, writeFileSync, write } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

writeFileSync(
  //this can taka a lot of time and blocks node, which is a big deal
  "./content/result-sync.txt",
  `Here is the result ${first}, ${second}`,
  { flag: "a" } //append
);
console.log("done with this task");
console.log("startign new task");
