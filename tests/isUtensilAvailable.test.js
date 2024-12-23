const isUtensilAvailable = require('./isUtensilAvailable');

describe('isUtensilAvailable function', () => {
    // Test khi utensil có trong mảng => resolve(true)
    test('resolves true when utensil is available', async () => {
        await expect(isUtensilAvailable('fork')).resolves.toBe(true);
        await expect(isUtensilAvailable('knife')).resolves.toBe(true);
        await expect(isUtensilAvailable('spoon')).resolves.toBe(true);
    });

    // Test khi utensil không có trong mảng => reject
    test('rejects with error message when utensil is not found', async () => {
        await expect(isUtensilAvailable('plate')).rejects.toBe('No utensils found.');
        await expect(isUtensilAvailable('cup')).rejects.toBe('No utensils found.');
    });
});
