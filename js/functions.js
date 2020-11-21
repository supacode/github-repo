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

const repoItemMarkup = ({
  descriptionHTML,
  forkCount,
  licenseInfo,
  name,
  languages: { nodes: language },
  stargazerCount,
  updatedAt,
  url,
}) => {
  const markup = '';

  return `<div class="repo">
              <div class="repo__item">
              <div>
              <h2 class="repo__name">
                <a href="${url}" rel="noreferrer" target="_blank"> ${name} </a>
              </h2>
              <div class="repo__desc">
                ${descriptionHTML}
              </div>
              </div>
              <button class="btn">
                    <span>
                      ${icons.stargazersIcon} 
                    </span>
                    <span>
                      Star
                    </span>
              </button>
              </div>
              <ul class="repo__info">
              ${
                language[0]?.color && language[0]?.color
                  ? `
              <li>
              <span 
                class="repo__tag"
                style="background-color: ${language[0].color}">
              </span>
              <span>${language[0].name}</span>
            </li>`
                  : ''
              }
                  ${
                    stargazerCount > 0
                      ? `
                  <li>
                  <a href="#">
                    <span class="repo__icon">
                      ${icons.stargazersIcon}
                    </span>
                    <span>${stargazerCount}</span>
                  </a>
                </li>
                  `
                      : ''
                  }
              ${
                forkCount > 0
                  ? `
                <li>
                  <a href="#">
                    <span class="repo__icon">
                     ${icons.forkIcon}
                    </span>
                    <span>${forkCount}</span>
                  </a>
                  </li>`
                  : ''
              }
                ${
                  licenseInfo?.name
                    ? `
                  <li>
                    <span class="repo__icon">
                    ${icons.licenseIcon}
                  </span>
                  <span>${licenseInfo.name.split(' ')[0]}</span>
                </li>`
                    : ''
                }
                <li title="${updatedAt}">Updated on 
                    ${new Date(updatedAt).toLocaleDateString('en-us', {
                      month: 'long',
                      year: 'numeric',
                    })}</li>
              </ul>
            </div>`;
};
