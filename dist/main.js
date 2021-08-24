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

  deleteTodo = (todoTitle) => {
    this.todos.forEach((todo, idx) => {
      if (todo.title === todoTitle) {
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
const todoSection = document.getElementById('project-todos');

// Loop thru each project and display it


const showProjects = () => {
  const projectSection = document.getElementById('all-projects');
  projectSection.innerHTML = '';
  allProjects.forEach((project, idx) => {
    const newProjectCard = projectCard(project, idx);
    projectSection.append(newProjectCard);
  });
}


// function to create a project card
const projectCard = (project, idx) => {
  const projectDiv = document.createElement('div');
  projectDiv.textContent = project.title;
  projectDiv.dataset.index = idx;
  projectDiv.addEventListener('click', onProjectClick);
  return projectDiv;
}

const onProjectClick = (e) => {
  const projectDiv = e.target;
  const index = Number(projectDiv.dataset.index);
  const clickedProject = allProjects[index];

  if (currentProject !== clickedProject) {
    currentProject = clickedProject;
    todoSection.innerHTML = '';
      showTodos(currentProject);
      newTodoCreationForm(currentProject);
  }
  return projectDiv;
}

// Add an event listener for project creation and push it into all projects
const form = document.getElementById('input-form');
form.addEventListener('submit', (e)=> {
  e.preventDefault();
  const projectName = title.value;
  const newProject = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);
  allProjects.push(newProject);
  showProjects();
});



const showTodos = ( currentProject) => {
todoSection.innerHTML = '';
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

  const updateTodo = document.createElement('button');
  updateTodo.innerHTML = 'change';
  updateTodo.className = 'update-todo-btn';
  updateTodo.addEventListener('click', () => {
    modifyTodo(todo, project)
  });

  todoCard.append(todoTitleProperty, todoDescProperty, todoPriorityProperty, todoDueDateProperty, updateTodo);
  todoSection.append(todoCard);
});

}


// new todo creation form

const newTodoCreationForm = () => {

  const newTodoForm = document.createElement('form');
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
  todoPriority.innerHTML = 'options';

  const todoSubmit = document.createElement('input');
  todoSubmit.setAttribute('type', 'submit');
  todoSubmit.id = 'todo-form-submit';

  newTodoForm.append(todoTitle, todoDesc, todoDueDate, todoPriority, todoSubmit);
  const projectTodos = document.getElementById('todo-creation-form');
  projectTodos.append(newTodoForm);

  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('todo-title').value;
    
    const description = document.getElementById('todo-desc').value;
    const priority = document.getElementById('todo-priority').value;
    const dueDate = document.getElementById('todo-dueDate').value;
    const newTodoValues = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, priority, dueDate);
    console.log(title, description, priority, dueDate);
    currentProject.addTodo(newTodoValues);
    showTodos(currentProject);
  });
  return newTodoForm;
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDekNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkM7QUFDN0M7QUFDQSwwQkFBMEIsZ0RBQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFPO0FBQ2hDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixNQUFNLElBQUksU0FBUztBQUNoRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2Q0FBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvID0gKHRvZG8pID0+IHtcclxuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICB9XHJcblxyXG4gIGdldFRvZG8gPSAodG9kb1RpdGxlKSA9PiB7XHJcbiAgICBsZXQgbXlUb2RvO1xyXG4gICAgdGhpcy50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgIGlmICh0b2RvLlRpdGxlKCkgPT09IHRvZG9UaXRsZSkge1xyXG4gICAgICAgIG15VG9kbyA9IHRvZG87XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG15VG9kbztcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG8gPSAodG9kb1RpdGxlKSA9PiB7XHJcbiAgICB0aGlzLnRvZG9zLmZvckVhY2goKHRvZG8sIGlkeCkgPT4ge1xyXG4gICAgICBpZiAodG9kby50aXRsZSA9PT0gdG9kb1RpdGxlKSB7XHJcbiAgICAgICAgdG9kb3Muc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBhc3NpZ25Qcmlvcml0eSA9IChnaXZlblByaW9yaXR5KSA9PiB7XHJcbiAgICBwcmlvcml0eSA9IGdpdmVuUHJpb3JpdHlcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQcm9qZWN0LCBUb2RvIH0gIGZyb20gJy4vY2xhc3Nlcy5qcydcclxuXHJcbmNvbnN0IGFsbFByb2plY3RzID0gWyBuZXcgUHJvamVjdCgnZGVmYXVsdCcpXTtcclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gYWxsUHJvamVjdHNbMF07XHJcbmNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kb3MnKTtcclxuXHJcbi8vIExvb3AgdGhydSBlYWNoIHByb2plY3QgYW5kIGRpc3BsYXkgaXRcclxuXHJcblxyXG5jb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXByb2plY3RzJyk7XHJcbiAgcHJvamVjdFNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaWR4KSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0Q2FyZCA9IHByb2plY3RDYXJkKHByb2plY3QsIGlkeCk7XHJcbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmQobmV3UHJvamVjdENhcmQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGEgcHJvamVjdCBjYXJkXHJcbmNvbnN0IHByb2plY3RDYXJkID0gKHByb2plY3QsIGlkeCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuICBwcm9qZWN0RGl2LmRhdGFzZXQuaW5kZXggPSBpZHg7XHJcbiAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uUHJvamVjdENsaWNrKTtcclxuICByZXR1cm4gcHJvamVjdERpdjtcclxufVxyXG5cclxuY29uc3Qgb25Qcm9qZWN0Q2xpY2sgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3REaXYgPSBlLnRhcmdldDtcclxuICBjb25zdCBpbmRleCA9IE51bWJlcihwcm9qZWN0RGl2LmRhdGFzZXQuaW5kZXgpO1xyXG4gIGNvbnN0IGNsaWNrZWRQcm9qZWN0ID0gYWxsUHJvamVjdHNbaW5kZXhdO1xyXG5cclxuICBpZiAoY3VycmVudFByb2plY3QgIT09IGNsaWNrZWRQcm9qZWN0KSB7XHJcbiAgICBjdXJyZW50UHJvamVjdCA9IGNsaWNrZWRQcm9qZWN0O1xyXG4gICAgdG9kb1NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIHNob3dUb2RvcyhjdXJyZW50UHJvamVjdCk7XHJcbiAgICAgIG5ld1RvZG9DcmVhdGlvbkZvcm0oY3VycmVudFByb2plY3QpO1xyXG4gIH1cclxuICByZXR1cm4gcHJvamVjdERpdjtcclxufVxyXG5cclxuLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBwcm9qZWN0IGNyZWF0aW9uIGFuZCBwdXNoIGl0IGludG8gYWxsIHByb2plY3RzXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9ybScpO1xyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSB0aXRsZS52YWx1ZTtcclxuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgc2hvd1Byb2plY3RzKCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5jb25zdCBzaG93VG9kb3MgPSAoIGN1cnJlbnRQcm9qZWN0KSA9PiB7XHJcbnRvZG9TZWN0aW9uLmlubmVySFRNTCA9ICcnO1xyXG5jdXJyZW50UHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgdG9kb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b2RvQ2FyZC5jbGFzc05hbWUgPSAndG9kby1jYXJkJztcclxuXHJcbiAgY29uc3QgdG9kb1RpdGxlUHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gIHRvZG9UaXRsZVByb3BlcnR5LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcclxuICB0b2RvVGl0bGVQcm9wZXJ0eS5jbGFzc05hbWUgPSAndG9kby10aXRsZSc7XHJcblxyXG4gIGNvbnN0IHRvZG9EZXNjUHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgdG9kb0Rlc2NQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XHJcbiAgdG9kb0Rlc2NQcm9wZXJ0eS5jbGFzc05hbWUgPSAndG9kby1kZXNjJztcclxuXHJcbiAgY29uc3QgdG9kb0R1ZURhdGVQcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB0b2RvRHVlRGF0ZVByb3BlcnR5LnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xyXG4gIHRvZG9EdWVEYXRlUHJvcGVydHkuY2xhc3NOYW1lID0gJ3RvZG8tZHVlRGF0ZSc7XHJcblxyXG4gIGNvbnN0IHRvZG9Qcmlvcml0eVByb3BlcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHRvZG9Qcmlvcml0eVByb3BlcnR5LnRleHRDb250ZW50ID0gYCR7dG9kby5wcmlvcml0eX1gO1xyXG4gIHRvZG9Qcmlvcml0eVByb3BlcnR5LmNsYXNzTmFtZSA9ICd0b2RvLXByaW9yaXR5JztcclxuXHJcbiAgY29uc3QgdXBkYXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHVwZGF0ZVRvZG8uaW5uZXJIVE1MID0gJ2NoYW5nZSc7XHJcbiAgdXBkYXRlVG9kby5jbGFzc05hbWUgPSAndXBkYXRlLXRvZG8tYnRuJztcclxuICB1cGRhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9kaWZ5VG9kbyh0b2RvLCBwcm9qZWN0KVxyXG4gIH0pO1xyXG5cclxuICB0b2RvQ2FyZC5hcHBlbmQodG9kb1RpdGxlUHJvcGVydHksIHRvZG9EZXNjUHJvcGVydHksIHRvZG9Qcmlvcml0eVByb3BlcnR5LCB0b2RvRHVlRGF0ZVByb3BlcnR5LCB1cGRhdGVUb2RvKTtcclxuICB0b2RvU2VjdGlvbi5hcHBlbmQodG9kb0NhcmQpO1xyXG59KTtcclxuXHJcbn1cclxuXHJcblxyXG4vLyBuZXcgdG9kbyBjcmVhdGlvbiBmb3JtXHJcblxyXG5jb25zdCBuZXdUb2RvQ3JlYXRpb25Gb3JtID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBuZXdUb2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBjb25zdCB0b2RvVGl0bGUgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICd0b2RvIHRpdGxlJyk7XHJcbiAgdG9kb1RpdGxlLmlkID0gJ3RvZG8tdGl0bGUnO1xyXG5cclxuICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3NvbWUgZGVzY3JpcHRpb24uLicpO1xyXG4gIHRvZG9EZXNjLmlkID0gJ3RvZG8tZGVzYyc7XHJcblxyXG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZHVlIGRhdGUnKTtcclxuICB0b2RvRHVlRGF0ZS5pZCA9ICd0b2RvLXByaW9yaXR5JztcclxuXHJcbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgdG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcclxuICB0b2RvUHJpb3JpdHkuaWQgPSAndG9kby1kdWVEYXRlJztcclxuXHJcbiAgY29uc3QgdG9kb1ByaW9yaXRpZXMgPSBbJ1ZlcnkgaGlnaCcsICdIaWdoJywgJ01vZGVyYXRlJywgJ0xvdycsICdVc2VsZXNzJ107XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHRvZG9Qcmlvcml0aWVzLm1hcCgocHJpb3JpdHkpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gcHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiBgPG9wdGlvbiB2YWx1ZT1cIiR7dmFsdWV9XCI+JHtwcmlvcml0eX08L29wdGlvbj5gO1xyXG4gIH0pO1xyXG4gIHRvZG9Qcmlvcml0eS5pbm5lckhUTUwgPSAnb3B0aW9ucyc7XHJcblxyXG4gIGNvbnN0IHRvZG9TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRvZG9TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gIHRvZG9TdWJtaXQuaWQgPSAndG9kby1mb3JtLXN1Ym1pdCc7XHJcblxyXG4gIG5ld1RvZG9Gb3JtLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EZXNjLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCB0b2RvU3VibWl0KTtcclxuICBjb25zdCBwcm9qZWN0VG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1jcmVhdGlvbi1mb3JtJyk7XHJcbiAgcHJvamVjdFRvZG9zLmFwcGVuZChuZXdUb2RvRm9ybSk7XHJcblxyXG4gIG5ld1RvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlJykudmFsdWU7XHJcbiAgICBcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzYycpLnZhbHVlO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpLnZhbHVlO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZURhdGUnKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld1RvZG9WYWx1ZXMgPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKTtcclxuICAgIGNvbnNvbGUubG9nKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpO1xyXG4gICAgY3VycmVudFByb2plY3QuYWRkVG9kbyhuZXdUb2RvVmFsdWVzKTtcclxuICAgIHNob3dUb2RvcyhjdXJyZW50UHJvamVjdCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5ld1RvZG9Gb3JtO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=