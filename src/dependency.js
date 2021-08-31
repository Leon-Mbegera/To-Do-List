export const todoSection = document.getElementById('project-todos');
export const projectTodos = document.getElementById('todo-creation-form');

// export const allProjects = [];

export const getProjectsFromLocalStorage = () => {
  let allProjects = [];
  const localStorageProjects = localStorage.getItem('allProjects');
  if (localStorageProjects === null) {
    const defaultProject = {
      title: 'default',
      todos: [],
      addTodo(todo) {
        this.todos.push(todo);
      },
    };
    allProjects.push(defaultProject);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
  } else {
    allProjects = JSON.parse(localStorageProjects);
  }
  return allProjects;
};
export const currentPrj = { current: getProjectsFromLocalStorage()[0] };