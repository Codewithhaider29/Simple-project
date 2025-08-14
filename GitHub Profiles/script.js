/**
    * @description      : JavaScript for GitHub Profiles Search
    * @author           : Haider Ali
    * @group            : 
    * @created          : 31/08/2024 - 11:38:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/08/2024
    * - Author          : Haider Ali
    * - Modification    : Initial creation
    * 
    * - Version         : 1.0.1
    * - Date            : 01/09/2024
    * - Author          : Haider Ali
    * - Modification    : Added error handling and cleaned up code
**/

const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");

const createUserCard = (user) => {
  const cardHTML = `
    <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt="${user.name || user.login}"
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${user.name || user.login}</h2>
          <p>${user.bio ? user.bio : "This user has no bio."}</p>
          <ul>
            <li>${user.followers}<strong> Followers </strong></li>
            <li>${user.following}<strong> Following </strong></li>
            <li>${user.public_repos}<strong> Repos </strong></li>
          </ul>
          <div id="repos"></div>
        </div>
    </div>
  `;
  main.innerHTML = cardHTML;
};

const createErrorCard = (message) => {
  const cardHTML = `
    <div class="card"><h1>${message}</h1></div>
  `;
  main.innerHTML = cardHTML;
};

const addReposToCard = (repos) => {
  const reposElement = document.getElementById("repos");
  repos.slice(0, 5).forEach((repo) => {
    const repoElement = document.createElement("a");
    repoElement.classList.add("repo");
    repoElement.href = repo.html_url;
    repoElement.target = "_blank";
    repoElement.innerText = repo.name;
    reposElement.appendChild(repoElement);
  });
};

const getUser = async (username) => {
  try {
    const response = await axios.get(APIURL + username);
    createUserCard(response.data);
    getRepos(username);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      createErrorCard("No profile with this username");
    } else {
      createErrorCard("An error occurred while fetching the profile");
    }
  }
};

const getRepos = async (username) => {
  try {
    const response = await axios.get(APIURL + username + "/repos?sort=created");
    addReposToCard(response.data);
  } catch (error) {
    createErrorCard("Problem fetching repos");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value.trim();
  if (user) {
    getUser(user);
    search.value = "";
  }
});
