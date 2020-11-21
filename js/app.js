'use strict';

const OAUTH_TOKEN = '';

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
  const { userData } = await getData();

  /* 2. Init models */
  const maverick = new User({
    avatarUrl: userData.avatarUrl,
    username: userData.login,
    name: userData.name,
    bioHTML: userData.bioHTML,
    repoList: userData.repoList,
  });

  /* 2. Delegation */

  UI.setAllText({
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

  UI.setAllText({
    selector: elements.profileName,
    val: maverick.name,
  });

  UI.setHTML({
    selector: elements.profileBio,
    val: maverick.bioHTML,
  });
})();
