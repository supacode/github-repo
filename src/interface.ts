export interface IRepo {
  node: {
    name: string;
    descriptionHTML: string;
    updatedAt: Date;
    languages: {
      nodes: [{ color: string; name: string }];
    };
    licenseInfo: {
      name: string;
    };
    forkCount: number;
    stargazerCount: number;
    url: string;
  };
}

export interface IUser {
  avatarUrl: string;
  name: string;
  login: string;
  bioHTML: string;
}
