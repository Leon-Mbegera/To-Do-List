/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  addTodo = (todo) => {
    this.todos.push(todo);
  }

  getTodo = (todoTitle) => {
    let myTodo;
    this.todos.forEach((todo) => {
      if (todo.Title() === todoTitle) {
        myTodo = todo;
      }
    });
    return myTodo;
  }
}


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



let allProjects = [new _project_js__WEBPACK_IMPORTED_MODULE_0__.default('default')];
let currentProject = allProjects[0];
const todoSection = document.getElementById('project-todos');
const projectTodos = document.getElementById('todo-creation-form');

// Loop thru each project and display it
const getProjectsFromLocalStorage = () => {
  const localStorageProjects = localStorage.getItem('allProjects');
  if (localStorageProjects === null) {
    allProjects = [new _project_js__WEBPACK_IMPORTED_MODULE_0__.default('default')];
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
  } else {
    allProjects = JSON.parse(localStorageProjects);
  }
  return allProjects;
};

const modifyTodo = (todo, showTodos, newTodoCreationForm) => {
  const modifyTodoForm = document.createElement('form');
  modifyTodoForm.id = 'modify-todo-form';
  const todoTitle = document.createElement('input');
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
  todoSubmit.value = 'Update Todo';
  todoSubmit.setAttribute('type', 'submit');
  todoSubmit.id = 'todo-form-submit-modify';

  modifyTodoForm.append(todoTitle, todoDesc, todoDueDate, todoPriority, todoSubmit);
  projectTodos.append(modifyTodoForm);

  modifyTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    allProjects = getProjectsFromLocalStorage();
    const currentProjectIdx = allProjects.findIndex((project) => {
      return project.title === currentProject.title
    });
    const currentTodoIdx = allProjects[currentProjectIdx].todos.findIndex((eachTodo) => {
      return eachTodo.title === todo.title
      });
    const currentTodo = allProjects[currentProjectIdx].todos[currentTodoIdx];
    currentTodo.title = document.getElementById('todo-title-modify').value;
    currentTodo.description = document.getElementById('todo-desc-modify').value;
    currentTodo.priority = document.getElementById('todo-priority-modify').value;
    currentTodo.dueDate = document.getElementById('todo-dueDate-modify').value;
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    showTodos(currentProject);
    const modifyTodoForm = document.getElementById('modify-todo-form');
    modifyTodoForm.remove();
    newTodoCreationForm();
  });
  return modifyTodoForm;
};

const showTodos = (currentProject) => {
  todoSection.innerHTML = '';
  allProjects = getProjectsFromLocalStorage();
  const currentProjectIdx = allProjects.findIndex((project) => {
    return project.title === currentProject.title
  });
  currentProject = allProjects[currentProjectIdx];

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
      modifyTodo(todo, showTodos, newTodoCreationForm);
    });

    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.innerText = 'delete';
    deleteTodoBtn.id = 'todo-dlt-btn';
    deleteTodoBtn.addEventListener('click', () => {
      const currentTodoIdx = currentProject.todos.findIndex((eachTodo) => eachTodo.title === todo.title);
      currentProject.todos.splice(currentTodoIdx, 1);
      localStorage.setItem('allProjects', JSON.stringify(allProjects));
      showTodos(currentProject);
    });

    todoCard.append(todoTitleProperty, todoDescProperty, todoPriorityProperty, todoDueDateProperty, modifyTodoBtn, deleteTodoBtn);
    todoSection.append(todoCard);
  });
};

const onProjectClick = (e, newTodoCreationForm) => {
  const projectDiv = e.target;
  const index = Number(projectDiv.dataset.index);
  allProjects = getProjectsFromLocalStorage();
  currentProject = allProjects[index];
  todoSection.innerHTML = '';
  showTodos(currentProject);
  newTodoCreationForm(showTodos);
  return projectDiv;
};

const projectCard = (project, idx) => {
  const projectDiv = document.createElement('a');
  projectDiv.id = 'project-div';
  projectDiv.textContent = project.title;
  projectDiv.dataset.index = idx;
  projectDiv.addEventListener('click', (e)=> {
    onProjectClick(e, newTodoCreationForm)
  });
  return projectDiv;
};

