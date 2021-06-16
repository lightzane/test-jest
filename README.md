# Test Jest

A small project for practicing [Jest](https://jestjs.io/).

```
npm install jest --save-dev
```

**package.json**

```json
"scripts": {
    "test": "jest",
    "test:cov": "jest --coverage",
    "test:watch": "jest --watch",
    "test:spec": "jest src/sum.test.js --coverage"
},
```

**sum.js**

```js
function sum(x, y) {
    return x + y;
}
module.exports = sum;
```

**sum.test.js**

```js
const sum = require('./sum');

test('20 + 5 should be equal to 25', () => {
    expect(sum(20, 5)).toBe(25);
});
```

## References

-   https://www.youtube.com/watch?v=FgnxcUQ5vho
