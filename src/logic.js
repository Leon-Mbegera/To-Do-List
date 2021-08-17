function createProject(projectTitle) {

  const title = projectTitle;
  const todos = [];

  const getTitle = () => {
    return title;
  }

  
  const addTodo = (todo) => {
    todos.push(todo);
  }

  const deleteTodo = (todoTitle) => {
    todos.forEach((todo, idx) => {
      if (todo.getTitle() === todoTitle) {
        todos.splice(idx, 1);
      }
    });
  }

}  