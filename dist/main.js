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
    priority = givenPriority
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


let allProjects = [ new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project('default')];
let currentProject = allProjects[0];
const todoSection = document.getElementById('project-todos');
const projectTodos = document.getElementById('todo-creation-form');

// Loop thru each project and display it
const getProjectsFromLocalStorage = () => {
  const localStorageProjects = localStorage.getItem('allProjects');
  if (localStorageProjects === null) {
    allProjects = [ new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project('default')];
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
}

// function to create a project card

const projectExists = (projectName) => {
  allProjects = getProjectsFromLocalStorage();
  return allProjects.find((project) => project.title === projectName);
}

const projectCard = (project, idx) => {
    const projectDiv = document.createElement('a');
    projectDiv.id = 'project-div';
    projectDiv.textContent = project.title;
    projectDiv.dataset.index = idx;
    projectDiv.addEventListener('click', onProjectClick);
    return projectDiv;
}


const onProjectClick = (e) => {
  const projectDiv = e.target;
  const index = Number(projectDiv.dataset.index);
  allProjects = getProjectsFromLocalStorage();
    currentProject = allProjects[index];
    todoSection.innerHTML = '';
    showTodos(currentProject);
    newTodoCreationForm(currentProject);
  return projectDiv;
}

showProjects();

const addProjectToLocalStorage = (newProject) => {
  const allProjects = getProjectsFromLocalStorage();
  allProjects.push(newProject)
  localStorage.setItem('allProjects', JSON.stringify(allProjects));
};

// Add an event listener for project creation and push it into all projects
const form = document.getElementById('input-form');
form.addEventListener('submit', (e)=> {
  e.preventDefault();
  const projectName = title.value;
  if(projectExists(projectName)) {
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
  const currentProjectIdx = allProjects.findIndex( (project)=>project.title === currentProject.title);
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
      modifyTodo(todo)
    });

    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.innerText = 'delete';
    deleteTodoBtn.id = 'todo-dlt-btn';
    deleteTodoBtn.addEventListener('click', () => {
      const currentTodoIdx = currentProject.todos.findIndex( (eachTodo)=>eachTodo.title === todo.title);
      currentProject.todos.splice(currentTodoIdx, 1);
      localStorage.setItem('allProjects', JSON.stringify(allProjects));
      showTodos(currentProject);
    });

    todoCard.append(todoTitleProperty, todoDescProperty, todoPriorityProperty, todoDueDateProperty, modifyTodoBtn, deleteTodoBtn);
    todoSection.append(todoCard);
  });
}

// new todo creation form

const newTodoCreationForm = () => {

  const newTodoForm = document.createElement('form');
  newTodoForm.id = 'new-todo-creation-form';
  const todoTitle  = document.createElement('input');
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
    const currentProjectIdx = allProjects.findIndex( (project)=>project.title === currentProject.title);
    allProjects[currentProjectIdx].todos.push(newTodoValues)
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    showTodos(currentProject);
  });
  return newTodoForm;
};

const modifyTodo = (todo) => {

  const modifyTodoForm = document.createElement('form');
  modifyTodoForm.id = 'modify-todo-form';
  const todoTitle  = document.createElement('input');
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
    const currentProjectIdx = allProjects.findIndex( (project)=>project.title === currentProject.title);
    const currentTodoIdx = allProjects[currentProjectIdx].todos.findIndex( (eachTodo)=>eachTodo.title === todo.title);
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
}
 
const localStorageOnLoad = () => {
  showProjects();
}

