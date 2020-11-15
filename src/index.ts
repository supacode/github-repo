const API_URL = 'https://api.github.com/graphql';
const OAUTH_TOKEN = '8b2618aa2e4ec6b893912243de5e487b55ce58ba';

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
