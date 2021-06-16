const { expect } = require('@jest/globals');
const cloneArray = require('./cloneArray');

test('should properly clone array', () => {
    const arr = [1, 2, 3];
    expect(cloneArray(arr)).toEqual(arr); // should have still same value
    expect(cloneArray(arr)).not.toBe(arr); // should be different because it's a clone!
});
