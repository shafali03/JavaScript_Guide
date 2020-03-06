const sum = require('./sum') // importing 

test("property adds two test", () => {
  expect(sum(1, 2)).toBe(3)
})