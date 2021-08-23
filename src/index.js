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
  projectDiv.textContent = project.title;
  projectDiv.dataset.index = idx;
  projectDiv.addEventListener('click', onProjectClick);
  return projectDiv;
}

const onProjectClick = (e) => {
  const projectDiv = e.target;
  const index = Number(projectDiv.dataset.index);
  const clickedProject = allProjects[index];

  if (currentProject !== clickedProject) {
    currentProject = clickedProject;
    const todoSection = document.getElementById('project-todos');
    todoSection.innerHTML = '';
    currentProject.todos.forEach((todo) => {
      const todoCard = new Todo(title, description, priority, dueDate);
      todoCard.innerHTML = (todo.title, todo.description, todo.priority, todo.dueDate);
      todoSection.append(todoCard);
      return todoCard;
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
  showProjects();
});



const todoDisplay = () => {
 
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


// new todo creation form

const newTodoCreationForm = (project) => {

  const newTodoForm = document.createElement('form');
  const todoTitle  = document.createElement('input');
  todoTitle.setAttribute('type', 'text');
  todoTitle.setAttribute('placeholder', 'todo title');
  todoTitle.className = 'todo-title';

  const todoDesc = document.createElement('input');
  todoDesc.setAttribute('type', 'text');
  todoDesc.setAttribute('placeholder', 'some description..');
  todoDesc.className = 'todo-desc';

  const todoDueDate = document.createElement('input');
  todoDueDate.setAttribute('type', 'date');
  todoDueDate.setAttribute('placeholder', 'due date');
  todoDueDate.className = 'todo-priority';

  const todoPriority = document.createElement('select');
  todoPriority.setAttribute('id', 'priority');
  todoPriority.className = 'todo-dueDate';

  const todoPriorities = ['Very high', 'High', 'Moderate', 'Low', 'Useless'];
  const options = todoPriorities.map((priority) => {
    const value = priority.toLowerCase();
    return `<option value="${value}">${priority}</option>`;
  });
  todoPriority.innerHTML = 'options';

  const todoSubmit = document.createElement('input');
  todoSubmit.setAttribute('type', 'submit');
  todoSubmit.className = 'todo-form-submit';

  newTodoForm.append(todoTitle, todoDesc, todoDueDate, todoPriority, todoSubmit);
  const projectTodos = document.querySelector('#project-todos');
  projectTodos.append(newTodoForm);

  newTodoForm.addEventListener('submit', (e, project) => {
    e.preventDefault();
    const title = document.querySelector('.todo-title').value;
    const description = document.querySelector('.todo-desc').value;
    const priority = document.querySelector('.todo-priority'.value);
    const dueDate = document.querySelector('.todo-dueDate'.value);
    const newTodoValues = new Todo(title, description, priority, dueDate);
    project.addTodo(newTodoValues);
  });
  return newTodoForm;
};
