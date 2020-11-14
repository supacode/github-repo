"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var GITHUB_KEY_URL = 'https://api.github.com/graphql';
var OAUTH_TOKEN = 'MY_AUTH_TOKEN';
var username = '';
var query = "\n  query {\n    viewer {\n      login\n      repositories(privacy: PUBLIC, last: 20) {\n      edges {\n        node {\n          id\n          name\n          descriptionHTML\n          updatedAt\n          forkCount\n          stargazerCount\n          languages(first: 1) {\n            nodes {\n              color\n              name\n            }\n          }\n          licenseInfo {\n            name\n          }\n          url\n        }\n      }\n    }\n    url\n  }\n  user(login: \"" + username + "\") {\n    bioHTML\n    avatarUrl\n  }\n}\n";
var elements = {
    repoList: document.querySelector('.repo__list'),
};
var UI = /** @class */ (function () {
    function UI(data) {
        this.data = data;
    }
    UI.prototype.appendList = function () {
        var _this = this;
        this.data.forEach(function (el) {
            // console.log(el);
            var _a;
            (_a = elements.repoList) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterbegin', "<p>" + _this.markup(el) + "</p>");
        });
    };
    UI.prototype.markup = function (_a) {
        var _b, _c;
        var _d = _a.node, descriptionHTML = _d.descriptionHTML, forkCount = _d.forkCount, licenseInfo = _d.licenseInfo, name = _d.name, language = _d.languages.nodes, stargazerCount = _d.stargazerCount, updatedAt = _d.updatedAt, url = _d.url;
        return "<div class=\"repo\">\n            <h2 class=\"repo__name\">\n              <a href=\"" + url + "\" rel=\"noreferrer\" target=\"_blank\"> " + name + " </a>\n            </h2>\n\n            <p class=\"repo__desc\">\n              " + descriptionHTML + "\n            </p>\n\n            <ul class=\"repo__info\">\n\n            " + (((_b = language[0]) === null || _b === void 0 ? void 0 : _b.color) && ((_c = language[0]) === null || _c === void 0 ? void 0 : _c.color)
            ? "\n            <li>\n            <span \n              class=\"repo__tag\"\n              style=\"background-color: " + language[0].color + "\">\n            </span>\n            <span>" + language[0].name + "</span>\n          </li>"
            : '') + "\n              \n                " + (stargazerCount > 0
            ? "\n                <li>\n                <a href=\"#\">\n                  <span class=\"repo__icon\">\n                    <svg\n                      viewBox=\"0 0 16 16\"\n                      version=\"1.1\"\n                      width=\"16\"\n                      height=\"16\"\n                      role=\"img\"\n                    >\n                      <path\n                        fill-rule=\"evenodd\"\n                        d=\"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z\"\n                      ></path>\n                    </svg>\n                  </span>\n                  <span>" + stargazerCount + "</span>\n                </a>\n              </li>\n                "
            : '') + "\n              \n\n            " + (forkCount > 0
            ? "\n              <li>\n                <a href=\"#\">\n                  <span class=\"repo__icon\">\n                    <svg\n                      viewBox=\"0 0 16 16\"\n                      version=\"1.1\"\n                      width=\"16\"\n                      height=\"16\"\n                      role=\"img\"\n                    >\n                      <path\n                        fill-rule=\"evenodd\"\n                        d=\"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z\"\n                      ></path>\n                    </svg>\n                  </span>\n                  <span>" + forkCount + "</span>\n                </a>\n                </li>"
            : '') + "\n\n\n              " + ((licenseInfo === null || licenseInfo === void 0 ? void 0 : licenseInfo.name) ? "\n                <li>\n                  <span class=\"repo__icon\">\n                  <svg\n                    viewBox=\"0 0 16 16\"\n                    version=\"1.1\"\n                    width=\"16\"\n                    height=\"16\"\n                    aria-hidden=\"true\"\n                  >\n                    <path\n                      fill-rule=\"evenodd\"\n                      d=\"M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z\"\n                    ></path>\n                  </svg>\n                </span>\n                <span>" + licenseInfo.name.split(' ')[0] + "</span>\n              </li>"
            : '') + "\n\n\n              <li title=\"" + updatedAt + "\">Updated on " + new Date(updatedAt).toLocaleDateString('en-us', { month: 'long', year: 'numeric' }) + "</li>\n            </ul>\n          </div>\n    ";
    };
    return UI;
}());
var getData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, _a, user, repoList, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(GITHUB_KEY_URL, {
                        method: 'POST',
                        headers: {
                            Authorization: "Bearer " + OAUTH_TOKEN,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ query: query }),
                    })];
            case 1:
                res = _b.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                _a = (_b.sent()).data, user = _a.user, repoList = _a.viewer.repositories.edges;
                return [2 /*return*/, { user: user, repoList: repoList }];
            case 3:
                err_1 = _b.sent();
                throw new Error(err_1);
            case 4: return [2 /*return*/];
        }
    });
}); };
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, user, repoList, ui;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getData()];
            case 1:
                _a = _b.sent(), user = _a.user, repoList = _a.repoList;
                ui = new UI(repoList);
                ui.appendList();
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=app.js.map