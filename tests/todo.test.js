import Todo from '../src/todo.js';

describe('Tests on todos class', () => {
  const newTodo = new Todo('name', 'description', 'High', '7/7/1999');

  test('a newly created todo task', () => {
    const todos = [];
    todos.push(newTodo);
    expect(todos[0]).toBe(newTodo);
  });

  test('a newly created todo task with all required attributes', () => {
    expect(newTodo).toBeTruthy();
  });

  test('a newly created todo task without all required attributes', () => {
    const newTodo = new Todo('', '', 'Low', '5/7/1996');
    expect(newTodo.title).toBeFalsy();
    expect(newTodo.description).toBeFalsy();
  });
});

describe('todos array containing', () => {
    const todos = [
      ['name-one', 'description', 'High', '5/7/1999'],
      ['name-two', 'description', 'Moderate', '7/7/1999'],
    ];

    it('matches even if original todos array contains additional tasks', () => {
      expect([
        ['name-one', 'description', 'High', '5/7/1999'],
        ['name-two', 'description', 'Moderate', '7/7/1999'],
        ['name-three', 'description', 'Low', '21/9/1999'],
      ]).toEqual(expect.arrayContaining(todos));
    });

    it('does not match if original todos array does not contain that new task', () => {
      expect([
        ['name-two', 'description', 'Moderate', '7/7/1999'],
        ['name-three', 'description', 'Low', '21/9/1999'],
      ]).not.toEqual(expect.arrayContaining(todos));
    });
});