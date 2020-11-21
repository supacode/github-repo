'use strict';

const OAUTH_TOKEN = '';

// const username = prompt('Enter a desired username', '') || 'supacodes';
const username = 'supacodes';

// DOM Elements
const elements = {
  repoList: document.querySelector('.repo__list'),
  profileBio: document.querySelector('.profile__bio'),
  profileThumb: document.querySelector('.user-menu__avatar'),
  hamburgerBtn: document.querySelector('.hamburger__btn'),
  mainNav: document.querySelector('.main-nav'),
  searchForm: document.querySelector('.search-form'),
  siteHeader: document.querySelector('.header'),
  repoCount: document.querySelector('.repo-count'),
  usernameElements: document.querySelectorAll('[data-username]'),
  userAvatar: document.querySelectorAll('[data-avatar]'),
  profileName: document.querySelectorAll('[data-name]'),
  repoCount: document.querySelectorAll('[data-repo-count]'),
};

(async () => {
  /* 1. Utilities */
  const userData = await getData(username);

  /* 2. Init models */
  const maverick = new User({
    avatarUrl: userData.avatarUrl,
    username: userData.login,
    name: userData.name,
    bioHTML: userData.bioHTML,
    repoList: userData.repositories,
  });

  /* 2. Delegation */
  UI.setText({
    selector: elements.usernameElements,
    val: maverick.username,
  });

  UI.setAttr({
    attr: 'src',
    selector: elements.userAvatar,
    val: maverick.avatarUrl,
  });

  UI.setText({
    selector: elements.repoCount,
    val: maverick.repoList.length,
  });

  UI.setText({
    selector: elements.profileName,
    val: maverick.name,
  });

  UI.setHTML({
    selector: elements.profileBio,
    val: maverick.bioHTML,
  });

  maverick.repoList.forEach(repo => {
    elements.repoList.insertAdjacentHTML(
      'beforeend',
      repoItemMarkup({
        descriptionHTML: repo.node.descriptionHTML,
        languages: repo.node.languages,
        forkCount: repo.node.forkCount,
        updatedAt: repo.node.updatedAt,
        licenseInfo: repo.node.licenseInfo,
        name: repo.node.name,
        stargazerCount: repo.node.stargazerCount,
        url: repo.node.url,
      }),
    );
  });

  // Mobile menu
  elements.hamburgerBtn?.addEventListener('click', () => {
    elements?.siteHeader?.classList.toggle('multi-rows');
    elements?.mainNav?.classList.toggle('main-nav__hidden');
    elements?.searchForm?.classList.toggle('search-form__hidden');
  });
})();
