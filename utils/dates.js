const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const date = new Date();
const year = date.getFullYear();
export const thisMonth = date.getMonth();
export const prevMonth = thisMonth - 1;
const thisDay = date.getDate();

export const formattedDate = `${months[thisMonth]} ${thisDay}, ${year}`;
export const formattedMonth = months[thisMonth];
export const previousMonth = months[prevMonth]