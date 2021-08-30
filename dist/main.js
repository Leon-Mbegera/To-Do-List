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
let currentPrj = allProjects[0];
const todoSection = document.getElementById('project-todos');
const projectTodos = document.getElementById('todo-creation-form');

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
    const currentPrjIdx = allProjects.findIndex(
      (project) => project.title === currentPrj.title,
    );
    const currentTdIdx = allProjects[currentPrjIdx].todos.findIndex(
      (eTodo) => eTodo.title === todo.title,
    );
    const currentTodo = allProjects[currentPrjIdx].todos[currentTdIdx];
    currentTodo.title = document.getElementById('todo-title-modify').value;
    currentTodo.description = document.getElementById('todo-desc-modify').value;
    currentTodo.priority = document.getElementById('todo-priority-modify').value;
    currentTodo.dueDate = document.getElementById('todo-dueDate-modify').value;
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    showTodos(currentPrj, newTodoCreationForm);
    const modifyTodoForm = document.getElementById('modify-todo-form');
    modifyTodoForm.remove();
    newTodoCreationForm(showTodos);
  });
  return modifyTodoForm;
};

const showTodos = (currentPrj, newTodoCreationForm) => {
  todoSection.innerHTML = '';
  allProjects = getProjectsFromLocalStorage();
  const currentPrjIdx = allProjects.findIndex((project) => project.title === currentPrj.title);
  currentPrj = allProjects[currentPrjIdx];

  currentPrj.todos.forEach((todo) => {
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
      const currentTdIdx = currentPrj.todos.findIndex((eTodo) => eTodo.title === todo.title);
      currentPrj.todos.splice(currentTdIdx, 1);
      localStorage.setItem('allProjects', JSON.stringify(allProjects));
      showTodos(currentPrj, newTodoCreationForm);
    });

    todoCard.append(todoTitleProperty, todoDescProperty,
      todoPriorityProperty,
      todoDueDateProperty, modifyTodoBtn, deleteTodoBtn);
    todoSection.append(todoCard);
  });
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
    const currentPrjIdx = allProjects.findIndex((project) => project.title === currentPrj.title);
    allProjects[currentPrjIdx].todos.push(newTodoValues);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    showTodos(currentPrj, newTodoCreationForm);
  });
  return newTodoForm;
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

const form = document.getElementById('input-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectName = document.getElementById('title').value;
  if (projectExists(projectName)) {
    alert('Project name already taken!');
  } else {
    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.default(projectName);
    addProjectToLocalStorage(newProject);
    showProjects();
  }
});

const localStorageOnLoad = () => {
  showProjects();
};

