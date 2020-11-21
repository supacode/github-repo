const query = username => `
query {
  viewer {
    login
    repositories(privacy: PUBLIC, last: 20) {
    edges {
      node {
        id
        name
        descriptionHTML
        updatedAt
        forkCount
        stargazerCount
        languages(first: 1) {
          nodes {
            color
            name
          }
        }
        licenseInfo {
          name
        }
        url
      }
    }
  }
  url
}
user(login: "${username}") {
  bioHTML
  avatarUrl
  name
  login
}
}`;

const getData = async url => {
  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OAUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: query('supacodes') }),
    });

    const {
      data: {
        user: userData,
        viewer: {
          repositories: { edges: repoList },
        },
      },
    } = await res.json();

    userData.repoList = repoList;
    return { userData };
  } catch (err) {
    console.log(err);
  }
};
