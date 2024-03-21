export enum AppType {
  home = "home",
  app = "app",
  user = "user",
}

export type Application = {
  name: string;
  activeWhen: string;
  remoteEntry: {
    url: string;
    scope: string;
    module: string;
    type?: "webpack" | "module";
  };
  label: string;
  route: string;
  type: AppType;
};
