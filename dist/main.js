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
    todos.push(todo);
  }

  getTodo = (todoTitle) => {
    let myTodo;
    todos.forEach((todo) => {
      if (todo.getTitle() === todoTitle) {
        myTodo = todo;
      }
    });
    return myTodo;
  }

  deleteTodo = (todoTitle) => {
    todos.forEach((todo, idx) => {
      if (todo.getTitle() === todoTitle) {
        todos.splice(idx, 1);
      }
    });
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


const allProjects = [ new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project('default')];
let currentProject = allProjects[0];

// Loop thru each project and display it


const showProjects = () => {
  const projectSection = document.getElementById('all-projects');
  projectSection.innerHTML = '';
  allProjects.forEach((project, idx) => {
    const newProjectCard = projectCard(project, idx);
    console.log(newProjectCard, 'newdp;askd');
    projectSection.append(newProjectCard);
  });
}


// function to create a project card
const projectCard = (project, idx) => {
  const projectDiv = document.createElement('div');
  projectDiv.style.margin = '0.5rem';
  projectDiv.textContent = project.title;
  projectDiv.dataset.index = idx;
  projectDiv.addEventListener('click', onProjectClick);
  return projectDiv;
}

const onProjectClick = (e) => {
  const projectDiv = e.target;
  const index = Number(projectDiv.dataset.index);
  const clickedProject = allProjects[index];

  console.log(clickedProject)
  if (currentProject !== clickedProject) {
    currentProject = clickedProject;
    const todoSection = document.getElementById('project-todos');
    todoSection.innerHTML = '';
    currentProject.todos.forEach((todo) => {
      const todoCard = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, priority, dueDate);
      todoCard.append(todoSection);

    });
  }
}

// Add an event listener for project creation and push it into all projects
const form = document.getElementById('input-form');
form.addEventListener('submit', (e)=> {
  e.preventDefault();
  const projectName = title.value;
  const newProject = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);
  allProjects.push(newProject);
  console.log(allProjects, 'asdfa')
  showProjects();
});


// Todo creation form

const todoCreationForm = () => {
 
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

  const updateTodo = document.createElement('button');
  updateTodo.innerHTML = 'change';
  updateTodo.className = 'update-todo-btn';
  updateTodo.addEventListener('click', () => {
    modifyTodo(todo, project)
  });

  todoCard.append(todoTitleProperty, todoDescProperty, todoPriorityProperty, todoDueDateProperty, updateTodo);
  return todoCard;
}

// Build a todo 
const createTodo = (project) => {
  const title = document.querySelector('.todo-title').value;
  const description = document.querySelector('.todo-desc').value;
  const priority = document.querySelector('.todo-priority'.value);
  const dueDate = document.querySelector('.todo-dueDate'.value);
  const todoObjects = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, priority, dueDate);
  project.addTodo(todoObjects);

}


