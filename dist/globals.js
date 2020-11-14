"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
exports.query = function (username) {
    return "\n  query {\n    viewer {\n      login\n      repositories(privacy: PUBLIC, last: 20) {\n      edges {\n        node {\n          id\n          name\n          descriptionHTML\n          updatedAt\n          forkCount\n          stargazerCount\n          languages(first: 1) {\n            nodes {\n              color\n              name\n            }\n          }\n          licenseInfo {\n            name\n          }\n          url\n        }\n      }\n    }\n    url\n  }\n  user(login: \"" + username + "\") {\n    bioHTML\n    avatarUrl\n  }\n}";
};
//# sourceMappingURL=globals.js.map