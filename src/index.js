import { Project, Todo }  from './classes.js'

const allProjects = [ new Project('default')];
let currentProject = allProjects[0];

// Loop thru each project and display it


const showProjects = () => {
  const projectSection = document.getElementById('all-projects');
  projectSection.innerHTML = '';
  allProjects.forEach((project, idx) => {
    const newProjectCard = projectCard(project, idx);
    console.log(newProjectCard, 'newdp;askd');
    projectSection.append(newProjectCard);
  });
}


// function to create a project card
const projectCard = (project, idx) => {
  const projectDiv = document.createElement('div');
  projectDiv.style.margin = '0.5rem';
  projectDiv.textContent = project.title;
  projectDiv.dataset.index = idx;
  projectDiv.addEventListener('click', onProjectClick);
  return projectDiv;
}

const onProjectClick = (e) => {
  const projectDiv = e.target;
  const index = Number(projectDiv.dataset.index);
  const clickedProject = allProjects[index];

  console.log(clickedProject)
  if (currentProject !== clickedProject) {
    currentProject = clickedProject;
    const todoSection = document.getElementById('project-todos');
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
  const projectName = title.value;
  const newProject = new Project(projectName);
  allProjects.push(newProject);
  console.log(allProjects, 'asdfa')
  showProjects();
});


// Todo creation form

const todoCreationForm = () => {
 
  const todoCard = document.createElement('div');
  todoCard.className = 'todo-card';

  const todoTitleProperty = document.createElement('h4');
  todoTitleProperty.textContent = todo.title;
  todoTitleProperty.className = 'todo-title';

  const todoDescProperty = document.createElement('p');
  todoDescProperty.textContent = todo.description;
  todoDescProperty.className = 'todo-desc';

  const todoDueDateProperty = document.createElement('p');
  todoDueDateProperty.textContent = todo.dueDate;
  todoDueDateProperty.className = 'todo-dueDate';

  const todoPriorityProperty = document.createElement('p');
  todoPriorityProperty.textContent = `${todo.priority}`;
  todoPriorityProperty.className = 'todo-priority';

  const updateTodo = document.createElement('button');
  updateTodo.innerHTML = 'change';
  updateTodo.className = 'update-todo-btn';
  updateTodo.addEventListener('click', () => {
    modifyTodo(todo, project)
  });

  todoCard.append(todoTitleProperty, todoDescProperty, todoPriorityProperty, todoDueDateProperty, updateTodo);
  return todoCard;
}

// Build a todo 
const createTodo = (project) => {
  const title = document.querySelector('.todo-title').value;
  const description = document.querySelector('.todo-desc').value;
  const priority = document.querySelector('.todo-priority'.value);
  const dueDate = document.querySelector('.todo-dueDate'.value);
  const todoObjects = new Todo(title, description, priority, dueDate);
  project.addTodo(todoObjects);

}


// update a todo
const modifyTodo = (todo, project) => {
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

