class User {
  constructor({ username, name, avatarUrl, bioHTML, repoList }) {
    this.username = username;
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.bioHTML = bioHTML;
    this.repoList = repoList;
  }
}

class UI {
  static setText({ selector, val }) {
    if (!selector) return false;

    // Set text if selector is an iterable
    try {
      if (typeof selector[Symbol.iterator] === 'function') {
        return [...selector].forEach(el => (el.innerText = val));
      }
      // Else set text for single selector
      selector.innerText = val;
    } catch (err) {
      console.log(err);
    }
  }

  static setAllText({ selector, val }) {
    [...selector].forEach(el => (el.innerText = val));
  }

  static setAttr({ selector, attr, val }) {
    selector.setAttribute(attr, val);
  }

  static setAttr({ selector, attr, val }) {
    [...selector].forEach(el => {
      el.setAttribute(attr, val);
    });
  }

  static setHTML({ selector, val }) {
    selector.innerHTML = val;
  }
}