const showProjects = () => {
  const projectSection = document.getElementById('all-projects');
  const projectsFromLocalStorage = getProjectsFromLocalStorage();
  allProjects.push(projectsFromLocalStorage);
  projectSection.innerHTML = '';
  allProjects.forEach((project, idx) => {
    const newProjectCard = projectCard(project, idx);
    projectSection.append(newProjectCard);
  });
};

// function to create a project card

const projectExists = (projectName) => {
  allProjects = getProjectsFromLocalStorage();
  return allProjects.find((project) => project.title === projectName);
};

showProjects();

const addProjectToLocalStorage = (newProject) => {
  const allProjects = getProjectsFromLocalStorage();
  allProjects.push(newProject);
  localStorage.setItem('allProjects', JSON.stringify(allProjects));
};

// Add an event listener for project creation and push it into all projects
const form = document.getElementById('input-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectName = document.getElementById('title').value;
  // const projectName = title.value;
  if (projectExists(projectName)) {
    alert('Project name already taken!');
  } else {
    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.default(projectName);
    addProjectToLocalStorage(newProject);
    showProjects();
  }
});

// new todo creation form
const newTodoCreationForm = (showTodos) => {
  const newTodoForm = document.createElement('form');
  newTodoForm.id = 'new-todo-creation-form';
  const todoTitle = document.createElement('input');
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
    const newTodoValues = new _todo_js__WEBPACK_IMPORTED_MODULE_1__.default(title, description, priority, dueDate);
    allProjects = getProjectsFromLocalStorage();
    const currentProjectIdx = allProjects.findIndex((project) => project.title === currentProject.title);
    allProjects[currentProjectIdx].todos.push(newTodoValues);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    showTodos(currentProject);
  });
  return newTodoForm;
};

const localStorageOnLoad = () => {
  showProjects();
};

