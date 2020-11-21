/**
 * A user model class
 */
class User {
  constructor({ username, name, avatarUrl, bioHTML, repoList }) {
    this.username = username;
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.bioHTML = bioHTML;
    this.repoList = repoList;
  }
}

/**
 * Class to help replace single or
 * multi elements text, HTML
 * content or attributes
 **/
class UI {
  /**
   * Change text for a single DOM element
   * or entire NodeList (multiple selections)
   * @param {string} selector A single DOM Element or NodeList,
   * a NodeList will replace all element's in the list's text.
   * @param {string} val Value to replace text
   * @static
   */
  static setText({ selector, val }) {
    try {
      // Set text if selector is an iterable
      if (typeof selector[Symbol.iterator] === 'function') {
        return [...selector].forEach(el => (el.innerText = val));
      }
      // Else set text for single selector
      selector.innerText = val;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Change HTML attribute for a single element
   * @param {string} selector A single DOM Element
   * @param {string} val Attribute's new value
   * @param {string} attr Attribute to change
   * @static
   */
  static setAttr({ selector, attr, val }) {
    try {
      [...selector].forEach(el => {
        el.setAttribute(attr, val);
      });
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Change HTML content for a single element
   * @param {string} selector A single DOM Element
   * @param {string} val new HTML to replace old content
   * @static
   */
  static setHTML({ selector, val }) {
    try {
      selector.innerHTML = val;
    } catch (err) {
      console.log(err);
    }
  }
}
