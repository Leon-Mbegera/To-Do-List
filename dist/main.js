/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Todo": () => (/* binding */ Todo)
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

class Todo {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }

  assignPriority = (givenPriority) => {
    priority = givenPriority;
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
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");


let allProjects = [new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project('default')];
let currentProject = allProjects[0];
const todoSection = document.getElementById('project-todos');
const projectTodos = document.getElementById('todo-creation-form');

// Loop thru each project and display it
const getProjectsFromLocalStorage = () => {
  const localStorageProjects = localStorage.getItem('allProjects');
  if (localStorageProjects === null) {
    allProjects = [new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project('default')];
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
  } else {
    allProjects = JSON.parse(localStorageProjects);
  }
  return allProjects;
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

const projectCard = (project, idx) => {
  const projectDiv = document.createElement('a');
  projectDiv.id = 'project-div';
  projectDiv.textContent = project.title;
  projectDiv.dataset.index = idx;
  projectDiv.addEventListener('click', onProjectClick);
  return projectDiv;
};

const onProjectClick = (e) => {
  const projectDiv = e.target;
  const index = Number(projectDiv.dataset.index);
  allProjects = getProjectsFromLocalStorage();
  currentProject = allProjects[index];
  todoSection.innerHTML = '';
  showTodos(currentProject);
  newTodoCreationForm(currentProject);
  return projectDiv;
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
  const projectName = title.value;
  if (projectExists(projectName)) {
    alert('Project name already taken!');
  } else {
    const newProject = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);
    addProjectToLocalStorage(newProject);
    showProjects();
  }
});

const showTodos = (currentProject) => {
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
      modifyTodo(todo);
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

// new todo creation form

const newTodoCreationForm = () => {
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
    const newTodoValues = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, priority, dueDate);
    allProjects = getProjectsFromLocalStorage();
    const currentProjectIdx = allProjects.findIndex((project) => project.title === currentProject.title);
    allProjects[currentProjectIdx].todos.push(newTodoValues);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    showTodos(currentProject);
  });
  return newTodoForm;
};

const modifyTodo = (todo) => {
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
    showTodos(currentProject);
    const modifyTodoForm = document.getElementById('modify-todo-form');
    modifyTodoForm.remove();
    newTodoCreationForm();
  });
  return modifyTodoForm;
};

const localStorageOnLoad = () => {
  showProjects();
};

