const multiplyTest = require('./multiply')
const throwAnError = require("./t");

test('multiply 2 numbers', () => {
    expect(multiplyTest(2, 3)).toBe(6);
});

describe('multiply', () => {
    test('will return the product of both number passed', () => {
       expect(multiplyTest(3, 3)).toEqual(9);
    });
});

test('exception', () => {
    expect(() => throwAnError('abc')).toThrow();
});