// update a todo
const modifyTodo = (todo, project) => {
  const todoForm = document.createElement('form');
  const todoTitle  = document.createElement('input');
  todoTitle.setAttribute('type', 'text');
  todoTitle.setAttribute('placeholder', 'todo title');
  todoTitle.className = 'todo-form-input';

  const todoDesc = document.createElement('input');
  todoDesc.setAttribute('type', 'text');
  todoDesc.setAttribute('placeholder', 'some description..');
  todoDesc.className = 'todo-form-input';

  const todoDueDate = document.createElement('input');
  todoDueDate.setAttribute('type', 'date');
  todoDueDate.setAttribute('placeholder', 'due date');
  todoDueDate.className = 'todo-form-input';

  const todoPriority = document.createElement('input');
  todoPriority.setAttribute('type', 'select');
  todoPriority.className = 'todo-form-input';
  todoPriorities = ['Very high', 'High', 'Moderate', 'Low', 'Useless'];

  const options = todoPriorities.map((priority) => {
    const value = priority.toLowerCase();
    return `<option value="${value}">${priority}</option>`;
  });
  todoPriority.innerHTML = 'options';

  const todoSubmit = document.createElement('input');
  todoSubmit.setAttribute('type', 'submit');
  todoSubmit.className = 'todo-form-submit';

  todoForm.append(todoTitle, todoDesc, todoDueDate, todoPriority, todoSubmit);
  const projectTodos = document.querySelector('#project-todos');
  projectTodos.append(todoForm);

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, priority, dueDate);
    currentProject.addTodo(newTodo);
  });
  return todoForm
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDekNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkM7QUFDN0M7QUFDQSwwQkFBMEIsZ0RBQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZDQUFJO0FBQy9CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnREFBTztBQUNoQztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixNQUFNLElBQUksU0FBUztBQUNoRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZDQUFJO0FBQzVCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvID0gKHRvZG8pID0+IHtcclxuICAgIHRvZG9zLnB1c2godG9kbyk7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvID0gKHRvZG9UaXRsZSkgPT4ge1xyXG4gICAgbGV0IG15VG9kbztcclxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgaWYgKHRvZG8uZ2V0VGl0bGUoKSA9PT0gdG9kb1RpdGxlKSB7XHJcbiAgICAgICAgbXlUb2RvID0gdG9kbztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbXlUb2RvO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9kbyA9ICh0b2RvVGl0bGUpID0+IHtcclxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGlkeCkgPT4ge1xyXG4gICAgICBpZiAodG9kby5nZXRUaXRsZSgpID09PSB0b2RvVGl0bGUpIHtcclxuICAgICAgICB0b2Rvcy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGFzc2lnblByaW9yaXR5ID0gKGdpdmVuUHJpb3JpdHkpID0+IHtcclxuICAgIHByaW9yaXR5ID0gZ2l2ZW5Qcmlvcml0eVxyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFByb2plY3QsIFRvZG8gfSAgZnJvbSAnLi9jbGFzc2VzLmpzJ1xyXG5cclxuY29uc3QgYWxsUHJvamVjdHMgPSBbIG5ldyBQcm9qZWN0KCdkZWZhdWx0JyldO1xyXG5sZXQgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0c1swXTtcclxuXHJcbi8vIExvb3AgdGhydSBlYWNoIHByb2plY3QgYW5kIGRpc3BsYXkgaXRcclxuXHJcblxyXG5jb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXByb2plY3RzJyk7XHJcbiAgcHJvamVjdFNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaWR4KSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0Q2FyZCA9IHByb2plY3RDYXJkKHByb2plY3QsIGlkeCk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0Q2FyZCwgJ25ld2RwO2Fza2QnKTtcclxuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZChuZXdQcm9qZWN0Q2FyZCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBjcmVhdGUgYSBwcm9qZWN0IGNhcmRcclxuY29uc3QgcHJvamVjdENhcmQgPSAocHJvamVjdCwgaWR4KSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHByb2plY3REaXYuc3R5bGUubWFyZ2luID0gJzAuNXJlbSc7XHJcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgcHJvamVjdERpdi5kYXRhc2V0LmluZGV4ID0gaWR4O1xyXG4gIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblByb2plY3RDbGljayk7XHJcbiAgcmV0dXJuIHByb2plY3REaXY7XHJcbn1cclxuXHJcbmNvbnN0IG9uUHJvamVjdENsaWNrID0gKGUpID0+IHtcclxuICBjb25zdCBwcm9qZWN0RGl2ID0gZS50YXJnZXQ7XHJcbiAgY29uc3QgaW5kZXggPSBOdW1iZXIocHJvamVjdERpdi5kYXRhc2V0LmluZGV4KTtcclxuICBjb25zdCBjbGlja2VkUHJvamVjdCA9IGFsbFByb2plY3RzW2luZGV4XTtcclxuXHJcbiAgY29uc29sZS5sb2coY2xpY2tlZFByb2plY3QpXHJcbiAgaWYgKGN1cnJlbnRQcm9qZWN0ICE9PSBjbGlja2VkUHJvamVjdCkge1xyXG4gICAgY3VycmVudFByb2plY3QgPSBjbGlja2VkUHJvamVjdDtcclxuICAgIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kb3MnKTtcclxuICAgIHRvZG9TZWN0aW9uLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY3VycmVudFByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgICBjb25zdCB0b2RvQ2FyZCA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpO1xyXG4gICAgICB0b2RvQ2FyZC5hcHBlbmQodG9kb1NlY3Rpb24pO1xyXG5cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBwcm9qZWN0IGNyZWF0aW9uIGFuZCBwdXNoIGl0IGludG8gYWxsIHByb2plY3RzXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9ybScpO1xyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSB0aXRsZS52YWx1ZTtcclxuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgY29uc29sZS5sb2coYWxsUHJvamVjdHMsICdhc2RmYScpXHJcbiAgc2hvd1Byb2plY3RzKCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIFRvZG8gY3JlYXRpb24gZm9ybVxyXG5cclxuY29uc3QgdG9kb0NyZWF0aW9uRm9ybSA9ICgpID0+IHtcclxuIFxyXG4gIGNvbnN0IHRvZG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9kb0NhcmQuY2xhc3NOYW1lID0gJ3RvZG8tY2FyZCc7XHJcblxyXG4gIGNvbnN0IHRvZG9UaXRsZVByb3BlcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICB0b2RvVGl0bGVQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XHJcbiAgdG9kb1RpdGxlUHJvcGVydHkuY2xhc3NOYW1lID0gJ3RvZG8tdGl0bGUnO1xyXG5cclxuICBjb25zdCB0b2RvRGVzY1Byb3BlcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHRvZG9EZXNjUHJvcGVydHkudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG4gIHRvZG9EZXNjUHJvcGVydHkuY2xhc3NOYW1lID0gJ3RvZG8tZGVzYyc7XHJcblxyXG4gIGNvbnN0IHRvZG9EdWVEYXRlUHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgdG9kb0R1ZURhdGVQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcclxuICB0b2RvRHVlRGF0ZVByb3BlcnR5LmNsYXNzTmFtZSA9ICd0b2RvLWR1ZURhdGUnO1xyXG5cclxuICBjb25zdCB0b2RvUHJpb3JpdHlQcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB0b2RvUHJpb3JpdHlQcm9wZXJ0eS50ZXh0Q29udGVudCA9IGAke3RvZG8ucHJpb3JpdHl9YDtcclxuICB0b2RvUHJpb3JpdHlQcm9wZXJ0eS5jbGFzc05hbWUgPSAndG9kby1wcmlvcml0eSc7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICB1cGRhdGVUb2RvLmlubmVySFRNTCA9ICdjaGFuZ2UnO1xyXG4gIHVwZGF0ZVRvZG8uY2xhc3NOYW1lID0gJ3VwZGF0ZS10b2RvLWJ0bic7XHJcbiAgdXBkYXRlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1vZGlmeVRvZG8odG9kbywgcHJvamVjdClcclxuICB9KTtcclxuXHJcbiAgdG9kb0NhcmQuYXBwZW5kKHRvZG9UaXRsZVByb3BlcnR5LCB0b2RvRGVzY1Byb3BlcnR5LCB0b2RvUHJpb3JpdHlQcm9wZXJ0eSwgdG9kb0R1ZURhdGVQcm9wZXJ0eSwgdXBkYXRlVG9kbyk7XHJcbiAgcmV0dXJuIHRvZG9DYXJkO1xyXG59XHJcblxyXG4vLyBCdWlsZCBhIHRvZG8gXHJcbmNvbnN0IGNyZWF0ZVRvZG8gPSAocHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tdGl0bGUnKS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRlc2MnKS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXByaW9yaXR5Jy52YWx1ZSk7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWR1ZURhdGUnLnZhbHVlKTtcclxuICBjb25zdCB0b2RvT2JqZWN0cyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpO1xyXG4gIHByb2plY3QuYWRkVG9kbyh0b2RvT2JqZWN0cyk7XHJcblxyXG59XHJcblxyXG5cclxuLy8gdXBkYXRlIGEgdG9kb1xyXG5jb25zdCBtb2RpZnlUb2RvID0gKHRvZG8sIHByb2plY3QpID0+IHtcclxuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBjb25zdCB0b2RvVGl0bGUgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICd0b2RvIHRpdGxlJyk7XHJcbiAgdG9kb1RpdGxlLmNsYXNzTmFtZSA9ICd0b2RvLWZvcm0taW5wdXQnO1xyXG5cclxuICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3NvbWUgZGVzY3JpcHRpb24uLicpO1xyXG4gIHRvZG9EZXNjLmNsYXNzTmFtZSA9ICd0b2RvLWZvcm0taW5wdXQnO1xyXG5cclxuICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2R1ZSBkYXRlJyk7XHJcbiAgdG9kb0R1ZURhdGUuY2xhc3NOYW1lID0gJ3RvZG8tZm9ybS1pbnB1dCc7XHJcblxyXG4gIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdzZWxlY3QnKTtcclxuICB0b2RvUHJpb3JpdHkuY2xhc3NOYW1lID0gJ3RvZG8tZm9ybS1pbnB1dCc7XHJcbiAgdG9kb1ByaW9yaXRpZXMgPSBbJ1ZlcnkgaGlnaCcsICdIaWdoJywgJ01vZGVyYXRlJywgJ0xvdycsICdVc2VsZXNzJ107XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB0b2RvUHJpb3JpdGllcy5tYXAoKHByaW9yaXR5KSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3ZhbHVlfVwiPiR7cHJpb3JpdHl9PC9vcHRpb24+YDtcclxuICB9KTtcclxuICB0b2RvUHJpb3JpdHkuaW5uZXJIVE1MID0gJ29wdGlvbnMnO1xyXG5cclxuICBjb25zdCB0b2RvU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0b2RvU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICB0b2RvU3VibWl0LmNsYXNzTmFtZSA9ICd0b2RvLWZvcm0tc3VibWl0JztcclxuXHJcbiAgdG9kb0Zvcm0uYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0Rlc2MsIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIHRvZG9TdWJtaXQpO1xyXG4gIGNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRvZG9zJyk7XHJcbiAgcHJvamVjdFRvZG9zLmFwcGVuZCh0b2RvRm9ybSk7XHJcblxyXG4gIHRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSk7XHJcbiAgICBjdXJyZW50UHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xyXG4gIH0pO1xyXG4gIHJldHVybiB0b2RvRm9ybVxyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9