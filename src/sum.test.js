const { expect } = require('@jest/globals'); // auto import
const sum = require('./sum');

test('20 + 5 should be equal to 25', () => {
    expect(sum(20, 5)).toBe(25);
});
