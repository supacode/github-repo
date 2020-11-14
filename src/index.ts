const API_URL = 'https://api.github.com/graphql';
const OAUTH_TOKEN = '';

import { getData } from './globals';
import { UI } from './classes';

(async () => {
  const { user, repoList } = await getData({
    fetchUrl: API_URL,
    oauth_token: OAUTH_TOKEN,
    username: 'supacodes',
  });

  new UI(repoList);
})();
