const API_URL = 'https://api.github.com/graphql';
const OAUTH_TOKEN = '9a43860637e87360b9256ed06b89f285b164b842';

import { getData, elements } from './globals';
import { UI } from './classes';

(async () => {
  const { user, repoList } = await getData({
    fetchUrl: API_URL,
    oauth_token: OAUTH_TOKEN,
    username: 'supacodes',
  });

  new UI(repoList, user);
})();

elements.hamburgerBtn?.addEventListener('click', e => {
  e.preventDefault();

  const { mainNav, siteHeader, searchForm } = elements;

  siteHeader?.classList.toggle('multi-rows');
  mainNav?.classList.toggle('main-nav__hidden');
  searchForm?.classList.toggle('search-form__hidden');
});
