const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...')

const nameCheck = () => console.log('Checking Name...')

describe('Checking Names', () => {
  beforeEach(() => nameCheck());


  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff')
  })

  test('User is Tom', () => {
    const user = 'Tom';
    expect(user).toBe('Tom')
  })
});


test('adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
})



test('should be null', () => {
  expect(functions.isNull()).toBeNull();
})

test('should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be S M object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'S',
    lastName: 'M'
  });
});

test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600)
})


test('There is no I in team',() => {
  expect('team').not.toMatch(/I/);
})

test('should be a username', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin')
}) 


// working with async data
// Promise
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
  .then(data => {
    expect(data.name).toEqual('Leanne Graham');
  })
})

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
})