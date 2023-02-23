const divElem = document.querySelector('div');
const pElem = document.querySelector('p');
const spanElem = document.querySelector('span');
const eventsListElem = document.querySelector('.events-list');

const logTarget = (text, color) => {
  const spanElem = document.createElement('span');
  spanElem.style = `color: ${color}; margin-left: 8px`;
  spanElem.textContent = text;
  eventsListElem.appendChild(spanElem);
};
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');
divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

const attachHandlers = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};

const attachHandlersBtnElem = document.querySelector('.attach-handlers-btn');
attachHandlersBtnElem.addEventListener('click', attachHandlers);
const removeHandlers = () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
};

const removeHandlersBtnElem = document.querySelector('.remove-handlers-btn');
removeHandlersBtnElem.addEventListener('click', removeHandlers);

const clearHandlers = () => {
  eventsListElem.innerHTML = '';
};

const clearHandlersElem = document.querySelector('.clear-btn');
clearHandlersElem.addEventListener('click', clearHandlers);

document.addEventListener('DOMContentLoaded', () => {
  attachHandlers();
});
