export class Project {

  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  addTodo = (todo) => {
    todos.push(todo);
  }

  getTodo = (todoTitle) => {
    let myTodo;
    todos.forEach((todo) => {
      if (todo.getTitle() === todoTitle) {
        myTodo = todo;
      }
    });
    return myTodo;
  }

  deleteTodo = (todoTitle) => {
    todos.forEach((todo, idx) => {
      if (todo.getTitle() === todoTitle) {
        todos.splice(idx, 1);
      }
    });
  }
}

export class Todo {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }

  assignPriority = (givenPriority) => {
    priority = givenPriority
  }
}
