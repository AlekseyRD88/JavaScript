'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = (tasksList) => {
  const listElem = document.querySelector('.list');

  const listTasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listTaskElem = document.createElement('li');
      listTaskElem.classList.add('list__item');
      if (done) {
        listTaskElem.classList.add('list__item_done');
      }
      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.setAttribute('checked', done);
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      listTaskElem.append(checkboxElem, text);
      return listTaskElem;
    });
  listElem.append(...listTasksElems);
};
renderTasks(tasks);