document.addEventListener('DOMContentLoaded', localStorageOnLoad);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05tQztBQUNOO0FBQzdCO0FBQ0EsdUJBQXVCLGdEQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFPO0FBQzlCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixNQUFNLElBQUksU0FBUztBQUNoRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTSxJQUFJLFNBQVM7QUFDaEQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDZDQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMkJBQTJCLGdEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvID0gKHRvZG8pID0+IHtcclxuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICB9XHJcblxyXG4gIGdldFRvZG8gPSAodG9kb1RpdGxlKSA9PiB7XHJcbiAgICBsZXQgbXlUb2RvO1xyXG4gICAgdGhpcy50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgIGlmICh0b2RvLlRpdGxlKCkgPT09IHRvZG9UaXRsZSkge1xyXG4gICAgICAgIG15VG9kbyA9IHRvZG87XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG15VG9kbztcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xyXG5cclxubGV0IGFsbFByb2plY3RzID0gW25ldyBQcm9qZWN0KCdkZWZhdWx0JyldO1xyXG5sZXQgY3VycmVudFByaiA9IGFsbFByb2plY3RzWzBdO1xyXG5jb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG9zJyk7XHJcbmNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWNyZWF0aW9uLWZvcm0nKTtcclxuXHJcbmNvbnN0IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICBjb25zdCBsb2NhbFN0b3JhZ2VQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qZWN0cycpO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2VQcm9qZWN0cyA9PT0gbnVsbCkge1xyXG4gICAgYWxsUHJvamVjdHMgPSBbbmV3IFByb2plY3QoJ2RlZmF1bHQnKV07XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhbGxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlUHJvamVjdHMpO1xyXG4gIH1cclxuICByZXR1cm4gYWxsUHJvamVjdHM7XHJcbn07XHJcblxyXG5jb25zdCBtb2RpZnlUb2RvID0gKHRvZG8sIHNob3dUb2RvcywgbmV3VG9kb0NyZWF0aW9uRm9ybSkgPT4ge1xyXG4gIGNvbnN0IG1vZGlmeVRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIG1vZGlmeVRvZG9Gb3JtLmlkID0gJ21vZGlmeS10b2RvLWZvcm0nO1xyXG4gIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAndG9kbyB0aXRsZScpO1xyXG4gIHRvZG9UaXRsZS5pZCA9ICd0b2RvLXRpdGxlLW1vZGlmeSc7XHJcblxyXG4gIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIHRvZG9EZXNjLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnc29tZSBkZXNjcmlwdGlvbi4uJyk7XHJcbiAgdG9kb0Rlc2MuaWQgPSAndG9kby1kZXNjLW1vZGlmeSc7XHJcblxyXG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZHVlIGRhdGUnKTtcclxuICB0b2RvRHVlRGF0ZS5pZCA9ICd0b2RvLXByaW9yaXR5LW1vZGlmeSc7XHJcblxyXG4gIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XHJcbiAgdG9kb1ByaW9yaXR5LmlkID0gJ3RvZG8tZHVlRGF0ZS1tb2RpZnknO1xyXG5cclxuICBjb25zdCB0b2RvUHJpb3JpdGllcyA9IFsnVmVyeSBoaWdoJywgJ0hpZ2gnLCAnTW9kZXJhdGUnLCAnTG93JywgJ1VzZWxlc3MnXTtcclxuICBjb25zdCBvcHRpb25zID0gdG9kb1ByaW9yaXRpZXMubWFwKChwcmlvcml0eSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBwcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGA8b3B0aW9uIHZhbHVlPVwiJHt2YWx1ZX1cIj4ke3ByaW9yaXR5fTwvb3B0aW9uPmA7XHJcbiAgfSk7XHJcbiAgdG9kb1ByaW9yaXR5LmlubmVySFRNTCA9IG9wdGlvbnM7XHJcblxyXG4gIGNvbnN0IHRvZG9TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRvZG9TdWJtaXQudmFsdWUgPSAnVXBkYXRlIFRvZG8nO1xyXG4gIHRvZG9TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gIHRvZG9TdWJtaXQuaWQgPSAndG9kby1mb3JtLXN1Ym1pdC1tb2RpZnknO1xyXG5cclxuICBtb2RpZnlUb2RvRm9ybS5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRGVzYywgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgdG9kb1N1Ym1pdCk7XHJcbiAgcHJvamVjdFRvZG9zLmFwcGVuZChtb2RpZnlUb2RvRm9ybSk7XHJcblxyXG4gIG1vZGlmeVRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgY29uc3QgY3VycmVudFByaklkeCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChcclxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IGN1cnJlbnRQcmoudGl0bGUsXHJcbiAgICApO1xyXG4gICAgY29uc3QgY3VycmVudFRkSWR4ID0gYWxsUHJvamVjdHNbY3VycmVudFByaklkeF0udG9kb3MuZmluZEluZGV4KFxyXG4gICAgICAoZVRvZG8pID0+IGVUb2RvLnRpdGxlID09PSB0b2RvLnRpdGxlLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gYWxsUHJvamVjdHNbY3VycmVudFByaklkeF0udG9kb3NbY3VycmVudFRkSWR4XTtcclxuICAgIGN1cnJlbnRUb2RvLnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUtbW9kaWZ5JykudmFsdWU7XHJcbiAgICBjdXJyZW50VG9kby5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2MtbW9kaWZ5JykudmFsdWU7XHJcbiAgICBjdXJyZW50VG9kby5wcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5LW1vZGlmeScpLnZhbHVlO1xyXG4gICAgY3VycmVudFRvZG8uZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZURhdGUtbW9kaWZ5JykudmFsdWU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xyXG4gICAgc2hvd1RvZG9zKGN1cnJlbnRQcmosIG5ld1RvZG9DcmVhdGlvbkZvcm0pO1xyXG4gICAgY29uc3QgbW9kaWZ5VG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kaWZ5LXRvZG8tZm9ybScpO1xyXG4gICAgbW9kaWZ5VG9kb0Zvcm0ucmVtb3ZlKCk7XHJcbiAgICBuZXdUb2RvQ3JlYXRpb25Gb3JtKHNob3dUb2Rvcyk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG1vZGlmeVRvZG9Gb3JtO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvd1RvZG9zID0gKGN1cnJlbnRQcmosIG5ld1RvZG9DcmVhdGlvbkZvcm0pID0+IHtcclxuICB0b2RvU2VjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIGNvbnN0IGN1cnJlbnRQcmpJZHggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IGN1cnJlbnRQcmoudGl0bGUpO1xyXG4gIGN1cnJlbnRQcmogPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJqSWR4XTtcclxuXHJcbiAgY3VycmVudFByai50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb0NhcmQuY2xhc3NOYW1lID0gJ3RvZG8tY2FyZCc7XHJcblxyXG4gICAgY29uc3QgdG9kb1RpdGxlUHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgdG9kb1RpdGxlUHJvcGVydHkudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xyXG4gICAgdG9kb1RpdGxlUHJvcGVydHkuY2xhc3NOYW1lID0gJ3RvZG8tdGl0bGUnO1xyXG5cclxuICAgIGNvbnN0IHRvZG9EZXNjUHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvRGVzY1Byb3BlcnR5LnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcclxuICAgIHRvZG9EZXNjUHJvcGVydHkuY2xhc3NOYW1lID0gJ3RvZG8tZGVzYyc7XHJcblxyXG4gICAgY29uc3QgdG9kb0R1ZURhdGVQcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZG9EdWVEYXRlUHJvcGVydHkudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XHJcbiAgICB0b2RvRHVlRGF0ZVByb3BlcnR5LmNsYXNzTmFtZSA9ICd0b2RvLWR1ZURhdGUnO1xyXG5cclxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eVByb3BlcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9kb1ByaW9yaXR5UHJvcGVydHkudGV4dENvbnRlbnQgPSBgJHt0b2RvLnByaW9yaXR5fWA7XHJcbiAgICB0b2RvUHJpb3JpdHlQcm9wZXJ0eS5jbGFzc05hbWUgPSAndG9kby1wcmlvcml0eSc7XHJcblxyXG4gICAgY29uc3QgbW9kaWZ5VG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbW9kaWZ5VG9kb0J0bi5pbm5lckhUTUwgPSAnRWRpdCc7XHJcbiAgICBtb2RpZnlUb2RvQnRuLmNsYXNzTmFtZSA9ICd1cGRhdGUtdG9kby1idG4nO1xyXG4gICAgbW9kaWZ5VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRvZG8tY3JlYXRpb24tZm9ybScpO1xyXG4gICAgICBuZXdUb2RvRm9ybS5yZW1vdmUoKTtcclxuICAgICAgbW9kaWZ5VG9kbyh0b2RvLCBzaG93VG9kb3MsIG5ld1RvZG9DcmVhdGlvbkZvcm0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZGVsZXRlVG9kb0J0bi5pbm5lclRleHQgPSAnZGVsZXRlJztcclxuICAgIGRlbGV0ZVRvZG9CdG4uaWQgPSAndG9kby1kbHQtYnRuJztcclxuICAgIGRlbGV0ZVRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRUZElkeCA9IGN1cnJlbnRQcmoudG9kb3MuZmluZEluZGV4KChlVG9kbykgPT4gZVRvZG8udGl0bGUgPT09IHRvZG8udGl0bGUpO1xyXG4gICAgICBjdXJyZW50UHJqLnRvZG9zLnNwbGljZShjdXJyZW50VGRJZHgsIDEpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xyXG4gICAgICBzaG93VG9kb3MoY3VycmVudFByaiwgbmV3VG9kb0NyZWF0aW9uRm9ybSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0b2RvQ2FyZC5hcHBlbmQodG9kb1RpdGxlUHJvcGVydHksIHRvZG9EZXNjUHJvcGVydHksXHJcbiAgICAgIHRvZG9Qcmlvcml0eVByb3BlcnR5LFxyXG4gICAgICB0b2RvRHVlRGF0ZVByb3BlcnR5LCBtb2RpZnlUb2RvQnRuLCBkZWxldGVUb2RvQnRuKTtcclxuICAgIHRvZG9TZWN0aW9uLmFwcGVuZCh0b2RvQ2FyZCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBvblByb2plY3RDbGljayA9IChlLCBuZXdUb2RvQ3JlYXRpb25Gb3JtKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdERpdiA9IGUudGFyZ2V0O1xyXG4gIGNvbnN0IGluZGV4ID0gTnVtYmVyKHByb2plY3REaXYuZGF0YXNldC5pbmRleCk7XHJcbiAgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICBjdXJyZW50UHJqID0gYWxsUHJvamVjdHNbaW5kZXhdO1xyXG4gIHRvZG9TZWN0aW9uLmlubmVySFRNTCA9ICcnO1xyXG4gIHNob3dUb2RvcyhjdXJyZW50UHJqLCBuZXdUb2RvQ3JlYXRpb25Gb3JtKTtcclxuICBuZXdUb2RvQ3JlYXRpb25Gb3JtKHNob3dUb2Rvcyk7XHJcbiAgcmV0dXJuIHByb2plY3REaXY7XHJcbn07XHJcblxyXG5jb25zdCBuZXdUb2RvQ3JlYXRpb25Gb3JtID0gKHNob3dUb2RvcykgPT4ge1xyXG4gIGNvbnN0IG5ld1RvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIG5ld1RvZG9Gb3JtLmlkID0gJ25ldy10b2RvLWNyZWF0aW9uLWZvcm0nO1xyXG4gIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAndG9kbyB0aXRsZScpO1xyXG4gIHRvZG9UaXRsZS5pZCA9ICd0b2RvLXRpdGxlJztcclxuXHJcbiAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRvZG9EZXNjLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdzb21lIGRlc2NyaXB0aW9uLi4nKTtcclxuICB0b2RvRGVzYy5pZCA9ICd0b2RvLWRlc2MnO1xyXG5cclxuICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2R1ZSBkYXRlJyk7XHJcbiAgdG9kb0R1ZURhdGUuaWQgPSAndG9kby1wcmlvcml0eSc7XHJcblxyXG4gIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XHJcbiAgdG9kb1ByaW9yaXR5LmlkID0gJ3RvZG8tZHVlRGF0ZSc7XHJcblxyXG4gIGNvbnN0IHRvZG9Qcmlvcml0aWVzID0gWydWZXJ5IGhpZ2gnLCAnSGlnaCcsICdNb2RlcmF0ZScsICdMb3cnLCAnVXNlbGVzcyddO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB0b2RvUHJpb3JpdGllcy5tYXAoKHByaW9yaXR5KSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3ZhbHVlfVwiPiR7cHJpb3JpdHl9PC9vcHRpb24+YDtcclxuICB9KTtcclxuICB0b2RvUHJpb3JpdHkuaW5uZXJIVE1MID0gb3B0aW9ucztcclxuXHJcbiAgY29uc3QgdG9kb1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgdG9kb1N1Ym1pdC5pZCA9ICd0b2RvLWZvcm0tc3VibWl0JztcclxuXHJcbiAgbmV3VG9kb0Zvcm0uYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0Rlc2MsIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIHRvZG9TdWJtaXQpO1xyXG4gIHByb2plY3RUb2Rvcy5pbm5lckhUTUwgPSAnJztcclxuICBwcm9qZWN0VG9kb3MuYXBwZW5kKG5ld1RvZG9Gb3JtKTtcclxuXHJcbiAgbmV3VG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzYycpLnZhbHVlO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpLnZhbHVlO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZURhdGUnKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld1RvZG9WYWx1ZXMgPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKTtcclxuICAgIGFsbFByb2plY3RzID0gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICBjb25zdCBjdXJyZW50UHJqSWR4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBjdXJyZW50UHJqLnRpdGxlKTtcclxuICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcmpJZHhdLnRvZG9zLnB1c2gobmV3VG9kb1ZhbHVlcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xyXG4gICAgc2hvd1RvZG9zKGN1cnJlbnRQcmosIG5ld1RvZG9DcmVhdGlvbkZvcm0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiBuZXdUb2RvRm9ybTtcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3RDYXJkID0gKHByb2plY3QsIGlkeCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgcHJvamVjdERpdi5pZCA9ICdwcm9qZWN0LWRpdic7XHJcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgcHJvamVjdERpdi5kYXRhc2V0LmluZGV4ID0gaWR4O1xyXG4gIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgb25Qcm9qZWN0Q2xpY2soZSwgbmV3VG9kb0NyZWF0aW9uRm9ybSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHByb2plY3REaXY7XHJcbn07XHJcblxyXG5jb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXByb2plY3RzJyk7XHJcbiAgY29uc3QgcHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlID0gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgYWxsUHJvamVjdHMucHVzaChwcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UpO1xyXG4gIHByb2plY3RTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xyXG4gIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGlkeCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdENhcmQgPSBwcm9qZWN0Q2FyZChwcm9qZWN0LCBpZHgpO1xyXG4gICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kKG5ld1Byb2plY3RDYXJkKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3RFeGlzdHMgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIHJldHVybiBhbGxQcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XHJcbn07XHJcblxyXG5zaG93UHJvamVjdHMoKTtcclxuXHJcbmNvbnN0IGFkZFByb2plY3RUb0xvY2FsU3RvcmFnZSA9IChuZXdQcm9qZWN0KSA9PiB7XHJcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcm0nKTtcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xyXG4gIGlmIChwcm9qZWN0RXhpc3RzKHByb2plY3ROYW1lKSkge1xyXG4gICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBhbHJlYWR5IHRha2VuIScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgYWRkUHJvamVjdFRvTG9jYWxTdG9yYWdlKG5ld1Byb2plY3QpO1xyXG4gICAgc2hvd1Byb2plY3RzKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IGxvY2FsU3RvcmFnZU9uTG9hZCA9ICgpID0+IHtcclxuICBzaG93UHJvamVjdHMoKTtcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsb2NhbFN0b3JhZ2VPbkxvYWQpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=