import { v4 } from 'uuid';

export const sortDocuments = (documents, type) => {
  documents.sort((a, b) => b[type] - a[type]);
  return documents;
};

export const getDataFromCookie = (key) => {
  const allCookies = document.cookie.split(';');

  const cookie = allCookies.filter((cookie) => {
    return cookie.includes(`_${key}_`);
  });

  return cookie.length >= 1 && cookie[0].trim().split('=')[1];
};

export const setCookie = (key, value) => {
  const currentDate = new Date();
  const expiryDate = new Date(
    currentDate.getFullYear() + 1,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  document.cookie = `_${key}_=${value};path=/;expires=${expiryDate}`;
};

export const deleteCookie = (key) => {
  const date = new Date(1970, 1, 1);
  document.cookie = `_${key}_=; expires=${date.toUTCString()}; path=/`;
  document.cookie = `_${key}_=; expires=${date.toUTCString()}; path=/admin`;
};

export const colors = {
  javascript: '#f0db4f',
  react: '#61dafb',
  vue: '#41B883',
  node: '#3C873A',
  python: '#4b8bbe',
};

// for recording likes and views in local storage
export const recordMember = (id, name) => {
  const members = JSON.parse(localStorage.getItem(name));
  const newMembers = [];
  if (Array.isArray(members)) {
    newMembers.push(...members);
  }
  newMembers.push({ id });
  localStorage.setItem(name, JSON.stringify(newMembers));
};

export const verifyMember = (id, name) => {
  const members = JSON.parse(localStorage.getItem(name));
  const member = Array.isArray(members)
    ? members.find((member) => member.id === id)
    : undefined;
  return member ? member.id : false;
};

export const url = 'https://sortcode-api.herokuapp.com/api/';

export const signIn = () => {
  const state = v4();
  localStorage.setItem('github-state', state);
  window.location = `https://github.com/login/oauth/authorize?client_id=2c05d57e6bffd2b25207&state=${state}`;
};
