const cloneArray = require('./cloneArray')

test('properly clones array', () => {
  const array = [1, 2, 3, 4]
  expect(cloneArray(array)).toEqual(array)
})

test('properly clones array', () => {
  const array = [1, 2, 3, 4]
  expect(cloneArray(array)).not.toBe(array)
})