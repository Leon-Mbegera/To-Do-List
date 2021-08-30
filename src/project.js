import { todoSection } from './index.js';
import { newTodoCreationForm, showTodos } from './todo.js';

export default class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  addTodo = (todo) => {
    this.todos.push(todo);
  }
}

export let allProjects = [new Project('default')];
export let currentPrj = allProjects[0];

export const getProjectsFromLocalStorage = () => {
  const localStorageProjects = localStorage.getItem('allProjects');
  if (localStorageProjects === null) {
    allProjects = [new Project('default')];
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
  } else {
    allProjects = JSON.parse(localStorageProjects);
  }
  return allProjects;
};

const onProjectClick = (e, newTodoCreationForm) => {
  const projectDiv = e.target;
  const index = Number(projectDiv.dataset.index);
  allProjects = getProjectsFromLocalStorage();
  currentPrj = allProjects[index];
  todoSection.innerHTML = '';
  showTodos(currentPrj, newTodoCreationForm);
  newTodoCreationForm(showTodos);
  return projectDiv;
};

const projectCard = (project, idx) => {
  const projectDiv = document.createElement('a');
  projectDiv.id = 'project-div';
  projectDiv.textContent = project.title;
  projectDiv.dataset.index = idx;
  projectDiv.addEventListener('click', (e) => {
    onProjectClick(e, newTodoCreationForm);
  });
  return projectDiv;
};

export const showProjects = () => {
  const projectSection = document.getElementById('all-projects');
  const projectsFromLocalStorage = getProjectsFromLocalStorage();
  allProjects.push(projectsFromLocalStorage);
  projectSection.innerHTML = '';
  allProjects.forEach((project, idx) => {
    const newProjectCard = projectCard(project, idx);
    projectSection.append(newProjectCard);
  });
};

showProjects();

export const projectExists = (projectName) => {
  allProjects = getProjectsFromLocalStorage();
  return allProjects.find((project) => project.title === projectName);
};
