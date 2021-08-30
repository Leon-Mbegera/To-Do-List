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
  const allProjects = getProjectsFromLocalStorage();
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
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
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
let currentPrj = allProjects[0];

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
  currentPrj = allProjects[index];
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
  let allProjects = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjectsFromLocalStorage)();
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
    let allProjects = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjectsFromLocalStorage)();
    const currentPrjIdx = allProjects.findIndex((project) => project.title === _project_js__WEBPACK_IMPORTED_MODULE_1__.currentPrj.title);
    allProjects[currentPrjIdx].todos.push(newTodoValues);
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
  _index_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos.append(modifyTodoForm);

  modifyTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let allProjects = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjectsFromLocalStorage)();
    const currentPrjIdx = allProjects.findIndex(
      (project) => project.title === _project_js__WEBPACK_IMPORTED_MODULE_1__.currentPrj.title,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1EQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7O1VDbExBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3QsIHsgc2hvd1Byb2plY3RzLCBwcm9qZWN0RXhpc3RzfSBmcm9tICcuL3Byb2plY3QuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kb3MnKTtcclxuZXhwb3J0IGNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWNyZWF0aW9uLWZvcm0nKTtcclxuXHJcbmNvbnN0IGFkZFByb2plY3RUb0xvY2FsU3RvcmFnZSA9IChuZXdQcm9qZWN0KSA9PiB7XHJcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcm0nKTtcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xyXG4gIGlmIChwcm9qZWN0RXhpc3RzKHByb2plY3ROYW1lKSkge1xyXG4gICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBhbHJlYWR5IHRha2VuIScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgYWRkUHJvamVjdFRvTG9jYWxTdG9yYWdlKG5ld1Byb2plY3QpO1xyXG4gICAgc2hvd1Byb2plY3RzKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IGxvY2FsU3RvcmFnZU9uTG9hZCA9ICgpID0+IHtcclxuICBzaG93UHJvamVjdHMoKTtcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsb2NhbFN0b3JhZ2VPbkxvYWQpO1xyXG4iLCJpbXBvcnQgeyB0b2RvU2VjdGlvbiB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IG5ld1RvZG9DcmVhdGlvbkZvcm0sIHNob3dUb2RvcyB9IGZyb20gXCIuL3RvZG8uanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG8gPSAodG9kbykgPT4ge1xyXG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBhbGxQcm9qZWN0cyA9IFtuZXcgUHJvamVjdCgnZGVmYXVsdCcpXTtcclxuZXhwb3J0IGxldCBjdXJyZW50UHJqID0gYWxsUHJvamVjdHNbMF07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxvY2FsU3RvcmFnZVByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2plY3RzJyk7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZVByb2plY3RzID09PSBudWxsKSB7XHJcbiAgICBhbGxQcm9qZWN0cyA9IFtuZXcgUHJvamVjdCgnZGVmYXVsdCcpXTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFsbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VQcm9qZWN0cyk7XHJcbiAgfVxyXG4gIHJldHVybiBhbGxQcm9qZWN0cztcclxufTtcclxuXHJcbmNvbnN0IG9uUHJvamVjdENsaWNrID0gKGUsIG5ld1RvZG9DcmVhdGlvbkZvcm0pID0+IHtcclxuICBjb25zdCBwcm9qZWN0RGl2ID0gZS50YXJnZXQ7XHJcbiAgY29uc3QgaW5kZXggPSBOdW1iZXIocHJvamVjdERpdi5kYXRhc2V0LmluZGV4KTtcclxuICBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIGN1cnJlbnRQcmogPSBhbGxQcm9qZWN0c1tpbmRleF07XHJcbiAgdG9kb1NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgc2hvd1RvZG9zKGN1cnJlbnRQcmosIG5ld1RvZG9DcmVhdGlvbkZvcm0pO1xyXG4gIG5ld1RvZG9DcmVhdGlvbkZvcm0oc2hvd1RvZG9zKTtcclxuICByZXR1cm4gcHJvamVjdERpdjtcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3RDYXJkID0gKHByb2plY3QsIGlkeCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgcHJvamVjdERpdi5pZCA9ICdwcm9qZWN0LWRpdic7XHJcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgcHJvamVjdERpdi5kYXRhc2V0LmluZGV4ID0gaWR4O1xyXG4gIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgb25Qcm9qZWN0Q2xpY2soZSwgbmV3VG9kb0NyZWF0aW9uRm9ybSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHByb2plY3REaXY7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC1wcm9qZWN0cycpO1xyXG4gIGNvbnN0IHByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIGFsbFByb2plY3RzLnB1c2gocHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKTtcclxuICBwcm9qZWN0U2VjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpZHgpID0+IHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RDYXJkID0gcHJvamVjdENhcmQocHJvamVjdCwgaWR4KTtcclxuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZChuZXdQcm9qZWN0Q2FyZCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5zaG93UHJvamVjdHMoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0RXhpc3RzID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICByZXR1cm4gYWxsUHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdE5hbWUpO1xyXG59O1xyXG5cclxuXHJcbiIsImltcG9ydCB7IHRvZG9TZWN0aW9uLCBwcm9qZWN0VG9kb3MgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UsIGFsbFByb2plY3RzLCBjdXJyZW50UHJqIH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dUb2RvcyA9IChjdXJyZW50UHJqLCBuZXdUb2RvQ3JlYXRpb25Gb3JtKSA9PiB7XHJcbiAgdG9kb1NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgbGV0IGFsbFByb2plY3RzID0gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgY29uc3QgY3VycmVudFByaklkeCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gY3VycmVudFByai50aXRsZSk7XHJcbiAgY3VycmVudFByaiA9IGFsbFByb2plY3RzW2N1cnJlbnRQcmpJZHhdO1xyXG5cclxuICBjdXJyZW50UHJqLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgIGNvbnN0IHRvZG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvQ2FyZC5jbGFzc05hbWUgPSAndG9kby1jYXJkJztcclxuXHJcbiAgICBjb25zdCB0b2RvVGl0bGVQcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICB0b2RvVGl0bGVQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XHJcbiAgICB0b2RvVGl0bGVQcm9wZXJ0eS5jbGFzc05hbWUgPSAndG9kby10aXRsZSc7XHJcblxyXG4gICAgY29uc3QgdG9kb0Rlc2NQcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZG9EZXNjUHJvcGVydHkudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgdG9kb0Rlc2NQcm9wZXJ0eS5jbGFzc05hbWUgPSAndG9kby1kZXNjJztcclxuXHJcbiAgICBjb25zdCB0b2RvRHVlRGF0ZVByb3BlcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9kb0R1ZURhdGVQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcclxuICAgIHRvZG9EdWVEYXRlUHJvcGVydHkuY2xhc3NOYW1lID0gJ3RvZG8tZHVlRGF0ZSc7XHJcblxyXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5UHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvUHJpb3JpdHlQcm9wZXJ0eS50ZXh0Q29udGVudCA9IGAke3RvZG8ucHJpb3JpdHl9YDtcclxuICAgIHRvZG9Qcmlvcml0eVByb3BlcnR5LmNsYXNzTmFtZSA9ICd0b2RvLXByaW9yaXR5JztcclxuXHJcbiAgICBjb25zdCBtb2RpZnlUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBtb2RpZnlUb2RvQnRuLmlubmVySFRNTCA9ICdFZGl0JztcclxuICAgIG1vZGlmeVRvZG9CdG4uY2xhc3NOYW1lID0gJ3VwZGF0ZS10b2RvLWJ0bic7XHJcbiAgICBtb2RpZnlUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdUb2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdG9kby1jcmVhdGlvbi1mb3JtJyk7XHJcbiAgICAgIG5ld1RvZG9Gb3JtLnJlbW92ZSgpO1xyXG4gICAgICBtb2RpZnlUb2RvKHRvZG8sIHNob3dUb2RvcywgbmV3VG9kb0NyZWF0aW9uRm9ybSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVUb2RvQnRuLmlubmVyVGV4dCA9ICdkZWxldGUnO1xyXG4gICAgZGVsZXRlVG9kb0J0bi5pZCA9ICd0b2RvLWRsdC1idG4nO1xyXG4gICAgZGVsZXRlVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFRkSWR4ID0gY3VycmVudFByai50b2Rvcy5maW5kSW5kZXgoKGVUb2RvKSA9PiBlVG9kby50aXRsZSA9PT0gdG9kby50aXRsZSk7XHJcbiAgICAgIGN1cnJlbnRQcmoudG9kb3Muc3BsaWNlKGN1cnJlbnRUZElkeCwgMSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XHJcbiAgICAgIHNob3dUb2RvcyhjdXJyZW50UHJqLCBuZXdUb2RvQ3JlYXRpb25Gb3JtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRvZG9DYXJkLmFwcGVuZCh0b2RvVGl0bGVQcm9wZXJ0eSwgdG9kb0Rlc2NQcm9wZXJ0eSxcclxuICAgICAgdG9kb1ByaW9yaXR5UHJvcGVydHksXHJcbiAgICAgIHRvZG9EdWVEYXRlUHJvcGVydHksIG1vZGlmeVRvZG9CdG4sIGRlbGV0ZVRvZG9CdG4pO1xyXG4gICAgdG9kb1NlY3Rpb24uYXBwZW5kKHRvZG9DYXJkKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdUb2RvQ3JlYXRpb25Gb3JtID0gKHNob3dUb2RvcykgPT4ge1xyXG4gIGNvbnN0IG5ld1RvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIG5ld1RvZG9Gb3JtLmlkID0gJ25ldy10b2RvLWNyZWF0aW9uLWZvcm0nO1xyXG4gIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xyXG4gIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3RvZG8gdGl0bGUnKTtcclxuICB0b2RvVGl0bGUuaWQgPSAndG9kby10aXRsZSc7XHJcblxyXG4gIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIHRvZG9EZXNjLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xyXG4gIHRvZG9EZXNjLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnc29tZSBkZXNjcmlwdGlvbi4uJyk7XHJcbiAgdG9kb0Rlc2MuaWQgPSAndG9kby1kZXNjJztcclxuXHJcbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJyk7XHJcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdkdWUgZGF0ZScpO1xyXG4gIHRvZG9EdWVEYXRlLmlkID0gJ3RvZG8tcHJpb3JpdHknO1xyXG5cclxuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICB0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xyXG4gIHRvZG9Qcmlvcml0eS5pZCA9ICd0b2RvLWR1ZURhdGUnO1xyXG5cclxuICBjb25zdCB0b2RvUHJpb3JpdGllcyA9IFsnVmVyeSBoaWdoJywgJ0hpZ2gnLCAnTW9kZXJhdGUnLCAnTG93JywgJ1VzZWxlc3MnXTtcclxuICBjb25zdCBvcHRpb25zID0gdG9kb1ByaW9yaXRpZXMubWFwKChwcmlvcml0eSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBwcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGA8b3B0aW9uIHZhbHVlPVwiJHt2YWx1ZX1cIj4ke3ByaW9yaXR5fTwvb3B0aW9uPmA7XHJcbiAgfSk7XHJcbiAgdG9kb1ByaW9yaXR5LmlubmVySFRNTCA9IG9wdGlvbnM7XHJcblxyXG4gIGNvbnN0IHRvZG9TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRvZG9TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gIHRvZG9TdWJtaXQuaWQgPSAndG9kby1mb3JtLXN1Ym1pdCc7XHJcblxyXG4gIG5ld1RvZG9Gb3JtLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EZXNjLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCB0b2RvU3VibWl0KTtcclxuICBwcm9qZWN0VG9kb3MuaW5uZXJIVE1MID0gJyc7XHJcbiAgcHJvamVjdFRvZG9zLmFwcGVuZChuZXdUb2RvRm9ybSk7XHJcblxyXG4gIG5ld1RvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlJykudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2MnKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHknKS52YWx1ZTtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWVEYXRlJykudmFsdWU7XHJcbiAgICBjb25zdCBuZXdUb2RvVmFsdWVzID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSk7XHJcbiAgICBsZXQgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQcmpJZHggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IGN1cnJlbnRQcmoudGl0bGUpO1xyXG4gICAgYWxsUHJvamVjdHNbY3VycmVudFByaklkeF0udG9kb3MucHVzaChuZXdUb2RvVmFsdWVzKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XHJcbiAgICBzaG93VG9kb3MoY3VycmVudFByaiwgbmV3VG9kb0NyZWF0aW9uRm9ybSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5ld1RvZG9Gb3JtO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vZGlmeVRvZG8gPSAodG9kbywgc2hvd1RvZG9zLCBuZXdUb2RvQ3JlYXRpb25Gb3JtKSA9PiB7XHJcbiAgY29uc3QgbW9kaWZ5VG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgbW9kaWZ5VG9kb0Zvcm0uaWQgPSAnbW9kaWZ5LXRvZG8tZm9ybSc7XHJcbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICd0b2RvIHRpdGxlJyk7XHJcbiAgdG9kb1RpdGxlLmlkID0gJ3RvZG8tdGl0bGUtbW9kaWZ5JztcclxuXHJcbiAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRvZG9EZXNjLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdzb21lIGRlc2NyaXB0aW9uLi4nKTtcclxuICB0b2RvRGVzYy5pZCA9ICd0b2RvLWRlc2MtbW9kaWZ5JztcclxuXHJcbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdkdWUgZGF0ZScpO1xyXG4gIHRvZG9EdWVEYXRlLmlkID0gJ3RvZG8tcHJpb3JpdHktbW9kaWZ5JztcclxuXHJcbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgdG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcclxuICB0b2RvUHJpb3JpdHkuaWQgPSAndG9kby1kdWVEYXRlLW1vZGlmeSc7XHJcblxyXG4gIGNvbnN0IHRvZG9Qcmlvcml0aWVzID0gWydWZXJ5IGhpZ2gnLCAnSGlnaCcsICdNb2RlcmF0ZScsICdMb3cnLCAnVXNlbGVzcyddO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB0b2RvUHJpb3JpdGllcy5tYXAoKHByaW9yaXR5KSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3ZhbHVlfVwiPiR7cHJpb3JpdHl9PC9vcHRpb24+YDtcclxuICB9KTtcclxuICB0b2RvUHJpb3JpdHkuaW5uZXJIVE1MID0gb3B0aW9ucztcclxuXHJcbiAgY29uc3QgdG9kb1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb1N1Ym1pdC52YWx1ZSA9ICdVcGRhdGUgVG9kbyc7XHJcbiAgdG9kb1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgdG9kb1N1Ym1pdC5pZCA9ICd0b2RvLWZvcm0tc3VibWl0LW1vZGlmeSc7XHJcblxyXG4gIG1vZGlmeVRvZG9Gb3JtLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EZXNjLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCB0b2RvU3VibWl0KTtcclxuICBwcm9qZWN0VG9kb3MuYXBwZW5kKG1vZGlmeVRvZG9Gb3JtKTtcclxuXHJcbiAgbW9kaWZ5VG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgY29uc3QgY3VycmVudFByaklkeCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChcclxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IGN1cnJlbnRQcmoudGl0bGUsXHJcbiAgICApO1xyXG4gICAgY29uc3QgY3VycmVudFRkSWR4ID0gYWxsUHJvamVjdHNbY3VycmVudFByaklkeF0udG9kb3MuZmluZEluZGV4KFxyXG4gICAgICAoZVRvZG8pID0+IGVUb2RvLnRpdGxlID09PSB0b2RvLnRpdGxlLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gYWxsUHJvamVjdHNbY3VycmVudFByaklkeF0udG9kb3NbY3VycmVudFRkSWR4XTtcclxuICAgIGN1cnJlbnRUb2RvLnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUtbW9kaWZ5JykudmFsdWU7XHJcbiAgICBjdXJyZW50VG9kby5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2MtbW9kaWZ5JykudmFsdWU7XHJcbiAgICBjdXJyZW50VG9kby5wcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5LW1vZGlmeScpLnZhbHVlO1xyXG4gICAgY3VycmVudFRvZG8uZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZURhdGUtbW9kaWZ5JykudmFsdWU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xyXG4gICAgc2hvd1RvZG9zKGN1cnJlbnRQcmosIG5ld1RvZG9DcmVhdGlvbkZvcm0pO1xyXG4gICAgY29uc3QgbW9kaWZ5VG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kaWZ5LXRvZG8tZm9ybScpO1xyXG4gICAgbW9kaWZ5VG9kb0Zvcm0ucmVtb3ZlKCk7XHJcbiAgICBuZXdUb2RvQ3JlYXRpb25Gb3JtKHNob3dUb2Rvcyk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG1vZGlmeVRvZG9Gb3JtO1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9