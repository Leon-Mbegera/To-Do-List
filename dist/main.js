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
    const currentProjectIdx = allProjects.findIndex((project) => project.title === currentProject.title);
    const currentTodoIdx = allProjects[currentProjectIdx].todos.findIndex((eachTodo) => eachTodo.title === todo.title);
    const currentTodo = allProjects[currentProjectIdx].todos[currentTodoIdx];
    currentTodo.title = document.getElementById('todo-title-modify').value;
    currentTodo.description = document.getElementById('todo-desc-modify').value;
    currentTodo.priority = document.getElementById('todo-priority-modify').value;
    currentTodo.dueDate = document.getElementById('todo-dueDate-modify').value;
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    showTodos(currentProject, newTodoCreationForm);
    const modifyTodoForm = document.getElementById('modify-todo-form');
    modifyTodoForm.remove();
    newTodoCreationForm(showTodos);
  });
  return modifyTodoForm;
};

const showTodos = (currentProject, newTodoCreationForm) => {
  todoSection.innerHTML = '';
  allProjects = getProjectsFromLocalStorage();
  const currentProjectIdx = allProjects.findIndex((project) => project.title === currentProject.title);
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
      showTodos(currentProject, newTodoCreationForm);
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
  showTodos(currentProject, newTodoCreationForm);
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
    const currentProjectIdx = allProjects.findIndex((project) => project.title === currentProject.title);
    allProjects[currentProjectIdx].todos.push(newTodoValues);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    showTodos(currentProject, newTodoCreationForm);
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

// new todo creation for

const localStorageOnLoad = () => {
  showProjects();
};

document.addEventListener('DOMContentLoaded', localStorageOnLoad);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LWRvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICB9XG5cbiAgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICB9XG5cbiAgZ2V0VG9kbyA9ICh0b2RvVGl0bGUpID0+IHtcbiAgICBsZXQgbXlUb2RvO1xuICAgIHRoaXMudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgaWYgKHRvZG8uVGl0bGUoKSA9PT0gdG9kb1RpdGxlKSB7XG4gICAgICAgIG15VG9kbyA9IHRvZG87XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG15VG9kbztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xuXG5sZXQgYWxsUHJvamVjdHMgPSBbbmV3IFByb2plY3QoJ2RlZmF1bHQnKV07XG5sZXQgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0c1swXTtcbmNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kb3MnKTtcbmNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWNyZWF0aW9uLWZvcm0nKTtcblxuLy8gTG9vcCB0aHJ1IGVhY2ggcHJvamVjdCBhbmQgZGlzcGxheSBpdFxuY29uc3QgZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBjb25zdCBsb2NhbFN0b3JhZ2VQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qZWN0cycpO1xuICBpZiAobG9jYWxTdG9yYWdlUHJvamVjdHMgPT09IG51bGwpIHtcbiAgICBhbGxQcm9qZWN0cyA9IFtuZXcgUHJvamVjdCgnZGVmYXVsdCcpXTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuICB9IGVsc2Uge1xuICAgIGFsbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VQcm9qZWN0cyk7XG4gIH1cbiAgcmV0dXJuIGFsbFByb2plY3RzO1xufTtcblxuY29uc3QgbW9kaWZ5VG9kbyA9ICh0b2RvLCBzaG93VG9kb3MsIG5ld1RvZG9DcmVhdGlvbkZvcm0pID0+IHtcbiAgY29uc3QgbW9kaWZ5VG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIG1vZGlmeVRvZG9Gb3JtLmlkID0gJ21vZGlmeS10b2RvLWZvcm0nO1xuICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAndG9kbyB0aXRsZScpO1xuICB0b2RvVGl0bGUuaWQgPSAndG9kby10aXRsZS1tb2RpZnknO1xuXG4gIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdzb21lIGRlc2NyaXB0aW9uLi4nKTtcbiAgdG9kb0Rlc2MuaWQgPSAndG9kby1kZXNjLW1vZGlmeSc7XG5cbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2R1ZSBkYXRlJyk7XG4gIHRvZG9EdWVEYXRlLmlkID0gJ3RvZG8tcHJpb3JpdHktbW9kaWZ5JztcblxuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgdG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgdG9kb1ByaW9yaXR5LmlkID0gJ3RvZG8tZHVlRGF0ZS1tb2RpZnknO1xuXG4gIGNvbnN0IHRvZG9Qcmlvcml0aWVzID0gWydWZXJ5IGhpZ2gnLCAnSGlnaCcsICdNb2RlcmF0ZScsICdMb3cnLCAnVXNlbGVzcyddO1xuICBjb25zdCBvcHRpb25zID0gdG9kb1ByaW9yaXRpZXMubWFwKChwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3ZhbHVlfVwiPiR7cHJpb3JpdHl9PC9vcHRpb24+YDtcbiAgfSk7XG4gIHRvZG9Qcmlvcml0eS5pbm5lckhUTUwgPSBvcHRpb25zO1xuXG4gIGNvbnN0IHRvZG9TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvU3VibWl0LnZhbHVlID0gJ1VwZGF0ZSBUb2RvJztcbiAgdG9kb1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHRvZG9TdWJtaXQuaWQgPSAndG9kby1mb3JtLXN1Ym1pdC1tb2RpZnknO1xuXG4gIG1vZGlmeVRvZG9Gb3JtLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EZXNjLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCB0b2RvU3VibWl0KTtcbiAgcHJvamVjdFRvZG9zLmFwcGVuZChtb2RpZnlUb2RvRm9ybSk7XG5cbiAgbW9kaWZ5VG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElkeCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gY3VycmVudFByb2plY3QudGl0bGUpO1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvSWR4ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJZHhdLnRvZG9zLmZpbmRJbmRleCgoZWFjaFRvZG8pID0+IGVhY2hUb2RvLnRpdGxlID09PSB0b2RvLnRpdGxlKTtcbiAgICBjb25zdCBjdXJyZW50VG9kbyA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWR4XS50b2Rvc1tjdXJyZW50VG9kb0lkeF07XG4gICAgY3VycmVudFRvZG8udGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZS1tb2RpZnknKS52YWx1ZTtcbiAgICBjdXJyZW50VG9kby5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2MtbW9kaWZ5JykudmFsdWU7XG4gICAgY3VycmVudFRvZG8ucHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eS1tb2RpZnknKS52YWx1ZTtcbiAgICBjdXJyZW50VG9kby5kdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZHVlRGF0ZS1tb2RpZnknKS52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuICAgIHNob3dUb2RvcyhjdXJyZW50UHJvamVjdCwgbmV3VG9kb0NyZWF0aW9uRm9ybSk7XG4gICAgY29uc3QgbW9kaWZ5VG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kaWZ5LXRvZG8tZm9ybScpO1xuICAgIG1vZGlmeVRvZG9Gb3JtLnJlbW92ZSgpO1xuICAgIG5ld1RvZG9DcmVhdGlvbkZvcm0oc2hvd1RvZG9zKTtcbiAgfSk7XG4gIHJldHVybiBtb2RpZnlUb2RvRm9ybTtcbn07XG5cbmNvbnN0IHNob3dUb2RvcyA9IChjdXJyZW50UHJvamVjdCwgbmV3VG9kb0NyZWF0aW9uRm9ybSkgPT4ge1xuICB0b2RvU2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgY29uc3QgY3VycmVudFByb2plY3RJZHggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IGN1cnJlbnRQcm9qZWN0LnRpdGxlKTtcbiAgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdElkeF07XG5cbiAgY3VycmVudFByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0NhcmQuY2xhc3NOYW1lID0gJ3RvZG8tY2FyZCc7XG5cbiAgICBjb25zdCB0b2RvVGl0bGVQcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgdG9kb1RpdGxlUHJvcGVydHkudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIHRvZG9UaXRsZVByb3BlcnR5LmNsYXNzTmFtZSA9ICd0b2RvLXRpdGxlJztcblxuICAgIGNvbnN0IHRvZG9EZXNjUHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kb0Rlc2NQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgdG9kb0Rlc2NQcm9wZXJ0eS5jbGFzc05hbWUgPSAndG9kby1kZXNjJztcblxuICAgIGNvbnN0IHRvZG9EdWVEYXRlUHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kb0R1ZURhdGVQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICB0b2RvRHVlRGF0ZVByb3BlcnR5LmNsYXNzTmFtZSA9ICd0b2RvLWR1ZURhdGUnO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5UHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kb1ByaW9yaXR5UHJvcGVydHkudGV4dENvbnRlbnQgPSBgJHt0b2RvLnByaW9yaXR5fWA7XG4gICAgdG9kb1ByaW9yaXR5UHJvcGVydHkuY2xhc3NOYW1lID0gJ3RvZG8tcHJpb3JpdHknO1xuXG4gICAgY29uc3QgbW9kaWZ5VG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1vZGlmeVRvZG9CdG4uaW5uZXJIVE1MID0gJ0VkaXQnO1xuICAgIG1vZGlmeVRvZG9CdG4uY2xhc3NOYW1lID0gJ3VwZGF0ZS10b2RvLWJ0bic7XG4gICAgbW9kaWZ5VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1RvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10b2RvLWNyZWF0aW9uLWZvcm0nKTtcbiAgICAgIG5ld1RvZG9Gb3JtLnJlbW92ZSgpO1xuICAgICAgbW9kaWZ5VG9kbyh0b2RvLCBzaG93VG9kb3MsIG5ld1RvZG9DcmVhdGlvbkZvcm0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVRvZG9CdG4uaW5uZXJUZXh0ID0gJ2RlbGV0ZSc7XG4gICAgZGVsZXRlVG9kb0J0bi5pZCA9ICd0b2RvLWRsdC1idG4nO1xuICAgIGRlbGV0ZVRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VG9kb0lkeCA9IGN1cnJlbnRQcm9qZWN0LnRvZG9zLmZpbmRJbmRleCgoZWFjaFRvZG8pID0+IGVhY2hUb2RvLnRpdGxlID09PSB0b2RvLnRpdGxlKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0LnRvZG9zLnNwbGljZShjdXJyZW50VG9kb0lkeCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuICAgICAgc2hvd1RvZG9zKGN1cnJlbnRQcm9qZWN0LCBuZXdUb2RvQ3JlYXRpb25Gb3JtKTtcbiAgICB9KTtcblxuICAgIHRvZG9DYXJkLmFwcGVuZCh0b2RvVGl0bGVQcm9wZXJ0eSwgdG9kb0Rlc2NQcm9wZXJ0eSwgdG9kb1ByaW9yaXR5UHJvcGVydHksIHRvZG9EdWVEYXRlUHJvcGVydHksIG1vZGlmeVRvZG9CdG4sIGRlbGV0ZVRvZG9CdG4pO1xuICAgIHRvZG9TZWN0aW9uLmFwcGVuZCh0b2RvQ2FyZCk7XG4gIH0pO1xufTtcblxuY29uc3Qgb25Qcm9qZWN0Q2xpY2sgPSAoZSwgbmV3VG9kb0NyZWF0aW9uRm9ybSkgPT4ge1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZS50YXJnZXQ7XG4gIGNvbnN0IGluZGV4ID0gTnVtYmVyKHByb2plY3REaXYuZGF0YXNldC5pbmRleCk7XG4gIGFsbFByb2plY3RzID0gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIGN1cnJlbnRQcm9qZWN0ID0gYWxsUHJvamVjdHNbaW5kZXhdO1xuICB0b2RvU2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgc2hvd1RvZG9zKGN1cnJlbnRQcm9qZWN0LCBuZXdUb2RvQ3JlYXRpb25Gb3JtKTtcbiAgbmV3VG9kb0NyZWF0aW9uRm9ybShzaG93VG9kb3MpO1xuICByZXR1cm4gcHJvamVjdERpdjtcbn07XG5cbmNvbnN0IG5ld1RvZG9DcmVhdGlvbkZvcm0gPSAoc2hvd1RvZG9zKSA9PiB7XG4gIGNvbnN0IG5ld1RvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBuZXdUb2RvRm9ybS5pZCA9ICduZXctdG9kby1jcmVhdGlvbi1mb3JtJztcbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3RvZG8gdGl0bGUnKTtcbiAgdG9kb1RpdGxlLmlkID0gJ3RvZG8tdGl0bGUnO1xuXG4gIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdzb21lIGRlc2NyaXB0aW9uLi4nKTtcbiAgdG9kb0Rlc2MuaWQgPSAndG9kby1kZXNjJztcblxuICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZHVlIGRhdGUnKTtcbiAgdG9kb0R1ZURhdGUuaWQgPSAndG9kby1wcmlvcml0eSc7XG5cbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gIHRvZG9Qcmlvcml0eS5pZCA9ICd0b2RvLWR1ZURhdGUnO1xuXG4gIGNvbnN0IHRvZG9Qcmlvcml0aWVzID0gWydWZXJ5IGhpZ2gnLCAnSGlnaCcsICdNb2RlcmF0ZScsICdMb3cnLCAnVXNlbGVzcyddO1xuICBjb25zdCBvcHRpb25zID0gdG9kb1ByaW9yaXRpZXMubWFwKChwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3ZhbHVlfVwiPiR7cHJpb3JpdHl9PC9vcHRpb24+YDtcbiAgfSk7XG4gIHRvZG9Qcmlvcml0eS5pbm5lckhUTUwgPSBvcHRpb25zO1xuXG4gIGNvbnN0IHRvZG9TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgdG9kb1N1Ym1pdC5pZCA9ICd0b2RvLWZvcm0tc3VibWl0JztcblxuICBuZXdUb2RvRm9ybS5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRGVzYywgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgdG9kb1N1Ym1pdCk7XG4gIHByb2plY3RUb2Rvcy5pbm5lckhUTUwgPSAnJztcbiAgcHJvamVjdFRvZG9zLmFwcGVuZChuZXdUb2RvRm9ybSk7XG5cbiAgbmV3VG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzYycpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHknKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZHVlRGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1RvZG9WYWx1ZXMgPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKTtcbiAgICBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SWR4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBjdXJyZW50UHJvamVjdC50aXRsZSk7XG4gICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJZHhdLnRvZG9zLnB1c2gobmV3VG9kb1ZhbHVlcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgICBzaG93VG9kb3MoY3VycmVudFByb2plY3QsIG5ld1RvZG9DcmVhdGlvbkZvcm0pO1xuICB9KTtcbiAgcmV0dXJuIG5ld1RvZG9Gb3JtO1xufTtcblxuY29uc3QgcHJvamVjdENhcmQgPSAocHJvamVjdCwgaWR4KSA9PiB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHByb2plY3REaXYuaWQgPSAncHJvamVjdC1kaXYnO1xuICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgcHJvamVjdERpdi5kYXRhc2V0LmluZGV4ID0gaWR4O1xuICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBvblByb2plY3RDbGljayhlLCBuZXdUb2RvQ3JlYXRpb25Gb3JtKTtcbiAgfSk7XG4gIHJldHVybiBwcm9qZWN0RGl2O1xufTtcblxuY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtcHJvamVjdHMnKTtcbiAgY29uc3QgcHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlID0gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIGFsbFByb2plY3RzLnB1c2gocHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKTtcbiAgcHJvamVjdFNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGlkeCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3RDYXJkID0gcHJvamVjdENhcmQocHJvamVjdCwgaWR4KTtcbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmQobmV3UHJvamVjdENhcmQpO1xuICB9KTtcbn07XG5cbi8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHByb2plY3QgY2FyZFxuXG5jb25zdCBwcm9qZWN0RXhpc3RzID0gKHByb2plY3ROYW1lKSA9PiB7XG4gIGFsbFByb2plY3RzID0gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIHJldHVybiBhbGxQcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XG59O1xuXG5zaG93UHJvamVjdHMoKTtcblxuY29uc3QgYWRkUHJvamVjdFRvTG9jYWxTdG9yYWdlID0gKG5ld1Byb2plY3QpID0+IHtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbn07XG5cbi8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciBmb3IgcHJvamVjdCBjcmVhdGlvbiBhbmQgcHVzaCBpdCBpbnRvIGFsbCBwcm9qZWN0c1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JtJyk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgLy8gY29uc3QgcHJvamVjdE5hbWUgPSB0aXRsZS52YWx1ZTtcbiAgaWYgKHByb2plY3RFeGlzdHMocHJvamVjdE5hbWUpKSB7XG4gICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBhbHJlYWR5IHRha2VuIScpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgYWRkUHJvamVjdFRvTG9jYWxTdG9yYWdlKG5ld1Byb2plY3QpO1xuICAgIHNob3dQcm9qZWN0cygpO1xuICB9XG59KTtcblxuLy8gbmV3IHRvZG8gY3JlYXRpb24gZm9yXG5cbmNvbnN0IGxvY2FsU3RvcmFnZU9uTG9hZCA9ICgpID0+IHtcbiAgc2hvd1Byb2plY3RzKCk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbG9jYWxTdG9yYWdlT25Mb2FkKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==