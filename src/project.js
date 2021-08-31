import { todoSection, currentPrj, getProjectsFromLocalStorage } from './dependency.js';
import { modifyTodo, newTodoCreationForm, showTodos } from './todo.js';

export default class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  addTodo = (todo) => {
    this.todos.push(todo);
  }
}

const onProjectClick = (e, newTodoCreationForm) => {
  const projectDiv = e.target;
  const index = Number(projectDiv.dataset.index);
  const allProjects = getProjectsFromLocalStorage();
  currentPrj.current = allProjects[index];
  todoSection.innerHTML = '';
  showTodos(currentPrj, newTodoCreationForm, modifyTodo);
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
  const allProjects = getProjectsFromLocalStorage();
  projectSection.innerHTML = '';
  allProjects.forEach((project, idx) => {
    const newProjectCard = projectCard(project, idx);
    projectSection.append(newProjectCard);
  });
};

showProjects();

export const projectExists = (projectName) => {
  const allProjects = getProjectsFromLocalStorage();
  return allProjects.find((project) => project.title === projectName);
};
