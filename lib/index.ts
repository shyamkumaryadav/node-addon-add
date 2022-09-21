const addon = require("../build/Release/main_binding");

/**
 * This will return a+b.
 * @param {number} a - first number for add
 * @param {number} b - second number for add
 * @returns {number} will return sum of `a+b`
 */
const Add: (a: number, b: number) => number = addon.Add;

export { Add };
