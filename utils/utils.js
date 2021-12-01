export const sortDocument = (document, type) => {
  document.sort((a, b) => b[type] - a[type])
  return document;
}

export const getDataFromCookie = (key) => {
  const allCookies = document.cookie.split(';');

  const cookie = allCookies.filter((cookie) => {
    return cookie.includes(`_${key}_`);
  });

  return cookie.length >= 1 && cookie[0].trim().split('=')[1];
};

export const setCookie = (key, value) => {
  const currentDate = new Date();
  const expiryDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());
  document.cookie = `_${key}_=${value};path=/;expires=${expiryDate}`;
};

export const deleteCookie = (key) => {
  const date = new Date(1970, 1, 1);
  document.cookie = `_${key}_=; expires=${date.toUTCString()}; path=/`;
  document.cookie = `_${key}_=; expires=${date.toUTCString()}; path=/admin`;
};

export const colors = {
  issue: 'tomato',
  observation: '#fc929e',
  feature: '#3caf50',
  exercise: 'purple',
};

// for recording likes and views in local storage
export const recordMember = (id, name) => {
  const members = JSON.parse(localStorage.getItem(name));
  const newMembers = []
  if (Array.isArray(members)) {
    newMembers.push(...members);
  }
  newMembers.push({id});
  localStorage.setItem(name, JSON.stringify(newMembers));
}

export const verifyMember = (id, name) => {
  const members = JSON.parse(localStorage.getItem(name));
  const member = Array.isArray(members) ? members.find(member => member.id === id) : undefined;
  return member ? member.id : false;
}