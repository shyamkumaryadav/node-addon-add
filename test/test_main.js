const add = require("../dist").Add;
const assert = require("assert");

assert(add, "The expected function is undefined");

function testAdd() {
  const result = add(1, 1);
  assert.strictEqual(result, 2, "Unexpected value returned");
}

assert.doesNotThrow(testAdd, undefined, "testAdd threw an expectation");

console.log("Tests passed- everything looks OK!");
