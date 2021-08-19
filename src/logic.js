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

// Loop thru each project and display it.
allProjects.forEach((project, idx) => {
  const newProjectCard = projectCard(project, idx);
  const projectSection = document.getElementByClassName('all-projects');
  projectSection.append(newProjectCard);
});


// function to create a project card
const projectCard = (project, idx) => {
  const div = document.createElement('div');
  div.dataset.index = idx;
  div.addEventListener('click', onProjectClick);
}


// Add an event listener for project creation and push it into all projects
const form = getElementByClassName('form-input');
form.addEventListener('submit', ()=> {
  e.preventDefault();
  const newProject = new Project(title);
  allProjects.push(newProject);

});


// Build a todo 
const createTodo = () => {
  const todoForm = document.createElement('form');
  const todoTitle  = document.createElement('input');
  todoTitle.setAttribute('type', 'text');
  todoTitle.setAttribute('placeholder', 'todo title');
  todoTitle.className = 'todo-form-input';

  const todoDesc = document.createElement('input');
  todoDesc.setAttribute('type', 'text');
  todoDesc.setAttribute('placeholder', 'some description..');
  todoDesc.className = 'todo-form-input';

  const todoDueDate = document.createElement('input');
  todoDueDate.setAttribute('type', 'date');
  todoDueDate.setAttribute('placeholder', 'due date');
  todoDueDate.className = 'todo-form-input';

  const todoPriority = document.createElement('input');
  todoPriority.setAttribute('type', 'select');
  todoPriority.className = 'todo-form-input';
  todoPriorities = ['Very high', 'High', 'Moderate', 'Low', 'Useless'];

  const options = todoPriorities.map((priority) => {
    const value = priority.toLowerCase();
    return `<option value="${value}">${priority}</option>`;
  });
  todoPriority.innerHTML = 'options';
};





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


