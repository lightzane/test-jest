// https://jestjs.io/docs/asynchronous

function fetchData(callback) {
    const data = 'caramel sundae';
    if (callback) callback(data);
    else
        return new Promise((resolve, reject) => {
            resolve(data);
        });
}

describe('testing group test with describe()', () => {
    /**
     * Callbacks#
     * The most common asynchronous pattern is callbacks.
     *
     * For example, let's say that you have a fetchData(callback) function
     * that fetches some data and calls callback(data) when it is complete.
     * You want to test that this returned data is the string 'caramel sundae'.
     *
     * By default, Jest tests complete once they reach the end of their execution.
     * That means this test will not work as intended:
     */

    // Don't do this!
    test('test-one: the data is caramel sundae', () => {
        function callback(data) {
            expect(data).toBe('caramel sundae');
        }

        fetchData(callback);
    });

    /**
     * The problem is that the test will complete as soon as fetchData completes,
     * before ever calling the callback.
     *
     * There is an alternate form of test that fixes this.
     * Instead of putting the test in a function with an empty argument,
     * use a single argument called done.
     *
     * Jest will wait until the done callback is called before finishing the test.
     */

    test('test-two: the data is caramel sundae', (done) => {
        function callback(data) {
            try {
                expect(data).toBe('caramel sundae');
                done();
            } catch (error) {
                done(error);
            }
        }

        fetchData(callback);
    });

    /**
     * Promises#
     * If your code uses promises, there is a more straightforward way to
     * handle asynchronous tests.
     *
     * Return a promise from your test, and Jest will wait for that promise to resolve.
     * If the promise is rejected, the test will automatically fail.
     *
     * For example, let's say that fetchData, instead of using a callback,
     * returns a promise that is supposed to resolve to the string 'caramel sundae'.
     *
     * We could test it with:
     */
    test('test-three: the data is caramel sundae', () => {
        return fetchData().then((data) => {
            expect(data).toBe('caramel sundae');
        });
        /**
         * Be sure to return the promise - if you omit this return statement,
         * your test will complete before the promise returned from fetchData resolves and
         * then() has a chance to execute the callback.
         */
    });
});
