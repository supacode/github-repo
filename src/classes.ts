import icons from './icons';
import { elements } from './globals';
import { IUser, IRepo } from './interface';

export class UI {
  constructor(private data: IRepo[], private user: IUser) {
    this.appendRepoList();
    this.renderUserMarkup(this.user);
  }

  public appendRepoList(): void {
    this.data.forEach(el => {
      elements.repoList?.insertAdjacentHTML(
        'afterbegin',
        `<p>${this.repoListMarkup(el)}</p>`,
      );
    });
  }

  private renderUserMarkup(user: IUser) {
    const bioEl = elements.profileBio as HTMLParagraphElement;
    const avatarEl = elements.profileAvatar as HTMLImageElement;
    const usernameEl = elements.profileUsername as HTMLHeadingElement;
    const nameEl = elements.profileName as HTMLHeadElement;
    const profileThumb = elements.profileThumb as HTMLImageElement;

    avatarEl.src = user.avatarUrl;
    profileThumb.src = user.avatarUrl;

    avatarEl.alt = `Picture of ${user.name || user.login}`;
    usernameEl.textContent = user.login;
    nameEl.textContent = user.name;
    bioEl.innerHTML = `<span>${user.bioHTML}</span>`;
  }

  private repoListMarkup({
    node: {
      descriptionHTML,
      forkCount,
      licenseInfo,
      name,
      languages: { nodes: language },
      stargazerCount,
      updatedAt,
      url,
    },
  }: IRepo) {
    return `<div class="repo">


              <div>
              <h2 class="repo__name">
                <a href="${url}" rel="noreferrer" target="_blank"> ${name} </a>
              </h2>
              
              <div class="repo__desc">
                ${descriptionHTML}
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
              </div>
                  
              <button class="btn">
                    <span>
                      ${icons.stargazersIcon} 
                    </span>
                    <span>
                      Star
                    </span>
              </button>

            </div>`;
  }
}
