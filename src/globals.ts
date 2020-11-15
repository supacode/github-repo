export const elements = {
  repoList: document.querySelector('.repo__list'),
  profileBio: document.querySelector('.profile__bio'),
  profileAvatar: document.querySelector('.profile__avatar--img'),
  profileName: document.querySelector('.profile__name--name'),
  profileUsername: document.querySelector('.profile__name--username'),
  profileThumb: document.querySelector('.user-menu__avatar'),
  hamburgerBtn: document.querySelector('.hamburger__btn'),
  mainNav: document.querySelector('.main-nav'),
  searchForm: document.querySelector('.search-form'),
  siteHeader: document.querySelector('.header'),
  userMenuName: document.querySelector('.user-menu__username'),
  mainNavAvatar: document.querySelector('.main-nav__avatar'),
};

export const query = (username: string): string => {
  return `
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
}
`;
};
// export const query = (username: string): string => {
//   return `
//   query {
//     viewer {
//       login
//       repositories(privacy: PUBLIC, last: 20) {
//       edges {
//         node {
//           id
//           name
//           descriptionHTML
//           updatedAt
//           forkCount
//           stargazerCount
//           languages(first: 1) {
//             nodes {
//               color
//               name
//             }
//           }
//           licenseInfo {
//             name
//           }
//           url
//         }
//       }
//     }
//     url
//   }
//   user(login: "${username}") {
//     bioHTML
//     avatarUrl
//     name
//     login
//   }
// }
// `;
// };

export const getData = async (params: {
  fetchUrl: string;
  oauth_token: string;
  username: string;
}): Promise<any> => {
  try {
    const res = await fetch(params.fetchUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${params.oauth_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: query(params.username) }),
    });

    const {
      data: {
        user,
        viewer: {
          repositories: { edges: repoList },
        },
      },
    } = await res.json();

    return { user, repoList };
  } catch (err) {
    throw new Error(err);
  }
};
