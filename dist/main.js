/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoSection": () => (/* binding */ todoSection),
/* harmony export */   "projectTodos": () => (/* binding */ projectTodos)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


const todoSection = document.getElementById('project-todos');
const projectTodos = document.getElementById('todo-creation-form');

const addProjectToLocalStorage = (newProject) => {
  const allProjects = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getProjectsFromLocalStorage)();
  allProjects.push(newProject);
  localStorage.setItem('allProjects', JSON.stringify(allProjects));
};

const form = document.getElementById('input-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectName = document.getElementById('title').value;
  if ((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.projectExists)(projectName)) {
    alert('Project name already taken!');
  } else {
    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.default(projectName);
    addProjectToLocalStorage(newProject);
    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.showProjects)();
  }
});

const localStorageOnLoad = () => {
  (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.showProjects)();
};

document.addEventListener('DOMContentLoaded', localStorageOnLoad);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project),
/* harmony export */   "currentPrj": () => (/* binding */ currentPrj),
/* harmony export */   "getProjectsFromLocalStorage": () => (/* binding */ getProjectsFromLocalStorage),
/* harmony export */   "showProjects": () => (/* binding */ showProjects),
/* harmony export */   "projectExists": () => (/* binding */ projectExists)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  addTodo = (todo) => {
    this.todos.push(todo);
  }
}

let allProjects = [new Project('default')];
const currentPrj = { current: allProjects[0]};

const getProjectsFromLocalStorage = () => {
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
  currentPrj.current = allProjects[index];
  _index_js__WEBPACK_IMPORTED_MODULE_0__.todoSection.innerHTML = '';
  (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.showTodos)(currentPrj, newTodoCreationForm);
  newTodoCreationForm(_todo_js__WEBPACK_IMPORTED_MODULE_1__.showTodos);
  return projectDiv;
};

const projectCard = (project, idx) => {
  const projectDiv = document.createElement('a');
  projectDiv.id = 'project-div';
  projectDiv.textContent = project.title;
  projectDiv.dataset.index = idx;
  projectDiv.addEventListener('click', (e) => {
    onProjectClick(e, _todo_js__WEBPACK_IMPORTED_MODULE_1__.newTodoCreationForm);
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

showProjects();

const projectExists = (projectName) => {
  allProjects = getProjectsFromLocalStorage();
  return allProjects.find((project) => project.title === projectName);
};


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo),
/* harmony export */   "showTodos": () => (/* binding */ showTodos),
/* harmony export */   "newTodoCreationForm": () => (/* binding */ newTodoCreationForm),
/* harmony export */   "modifyTodo": () => (/* binding */ modifyTodo)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



class Todo {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}

const showTodos = (currentPrj, newTodoCreationForm) => {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.todoSection.innerHTML = '';
  const allProjects = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjectsFromLocalStorage)();
  // const currentPrjIdx = allProjects.findIndex((project) => project.title === currentPrj.title);
  // currentPrj = allProjects[currentPrjIdx];

  currentPrj.current.todos.forEach((todo) => {
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
      const allProjects = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjectsFromLocalStorage)();
      const currentPrjIdx = allProjects.findIndex((project) => project.title === currentPrj.current.title);
      currentPrj.current = allProjects[currentPrjIdx];
      const currentTdIdx = currentPrj.current.todos.findIndex((eTodo) => eTodo.title === todo.title);
      currentPrj.current.todos.splice(currentTdIdx, 1);
      localStorage.setItem('allProjects', JSON.stringify(allProjects));
      showTodos(currentPrj, newTodoCreationForm);
    });

    todoCard.append(todoTitleProperty, todoDescProperty,
      todoPriorityProperty,
      todoDueDateProperty, modifyTodoBtn, deleteTodoBtn);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.todoSection.append(todoCard);
  });
};

