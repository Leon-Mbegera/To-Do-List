import { Project, Todo }  from './classes.js'

const allProjects = [];

// Loop thru each project and display it.
showProjects();

const showProjects = () => {
  allProjects.forEach((project, idx) => {
    const newProjectCard = projectCard(project, idx);
    const projectSection = document.getElementById('all-projects');
    projectSection.append(newProjectCard);
    const currentProject = newProjectCard
  });
}


// function to create a project card
const projectCard = (project, idx) => {
  const projectDiv = document.createElement('div');
  projectDiv.dataset.index = idx;
  projectDiv.addEventListener('click', onProjectClick);
}

const onProjectClick = (e) => {
  const projectDiv = e.target;
  const index = Number(projectDiv.dataset.index);
  const clickedProject = allProjects[index];

  if (currentProject !== clickedProject) {
    currentProject = clickedProject;
    todoSection = document.getElementById('project-todos');
    todoSection.innerHTML = '';
    currentProject.todos.forEach((todo) => {
      const todoCard = new Todo(title, description, priority, dueDate);
      todoCard.append(todoSection);

    });
  }
}

// Add an event listener for project creation and push it into all projects
const form = document.getElementById('input-form');
form.addEventListener('submit', (e)=> {
  e.preventDefault();
  const newProject = new Project(title);
  allProjects.push(newProject);
});

let currentProject;
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

  const todoSubmit = document.createElement('input');
  todoSubmit.setAttribute('type', 'submit');
  todoSubmit.className = 'todo-form-submit';

  todoForm.append(todoTitle, todoDesc, todoDueDate, todoPriority, todoSubmit);
  const projectTodos = document.querySelector('#project-todos');
  projectTodos.append(todoForm);

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = new Todo(title, description, priority, dueDate);
    currentProject.addTodo(newTodo);
  });
  return todoForm
};

const showProjectTodos = () => {
 
  const todoCard = document.createElement('div');
  todoCard.className = 'todo-card';

  const todoTitleProperty = document.createElement('h4');
  todoTitleProperty.textContent = todo.title;

  const todoDescProperty = document.createElement('p');
  todoDesc.textContent = todo.description;

  const todoDueDateProperty = document.createElement('p');
  todoDueDateProperty.textContent = todo.dueDate;

  const todoPriorityProperty = document.createElement('p');
  todoPriorityProperty.textContent = `${todo.priority}`;
};

