class Project {

  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  addTodo = (todo) => {
    todos.push(todo);
  }

  getTodo = (todoTitle) => {
    const myTodo;
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

class Todo {

  constructor(title, description, priority, dueDate, completion = false) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }

  


}


