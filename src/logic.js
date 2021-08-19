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

const allProjects = [];

allProjects.forEach((project, idx) => {
  const newProjectCard = projectCard(project, idx);
  const projectSection = document.getElementByClassName('all-projects');
  projectSection.append(newProjectCard);
});



const projectCard = (project, idx) => {
  const div = document.createElement('div');
  div.dataset.index = idx;
  div.addEventListener('click', onProjectClick);
}

class Todo {

  constructor(title, description, priority, dueDate, completion = 'pending') {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completion = completion;
  }

  assignPriority = (givenPriority) => {
    priority = givenPriority
  }
}