document.addEventListener('DOMContentLoaded', localStorageOnLoad);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRvZG9zID0gW107XG4gIH1cblxuICBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gIH1cblxuICBnZXRUb2RvID0gKHRvZG9UaXRsZSkgPT4ge1xuICAgIGxldCBteVRvZG87XG4gICAgdGhpcy50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBpZiAodG9kby5UaXRsZSgpID09PSB0b2RvVGl0bGUpIHtcbiAgICAgICAgbXlUb2RvID0gdG9kbztcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbXlUb2RvO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcyc7XG5cbmxldCBhbGxQcm9qZWN0cyA9IFtuZXcgUHJvamVjdCgnZGVmYXVsdCcpXTtcbmxldCBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzWzBdO1xuY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvcycpO1xuY29uc3QgcHJvamVjdFRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tY3JlYXRpb24tZm9ybScpO1xuXG4vLyBMb29wIHRocnUgZWFjaCBwcm9qZWN0IGFuZCBkaXNwbGF5IGl0XG5jb25zdCBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2FsU3RvcmFnZVByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2plY3RzJyk7XG4gIGlmIChsb2NhbFN0b3JhZ2VQcm9qZWN0cyA9PT0gbnVsbCkge1xuICAgIGFsbFByb2plY3RzID0gW25ldyBQcm9qZWN0KCdkZWZhdWx0JyldO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gIH0gZWxzZSB7XG4gICAgYWxsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVByb2plY3RzKTtcbiAgfVxuICByZXR1cm4gYWxsUHJvamVjdHM7XG59O1xuXG5jb25zdCBtb2RpZnlUb2RvID0gKHRvZG8sIHNob3dUb2RvcywgbmV3VG9kb0NyZWF0aW9uRm9ybSkgPT4ge1xuICBjb25zdCBtb2RpZnlUb2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgbW9kaWZ5VG9kb0Zvcm0uaWQgPSAnbW9kaWZ5LXRvZG8tZm9ybSc7XG4gIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICd0b2RvIHRpdGxlJyk7XG4gIHRvZG9UaXRsZS5pZCA9ICd0b2RvLXRpdGxlLW1vZGlmeSc7XG5cbiAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3NvbWUgZGVzY3JpcHRpb24uLicpO1xuICB0b2RvRGVzYy5pZCA9ICd0b2RvLWRlc2MtbW9kaWZ5JztcblxuICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZHVlIGRhdGUnKTtcbiAgdG9kb0R1ZURhdGUuaWQgPSAndG9kby1wcmlvcml0eS1tb2RpZnknO1xuXG4gIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICB0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICB0b2RvUHJpb3JpdHkuaWQgPSAndG9kby1kdWVEYXRlLW1vZGlmeSc7XG5cbiAgY29uc3QgdG9kb1ByaW9yaXRpZXMgPSBbJ1ZlcnkgaGlnaCcsICdIaWdoJywgJ01vZGVyYXRlJywgJ0xvdycsICdVc2VsZXNzJ107XG4gIGNvbnN0IG9wdGlvbnMgPSB0b2RvUHJpb3JpdGllcy5tYXAoKHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBgPG9wdGlvbiB2YWx1ZT1cIiR7dmFsdWV9XCI+JHtwcmlvcml0eX08L29wdGlvbj5gO1xuICB9KTtcbiAgdG9kb1ByaW9yaXR5LmlubmVySFRNTCA9IG9wdGlvbnM7XG5cbiAgY29uc3QgdG9kb1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRvZG9TdWJtaXQudmFsdWUgPSAnVXBkYXRlIFRvZG8nO1xuICB0b2RvU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgdG9kb1N1Ym1pdC5pZCA9ICd0b2RvLWZvcm0tc3VibWl0LW1vZGlmeSc7XG5cbiAgbW9kaWZ5VG9kb0Zvcm0uYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0Rlc2MsIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIHRvZG9TdWJtaXQpO1xuICBwcm9qZWN0VG9kb3MuYXBwZW5kKG1vZGlmeVRvZG9Gb3JtKTtcblxuICBtb2RpZnlUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SWR4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiB7XG4gICAgICByZXR1cm4gcHJvamVjdC50aXRsZSA9PT0gY3VycmVudFByb2plY3QudGl0bGVcbiAgICB9KTtcbiAgICBjb25zdCBjdXJyZW50VG9kb0lkeCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWR4XS50b2Rvcy5maW5kSW5kZXgoKGVhY2hUb2RvKSA9PiB7XG4gICAgICByZXR1cm4gZWFjaFRvZG8udGl0bGUgPT09IHRvZG8udGl0bGVcbiAgICAgIH0pO1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJZHhdLnRvZG9zW2N1cnJlbnRUb2RvSWR4XTtcbiAgICBjdXJyZW50VG9kby50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlLW1vZGlmeScpLnZhbHVlO1xuICAgIGN1cnJlbnRUb2RvLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzYy1tb2RpZnknKS52YWx1ZTtcbiAgICBjdXJyZW50VG9kby5wcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5LW1vZGlmeScpLnZhbHVlO1xuICAgIGN1cnJlbnRUb2RvLmR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWVEYXRlLW1vZGlmeScpLnZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gICAgc2hvd1RvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBjb25zdCBtb2RpZnlUb2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RpZnktdG9kby1mb3JtJyk7XG4gICAgbW9kaWZ5VG9kb0Zvcm0ucmVtb3ZlKCk7XG4gICAgbmV3VG9kb0NyZWF0aW9uRm9ybSgpO1xuICB9KTtcbiAgcmV0dXJuIG1vZGlmeVRvZG9Gb3JtO1xufTtcblxuY29uc3Qgc2hvd1RvZG9zID0gKGN1cnJlbnRQcm9qZWN0KSA9PiB7XG4gIHRvZG9TZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICBjb25zdCBjdXJyZW50UHJvamVjdElkeCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0LnRpdGxlID09PSBjdXJyZW50UHJvamVjdC50aXRsZVxuICB9KTtcbiAgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdElkeF07XG5cbiAgY3VycmVudFByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0NhcmQuY2xhc3NOYW1lID0gJ3RvZG8tY2FyZCc7XG5cbiAgICBjb25zdCB0b2RvVGl0bGVQcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgdG9kb1RpdGxlUHJvcGVydHkudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIHRvZG9UaXRsZVByb3BlcnR5LmNsYXNzTmFtZSA9ICd0b2RvLXRpdGxlJztcblxuICAgIGNvbnN0IHRvZG9EZXNjUHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kb0Rlc2NQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgdG9kb0Rlc2NQcm9wZXJ0eS5jbGFzc05hbWUgPSAndG9kby1kZXNjJztcblxuICAgIGNvbnN0IHRvZG9EdWVEYXRlUHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kb0R1ZURhdGVQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICB0b2RvRHVlRGF0ZVByb3BlcnR5LmNsYXNzTmFtZSA9ICd0b2RvLWR1ZURhdGUnO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5UHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kb1ByaW9yaXR5UHJvcGVydHkudGV4dENvbnRlbnQgPSBgJHt0b2RvLnByaW9yaXR5fWA7XG4gICAgdG9kb1ByaW9yaXR5UHJvcGVydHkuY2xhc3NOYW1lID0gJ3RvZG8tcHJpb3JpdHknO1xuXG4gICAgY29uc3QgbW9kaWZ5VG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1vZGlmeVRvZG9CdG4uaW5uZXJIVE1MID0gJ0VkaXQnO1xuICAgIG1vZGlmeVRvZG9CdG4uY2xhc3NOYW1lID0gJ3VwZGF0ZS10b2RvLWJ0bic7XG4gICAgbW9kaWZ5VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1RvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10b2RvLWNyZWF0aW9uLWZvcm0nKTtcbiAgICAgIG5ld1RvZG9Gb3JtLnJlbW92ZSgpO1xuICAgICAgbW9kaWZ5VG9kbyh0b2RvLCBzaG93VG9kb3MsIG5ld1RvZG9DcmVhdGlvbkZvcm0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVRvZG9CdG4uaW5uZXJUZXh0ID0gJ2RlbGV0ZSc7XG4gICAgZGVsZXRlVG9kb0J0bi5pZCA9ICd0b2RvLWRsdC1idG4nO1xuICAgIGRlbGV0ZVRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VG9kb0lkeCA9IGN1cnJlbnRQcm9qZWN0LnRvZG9zLmZpbmRJbmRleCgoZWFjaFRvZG8pID0+IGVhY2hUb2RvLnRpdGxlID09PSB0b2RvLnRpdGxlKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0LnRvZG9zLnNwbGljZShjdXJyZW50VG9kb0lkeCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuICAgICAgc2hvd1RvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIHRvZG9DYXJkLmFwcGVuZCh0b2RvVGl0bGVQcm9wZXJ0eSwgdG9kb0Rlc2NQcm9wZXJ0eSwgdG9kb1ByaW9yaXR5UHJvcGVydHksIHRvZG9EdWVEYXRlUHJvcGVydHksIG1vZGlmeVRvZG9CdG4sIGRlbGV0ZVRvZG9CdG4pO1xuICAgIHRvZG9TZWN0aW9uLmFwcGVuZCh0b2RvQ2FyZCk7XG4gIH0pO1xufTtcblxuY29uc3Qgb25Qcm9qZWN0Q2xpY2sgPSAoZSwgbmV3VG9kb0NyZWF0aW9uRm9ybSkgPT4ge1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZS50YXJnZXQ7XG4gIGNvbnN0IGluZGV4ID0gTnVtYmVyKHByb2plY3REaXYuZGF0YXNldC5pbmRleCk7XG4gIGFsbFByb2plY3RzID0gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIGN1cnJlbnRQcm9qZWN0ID0gYWxsUHJvamVjdHNbaW5kZXhdO1xuICB0b2RvU2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgc2hvd1RvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgbmV3VG9kb0NyZWF0aW9uRm9ybShzaG93VG9kb3MpO1xuICByZXR1cm4gcHJvamVjdERpdjtcbn07XG5cbmNvbnN0IHByb2plY3RDYXJkID0gKHByb2plY3QsIGlkeCkgPT4ge1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBwcm9qZWN0RGl2LmlkID0gJ3Byb2plY3QtZGl2JztcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIHByb2plY3REaXYuZGF0YXNldC5pbmRleCA9IGlkeDtcbiAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICBvblByb2plY3RDbGljayhlLCBuZXdUb2RvQ3JlYXRpb25Gb3JtKVxuICB9KTtcbiAgcmV0dXJuIHByb2plY3REaXY7XG59O1xuXG5jb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC1wcm9qZWN0cycpO1xuICBjb25zdCBwcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgYWxsUHJvamVjdHMucHVzaChwcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UpO1xuICBwcm9qZWN0U2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaWR4KSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdENhcmQgPSBwcm9qZWN0Q2FyZChwcm9qZWN0LCBpZHgpO1xuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZChuZXdQcm9qZWN0Q2FyZCk7XG4gIH0pO1xufTtcblxuLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGEgcHJvamVjdCBjYXJkXG5cbmNvbnN0IHByb2plY3RFeGlzdHMgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgcmV0dXJuIGFsbFByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHByb2plY3ROYW1lKTtcbn07XG5cbnNob3dQcm9qZWN0cygpO1xuXG5jb25zdCBhZGRQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UgPSAobmV3UHJvamVjdCkgPT4ge1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xufTtcblxuLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBwcm9qZWN0IGNyZWF0aW9uIGFuZCBwdXNoIGl0IGludG8gYWxsIHByb2plY3RzXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcm0nKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAvLyBjb25zdCBwcm9qZWN0TmFtZSA9IHRpdGxlLnZhbHVlO1xuICBpZiAocHJvamVjdEV4aXN0cyhwcm9qZWN0TmFtZSkpIHtcbiAgICBhbGVydCgnUHJvamVjdCBuYW1lIGFscmVhZHkgdGFrZW4hJyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBhZGRQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UobmV3UHJvamVjdCk7XG4gICAgc2hvd1Byb2plY3RzKCk7XG4gIH1cbn0pO1xuXG4vLyBuZXcgdG9kbyBjcmVhdGlvbiBmb3JtXG5jb25zdCBuZXdUb2RvQ3JlYXRpb25Gb3JtID0gKHNob3dUb2RvcykgPT4ge1xuICBjb25zdCBuZXdUb2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgbmV3VG9kb0Zvcm0uaWQgPSAnbmV3LXRvZG8tY3JlYXRpb24tZm9ybSc7XG4gIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICd0b2RvIHRpdGxlJyk7XG4gIHRvZG9UaXRsZS5pZCA9ICd0b2RvLXRpdGxlJztcblxuICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRvZG9EZXNjLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRvZG9EZXNjLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnc29tZSBkZXNjcmlwdGlvbi4uJyk7XG4gIHRvZG9EZXNjLmlkID0gJ3RvZG8tZGVzYyc7XG5cbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2R1ZSBkYXRlJyk7XG4gIHRvZG9EdWVEYXRlLmlkID0gJ3RvZG8tcHJpb3JpdHknO1xuXG4gIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICB0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICB0b2RvUHJpb3JpdHkuaWQgPSAndG9kby1kdWVEYXRlJztcblxuICBjb25zdCB0b2RvUHJpb3JpdGllcyA9IFsnVmVyeSBoaWdoJywgJ0hpZ2gnLCAnTW9kZXJhdGUnLCAnTG93JywgJ1VzZWxlc3MnXTtcbiAgY29uc3Qgb3B0aW9ucyA9IHRvZG9Qcmlvcml0aWVzLm1hcCgocHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGA8b3B0aW9uIHZhbHVlPVwiJHt2YWx1ZX1cIj4ke3ByaW9yaXR5fTwvb3B0aW9uPmA7XG4gIH0pO1xuICB0b2RvUHJpb3JpdHkuaW5uZXJIVE1MID0gb3B0aW9ucztcblxuICBjb25zdCB0b2RvU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdG9kb1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHRvZG9TdWJtaXQuaWQgPSAndG9kby1mb3JtLXN1Ym1pdCc7XG5cbiAgbmV3VG9kb0Zvcm0uYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0Rlc2MsIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIHRvZG9TdWJtaXQpO1xuICBwcm9qZWN0VG9kb3MuaW5uZXJIVE1MID0gJyc7XG4gIHByb2plY3RUb2Rvcy5hcHBlbmQobmV3VG9kb0Zvcm0pO1xuXG4gIG5ld1RvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2MnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZURhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBuZXdUb2RvVmFsdWVzID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSk7XG4gICAgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElkeCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gY3VycmVudFByb2plY3QudGl0bGUpO1xuICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWR4XS50b2Rvcy5wdXNoKG5ld1RvZG9WYWx1ZXMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gICAgc2hvd1RvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgfSk7XG4gIHJldHVybiBuZXdUb2RvRm9ybTtcbn07XG5cbmNvbnN0IGxvY2FsU3RvcmFnZU9uTG9hZCA9ICgpID0+IHtcbiAgc2hvd1Byb2plY3RzKCk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbG9jYWxTdG9yYWdlT25Mb2FkKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==