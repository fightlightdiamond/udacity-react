const getUserById = require('./getUserById');

describe('getUserById function', () => {
    // Test case khi ID người dùng hợp lệ => resolve dữ liệu người dùng
    test('resolves user data when ID exists', async () => {
        await expect(getUserById(1)).resolves.toEqual({
            id: 1,
            firstName: 'Kevin',
            lastName: 'Chung'
        });
        await expect(getUserById(5)).resolves.toEqual({
            id: 5,
            firstName: 'Ali',
            lastName: 'Ahmed'
        });
    });

    // Test case khi ID người dùng không tồn tại => reject với thông báo lỗi
    test('rejects with error message when ID does not exist', async () => {
        await expect(getUserById(6)).rejects.toBe('User with ID 6 not found.');
        await expect(getUserById(999)).rejects.toBe('User with ID 999 not found.');
    });
});
