const filterArray = require('./filterArray');

describe('filterArray function', () => {
    test('Input: null; Output: null', () => {
        const result = filterArray(null);
        expect(result).toBeNull();
    });

    test('Input: [1, 2, 3, 4]; Output: [1, 2, 3, 4]', () => {
        const input = [1, 2, 3, 4];
        const expectedOutput = [1, 2, 3, 4];
        const result = filterArray(input);
        expect(result).toEqual(expectedOutput);
    });

    test('Input: [50, 75, 100, 125]; Output: [50, 75, 100, 100]', () => {
        const input = [50, 75, 100, 125];
        const expectedOutput = [50, 75, 100, 100];
        const result = filterArray(input);
        expect(result).toEqual(expectedOutput);
    });
});