const newTodoCreationForm = (showTodos) => {
  const newTodoForm = document.createElement('form');
  newTodoForm.id = 'new-todo-creation-form';
  const todoTitle = document.createElement('input');
  todoTitle.setAttribute('type', 'text');
  todoTitle.setAttribute('required', 'true');
  todoTitle.setAttribute('placeholder', 'todo title');
  todoTitle.id = 'todo-title';

  const todoDesc = document.createElement('input');
  todoDesc.setAttribute('type', 'text');
  todoDesc.setAttribute('required', 'true');
  todoDesc.setAttribute('placeholder', 'some description..');
  todoDesc.id = 'todo-desc';

  const todoDueDate = document.createElement('input');
  todoDueDate.setAttribute('type', 'date');
  todoDueDate.setAttribute('required', 'true');
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
  _index_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos.innerHTML = '';
  _index_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos.append(newTodoForm);

  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('todo-desc').value;
    const priority = document.getElementById('todo-priority').value;
    const dueDate = document.getElementById('todo-dueDate').value;
    const newTodoValues = new Todo(title, description, priority, dueDate);
    const allProjects = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjectsFromLocalStorage)();
    const currentPrjIdx = allProjects.findIndex((project) => project.title === _project_js__WEBPACK_IMPORTED_MODULE_1__.currentPrj.current.title);
    _project_js__WEBPACK_IMPORTED_MODULE_1__.currentPrj.current = allProjects[currentPrjIdx];
    _project_js__WEBPACK_IMPORTED_MODULE_1__.currentPrj.current.todos.push(newTodoValues);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    showTodos(_project_js__WEBPACK_IMPORTED_MODULE_1__.currentPrj, newTodoCreationForm);
  });
  return newTodoForm;
};

