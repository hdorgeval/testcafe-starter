export interface IConfig {
  url: string;
  user: IUserInfo;
  testcafe: ITestcafeOptions;
}

export interface ITestcafeOptions {
  testSpeed: number;
}
export interface IUserInfo {
  name: string;
  login?: string;
  password?: string;
}
