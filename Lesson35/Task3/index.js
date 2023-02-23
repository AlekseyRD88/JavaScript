import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};
renderUserData(defaultUser);
const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((reposList) => {
      renderRepos(reposList);
    })
    .catch((err) => {
      alert(err.message);
    })
    .finally(() => {
      hideSpinner();
    });
};
showUserBtnElem.addEventListener('click', onSearchUser);

/*
export const fetchUser = async userId => {
  // put your code here
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
  if (!response.ok) {
    return null;
  }
  const userData = await response.json();
  return userData;
  } catch (err) {
    throw new Error('Failed to get user data');
  }  
};
*/

export const getUsersBlogs = async (users) => {
  // put your code here
  try {
    const requests = users.map((user) => fetch(`https://api.github.com/users/${user}`).then((response) => response.json()));
    const usersData = await Promise.all(requests);
    return usersData.map(({ blog }) => blog);
  } catch (err) {
    err.message;
  }
};

// examples
//getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
//getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
