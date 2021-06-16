const { expect } = require('@jest/globals'); // auto import
const subtract = require('./subract');

test('20 - 5 should be equal to 15', () => {
    expect(subtract(20, 5)).toBe(15);
});
