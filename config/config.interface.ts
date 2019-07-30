import { EnvInfo } from './environments';
import { UserInfo } from './personas';

export interface Config {
  env?: EnvInfo;
  user?: UserInfo;
  testSpeed: number;
  timeout: Timeout;
  showConfig: boolean;
}

export interface Timeout {
  [index: string]: number;
  longTimeout: number;
  shortTimeout: number;
}

export interface ParsedConfig {
  env?: EnvInfo;
  user?: UserInfo;

  testSpeed?: number;
  timeout?: Partial<Timeout>;
  showConfig?: boolean;
}
