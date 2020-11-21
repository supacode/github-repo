/**
 * Fetch GraphQL data from Github API
 * @param {string} username
 */
const getData = async username => {
  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OAUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: query(username) }),
    });

    const {
      data: {
        user,
        user: {
          repositories: { edges: repositories },
        },
      },
    } = await res.json();

    return { ...user, repositories };
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
