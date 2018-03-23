import { IEnvInfo } from "./environments";
import { IUserInfo } from "./personas";

export interface IConfig {
  env: IEnvInfo;
  user: IUserInfo;
  testcafe: ITestcafeOptions;
}

export interface ITestcafeOptions {
  testSpeed: number;
  timeout: ITimeout;
}

export interface ITimeout {
  [index: string]: number;
  longTimeout: number;
  shortTimeout: number;
}
