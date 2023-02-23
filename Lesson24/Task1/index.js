const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  return weekDays[new Date(dateInFuture).getDay()];
};

const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});
export const getGreenwichTime = (date) => formatter.format(date);
export const getDiff = (startDate, endDate) => {
  let startTime = new Date(startDate).getTime();
  let endTime = new Date(endDate).getTime();
  let number = (endTime - startTime) / 1000;
  let days = Math.floor(number / (3600 * 24));
  let hours = Math.floor((number - days * (3600 * 24)) / 3600);
  let minutes = Math.floor((number - days * (3600 * 24) - hours * 3600) / 60);
  let seconds = Math.floor(number - days * (3600 * 24) - hours * 3600 - minutes * 60);

  return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
};