document.addEventListener('DOMContentLoaded', localStorageOnLoad);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvID0gKHRvZG9UaXRsZSkgPT4ge1xyXG4gICAgbGV0IG15VG9kbztcclxuICAgIHRoaXMudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgICBpZiAodG9kby5UaXRsZSgpID09PSB0b2RvVGl0bGUpIHtcclxuICAgICAgICBteVRvZG8gPSB0b2RvO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBteVRvZG87XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGFzc2lnblByaW9yaXR5ID0gKGdpdmVuUHJpb3JpdHkpID0+IHtcclxuICAgIHByaW9yaXR5ID0gZ2l2ZW5Qcmlvcml0eVxyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFByb2plY3QsIFRvZG8gfSAgZnJvbSAnLi9jbGFzc2VzLmpzJ1xyXG5cclxubGV0IGFsbFByb2plY3RzID0gWyBuZXcgUHJvamVjdCgnZGVmYXVsdCcpXTtcclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gYWxsUHJvamVjdHNbMF07XHJcbmNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kb3MnKTtcclxuY29uc3QgcHJvamVjdFRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tY3JlYXRpb24tZm9ybScpO1xyXG5cclxuLy8gTG9vcCB0aHJ1IGVhY2ggcHJvamVjdCBhbmQgZGlzcGxheSBpdFxyXG5jb25zdCBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbG9jYWxTdG9yYWdlUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvamVjdHMnKTtcclxuICBpZiAobG9jYWxTdG9yYWdlUHJvamVjdHMgPT09IG51bGwpIHtcclxuICAgIGFsbFByb2plY3RzID0gWyBuZXcgUHJvamVjdCgnZGVmYXVsdCcpXTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFsbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VQcm9qZWN0cyk7XHJcbiAgfVxyXG4gIHJldHVybiBhbGxQcm9qZWN0cztcclxufTtcclxuXHJcbmNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtcHJvamVjdHMnKTtcclxuICBjb25zdCBwcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSk7XHJcbiAgcHJvamVjdFNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaWR4KSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0Q2FyZCA9IHByb2plY3RDYXJkKHByb2plY3QsIGlkeCk7XHJcbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmQobmV3UHJvamVjdENhcmQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB0byBjcmVhdGUgYSBwcm9qZWN0IGNhcmRcclxuXHJcbmNvbnN0IHByb2plY3RFeGlzdHMgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIHJldHVybiBhbGxQcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RDYXJkID0gKHByb2plY3QsIGlkeCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIHByb2plY3REaXYuaWQgPSAncHJvamVjdC1kaXYnO1xyXG4gICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgICBwcm9qZWN0RGl2LmRhdGFzZXQuaW5kZXggPSBpZHg7XHJcbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25Qcm9qZWN0Q2xpY2spO1xyXG4gICAgcmV0dXJuIHByb2plY3REaXY7XHJcbn1cclxuXHJcblxyXG5jb25zdCBvblByb2plY3RDbGljayA9IChlKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdERpdiA9IGUudGFyZ2V0O1xyXG4gIGNvbnN0IGluZGV4ID0gTnVtYmVyKHByb2plY3REaXYuZGF0YXNldC5pbmRleCk7XHJcbiAgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gYWxsUHJvamVjdHNbaW5kZXhdO1xyXG4gICAgdG9kb1NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBzaG93VG9kb3MoY3VycmVudFByb2plY3QpO1xyXG4gICAgbmV3VG9kb0NyZWF0aW9uRm9ybShjdXJyZW50UHJvamVjdCk7XHJcbiAgcmV0dXJuIHByb2plY3REaXY7XHJcbn1cclxuXHJcbnNob3dQcm9qZWN0cygpO1xyXG5cclxuY29uc3QgYWRkUHJvamVjdFRvTG9jYWxTdG9yYWdlID0gKG5ld1Byb2plY3QpID0+IHtcclxuICBjb25zdCBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdClcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xyXG59O1xyXG5cclxuLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBwcm9qZWN0IGNyZWF0aW9uIGFuZCBwdXNoIGl0IGludG8gYWxsIHByb2plY3RzXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9ybScpO1xyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSB0aXRsZS52YWx1ZTtcclxuICBpZihwcm9qZWN0RXhpc3RzKHByb2plY3ROYW1lKSkge1xyXG4gICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBhbHJlYWR5IHRha2VuIScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICBhZGRQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UobmV3UHJvamVjdCk7XHJcbiAgc2hvd1Byb2plY3RzKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5jb25zdCBzaG93VG9kb3MgPSAoY3VycmVudFByb2plY3QpID0+IHtcclxuICB0b2RvU2VjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0SWR4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KCAocHJvamVjdCk9PnByb2plY3QudGl0bGUgPT09IGN1cnJlbnRQcm9qZWN0LnRpdGxlKTtcclxuICBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWR4XTtcclxuICBjdXJyZW50UHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvZG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvQ2FyZC5jbGFzc05hbWUgPSAndG9kby1jYXJkJztcclxuXHJcbiAgICBjb25zdCB0b2RvVGl0bGVQcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICB0b2RvVGl0bGVQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XHJcbiAgICB0b2RvVGl0bGVQcm9wZXJ0eS5jbGFzc05hbWUgPSAndG9kby10aXRsZSc7XHJcblxyXG4gICAgY29uc3QgdG9kb0Rlc2NQcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZG9EZXNjUHJvcGVydHkudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgdG9kb0Rlc2NQcm9wZXJ0eS5jbGFzc05hbWUgPSAndG9kby1kZXNjJztcclxuXHJcbiAgICBjb25zdCB0b2RvRHVlRGF0ZVByb3BlcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9kb0R1ZURhdGVQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcclxuICAgIHRvZG9EdWVEYXRlUHJvcGVydHkuY2xhc3NOYW1lID0gJ3RvZG8tZHVlRGF0ZSc7XHJcblxyXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5UHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvUHJpb3JpdHlQcm9wZXJ0eS50ZXh0Q29udGVudCA9IGAke3RvZG8ucHJpb3JpdHl9YDtcclxuICAgIHRvZG9Qcmlvcml0eVByb3BlcnR5LmNsYXNzTmFtZSA9ICd0b2RvLXByaW9yaXR5JztcclxuXHJcbiAgICBjb25zdCBtb2RpZnlUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBtb2RpZnlUb2RvQnRuLmlubmVySFRNTCA9ICdFZGl0JztcclxuICAgIG1vZGlmeVRvZG9CdG4uY2xhc3NOYW1lID0gJ3VwZGF0ZS10b2RvLWJ0bic7XHJcbiAgICBtb2RpZnlUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdUb2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdG9kby1jcmVhdGlvbi1mb3JtJyk7XHJcbiAgICAgIG5ld1RvZG9Gb3JtLnJlbW92ZSgpO1xyXG4gICAgICBtb2RpZnlUb2RvKHRvZG8pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVUb2RvQnRuLmlubmVyVGV4dCA9ICdkZWxldGUnO1xyXG4gICAgZGVsZXRlVG9kb0J0bi5pZCA9ICd0b2RvLWRsdC1idG4nO1xyXG4gICAgZGVsZXRlVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFRvZG9JZHggPSBjdXJyZW50UHJvamVjdC50b2Rvcy5maW5kSW5kZXgoIChlYWNoVG9kbyk9PmVhY2hUb2RvLnRpdGxlID09PSB0b2RvLnRpdGxlKTtcclxuICAgICAgY3VycmVudFByb2plY3QudG9kb3Muc3BsaWNlKGN1cnJlbnRUb2RvSWR4LCAxKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcclxuICAgICAgc2hvd1RvZG9zKGN1cnJlbnRQcm9qZWN0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRvZG9DYXJkLmFwcGVuZCh0b2RvVGl0bGVQcm9wZXJ0eSwgdG9kb0Rlc2NQcm9wZXJ0eSwgdG9kb1ByaW9yaXR5UHJvcGVydHksIHRvZG9EdWVEYXRlUHJvcGVydHksIG1vZGlmeVRvZG9CdG4sIGRlbGV0ZVRvZG9CdG4pO1xyXG4gICAgdG9kb1NlY3Rpb24uYXBwZW5kKHRvZG9DYXJkKTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gbmV3IHRvZG8gY3JlYXRpb24gZm9ybVxyXG5cclxuY29uc3QgbmV3VG9kb0NyZWF0aW9uRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgbmV3VG9kb0Zvcm0uaWQgPSAnbmV3LXRvZG8tY3JlYXRpb24tZm9ybSc7XHJcbiAgY29uc3QgdG9kb1RpdGxlICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAndG9kbyB0aXRsZScpO1xyXG4gIHRvZG9UaXRsZS5pZCA9ICd0b2RvLXRpdGxlJztcclxuXHJcbiAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRvZG9EZXNjLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdzb21lIGRlc2NyaXB0aW9uLi4nKTtcclxuICB0b2RvRGVzYy5pZCA9ICd0b2RvLWRlc2MnO1xyXG5cclxuICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2R1ZSBkYXRlJyk7XHJcbiAgdG9kb0R1ZURhdGUuaWQgPSAndG9kby1wcmlvcml0eSc7XHJcblxyXG4gIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XHJcbiAgdG9kb1ByaW9yaXR5LmlkID0gJ3RvZG8tZHVlRGF0ZSc7XHJcblxyXG4gIGNvbnN0IHRvZG9Qcmlvcml0aWVzID0gWydWZXJ5IGhpZ2gnLCAnSGlnaCcsICdNb2RlcmF0ZScsICdMb3cnLCAnVXNlbGVzcyddO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB0b2RvUHJpb3JpdGllcy5tYXAoKHByaW9yaXR5KSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3ZhbHVlfVwiPiR7cHJpb3JpdHl9PC9vcHRpb24+YDtcclxuICB9KTtcclxuICB0b2RvUHJpb3JpdHkuaW5uZXJIVE1MID0gb3B0aW9ucztcclxuXHJcbiAgY29uc3QgdG9kb1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgdG9kb1N1Ym1pdC5pZCA9ICd0b2RvLWZvcm0tc3VibWl0JztcclxuXHJcbiAgbmV3VG9kb0Zvcm0uYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0Rlc2MsIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIHRvZG9TdWJtaXQpO1xyXG4gIHByb2plY3RUb2Rvcy5pbm5lckhUTUwgPSAnJztcclxuICBwcm9qZWN0VG9kb3MuYXBwZW5kKG5ld1RvZG9Gb3JtKTtcclxuXHJcbiAgbmV3VG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKS52YWx1ZTsgXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2MnKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHknKS52YWx1ZTtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWVEYXRlJykudmFsdWU7XHJcbiAgICBjb25zdCBuZXdUb2RvVmFsdWVzID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSk7IFxyXG4gICAgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SWR4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KCAocHJvamVjdCk9PnByb2plY3QudGl0bGUgPT09IGN1cnJlbnRQcm9qZWN0LnRpdGxlKTtcclxuICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWR4XS50b2Rvcy5wdXNoKG5ld1RvZG9WYWx1ZXMpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xyXG4gICAgc2hvd1RvZG9zKGN1cnJlbnRQcm9qZWN0KTtcclxuICB9KTtcclxuICByZXR1cm4gbmV3VG9kb0Zvcm07XHJcbn07XHJcblxyXG5jb25zdCBtb2RpZnlUb2RvID0gKHRvZG8pID0+IHtcclxuXHJcbiAgY29uc3QgbW9kaWZ5VG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgbW9kaWZ5VG9kb0Zvcm0uaWQgPSAnbW9kaWZ5LXRvZG8tZm9ybSc7XHJcbiAgY29uc3QgdG9kb1RpdGxlICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAndG9kbyB0aXRsZScpO1xyXG4gIHRvZG9UaXRsZS5pZCA9ICd0b2RvLXRpdGxlLW1vZGlmeSc7XHJcblxyXG4gIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIHRvZG9EZXNjLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnc29tZSBkZXNjcmlwdGlvbi4uJyk7XHJcbiAgdG9kb0Rlc2MuaWQgPSAndG9kby1kZXNjLW1vZGlmeSc7XHJcblxyXG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZHVlIGRhdGUnKTtcclxuICB0b2RvRHVlRGF0ZS5pZCA9ICd0b2RvLXByaW9yaXR5LW1vZGlmeSc7XHJcblxyXG4gIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XHJcbiAgdG9kb1ByaW9yaXR5LmlkID0gJ3RvZG8tZHVlRGF0ZS1tb2RpZnknO1xyXG5cclxuICBjb25zdCB0b2RvUHJpb3JpdGllcyA9IFsnVmVyeSBoaWdoJywgJ0hpZ2gnLCAnTW9kZXJhdGUnLCAnTG93JywgJ1VzZWxlc3MnXTtcclxuICBjb25zdCBvcHRpb25zID0gdG9kb1ByaW9yaXRpZXMubWFwKChwcmlvcml0eSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBwcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGA8b3B0aW9uIHZhbHVlPVwiJHt2YWx1ZX1cIj4ke3ByaW9yaXR5fTwvb3B0aW9uPmA7XHJcbiAgfSk7XHJcbiAgdG9kb1ByaW9yaXR5LmlubmVySFRNTCA9IG9wdGlvbnM7XHJcblxyXG4gIGNvbnN0IHRvZG9TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRvZG9TdWJtaXQudmFsdWUgPSAnVXBkYXRlIFRvZG8nO1xyXG4gIHRvZG9TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gIHRvZG9TdWJtaXQuaWQgPSAndG9kby1mb3JtLXN1Ym1pdC1tb2RpZnknO1xyXG5cclxuICBtb2RpZnlUb2RvRm9ybS5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRGVzYywgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgdG9kb1N1Ym1pdCk7XHJcbiAgcHJvamVjdFRvZG9zLmFwcGVuZChtb2RpZnlUb2RvRm9ybSk7XHJcblxyXG4gIG1vZGlmeVRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgY29uc3QgY3VycmVudFByb2plY3RJZHggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoIChwcm9qZWN0KT0+cHJvamVjdC50aXRsZSA9PT0gY3VycmVudFByb2plY3QudGl0bGUpO1xyXG4gICAgY29uc3QgY3VycmVudFRvZG9JZHggPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdElkeF0udG9kb3MuZmluZEluZGV4KCAoZWFjaFRvZG8pPT5lYWNoVG9kby50aXRsZSA9PT0gdG9kby50aXRsZSk7XHJcbiAgICBjb25zdCBjdXJyZW50VG9kbyA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWR4XS50b2Rvc1tjdXJyZW50VG9kb0lkeF07XHJcbiAgICBjdXJyZW50VG9kby50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlLW1vZGlmeScpLnZhbHVlOyBcclxuICAgIGN1cnJlbnRUb2RvLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzYy1tb2RpZnknKS52YWx1ZTtcclxuICAgIGN1cnJlbnRUb2RvLnByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHktbW9kaWZ5JykudmFsdWU7XHJcbiAgICBjdXJyZW50VG9kby5kdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZHVlRGF0ZS1tb2RpZnknKS52YWx1ZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XHJcbiAgICBzaG93VG9kb3MoY3VycmVudFByb2plY3QpO1xyXG4gICAgY29uc3QgbW9kaWZ5VG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kaWZ5LXRvZG8tZm9ybScpO1xyXG4gICAgbW9kaWZ5VG9kb0Zvcm0ucmVtb3ZlKCk7XHJcbiAgICBuZXdUb2RvQ3JlYXRpb25Gb3JtKCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG1vZGlmeVRvZG9Gb3JtO1xyXG59XHJcbiBcclxuY29uc3QgbG9jYWxTdG9yYWdlT25Mb2FkID0gKCkgPT4ge1xyXG4gIHNob3dQcm9qZWN0cygpO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbG9jYWxTdG9yYWdlT25Mb2FkKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==