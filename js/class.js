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
  // Utility method to validate DOM selections, almost like a decorator

  static setText({ selector, val }) {
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
    try {
      [...selector].forEach(el => (el.innerText = val));
    } catch (err) {
      console.log(err);
    }
  }

  static setAttr({ selector, attr, val }) {
    try {
      selector.setAttribute(attr, val);
    } catch (err) {
      console.log(err);
    }
  }

  static setAttr({ selector, attr, val }) {
    try {
      [...selector].forEach(el => {
        el.setAttribute(attr, val);
      });
    } catch (err) {
      console.log(err);
    }
  }

  static setHTML({ selector, val }) {
    try {
      selector.innerHTML = val;
    } catch (err) {
      console.log(err);
    }
  }

  static appendList({ selector, data, position }) {
    data.forEach(el => {
      selector.insertAdjacentHTML(position, data);
    });
  }
}
