export interface Repo {
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