const modifyTodo = (todo, showTodos, newTodoCreationForm) => {
  const modifyTodoForm = document.createElement('form');
  modifyTodoForm.id = 'modify-todo-form';
  const todoTitle = document.createElement('input');
  todoTitle.setAttribute('type', 'text');
  todoTitle.setAttribute('required', 'true');
  todoTitle.setAttribute('placeholder', 'todo title');
  todoTitle.id = 'todo-title-modify';

  const todoDesc = document.createElement('input');
  todoDesc.setAttribute('type', 'text');
  todoDesc.setAttribute('required', 'true');
  todoDesc.setAttribute('placeholder', 'some description..');
  todoDesc.id = 'todo-desc-modify';

  const todoDueDate = document.createElement('input');
  todoDueDate.setAttribute('type', 'date');
  todoDueDate.setAttribute('required', 'true');
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
  _index_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos.append(modifyTodoForm);

  modifyTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const allProjects = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjectsFromLocalStorage)();
    console.log(allProjects);
    const currentPrjIdx = allProjects.findIndex(
      (project) => project.title === _project_js__WEBPACK_IMPORTED_MODULE_1__.currentPrj.current.title,
    );
    _project_js__WEBPACK_IMPORTED_MODULE_1__.currentPrj.current = allProjects[currentPrjIdx];
    const currentTdIdx = _project_js__WEBPACK_IMPORTED_MODULE_1__.currentPrj.current.todos.findIndex(
      (eTodo) => eTodo.title === todo.title,
    );
    const currentTodo = _project_js__WEBPACK_IMPORTED_MODULE_1__.currentPrj.current.todos[currentTdIdx];
    currentTodo.title = document.getElementById('todo-title-modify').value;
    currentTodo.description = document.getElementById('todo-desc-modify').value;
    currentTodo.priority = document.getElementById('todo-priority-modify').value;
    currentTodo.dueDate = document.getElementById('todo-dueDate-modify').value;
    console.log(allProjects);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    showTodos(_project_js__WEBPACK_IMPORTED_MODULE_1__.currentPrj, newTodoCreationForm);
    const modifyTodoForm = document.getElementById('modify-todo-form');
    modifyTodoForm.remove();
    newTodoCreationForm(showTodos);
  });
  return modifyTodoForm;
};


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1EQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7O1VDNUxBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3QsIHsgc2hvd1Byb2plY3RzLCBwcm9qZWN0RXhpc3RzLCBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5leHBvcnQgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvcycpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWNyZWF0aW9uLWZvcm0nKTtcblxuY29uc3QgYWRkUHJvamVjdFRvTG9jYWxTdG9yYWdlID0gKG5ld1Byb2plY3QpID0+IHtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbn07XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9ybScpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gIGlmIChwcm9qZWN0RXhpc3RzKHByb2plY3ROYW1lKSkge1xuICAgIGFsZXJ0KCdQcm9qZWN0IG5hbWUgYWxyZWFkeSB0YWtlbiEnKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIGFkZFByb2plY3RUb0xvY2FsU3RvcmFnZShuZXdQcm9qZWN0KTtcbiAgICBzaG93UHJvamVjdHMoKTtcbiAgfVxufSk7XG5cbmNvbnN0IGxvY2FsU3RvcmFnZU9uTG9hZCA9ICgpID0+IHtcbiAgc2hvd1Byb2plY3RzKCk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbG9jYWxTdG9yYWdlT25Mb2FkKTtcbiIsImltcG9ydCB7IHRvZG9TZWN0aW9uIH0gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgeyBuZXdUb2RvQ3JlYXRpb25Gb3JtLCBzaG93VG9kb3MgfSBmcm9tICcuL3RvZG8uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICB9XG5cbiAgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICB9XG59XG5cbmxldCBhbGxQcm9qZWN0cyA9IFtuZXcgUHJvamVjdCgnZGVmYXVsdCcpXTtcbmV4cG9ydCBjb25zdCBjdXJyZW50UHJqID0geyBjdXJyZW50OiBhbGxQcm9qZWN0c1swXX07XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2FsU3RvcmFnZVByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2plY3RzJyk7XG4gIGlmIChsb2NhbFN0b3JhZ2VQcm9qZWN0cyA9PT0gbnVsbCkge1xuICAgIGFsbFByb2plY3RzID0gW25ldyBQcm9qZWN0KCdkZWZhdWx0JyldO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gIH0gZWxzZSB7XG4gICAgYWxsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVByb2plY3RzKTtcbiAgfVxuICByZXR1cm4gYWxsUHJvamVjdHM7XG59O1xuXG5jb25zdCBvblByb2plY3RDbGljayA9IChlLCBuZXdUb2RvQ3JlYXRpb25Gb3JtKSA9PiB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBlLnRhcmdldDtcbiAgY29uc3QgaW5kZXggPSBOdW1iZXIocHJvamVjdERpdi5kYXRhc2V0LmluZGV4KTtcbiAgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgY3VycmVudFByai5jdXJyZW50ID0gYWxsUHJvamVjdHNbaW5kZXhdO1xuICB0b2RvU2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgc2hvd1RvZG9zKGN1cnJlbnRQcmosIG5ld1RvZG9DcmVhdGlvbkZvcm0pO1xuICBuZXdUb2RvQ3JlYXRpb25Gb3JtKHNob3dUb2Rvcyk7XG4gIHJldHVybiBwcm9qZWN0RGl2O1xufTtcblxuY29uc3QgcHJvamVjdENhcmQgPSAocHJvamVjdCwgaWR4KSA9PiB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHByb2plY3REaXYuaWQgPSAncHJvamVjdC1kaXYnO1xuICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgcHJvamVjdERpdi5kYXRhc2V0LmluZGV4ID0gaWR4O1xuICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBvblByb2plY3RDbGljayhlLCBuZXdUb2RvQ3JlYXRpb25Gb3JtKTtcbiAgfSk7XG4gIHJldHVybiBwcm9qZWN0RGl2O1xufTtcblxuZXhwb3J0IGNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXByb2plY3RzJyk7XG4gIGNvbnN0IHByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSk7XG4gIHByb2plY3RTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpZHgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0Q2FyZCA9IHByb2plY3RDYXJkKHByb2plY3QsIGlkeCk7XG4gICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kKG5ld1Byb2plY3RDYXJkKTtcbiAgfSk7XG59O1xuXG5zaG93UHJvamVjdHMoKTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RFeGlzdHMgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgcmV0dXJuIGFsbFByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHByb2plY3ROYW1lKTtcbn07XG4iLCJpbXBvcnQgeyB0b2RvU2VjdGlvbiwgcHJvamVjdFRvZG9zIH0gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgeyBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UsIGN1cnJlbnRQcmogfSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNob3dUb2RvcyA9IChjdXJyZW50UHJqLCBuZXdUb2RvQ3JlYXRpb25Gb3JtKSA9PiB7XG4gIHRvZG9TZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAvLyBjb25zdCBjdXJyZW50UHJqSWR4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBjdXJyZW50UHJqLnRpdGxlKTtcbiAgLy8gY3VycmVudFByaiA9IGFsbFByb2plY3RzW2N1cnJlbnRQcmpJZHhdO1xuXG4gIGN1cnJlbnRQcmouY3VycmVudC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9kb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvQ2FyZC5jbGFzc05hbWUgPSAndG9kby1jYXJkJztcblxuICAgIGNvbnN0IHRvZG9UaXRsZVByb3BlcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICB0b2RvVGl0bGVQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgdG9kb1RpdGxlUHJvcGVydHkuY2xhc3NOYW1lID0gJ3RvZG8tdGl0bGUnO1xuXG4gICAgY29uc3QgdG9kb0Rlc2NQcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RvRGVzY1Byb3BlcnR5LnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICB0b2RvRGVzY1Byb3BlcnR5LmNsYXNzTmFtZSA9ICd0b2RvLWRlc2MnO1xuXG4gICAgY29uc3QgdG9kb0R1ZURhdGVQcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RvRHVlRGF0ZVByb3BlcnR5LnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICAgIHRvZG9EdWVEYXRlUHJvcGVydHkuY2xhc3NOYW1lID0gJ3RvZG8tZHVlRGF0ZSc7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHlQcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RvUHJpb3JpdHlQcm9wZXJ0eS50ZXh0Q29udGVudCA9IGAke3RvZG8ucHJpb3JpdHl9YDtcbiAgICB0b2RvUHJpb3JpdHlQcm9wZXJ0eS5jbGFzc05hbWUgPSAndG9kby1wcmlvcml0eSc7XG5cbiAgICBjb25zdCBtb2RpZnlUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbW9kaWZ5VG9kb0J0bi5pbm5lckhUTUwgPSAnRWRpdCc7XG4gICAgbW9kaWZ5VG9kb0J0bi5jbGFzc05hbWUgPSAndXBkYXRlLXRvZG8tYnRuJztcbiAgICBtb2RpZnlUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRvZG8tY3JlYXRpb24tZm9ybScpO1xuICAgICAgbmV3VG9kb0Zvcm0ucmVtb3ZlKCk7XG4gICAgICBtb2RpZnlUb2RvKHRvZG8sIHNob3dUb2RvcywgbmV3VG9kb0NyZWF0aW9uRm9ybSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWxldGVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlVG9kb0J0bi5pbm5lclRleHQgPSAnZGVsZXRlJztcbiAgICBkZWxldGVUb2RvQnRuLmlkID0gJ3RvZG8tZGx0LWJ0bic7XG4gICAgZGVsZXRlVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgICBjb25zdCBjdXJyZW50UHJqSWR4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBjdXJyZW50UHJqLmN1cnJlbnQudGl0bGUpO1xuICAgICAgY3VycmVudFByai5jdXJyZW50ID0gYWxsUHJvamVjdHNbY3VycmVudFByaklkeF07XG4gICAgICBjb25zdCBjdXJyZW50VGRJZHggPSBjdXJyZW50UHJqLmN1cnJlbnQudG9kb3MuZmluZEluZGV4KChlVG9kbykgPT4gZVRvZG8udGl0bGUgPT09IHRvZG8udGl0bGUpO1xuICAgICAgY3VycmVudFByai5jdXJyZW50LnRvZG9zLnNwbGljZShjdXJyZW50VGRJZHgsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgICAgIHNob3dUb2RvcyhjdXJyZW50UHJqLCBuZXdUb2RvQ3JlYXRpb25Gb3JtKTtcbiAgICB9KTtcblxuICAgIHRvZG9DYXJkLmFwcGVuZCh0b2RvVGl0bGVQcm9wZXJ0eSwgdG9kb0Rlc2NQcm9wZXJ0eSxcbiAgICAgIHRvZG9Qcmlvcml0eVByb3BlcnR5LFxuICAgICAgdG9kb0R1ZURhdGVQcm9wZXJ0eSwgbW9kaWZ5VG9kb0J0biwgZGVsZXRlVG9kb0J0bik7XG4gICAgdG9kb1NlY3Rpb24uYXBwZW5kKHRvZG9DYXJkKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbmV3VG9kb0NyZWF0aW9uRm9ybSA9IChzaG93VG9kb3MpID0+IHtcbiAgY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIG5ld1RvZG9Gb3JtLmlkID0gJ25ldy10b2RvLWNyZWF0aW9uLWZvcm0nO1xuICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICd0b2RvIHRpdGxlJyk7XG4gIHRvZG9UaXRsZS5pZCA9ICd0b2RvLXRpdGxlJztcblxuICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRvZG9EZXNjLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRvZG9EZXNjLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xuICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3NvbWUgZGVzY3JpcHRpb24uLicpO1xuICB0b2RvRGVzYy5pZCA9ICd0b2RvLWRlc2MnO1xuXG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJyk7XG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZHVlIGRhdGUnKTtcbiAgdG9kb0R1ZURhdGUuaWQgPSAndG9kby1wcmlvcml0eSc7XG5cbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gIHRvZG9Qcmlvcml0eS5pZCA9ICd0b2RvLWR1ZURhdGUnO1xuXG4gIGNvbnN0IHRvZG9Qcmlvcml0aWVzID0gWydWZXJ5IGhpZ2gnLCAnSGlnaCcsICdNb2RlcmF0ZScsICdMb3cnLCAnVXNlbGVzcyddO1xuICBjb25zdCBvcHRpb25zID0gdG9kb1ByaW9yaXRpZXMubWFwKChwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3ZhbHVlfVwiPiR7cHJpb3JpdHl9PC9vcHRpb24+YDtcbiAgfSk7XG4gIHRvZG9Qcmlvcml0eS5pbm5lckhUTUwgPSBvcHRpb25zO1xuXG4gIGNvbnN0IHRvZG9TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgdG9kb1N1Ym1pdC5pZCA9ICd0b2RvLWZvcm0tc3VibWl0JztcblxuICBuZXdUb2RvRm9ybS5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRGVzYywgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgdG9kb1N1Ym1pdCk7XG4gIHByb2plY3RUb2Rvcy5pbm5lckhUTUwgPSAnJztcbiAgcHJvamVjdFRvZG9zLmFwcGVuZChuZXdUb2RvRm9ybSk7XG5cbiAgbmV3VG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzYycpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHknKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZHVlRGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1RvZG9WYWx1ZXMgPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKTtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIGNvbnN0IGN1cnJlbnRQcmpJZHggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IGN1cnJlbnRQcmouY3VycmVudC50aXRsZSk7XG4gICAgY3VycmVudFByai5jdXJyZW50ID0gYWxsUHJvamVjdHNbY3VycmVudFByaklkeF07XG4gICAgY3VycmVudFByai5jdXJyZW50LnRvZG9zLnB1c2gobmV3VG9kb1ZhbHVlcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgICBzaG93VG9kb3MoY3VycmVudFByaiwgbmV3VG9kb0NyZWF0aW9uRm9ybSk7XG4gIH0pO1xuICByZXR1cm4gbmV3VG9kb0Zvcm07XG59O1xuXG5leHBvcnQgY29uc3QgbW9kaWZ5VG9kbyA9ICh0b2RvLCBzaG93VG9kb3MsIG5ld1RvZG9DcmVhdGlvbkZvcm0pID0+IHtcbiAgY29uc3QgbW9kaWZ5VG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIG1vZGlmeVRvZG9Gb3JtLmlkID0gJ21vZGlmeS10b2RvLWZvcm0nO1xuICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICd0b2RvIHRpdGxlJyk7XG4gIHRvZG9UaXRsZS5pZCA9ICd0b2RvLXRpdGxlLW1vZGlmeSc7XG5cbiAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKTtcbiAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdzb21lIGRlc2NyaXB0aW9uLi4nKTtcbiAgdG9kb0Rlc2MuaWQgPSAndG9kby1kZXNjLW1vZGlmeSc7XG5cbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKTtcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdkdWUgZGF0ZScpO1xuICB0b2RvRHVlRGF0ZS5pZCA9ICd0b2RvLXByaW9yaXR5LW1vZGlmeSc7XG5cbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gIHRvZG9Qcmlvcml0eS5pZCA9ICd0b2RvLWR1ZURhdGUtbW9kaWZ5JztcblxuICBjb25zdCB0b2RvUHJpb3JpdGllcyA9IFsnVmVyeSBoaWdoJywgJ0hpZ2gnLCAnTW9kZXJhdGUnLCAnTG93JywgJ1VzZWxlc3MnXTtcbiAgY29uc3Qgb3B0aW9ucyA9IHRvZG9Qcmlvcml0aWVzLm1hcCgocHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGA8b3B0aW9uIHZhbHVlPVwiJHt2YWx1ZX1cIj4ke3ByaW9yaXR5fTwvb3B0aW9uPmA7XG4gIH0pO1xuICB0b2RvUHJpb3JpdHkuaW5uZXJIVE1MID0gb3B0aW9ucztcblxuICBjb25zdCB0b2RvU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdG9kb1N1Ym1pdC52YWx1ZSA9ICdVcGRhdGUgVG9kbyc7XG4gIHRvZG9TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICB0b2RvU3VibWl0LmlkID0gJ3RvZG8tZm9ybS1zdWJtaXQtbW9kaWZ5JztcblxuICBtb2RpZnlUb2RvRm9ybS5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRGVzYywgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgdG9kb1N1Ym1pdCk7XG4gIHByb2plY3RUb2Rvcy5hcHBlbmQobW9kaWZ5VG9kb0Zvcm0pO1xuXG4gIG1vZGlmeVRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIGNvbnN0IGN1cnJlbnRQcmpJZHggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gY3VycmVudFByai5jdXJyZW50LnRpdGxlLFxuICAgICk7XG4gICAgY3VycmVudFByai5jdXJyZW50ID0gYWxsUHJvamVjdHNbY3VycmVudFByaklkeF07XG4gICAgY29uc3QgY3VycmVudFRkSWR4ID0gY3VycmVudFByai5jdXJyZW50LnRvZG9zLmZpbmRJbmRleChcbiAgICAgIChlVG9kbykgPT4gZVRvZG8udGl0bGUgPT09IHRvZG8udGl0bGUsXG4gICAgKTtcbiAgICBjb25zdCBjdXJyZW50VG9kbyA9IGN1cnJlbnRQcmouY3VycmVudC50b2Rvc1tjdXJyZW50VGRJZHhdO1xuICAgIGN1cnJlbnRUb2RvLnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUtbW9kaWZ5JykudmFsdWU7XG4gICAgY3VycmVudFRvZG8uZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXNjLW1vZGlmeScpLnZhbHVlO1xuICAgIGN1cnJlbnRUb2RvLnByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHktbW9kaWZ5JykudmFsdWU7XG4gICAgY3VycmVudFRvZG8uZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZURhdGUtbW9kaWZ5JykudmFsdWU7XG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gICAgc2hvd1RvZG9zKGN1cnJlbnRQcmosIG5ld1RvZG9DcmVhdGlvbkZvcm0pO1xuICAgIGNvbnN0IG1vZGlmeVRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGlmeS10b2RvLWZvcm0nKTtcbiAgICBtb2RpZnlUb2RvRm9ybS5yZW1vdmUoKTtcbiAgICBuZXdUb2RvQ3JlYXRpb25Gb3JtKHNob3dUb2Rvcyk7XG4gIH0pO1xuICByZXR1cm4gbW9kaWZ5VG9kb0Zvcm07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==