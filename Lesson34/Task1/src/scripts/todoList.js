import { onCreateTask } from './createTask.js';
import { deleteTask } from './tasksGateway.js';
import { onToggleTask } from './updateTask.js';
//import { createListItem } from './renderer.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  const onListClick = (event) => {
    if (event === checkboxElem) {
      onToggleTask();
    } else if ((event = deleteBtnElem)) {
      deleteTask();
    }
  };
  todoListElem.addEventListener('click', onListClick);
};