document.addEventListener('DOMContentLoaded', localStorageOnLoad);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkM7O0FBRTdDLHVCQUF1QixnREFBTztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQU87QUFDOUI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMkJBQTJCLGdEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxjQUFjO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTSxJQUFJLFNBQVM7QUFDaEQsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDZDQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE1BQU0sSUFBSSxTQUFTO0FBQ2hELEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgfVxuXG4gIGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgfVxuXG4gIGdldFRvZG8gPSAodG9kb1RpdGxlKSA9PiB7XG4gICAgbGV0IG15VG9kbztcbiAgICB0aGlzLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGlmICh0b2RvLlRpdGxlKCkgPT09IHRvZG9UaXRsZSkge1xuICAgICAgICBteVRvZG8gPSB0b2RvO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBteVRvZG87XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuXG4gIGFzc2lnblByaW9yaXR5ID0gKGdpdmVuUHJpb3JpdHkpID0+IHtcbiAgICBwcmlvcml0eSA9IGdpdmVuUHJpb3JpdHk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUHJvamVjdCwgVG9kbyB9IGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5cbmxldCBhbGxQcm9qZWN0cyA9IFtuZXcgUHJvamVjdCgnZGVmYXVsdCcpXTtcbmxldCBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzWzBdO1xuY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvcycpO1xuY29uc3QgcHJvamVjdFRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tY3JlYXRpb24tZm9ybScpO1xuXG4vLyBMb29wIHRocnUgZWFjaCBwcm9qZWN0IGFuZCBkaXNwbGF5IGl0XG5jb25zdCBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2FsU3RvcmFnZVByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2plY3RzJyk7XG4gIGlmIChsb2NhbFN0b3JhZ2VQcm9qZWN0cyA9PT0gbnVsbCkge1xuICAgIGFsbFByb2plY3RzID0gW25ldyBQcm9qZWN0KCdkZWZhdWx0JyldO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gIH0gZWxzZSB7XG4gICAgYWxsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVByb2plY3RzKTtcbiAgfVxuICByZXR1cm4gYWxsUHJvamVjdHM7XG59O1xuXG5jb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC1wcm9qZWN0cycpO1xuICBjb25zdCBwcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgYWxsUHJvamVjdHMucHVzaChwcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UpO1xuICBwcm9qZWN0U2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaWR4KSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdENhcmQgPSBwcm9qZWN0Q2FyZChwcm9qZWN0LCBpZHgpO1xuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZChuZXdQcm9qZWN0Q2FyZCk7XG4gIH0pO1xufTtcblxuLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGEgcHJvamVjdCBjYXJkXG5cbmNvbnN0IHByb2plY3RFeGlzdHMgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgcmV0dXJuIGFsbFByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHByb2plY3ROYW1lKTtcbn07XG5cbmNvbnN0IHByb2plY3RDYXJkID0gKHByb2plY3QsIGlkeCkgPT4ge1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBwcm9qZWN0RGl2LmlkID0gJ3Byb2plY3QtZGl2JztcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIHByb2plY3REaXYuZGF0YXNldC5pbmRleCA9IGlkeDtcbiAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uUHJvamVjdENsaWNrKTtcbiAgcmV0dXJuIHByb2plY3REaXY7XG59O1xuXG5jb25zdCBvblByb2plY3RDbGljayA9IChlKSA9PiB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBlLnRhcmdldDtcbiAgY29uc3QgaW5kZXggPSBOdW1iZXIocHJvamVjdERpdi5kYXRhc2V0LmluZGV4KTtcbiAgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0c1tpbmRleF07XG4gIHRvZG9TZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICBzaG93VG9kb3MoY3VycmVudFByb2plY3QpO1xuICBuZXdUb2RvQ3JlYXRpb25Gb3JtKGN1cnJlbnRQcm9qZWN0KTtcbiAgcmV0dXJuIHByb2plY3REaXY7XG59O1xuXG5zaG93UHJvamVjdHMoKTtcblxuY29uc3QgYWRkUHJvamVjdFRvTG9jYWxTdG9yYWdlID0gKG5ld1Byb2plY3QpID0+IHtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbn07XG5cbi8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciBmb3IgcHJvamVjdCBjcmVhdGlvbiBhbmQgcHVzaCBpdCBpbnRvIGFsbCBwcm9qZWN0c1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JtJyk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSB0aXRsZS52YWx1ZTtcbiAgaWYgKHByb2plY3RFeGlzdHMocHJvamVjdE5hbWUpKSB7XG4gICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBhbHJlYWR5IHRha2VuIScpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgYWRkUHJvamVjdFRvTG9jYWxTdG9yYWdlKG5ld1Byb2plY3QpO1xuICAgIHNob3dQcm9qZWN0cygpO1xuICB9XG59KTtcblxuY29uc3Qgc2hvd1RvZG9zID0gKGN1cnJlbnRQcm9qZWN0KSA9PiB7XG4gIHRvZG9TZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICBjb25zdCBjdXJyZW50UHJvamVjdElkeCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gY3VycmVudFByb2plY3QudGl0bGUpO1xuICBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWR4XTtcbiAgY3VycmVudFByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0NhcmQuY2xhc3NOYW1lID0gJ3RvZG8tY2FyZCc7XG5cbiAgICBjb25zdCB0b2RvVGl0bGVQcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgdG9kb1RpdGxlUHJvcGVydHkudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIHRvZG9UaXRsZVByb3BlcnR5LmNsYXNzTmFtZSA9ICd0b2RvLXRpdGxlJztcblxuICAgIGNvbnN0IHRvZG9EZXNjUHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kb0Rlc2NQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgdG9kb0Rlc2NQcm9wZXJ0eS5jbGFzc05hbWUgPSAndG9kby1kZXNjJztcblxuICAgIGNvbnN0IHRvZG9EdWVEYXRlUHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kb0R1ZURhdGVQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICB0b2RvRHVlRGF0ZVByb3BlcnR5LmNsYXNzTmFtZSA9ICd0b2RvLWR1ZURhdGUnO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5UHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kb1ByaW9yaXR5UHJvcGVydHkudGV4dENvbnRlbnQgPSBgJHt0b2RvLnByaW9yaXR5fWA7XG4gICAgdG9kb1ByaW9yaXR5UHJvcGVydHkuY2xhc3NOYW1lID0gJ3RvZG8tcHJpb3JpdHknO1xuXG4gICAgY29uc3QgbW9kaWZ5VG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1vZGlmeVRvZG9CdG4uaW5uZXJIVE1MID0gJ0VkaXQnO1xuICAgIG1vZGlmeVRvZG9CdG4uY2xhc3NOYW1lID0gJ3VwZGF0ZS10b2RvLWJ0bic7XG4gICAgbW9kaWZ5VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1RvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10b2RvLWNyZWF0aW9uLWZvcm0nKTtcbiAgICAgIG5ld1RvZG9Gb3JtLnJlbW92ZSgpO1xuICAgICAgbW9kaWZ5VG9kbyh0b2RvKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVUb2RvQnRuLmlubmVyVGV4dCA9ICdkZWxldGUnO1xuICAgIGRlbGV0ZVRvZG9CdG4uaWQgPSAndG9kby1kbHQtYnRuJztcbiAgICBkZWxldGVUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFRvZG9JZHggPSBjdXJyZW50UHJvamVjdC50b2Rvcy5maW5kSW5kZXgoKGVhY2hUb2RvKSA9PiBlYWNoVG9kby50aXRsZSA9PT0gdG9kby50aXRsZSk7XG4gICAgICBjdXJyZW50UHJvamVjdC50b2Rvcy5zcGxpY2UoY3VycmVudFRvZG9JZHgsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgICAgIHNob3dUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICB0b2RvQ2FyZC5hcHBlbmQodG9kb1RpdGxlUHJvcGVydHksIHRvZG9EZXNjUHJvcGVydHksIHRvZG9Qcmlvcml0eVByb3BlcnR5LCB0b2RvRHVlRGF0ZVByb3BlcnR5LCBtb2RpZnlUb2RvQnRuLCBkZWxldGVUb2RvQnRuKTtcbiAgICB0b2RvU2VjdGlvbi5hcHBlbmQodG9kb0NhcmQpO1xuICB9KTtcbn07XG5cbi8vIG5ldyB0b2RvIGNyZWF0aW9uIGZvcm1cblxuY29uc3QgbmV3VG9kb0NyZWF0aW9uRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIG5ld1RvZG9Gb3JtLmlkID0gJ25ldy10b2RvLWNyZWF0aW9uLWZvcm0nO1xuICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAndG9kbyB0aXRsZScpO1xuICB0b2RvVGl0bGUuaWQgPSAndG9kby10aXRsZSc7XG5cbiAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3NvbWUgZGVzY3JpcHRpb24uLicpO1xuICB0b2RvRGVzYy5pZCA9ICd0b2RvLWRlc2MnO1xuXG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdkdWUgZGF0ZScpO1xuICB0b2RvRHVlRGF0ZS5pZCA9ICd0b2RvLXByaW9yaXR5JztcblxuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgdG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgdG9kb1ByaW9yaXR5LmlkID0gJ3RvZG8tZHVlRGF0ZSc7XG5cbiAgY29uc3QgdG9kb1ByaW9yaXRpZXMgPSBbJ1ZlcnkgaGlnaCcsICdIaWdoJywgJ01vZGVyYXRlJywgJ0xvdycsICdVc2VsZXNzJ107XG4gIGNvbnN0IG9wdGlvbnMgPSB0b2RvUHJpb3JpdGllcy5tYXAoKHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBgPG9wdGlvbiB2YWx1ZT1cIiR7dmFsdWV9XCI+JHtwcmlvcml0eX08L29wdGlvbj5gO1xuICB9KTtcbiAgdG9kb1ByaW9yaXR5LmlubmVySFRNTCA9IG9wdGlvbnM7XG5cbiAgY29uc3QgdG9kb1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRvZG9TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICB0b2RvU3VibWl0LmlkID0gJ3RvZG8tZm9ybS1zdWJtaXQnO1xuXG4gIG5ld1RvZG9Gb3JtLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EZXNjLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCB0b2RvU3VibWl0KTtcbiAgcHJvamVjdFRvZG9zLmlubmVySFRNTCA9ICcnO1xuICBwcm9qZWN0VG9kb3MuYXBwZW5kKG5ld1RvZG9Gb3JtKTtcblxuICBuZXdUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXNjJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWVEYXRlJykudmFsdWU7XG4gICAgY29uc3QgbmV3VG9kb1ZhbHVlcyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpO1xuICAgIGFsbFByb2plY3RzID0gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJZHggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IGN1cnJlbnRQcm9qZWN0LnRpdGxlKTtcbiAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdElkeF0udG9kb3MucHVzaChuZXdUb2RvVmFsdWVzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuICAgIHNob3dUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIH0pO1xuICByZXR1cm4gbmV3VG9kb0Zvcm07XG59O1xuXG5jb25zdCBtb2RpZnlUb2RvID0gKHRvZG8pID0+IHtcbiAgY29uc3QgbW9kaWZ5VG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIG1vZGlmeVRvZG9Gb3JtLmlkID0gJ21vZGlmeS10b2RvLWZvcm0nO1xuICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAndG9kbyB0aXRsZScpO1xuICB0b2RvVGl0bGUuaWQgPSAndG9kby10aXRsZS1tb2RpZnknO1xuXG4gIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdzb21lIGRlc2NyaXB0aW9uLi4nKTtcbiAgdG9kb0Rlc2MuaWQgPSAndG9kby1kZXNjLW1vZGlmeSc7XG5cbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2R1ZSBkYXRlJyk7XG4gIHRvZG9EdWVEYXRlLmlkID0gJ3RvZG8tcHJpb3JpdHktbW9kaWZ5JztcblxuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgdG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgdG9kb1ByaW9yaXR5LmlkID0gJ3RvZG8tZHVlRGF0ZS1tb2RpZnknO1xuXG4gIGNvbnN0IHRvZG9Qcmlvcml0aWVzID0gWydWZXJ5IGhpZ2gnLCAnSGlnaCcsICdNb2RlcmF0ZScsICdMb3cnLCAnVXNlbGVzcyddO1xuICBjb25zdCBvcHRpb25zID0gdG9kb1ByaW9yaXRpZXMubWFwKChwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3ZhbHVlfVwiPiR7cHJpb3JpdHl9PC9vcHRpb24+YDtcbiAgfSk7XG4gIHRvZG9Qcmlvcml0eS5pbm5lckhUTUwgPSBvcHRpb25zO1xuXG4gIGNvbnN0IHRvZG9TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvU3VibWl0LnZhbHVlID0gJ1VwZGF0ZSBUb2RvJztcbiAgdG9kb1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHRvZG9TdWJtaXQuaWQgPSAndG9kby1mb3JtLXN1Ym1pdC1tb2RpZnknO1xuXG4gIG1vZGlmeVRvZG9Gb3JtLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EZXNjLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCB0b2RvU3VibWl0KTtcbiAgcHJvamVjdFRvZG9zLmFwcGVuZChtb2RpZnlUb2RvRm9ybSk7XG5cbiAgbW9kaWZ5VG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElkeCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gY3VycmVudFByb2plY3QudGl0bGUpO1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvSWR4ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJZHhdLnRvZG9zLmZpbmRJbmRleCgoZWFjaFRvZG8pID0+IGVhY2hUb2RvLnRpdGxlID09PSB0b2RvLnRpdGxlKTtcbiAgICBjb25zdCBjdXJyZW50VG9kbyA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWR4XS50b2Rvc1tjdXJyZW50VG9kb0lkeF07XG4gICAgY3VycmVudFRvZG8udGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZS1tb2RpZnknKS52YWx1ZTtcbiAgICBjdXJyZW50VG9kby5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2MtbW9kaWZ5JykudmFsdWU7XG4gICAgY3VycmVudFRvZG8ucHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eS1tb2RpZnknKS52YWx1ZTtcbiAgICBjdXJyZW50VG9kby5kdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZHVlRGF0ZS1tb2RpZnknKS52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuICAgIHNob3dUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgY29uc3QgbW9kaWZ5VG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kaWZ5LXRvZG8tZm9ybScpO1xuICAgIG1vZGlmeVRvZG9Gb3JtLnJlbW92ZSgpO1xuICAgIG5ld1RvZG9DcmVhdGlvbkZvcm0oKTtcbiAgfSk7XG4gIHJldHVybiBtb2RpZnlUb2RvRm9ybTtcbn07XG5cbmNvbnN0IGxvY2FsU3RvcmFnZU9uTG9hZCA9ICgpID0+IHtcbiAgc2hvd1Byb2plY3RzKCk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbG9jYWxTdG9yYWdlT25Mb2FkKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==