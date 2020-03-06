const reverseString = require('./reverseString')

test('reverse string function exists', () => {
  expect(reverseString).toBeDefined();
})

test('String reverse', () => {
  expect(reverseString('Hello')).toEqual('olleh')
})