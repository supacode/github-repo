/**
 * GraphQL query
 * @param {string} username
 */
const query = username =>
  `{
    user(login: "${username}") {
      avatarUrl
      login
      bioHTML
      name
      repositories(privacy: PUBLIC, last: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
        edges {
          node {
            id
            name
            descriptionHTML
            updatedAt
            url
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
              id
            }
            watchers {
              totalCount
            }
            forks {
              totalCount
            }
          }
        }
      }
      url
    }
}`;
