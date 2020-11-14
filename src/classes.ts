import icons from './icons';
import { elements } from './globals';
import { Repo } from './interface';

export class UI {
  constructor(private data: Repo[]) {
    this.appendRepoList();
  }

  public appendRepoList(): void {
    this.data.forEach(el => {
      elements.repoList?.insertAdjacentHTML(
        'afterbegin',
        `<p>${this.repoListMarkup(el)}</p>`,
      );
    });
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
  }: Repo) {
    return `<div class="repo">
              <h2 class="repo__name">
                <a href="${url}" rel="noreferrer" target="_blank"> ${name} </a>
              </h2>
              <p class="repo__desc">
                ${descriptionHTML}
              </p>
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
  }
}
