import { IEnvInfo } from './environments';
import { IUserInfo } from './personas';

export interface IConfig {
  env?: IEnvInfo;
  user?: IUserInfo;
  testSpeed: number;
  timeout: ITimeout;
  showConfig: boolean;
}

export interface ITimeout {
  [index: string]: number;
  longTimeout: number;
  shortTimeout: number;
}

export interface IParsedConfig {
  env?: IEnvInfo;
  user?: IUserInfo;

  testSpeed?: number;
  timeout?: Partial<ITimeout>;
  showConfig?: boolean;
}
