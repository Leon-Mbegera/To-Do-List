import { Project, Todo }  from './classes.js'

const allProjects = [ new Project('default')];
let currentProject = allProjects[0];
const todoSection = document.getElementById('project-todos');
const projectTodos = document.getElementById('todo-creation-form');

// Loop thru each project and display it


const showProjects = () => {
  const projectSection = document.getElementById('all-projects');
  projectSection.innerHTML = '';
  allProjects.forEach((project, idx) => {
    const newProjectCard = projectCard(project, idx);
    projectSection.append(newProjectCard);
  });
}

// function to create a project card

const projectExists = (projectName) => {
  return allProjects.find((project) => project.title === projectName);
}

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
    todoSection.innerHTML = '';
      showTodos(currentProject);
      newTodoCreationForm(currentProject);
  }
  return projectDiv;
}
showProjects();

// Add an event listener for project creation and push it into all projects
const form = document.getElementById('input-form');
form.addEventListener('submit', (e)=> {
  e.preventDefault();
  const projectName = title.value;
  if(projectExists(projectName)) {
    alert('Project name already taken!');
  } else {
  const newProject = new Project(projectName);
  allProjects.push(newProject);
  showProjects();
  }
});

const projectDltBtn = document.createElement('button');
projectDltBtn.innerText = 'delete';
projectDltBtn.id = 'project-dlt-btn';
projectDltBtn.addEventListener('click', () => {
  projectIdx = allProjects.indexOf(currentProject);
  allProjects.splice(projectIdx, 1);
  showProjects();
});



const showTodos = (currentProject) => {
todoSection.innerHTML = '';
currentProject.todos.forEach((todo) => {
  
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

  const modifyTodoBtn = document.createElement('button');
  modifyTodoBtn.innerHTML = 'Edit';
  modifyTodoBtn.className = 'update-todo-btn';
  modifyTodoBtn.addEventListener('click', () => {
    const newTodoForm = document.getElementById('new-todo-creation-form');
    newTodoForm.remove();
    modifyTodo(todo)
  });

  const deleteTodoBtn = document.createElement('button');
  deleteTodoBtn.innerText = 'delete';
  deleteTodoBtn.id = 'todo-dlt-btn';
  deleteTodoBtn.addEventListener('click', () => {
    const todoIdx = currentProject.todos.indexOf(todo);
    currentProject.todos.splice(todoIdx, 1);
    todoSection.innerHTML = '';
    showTodos(currentProject);
  });

  todoCard.append(todoTitleProperty, todoDescProperty, todoPriorityProperty, todoDueDateProperty, modifyTodoBtn, deleteTodoBtn);
  todoSection.append(todoCard);
});
}

// new todo creation form

const newTodoCreationForm = () => {

  const newTodoForm = document.createElement('form');
  newTodoForm.id = 'new-todo-creation-form';
  const todoTitle  = document.createElement('input');
  todoTitle.setAttribute('type', 'text');
  todoTitle.setAttribute('placeholder', 'todo title');
  todoTitle.id = 'todo-title';

  const todoDesc = document.createElement('input');
  todoDesc.setAttribute('type', 'text');
  todoDesc.setAttribute('placeholder', 'some description..');
  todoDesc.id = 'todo-desc';

  const todoDueDate = document.createElement('input');
  todoDueDate.setAttribute('type', 'date');
  todoDueDate.setAttribute('placeholder', 'due date');
  todoDueDate.id = 'todo-priority';

  const todoPriority = document.createElement('select');
  todoPriority.setAttribute('id', 'priority');
  todoPriority.id = 'todo-dueDate';

  const todoPriorities = ['Very high', 'High', 'Moderate', 'Low', 'Useless'];
  const options = todoPriorities.map((priority) => {
    const value = priority.toLowerCase();
    return `<option value="${value}">${priority}</option>`;
  });
  todoPriority.innerHTML = options;

  const todoSubmit = document.createElement('input');
  todoSubmit.setAttribute('type', 'submit');
  todoSubmit.id = 'todo-form-submit';

  newTodoForm.append(todoTitle, todoDesc, todoDueDate, todoPriority, todoSubmit);
  projectTodos.innerHTML = '';
  projectTodos.append(newTodoForm);

  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('todo-title').value; 
    const description = document.getElementById('todo-desc').value;
    const priority = document.getElementById('todo-priority').value;
    const dueDate = document.getElementById('todo-dueDate').value;
    const newTodoValues = new Todo(title, description, priority, dueDate);
    currentProject.addTodo(newTodoValues);
    showTodos(currentProject);
  });
  return newTodoForm;
};

const modifyTodo = (todo) => {

  const modifyTodoForm = document.createElement('form');
  const todoTitle  = document.createElement('input');
  todoTitle.setAttribute('type', 'text');
  todoTitle.setAttribute('placeholder', 'todo title');
  todoTitle.id = 'todo-title-modify';

  const todoDesc = document.createElement('input');
  todoDesc.setAttribute('type', 'text');
  todoDesc.setAttribute('placeholder', 'some description..');
  todoDesc.id = 'todo-desc-modify';

  const todoDueDate = document.createElement('input');
  todoDueDate.setAttribute('type', 'date');
  todoDueDate.setAttribute('placeholder', 'due date');
  todoDueDate.id = 'todo-priority-modify';

  const todoPriority = document.createElement('select');
  todoPriority.setAttribute('id', 'priority');
  todoPriority.id = 'todo-dueDate-modify';

  const todoPriorities = ['Very high', 'High', 'Moderate', 'Low', 'Useless'];
  const options = todoPriorities.map((priority) => {
    const value = priority.toLowerCase();
    return `<option value="${value}">${priority}</option>`;
  });
  todoPriority.innerHTML = options;

  const todoSubmit = document.createElement('input');
  todoSubmit.value = 'Edit';
  todoSubmit.setAttribute('type', 'submit');
  todoSubmit.id = 'todo-form-submit-modify';

  modifyTodoForm.append(todoTitle, todoDesc, todoDueDate, todoPriority, todoSubmit);
  projectTodos.append(modifyTodoForm);

  modifyTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(todo);
    todo.title = document.getElementById('todo-title-modify').value; 
    todo.description = document.getElementById('todo-desc-modify').value;
    todo.priority = document.getElementById('todo-priority-modify').value;
    todo.dueDate = document.getElementById('todo-dueDate-modify').value;
    const todoSubmit = document.getElementById('todo-form-submit-modify');
    todoSubmit.value = 'Submit';
    showTodos(currentProject);
  });
  return modifyTodoForm;
}
