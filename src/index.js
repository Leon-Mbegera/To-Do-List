import Project, { showProjects, projectExists, getProjectsFromLocalStorage } from './project.js';

export const todoSection = document.getElementById('project-todos');
export const projectTodos = document.getElementById('todo-creation-form');

const addProjectToLocalStorage = (newProject) => {
  const allProjects = getProjectsFromLocalStorage();
  allProjects.push(newProject);
  localStorage.setItem('allProjects', JSON.stringify(allProjects));
};

const form = document.getElementById('input-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectName = document.getElementById('title').value;
  if (projectExists(projectName)) {
    alert('Project name already taken!');
  } else {
    const newProject = new Project(projectName);
    addProjectToLocalStorage(newProject);
    showProjects();
  }
});

const localStorageOnLoad = () => {
  showProjects();
};

document.addEventListener('DOMContentLoaded', localStorageOnLoad);
